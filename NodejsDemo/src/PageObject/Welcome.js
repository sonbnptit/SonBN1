const WELCOME_TEXT =".subheader";
const ERROR_MSG='[ERROR]!: Expect text is not equal Current Text ';
class Welcome{
    waitUntilElementVisible(){

        $(WELCOME_TEXT).waitForDisplayed(15000);
    }
    getWelcomeText(){
        let welcomeText = $(WELCOME_TEXT).getText();
        return welcomeText;
    }

    verifyWelcomeText(){
        let currentWelcomeText = this.getWelcomeText();
        let expectWelcomeText = "Welcome to the Secure Area. When you are done click logout below.";
        expect(currentWelcomeText).to.equal(expectWelcomeText,ERROR_MSG);
    }
}

module.exports = new Welcome();