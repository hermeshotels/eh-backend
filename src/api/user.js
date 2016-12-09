import request from 'superagent'
import config from '../../static/config.json'
export default {
  register (payload, callback) {
    request
      .post(config.API_URL + '/api/v1/user/signup')
      .send(payload)
      .end((err, res) => {
        if (err) return callback(err, null)
        return callback(null, res)
      })
  }
}
