"use strict";
n.d(t, {
  L: function() {
    return u
  },
  d: function() {
    return l
  }
}), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(642549), n(47120);
var i = n(772848),
  r = n(433517),
  s = n(70956);
let o = "purchase_token",
  a = 60 * s.Z.Millis.DAY;

function l() {
  let e = r.K.get(o);
  if (null != e && e.expires >= Date.now()) return e.purchaseToken;
  let t = (0, i.Z)();
  return r.K.set(o, {
    purchaseToken: t,
    expires: Date.now() + a
  }), t
}
async function u() {
  let e = new Uint8Array(l().split("").map(e => e.charCodeAt(0)));
  return btoa(String.fromCharCode(...new Uint8Array(await window.crypto.subtle.digest({
    name: "SHA-256"
  }, e))))
}