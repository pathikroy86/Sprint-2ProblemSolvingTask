//1. Reverse a String
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    return reversed;
}
// const result = reverseString("Pathik");
// console.log(result);

//2. Find Maximum
function findMax(nums) {
    const max = Math.max(...nums);
    return max;
}
// const numbers = [10, 15, 9, 40, 17, 25];
// const max = findMax(numbers);
// console.log(max);

//3. Check for Palindrome
function isPalindrome(str) {
    const arr = str.split('');
    const reversed = arr.reverse();
    const reversedStr = reversed.join('');
    if (str === reversedStr) {
        return true;
    }
    return false;
}
// const result = isPalindrome("raceca");
// console.log(result);

//4. Sum Array Elements
function sumArray(nums) {
    let sum = 0;
    const result = nums.map(
        num => sum = num + sum
    );
    return sum;
}
// const result = sumArray([10, 20, 30, 40]);
// console.log(result)

//5. Count Vowels
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase().split('');
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (lowerStr[i] === vowels[j]) {
                count++;
            }
        }
    }
    return count;
}
// const result = countVowels("javascript");
// console.log(result);

//6. Two Sum
function twoSum(nums, target) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j) {
                continue;
            }
            sum = nums[i] + nums[j];
            if (sum === target) {
                return [i, j];
            }
        }
    }
}
// const result = twoSum([2, 7, 11, 15], 9);
// console.log(result);

//7. Flatten a Nested Array
function flattenArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let flattenedItems = flattenArray(arr[i]);
            result = result.concat(flattenedItems);
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}
// const result = flattenArray([1, [2, [3, 4], 5]]);
// console.log(result)

//8. Group Anagrams
function groupAnagrams(strs) {
    let groups = {};

    for (let i = 0; i < strs.length; i++) {
        let word = strs[i];

        let sortedWord = word.split("").sort().join("");

        if (groups[sortedWord] === undefined) {
            groups[sortedWord] = [];
        }
        groups[sortedWord].push(word);
    }

    let result = [];

    for (let key in groups) {
        result.push(groups[key]);
    }
    return result;
}
// const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
// console.log(groupAnagrams(words));

//9. Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
    let longestLength = 0;

    for (let i = 0; i < s.length; i++) {
        let currentSubstring = "";

        for (let j = i; j < s.length; j++) {
            if (currentSubstring.includes(s[j])) {
                break;
            }

            currentSubstring = currentSubstring + s[j];

            if (currentSubstring.length > longestLength) {
                longestLength = currentSubstring.length;
            }
        }
    }
    return longestLength;
}
const result = lengthOfLongestSubstring("abcabcbb");
console.log(result)

//10. Deep Clone an Object
function deepClone(obj) {
    let clonedObject = {};

    for (let key in obj) {
        let value = obj[key];

        // If the value is another object, clone it again
        if (typeof value === "object" && value !== null) {
            clonedObject[key] = deepClone(value);
        } else {
            clonedObject[key] = value;
        }
    }

    return clonedObject;
}
const original = {
    a: 1,
    b: {
        c: 2
    }
};
const cloned = deepClone(original);
console.log(cloned);