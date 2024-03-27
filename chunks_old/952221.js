"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("627445"),
  i = n.n(s),
  r = n("65597"),
  u = n("550410"),
  o = n("697218"),
  d = n("780166"),
  c = n("291499"),
  f = n("154891"),
  h = n("173597");

function m(e) {
  let {
    focused: t,
    channelId: n,
    streamerId: s,
    stream: d
  } = e, m = l.useRef(null), p = (0, r.useStateFromStores)([o.default], () => o.default.getCurrentUser());
  i(null != p, "user cannot be null"), (0, f.default)(m, p, s, n);
  let {
    handleClick: E,
    handleMouseDown: g,
    handleMouseEnter: S,
    handleMouseMove: C,
    handleMouseUp: _
  } = (0, c.default)({
    user: p,
    channelId: n,
    streamerId: s,
    stream: d,
    focused: t,
    canvas: m.current
  });
  return (0, a.jsx)(u.default, {
    children: (0, a.jsx)("canvas", {
      ref: m,
      onClick: E,
      onMouseDown: g,
      onMouseEnter: S,
      onMouseMove: C,
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