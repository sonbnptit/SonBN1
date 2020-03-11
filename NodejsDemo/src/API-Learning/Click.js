describe('API Learning', () => {
    const MAX_WAIT_TIME = 5000;
    let urlBase = "http://the-internet.herokuapp.com";
    let formAuthenLinkText ="=Form Authentication";
    let userNameSelector = '#username';
    let passwordSelector = '#password';
    let loginBtn ='[type="submit"]';
    it('Click link text', () => {
        //open browser
        browser.url(urlBase);
        //click on link text "form authentication"
        browser.pause(MAX_WAIT_TIME);
        $(formAuthenLinkText).click();
        //input username and password
        $(userNameSelector).setValue("username");
        $(passwordSelector).setValue('password');
        //click button Login
        $(loginBtn).click();

        browser.pause(MAX_WAIT_TIME);
    });
});