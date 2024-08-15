var e = r(325008),
  o = r(34924),
  i = r(733669),
  u = r(24033),
  c = r(966606),
  f = TypeError,
  a = Object.defineProperty,
  s = Object.getOwnPropertyDescriptor,
  p = 'enumerable',
  l = 'configurable',
  v = 'writable';
n.f = e ? i ? function(t, n, r) {
  if (u(t), n = c(n), u(r), 'function' == typeof t && 'prototype' === n && 'value' in r && v in r && !r[v]) {
var e = s(t, n);
e && e[v] && (t[n] = r.value, r = {
  configurable: l in r ? r[l] : e[l],
  enumerable: p in r ? r[p] : e[p],
  writable: !1
});
  }
  return a(t, n, r);
} : a : function(t, n, r) {
  if (u(t), n = c(n), u(r), o)
try {
  return a(t, n, r);
} catch (t) {}
  if ('get' in r || 'set' in r)
throw f('Accessors not supported');
  return 'value' in r && (t[n] = r.value), t;
};