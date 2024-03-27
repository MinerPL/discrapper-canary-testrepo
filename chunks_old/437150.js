"use strict";
s.r(t), s.d(t, {
  useGuildFeedHideItem: function() {
    return S
  },
  useGuildFeedRemoveItem: function() {
    return C
  },
  targetToContext: function() {
    return G
  },
  default: function() {
    return p
  }
});
var n = s("37983");
s("884691");
var l = s("118810"),
  r = s("65597"),
  a = s("77078"),
  u = s("272030"),
  o = s("861370"),
  d = s("126423"),
  i = s("518155"),
  c = s("447651"),
  f = s("26051"),
  E = s("271938"),
  M = s("957255"),
  m = s("867544"),
  h = s("399699"),
  g = s("713810"),
  I = s("49111"),
  _ = s("782340");

function S(e, t) {
  return (0, n.jsx)(a.MenuItem, {
    id: "hide-feed-message",
    label: _.default.Messages.GUILD_FEED_HIDE_MESSAGE_ITEM,
    action: s => (s.stopPropagation(), (0, g.hideItemFromGuildFeed)(e, t)),
    icon: m.default,
    iconProps: {
      foregroundColor: "currentColor"
    }
  })
}

function C(e, t, s) {
  let l = (0, r.useStateFromStores)([E.default], () => E.default.getId()),
    u = (0, r.useStateFromStores)([M.default], () => M.default.can(I.Permissions.MANAGE_MESSAGES, s), [s]),
    o = t.author.id === l || u;
  return o ? (0, n.jsx)(a.MenuItem, {
    id: "remove-feed-message",
    label: _.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM,
    action: t => {
      t.stopPropagation();
      let s = !0;
      return t.shiftKey && (s = !1),
        function(e, t) {
          if (!t) {
            (0, g.removeItemFromGuildFeed)(e);
            return
          }(0, a.openModal)(t => (0, n.jsx)(a.ConfirmModal, {
            header: _.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM_HEADER,
            confirmText: _.default.Messages.GUILD_FEED_REMOVE_CONFIRM,
            cancelText: _.default.Messages.CANCEL,
            onConfirm: () => (0, g.removeItemFromGuildFeed)(e),
            ...t,
            children: (0, n.jsx)(a.Text, {
              variant: "text-md/normal",
              children: _.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM_CONFIRM_TEXT
            })
          }))
        }(e, s)
    },
    icon: h.default,
    iconProps: {
      foregroundColor: "currentColor"
    }
  }) : null
}

function G(e) {
  let t, s, n, r = e;
  for (;
    (0, l.isElement)(r, Node);)(0, l.isElement)(r, HTMLImageElement) && null != r.src && (s = r.src), (0, l.isElement)(r, HTMLAnchorElement) && null != r.href && (t = r.href, n = r.textContent), r = r.parentNode;
  return {
    href: t,
    src: s,
    textContent: n
  }
}

function p(e) {
  let {
    channel: t,
    message: s,
    messageItem: l,
    target: r,
    onSelect: E
  } = e, {
    href: M,
    src: m,
    textContent: h
  } = G(r), g = (0, i.default)(s, t), I = (0, f.default)(null != M ? M : m, h), p = (0, c.default)(m), v = (0, o.default)({
    id: s.id,
    label: _.default.Messages.COPY_ID_MESSAGE,
    shiftId: "".concat(s.channel_id, "-").concat(s.id)
  }), x = S(l, t.guild_id), L = C(l, l.message, t), A = (0, d.default)(s, t, {
    hoist: !1
  });
  return (0, n.jsxs)(a.Menu, {
    navId: "message",
    onClose: u.closeContextMenu,
    "aria-label": _.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    onSelect: E,
    children: [(0, n.jsxs)(a.MenuGroup, {
      children: [x, L, A]
    }), (0, n.jsxs)(a.MenuGroup, {
      children: [g, p, I, v]
    })]
  })
}