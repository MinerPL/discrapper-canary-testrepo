var r = n(333897),
  i = n(706627),
  a = n(42848),
  s = 0 / 0,
  o = /^[-+]0x[0-9a-f]+$/i,
  l = /^0b[01]+$/i,
  u = /^0o[0-7]+$/i,
  c = parseInt;
e.exports = function(e) {
  if ('number' == typeof e)
return e;
  if (a(e))
return s;
  if (i(e)) {
var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
e = i(t) ? t + '' : t;
  }
  if ('string' != typeof e)
return 0 === e ? e : +e;
  e = r(e);
  var n = l.test(e);
  return n || u.test(e) ? c(e.slice(2), n ? 2 : 8) : o.test(e) ? s : +e;
};