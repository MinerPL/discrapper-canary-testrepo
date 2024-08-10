n(47120);
var r, i, a = n(735250),
  s = n(470079),
  o = n(120356),
  l = n.n(o),
  u = n(442837),
  c = n(481060),
  d = n(906732),
  _ = n(318374),
  E = n(522289),
  f = n(565138),
  h = n(314897);
n(5192);
var p = n(785717),
  m = n(310427),
  I = n(726059),
  T = n(162267),
  g = n(171368),
  S = n(228168),
  A = n(689938),
  N = n(926708);
(i = r || (r = {}))[i.NOT_CHECKED = 0] = 'NOT_CHECKED', i[i.NOT_OVERFLOWING = 1] = 'NOT_OVERFLOWING', i[i.OVERFLOWING_LARGE_ONLY = 2] = 'OVERFLOWING_LARGE_ONLY', i[i.OVERFLOWING_ALL = 3] = 'OVERFLOWING_ALL';
let v = s.memo(function(e) {
  let {
user: t,
mutualFriends: n,
mutualGuilds: r,
onClose: i,
analyticsLocation: o,
maxIcons: u = 3,
underlineTextOnHover: h = !1,
showTooltips: m = !0
  } = e, {
analyticsLocations: I
  } = (0, d.ZP)(), {
context: T
  } = (0, p.KZ)(), v = s.useMemo(() => {
var e;
return null !== (e = null == n ? void 0 : n.map(e => {
  let {
    user: t
  } = e;
  return t;
})) && void 0 !== e ? e : [];
  }, [n]), O = s.useMemo(() => {
var e;
return null !== (e = null == r ? void 0 : r.map(e => {
  let {
    guild: t
  } = e;
  return t;
})) && void 0 !== e ? e : [];
  }, [r]), R = s.useMemo(() => A.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_SHORT.format({
count: v.length
  }), [v]), C = s.useMemo(() => A.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_SHORT.format({
count: O.length
  }), [O]), y = s.useRef(null), [D, L] = s.useState(!1), [b, M] = s.useState(!1), P = s.useCallback(() => {
if (null != y.current) {
  var e;
  M((null === (e = y.current) || void 0 === e ? void 0 : e.clientHeight) > 19), L(!0);
}
  }, []), U = s.useCallback(e => () => {
(0, g.openUserProfileModal)({
  ...T,
  userId: t.id,
  sourceAnalyticsLocations: I,
  section: e,
  analyticsLocation: o
}), null == i || i();
  }, [
o,
I,
i,
t.id,
T
  ]);
  s.useEffect(() => {
P();
  }, [
P,
R
  ]);
  let w = v.length > 0,
x = O.length > 0;
  return (0, a.jsxs)('div', {
className: l()(N.compactItemContainer, !D && N.hideElement),
ref: y,
children: [
  w && (() => {
    let e = (0, a.jsxs)(c.Clickable, {
      onClick: U(S.oh.MUTUAL_FRIENDS),
      className: l()(N.avatarAndTextContainer, N.__invalid_friendsContainer),
      children: [
        (0, a.jsx)('div', {
          className: N.__invalid_avatars,
          children: (0, a.jsx)(_.Z, {
            maxUsers: u,
            users: v,
            size: c.AvatarSizes.SIZE_16,
            hideOverflowCount: !0,
            disableUsernameTooltip: !0
          })
        }),
        (0, a.jsx)(c.Text, {
          className: l()(N.itemizedListText, h && N.underlineOnHover),
          variant: 'text-sm/normal',
          color: 'interactive-normal',
          children: R
        })
      ]
    });
    return m ? (0, a.jsx)(c.TooltipContainer, {
      text: A.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_TOOLTIP,
      children: e
    }) : e;
  })(),
  w && x && (0, a.jsx)('div', {
    'aria-hidden': 'true',
    className: N.dotSpacer
  }),
  x && (() => {
    let e = (0, a.jsxs)(c.Clickable, {
      onClick: U(S.oh.MUTUAL_GUILDS),
      className: l()(N.avatarAndTextContainer, N.serverContainer),
      children: [
        !b && (0, a.jsx)('div', {
          className: N.__invalid_avatars,
          children: (0, a.jsx)(E.Z, {
            maxGuilds: u,
            guilds: O,
            size: f.Z.Sizes.SMOL,
            hideOverflowCount: !0,
            disableGuildNameTooltip: !0
          })
        }),
        (0, a.jsx)(c.Text, {
          className: l()(N.itemizedListText, h && N.underlineOnHover),
          variant: 'text-sm/normal',
          color: 'interactive-normal',
          children: C
        })
      ]
    });
    return m ? (0, a.jsx)(c.TooltipContainer, {
      text: A.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_TOOLTIP,
      children: e
    }) : e;
  })()
]
  });
});
t.ZP = s.memo(function(e) {
  var t, n;
  let {
user: r,
onClose: i,
className: s,
sourceAnaylticsLocations: o
  } = e, {
analyticsLocations: _
  } = (0, d.ZP)(), E = null !== (n = null !== (t = null == o ? void 0 : o[0]) && void 0 !== t ? t : null == _ ? void 0 : _[0]) && void 0 !== n ? n : null, f = (0, u.e7)([h.default], () => h.default.getId()), p = r.id === f, g = r.bot || p, {
enabled: S
  } = (0, m.qI)({
autoTrackExposure: !1,
location: E,
disable: g
  }), {
mutualGuilds: O
  } = (0, T.Z)(r.id), {
mutualFriends: R
  } = (0, I.Z)(r.id);
  return !S || g || (null == R || 0 === R.length) && (null == O || 0 === O.length) ? null : (0, a.jsxs)('div', {
className: l()(N.mainContainer, s),
children: [
  (0, a.jsx)(c.Heading, {
    variant: 'eyebrow',
    className: N.__invalid_title,
    children: A.Z.Messages.USER_PROFILE_MUTUALS_TITLE
  }),
  (0, a.jsx)(v, {
    user: r,
    mutualFriends: R,
    mutualGuilds: O,
    onClose: i
  })
]
  });
});