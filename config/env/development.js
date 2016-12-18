var port = process.env.PORT;
var ip   = process.env.IP;

module.exports = {
  // Development configuration options
  db: 'mongodb://localhost:27017/mean-book',
  sessionSecret: 'developmentSessionSecret'
};
