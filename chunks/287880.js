s.d(t, {
  Ae: function() {
return d;
  },
  Qe: function() {
return E;
  },
  U0: function() {
return u;
  },
  bV: function() {
return _;
  },
  uZ: function() {
return c;
  }
}), s(518263), s(970173), s(520712), s(268111), s(941497), s(32026), s(480839), s(744285), s(492257), s(873817), s(757143);
var n, a, i, r = s(943418);
let o = null !== (i = null === (n = window) || void 0 === n ? void 0 : n.crypto) && void 0 !== i ? i : null === (a = window) || void 0 === a ? void 0 : a.msCrypto,
  l = 'Uint8Array' in window,
  c = null != o && 'getRandomValues' in o && l,
  d = 'PublicKeyCredential' in window && l;

function _() {
  var e, t;
  return t = (e = 20, o.getRandomValues(new Uint8Array(20))), r.encode(t).toString('utf8').replace(/=/g, '').toLowerCase().replace(/(\w{4})/g, '$1 ').trim();
}

function E(e) {
  return e.replace(/[\s._-]+/g, '').toUpperCase();
}

function u(e, t) {
  let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'Discord';
  return 'otpauth://totp/'.concat(encodeURI(s), ':').concat(encodeURI(e), '?secret=').concat(E(t), '&issuer=').concat(encodeURIComponent(s));
}