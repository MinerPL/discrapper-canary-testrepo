n.r(t), n.d(t, {
  default: function() {
return _;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(410575),
  l = n(821564),
  r = n(619031),
  o = n(632304),
  c = n(947150),
  u = n(488021),
  d = n(822556),
  h = n(981631),
  p = n(689938),
  m = n(679801);

function _(e) {
  let {
onClose: t,
renderOutputDevices: n = !1,
renderInputDevices: _ = !1,
renderInputModes: f = !1,
renderInputVolume: E = !1,
renderOutputVolume: g = !1,
onSelect: C
  } = e, I = (0, d.Z)(), x = (0, c.Z)(), T = (0, u.Z)(), N = (0, l.Z)(), v = (0, r.Z)(), S = (0, o.Z)();
  return (0, i.jsx)(s.Z, {
object: h.qAy.CONTEXT_MENU,
children: (0, i.jsxs)(a.Menu, {
  onSelect: C,
  className: m.menu,
  onClose: t,
  navId: 'audio-device-context',
  'aria-label': p.Z.Messages.AUDIO_DEVICE_ACTIONS,
  children: [
    _ ? (0, i.jsx)(a.MenuGroup, {
      label: p.Z.Messages.INPUT_DEVICE,
      children: x
    }) : null,
    n ? (0, i.jsx)(a.MenuGroup, {
      label: p.Z.Messages.OUTPUT_DEVICE,
      children: T
    }) : null,
    f ? (0, i.jsx)(a.MenuGroup, {
      label: p.Z.Messages.FORM_LABEL_INPUT_MODE,
      children: N
    }) : null,
    (0, i.jsxs)(a.MenuGroup, {
      children: [
        E ? v : null,
        g ? S : null,
        I
      ]
    })
  ]
})
  });
}