import { $ } from '@wdio/globals'

class LoginPage {

    public get inputUsername () {
        return $('#username')
    }

    public get inputPassword () {
        return $('#password')
    }

    public get inputAge () {
        return $('#age')
    }

    public get btnSubmit () {
        return $('button[type="submit"]')
    }

    public async login (username: string, password: string, age: string) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.inputAge.setValue(age)
        await this.btnSubmit.click()
    }

}

export default new LoginPage()
