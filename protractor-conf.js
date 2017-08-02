var platforms = {

  mobile: '--window-size=500,800',
  tablet: '--window-size=1024,768',
  desktop: '--window-size=1280,800'

};

exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  capabilities: {
    'browserName': process.env.BROWSER,
    chromeOptions: {
      args: [platforms[process.env.PLATFORM]]
    },
    firefoxOptions: {
      args: [platforms[process.env.PLATFORM]]
    }
  },

  specs: [
    'test/features/*.feature'
  ],

  baseURL: 'http://localhost:8080/',

  onPrepare: function () {
    var chai = require('chai');
    chaiAsPromised = require('chai-as-promised');
    expect = chai.expect;
    chai.use(chaiAsPromised);
  },

  cucumberOpts: {
    require: ['test/step_definitions/*.js', 'test/support/world.js'],
    tags: ['@searchTrue', '@searchFalse', '@login', '@search', '@all'],
  }
};
