i.d(n, {
  Z: function() {
return p;
  }
});
var s = i(735250),
  l = i(470079),
  o = i(442837),
  t = i(481060),
  r = i(666520),
  a = i(580552),
  d = i(169559),
  c = i(369077),
  u = i(706454),
  I = i(246946),
  _ = i(785717),
  f = i(648067),
  E = i(588822),
  m = i(900927),
  S = i(652853),
  Z = i(335191),
  x = i(988246),
  v = i(689938),
  h = i(678108);

function p(e) {
  var n;
  let {
user: i,
displayProfile: p,
autoFocusNote: T = !1,
scrollToConnections: g = !1
  } = e, {
trackUserProfileAction: N
  } = (0, _.KZ)(), C = (0, o.e7)([I.Z], () => I.Z.hidePersonalInformation), {
theme: j
  } = (0, S.z)(), A = (0, o.e7)([u.default], () => u.default.locale), R = (0, d.Z)('user_profile'), O = (null == p ? void 0 : p.bio) != null && (null == p ? void 0 : p.bio) !== '' || (0, a.Z)(i.id), U = (0, f.Z)(i.id), M = l.useRef(null);
  return (l.useLayoutEffect(() => {
if (g) {
  var e;
  null == M || null === (e = M.current) || void 0 === e || e.scrollIntoView();
}
  }, [g]), C) ? (0, s.jsx)(x.Z, {}) : (0, s.jsxs)(t.ScrollerThin, {
fade: !0,
className: h.infoScroller,
children: [
  (0, s.jsxs)('div', {
    className: h.userInfoSection,
    children: [
      O && (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)(t.Heading, {
            variant: 'eyebrow',
            className: h.userInfoSectionHeader,
            children: v.Z.Messages.USER_PROFILE_ABOUT_ME
          }),
          (0, s.jsx)(E.Z, {
            className: h.userInfoText,
            userBio: null !== (n = null == p ? void 0 : p.bio) && void 0 !== n ? n : '',
            userId: i.id
          })
        ]
      }),
      (0, s.jsxs)('div', {
        children: [
          (0, s.jsx)(t.Heading, {
            variant: 'eyebrow',
            className: h.userInfoSectionHeader,
            children: v.Z.Messages.USER_PROFILE_MEMBER_SINCE
          }),
          (0, s.jsx)(m.Z, {
            userId: i.id,
            textClassName: h.userInfoText
          })
        ]
      }),
      R && (0, s.jsx)('div', {
        className: h.clans,
        children: (0, s.jsx)('div', {
          className: h.userInfoText,
          children: (0, s.jsx)(c.Gd, {
            userId: i.id
          })
        })
      }),
      !i.isNonUserBot() && (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)(t.Heading, {
            variant: 'eyebrow',
            className: h.userInfoSectionHeader,
            children: v.Z.Messages.NOTE
          }),
          (0, s.jsx)(r.Z, {
            userId: i.id,
            autoFocus: T,
            className: h.note,
            onUpdate: () => N({
              action: 'SET_NOTE'
            })
          })
        ]
      })
    ]
  }),
  (0, s.jsx)(Z.OA, {
    ref: M,
    connectedAccounts: U,
    theme: j,
    locale: A,
    className: h.userInfoSection,
    userId: i.id
  })
]
  });
}