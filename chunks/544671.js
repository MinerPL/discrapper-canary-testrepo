"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var r = n(557711),
  s = n(620662),
  o = n(503438),
  a = n(981631),
  l = n(427782);

function u(e) {
  let {
    activity: t,
    user: n,
    guildId: u,
    channelId: _,
    source: d,
    look: c,
    color: E,
    onAction: I
  } = e;
  return null != t && (0, s.Z)(t, a.xjy.SYNC) && (0, o.Z)(t) ? (0, i.jsx)(r.Z, {
    className: l.button,
    size: l.buttonSize,
    look: c,
    color: E,
    user: n,
    activity: t,
    guildId: null != u ? u : void 0,
    channelId: _,
    source: d,
    onAction: I
  }, "sync") : null
}