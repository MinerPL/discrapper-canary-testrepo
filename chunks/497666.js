"use strict";
t.d(s, {
  Z: function() {
    return o
  }
});
var n = t(735250);
t(470079);
var i = t(442837),
  l = t(246946),
  a = t(999382),
  r = t(270394);

function o() {
  let e = (0, i.e7)([l.Z], () => l.Z.hideInstantInvites),
    {
      invites: s,
      guild: t
    } = (0, i.cj)([a.Z], () => a.Z.getProps(), []);
  return (0, n.jsx)(r.Z, {
    invites: s,
    guild: t,
    showChannel: !0,
    hide: e
  })
}