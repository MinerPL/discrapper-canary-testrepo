n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(442837),
  o = n(433517),
  c = n(481060),
  d = n(304761),
  u = n(865427),
  _ = n(820254),
  h = n(689938),
  E = n(906515);
let m = 'isHideDevBanner';
t.Z = () => {
  var e;
  let [t, n] = (0, a.useState)((null === (e = o.K.get(m, 'false')) || void 0 === e ? void 0 : e.toString()) === 'true'), s = (0, l.e7)([d.C], () => {
var e;
return (0, u.fD)() ? null === (e = d.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null;
  });
  if (t)
return null;
  let I = () => {
  o.K.set(m, !0), n(!0);
},
g = () => (0, i.jsx)(c.Clickable, {
  onClick: I,
  className: E.closeButton,
  'aria-label': h.Z.Messages.DISMISS,
  children: (0, i.jsx)(c.XSmallIcon, {
    size: 'md',
    color: 'currentColor',
    className: E.closeIcon
  })
});
  return null != s ? (0, i.jsxs)('div', {
className: r()(E.devBanner, E.buildOverride),
children: [
  (0, i.jsx)(_.Z, {
    className: E.icon
  }),
  h.Z.Messages.BUILD_OVERRIDE,
  (0, i.jsx)(g, {})
]
  }) : 'staging' === window.GLOBAL_ENV.RELEASE_CHANNEL ? (0, i.jsxs)('div', {
className: r()(E.devBanner, E.staging),
children: [
  (0, i.jsx)(_.Z, {
    className: E.icon
  }),
  h.Z.Messages.DEV_NOTICE_STAGING.format({
    buildNumber: '317408'
  }),
  (0, i.jsx)(g, {})
]
  }) : null;
};