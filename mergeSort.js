function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const merged = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
  return merged.concat(left, right);
}

// For running the code from the command line
const args = process.argv.slice(2);
const arr = args.map((arg) => parseInt(arg, 10));

if (arr.every((num) => !isNaN(num))) {
  console.log(`Original array: ${arr}`);
  const sortedArray = mergeSort(arr);
  console.log(`Sorted array: ${sortedArray}`);
} else {
  console.log("Please provide a valid array of numbers as arguments.");
}
