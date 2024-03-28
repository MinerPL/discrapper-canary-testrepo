"use strict";
s.r(t), s.d(t, {
  encodeTotpSecret: function() {
    return S
  },
  encodeTotpSecretAsUrl: function() {
    return E
  },
  generateTotpSecret: function() {
    return c
  },
  hasCrypto: function() {
    return d
  },
  hasWebAuthn: function() {
    return u
  }
}), s("518263"), s("970173"), s("520712"), s("268111"), s("941497"), s("32026"), s("480839"), s("744285"), s("492257"), s("873817"), s("757143");
var a, n, l, i = s("943418");
let r = null !== (l = null === (a = window) || void 0 === a ? void 0 : a.crypto) && void 0 !== l ? l : null === (n = window) || void 0 === n ? void 0 : n.msCrypto,
  o = "Uint8Array" in window,
  d = null != r && "getRandomValues" in r && o,
  u = "PublicKeyCredential" in window && o;

function c() {
  var e, t;
  return t = (e = 20, r.getRandomValues(new Uint8Array(20))), i.encode(t).toString("utf8").replace(/=/g, "").toLowerCase().replace(/(\w{4})/g, "$1 ").trim()
}

function S(e) {
  return e.replace(/[\s._-]+/g, "").toUpperCase()
}

function E(e, t) {
  let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Discord";
  return "otpauth://totp/".concat(encodeURI(s), ":").concat(encodeURI(e), "?secret=").concat(S(t), "&issuer=").concat(encodeURIComponent(s))
}