"use strict";
n.d(t, {
  Kq: function() {
    return v
  },
  L0: function() {
    return T
  },
  Ux: function() {
    return x
  },
  Xe: function() {
    return C
  },
  aQ: function() {
    return E
  },
  bU: function() {
    return _
  },
  qb: function() {
    return y
  }
});
var r = n(470079),
  i = n(230012),
  a = n(133886),
  o = n(387103),
  s = n(182823),
  u = n(881085);
let c = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
  l = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]),
  d = Symbol.for("react-aria.i18n.locale");

function f() {
  let e = "undefined" != typeof window && window[d] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([e])
  } catch (t) {
    e = "en-US"
  }
  return {
    locale: e,
    direction: ! function(e) {
      if (Intl.Locale) {
        let t = new Intl.Locale(e).maximize(),
          n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
        if (n) return "rtl" === n.direction;
        if (t.script) return c.has(t.script)
      }
      let t = e.split("-")[0];
      return l.has(t)
    }(e) ? "ltr" : "rtl"
  }
}
let p = f(),
  h = new Set;

function m() {
  for (let e of (p = f(), h)) e(p)
}
let g = r.createContext(null);

function _() {
  let e = function() {
    let e = (0, i.Av)(),
      [t, n] = (0, r.useState)(p);
    return ((0, r.useEffect)(() => (0 === h.size && window.addEventListener("languagechange", m), h.add(n), () => {
      h.delete(n), 0 === h.size && window.removeEventListener("languagechange", m)
    }), []), e) ? {
      locale: "en-US",
      direction: "ltr"
    } : t
  }();
  return (0, r.useContext)(g) || e
}
let b = new WeakMap;

function v(e, t) {
  var n;
  let r;
  return t && (0, a.J).getGlobalDictionaryForPackage(t) || (n = e, !(r = b.get(n)) && (r = new a.J(n), b.set(n, r)), r)
}

function y(e, t) {
  let {
    locale: n
  } = _(), i = v(e, t);
  return (0, r.useMemo)(() => new a.E(n, i), [n, i])
}

function E(e) {
  e = (0, s.vE)(null != e ? e : {}, S);
  let {
    locale: t
  } = _();
  return (0, r.useMemo)(() => new o.CN(t, e), [t, e])
}

function S(e, t) {
  if (e === t) return !0;
  let n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let r of n)
    if (t[r] !== e[r]) return !1;
  return !0
}

function x(e = {}) {
  let {
    locale: t
  } = _();
  return (0, r.useMemo)(() => new u.e(t, e), [t, e])
}
let w = new Map;

function C(e) {
  let {
    locale: t
  } = _(), n = t + (e ? Object.entries(e).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
  if (w.has(n)) return w.get(n);
  let r = new Intl.Collator(t, e);
  return w.set(n, r), r
}

function T(e) {
  let t = C({
      usage: "search",
      ...e
    }),
    n = (0, r.useCallback)((e, n) => 0 === n.length || (e = e.normalize("NFC"), n = n.normalize("NFC"), 0 === t.compare(e.slice(0, n.length), n)), [t]),
    i = (0, r.useCallback)((e, n) => 0 === n.length || (e = e.normalize("NFC"), n = n.normalize("NFC"), 0 === t.compare(e.slice(-n.length), n)), [t]),
    a = (0, r.useCallback)((e, n) => {
      if (0 === n.length) return !0;
      e = e.normalize("NFC"), n = n.normalize("NFC");
      let r = 0,
        i = n.length;
      for (; r + i <= e.length; r++) {
        let a = e.slice(r, r + i);
        if (0 === t.compare(n, a)) return !0
      }
      return !1
    }, [t]);
  return (0, r.useMemo)(() => ({
    startsWith: n,
    endsWith: i,
    contains: a
  }), [n, i, a])
}