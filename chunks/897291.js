"use strict";
var i = n(735250),
  r = n(470079),
  s = n(996146),
  o = n(481060),
  a = n(100527),
  l = n(906732),
  u = n(963249),
  _ = n(147915),
  d = n(51144),
  c = n(981631),
  E = n(474936),
  I = n(689938),
  T = n(838329);
t.Z = r.memo(function(e) {
  let {
    disabled: t,
    channel: n
  } = e, {
    analyticsLocations: r
  } = (0, l.ZP)(a.Z.GIFT_BUTTON), h = (0, d.Ft)(n), {
    Component: S,
    events: f,
    play: N
  } = (0, s.$)();
  if (t) return null;
  let A = () => (0, u.Z)({
    isGift: !0,
    giftRecipient: null === h ? void 0 : h,
    initialPlanId: null,
    subscriptionTier: E.Si.TIER_2,
    analyticsLocations: r,
    analyticsObject: {
      page: n.isPrivate() ? c.ZY5.DM_CHANNEL : c.ZY5.GUILD_CHANNEL,
      section: c.jXE.CHANNEL_TEXT_AREA,
      object: c.qAy.BUTTON_ICON,
      objectType: c.Qqv.GIFT
    }
  });
  return (0, i.jsx)(o.Tooltip, {
    text: I.Z.Messages.PREMIUM_GIFT_BUTTON_TOOLTIP,
    children: e => (0, i.jsx)(_.Z, {
      ...e,
      innerClassName: T.button,
      isActive: !1,
      "aria-label": I.Z.Messages.PREMIUM_GIFT_BUTTON_LABEL,
      "aria-haspopup": "dialog",
      onClick: () => {
        A(), N()
      },
      ...f,
      children: (0, i.jsx)(S, {
        color: "currentColor"
      })
    })
  })
})