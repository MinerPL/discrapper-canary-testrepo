"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var n = s("470079"),
  i = s("442837"),
  r = s("598077"),
  l = s("699516"),
  a = s("295226"),
  o = s("786397"),
  C = s("474936");

function u() {
  let e = (0, o.useTrialOffer)(C.PREMIUM_TIER_2_REFERRAL_TRIAL_ID),
    t = (0, i.useStateFromStores)([a.default], () => a.default.getReferrer(null == e ? void 0 : e.trial_id)),
    s = (0, i.useStateFromStores)([l.default], () => null == t || l.default.isBlocked(t.id));
  return n.useMemo(() => s || null == t ? null : new r.default(t), [t, s])
}