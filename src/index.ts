import * as Server from './lib/server'
import * as Hoek from 'hoek'

Server.init((err, server) => {
    Hoek.assert(!err, err)
    console.log('--------------------------------------------------------------------------------');
    console.log('Hapi:\n', server.info.uri);
    console.log('Environment:\n', server.settings.app.environment);
    console.log('--------------------------------------------------------------------------------');
})
