describe('API Learning', () => {
    const WAITIME =5000;
    let urlBase ="http://the-internet.herokuapp.com/";
    let url;
    let pageTitle;
    it('get Url and Title of page', () => {
        //open url
        browser.url(urlBase);
        //get url page
        browser.pause(WAITIME);
        url = browser.getUrl();
        //get title page
        pageTitle = browser.getTitle();

        console.log(url +"\n"+pageTitle);
    });
});