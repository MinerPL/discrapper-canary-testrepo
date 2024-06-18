"use strict";
n.d(t, {
  Gb: function() {
    return a
  },
  RD: function() {
    return T
  },
  Rs: function() {
    return E
  },
  WA: function() {
    return c
  },
  _2: function() {
    return I
  },
  f5: function() {
    return d
  },
  fG: function() {
    return _
  },
  gL: function() {
    return u
  }
});
var i = n(579806),
  r = n(405826),
  s = n(358085);

function o() {
  return (null === i.Z || void 0 === i.Z ? void 0 : i.Z.spellCheck) != null
}

function a() {
  return (0, s.isDesktop)() && o()
}
let l = a() ? (0, r.N)() : null;
async function u(e) {
  let t = await l;
  if (null != t) t.enabled = e
}
async function _(e) {
  let t = await l;
  if (null != t) t.setLearnedWords(e)
}
async function d(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = await l;
  return null != n && n.isMisspelled(e, t)
}
async function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
    i = await l;
  return null == i ? [] : i.getCorrectionsForMisspelling(e, t).slice(0, n)
}
async function E(e) {
  let t = await l;
  if (null != t) t.replaceMisspelling(e)
}
async function I(e) {
  let t = await l;
  if (null != t) t.setAppLocale(e)
}

function T(e) {
  if (!o()) return () => {};
  let t = i.Z.spellCheck.on("spellcheck-result", e);
  return null != t ? t : () => {}
}