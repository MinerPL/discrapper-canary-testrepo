"use strict";
n.d(t, {
  r: function() {
    return u
  },
  u: function() {
    return l
  }
});
var i = n(674180),
  r = n(994592),
  s = n(652515),
  o = n(550951),
  a = n(981631);

function l(e) {
  let t = (0, s.pX)(),
    n = (0, s.RF)(null == e ? void 0 : e.id, "channel_list"),
    l = (0, r.mY)(null == e ? void 0 : e.id),
    u = (0, o.g)(e, "channel_list"),
    {
      shouldHideGuildPurchaseEntryPoints: _
    } = (0, i.uP)(null == e ? void 0 : e.id);
  return !!t && null != e && !_ && (e.hasFeature(a.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE) || n && l || u)
}

function u(e, t) {
  let n = (0, s.vw)(),
    i = (0, s.C4)(null == e ? void 0 : e.id, "channel_list"),
    o = (0, r.on)(null == e ? void 0 : e.id, t);
  return !!n && null != e && (e.hasFeature(a.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE) || i && o)
}