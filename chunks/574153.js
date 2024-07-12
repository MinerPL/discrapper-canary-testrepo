var n = r(302767);

function _(t, e) {
  if ('function' != typeof t || null != e && 'function' != typeof e)
throw TypeError('Expected a function');
  var r = function() {
var n = arguments,
  _ = e ? e.apply(this, n) : n[0],
  a = r.cache;
if (a.has(_))
  return a.get(_);
var i = t.apply(this, n);
return r.cache = a.set(_, i) || a, i;
  };
  return r.cache = new(_.Cache || n)(), r;
}
_.Cache = n, t.exports = _;