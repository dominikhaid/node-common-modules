/**
 * Contains the role and name of the Element wich should be clicked
 * @typedef {Object} IClickSelector
 * @property {string} role - The role of the traget element "button", "tab", ect..
 * @property {string} name - The textContent of the target element
*/
interface IClickByRoleAndtext {
    role: "alert"|"alertdialog"|"application"|"article"|"banner"|"blockquote"|"button"|"caption"|"cell"|"checkbox"|"code"|"columnheader"|"combobox"|"complementary"|"contentinfo"|"definition"|"deletion"|"dialog"|"directory"|"document"|"emphasis"|"feed"|"figure"|"form"|"generic"|"grid"|"gridcell"|"group"|"heading"|"img"|"insertion"|"link"|"list"|"listbox"|"listitem"|"log"|"main"|"marquee"|"math"|"meter"|"menu"|"menubar"|"menuitem"|"menuitemcheckbox"|"menuitemradio"|"navigation"|"none"|"note"|"option"|"paragraph"|"presentation"|"progressbar"|"radio"|"radiogroup"|"region"|"row"|"rowgroup"|"rowheader"|"scrollbar"|"search"|"searchbox"|"separator"|"slider"|"spinbutton"|"status"|"strong"|"subscript"|"superscript"|"switch"|"tab"|"table"|"tablist"|"tabpanel"|"term"|"textbox"|"time"|"timer"|"toolbar"|"tooltip"|"tree"|"treegrid"|"treeitem",
    name: string
}

/**
 * Contains a given dateTime string and the diff to the acutal dateTime
 * @typedef {Object} IDiffDateToNow
 * @property {string} dateTime - dateTime to compare
 * @property {string} dateTimeNow - actual dateTime
 * @property {string} dateTimeDiff - the diffrence
 */
interface IDiffDateToNow {
    dateTime: string,
    dateTimeNow: string,
    dateTimeDiff: number
}

/**
 * Test data
 * @typedef {Object} TestData - The Data needed for a single test
 * @property {string} title - The title used for testing
 * @property {string} url - Url to go to
 */
interface ITestData {
    title: string;
    url: string;
}