import { expect } from '@wdio/globals'
import loginPage from '../pages/login.page'
import welcomePage from '../pages/welcome.page'
import constants from '../data/constants'
import { beforeEach } from 'mocha'

describe('login process', () => {

    beforeEach('reset app', async () => (
        await loginPage.clearFields()
    ))

    it('should error with invalid username', async () => {
        const { password, age } = constants.validData
        const { username } = constants.invalidData

        await loginPage.login(username, password, age)
        const error = await loginPage.getError()
        await expect(error).toEqual(constants.errors.username)
    })

    it('should error with invalid password', async () => {
        const { username, age } = constants.validData
        const { password } = constants.invalidData

        await loginPage.login(username, password, age)
        const error = await loginPage.getError()
        await expect(error).toEqual(constants.errors.password)        
    })

    it('should error with invalid age', async () => {
        const { username, password } = constants.validData
        const { age } = constants.invalidData

        await loginPage.login(username, password, age)
        const error = await loginPage.getError()
        await expect(error).toEqual(constants.errors.age)   
    })

    it('should login with valid credentials', async () => {
        const { username, password, age } = constants.validData

       await loginPage.login(username, password, age)
       const message = await welcomePage.displayMessage.getText()
       await expect(message).toEqual('Welcome ' + username)
   })
})

