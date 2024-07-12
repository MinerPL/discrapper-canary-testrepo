var r = n(21841),
  i = n(689118),
  a = n(449348),
  o = n(922689);

function s(e, t) {
  r.equal(t.length, 24, 'Invalid key length');
  var n = t.slice(0, 8),
i = t.slice(8, 16),
a = t.slice(16, 24);
  'encrypt' === e ? this.ciphers = [
o.create({
  type: 'encrypt',
  key: n
}),
o.create({
  type: 'decrypt',
  key: i
}),
o.create({
  type: 'encrypt',
  key: a
})
  ] : this.ciphers = [
o.create({
  type: 'decrypt',
  key: a
}),
o.create({
  type: 'encrypt',
  key: i
}),
o.create({
  type: 'decrypt',
  key: n
})
  ];
}

function l(e) {
  a.call(this, e);
  var t = new s(this.type, this.options.key);
  this._edeState = t;
}
i(l, a), e.exports = l, l.create = function(e) {
  return new l(e);
}, l.prototype._update = function(e, t, n, r) {
  var i = this._edeState;
  i.ciphers[0]._update(e, t, n, r), i.ciphers[1]._update(n, r, n, r), i.ciphers[2]._update(n, r, n, r);
}, l.prototype._pad = o.prototype._pad, l.prototype._unpad = o.prototype._unpad;