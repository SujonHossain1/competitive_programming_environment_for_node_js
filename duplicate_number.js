const arr = [1, 3, 4, 2, 2];

var findDuplicate = function (nums) {
	const obj = {};

	for (let i = 0; i < nums.length; i++) {
		const item = nums[i];
		obj[item] = ++obj[item] || 1;
	}

	for (const key in obj) {
		if (obj[key] > 1) {
			return key;
		}
	}
};

const result = findDuplicate(arr);
console.log({ result });
