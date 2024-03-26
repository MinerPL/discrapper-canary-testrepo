"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var l = n("37983");
n("884691");
var i = n("446674"),
  u = n("77078"),
  r = n("629109"),
  a = n("42887"),
  o = n("697218"),
  s = n("829536"),
  d = n("773336"),
  c = n("353927"),
  f = n("782340");

function g(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MediaEngineContextTypes.DEFAULT,
    g = (0, i.useStateFromStores)([a.default], () => a.default.getLocalVolume(e, n), [e, n]),
    _ = e === (null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
    h = n === c.MediaEngineContextTypes.STREAM;
  return _ ? null : (0, l.jsx)(u.MenuControlItem, {
    id: "user-volume",
    label: h ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME,
    control: (t, i) => (0, l.jsx)(u.MenuSliderControl, {
      ...t,
      ref: i,
      value: (0, s.amplitudeToPerceptual)(g),
      maxValue: d.isPlatformEmbedded ? 200 : 100,
      onChange: t => r.default.setLocalVolume(e, (0, s.perceptualToAmplitude)(t), n),
      "aria-label": h ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME
    })
  })
}