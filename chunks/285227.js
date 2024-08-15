var r = n(369529),
  i = n(886985),
  a = n(901806),
  s = n(484155),
  o = n(246209),
  l = Math.max;
e.exports = function(e) {
  if (!(e && e.length))
return [];
  var t = 0;
  return e = r(e, function(e) {
if (o(e))
  return t = l(e.length, t), !0;
  }), s(t, function(t) {
return i(e, a(t));
  });
};