var n = r(46166),
  a = r(107378),
  o = r(849513);
e.exports = function(e) {
  var t = a(e);
  return 1 == t.length && t[0][2] ? o(t[0][0], t[0][1]) : function(r) {
return r === e || n(r, e, t);
  };
};