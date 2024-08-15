var n = r(466293),
  a = r(467631),
  o = r(402428),
  i = r(42848),
  _ = 1 / 0,
  E = n ? n.prototype : void 0,
  s = E ? E.toString : void 0;
e.exports = function e(t) {
  if ('string' == typeof t)
return t;
  if (o(t))
return a(t, e) + '';
  if (i(t))
return s ? s.call(t) : '';
  var r = t + '';
  return '0' == r && 1 / t == -_ ? '-0' : r;
};