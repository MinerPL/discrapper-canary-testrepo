var n = e(46166),
  o = e(107378),
  i = e(849513);
t.exports = function(t) {
  var r = o(t);
  return 1 == r.length && r[0][2] ? i(r[0][0], r[0][1]) : function(e) {
    return e === t || n(e, t, r)
  }
}