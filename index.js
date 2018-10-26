function sumr (ts, end) {
  var sum = 0
  var count = (end-1) - 4
  do {
    sum += ts[count]
    count++
  } while (count < end)
  return sum / end
}


function sma (ts, end) {
  var ts_len = ts.length
  const sma = Array(ts_len).fill(null)
  return sma
}

module.exports = { sma, sumr }
