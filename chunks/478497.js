var r = n(690244),
  i = n(192853),
  a = n(813426),
  o = n(815329),
  s = r('%WeakMap%', !0),
  l = r('%Map%', !0),
  u = i('WeakMap.prototype.get', !0),
  c = i('WeakMap.prototype.set', !0),
  d = i('WeakMap.prototype.has', !0),
  _ = i('Map.prototype.get', !0),
  E = i('Map.prototype.set', !0),
  f = i('Map.prototype.has', !0),
  h = function(e, t) {
for (var n, r = e; null !== (n = r.next); r = n)
  if (n.key === t)
    return r.next = n.next, n.next = e.next, e.next = n, n;
  },
  p = function(e, t) {
var n = h(e, t);
return n && n.value;
  },
  m = function(e, t, n) {
var r = h(e, t);
r ? r.value = n : e.next = {
  key: t,
  next: e.next,
  value: n
};
  };
e.exports = function() {
  var e, t, n, r = {
assert: function(e) {
  if (!r.has(e))
    throw new o('Side channel does not contain ' + a(e));
},
get: function(r) {
  if (s && r && ('object' == typeof r || 'function' == typeof r)) {
    if (e)
      return u(e, r);
  } else if (l) {
    if (t)
      return _(t, r);
  } else if (n)
    return p(n, r);
},
has: function(r) {
  if (s && r && ('object' == typeof r || 'function' == typeof r)) {
    if (e)
      return d(e, r);
  } else if (l) {
    if (t)
      return f(t, r);
  } else if (n)
    return !!h(n, r);
  return !1;
},
set: function(r, i) {
  s && r && ('object' == typeof r || 'function' == typeof r) ? (!e && (e = new s()), c(e, r, i)) : l ? (!t && (t = new l()), E(t, r, i)) : (!n && (n = {
    key: {},
    next: null
  }), m(n, r, i));
}
  };
  return r;
};