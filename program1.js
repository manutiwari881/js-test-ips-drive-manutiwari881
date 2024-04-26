function smallestMissingPositiveInteger(nums) {
  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
   
      while (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
          // Swap the current number with the number at its correct position
          [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
      }
  }

  // Find the first index where nums[i] !== i + 1
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
          // Return the smallest missing positive integer
          return i + 1;
      }
  }

  // If all integers from 1 to nums.length are present, return the next integer
  return nums.length + 1;
}

module.exports = smallestMissingPositiveInteger;
