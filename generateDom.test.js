const genDomModule = require("./generateDom");

describe("Determine whether we generate dom elems properly", () => {
    test("Function generates 4 radio buttons", () => {
        let buttons = genDomModule.radioButtons();
        expect(buttons.length).toBe(4);
    });
    test("Generate all radio buttons", ()=> {
        let buttons = genDomModule.radioButtons();
        let allRadioBtns = true;
        for(let btn in buttons) {
            if(buttons[btn].type !== 'radio') {
                allRadioBtns = false;
            }
        }
        expect(allRadioBtns).toBe(true);
    });
    test('Expect radio button at index 1 to not be checked', () => {
        let buttons = genDomModule.radioButtons();
        expect(buttons[1].checked).toBe(false);
    });
    test("Expect radio btn at index 3 to be checked", () => {
        let buttons = genDomModule.radioButtons();
        expect(buttons[3].checked).toBe(true);
    });
    test("Check if the radio button values are init properly", () => {
        let buttons = genDomModule.radioButtons();
        expect(buttons[1].value).toBe("2");
    });
});