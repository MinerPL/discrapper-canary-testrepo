n.d(s, {
  Z: function() {
return p;
  }
});
var i = n(735250),
  t = n(470079),
  l = n(442837),
  o = n(481060),
  a = n(666520),
  r = n(580552),
  d = n(169559),
  c = n(369077),
  u = n(706454),
  _ = n(246946),
  I = n(785717),
  f = n(648067),
  E = n(588822),
  m = n(900927),
  S = n(652853),
  x = n(335191),
  v = n(988246),
  Z = n(689938),
  h = n(853831);

function p(e) {
  var s;
  let {
user: n,
displayProfile: p,
autoFocusNote: T = !1,
scrollToConnections: g = !1
  } = e, {
trackUserProfileAction: N
  } = (0, I.KZ)(), C = (0, l.e7)([_.Z], () => _.Z.hidePersonalInformation), {
theme: j
  } = (0, S.z)(), A = (0, l.e7)([u.default], () => u.default.locale), R = (0, d.Z)('user_profile'), O = (null == p ? void 0 : p.bio) != null && (null == p ? void 0 : p.bio) !== '' || (0, r.Z)(n.id), L = (0, f.Z)(n.id), M = t.useRef(null);
  return (t.useLayoutEffect(() => {
if (g) {
  var e;
  null == M || null === (e = M.current) || void 0 === e || e.scrollIntoView();
}
  }, [g]), C) ? (0, i.jsx)(v.Z, {}) : (0, i.jsxs)(o.ScrollerThin, {
fade: !0,
className: h.infoScroller,
children: [
  (0, i.jsxs)('div', {
    className: h.userInfoSection,
    children: [
      O && (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(o.Heading, {
            variant: 'eyebrow',
            className: h.userInfoSectionHeader,
            children: Z.Z.Messages.USER_PROFILE_ABOUT_ME
          }),
          (0, i.jsx)(E.Z, {
            className: h.userInfoText,
            userBio: null !== (s = null == p ? void 0 : p.bio) && void 0 !== s ? s : '',
            userId: n.id
          })
        ]
      }),
      (0, i.jsxs)('div', {
        children: [
          (0, i.jsx)(o.Heading, {
            variant: 'eyebrow',
            className: h.userInfoSectionHeader,
            children: Z.Z.Messages.USER_PROFILE_MEMBER_SINCE
          }),
          (0, i.jsx)(m.Z, {
            userId: n.id,
            textClassName: h.userInfoText
          })
        ]
      }),
      R && (0, i.jsx)('div', {
        className: h.clans,
        children: (0, i.jsx)('div', {
          className: h.userInfoText,
          children: (0, i.jsx)(c.Gd, {
            userId: n.id
          })
        })
      }),
      !n.isNonUserBot() && (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(o.Heading, {
            variant: 'eyebrow',
            className: h.userInfoSectionHeader,
            children: Z.Z.Messages.NOTE
          }),
          (0, i.jsx)(a.Z, {
            userId: n.id,
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
  (0, i.jsx)(x.OA, {
    ref: M,
    connectedAccounts: L,
    theme: j,
    locale: A,
    className: h.userInfoSection,
    userId: n.id
  })
]
  });
}