function solve(nums, k) {
  nums.sort((a, b) => a - b)
  let l = 0,
    r = nums[nums.length - 1] - nums[0],
    mid
  while (l <= r) {
    mid = (l + r) >> 1
    if (getCount(nums, mid) < k) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return l
}

function getCount(nums, distance) {
  let l = 0,
    count = 0
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] - nums[l] > distance) {
      l++
    }
    count += i - l
  }
  return count
}
console.log(solve([1, 5, 3, 2], 3))
