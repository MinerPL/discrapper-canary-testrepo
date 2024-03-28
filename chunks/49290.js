"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  },
  targetToContext: function() {
    return G
  },
  useGuildFeedHideItem: function() {
    return S
  },
  useGuildFeedRemoveItem: function() {
    return C
  }
});
var n = s("735250");
s("470079");
var l = s("374470"),
  a = s("399606"),
  r = s("481060"),
  u = s("239091"),
  o = s("299206"),
  d = s("36829"),
  i = s("449751"),
  c = s("29264"),
  f = s("905041"),
  E = s("314897"),
  M = s("496675"),
  m = s("880008"),
  h = s("861234"),
  g = s("276438"),
  I = s("981631"),
  _ = s("689938");

function S(e, t) {
  return (0, n.jsx)(r.MenuItem, {
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
  let l = (0, a.useStateFromStores)([E.default], () => E.default.getId()),
    u = (0, a.useStateFromStores)([M.default], () => M.default.can(I.Permissions.MANAGE_MESSAGES, s), [s]);
  return t.author.id === l || u ? (0, n.jsx)(r.MenuItem, {
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
          }(0, r.openModal)(t => (0, n.jsx)(r.ConfirmModal, {
            header: _.default.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM_HEADER,
            confirmText: _.default.Messages.GUILD_FEED_REMOVE_CONFIRM,
            cancelText: _.default.Messages.CANCEL,
            onConfirm: () => (0, g.removeItemFromGuildFeed)(e),
            ...t,
            children: (0, n.jsx)(r.Text, {
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
  let t, s, n, a = e;
  for (;
    (0, l.isElement)(a, Node);)(0, l.isElement)(a, HTMLImageElement) && null != a.src && (s = a.src), (0, l.isElement)(a, HTMLAnchorElement) && null != a.href && (t = a.href, n = a.textContent), a = a.parentNode;
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
    target: a,
    onSelect: E
  } = e, {
    href: M,
    src: m,
    textContent: h
  } = G(a), g = (0, i.default)(s, t), I = (0, f.default)(null != M ? M : m, h), p = (0, c.default)(m), v = (0, o.default)({
    id: s.id,
    label: _.default.Messages.COPY_ID_MESSAGE,
    shiftId: "".concat(s.channel_id, "-").concat(s.id)
  }), x = S(l, t.guild_id), L = C(l, l.message, t), A = (0, d.default)(s, t, {
    hoist: !1
  });
  return (0, n.jsxs)(r.Menu, {
    navId: "message",
    onClose: u.closeContextMenu,
    "aria-label": _.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    onSelect: E,
    children: [(0, n.jsxs)(r.MenuGroup, {
      children: [x, L, A]
    }), (0, n.jsxs)(r.MenuGroup, {
      children: [g, p, I, v]
    })]
  })
}