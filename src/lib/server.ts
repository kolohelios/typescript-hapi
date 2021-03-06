import * as Hapi from 'hapi'
import Config from './config'
import * as typeorm from './plugins/typeorm'
import { User } from './models/user'

const config = Config()

// TODO deal with typings issue with Hapi.Server no longer being a constructor
const server = Hapi.Server({
    port: config.PORT,
    debug: {
        request: [ 'received' ]
    },
    app: {
        environment: config.NODE_ENV
    }
})

server.route({
    method: 'GET',
    path: '/{name*}',
    handler: (request) => {
        server.log(['/name'], request.params.name + ' requested the hello page!')

        return `Hello, ${request.params.name}`
    }
})

const init = async () => {
    const connection = await typeorm.init()

    let user = new User()
    user.id = 'jedwards'
    user.cookie = 'some string'

    await connection.manager
        .save(user)
        .then(user => {
            console.log('User has been saved:', user)
        })
    connection.close()

    try {
        await server.start()
        console.log('--------------------------------------------------------------------------------');
        console.log('Hapi:\n', server.info.uri);
        console.log('Environment:\n', server.settings.app.environment);
        console.log('--------------------------------------------------------------------------------');
    } catch (err) {
        throw new Error(err)
    }
}

server.events.on('log', (event, tags) => {
    const tagsJoined = Object.keys(tags).join()
    const msg = event.data
    console.log(`${new Date().toISOString()} | ${tagsJoined} | ${msg}`)
})

export { init, server }
