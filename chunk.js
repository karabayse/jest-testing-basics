const chunkArray = (arr, len) => {
  // Initialize chunked array
  const chunkedArr = [];

  // Loop through array
  arr.forEach(val => {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if last, and if last length is equal to the chunk length
    if (!last || last.length === len) {
      chunkedarr.push([val]);
    } else {
      last.push(val);
    }
  });
  return chunkedArr;
};

module.exports = chunkArray;
