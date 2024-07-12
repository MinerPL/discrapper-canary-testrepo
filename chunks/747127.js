n.d(t, {
  Z: function() {
return a;
  }
});
var i = n(470079);

function a() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
t[n] = arguments[n];
  return i.useCallback(e => {
t.forEach(t => {
  if (null != t)
    'function' == typeof t ? t(e) : t.current = e;
});
  }, t);
}