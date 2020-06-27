const indexMatchModule = require('./indexMatch');

describe("indexMatch function", () => {
    test("Testing to see if we get 2 from [-6, 0, 2, 40]", () => {
        let harness1 = [-6, 0, 2, 40];
        expect(indexMatchModule.indexMatch(harness1)).toBe(2);
    });
    test("We don't expect to find anything from [1, 5, 7, 8]", () => {
        let harness2 = [1, 5, 7, 8];
        expect(indexMatchModule.indexMatch(harness2)).toBe(false);
    });
    test("Doing a null test", () => {
        expect(indexMatchModule.indexMatch(null)).toBe(false);
    });
    test("Doing a undefined test", () => {
        expect(indexMatchModule.indexMatch(undefined)).toBe(false);
    });
});
