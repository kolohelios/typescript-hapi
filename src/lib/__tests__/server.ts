import * as Server from '../server'

jest.unmock('hapi')

describe('test server', () => {
    test('test endpoint /{*name}', async () => {
        const options = {
            method: 'GET',
            url: '/Jon',
        }

        const response = await Server.server.inject(options)
        const payload = response.payload

        expect(response.statusCode).toBe(200)
        expect(payload).toBe('Hello, Jon')
    })

    test('start and stop server using our init method', async () => {
        try {
            await Server.init()
        } catch(error) {
            expect(error).toBeNull()
        }

        try {
            await Server.server.stop()
        } catch(error) {
            expect(error).toBeNull()
        }
    })
})
