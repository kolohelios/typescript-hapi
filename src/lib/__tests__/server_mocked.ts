import * as Server from '../server'

jest.mock('hapi')

describe('test server', () => {
    test('error in start up', async () => {
        try {
            await Server.init()
        } catch(error) {
            expect(error.message).toBe('error')
        }
    })
})
