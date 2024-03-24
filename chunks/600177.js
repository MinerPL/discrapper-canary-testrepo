"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007"), n("424973");
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("299285"),
  r = n("963662"),
  o = n("592407"),
  u = n("927078"),
  d = n("991254"),
  c = n("49111"),
  f = n("782340"),
  E = n("630159");

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
  let S = "";
  return S = 1 === C.length ? f.default.Messages.ONE_APPLICATION_SUBSCRIPTION_EXPIRATION_CHANNEL_NOTICE_CONTENT.format({
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
    message: S,
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