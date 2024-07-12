var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(481060),
  l = s(100527),
  c = s(906732),
  d = s(626135),
  _ = s(335131),
  E = s(410154),
  u = s(302800),
  T = s(981631),
  I = s(474936),
  S = s(689938),
  N = s(362265),
  C = s(353437),
  m = s(786792);
let A = e => {
  var t, s, a, i, l;
  let {
displayOptions: c,
marketingVariant: d
  } = e;
  return (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsx)('div', {
    className: N.artContainer,
    'aria-hidden': !0,
    role: 'presentation',
    children: (0, n.jsx)('img', {
      src: null !== (a = null == c ? void 0 : c.artSrc) && void 0 !== a ? a : C,
      className: r()(N.art, {
        [N.tideArt]: null != d && d === E.C5.TIDE
      }),
      alt: ''
    })
  }),
  (0, n.jsxs)('div', {
    className: N.mainColumn,
    children: [
      (0, n.jsx)(o.Heading, {
        variant: 'heading-lg/extrabold',
        color: 'always-white',
        className: N.title,
        children: null !== (i = null == c ? void 0 : null === (t = c.title) || void 0 === t ? void 0 : t.call(c)) && void 0 !== i ? i : S.Z.Messages.COLLECTIBLES_BANNER_TITLE_2024
      }),
      (0, n.jsx)(o.Text, {
        variant: 'text-sm/normal',
        color: 'always-white',
        children: null !== (l = null == c ? void 0 : null === (s = c.description) || void 0 === s ? void 0 : s.call(c)) && void 0 !== l ? l : S.Z.Messages.COLLECTIBLES_BANNER_DESCRIPTION_2024
      })
    ]
  })
]
  });
};
t.Z = () => {
  var e;
  let {
analyticsLocations: t
  } = (0, c.ZP)(l.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL), s = a.useRef(null), i = (0, E.ZP)('CollectiblesUpsellBanner'), C = u.GX[i];
  return a.useEffect(() => {
d.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
  type: I.cd.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
  location_stack: t
});
  }, [t]), (0, n.jsxs)('div', {
ref: s,
className: r()(N.container),
style: {
  backgroundImage: 'url('.concat(null !== (e = null == C ? void 0 : C.backgroundSrc) && void 0 !== e ? e : m, ')')
},
children: [
  (0, n.jsx)(A, {
    displayOptions: C,
    marketingVariant: i
  }),
  (0, n.jsx)(o.Button, {
    onClick: () => {
      (0, _.mK)({
        analyticsLocations: t,
        analyticsSource: l.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
      });
    },
    className: N.ctaButton,
    color: o.Button.Colors.BRAND_INVERTED,
    children: S.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
  })
]
  });
};