"use strict";
n.r(t), n.d(t, {
  isTablet: function() {
    return p
  },
  isMobile: function() {
    return v
  },
  isIOSWeb: function() {
    return S
  }
}), n("222007");
var i, s, r, a, o, l, u, d, c, f, _ = n("383536"),
  h = n.n(_);
let g = new Set(["iPad", "Kindle", "Kindle Fire", "Nook", "PlayBook"]),
  m = new Set(["Android", "iOS", "Windows Phone"]),
  E = (null === (s = window) || void 0 === s ? void 0 : null === (i = s.navigator) || void 0 === i ? void 0 : i.platform) === "MacIntel" && void 0 !== (null === (a = window) || void 0 === a ? void 0 : null === (r = a.navigator) || void 0 === r ? void 0 : r.standalone) && (null === (l = window) || void 0 === l ? void 0 : null === (o = l.navigator) || void 0 === o ? void 0 : o.maxTouchPoints) > 1,
  p = g.has(null !== (c = h.product) && void 0 !== c ? c : "") || E,
  v = !p && m.has(null !== (f = null == h ? void 0 : null === (u = h.os) || void 0 === u ? void 0 : u.family) && void 0 !== f ? f : ""),
  S = (null == h ? void 0 : null === (d = h.os) || void 0 === d ? void 0 : d.family) === "iOS"