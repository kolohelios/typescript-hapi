import "reflect-metadata"
import Config from '../config'
import { createConnection } from 'typeorm'
import { User } from '../models/user'

const config = Config()

// TODO add test for failure
const init: any = async () => {
    return createConnection({
        type: 'mysql',
        host: config.DB_HOST,
        port: 3306,
        username: 'root',
        password: 'mypass',
        database: config.DB_NAME,
        entities: [
            User,
        ],
        synchronize: true,
        logging: false,
    })
        .then(async connection => {
            return connection
        })
        .catch(console.error)
}

export { init }
