var r = n(56135),
  i = n(886985),
  a = n(290677),
  o = n(158698),
  s = 1 / 0,
  l = r ? r.prototype : void 0,
  u = l ? l.toString : void 0;
e.exports = function e(t) {
  if ('string' == typeof t)
return t;
  if (a(t))
return i(t, e) + '';
  if (o(t))
return u ? u.call(t) : '';
  var n = t + '';
  return '0' == n && 1 / t == -s ? '-0' : n;
};