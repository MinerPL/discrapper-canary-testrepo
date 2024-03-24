"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var s = n("65597"),
  l = n("77078"),
  i = n("697218"),
  r = n("158998"),
  o = n("117933"),
  u = n("863972"),
  d = n("985688"),
  c = e => {
    let {
      userId: t,
      timestamp: n,
      timestampFormatter: c
    } = e, f = (0, s.useStateFromStores)([i.default], () => i.default.getUser(t));
    return void 0 === f ? null : (0, a.jsxs)("div", {
      className: d.container,
      children: [(0, a.jsx)(u.FamilyCenterAvatar, {
        user: f,
        avatarSize: l.AvatarSizes.SIZE_40
      }), (0, a.jsx)("div", {
        children: (0, a.jsxs)("div", {
          className: d.descriptors,
          children: [(0, a.jsx)(l.Text, {
            variant: "text-md/semibold",
            children: r.default.getName(f)
          }), (0, a.jsx)(l.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: (0, o.formatUserActivityTimestamp)(new Date(n).getTime(), c)
          })]
        })
      })]
    })
  }