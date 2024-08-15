n(47120);
var r, i, a = n(735250),
  s = n(470079),
  o = n(120356),
  l = n.n(o),
  u = n(481060),
  c = n(906732),
  d = n(318374),
  _ = n(522289),
  E = n(565138);
n(5192);
var f = n(785717),
  h = n(726059),
  p = n(162267),
  m = n(171368),
  I = n(228168),
  T = n(689938),
  g = n(500462);
(i = r || (r = {}))[i.NOT_CHECKED = 0] = 'NOT_CHECKED', i[i.NOT_OVERFLOWING = 1] = 'NOT_OVERFLOWING', i[i.OVERFLOWING_LARGE_ONLY = 2] = 'OVERFLOWING_LARGE_ONLY', i[i.OVERFLOWING_ALL = 3] = 'OVERFLOWING_ALL';
let S = s.memo(function(e) {
  let {
user: t,
mutualFriends: n,
mutualGuilds: r,
onClose: i,
analyticsLocation: o,
maxIcons: h = 3,
underlineTextOnHover: p = !1,
showTooltips: S = !0
  } = e, {
analyticsLocations: A
  } = (0, c.ZP)(), {
context: N
  } = (0, f.KZ)(), v = s.useMemo(() => {
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
  }, [r]), R = s.useMemo(() => T.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_SHORT.format({
count: v.length
  }), [v]), C = s.useMemo(() => T.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_SHORT.format({
count: O.length
  }), [O]), y = s.useRef(null), [D, L] = s.useState(!1), [b, M] = s.useState(!1), P = s.useCallback(() => {
if (null != y.current) {
  var e;
  M((null === (e = y.current) || void 0 === e ? void 0 : e.clientHeight) > 19), L(!0);
}
  }, []), U = s.useCallback(e => () => {
(0, m.openUserProfileModal)({
  ...N,
  userId: t.id,
  sourceAnalyticsLocations: A,
  section: e,
  analyticsLocation: o
}), null == i || i();
  }, [
o,
A,
i,
t.id,
N
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
className: l()(g.compactItemContainer, !D && g.hideElement),
ref: y,
children: [
  w && (() => {
    let e = (0, a.jsxs)(u.Clickable, {
      onClick: U(I.oh.MUTUAL_FRIENDS),
      className: l()(g.avatarAndTextContainer, g.__invalid_friendsContainer),
      children: [
        (0, a.jsx)('div', {
          className: g.__invalid_avatars,
          children: (0, a.jsx)(d.Z, {
            maxUsers: h,
            users: v,
            size: u.AvatarSizes.SIZE_16,
            hideOverflowCount: !0,
            disableUsernameTooltip: !0
          })
        }),
        (0, a.jsx)(u.Text, {
          className: l()(g.itemizedListText, p && g.underlineOnHover),
          variant: 'text-sm/normal',
          color: 'interactive-normal',
          children: R
        })
      ]
    });
    return S ? (0, a.jsx)(u.TooltipContainer, {
      text: T.Z.Messages.USER_PROFILE_MUTUAL_FRIENDS_TOOLTIP,
      children: e
    }) : e;
  })(),
  w && x && (0, a.jsx)('div', {
    'aria-hidden': 'true',
    className: g.dotSpacer
  }),
  x && (() => {
    let e = (0, a.jsxs)(u.Clickable, {
      onClick: U(I.oh.MUTUAL_GUILDS),
      className: l()(g.avatarAndTextContainer, g.serverContainer),
      children: [
        !b && (0, a.jsx)('div', {
          className: g.__invalid_avatars,
          children: (0, a.jsx)(_.Z, {
            maxGuilds: h,
            guilds: O,
            size: E.Z.Sizes.SMOL,
            hideOverflowCount: !0,
            disableGuildNameTooltip: !0
          })
        }),
        (0, a.jsx)(u.Text, {
          className: l()(g.itemizedListText, p && g.underlineOnHover),
          variant: 'text-sm/normal',
          color: 'interactive-normal',
          children: C
        })
      ]
    });
    return S ? (0, a.jsx)(u.TooltipContainer, {
      text: T.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_TOOLTIP,
      children: e
    }) : e;
  })()
]
  });
});
t.ZP = s.memo(function(e) {
  let {
user: t,
onClose: n,
className: r
  } = e, {
mutualGuilds: i
  } = (0, p.Z)(t.id), {
mutualFriends: s
  } = (0, h.Z)(t.id);
  return (null == s || 0 === s.length) && (null == i || 0 === i.length) ? null : (0, a.jsxs)('div', {
className: l()(g.mainContainer, r),
children: [
  (0, a.jsx)(u.Heading, {
    variant: 'eyebrow',
    className: g.__invalid_title,
    children: T.Z.Messages.USER_PROFILE_MUTUALS_TITLE
  }),
  (0, a.jsx)(S, {
    user: t,
    mutualFriends: s,
    mutualGuilds: i,
    onClose: n
  })
]
  });
});