// const arr = [1, 3, 53, 53, 1, 23, 3, 53, 53, 1, 23, 3];
// const m = 3;

// const split = Math.round(arr.length / m);
// const splitArraySum = [];
// let add = 0;

// for (let i = 0, j = 1; i < arr.length; i++) {
// 	add += arr[i];

// 	if (j === split) {
// 		splitArraySum.push(add);
// 		add = 0;
// 		j = 0;
// 	}
// 	j++;
// }
// splitArraySum.push(add);

// console.log({ split });
// console.log({ splitArraySum });
// console.log({ length: arr.length });

var splitArray = function (nums, m) {
    const split = Math.round(nums.length / m);
    const splitArraySum = [];
    let add = 0;

    console.log({ test: m * split });

    console.log({ length: nums.length });
    console.log({ split });

    for (let i = 0, j = 1; i < nums.length; i++) {
        add += nums[i];

        if (j === split) {
            splitArraySum.push(add);
            add = 0;
            j = 0;
        }
        j++;
    }
    splitArraySum.push(add);

    console.log({ splitArraySum });

    return Math.max(...splitArraySum);
};

const result = splitArray([10, 5, 13, 4, 8, 4, 5, 11, 14, 9, 16, 10, 20, 8], 8);
// 10, 5, 13, 4, 8, 4, 5, 11, 14, 9, 16, 10, 20, 8
// [[10, 5], [13, 4], [8, 4], [5, 11], [14, 9], [16, 10], [20, 8], []];

console.log({ result });
// 25
// 28

// [7, 2, 5, 10, 8, 3, 53, 53, 53, 522, 1, 23, 64, 64, 64, 74, 7, 4];
// 6;
// Output;
// 546;
// Expected;
// 522;
