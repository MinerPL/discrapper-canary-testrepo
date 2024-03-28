"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("846027"),
  r = n("131951"),
  o = n("36703"),
  u = n("358085"),
  d = n("689938");

function c() {
  let e = (0, l.useStateFromStores)([r.default], () => (0, o.amplitudeToPerceptual)(r.default.getOutputVolume()));
  return (0, a.jsx)(s.MenuControlItem, {
    id: "output",
    label: d.default.Messages.FORM_LABEL_OUTPUT_VOLUME,
    control: (t, n) => (0, a.jsx)(s.MenuSliderControl, {
      ...t,
      ref: n,
      value: e,
      maxValue: u.isPlatformEmbedded ? 200 : 100,
      onChange: e => i.default.setOutputVolume((0, o.perceptualToAmplitude)(e)),
      "aria-label": d.default.Messages.FORM_LABEL_OUTPUT_VOLUME
    })
  })
}