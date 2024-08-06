
import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeMergeIntervalsJS = `function mergeIntervals(intervals) {
    // Write your code here
}`;

const handlerMergeIntervals = (fn: any) => {
    try {
        const testCases = [
            {
                input: [[1, 3], [2, 6], [8, 10], [15, 18]],
                output: [[1, 6], [8, 10], [15, 18]],
            },
            {
                input: [[1, 4], [4, 5]],
                output: [[1, 5]],
            },
            {
                input: [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]],
                output: [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]],
            },
        ];

        for (const { input, output } of testCases) {
            const result = fn(input);
            assert.deepStrictEqual(result, output);
        }
        return true;
    } catch (error: any) {
        console.log("mergeIntervals handler function error");
        throw new Error(error);
    }
};

export const mergeIntervals: Problem = {
    id: "merge-intervals",
    title: "56. Merge Intervals",
    problemStatement: `<p class='mt-3'>
        Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.
    </p>`,
    examples: [
        {
            id: 1,
            inputText: "[[1, 3], [2, 6], [8, 10], [15, 18]]",
            outputText: "[[1, 6], [8, 10], [15, 18]]",
            explanation: "Intervals [1, 3] and [2, 6] overlap, so they are merged into [1, 6].",
        },
        {
            id: 2,
            inputText: "[[1, 4], [4, 5]]",
            outputText: "[[1, 5]]",
            explanation: "Intervals [1, 4] and [4, 5] overlap, so they are merged into [1, 5].",
        },
        {
            id: 3,
            inputText: "[[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]",
            outputText: "[[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]",
        },
    ],
    constraints: `<li class='mt-2'>
        <code>1 ≤ intervals.length ≤ 10^4</code>
    </li> <li class='mt-2'>
        <code>intervals[i].length == 2</code>
    </li> <li class='mt-2'>
        <code>-10^4 ≤ starti ≤ endi ≤ 10^4</code>
    </li>`,
    handlerFunction: handlerMergeIntervals,
    starterCodeJS: starterCodeMergeIntervalsJS,
    order: 7,
    starterFunctionName: "function mergeIntervals(",
};
