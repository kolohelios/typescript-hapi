import * as Hapi from 'hapi'
import Config from './config'

const config = Config();

const server = new Hapi.Server({
    port: config.PORT
})

async function startServer() {
    try {
        await server.start()
            console.log(`Server is running with environment ${config.NODE_ENV} at ${server.info.uri}`)
    } catch (err) {
        console.log(err)
    }
}

export default startServer
