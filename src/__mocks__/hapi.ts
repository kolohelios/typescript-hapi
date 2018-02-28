let mockHapi = require.requireActual('hapi')

mockHapi.Server = () => {
    return {
        start: async () => {
            try {
                throw 'error'
            } catch {
                throw 'error'
            }
        },
        route: () => {},
        events: {
            on: () => {},
        },
    }
}

module.exports = mockHapi
