"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("846027"),
  r = n("131951"),
  o = n("36703"),
  u = n("689938");

function d() {
  let e = (0, l.useStateFromStores)([r.default], () => (0, o.amplitudeToPerceptual)(r.default.getInputVolume()));
  return (0, a.jsx)(s.MenuControlItem, {
    id: "input",
    label: u.default.Messages.FORM_LABEL_INPUT_VOLUME,
    control: (t, n) => (0, a.jsx)(s.MenuSliderControl, {
      ...t,
      ref: n,
      value: e,
      onChange: e => i.default.setInputVolume((0, o.perceptualToAmplitude)(e)),
      "aria-label": u.default.Messages.FORM_LABEL_INPUT_VOLUME
    })
  })
}