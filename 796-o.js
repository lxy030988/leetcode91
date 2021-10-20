function minr(nums) {
  if (nums.length < 3) return 0

  nums.sort((a, b) => a - b)

  let l = 0,
    r = nums[nums.length - 1]

  while (l <= r) {
    const m = l + ((r - l) >> 1)

    if (find(m, nums)) {
      r = m - 1
    } else {
      l = m + 1
    }
  }

  if (l > nums[nums.length - 1] || !find(l, nums)) {
    return 0
  }

  return l / 2
}

function find(mid, nums) {
  let range = nums[0] + mid,
    lights = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > range) {
      lights += 1
      range = nums[i] + mid
    }
  }

  return lights <= 2
}

console.log(minr([3, 4, 5, 6]))
