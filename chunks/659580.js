"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("410575"),
  i = n("821564"),
  r = n("453925"),
  o = n("632304"),
  u = n("947150"),
  d = n("488021"),
  c = n("822556"),
  f = n("981631"),
  h = n("689938"),
  m = n("694853");

function p(e) {
  let {
    onClose: t,
    renderOutputDevices: n = !1,
    renderInputDevices: p = !1,
    renderInputModes: E = !1,
    renderInputVolume: C = !1,
    renderOutputVolume: g = !1,
    onSelect: S
  } = e, _ = (0, c.default)(), T = (0, u.default)(), I = (0, d.default)(), A = (0, i.default)(), v = (0, r.default)(), N = (0, o.default)();
  return (0, a.jsx)(s.default, {
    object: f.AnalyticsObjects.CONTEXT_MENU,
    children: (0, a.jsxs)(l.Menu, {
      onSelect: S,
      className: m.menu,
      onClose: t,
      navId: "audio-device-context",
      "aria-label": h.default.Messages.AUDIO_DEVICE_ACTIONS,
      children: [p ? (0, a.jsx)(l.MenuGroup, {
        label: h.default.Messages.INPUT_DEVICE,
        children: T
      }) : null, n ? (0, a.jsx)(l.MenuGroup, {
        label: h.default.Messages.OUTPUT_DEVICE,
        children: I
      }) : null, E ? (0, a.jsx)(l.MenuGroup, {
        label: h.default.Messages.FORM_LABEL_INPUT_MODE,
        children: A
      }) : null, (0, a.jsxs)(l.MenuGroup, {
        children: [C ? v : null, g ? N : null, _]
      })]
    })
  })
}