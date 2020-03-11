let LoginPage = require('../PageObject/LoginPage_Type_2');
describe('Page object type 2', () => {
    it('Login to the page', () => {
        let urlBase = "https://the-internet.herokuapp.com/login";
        //open page
        browser.url(urlBase);
        //set credential
        LoginPage.setCreds('sonbn1','son beo');
        //see the result
        LoginPage.waitForUsernameDisplayed();
    });
});