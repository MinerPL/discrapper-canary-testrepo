"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("442837"),
  l = n("201895"),
  s = n("557135"),
  i = n("703656"),
  r = n("592125"),
  o = n("979651"),
  u = n("66999"),
  d = n("981631");

function c(e, t) {
  let n = (0, a.useStateFromStores)([r.default], () => r.default.getChannel(t)),
    {
      needSubscriptionToAccess: c
    } = (0, u.default)(null == n ? void 0 : n.id);
  if (null == n || c) return null;
  let f = n.isGuildVocal(),
    h = (0, l.default)({
      channel: n
    });
  return {
    navigateToChannel: () => {
      f ? s.default.handleVoiceConnect({
        channel: n,
        connected: o.default.isInChannel(n.id),
        needSubscriptionToAccess: !1,
        routeDirectlyToChannel: !0
      }) : (0, i.transitionTo)(d.Routes.CHANNEL(e, n.id))
    },
    ariaLabel: h
  }
}