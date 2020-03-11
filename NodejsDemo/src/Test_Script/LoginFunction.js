let LoginPage = require('../PageObject/LoginPage_Type_3');
let test_data = require('../test-data/TC_001');
let WelcomePage = require('../PageObject/Welcome');

const validLoginData = test_data.VALID_LOGIN_CRED;
const invalidLoginData = test_data.INVALID_LOGIN_CRED;
describe('Login Function', () => {

    before(() => {
        //
        console.log('Start TESTING.........');
        LoginPage.openTestingPage('/login');
        browser.pause(3000);
    });

    // beforeEach(() => {
    //     console.log('\t Before Script');
    // });

    // afterEach(() => {
    //     console.log('\t After Script');
    // });
    // it('Login Fail', () => {
    //     LoginPage.inputUsername(invalidLoginData.username)
    //              .inputPassword(invalidLoginData.password)
    //              .clickLoginBtn();
    //     browser.pause(3000);
    // });

    it('Login Pass', () => {
        LoginPage.inputUsername(validLoginData.username)
                 .inputPassword(validLoginData.password)
                 .clickLoginBtn();
        browser.pause(3000);
        WelcomePage.verifyWelcomeText();
    });

    after(() => {
        console.log(' => TESTING Done');
    });
});