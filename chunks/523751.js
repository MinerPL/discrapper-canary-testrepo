n.d(t, {
  Z: function() {
return L;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(442837),
  l = n(692547),
  u = n(780384),
  c = n(481060),
  d = n(353093),
  _ = n(979264),
  E = n(623624),
  f = n(297700),
  h = n(210887),
  p = n(271383),
  m = n(594174),
  I = n(672752),
  T = n(665786),
  g = n(697725),
  S = n(267642),
  A = n(284363),
  N = n(854218),
  v = n(981631),
  O = n(689938),
  R = n(83024);
let C = {
  [A.Q.STAFF]: {
IconComponent: c.StaffBadgeIcon,
foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
  },
  [A.Q.VERIFIED_AND_PARTNERED]: {
IconComponent: c.CheckmarkSmallIcon,
foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
  },
  [A.Q.VERIFIED]: {
IconComponent: c.CheckmarkSmallIcon,
foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
backgroundDarkColor: l.Z.unsafe_rawColors.GREEN_360.css,
backgroundLightColor: l.Z.unsafe_rawColors.GREEN_360.css
  },
  [A.Q.PARTNERED]: {
IconComponent: (0, c.makeIconCompat)(T.Z),
foregroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
backgroundDarkColor: l.Z.unsafe_rawColors.BRAND_500.css,
backgroundLightColor: l.Z.unsafe_rawColors.BRAND_500.css
  },
  [A.Q.COMMUNITY]: {
IconComponent: c.HomeIcon,
foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
premiumBackgroundColor: I.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css
  },
  [A.Q.DISCOVERABLE]: {
IconComponent: c.GlobeEarthIcon,
foregroundDarkColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
foregroundLightColor: l.Z.unsafe_rawColors.WHITE_400.css,
backgroundDarkColor: l.Z.unsafe_rawColors.WHITE_400.css,
backgroundLightColor: l.Z.unsafe_rawColors.PRIMARY_500.css,
premiumBackgroundColor: I.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
premiumForegroundColor: l.Z.unsafe_rawColors.WHITE_400.css
  },
  [A.Q.CLAN]: {},
  [A.Q.NONE]: {}
};

function y(e) {
  let {
guildTraits: t
  } = e;
  return (0, r.jsxs)('div', {
className: R.tooltipPremiumFooterContainer,
children: [
  (0, r.jsxs)('div', {
    className: s()(R.tooltipPremiumFooterSegment, R.tooltipPremiumFooterTierSegment),
    children: [
      (0, r.jsx)(g.Z, {
        width: 18,
        height: 18,
        className: R.gemIcon
      }),
      (0, r.jsx)(c.Text, {
        variant: 'text-xs/semibold',
        color: 'always-white',
        children: S.nW(t.premiumTier)
      })
    ]
  }),
  (0, r.jsx)('div', {
    className: s()(R.tooltipPremiumFooterSegment),
    children: (0, r.jsx)(c.Text, {
      variant: 'text-xs/semibold',
      color: 'always-white',
      children: O.Z.Messages.SERVER_BADGE_PREMIUM_FOOTER_BOOST_COUNT.format({
        count: t.premiumSubscriberCount
      })
    })
  })
]
  });
}

function D(e) {
  let {
badgeType: t,
guildTraits: n
  } = e, {
tooltipTitle: i,
tooltipSubtitle: a,
tooltipDescription: s
  } = function(e, t) {
let n = t === N.PZ.PUBLIC ? O.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN : O.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY;
switch (e) {
  case A.Q.STAFF:
    return {
      tooltipTitle: O.Z.Messages.INTERNAL_EMPLOYEE_ONLY,
        tooltipSubtitle: O.Z.Messages.INTERNAL_EMPLOYEE_ONLY,
        tooltipDescription: O.Z.Messages.INTERNAL_EMPLOYEE_ONLY
    };
  case A.Q.VERIFIED:
    return {
      tooltipTitle: O.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY,
        tooltipSubtitle: O.Z.Messages.GUILD_VERIFIED,
        tooltipDescription: n
    };
  case A.Q.PARTNERED:
    return {
      tooltipTitle: O.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY,
        tooltipSubtitle: O.Z.Messages.GUILD_PARTNERED,
        tooltipDescription: n
    };
  case A.Q.VERIFIED_AND_PARTNERED:
    return {
      tooltipTitle: O.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY,
        tooltipSubtitle: O.Z.Messages.GUILD_VERIFIED_AND_PARTNERED,
        tooltipDescription: n
    };
  case A.Q.COMMUNITY:
    return {
      tooltipTitle: O.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY,
        tooltipDescription: O.Z.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY
    };
  case A.Q.DISCOVERABLE:
    return {
      tooltipTitle: O.Z.Messages.SERVER_BADGE_TITLE_COMMUNITY,
        tooltipDescription: O.Z.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN
    };
  case A.Q.CLAN:
    return {
      tooltipTitle: O.Z.Messages.SERVER_BADGE_TITLE_CLAN,
        tooltipDescription: O.Z.Messages.SERVER_BADGE_DESCRIPTION_APPLICATION_REQUIRED
    };
  default:
    return {
      tooltipTitle: O.Z.Messages.SERVER_BADGE_TITLE_UNKNOWN
    };
}
  }(t, n.visibility);
  return (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsxs)('div', {
    className: R.tooltipBodyContainer,
    children: [
      (0, r.jsx)(c.Text, {
        color: 'interactive-active',
        variant: 'text-xs/bold',
        children: i
      }),
      null != a ? (0, r.jsx)(c.Text, {
        color: 'text-muted',
        variant: 'text-xs/medium',
        children: a
      }) : null,
      null != s ? (0, r.jsx)(c.Text, {
        color: 'text-muted',
        variant: 'text-xs/medium',
        children: s
      }) : null
    ]
  }),
  n.premium ? (0, r.jsx)(y, {
    guildTraits: n
  }) : null
]
  });
}

function L(e) {
  let t, n, {
  guild: a,
  tooltipColor: l = c.Tooltip.Colors.BRAND,
  tooltipPosition: I,
  className: T,
  flowerStarClassName: g,
  iconClassName: S,
  badgeStrokeColor: O,
  badgeColor: y,
  size: L = 16,
  disableBoostClick: b,
  'aria-label': M = !1
} = e,
P = (0, o.e7)([
  m.default,
  p.ZP
], () => {
  let e = m.default.getCurrentUser();
  return p.ZP.isMember(null == a ? void 0 : a.id, null == e ? void 0 : e.id);
}),
U = (0, o.e7)([h.Z], () => h.Z.theme),
w = (0, N.XX)(a),
x = (0, A.i)(w),
G = i.useCallback(e => {
  w.premium && P && !b && (e.stopPropagation(), e.preventDefault(), (0, E.f)({
    guildId: a.id,
    location: {
      section: v.jXE.GUILD_HEADER,
      object: v.qAy.BOOST_GEM_ICON
    }
  }));
}, [
  w.premium,
  P,
  b,
  a.id
]);
  if (x === A.Q.NONE)
return null;
  if (x === A.Q.CLAN) {
var k;
let e = (0, d.ky)(a.id, null === (k = a.clan) || void 0 === k ? void 0 : k.badge, L);
return (0, r.jsx)(c.Tooltip, {
  color: l,
  position: I,
  'aria-label': M,
  text: (0, r.jsx)(D, {
    badgeType: x,
    guildTraits: w
  }),
  tooltipContentClassName: R.tooltipRemovePadding,
  children: t => (0, r.jsx)(c.Clickable, {
    ...t,
    onClick: G,
    className: s()(R.clanBadgeContainer, T),
    children: (0, r.jsx)(_.KQ, {
      src: e,
      size: L
    })
  })
});
  }
  let {
IconComponent: B,
backgroundDarkColor: F,
backgroundLightColor: V,
foregroundDarkColor: H,
foregroundLightColor: Z,
premiumBackgroundColor: Y,
premiumForegroundColor: j
  } = C[x];
  if (null == B)
return null;
  w.premium && (t = j, n = Y);
  let W = (0, u.wj)(U) ? H : Z,
K = (0, u.wj)(U) ? F : V;
  return t = null != t ? t : W, n = null != n ? n : K, (0, r.jsx)(c.Tooltip, {
color: l,
position: I,
'aria-label': M,
text: (0, r.jsx)(D, {
  badgeType: x,
  guildTraits: w
}),
tooltipContentClassName: R.tooltipRemovePadding,
children: e => (0, r.jsx)(c.Clickable, {
  onClick: G,
  children: (0, r.jsx)(f.Z, {
    ...e,
    className: T,
    flowerStarClassName: g,
    color: null != n ? n : y,
    stroke: O,
    size: L,
    children: (0, r.jsx)(B, {
      className: S,
      color: null != t ? t : 'currentColor'
    })
  })
})
  });
}