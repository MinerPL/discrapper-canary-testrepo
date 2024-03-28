"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("735250");
n("470079");
var l = n("512722"),
  d = n.n(l),
  u = n("399606"),
  i = n("721037"),
  r = n("561472"),
  s = n("372900"),
  o = n("238246"),
  c = n("592125"),
  h = n("703558"),
  f = n("677601");

function p(e) {
  let {
    windowKey: t,
    channelId: n
  } = e, l = (0, u.useStateFromStores)([c.default], () => c.default.getChannel(n));
  return d()(null != l, "channel cannot be null for popout"), (0, a.jsx)(o.default, {
    withTitleBar: !0,
    windowKey: t,
    title: l.name,
    channelId: l.id,
    children: (0, a.jsxs)(s.default.Provider, {
      value: l.guild_id,
      children: [(0, a.jsx)(r.default, {
        channel: l,
        draftType: h.DraftType.ChannelMessage
      }), (0, a.jsx)(f.default, {
        channel: l
      }), (0, a.jsx)(i.default, {
        showInPopoutWindow: !0,
        disallowTextActivity: !0
      })]
    })
  })
}