import * as Hapi from 'hapi'

const port = process.env.PORT || 3000

const server = new Hapi.Server({
    port,
})

async function startServer() {
    try {
        await server.start()
            console.log(`Server is running at ${server.info.uri}`)
    } catch (err) {
        console.log(err)
    }
}

startServer()
