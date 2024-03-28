"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var u = n("735250");
n("470079");
var a = n("512722"),
  l = n.n(a),
  r = n("399606"),
  d = n("372900"),
  i = n("238246"),
  c = n("592125"),
  o = n("504185");

function s(e) {
  let {
    windowKey: t,
    channelId: n
  } = e, a = (0, r.useStateFromStores)([c.default], () => c.default.getChannel(n));
  return l()(null != a, "channel cannot be null for popout"), (0, u.jsx)(i.default, {
    withTitleBar: !0,
    windowKey: t,
    title: a.name,
    children: (0, u.jsx)(d.default.Provider, {
      value: a.guild_id,
      children: (0, u.jsx)(o.default, {
        channel: a
      })
    })
  })
}