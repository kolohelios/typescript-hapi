import * as Server from '../server'

describe('test server', () => {
    afterAll(async (done) => {
        Server.server.events.on('stop', () => {
            done()
        })

        Server.server.stop()
    })

    test('test endpoint', async () => {
        const options = {
            method: 'GET',
            url: '/Jon',
        }

        const response = await Server.server.inject(options)
        const payload = response.payload

        expect(response.statusCode).toBe(200)
        expect(payload).toBe('Hello, Jon')

        await Server.server.stop()
    })

    test('start and stop server', async () => {
        await Server.init(() => {})
        await Server.server.stop()
    })

    test('error in start up', async () => {
        Server.server.start()

        await Server.init(async (err, server) => {
            expect(err.message).toBe('Cannot start server while it is in initializing phase')
            Server.server.stop()
        })
    })
})
