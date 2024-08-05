var r = n(242474),
  i = n(780177),
  a = n(737372),
  s = n(109426),
  o = n(245413);

function l(e, t, n) {
  if (a[e = e.toLowerCase()])
return i.createCipheriv(e, t, n);
  if (s[e])
return new r({
  key: t,
  iv: n,
  mode: e
});
  throw TypeError('invalid suite type');
}

function u(e, t, n) {
  if (a[e = e.toLowerCase()])
return i.createDecipheriv(e, t, n);
  if (s[e])
return new r({
  key: t,
  iv: n,
  mode: e,
  decrypt: !0
});
  throw TypeError('invalid suite type');
}
t.createCipher = t.Cipher = function(e, t) {
  if (a[e = e.toLowerCase()])
n = a[e].key, r = a[e].iv;
  else if (s[e])
n = 8 * s[e].key, r = s[e].iv;
  else
throw TypeError('invalid suite type');
  var n, r, i = o(t, !1, n, r);
  return l(e, i.key, i.iv);
}, t.createCipheriv = t.Cipheriv = l, t.createDecipher = t.Decipher = function(e, t) {
  if (a[e = e.toLowerCase()])
n = a[e].key, r = a[e].iv;
  else if (s[e])
n = 8 * s[e].key, r = s[e].iv;
  else
throw TypeError('invalid suite type');
  var n, r, i = o(t, !1, n, r);
  return u(e, i.key, i.iv);
}, t.createDecipheriv = t.Decipheriv = u, t.listCiphers = t.getCiphers = function() {
  return Object.keys(s).concat(i.getCiphers());
};