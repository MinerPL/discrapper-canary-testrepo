"use strict";
n.d(t, {
  FW: function() {
    return E
  },
  Pk: function() {
    return o
  },
  Rq: function() {
    return m
  },
  W_: function() {
    return a
  },
  dK: function() {
    return l
  },
  qd: function() {
    return _
  }
}), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(642549), n(47120), n(757143), n(863942), n(411104);
var s = n(512722),
  r = n.n(s),
  i = n(598077);

function a() {
  return window.crypto.subtle.generateKey({
    name: "RSA-OAEP",
    modulusLength: 2048,
    publicExponent: new Uint8Array([1, 0, 1]),
    hash: "SHA-256"
  }, !0, ["decrypt"])
}
async function l(e) {
  return r()(null != e.publicKey, "public key cannot be null"), btoa(String.fromCharCode(...new Uint8Array(await window.crypto.subtle.exportKey("spki", e.publicKey))))
}
async function o(e) {
  return r()(null != e.publicKey, "public key cannot be null"), d(await window.crypto.subtle.exportKey("spki", e.publicKey))
}

function u(e) {
  return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/\//g, "_").replace(/\+/g, "-").replace(/={1,2}$/, "")
}

function c(e) {
  return Uint8Array.from(atob(e), e => e.charCodeAt(0))
}
async function d(e) {
  return u(await window.crypto.subtle.digest({
    name: "SHA-256"
  }, e))
}

function h(e, t) {
  return r()(null != e.privateKey, "private key cannot be null"), window.crypto.subtle.decrypt({
    name: "RSA-OAEP",
    hash: "SHA-256"
  }, e.privateKey, t)
}
async function E(e, t) {
  let n = new TextDecoder,
    s = await h(e, c(t));
  return n.decode(s)
}
async function _(e, t) {
  return u(await h(e, c(t)))
}
async function m(e, t) {
  t = await E(e, t);
  let n = t.match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
  if (null == n) throw Error("Invalid encoded user record.");
  let [, s, r, a, l] = n;
  return new i.Z({
    id: s,
    discriminator: r,
    avatar: "0" === a ? null : a,
    username: l
  })
}