import Config from '../index'

const originalConfig = { ...Config() }

describe('test config', () => {
    test('development environment', () => {
        delete process.env.NODE_ENV

        let config = Config()

        expect(config.NODE_ENV).toBe('development')
        expect(config.PORT).toBe(8000)
    })

    test('test environment', () => {
        let config = originalConfig

        expect(config.NODE_ENV).toBe('test')
        expect(config.PORT).toBe(0)
    })


    test('production environment', () => {
        process.env.NODE_ENV = 'production'

        let config = Config()

        expect(config.NODE_ENV).toBe('production')
        expect(config.PORT).toBe(0)
    })
})
