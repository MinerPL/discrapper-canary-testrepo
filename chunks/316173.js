n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(442837),
  o = n(433517),
  c = n(481060),
  d = n(304761),
  u = n(865427),
  _ = n(820254),
  h = n(689938),
  E = n(906515);
let I = 'isHideDevBanner';
t.Z = () => {
  var e;
  let [t, n] = (0, s.useState)((null === (e = o.K.get(I, 'false')) || void 0 === e ? void 0 : e.toString()) === 'true'), a = (0, l.e7)([d.C], () => {
var e;
return (0, u.fD)() ? null === (e = d.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null;
  });
  if (t)
return null;
  let m = () => {
  o.K.set(I, !0), n(!0);
},
g = () => (0, i.jsx)(c.Clickable, {
  onClick: m,
  className: E.closeButton,
  'aria-label': h.Z.Messages.DISMISS,
  children: (0, i.jsx)(c.CloseSmallIcon, {
    size: 'md',
    color: 'currentColor',
    className: E.closeIcon
  })
});
  return null != a ? (0, i.jsxs)('div', {
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
    buildNumber: '309492'
  }),
  (0, i.jsx)(g, {})
]
  }) : null;
};