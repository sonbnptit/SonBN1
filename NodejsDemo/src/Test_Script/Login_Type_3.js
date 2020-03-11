let LoginPage = require('../PageObject/LoginPage_Type_3');

describe('Page Object Type 3', () => {
    it('Login to the page', () => {

        LoginPage.openTestingPage('/login');
        browser.pause(3000);
        LoginPage.inputUsername('sonbn1')
                 .inputPassword('pass')
                 .clickLoginBtn();
        browser.pause(3000);
        LoginPage.waitForUsernameDisplayed(5000);
    });

    
});