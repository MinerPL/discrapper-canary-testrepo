"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("735250");
n("470079");
var a = n("442837"),
  s = n("481060"),
  i = n("471445"),
  r = n("430824"),
  o = n("275913");

function u(e) {
  let {
    channel: t
  } = e, n = (0, a.useStateFromStores)([r.default], () => r.default.getGuild(t.guild_id)), u = (0, i.getChannelIconComponent)(t, n);
  return null == u ? null : (0, l.jsxs)("div", {
    className: o.popoutHeader,
    children: [(0, l.jsx)(u, {
      className: o.channelIcon
    }), (0, l.jsx)(s.Text, {
      variant: "text-md/semibold",
      color: "interactive-normal",
      className: o.channelName,
      children: t.name
    })]
  })
}