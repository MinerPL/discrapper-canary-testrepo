"use strict";
n.d(t, {
  Z: function() {
    return C
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(100527),
  _ = n(906732),
  d = n(104494),
  c = n(639119),
  E = n(165583),
  I = n(592125),
  T = n(944486),
  h = n(672752),
  S = n(466111),
  f = n(626135),
  N = n(981631),
  A = n(474936),
  m = n(689938),
  O = n(133215);

function R() {
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e("3289").then(n.bind(n, 682609));
    return t => (0, i.jsx)(e, {
      channel: null,
      ...t
    })
  })
}

function C(e) {
  var t;
  let {
    className: n,
    iconOnly: s,
    remaining: C
  } = e, p = (0, a.e7)([T.Z, I.Z], () => {
    let e = I.Z.getChannel(T.Z.getChannelId());
    return (null == e ? void 0 : e.isPrivate()) ? N.ZY5.DM_CHANNEL : N.ZY5.GUILD_CHANNEL
  }), {
    analyticsLocations: g
  } = (0, _.ZP)(u.Z.PREMIUM_UPSELL), L = (0, d.Ng)(), v = (0, c.N)(), D = (0, d.Wp)(L, A.Si.TIER_2), M = (null == v ? void 0 : null === (t = v.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === A.Si.TIER_2;
  return (r.useEffect(() => {
    f.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
      type: "longer messages inline",
      location: {
        location_page: p,
        location_section: N.jXE.CHANNEL_TEXT_AREA
      },
      location_stack: g
    })
  }, [p, g]), (M || D) && C < 0) ? (0, i.jsx)(E.ZP, {
    type: A.cd.MESSAGE_LENGTH_IN_EDITOR_UPSELL,
    subscriptionTier: A.Si.TIER_2,
    context: C,
    discountOffer: L,
    trialOffer: v,
    children: m.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP.format({
      onLearnMore: R
    })
  }) : s ? (0, i.jsx)(l.Clickable, {
    className: O.iconOnly,
    onClick: () => R(),
    children: (0, i.jsx)(l.Tooltip, {
      text: m.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP_WITHOUT_LINK,
      position: "top",
      children: e => (0, i.jsx)(S.Z, {
        className: O.premium,
        ...e
      })
    })
  }) : (0, i.jsxs)("div", {
    className: o()(O.root, n),
    children: [(0, i.jsx)(S.Z, {
      className: O.premium,
      color: h.JX.PREMIUM_TIER_2
    }), (0, i.jsx)(l.Text, {
      className: O.text,
      variant: "text-sm/normal",
      children: m.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP.format({
        onLearnMore: R
      })
    })]
  })
}