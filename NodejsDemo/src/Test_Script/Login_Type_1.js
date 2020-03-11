let LoginPage_Type_1 = require('../PageObject/LoginPage_Type_1');

describe('Login Type 1', () => {
    let urlBase = "https://the-internet.herokuapp.com/login";
    it('Login to the page', () => {
        browser.url(urlBase);
        LoginPage_Type_1.waitForUsernameDisplayed();
        LoginPage_Type_1.username.setValue('ABC');
        LoginPage_Type_1.password.setValue('123456789');
        //LoginPage_Type_1.loginBtn.click();
        browser.pause(5000);
    });
});
