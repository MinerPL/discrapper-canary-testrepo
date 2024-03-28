"use strict";
n.r(t), n.d(t, {
  NowPlayingUnknownMemberMenuItem: function() {
    return d
  },
  default: function() {
    return u
  }
});
var a = n("735250");
n("470079");
var s = n("803997"),
  l = n.n(s),
  i = n("481060"),
  r = n("129861"),
  o = n("773051");

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
      className: l()(o.avatar, o.unknown)
    }), (0, a.jsx)("div", {
      children: t
    })]
  })
}