"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var l = n("399606"),
  s = n("481060"),
  i = n("158776"),
  r = n("699516"),
  o = n("594174"),
  u = n("51144"),
  d = n("984370"),
  c = n("689938"),
  f = n("19340");

function h(e) {
  let t = e.channel.getRecipientId(),
    n = e.channel.isSystemDM(),
    h = (0, l.useStateFromStores)([o.default], () => o.default.getUser(t)),
    m = (0, l.useStateFromStores)([i.default], () => i.default.getStatus(t)),
    p = (0, l.useStateFromStores)([i.default], () => i.default.isMobileOnline(t)),
    E = (0, l.useStateFromStores)([r.default], () => r.default.getNickname(t)),
    C = u.default.useUserTag(h);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.HiddenVisually, {
      children: c.default.Messages.DIRECT_MESSAGE
    }), null != h && !n && (0, a.jsx)("div", {
      children: (0, a.jsx)(s.Avatar, {
        status: m,
        isMobile: p,
        className: f.avatar,
        size: s.AvatarSizes.SIZE_24,
        "aria-label": u.default.getName(h),
        src: h.getAvatarURL(void 0, 24)
      })
    }), (0, a.jsx)(d.default.Title, {
      level: e.level,
      onClick: e.handleClick,
      onContextMenu: e.handleContextMenu,
      className: null != e.handleClick ? f.cursorPointer : null,
      children: (0, a.jsx)(s.TooltipContainer, {
        text: C,
        position: "bottom",
        children: null != E ? E : u.default.getName(h)
      })
    })]
  })
}