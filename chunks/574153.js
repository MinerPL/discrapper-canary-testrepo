var n = r(302767);

function a(e, t) {
  if ('function' != typeof e || null != t && 'function' != typeof t)
throw TypeError('Expected a function');
  var r = function() {
var n = arguments,
  a = t ? t.apply(this, n) : n[0],
  o = r.cache;
if (o.has(a))
  return o.get(a);
var i = e.apply(this, n);
return r.cache = o.set(a, i) || o, i;
  };
  return r.cache = new(a.Cache || n)(), r;
}
a.Cache = n, e.exports = a;