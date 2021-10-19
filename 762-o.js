const numberStreamToIntervals = (nums) => {
  let sum = 0
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j] * 3) {
        sum++
      }
    }
  }
  return sum
}
console.log(numberStreamToIntervals([7, 1, 2]))
