describe('API Learning', () => {
    let urlBase ="https://webdriver.io/docs/api.html";
    let editBtn='.edit-page-link.button';
    it('Multiple windows', () => {
        //open url
        browser.url(urlBase);
        browser.maximizeWindow();
        browser.pause(5000);
        //click edit button
        $(editBtn).click();
        //get all current window id
        let arr = browser.getWindowHandles();
        console.log(arr)
        browser.pause(5000);

        //switch to second window
        let firstWindowID = arr[0];
        let secondWindowID = arr[1];
        //print 2nd window title
        browser.switchToWindow(secondWindowID);
        let secondTitle = browser.getTitle();

        console.log("Second title "+secondTitle);
        browser.pause(5000);
        //swith to the 1st windows
        browser.switchToWindow(firstWindowID);
        browser.pause(5000);
        //print 1st window title
        let firstTitle = browser.getTitle();
        console.log("1ST title "+firstTitle);
        browser.pause(5000);
    });
});