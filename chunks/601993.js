n.d(t, {
  Gb: function() {
return s;
  },
  RD: function() {
return h;
  },
  Rs: function() {
return E;
  },
  WA: function() {
return _;
  },
  _2: function() {
return f;
  },
  f5: function() {
return d;
  },
  fG: function() {
return c;
  },
  gL: function() {
return u;
  }
});
var r = n(579806),
  i = n(405826),
  a = n(358085);

function o() {
  return (null === r.Z || void 0 === r.Z ? void 0 : r.Z.spellCheck) != null;
}

function s() {
  return (0, a.isDesktop)() && o();
}
let l = s() ? (0, i.N)() : null;
async function u(e) {
  let t = await l;
  if (null != t)
t.enabled = e;
}
async function c(e) {
  let t = await l;
  if (null != t)
t.setLearnedWords(e);
}
async function d(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
n = await l;
  return null != n && n.isMisspelled(e, t);
}
async function _(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
r = await l;
  return null == r ? [] : r.getCorrectionsForMisspelling(e, t).slice(0, n);
}
async function E(e) {
  let t = await l;
  if (null != t)
t.replaceMisspelling(e);
}
async function f(e) {
  let t = await l;
  if (null != t)
t.setAppLocale(e);
}

function h(e) {
  if (!o())
return () => {};
  let t = r.Z.spellCheck.on('spellcheck-result', e);
  return null != t ? t : () => {};
}