import Parse from 'parse/node'

export function createAPI ({ serverURL, applicationId }) {
    Parse.initialize(applicationId, null , 'nodelover');
    Parse.serverURL = 'http://parse-server:1337/parse'
    return Parse
}
