const validForm = require('./validForm')

module.exports = async page => {
    await validForm(page)
    await page.click('button[type="submit"]')
    await page.waitForTimeout(1000)
}
