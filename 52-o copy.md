# 思路

- BFS

# 代码 js

```js
const solve = (graph, target) => {
  let result = 0
  let visited = new Set([])
  let check = [target]
  let length = check.length
  while (length > 0) {
    result++
    for (let i = 0; i < length; i++) {
      let vertex = check.shift()
      for (let nextNode of graph[vertex]) {
        if (nextNode === target) {
          return result
        } else {
          if (!visited.has(nextNode)) {
            visited.add(nextNode)
            check.push(nextNode)
          }
        }
      }
    }
    length = check.length
  }
  return -1
}
```

# 复杂度分析

- 时间复杂度：O(v+e)
- 空间复杂度：O(v)
