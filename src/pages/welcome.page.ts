import { $ } from '@wdio/globals'

class WelcomePage {

    public get displayMessage () {
        const selector = 'new UiSelector().className("android.widget.TextView")'
        return $(`android=${selector}`)
    }

}

export default new WelcomePage()
