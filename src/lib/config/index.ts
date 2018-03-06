interface Config {
    NODE_ENV: string,
    PORT: number,
    DB_HOST: string,
    DB_NAME: string,
}

export default (): Config => {
    const env = process.env.NODE_ENV || 'development'

    const common = {
        NODE_ENV: env,
        DB_NAME: 'typescript-hapi',
    }

    const environments = {
        development: {
            PORT: process.env.PORT || 8000,
            DB_HOST: process.env.DB_HOST || 'localhost',
        },
        test: {
            PORT: process.env.PORT || 0,
            DB_HOST: process.env.DB_HOST || 'localhost',
        },
        production: {
            PORT: process.env.PORT || 0,
            DB_HOST: process.env.DB_HOST || '',
        }
    }

    return Object.assign({}, common, environments[env])
}
