"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("512722"),
  i = n.n(s),
  r = n("399606"),
  o = n("618158"),
  u = n("594174"),
  d = n("822183"),
  c = n("364125"),
  f = n("610947"),
  h = n("348536");

function m(e) {
  let {
    focused: t,
    channelId: n,
    streamerId: s,
    stream: d
  } = e, m = l.useRef(null), p = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser());
  i()(null != p, "user cannot be null"), (0, f.default)(m, p, s, n);
  let {
    handleClick: E,
    handleMouseDown: C,
    handleMouseEnter: g,
    handleMouseMove: S,
    handleMouseUp: _
  } = (0, c.default)({
    user: p,
    channelId: n,
    streamerId: s,
    stream: d,
    focused: t,
    canvas: m.current
  });
  return (0, a.jsx)(o.default, {
    children: (0, a.jsx)("canvas", {
      ref: m,
      onClick: E,
      onMouseDown: C,
      onMouseEnter: g,
      onMouseMove: S,
      onMouseUp: _,
      className: h.sharedCanvas
    })
  })
}

function p(e) {
  let {
    isSharedCanvasEnabled: t
  } = d.default.useExperiment({
    guildId: e.guildId,
    location: "d0de1c_1"
  }, {
    autoTrackExposure: !0
  });
  return !t || e.hasScreenMessage ? null : (0, a.jsx)(m, {
    ...e
  })
}