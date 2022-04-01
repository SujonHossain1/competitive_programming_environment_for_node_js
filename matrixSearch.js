var searchMatrix = function (matrix, target) {
    const m = matrix.length;
    const n = matrix[m - 1].length;

    const smallest = matrix[0][0];
    const largest = matrix[m - 1][n - 1];

    if (target < smallest || target > largest) {
        return false;
    }

    let i = 0,
        j = n - 1;

    while (i < m && j >= 0) {
        if (matrix[i][j] === target) {
            return true;
        }
        if (matrix[i][j] > target) {
            j--;
        } else {
            i++;
        }
    }

    return false;
};

const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20, 21],
    [23, 30, 34, 60, 65],
    [80, 90, 100, 102, 130],
];

const result = searchMatrix(matrix, 90);
console.log({ result });
