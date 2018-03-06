let mockTypeorm = require.requireActual('typeorm')

mockTypeorm.createConnection = async () => {
    return {
        manager: {
            save: async () => {}
        },
        close: () => {},
    }
}

module.exports = mockTypeorm
