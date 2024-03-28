"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("399606"),
  l = n("481060"),
  i = n("594174"),
  r = n("51144"),
  o = n("546791"),
  u = n("198952"),
  d = n("637699");
t.default = e => {
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