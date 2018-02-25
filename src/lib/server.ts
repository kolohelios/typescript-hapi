import * as Hapi from 'hapi'
import Config from './config'

const config = Config();
const isDevelopment = config.NODE_ENV === 'development'

const server = new Hapi.Server({
    port: config.PORT,
    debug: {
        request: isDevelopment ? [ 'received' ] : []
    },
})

server.route({
    method: 'GET',
    path: '/{name*}',
    handler: (request) => {
        server.log(['/name'], request.params.name + ' requested the hello page!')

        return `Hello, ${request.params.name}`
    }
})

async function startServer() {
    try {
        await server.start()
            console.log(`Server is running with environment ${config.NODE_ENV} at ${server.info.uri}`)
    } catch (err) {
        console.log(err)
    }
}

server.events.on('log', (event, tags) => {
    const tagsJoined = Object.keys(tags).join()
    const msg = event.data
    console.log(`${new Date().toISOString()} | ${tagsJoined} | ${msg}`)
})

export default startServer
