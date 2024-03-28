"use strict";
s.r(a), s.d(a, {
  default: function() {
    return h
  }
});
var t = s("735250");
s("470079");
var i = s("481060"),
  n = s("465670"),
  l = s("934458"),
  d = s("918125"),
  r = s("488131"),
  c = s("124368"),
  o = s("689938"),
  u = s("891723");

function h(e) {
  let {
    guildId: a,
    onClose: s,
    transitionState: h
  } = e;
  return (0, t.jsx)(i.ModalRoot, {
    className: u.modal,
    transitionState: h,
    "aria-label": o.default.Messages.THREADS,
    size: i.ModalSize.DYNAMIC,
    children: (0, t.jsxs)("div", {
      className: u.container,
      children: [(0, t.jsxs)("div", {
        className: u.header,
        children: [(0, t.jsx)(l.default, {
          className: u.threadIcon
        }), (0, t.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          className: u.__invalid_title,
          children: o.default.Messages.ALL_ACTIVE_THREADS
        }), (0, t.jsx)("div", {
          className: u.spacer
        }), (0, t.jsx)(i.Clickable, {
          className: u.closeIcon,
          onClick: s,
          "aria-label": o.default.Messages.CLOSE,
          children: (0, t.jsx)(n.default, {})
        })]
      }), (0, t.jsx)(d.default, {
        guildId: a,
        goToThread: (e, a) => {
          s(), (0, r.openThreadSidebarForViewing)(e, !a, c.OpenThreadAnalyticsLocations.GUILD_ACTIVE_THREADS_MODAL)
        }
      })]
    })
  })
}