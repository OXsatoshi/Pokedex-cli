import { cleanInput } from "./repl";
import { test, expect, describe } from "vitest";
describe.each([
    {
        input: "  hello  world  ",
        expected: ["hello", "world"],
    },
    {
        input: "  run this or    that   ",
        expected: ["run", "this", "or", "that"],
    },
    {
        input: "",
        expected: ["run", "or", "that"],
    },
    {
        input: "      ",
        expected: [],
    },
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        let actual = cleanInput(input);
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});
