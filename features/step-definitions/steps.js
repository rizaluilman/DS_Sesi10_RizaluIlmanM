const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');

Given(/^User on the login page$/, async () =>{
    await LoginPage.open()
})

When(/^User login with "(.*)" credential$/, async (username) =>{
    await LoginPage.login(username)
})
When(/^User login with "(.*)" credential and blank password$/, async (username) =>{
    await LoginPage.blankPassword(username)
})

Then(/^User successfully login and redirect to home page$/, async () =>{
    await HomePage.validateHomePage()
})

Then(/^User not successful login and see error "(.*)"$/, async (massage) =>{
    await LoginPage.validateErrorUser(massage)
})