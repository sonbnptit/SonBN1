
describe('API Learning  ', () => {
    const MAX_WAIT_TIME = 5000;
    let urlBase = "http://the-internet.herokuapp.com";
    let formAuthenLinkText ="=Form Authentication";
    let userNameSelector = '#username';
    let passwordSelector = '#password';
    let loginBtn ='[type="submit"]';
    let welcomeText ='h2';
    it('Wait for disappeared', () => {
        //open page
        browser.url(urlBase);
        //click on link text "form authentication"
        browser.pause(MAX_WAIT_TIME);
        $(formAuthenLinkText).click();
        browser.pause(MAX_WAIT_TIME);
        //input username and password
        $(userNameSelector).setValue("tomsmith");
        $(passwordSelector).setValue('SuperSecretPassword!!');
        browser.pause(MAX_WAIT_TIME);       
        //click login button
        $(loginBtn).click();
        //wait ultil login button dissappear
        $(loginBtn).waitForDisplayed(5000,true,'[ERROR] Login process take loger than 5s');
        let text =$(welcomeText).getText();    
        //get h1 text content
        console.log(text);
        browser.pause(5000);
    });
});