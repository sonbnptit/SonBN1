describe('API learning', () => {
    let urlBase ="http://the-internet.herokuapp.com/login";
    let usernameSelector ='#username';
    it('get Attribute for username textbox', () => {
        //open target page
        browser.url(urlBase);
        //get all desire attribute
        browser.pause(5000);
        let typeAtt = $(usernameSelector).getAttribute('type');
        let nameAtt = $(usernameSelector).getAttribute('name');
        let idAtt = $(usernameSelector).getAttribute('id');

        console.log(typeAtt);
        console.log(nameAtt);
        console.log(idAtt);
        browser.pause(5000);
    });
});