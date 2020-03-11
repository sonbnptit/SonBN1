describe('API Learning', () => {
    const WAIT_TIME =5000;
    let urlBase = "http://the-internet.herokuapp.com/dropdown";
    let dropdownSelector = "#dropdown";
    it('Select by attibute', () => {
        // open url
        browser.url(urlBase);
        //select option 1 from dropdown menu
        $(dropdownSelector).waitForDisplayed(WAIT_TIME);
        browser.pause(WAIT_TIME);
        //select but text
        $(dropdownSelector).selectByVisibleText('Option 1');
        browser.pause(WAIT_TIME);
        //select option 2 from dropdown menu by attribute

        $(dropdownSelector).selectByAttribute('value', '2');
        browser.pause(WAIT_TIME);
        //select option 1 from dropdown menu by index
        $(dropdownSelector).selectByIndex(1);
    });
});