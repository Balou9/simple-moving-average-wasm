const tape = require('tape')
const { sma, sum } = require('./index.js')
const ts = [11, 88, 23, 45, 23,
            55, 66, 87, 32, 45,
            67, 65, 23, 47, 94]

tape('sma true', t => {
  t.true(sma(ts, 5))
  t.end()
})

tape('sum true', t => {
  t.equal(sum(ts, 0, 5), 190)
  t.end()
})
