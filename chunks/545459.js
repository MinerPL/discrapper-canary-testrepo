"use strict";
n.d(e, {
  EN: function() {
    return u
  },
  IQ: function() {
    return l
  },
  bU: function() {
    return s
  }
});
var r = n(46834),
  i = n(529866);
let s = "baggage",
  a = "sentry-",
  o = /^sentry-/;

function u(t) {
  if (!(0, r.HD)(t) && !Array.isArray(t)) return;
  let e = {};
  if (Array.isArray(t)) e = t.reduce((t, e) => {
    let n = c(e);
    return {
      ...t,
      ...n
    }
  }, {});
  else {
    if (!t) return;
    e = c(t)
  }
  let n = Object.entries(e).reduce((t, [e, n]) => (e.match(o) && (t[e.slice(a.length)] = n), t), {});
  return Object.keys(n).length > 0 ? n : void 0
}

function l(t) {
  if (!!t) return function(t) {
    if (0 !== Object.keys(t).length) return Object.entries(t).reduce((t, [e, n], r) => {
      let s = `${encodeURIComponent(e)}=${encodeURIComponent(n)}`,
        a = 0 === r ? s : `${t},${s}`;
      return a.length > 8192 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn(`Not adding key: ${e} with val: ${n} to baggage header due to exceeding baggage size limits.`), t) : a
    }, "")
  }(Object.entries(t).reduce((t, [e, n]) => (n && (t[`${a}${e}`] = n), t), {}))
}

function c(t) {
  return t.split(",").map(t => t.split("=").map(t => decodeURIComponent(t.trim()))).reduce((t, [e, n]) => (t[e] = n, t), {})
}