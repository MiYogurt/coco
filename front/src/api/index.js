// this is aliased in webpack config based on server/client build
import { createAPI } from 'create-api'

const api = createAPI({
  serverURL: 'http://parse-server:1337/parse',
  config: {
    applicationId: 'nodelover'
  }
})


export default api
