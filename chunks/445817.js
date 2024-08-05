s.d(t, {
  Z: function() {
return A;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(442837),
  r = s(481060),
  o = s(570140),
  l = s(2052),
  c = s(932724),
  d = s(716161),
  _ = s(672339),
  E = s(747545),
  u = s(131951),
  T = s(594174),
  I = s(981631),
  S = s(689938),
  N = s(734618);
let C = 387,
  m = 218;

function A(e) {
  let {
previewEnabled: t,
onEnablePreview: s
  } = e, A = u.Z.getCameraComponent(), [g, h] = a.useState((0, c.P)(T.default.getCurrentUser())), O = a.useRef(!1), p = a.useRef(g), R = (0, l.O)(), x = (0, i.e7)([u.Z], () => Object.values(u.Z.getVideoDevices()).length > 0);
  return a.useEffect(() => () => {
O.current && o.Z.wait(() => (0, d.Up)(p.current));
  }, []), (0, n.jsx)(E.Z, {
selectedBackgroundOption: g,
onSelectBackgroundOption: e => {
  O.current = !0, p.current = e, h(e), (0, _.wG)(e, {
    location: R.location
  }).catch(I.dG4);
},
renderCamera: e => t ? (0, n.jsx)('div', {
  className: N.cameraWrapper,
  children: (0, n.jsxs)('div', {
    className: N.camera,
    children: [
      (0, n.jsx)(A, {
        deviceId: e,
        width: C,
        height: m,
        disabled: !t
      }),
      (0, n.jsx)(E.S, {})
    ]
  })
}) : (0, n.jsxs)('div', {
  className: N.cameraWrapper,
  children: [
    (0, n.jsx)('div', {
      className: N.previewImage
    }),
    (0, n.jsx)(r.Tooltip, {
      text: x ? null : S.Z.Messages.CAMERA_UNAVAILABLE,
      children: e => (0, n.jsx)(r.Button, {
        ...e,
        onClick: s,
        disabled: !x,
        children: S.Z.Messages.TEST_VIDEO
      })
    })
  ]
})
  });
}