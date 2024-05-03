"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var i = n("735250"),
  a = n("470079"),
  l = n("512722"),
  s = n.n(l),
  o = n("399606"),
  r = n("822183"),
  d = n("673125"),
  u = n("610947"),
  c = n("594174"),
  f = n("97493");

function h(e) {
  let {
    streamerId: t,
    channelId: n
  } = e, l = a.useRef(null), r = (0, o.useStateFromStores)([c.default], () => c.default.getCurrentUser());
  return s()(null != r, "user cannot be null"), (0, u.default)(l, r, t, n), (0, i.jsx)("canvas", {
    className: f.canvas,
    ref: l
  })
}

function p(e) {
  let {
    guildId: t,
    channelId: n,
    streamerId: a
  } = e, {
    isSharedCanvasEnabled: l
  } = r.default.useExperiment({
    guildId: t,
    location: "f0d1b1_1"
  }, {
    autoTrackExposure: !0
  }), s = (0, o.useStateFromStores)([d.default], () => d.default.visibleOverlayCanvas);
  return l && s ? (0, i.jsx)(h, {
    guildId: t,
    channelId: n,
    streamerId: a
  }) : null
}