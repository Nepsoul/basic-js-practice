// /*
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Follow up: Could you minimize the total number of operations done?
//  */

// /**
// {number[]} nums
//  {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function (nums) {
//   nums.sort((a, b) => a - b);
//   let indexCheck = nums.lastIndexOf(0);
//   let slicedNum = nums.splice(0, indexCheck + 1);
//   nums.splice(nums.length, 0, ...slicedNum);
//   return nums;
// };

var moveZeroes = function (nums) {
  let i = 0;
  let j = 0;
  while (j < nums.length) {
    if (nums[i] === 0) {
      nums.push(nums[i]);
      nums.splice(i, 1);
      //   i = 0;
    } else {
      i++;
    }
    j++;
  }
  //   console.log(nums);
  return nums;
};

debugger;
// console.log(moveZeroes([0, 1, 0, 5, 6]));
console.log(moveZeroes([0, 0, 1]));
// console.log(moveZeroes([2, 1]));
// console.log(moveZeroes([0, 1]));

// let obj = {
//   a: 12,
//   b: 34,
//   c: 1223,
// };

// function object(obj) {
//   let returnObj = {};
//   for (let key in obj) {
//     let check = 0;
//     if (obj[key] > 0) {
//       check = obj[key];
//       (returnObj.key = key), (returnObj.value = obj[key]);
//     } else {
//       obj[key] = check;
//     }
//   }
//   return returnObj;
// }
// // return => {key:c,value:1223}
// console.log(object(obj));

//blogs result => {author: name, blogs: number}
// const blogs = [
//   {
//     _id: "5a422a851b54a676234d17f7",
//     title: "React patterns",
//     author: "Michael Chan",
//     url: "https://reactpatterns.com/",
//     likes: 7,
//     __v: 0,
//   },
//   {
//     _id: "5a422aa71b54a676234d17f8",
//     title: "Go To Statement Considered Harmful",
//     author: "Edsger W. Dijkstra",
//     url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
//     likes: 5,
//     __v: 0,
//   },
//   {
//     _id: "5a422b3a1b54a676234d17f9",
//     title: "Canonical string reduction",
//     author: "Edsger W. Dijkstra",
//     url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
//     likes: 12,
//     __v: 0,
//   },
//   {
//     _id: "5a422b891b54a676234d17fa",
//     title: "First class tests",
//     author: "Robert C. Martin",
//     url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
//     likes: 10,
//     __v: 0,
//   },
//   {
//     _id: "5a422ba71b54a676234d17fb",
//     title: "TDD harms architecture",
//     author: "Robert C. Martin",
//     url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
//     likes: 0,
//     __v: 0,
//   },
//   {
//     _id: "5a422bc61b54a676234d17fc",
//     title: "Type wars",
//     author: "Robert C. Martin",
//     url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
//     likes: 2,
//     __v: 0,
//   },
// ];

// // function blogFunction(blogs) {
// //   //   console.log(blogs, "blogs");
// //   //   let newObject = {};
// //   return blogs.reduce(
// //     (acc, cur) => {
// //       //   console.log(acc, "acc");
// //       //   console.log(cur.author, "cur");
// //       let count = 0;
// //       if (cur.author) {
// //         count++;
// //         author = cur.author;
// //       }
// //       (acc[author] = cur[author]), (acc.blogs = count);
// //     },
// //     { author: "", blogs: 0 }
// //   );
// // }

// // console.log(blogFunction(blogs));

// function blogFunction(blogs) {
//   let author=""
//   let counter=0
//   for(let i=0;i<blogs.length;i++){
//     let
//   }
// }

// console.log(blogFunction(blogs));
