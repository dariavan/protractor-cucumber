var {defineSupportCode} = require('cucumber');

var PageFactory = require('./pages/pageFactory.js');
function CustomWorld() {
  this.pageFactory = new PageFactory();
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
})

defineSupportCode(function({ setWorldConstructor, setDefaultTimeout }) {
    setWorldConstructor(CustomWorld);
    setDefaultTimeout(60000);
})