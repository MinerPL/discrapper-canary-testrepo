"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("442837"),
  r = n("846027"),
  o = n("131951"),
  u = n("80618"),
  d = n("36703"),
  c = n("358085"),
  f = n("618158"),
  h = n("524841");
t.default = i.default.connectStores([o.default], e => {
  let {
    userId: t,
    context: n
  } = e;
  return {
    currentVolume: o.default.getLocalVolume(t, n),
    muted: o.default.isLocalMute(t, n)
  }
})(function(e) {
  let {
    className: t,
    iconClassName: n,
    sliderClassName: l,
    userId: i,
    currentVolume: o,
    muted: m,
    context: p,
    currentWindow: E = window
  } = e;
  return (0, a.jsx)(f.default, {
    children: (0, a.jsx)(u.default, {
      currentWindow: E,
      iconClassName: s()(n, h.controlIcon),
      sliderClassName: l,
      className: t,
      value: (0, d.amplitudeToPerceptual)(o),
      muted: m,
      maxValue: c.isPlatformEmbedded ? 200 : 100,
      onValueChange: e => {
        var t, n, a, l;
        return t = e, n = i, a = m, l = p, void(t > 0 && a && r.default.toggleLocalMute(n, l), r.default.setLocalVolume(n, (0, d.perceptualToAmplitude)(t), l))
      },
      onToggleMute: () => {
        var e, t;
        return e = i, t = p, void r.default.toggleLocalMute(e, t)
      }
    })
  })
})