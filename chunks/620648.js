i.d(s, {
  Z: function() {
return p;
  }
});
var n = i(735250),
  l = i(470079),
  t = i(442837),
  o = i(481060),
  a = i(666520),
  r = i(580552),
  d = i(169559),
  c = i(369077),
  u = i(706454),
  I = i(246946),
  _ = i(785717),
  f = i(648067),
  m = i(588822),
  E = i(900927),
  v = i(652853),
  S = i(335191),
  x = i(988246),
  Z = i(689938),
  h = i(678108);

function p(e) {
  var s;
  let {
user: i,
displayProfile: p,
autoFocusNote: T = !1,
scrollToConnections: g = !1
  } = e, {
trackUserProfileAction: N
  } = (0, _.KZ)(), j = (0, t.e7)([I.Z], () => I.Z.hidePersonalInformation), {
theme: C
  } = (0, v.z)(), A = (0, t.e7)([u.default], () => u.default.locale), R = (0, d.Z)('user_profile'), M = (null == p ? void 0 : p.bio) != null && (null == p ? void 0 : p.bio) !== '' || (0, r.Z)(i.id), U = (0, f.Z)(i.id), L = l.useRef(null);
  return (l.useLayoutEffect(() => {
if (g) {
  var e;
  null == L || null === (e = L.current) || void 0 === e || e.scrollIntoView();
}
  }, [g]), j) ? (0, n.jsx)(x.Z, {}) : (0, n.jsxs)(o.ScrollerThin, {
fade: !0,
className: h.infoScroller,
children: [
  (0, n.jsxs)('div', {
    className: h.userInfoSection,
    children: [
      M && (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(o.Heading, {
            variant: 'eyebrow',
            className: h.userInfoSectionHeader,
            children: Z.Z.Messages.USER_PROFILE_ABOUT_ME
          }),
          (0, n.jsx)(m.Z, {
            className: h.userInfoText,
            userBio: null !== (s = null == p ? void 0 : p.bio) && void 0 !== s ? s : '',
            userId: i.id
          })
        ]
      }),
      (0, n.jsxs)('div', {
        children: [
          (0, n.jsx)(o.Heading, {
            variant: 'eyebrow',
            className: h.userInfoSectionHeader,
            children: Z.Z.Messages.USER_PROFILE_MEMBER_SINCE
          }),
          (0, n.jsx)(E.Z, {
            userId: i.id,
            textClassName: h.userInfoText
          })
        ]
      }),
      R && (0, n.jsx)('div', {
        className: h.clans,
        children: (0, n.jsx)('div', {
          className: h.userInfoText,
          children: (0, n.jsx)(c.Gd, {
            userId: i.id
          })
        })
      }),
      !i.isNonUserBot() && (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(o.Heading, {
            variant: 'eyebrow',
            className: h.userInfoSectionHeader,
            children: Z.Z.Messages.NOTE
          }),
          (0, n.jsx)(a.Z, {
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
  (0, n.jsx)(S.OA, {
    ref: L,
    connectedAccounts: U,
    theme: C,
    locale: A,
    className: h.userInfoSection,
    userId: i.id
  })
]
  });
}