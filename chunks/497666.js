"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("735250");
s("470079");
var l = s("442837"),
  n = s("246946"),
  i = s("999382"),
  r = s("270394");

function o() {
  let e = (0, l.useStateFromStores)([n.default], () => n.default.hideInstantInvites),
    {
      invites: t,
      guild: s
    } = (0, l.useStateFromStoresObject)([i.default], () => i.default.getProps(), []);
  return (0, a.jsx)(r.default, {
    invites: t,
    guild: s,
    showChannel: !0,
    hide: e
  })
}