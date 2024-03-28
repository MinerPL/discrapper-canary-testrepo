"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("47120"), n("653041");
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("812206"),
  r = n("82950"),
  o = n("434404"),
  u = n("106976"),
  d = n("270144"),
  c = n("981631"),
  f = n("689938"),
  E = n("466389");

function h(e) {
  let {
    guild: t
  } = e, n = (0, d.useUnseenEndedApplicationSubscriptionEntitlements)(t), h = () => (0, u.dismissApplicationSubscriptionExpirationNotice)(t.id), _ = s.useMemo(() => new Set(n.map(e => e.applicationId)), [n]), C = (0, l.useStateFromStoresArray)([i.default], () => {
    let e = [];
    for (let t of _) {
      let n = i.default.getApplication(t);
      null != n && e.push(n)
    }
    return e
  }, [_]);
  if (0 === C.length) return null;
  let m = "";
  return m = 1 === C.length ? f.default.Messages.ONE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
    a: C[0].name
  }) : 2 === C.length ? f.default.Messages.TWO_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
    a: C[0].name,
    b: C[1].name
  }) : 3 === C.length ? f.default.Messages.THREE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
    a: C[0].name,
    b: C[1].name,
    c: C[2].name
  }) : f.default.Messages.MORE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT, (0, a.jsx)(r.default, {
    guild: t,
    onDismissed: h,
    message: m,
    type: c.ChannelNoticeTypes.APPLICATION_SUBSCRIPTION_EXPIRATION,
    image: E,
    onClick: () => {
      h(), o.default.open(t.id, c.GuildSettingsSections.INTEGRATIONS)
    },
    imageMarginTop: 6,
    imageMarginX: 46,
    cta: f.default.Messages.APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CTA
  })
}