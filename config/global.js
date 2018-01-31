'use strict'

module.exports.mongo={
        url:"'mongodb://localhost",
        bd:'bd1',
        port:'27017'
    }
module.exports.app={
    hostname:(process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'),
    port:( process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080)
}
