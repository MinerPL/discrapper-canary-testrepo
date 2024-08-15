var i = n(735250);
n(470079);
var a = n(266067),
  s = n(442837),
  r = n(481060),
  l = n(410575),
  o = n(730749),
  c = n(666743),
  d = n(100527),
  u = n(906732),
  _ = n(600164),
  E = n(984370),
  h = n(299657),
  m = n(594174),
  I = n(981631),
  g = n(474936),
  p = n(689938),
  T = n(254225);
let S = s.ZP.connectStores([m.default], () => ({
  user: m.default.getCurrentUser()
}))((0, c.Z)((0, o.Z)(e => {
  let {
analyticsLocations: t
  } = (0, u.ZP)(d.Z.HOME_PAGE_PREMIUM_TAB), {
isAuthenticated: n,
user: s
  } = e;
  return n ? (0, i.jsxs)('div', {
className: T.homeWrapperNormal,
children: [
  (0, i.jsx)(l.Z, {
    section: I.jXE.NAVIGATION,
    children: (0, i.jsxs)(E.Z, {
      isAuthenticated: n,
      className: T.headerBar,
      children: [
        (0, i.jsx)(E.Z.Icon, {
          icon: r.NitroWheelIcon,
          'aria-hidden': !0
        }),
        (0, i.jsx)(E.Z.Title, {
          children: p.Z.Messages.PREMIUM
        })
      ]
    })
  }),
  (0, i.jsx)(u.Gt, {
    value: t,
    children: null == s ? (0, i.jsx)(_.Z, {
      align: _.Z.Align.CENTER,
      justify: _.Z.Justify.CENTER,
      children: (0, i.jsx)(r.Spinner, {
        className: T.spinner
      })
    }) : (0, i.jsx)(h.Z, {
      entrypoint: g.EZ.ApplicationStoreHome
    })
  })
]
  }) : (0, i.jsx)(a.l_, {
to: I.Z5c.LOGIN
  });
})));
t.Z = S;