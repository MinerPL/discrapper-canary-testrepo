n(47120);
var s = n(735250),
  a = n(470079),
  r = n(120356),
  i = n.n(r),
  l = n(622535),
  o = n(481060),
  c = n(100527),
  d = n(906732),
  _ = n(433811),
  u = n(626135),
  E = n(314684),
  T = n(794484),
  I = n(347475),
  R = n(342414),
  C = n(938736),
  g = n(391110),
  N = n(71363),
  p = n(781800),
  A = n(981631),
  m = n(396001),
  f = n(865215);
t.Z = () => {
  a.useEffect(() => {
_.X.trigger();
  }, []);
  let e = a.useRef(null),
[t, n] = a.useState(!1),
{
  analyticsLocations: r
} = (0, d.ZP)(c.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
[S, h] = a.useState(!1);
  (0, E.FM)();
  let M = (0, C.bD)('SubscriberNitroHome');
  return (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(o.AdvancedScrollerAuto, {
    className: m.mainPageScroller,
    ref: e,
    children: (0, s.jsx)('div', {
      className: m.container,
      children: (0, s.jsxs)(d.Gt, {
        value: r,
        children: [
          (0, s.jsx)(R.Z, {
            className: m.heroHeading,
            location: g.MQ.HOME
          }),
          (0, s.jsx)(T.Z, {
            variant: g.R0.WHATS_NEW,
            className: i()(m.whatsNew, {
              [m.whatsNewWithOriginalHeroHeading]: !M
            }),
            noBackground: !0,
            leftAlignHeaders: !0
          }),
          (0, s.jsx)(T.Z, {
            className: m.perksDiscoverability,
            noBackground: !0,
            leftAlignHeaders: !0,
            showAllPerksButton: (0, s.jsx)(p.Z, {
              setIsAllPerksVisible: n,
              previousComponent: g.MQ.HOME
            })
          }),
          (0, s.jsx)(I.Z, {
            className: m.giftNitro,
            location: c.Z.PREMIUM_MARKETING_GIFT_SECTION,
            analyticsLocation: {
              page: A.ZY5.NITRO_HOME,
              section: A.jXE.GIFT_BANNER
            }
          }),
          (0, s.jsx)('div', {
            className: m.footerSpacing
          }),
          (0, s.jsx)(l.$, {
            onChange: e => {
              e && !S && (u.default.track(A.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: r
              }), h(!0));
            },
            children: (0, s.jsx)('div', {
              className: m.bottomOfPageVisibilitySensor
            })
          }),
          (0, s.jsx)(o.Image, {
            src: f,
            className: m.bottomIllustration,
            width: 112,
            height: 85,
            zoomable: !1
          })
        ]
      })
    })
  }),
  (0, s.jsx)(N.Z, {
    isAllPerksVisible: t,
    setIsAllPerksVisible: n,
    previousComponent: g.MQ.HOME
  })
]
  });
};