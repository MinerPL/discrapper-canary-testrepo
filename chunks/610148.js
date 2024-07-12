var e = n(325008),
  i = n(498576),
  o = TypeError,
  u = Object.getOwnPropertyDescriptor,
  c = e && ! function() {
if (void 0 !== this)
  return !0;
try {
  Object.defineProperty([], 'length', {
    writable: !1
  }).length = 1;
} catch (t) {
  return t instanceof TypeError;
}
  }();
t.exports = c ? function(t, r) {
  if (i(t) && !u(t, 'length').writable)
throw o('Cannot set read only .length');
  return t.length = r;
} : function(t, r) {
  return t.length = r;
};