describe('API Learning', () => {
    const WAIT_TIME = 2000;
    let urlBase = "http://the-internet.herokuapp.com";
    let jsAlertLinktext ="=JavaScript Alerts";
    let jsConfirm ='[onclick="jsConfirm()"]';
    let alertText;
    it('Alert Handle', () => {
        //open url
        browser.url(urlBase)
        //click on alert js link
        $(jsAlertLinktext).click();
        //get alert content
        browser.pause(WAIT_TIME);
        //click on ok/accept alert
        $(jsConfirm).click();
        browser.pause(WAIT_TIME);
        alertText = browser.getAlertText();
        
        console.log("Alert text: "+alertText);

        browser.acceptAlert();
        browser.pause(WAIT_TIME);

        //click on alert again
        $(jsConfirm).click();
        browser.pause(WAIT_TIME);
        //click on cancel/dismiss alert
        browser.dismissAlert();
        browser.pause(WAIT_TIME);
    });
});