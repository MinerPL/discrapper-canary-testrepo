t.d(n, {
  Z: function() {
return m;
  }
});
var r = t(735250);
t(470079);
var i = t(120356),
  o = t.n(i),
  l = t(442837),
  u = t(481060),
  a = t(666188),
  s = t(372769),
  c = t(523751),
  d = t(623624),
  _ = t(290034),
  f = t(271383),
  E = t(594174),
  I = t(267642),
  g = t(981631),
  p = t(689938),
  S = t(621908);

function C(e) {
  let {
guild: n,
isBannerVisible: t,
disableBoostClick: i
  } = e, o = (0, l.e7)([
E.default,
f.ZP
  ], () => {
let e = E.default.getCurrentUser();
return f.ZP.isMember(n.id, null == e ? void 0 : e.id);
  }), {
premiumTier: a,
premiumSubscriberCount: s
  } = n;
  if (0 === s && a === g.Eu4.NONE)
return null;
  let c = e => {
  e.stopPropagation(), e.preventDefault(), o && !i && (0, d.f)({
    guildId: n.id,
    location: {
      section: g.jXE.GUILD_HEADER,
      object: g.qAy.BOOST_GEM_ICON
    }
  });
},
C = a === g.Eu4.NONE ? p.Z.Messages.PREMIUM_GUILD_HEADER_BADGE_NO_TIER : I.nW(a),
T = (0, r.jsxs)(r.Fragment, {
  children: [
    (0, r.jsx)('div', {
      className: S.tierTooltipTitle,
      children: C
    }),
    (0, r.jsx)('div', {
      children: p.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SUBSCRIBER_COUNT_TOOLTIP.format({
        subscriberCount: s
      })
    })
  ]
});
  return (0, r.jsx)('div', {
className: S.guildIconContainer,
children: (0, r.jsx)(u.Tooltip, {
  text: T,
  position: 'bottom',
  'aria-label': null != C ? C : '',
  children: e => (0, r.jsx)(u.Clickable, {
    ...e,
    className: S.__invalid_premiumGuildIcon,
    onClick: c,
    children: (0, r.jsx)(_.Z, {
      premiumTier: a,
      iconBackgroundClassName: t ? S.boostedGuildTierIconBackgroundWithVisibleBanner : null,
      iconClassName: t && a !== g.Eu4.TIER_3 ? S.boostedGuildTierMutedIconWithVisibleBanner : null
    })
  })
})
  });
}

function T(e) {
  let {
guild: n,
disableColor: t,
disableBoostClick: i
  } = e;
  return (0, a.Z)(n) ? (0, r.jsx)('div', {
className: S.guildIconV2Container,
children: (0, r.jsx)(c.Z, {
  guild: n,
  tooltipPosition: 'bottom',
  tooltipColor: u.Tooltip.Colors.PRIMARY,
  className: o()(S.guildBadge, {
    [S.disableColor]: t
  }),
  disableBoostClick: i
})
  }) : (0, r.jsx)('div', {
className: S.guildIconContainer,
children: (0, r.jsx)(s.Z, {
  guild: n,
  size: 20,
  tooltipPosition: 'bottom',
  tooltipColor: u.Tooltip.Colors.PRIMARY,
  className: o()(S.guildBadge, {
    [S.disableColor]: t
  })
})
  });
}

function m(e) {
  let {
guild: n,
isBannerVisible: t,
disableBoostClick: i
  } = e;
  return (0, a.Z)(n) ? (0, r.jsx)(T, {
guild: n,
disableColor: !1,
disableBoostClick: i
  }) : n.hasFeature(g.oNc.VERIFIED) || n.hasFeature(g.oNc.PARTNERED) ? (0, r.jsx)(T, {
guild: n,
disableColor: !t
  }) : (0, r.jsx)(C, {
guild: n,
isBannerVisible: t,
disableBoostClick: i
  });
}