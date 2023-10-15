const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // write your code here
	 // Initialize a variable to keep track of the count of books that have been read.
  let count = 0;

  // Iterate through the array of books in the library object.
  for (let i = 0; i < library.length; i++) {
    // Check if the readingStatus of the current book is true.
    if (library[i].readingStatus === true) {
      // If the book has been read, increment the count.
      count++;
    }
  }

  // Return the final count of books that have been read.
  return count;
}

// Do not change the code below

alert(numberOfBooksRead());
