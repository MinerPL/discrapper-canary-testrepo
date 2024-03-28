"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("430824"),
  r = n("869782"),
  o = n("630388"),
  u = n("35125"),
  d = n("523361"),
  c = n("981631");

function f(e) {
  var t, n;
  let {
    channel: f,
    message: E
  } = e, _ = null !== (n = null === (t = E.roleSubscriptionData) || void 0 === t ? void 0 : t.is_renewal) && void 0 !== n && n ? (0, d.getRenewButtonLabels)() : (0, d.getJoinButtonLabels)(), T = f.guild_id, m = (0, l.useStateFromStores)([i.default], () => {
    var e;
    return null === (e = i.default.getGuild(T)) || void 0 === e ? void 0 : e.systemChannelFlags
  }, [T]), I = null != m && (0, o.hasFlag)(m, c.SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES), p = a.useMemo(() => (0, u.getRoleSubscriptionPurchaseSystemMessageEventProperties)(f, E), [f, E]);
  return I ? null : (0, s.jsx)(r.default, {
    channel: f,
    message: E,
    buttonLabels: _,
    stickers: d.STICKERS,
    event: c.AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
    eventProperties: p
  })
}