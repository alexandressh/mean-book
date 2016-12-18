exports.config = {
  specs: ['public/*[!lib]*/tests/e2e/*.js'],
  chromeDriver: "C:/Users/Henrique/dev/git/mean/chromedriver.exe",
  capabilities: {
      'browserName': 'chrome',
      'chromeOptions': {

      }
    }
}
