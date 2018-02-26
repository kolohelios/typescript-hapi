import * as Hapi from 'hapi'
import Config from './config'

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

const init = async (callback) => {
    try {
        await server.start()
        return callback(null, server)
    } catch (err) {
        return callback(err)
    }
}

server.events.on('log', (event, tags) => {
    const tagsJoined = Object.keys(tags).join()
    const msg = event.data
    console.log(`${new Date().toISOString()} | ${tagsJoined} | ${msg}`)
})

export { init, server }
