import { expect } from '@wdio/globals'
import LoginPage from '../pages/login.page'
import loginPage from '../pages/login.page'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {

        await LoginPage.login('tomsmith', 'SuperSecretPassword!', '3')
        await expect(loginPage).toHaveTextContaining(
            'You logged into a secure area!')
    })
})

