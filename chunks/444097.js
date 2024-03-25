"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  },
  NowPlayingUnknownMemberMenuItem: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  l = n.n(s),
  i = n("77078"),
  r = n("145079"),
  o = n("694603");

function u(e) {
  let {
    user: t,
    status: n,
    isFocused: s,
    guildId: l
  } = e;
  return (0, a.jsxs)("div", {
    className: o.memberItem,
    children: [(0, a.jsx)(i.Avatar, {
      src: t.getAvatarURL(l, 24),
      className: o.avatar,
      "aria-label": t.username,
      size: i.AvatarSizes.SIZE_24,
      status: n,
      statusColor: s ? "currentColor" : void 0
    }), (0, a.jsx)(r.default, {
      user: t,
      hideDiscriminator: !0
    })]
  })
}

function d(e) {
  let {
    label: t
  } = e;
  return (0, a.jsxs)("div", {
    className: o.memberItem,
    children: [(0, a.jsx)("div", {
      className: l(o.avatar, o.unknown)
    }), (0, a.jsx)("div", {
      children: t
    })]
  })
}