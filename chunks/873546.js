"use strict";
n.d(t, {
  Em: function() {
    return f
  },
  bO: function() {
    return A
  },
  tq: function() {
    return N
  }
}), n(47120);
var i, r, s, o, a, l, u, _, d, c, E = n(264344),
  I = n.n(E);
let T = new Set(["iPad", "Kindle", "Kindle Fire", "Nook", "PlayBook"]),
  h = new Set(["Android", "iOS", "Windows Phone"]),
  S = (null === (r = window) || void 0 === r ? void 0 : null === (i = r.navigator) || void 0 === i ? void 0 : i.platform) === "MacIntel" && void 0 !== (null === (o = window) || void 0 === o ? void 0 : null === (s = o.navigator) || void 0 === s ? void 0 : s.standalone) && (null === (l = window) || void 0 === l ? void 0 : null === (a = l.navigator) || void 0 === a ? void 0 : a.maxTouchPoints) > 1,
  f = T.has(null !== (d = I().product) && void 0 !== d ? d : "") || S,
  N = !f && h.has(null !== (c = null === I() || void 0 === I() ? void 0 : null === (u = I().os) || void 0 === u ? void 0 : u.family) && void 0 !== c ? c : ""),
  A = (null === I() || void 0 === I() ? void 0 : null === (_ = I().os) || void 0 === _ ? void 0 : _.family) === "iOS"