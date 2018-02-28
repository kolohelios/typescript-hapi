import * as Server from './lib/server'
import * as Hoek from 'hoek'

try {
    Server.init()
} catch (error) {
    Hoek.assert(!error, error)
}
