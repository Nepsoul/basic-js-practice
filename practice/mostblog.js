const listOfBlogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0,
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0,
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0,
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0,
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0,
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0,
  },
];

// const mostBlogs = (blogs) => {
//   // console.log(blogs, "blogs");
//   debugger;
//   const blogCount = {};
//   for (const blog of blogs) {
//     // console.log(blog, "blog");
//     const author = blog.author;
//     if (author in blogCount) {
//       //   console.log(blogCount, "blog count");
//       //   console.log(author, "author");
//       blogCount[author]++;
//     } else {
//       blogCount[author] = 1;
//     }
//   }
//   let maxAuthor = null;
//   let maxBlog = 0;

//   for (const author in blogCount) {
//     // console.log(author, "author");
//     // console.log(blogCount, "blogcount");
//     if (blogCount[author] > maxBlog) {
//       maxBlog = blogCount[author];
//       maxAuthor = author;
//     }
//   }
//   return maxAuthor ? { author: maxAuthor, blog: maxBlog } : null;
// };

// console.log(mostBlogs(listOfBlogs));

const mostLikes = (blog) => {
  debugger;
  let trackBlog = {};
  for (const key of blog) {
    const author = key.author;
    const likes = key.likes;
    if (author in trackBlog) {
      trackBlog[author]++;
      totalLikes[likes] = key.likes + totalLikes.likes;
    } else {
      totalLikes[author] = 1;
    }
  }
  // let maxAuthor = null;
  // let maxLikes = 0;
  // for (const author in totalLikes) {
  //   if (totalLikes[author] > maxLikes) {
  //     maxLikes = totalLikes[author];
  //     maxAuthor = author;
  //   }
  // }
  return maxAuthor ? { author: maxAuthor, likes: maxLikes } : null;
  //===================

  //this code is not working shold be make working
  // const result = blog.reduce(
  //   (accumulator, item) => {
  //     const authorLikes = accumulator.authorLikes || {};
  //     if (authorLikes[item.author]) {
  //       authorLikes[item.author] += item.likes;
  //     } else {
  //       authorLikes[item.author] = item.likes;
  //     }
  //     if (
  //       !accumulator.maxAuthor ||
  //       authorLikes[item.author] > authorLikes[accumulator.maxAuthor]
  //     ) {
  //       return {
  //         authorLikes: item.likes,
  //         maxAuthor: item.author,
  //       };
  //     }
  //     return {
  //       maxLikes: accumulator.likes,
  //       maxAuthor: accumulator.maxAuthor,
  //     };
  //   },
  //   { maxLikes: 0, maxAuthor: null }
  // );
  // return result;
};
// debugger;
console.log(mostLikes(listOfBlogs));
