t.d(s, {
  Z: function() {
return _;
  }
}), t(47120);
var n = t(735250);
t(470079);
var a = t(442837),
  i = t(481060),
  r = t(607070),
  o = t(600164),
  l = t(122890),
  c = t(110818),
  d = t(937934);

function _(e) {
  let {
purchaseState: s,
currentStep: t,
onClose: _
  } = e, [E, u] = (0, l.z)({
purchaseState: s,
currentStep: t,
initialScene: c.fe.Scenes.ENTRY,
purchaseScene: c.fe.Scenes.STARS,
errorScene: c.fe.Scenes.ERROR,
successScene: c.fe.Scenes.SUCCESS
  }), I = (0, a.e7)([r.Z], () => r.Z.useReducedMotion);
  return (0, n.jsxs)(i.ModalHeader, {
align: o.Z.Align.START,
className: d.header,
separator: !1,
children: [
  (0, n.jsx)(c.fe, {
    className: d.animation,
    nextScene: E,
    onScenePlay: e => u(c.fe.getNextScene(e)),
    pauseWhileUnfocused: !1,
    pause: I
  }),
  (0, n.jsx)('div', {
    className: d.headerTitle
  }),
  (0, n.jsx)(i.ModalCloseButton, {
    onClick: _,
    className: d.closeButton
  })
]
  });
}