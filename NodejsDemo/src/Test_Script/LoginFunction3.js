let LoginPage = require('../PageObject/LoginPage_Type_3');
let test_data = require('../test-data/TC_001');
//let WelcomePage = require('../PageObject/Welcome');

const invalidLoginData = test_data.INVALID_LOGIN_PASSWORD;
describe('Login Function', () => {

    before(() => {
        //
        console.log('Start TESTING.........');
        LoginPage.openTestingPage('/login');
        browser.pause(3000);
    });

    it('Login Fail Password', () => {
        LoginPage.inputUsername(invalidLoginData.username)
                 .inputPassword(invalidLoginData.password)
                 .clickLoginBtn();
        browser.pause(3000);
        LoginPage.verifyInvalidPasswordText();
    });

    after(() => {
        console.log(' => TESTING Done');
    });
});