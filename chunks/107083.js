var r = n(444675);

function i() {
  throw Error('secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11');
}
var a = n(957578),
  s = n(706178),
  o = a.Buffer,
  l = a.kMaxLength,
  u = n.g.crypto || n.g.msCrypto,
  c = 4294967295;

function d(e, t) {
  if ('number' != typeof e || e != e)
throw TypeError('offset must be a number');
  if (e > c || e < 0)
throw TypeError('offset must be a uint32');
  if (e > l || e > t)
throw RangeError('offset out of range');
}

function _(e, t, n) {
  if ('number' != typeof e || e != e)
throw TypeError('size must be a number');
  if (e > c || e < 0)
throw TypeError('size must be a uint32');
  if (e + t > n || e > l)
throw RangeError('buffer too small');
}
u && u.getRandomValues || !r.browser ? (t.randomFill = function(e, t, r, i) {
  if (!o.isBuffer(e) && !(e instanceof n.g.Uint8Array))
throw TypeError('"buf" argument must be a Buffer or Uint8Array');
  if ('function' == typeof t)
i = t, t = 0, r = e.length;
  else if ('function' == typeof r)
i = r, r = e.length - t;
  else if ('function' != typeof i)
throw TypeError('"cb" argument must be a function');
  return d(t, e.length), _(r, t, e.length), E(e, t, r, i);
}, t.randomFillSync = function(e, t, r) {
  if (void 0 === t && (t = 0), !o.isBuffer(e) && !(e instanceof n.g.Uint8Array))
throw TypeError('"buf" argument must be a Buffer or Uint8Array');
  return d(t, e.length), void 0 === r && (r = e.length - t), _(r, t, e.length), E(e, t, r);
}) : (t.randomFill = i, t.randomFillSync = i);

function E(e, t, n, i) {
  if (r.browser) {
var a = new Uint8Array(e.buffer, t, n);
if (u.getRandomValues(a), i) {
  r.nextTick(function() {
    i(null, e);
  });
  return;
}
return e;
  }
  if (i) {
s(n, function(n, r) {
  if (n)
    return i(n);
  r.copy(e, t), i(null, e);
});
return;
  }
  return s(n).copy(e, t), e;
}