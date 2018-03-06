import * as Hapi from 'hapi'
import Config from './config'
import "reflect-metadata"
import { createConnection } from 'typeorm'
import { User } from './models/user'

const config = Config()

createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'mypass',
    database: 'typescript-hapi',
    entities: [
        User,
    ],
    synchronize: true,
    logging: false,
})
    .then(async connection => {
        let user = new User()
        user.id = 'jedwards'
        user.cookie = 'some string'

        await connection.manager
            .save(user)
            .then(user => {
                // console.log('User has been saved.')
                console.log(user)
            })
        connection.close()
    })
    .catch(console.error)

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
