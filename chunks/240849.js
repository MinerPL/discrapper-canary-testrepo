var r = n(703656),
  i = n(556296),
  a = n(358085),
  o = n(998502),
  s = n(981631);

function l(e, t) {
  return !(e === s.MAM.BROWSER && i.Z.hasKeybind(s.MoX.MOUSE_BUTTON, t)) && !0;
}
t.Z = new class e {
  initialize() {
(0, a.isDesktop)() && (o.ZP.on('NAVIGATE_BACK', (e, t) => {
  l(t, s.qXD.Back) && (0, r.op)();
}), o.ZP.on('NAVIGATE_FORWARD', (e, t) => {
  l(t, s.qXD.Forward) && (0, r.eH)();
}));
  }
}();