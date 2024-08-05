var r = n(764900),
  i = n(170088),
  a = n(689118),
  s = n(957578).Buffer,
  o = {
'des-ede3-cbc': i.CBC.instantiate(i.EDE),
'des-ede3': i.EDE,
'des-ede-cbc': i.CBC.instantiate(i.EDE),
'des-ede': i.EDE,
'des-cbc': i.CBC.instantiate(i.DES),
'des-ecb': i.DES
  };

function l(e) {
  r.call(this);
  var t, n = e.mode.toLowerCase(),
i = o[n];
  t = e.decrypt ? 'decrypt' : 'encrypt';
  var a = e.key;
  !s.isBuffer(a) && (a = s.from(a)), ('des-ede' === n || 'des-ede-cbc' === n) && (a = s.concat([
a,
a.slice(0, 8)
  ]));
  var l = e.iv;
  !s.isBuffer(l) && (l = s.from(l)), this._des = i.create({
key: a,
iv: l,
type: t
  });
}
o.des = o['des-cbc'], o.des3 = o['des-ede3-cbc'], e.exports = l, a(l, r), l.prototype._update = function(e) {
  return s.from(this._des.update(e));
}, l.prototype._final = function() {
  return s.from(this._des.final());
};