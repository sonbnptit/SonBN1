describe('API Learning', () => {
    const WAIT_TIME =5000;
    let urlBase = "http://the-internet.herokuapp.com/dropdown";
    let dropdownSelector = "#dropdown";
    let field = 'h3';
    it('Get text API', () => {
        //open url
        browser.url(urlBase);
        //get text
        let result = $(field).getText();
        console.log(result);
    });
});