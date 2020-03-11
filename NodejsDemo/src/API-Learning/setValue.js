describe('API learning', () => {
    it('input element', () => {
        browser.url("http://the-internet.herokuapp.com/login");
        browser.pause(3000);
        let usernameSelector ="#username";
        let passwordSelector = "#password";
        $(usernameSelector).setValue("abcabc");
        browser.pause(3000);
    });
});