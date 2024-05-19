"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("735250");
n("470079");
var r = n("246841"),
  a = n("620662"),
  s = n("503438"),
  o = n("981631"),
  l = n("427782");

function u(e) {
  let {
    activity: t,
    user: n,
    source: u,
    look: d,
    color: _,
    onAction: c
  } = e;
  return null != t && (0, a.default)(t, o.ActivityFlags.PLAY) && (0, s.default)(t) ? (0, i.jsx)(r.default, {
    className: l.button,
    size: l.buttonSize,
    look: d,
    color: _,
    fullWidth: !0,
    activity: t,
    user: n,
    source: u,
    onAction: c
  }, "play") : null
}