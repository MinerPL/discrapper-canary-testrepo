"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var r = n(246841),
  s = n(620662),
  o = n(503438),
  a = n(981631),
  l = n(427782);

function u(e) {
  let {
    activity: t,
    user: n,
    source: u,
    look: _,
    color: d,
    onAction: c
  } = e;
  return null != t && (0, s.Z)(t, a.xjy.PLAY) && (0, o.Z)(t) ? (0, i.jsx)(r.Z, {
    className: l.button,
    size: l.buttonSize,
    look: _,
    color: d,
    fullWidth: !0,
    activity: t,
    user: n,
    source: u,
    onAction: c
  }, "play") : null
}