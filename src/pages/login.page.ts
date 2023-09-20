import { $ } from '@wdio/globals'

class LoginPage {

    public get inputUsername ()  {
        const selector = 'new UiSelector().className("android.widget.EditText").instance(0)'
        return $(`android=${selector}`)
    }

    public get inputPassword () {
        const selector = 'new UiSelector().className("android.widget.EditText").instance(1)'
        return $(`android=${selector}`)
    }

    public get inputAge () {
        const selector = 'new UiSelector().className("android.widget.EditText").instance(2)'
        return $(`android=${selector}`)
    }

    public get btnSubmit () {
        const selector = 'new UiSelector().className("android.widget.Button")'
        return $(`android=${selector}`)
    }

    public get messageError () {
        const selector = 'new UiSelector().className("android.widget.TextView").instance(4)'
        return $(`android=${selector}`)
    }

    public async login (username: string, password: string, age: string) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.inputAge.setValue(age)
        await this.btnSubmit.click()
    }

    public async getError () {
        return await this.messageError.getText()
    }

    public async clearFields () {
        await this.inputUsername.clearValue()
        await this.inputPassword.clearValue()
        await this.inputAge.clearValue()
    }

}

export default new LoginPage()
