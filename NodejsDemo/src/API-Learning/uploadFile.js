let path =require('path');
describe('API Learning', () => {
    let urlBase ="http://the-internet.herokuapp.com/upload";
    let uploadField ='#file-upload';
    let uploadBtn ='#file-submit';
    let fileUpload = path.join(__dirname,'image_Hoan ung cong no thoi viec.png');
    it('upload file', () => {
        //open url
        browser.url(urlBase);
        //set value file path
        browser.pause(5000);
        $(uploadField).setValue(fileUpload);
        browser.pause(2000);
        //click upload button
        $(uploadBtn).click();
        //see result

        browser.pause(5000);
    });
});