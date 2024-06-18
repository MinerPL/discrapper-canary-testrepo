"use strict";
n.d(t, {
  PZ: function() {
    return i
  },
  XX: function() {
    return a
  }
}), n(47120);
var i, r, s = n(601964),
  o = n(981631);

function a(e) {
  let t = new Set(e.features),
    n = t.has(o.oNc.COMMUNITY) && t.has(o.oNc.DISCOVERABLE) ? "PUBLIC" : "INVITE_ONLY",
    i = function(e) {
      return null != e && (e instanceof s.ZP ? e.premiumSubscriberCount > 0 || e.premiumTier > o.Eu4.NONE : null != e.premiumSubscriptionCount && e.premiumSubscriptionCount > 0)
    }(e),
    r = 0;
  if (i) {
    var a;
    r = null !== (a = e instanceof s.ZP ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== a ? a : 0
  }
  let l = e instanceof s.ZP ? e.premiumTier : o.Eu4.NONE;
  return {
    verified: t.has(o.oNc.VERIFIED),
    partnered: t.has(o.oNc.PARTNERED),
    community: t.has(o.oNc.COMMUNITY),
    staff: t.has(o.oNc.INTERNAL_EMPLOYEE_ONLY),
    clan: t.has(o.oNc.CLAN),
    visibility: n,
    premium: i,
    premiumSubscriberCount: r,
    premiumTier: l
  }
}(r = i || (i = {})).PUBLIC = "PUBLIC", r.INVITE_ONLY = "INVITE_ONLY"