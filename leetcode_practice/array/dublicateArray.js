/*Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).*/

var removeDuplicates = function (nums) {
  debugger;
  //   let newArray = [];
  //   let checkDuplicate = {}; //hash map
  //   for (i = 0; i < nums.length; i++) { //doesnot work
  //     nums.shift(nums[i]);
  //     if (nums.indexOf(nums[i]) === -1) {
  //       nums.unshift(nums[i]);
  //     }
  //   }
  //   return nums;

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === nums[i + 1]) {
  //     nums.splice(i, 1);
  //   }
  // }
  // return nums.length;

  let index = 0;
  while (index < nums.length) {
    // let findIndex = nums.indexOf(nums[index], index + 1);
    if (nums[index] !== nums[index + 1]) {
      index++;
    } else {
      nums.splice(index, 1);
    }
  }

  return nums.length;
};
let nums = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
console.log(nums);
