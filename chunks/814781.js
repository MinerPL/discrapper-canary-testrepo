"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
});
var n = s("37983");
s("884691");
var l = s("611221"),
  r = s("77078"),
  a = s("272030"),
  u = s("861370"),
  o = s("518155"),
  d = s("447651"),
  i = s("26051"),
  c = s("449008"),
  f = s("437150"),
  E = s("782340");

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
  return (0, n.jsxs)(r.Menu, {
    navId: "message",
    onClose: a.closeContextMenu,
    "aria-label": E.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    onSelect: m,
    children: [(0, n.jsxs)(r.MenuGroup, {
      children: [x, L]
    }), (0, n.jsxs)(r.MenuGroup, {
      children: [C, p, G, v]
    })]
  })
}