
var config = {
    'port': process.env.port || 3333,
    'database':'mongodb://127.0.0.1:27017/fbbot',                                                  // database connection link
    'superSecret':'itsabotsecret'                                               // key for generating for customer api token

};
config.facebook = {
    appId: process.env.FACEBOOK_APPID || '1244317075594321',
    appSecret: process.env.FACEBOOK_APPSECRET || 'e3d8a1a5d37fbbf0bf0a6723d9fdad51',
    appNamespace: process.env.FACEBOOK_APPNAMESPACE || 'nodescrumptious'
};
module.exports = config;
