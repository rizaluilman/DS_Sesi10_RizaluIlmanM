const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {

    get fieldUsername () { return $('#user-name'); }
    get fieldPassword () { return $('#password'); }
    get buttonLogin () { return $('#login-button'); }
    errorUser = (dynamicMassage) => { return $(`//h3[text()="${dynamicMassage}"]`) }

    async login (username) {
        await this.fieldUsername.waitForDisplayed({ timeout: 50000 });
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.buttonLogin.click();
    }
    async blankPassword(username) {
        await this.fieldUsername.waitForDisplayed({ timeout: 50000 });
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue("");
        await this.buttonLogin.click();
    }

    async validateErrorUser (message) {
        await this.errorUser(message).waitForDisplayed({ timeout: 30000 });
        await expect(this.errorUser(message)).toBeDisplayed()
    }

    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();