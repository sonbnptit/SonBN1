describe('API learning', () => {
    let urlBase = "http://the-internet.herokuapp.com/";
    let textCSSSelector ='h1';
    it('Check colour', () => {
        //open url
        browser.url(urlBase);
        browser.pause(5000);
        //get color css value
        let color =  $(textCSSSelector).getCSSProperty('color');
        //print css value
        console.log("Color: ",color.parsed.hex);
    });
});