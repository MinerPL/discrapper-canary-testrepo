"use strict";
a.r(t), a.d(t, {
  default: function() {
    return M
  }
});
var l = a("735250");
a("470079");
var n = a("442837"),
  u = a("481060"),
  d = a("846027"),
  s = a("131951"),
  i = a("594174"),
  o = a("36703"),
  r = a("358085"),
  f = a("65154"),
  c = a("689938");

function M(e) {
  var t;
  let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.MediaEngineContextTypes.DEFAULT,
    M = (0, n.useStateFromStores)([s.default], () => s.default.getLocalVolume(e, a), [e, a]),
    m = e === (null === (t = i.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
    E = a === f.MediaEngineContextTypes.STREAM;
  return m ? null : (0, l.jsx)(u.MenuControlItem, {
    id: "user-volume",
    label: E ? c.default.Messages.STREAM_VOLUME : c.default.Messages.USER_VOLUME,
    control: (t, n) => (0, l.jsx)(u.MenuSliderControl, {
      ...t,
      ref: n,
      value: (0, o.amplitudeToPerceptual)(M),
      maxValue: r.isPlatformEmbedded ? 200 : 100,
      onChange: t => d.default.setLocalVolume(e, (0, o.perceptualToAmplitude)(t), a),
      "aria-label": E ? c.default.Messages.STREAM_VOLUME : c.default.Messages.USER_VOLUME
    })
  })
}