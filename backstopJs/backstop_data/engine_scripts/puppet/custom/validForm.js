
module.exports = async page => {
    await page.type("#first-name","John")
    await page.type("#last-name","Doe")
    await page.type("#email","johndoe@example.com")
    await page.click("#agree")
    await page.waitForTimeout(1000)
}
