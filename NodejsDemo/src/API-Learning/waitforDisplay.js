describe('Learning API', () => {
    let urlBase = "http://the-internet.herokuapp.com/login";
    let userNameSelector = '#username';
    let passwordSelector = '#password';
    it('Wait for display', () => {
        //open login page
        browser.url(urlBase);
        //wait for username field display
        $(userNameSelector).waitForDisplayed(5000);
        //input username and password
        $(userNameSelector).setValue("username");
        $(passwordSelector).setValue('password');

        browser.pause(5000);
    });
});