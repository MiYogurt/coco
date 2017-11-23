import Parse from 'parse'

export function createAPI ({ serverURL, applicationId }) {
    Parse.initialize(applicationId);
    Parse.serverURL = serverURL;
    return Parse
}
