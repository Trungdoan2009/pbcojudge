import assert from "assert";
import { Problem } from "../types/problem";

// Starter code for different languages
const starterCodeLengthOfLastWordJS = `function lengthOfLastWord(s) {
  // Write your code here
};`;

// Handler function for lengthOfLastWord
const handlerLengthOfLastWord = (fn: any) => {
    try {
        const testCases = [
            "Hello World",             // Expected output: 5
            "   fly me   to   the moon  ", // Expected output: 4
            "luffy is still joyboy",   // Expected output: 6
            "   hello   ",             // Expected output: 5
            "singleword"               // Expected output: 10
        ];

        const expectedResults = [
            5,
            4,
            6,
            5,
            10
        ];

        for (let i = 0; i < testCases.length; i++) {
            const result = fn(testCases[i]);
            assert.strictEqual(result, expectedResults[i]);
        }

        return true;
    } catch (error: any) {
        console.log("lengthOfLastWord handler function error");
        throw new Error(error);
    }
};

// Problem definition
export const lengthOfLastWord: Problem = {
    id: "length-of-last-word",
    title: "10. Length of Last Word",
    problemStatement: `<p class='mt-3'>
  Cho một chuỗi <code>s</code> bao gồm các từ và khoảng trắng, trả về độ dài của từ cuối cùng trong chuỗi.
</p>
<p class='mt-3'>
  Một từ là một chuỗi con tối đa bao gồm các ký tự không phải khoảng trắng.
</p>`,
    examples: [
        {
            id: 1,
            inputText: "Hello World",
            outputText: "5",
            explanation: "The last word is 'World' with length 5."
        },
        {
            id: 2,
            inputText: "   fly me   to   the moon  ",
            outputText: "4",
            explanation: "The last word is 'moon' with length 4."
        },
        {
            id: 3,
            inputText: "luffy is still joyboy",
            outputText: "6",
            explanation: "The last word is 'joyboy' with length 6."
        }
    ],
    constraints: `<li class='mt-2'>
  <code>1 ≤ s.length ≤ 10^4</code>
</li>
<li class='mt-2'>
  <code>s</code> consists of only English letters and spaces <code>' '</code>.
</li>
<li class='mt-2'>
  There will be at least one word in <code>s</code>.
</li>`,
    handlerFunction: handlerLengthOfLastWord,
    starterCodeJS: starterCodeLengthOfLastWordJS,
    order: 10,
    starterFunctionName: "function lengthOfLastWord("
};
