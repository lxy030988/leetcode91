const delList = (nums, k) => {
  let preSumArr = [],
    sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i]
    preSumArr.push(sum)
  }
  let target = sum % k
  if (target === 0) return 0

  let map = new Map(),
    preLen = preSumArr.length
  let res = preLen
  for (let j = 0; j < preLen; j++) {
    let newTarget = (preSumArr[j] - target) % k
    let currTarget = preSumArr[j] % k
    if (map.has(newTarget)) {
      res = Math.min(res, j - map.get(newTarget))
    }
    map.set(currTarget, j)
  }
  return res === preLen ? -1 : res
}
console.log(delList([1, 8, 6, 4, 5], 7))
