import { expect } from '@wdio/globals'
import loginPage from '../pages/login.page'
import welcomePage from '../pages/welcome.page'
import constants from '../data/constants'

describe('login process', () => {
    it('should login with valid credentials', async () => {
         const { username, password, age } = constants.validData
 
        await loginPage.login(username, password, age)
        await expect(welcomePage.displayMessage).toHaveTextContaining(
            'Welcome ' + username)
    })

    it('should error with invalid username', async () => {
        const { password, age } = constants.validData
        const { username } = constants.invalidData

        await loginPage.login(username, password, age)
        expect(loginPage.getError).toEqual(constants.errors.username)
    })

    it('should error with invalid password', async () => {
        const { username, age } = constants.validData
        const { password } = constants.invalidData

        await loginPage.login(username, password, age)
        expect(loginPage.getError).toEqual(constants.errors.password)        
    })

    it('should error with invalid age', async () => {
        const { username, password } = constants.validData
        const { age } = constants.invalidData

        await loginPage.login(username, password, age)
        expect(loginPage.getError).toEqual(constants.errors.age)   
    })
})

