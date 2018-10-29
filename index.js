function sum (arr, start, end) {
  for (var sum = 0, i = start; i < end; i++) {
    sum += arr[i]
  }
  return sum
}

function sma (ts, end) {
  var ts_len = ts.length
  var sma = Array(ts_len).fill(null)
  var start = 0
  var i = end - 1
  var d = end
  do {
     sma[i] = sum(ts, start, end) / d
     i++
     start++
     end++
  } while (i !== ts_len)
  return sma
}

module.exports = { sma, sum }
