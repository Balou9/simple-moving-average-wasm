function sum (arr, start, end) {
  for (var sum = 0, i = start; i < end; i++) {
    sum += arr[i]
  }
  return sum / end
}

function sma (ts, end) {
  var ts_len = ts.length
  var sma = Array(ts_len).fill(null)
  var start = 0
  do {
     sma[end-1] = sum(ts, start, end)
     start++
     end++
  } while (end < ts_len)
  return {start, end, ts_len, sma}
}

module.exports = { sma, sum }
