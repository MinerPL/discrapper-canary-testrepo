var e = n(661233),
  i = n(586769),
  o = n(675769),
  u = Math.max,
  c = Math.min;
t.exports = function(t, r, n) {
  var a, s, f, l, p, v, h = 0,
d = !1,
g = !1,
x = !0;
  if ('function' != typeof t)
throw TypeError('Expected a function');

  function y(r) {
var n = a,
  e = s;
return a = s = void 0, h = r, l = t.apply(e, n);
  }
  r = o(r) || 0, e(n) && (d = !!n.leading, f = (g = 'maxWait' in n) ? u(o(n.maxWait) || 0, r) : f, x = 'trailing' in n ? !!n.trailing : x);

  function b(t) {
var n = t - v,
  e = t - h;
return void 0 === v || n >= r || n < 0 || g && e >= f;
  }

  function E() {
var t, n, e, o, u = i();
if (b(u))
  return m(u);
p = setTimeout(E, (n = (t = u) - v, e = t - h, o = r - n, g ? c(o, f - e) : o));
  }

  function m(t) {
return (p = void 0, x && a) ? y(t) : (a = s = void 0, l);
  }

  function T() {
var t, n = i(),
  e = b(n);
if (a = arguments, s = this, v = n, e) {
  if (void 0 === p) {
    ;
    return h = t = v, p = setTimeout(E, r), d ? y(t) : l;
  }
  if (g)
    return clearTimeout(p), p = setTimeout(E, r), y(v);
}
return void 0 === p && (p = setTimeout(E, r)), l;
  }
  return T.cancel = function() {
void 0 !== p && clearTimeout(p), h = 0, a = v = s = p = void 0;
  }, T.flush = function() {
return void 0 === p ? l : m(i());
  }, T;
};