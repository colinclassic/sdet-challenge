# sdet-challenge
An example project for a coding challenge

Main libraries used:

- appium
- webdriverio
- mocha


Assumptions
- The .apk under test is available at the project root.
- Android Studio & Device Manager are already installed.
- NodeJS and npm are already installed.


Install & set up
- All instructions for appium from their [docs](https://appium.io/docs/en/2.1/quickstart/uiauto2-driver/)
- Run `appium driver install uiautomator2` to install driver
- Clone repo & run `npm i` to install all node dependencies
- Update the empty `capabilities` data on file `wdio.conf.ts` to match your system


To run tests
- Start the emulator manually through AVD
- Run `npm run wdio`

