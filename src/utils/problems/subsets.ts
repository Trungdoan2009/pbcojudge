import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeSubsetsJS = `function subsets(nums) {
  // Write your code here
};`;

const starterCodeSubsetsCPP = `class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        // Write your code here
    }
};`;

const starterCodeSubsetsPython = `class Solution(object):
    def subsets(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """`;

const handlerSubsets = (fn: any) => {
    // fn is the callback that user's code is passed into
    try {
        const testCases = [
            [1, 2, 3],
            [0],
        ];

        const expectedResults = [
            [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]], // All possible subsets for [1, 2, 3]
            [[], [0]]  // All possible subsets for [0]
        ];

        // Function to compare if two arrays of arrays are equal
        const arraysEqual = (arr1: any[], arr2: any[]) => {
            if (arr1.length !== arr2.length) return false;
            for (let i = 0; i < arr1.length; i++) {
                if (!arr1[i].every((val: any, index: number) => val === arr2[i][index])) {
                    return false;
                }
            }
            return true;
        };

        // loop all tests to check if the user's code is correct
        for (let i = 0; i < testCases.length; i++) {
            // result is the output of the user's function and answer is the expected output
            const result = fn(testCases[i]);
            assert.ok(arraysEqual(result.sort(), expectedResults[i].sort())); // Sort for unordered comparison
        }
        return true;
    } catch (error: any) {
        console.log("subsets handler function error");
        throw new Error(error);
    }
};

export const subsets: Problem = {
    id: "subsets",
    title: "9. Subsets",
    problemStatement: `<p class='mt-3'>
  Given an integer array <code>nums</code> of unique elements, return all possible subsets (the power set).
</p>
<p class='mt-3'>
  The solution set must not contain duplicate subsets. Return the solution in any order.
</p>`,
    examples: [
        {
            id: 1,
            inputText: "nums = [1,2,3]",
            outputText: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
            explanation: "All possible subsets for [1, 2, 3].",
        },
        {
            id: 2,
            inputText: "nums = [0]",
            outputText: "[[],[0]]",
            explanation: "All possible subsets for [0].",
        }
    ],
    constraints: `<li class='mt-2'>
  <code>1 ≤ nums.length ≤ 10</code>
</li> <li class='mt-2'>
  <code>-10 ≤ nums[i] ≤ 10</code>
</li> <li class='mt-2'>
  <code>All the numbers of nums are unique.</code>
</li>`,
    handlerFunction: handlerSubsets,
    starterCodeJS: starterCodeSubsetsJS,
    order: 9,
    starterFunctionName: "function subsets(",
};
