"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("37983");
n("884691");
var u = n("446674"),
  a = n("77078"),
  i = n("629109"),
  d = n("42887"),
  s = n("697218"),
  o = n("829536"),
  r = n("773336"),
  c = n("353927"),
  f = n("782340");

function E(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.MediaEngineContextTypes.DEFAULT,
    E = (0, u.useStateFromStores)([d.default], () => d.default.getLocalVolume(e, n), [e, n]),
    _ = e === (null === (t = s.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
    S = n === c.MediaEngineContextTypes.STREAM;
  return _ ? null : (0, l.jsx)(a.MenuControlItem, {
    id: "user-volume",
    label: S ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME,
    control: (t, u) => (0, l.jsx)(a.MenuSliderControl, {
      ...t,
      ref: u,
      value: (0, o.amplitudeToPerceptual)(E),
      maxValue: r.isPlatformEmbedded ? 200 : 100,
      onChange: t => i.default.setLocalVolume(e, (0, o.perceptualToAmplitude)(t), n),
      "aria-label": S ? f.default.Messages.STREAM_VOLUME : f.default.Messages.USER_VOLUME
    })
  })
}