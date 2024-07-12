var n = r(46166),
  _ = r(107378),
  a = r(849513);
t.exports = function(t) {
  var e = _(t);
  return 1 == e.length && e[0][2] ? a(e[0][0], e[0][1]) : function(r) {
return r === t || n(r, t, e);
  };
};