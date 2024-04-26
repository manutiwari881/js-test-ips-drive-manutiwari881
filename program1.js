function smallestMissingPositiveInteger(arr) {
    const n = arr.length;

    // Step 1: Move all non-positive integers to the end of the array
    let j = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] <= 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }

    // Step 2: Consider only positive integers
    arr = arr.slice(j);
    const m = arr.length;

    // Step 3: Mark arr[i] as visited by making arr[arr[i]-1] negative
    for (let i = 0; i < m; i++) {
        const index = Math.abs(arr[i]) - 1;
        if (index < m && arr[index] > 0) {
            arr[index] = -arr[index];
        }
    }

    // Step 4: Find the first positive integer in the modified array
    for (let i = 0; i < m; i++) {
        if (arr[i] > 0) {
            return i + 1;
        }
    }

    // Step 5: If all integers are present, return m + 1
    return m + 1;
}

// Example usage:
const arr = [3, 4, -1, 1];
console.log(smallestMissingPositiveInteger(arr));
