var e = r(545576),
  o = r(354848),
  i = r(838957),
  u = r(769992),
  c = Object;
t.exports = u ? function(t) {
  return 'symbol' == typeof t;
} : function(t) {
  var n = e('Symbol');
  return o(n) && i(n.prototype, c(t));
};