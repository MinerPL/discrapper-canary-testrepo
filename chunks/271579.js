"use strict";
n.d(t, {
  WS: function() {
    return l
  },
  ZP: function() {
    return _
  },
  zS: function() {
    return u
  }
}), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(264344),
  r = n.n(i),
  s = n(772848),
  o = n(511266);
let a = "https://discordapp.page.link";

function l() {
  return (0, s.Z)()
}

function u(e) {
  if (!e.startsWith(a)) return null;
  try {
    var t;
    let n = new URL(e).searchParams,
      i = n.get("link");
    if (null == i) return null;
    let r = decodeURIComponent(i),
      s = new URL(r).searchParams,
      o = {
        utmSource: null !== (t = n.get("utm_source")) && void 0 !== t ? t : void 0
      };
    for (let [e, t] of s.entries()) o[e] = t;
    return o
  } catch {
    return null
  }
}

function _(e, t) {
  let {
    utmSource: n,
    androidFallbackLink: i,
    iosFallbackLink: s,
    ...l
  } = t, u = new URL(e);
  for (let e in l) {
    let t = l[e];
    null != t && u.searchParams.set(e, t)
  }
  let _ = encodeURIComponent(u.toString()),
    d = encodeURIComponent((0, o.Z)()),
    c = ! function() {
      var e, t;
      let n = RegExp("(".concat("WebView|(iPhone|iPod|iPad)(?!.*Safari/)", ")"), "ig"),
        i = (null === r() || void 0 === r() ? void 0 : null === (e = r().ua) || void 0 === e ? void 0 : e.match(n)) != null,
        s = (null === r() || void 0 === r() ? void 0 : r().name) === "Safari" && !i;
      return (null === r() || void 0 === r() ? void 0 : null === (t = r().os) || void 0 === t ? void 0 : t.family) !== "iOS" || s
    }() ? 0 : 1,
    E = null != i ? encodeURIComponent(i) : null,
    I = null != s ? encodeURIComponent(s) : null,
    T = "".concat(a, "/?link=").concat(_, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(d, "&efr=").concat(c);
  return null != E && (T += "&afl=".concat(E)), null != I && (T += "&ifl=".concat(I)), T
}