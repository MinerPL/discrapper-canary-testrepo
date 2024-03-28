"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
});
var n = s("735250");
s("470079");
var l = s("536402"),
  a = s("481060"),
  r = s("239091"),
  u = s("299206"),
  o = s("449751"),
  d = s("29264"),
  i = s("905041"),
  c = s("823379"),
  f = s("49290"),
  E = s("689938");

function M(e) {
  let {
    channel: t,
    item: s,
    target: M,
    onSelect: m
  } = e, h = function(e) {
    switch (e.type) {
      case l.GuildFeedItemTypes.MESSAGE_BUNDLE:
        return e.messages[0].message;
      case l.GuildFeedItemTypes.CONVERSATION:
        return e.root.messages[0];
      default:
        (0, c.assertNever)(e)
    }
  }(s), g = function(e) {
    switch (e.type) {
      case l.GuildFeedItemTypes.MESSAGE_BUNDLE:
        return e.messages[e.messages.length - 1].message;
      case l.GuildFeedItemTypes.CONVERSATION:
        return e.root.messages[e.root.messages.length - 1];
      default:
        (0, c.assertNever)(e)
    }
  }(s), {
    href: I,
    src: _,
    textContent: S
  } = (0, f.targetToContext)(M), C = (0, o.default)(h, t), G = (0, i.default)(null != I ? I : _, S), p = (0, d.default)(_), v = (0, u.default)({
    id: g.id,
    label: E.default.Messages.COPY_ID_MESSAGE,
    shiftId: "".concat(t.id, "-").concat(g.id)
  }), x = (0, f.useGuildFeedHideItem)(s, t.guild_id), L = (0, f.useGuildFeedRemoveItem)(s, g, t);
  return (0, n.jsxs)(a.Menu, {
    navId: "message",
    onClose: r.closeContextMenu,
    "aria-label": E.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    onSelect: m,
    children: [(0, n.jsxs)(a.MenuGroup, {
      children: [x, L]
    }), (0, n.jsxs)(a.MenuGroup, {
      children: [C, p, G, v]
    })]
  })
}