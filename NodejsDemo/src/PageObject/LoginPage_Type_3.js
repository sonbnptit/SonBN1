const USER_NAME_TXTBX = '#username';
const PASSWORD_TXTBX = '#password';
const LOGIN_BTN = '[type="submit"]';
const LOGIN_ERROR ='#flash';
let LoginBase = require('../PageObject/LoginBase');
class LoginPage extends LoginBase{

    getLoginErrorText(){
        let errorText =  $(LOGIN_ERROR).getText();
        return errorText;
    }

    inputUsername(username){
        $(USER_NAME_TXTBX).setValue(username);
        return this;  //using action chaning
    }
    inputPassword(password){
        $(PASSWORD_TXTBX).setValue(password);
        return this;

    }
    clickLoginBtn(){
        $(LOGIN_BTN).click();
        return this;
    }
    waitForUsernameDisplayed(WAIT_TIME){
        $(USER_NAME_TXTBX).waitForDisplayed(WAIT_TIME);
        return this;
    }

    verifyInvalidUsernameText(){
        let currenErrorText = this.getLoginErrorText();
        let expectedErrorText = "Your username is invalid!";
        expect(currenErrorText).to.include(expectedErrorText);
    }

    verifyInvalidPasswordText(){
        let currenErrorText = this.getLoginErrorText();
        let expectedErrorText ="Your password is invalid!";
        expect(currenErrorText).to.include(expectedErrorText);
    }
}
module.exports = new LoginPage();
