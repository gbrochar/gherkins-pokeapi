const pactum = require('pactum');
const { Given, When, Then, Before } = require('@cucumber/cucumber');

let spec = pactum.spec();

Before(() => { spec = pactum.spec(); });

Given('I make a GET request to {string}', function (url) {
  spec.get(url);
});

When('I receive a response', async function () {
  await spec.toss();
});

Then('response should have a status {int}', async function (code) {
  spec.response().should.have.status(code);
});

Then('response should have a json with type {string}', async function (type) {
    spec.response().should.have.jsonLike({
        "types": [{
            "slot": 1,
            "type": {
                "name": type,
            },
        }],
    });
});




















// const assert = require('assert');
// const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
// const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
// const { expect } = require('chai');

// require("chromedriver");

// function isItFriday(today) {
//     return today === "Friday" ? "TGIF" : "Nope";
// }

// Given('today is Sunday', function () {
//   this.today = 'Sunday';
// });

// Given('today is Friday', function () {
//     this.today = 'Friday';
//   });

// When('I ask whether it\'s Friday yet', function () {
//   this.actualAnswer = isItFriday(this.today);
// });

// Then('I should be told {string}', function (expectedAnswer) {
//   assert.strictEqual(this.actualAnswer, expectedAnswer);
// });

// Given('today is {string}', function (givenDay) {
//     this.today = givenDay;
//   });
  
//   When('I ask whether it\'s Friday yet', function () {
//     this.actualAnswer = isItFriday(this.today);
//   });
  
//   Then('I should be told {string}', function (expectedAnswer) {
//     assert.strictEqual(this.actualAnswer, expectedAnswer);
//   });
  


  
//   // driver setup
//   const capabilities = Capabilities.chrome();
//   capabilities.set('chromeOptions', { "w3c": false });
//   const driver = new Builder().withCapabilities(capabilities).build();
  
//   Given('I am on the Google search page', async function () {
//       await driver.get('http://www.google.com');
//   });
  
//   When('I search for {string}', async function (searchTerm) {
//       const element = await driver.findElement(By.name('q'));
//       element.sendKeys(searchTerm, Key.RETURN);
//       element.submit();
//   });
  
//   Then('the page title should start with {string}', {timeout: 60 * 1000}, async function (searchTerm) {
//       const title = await driver.getTitle();
//       const isTitleStartWithCheese = title.toLowerCase().lastIndexOf(`${searchTerm}`, 0) === 0;
//       expect(isTitleStartWithCheese).to.equal(true);
//   });
  
//   AfterAll('end', async function(){
//       await driver.quit();
//   });

// steps.js

// Then('response should have a json with type {string}', function (string) {
//     // Write code here that turns the phrase above into concrete actions
//     return 'pending';
//   });