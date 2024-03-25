"use strict";
s.r(t), s.d(t, {
  hasCrypto: function() {
    return d
  },
  hasWebAuthn: function() {
    return c
  },
  generateTotpSecret: function() {
    return u
  },
  encodeTotpSecret: function() {
    return h
  },
  encodeTotpSecretAsUrl: function() {
    return f
  }
}), s("311790"), s("477657"), s("811875"), s("90301"), s("652153"), s("28797"), s("817884"), s("597349"), s("667536"), s("690341"), s("781738");
var r, n, a, i = s("584811");
let l = null !== (a = null === (r = window) || void 0 === r ? void 0 : r.crypto) && void 0 !== a ? a : null === (n = window) || void 0 === n ? void 0 : n.msCrypto,
  o = "Uint8Array" in window,
  d = null != l && "getRandomValues" in l && o,
  c = "PublicKeyCredential" in window && o;

function u() {
  var e;
  return function(e) {
    let t = i.encode(e).toString("utf8").replace(/=/g, "");
    return t.toLowerCase().replace(/(\w{4})/g, "$1 ").trim()
  }((e = 20, l.getRandomValues(new Uint8Array(20))))
}

function h(e) {
  return e.replace(/[\s._-]+/g, "").toUpperCase()
}

function f(e, t) {
  let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Discord";
  return "otpauth://totp/".concat(encodeURI(s), ":").concat(encodeURI(e), "?secret=").concat(h(t), "&issuer=").concat(encodeURIComponent(s))
}