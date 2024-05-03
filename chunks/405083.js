"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var i = n("355467"),
  s = n("106976"),
  r = n("703656"),
  l = n("914010"),
  u = n("563132"),
  o = n("791785"),
  d = n("981631");

function c(e) {
  let {
    onClose: t,
    onComplete: n,
    forcesTransitionToGuild: c,
    ...h
  } = e, {
    subscriptionMetadataRequest: f
  } = (0, u.usePaymentContext)();
  return (0, a.jsx)(o.PaymentModal, {
    ...h,
    onComplete: n,
    onClose: e => {
      t(e);
      let a = null == f ? void 0 : f.guild_id;
      e && null != a && (i.fetchSubscriptions(), (0, s.fetchEntitlementsForGuild)(a), null == n || n(), null != a && (c || l.default.getGuildId() !== a) && (0, r.transitionTo)(d.Routes.CHANNEL(a)))
    },
    forceNewPaymentModal: !0
  })
}