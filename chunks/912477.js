"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983");
s("884691");
var l = s("446674"),
  n = s("102985"),
  i = s("900938"),
  r = s("758085");

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