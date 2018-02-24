interface Config {
    NODE_ENV: string,
    PORT: number,
}

export default (): Config => {
    const env = process.env.NODE_ENV || 'development'

    const common = {
        NODE_ENV: env,
    }

    const environments = {
        development: {
            PORT: process.env.PORT || 8000,
        },
        test: {
            PORT: process.env.PORT || 0,
        },
        production: {
            PORT: process.env.PORT || 0,
        }
    }

    return Object.assign({}, common, environments[env])
}
