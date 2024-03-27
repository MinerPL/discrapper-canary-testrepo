"use strict";
n.r(t), n.d(t, {
  useClickMessageAuthorUsername: function() {
    return O
  },
  useClickReferencedMessageAuthorUsername: function() {
    return R
  },
  useClickInteractionUserUsername: function() {
    return L
  },
  useClickMessageAuthorAvatar: function() {
    return P
  },
  useClickReferencedMessageAuthorAvatar: function() {
    return D
  },
  useClickInteractionUserAvatar: function() {
    return x
  },
  useContextMenuMessage: function() {
    return y
  },
  useContextMenuUser: function() {
    return U
  },
  useContextMenuModerateUser: function() {
    return j
  },
  useContextMenuRaidAlert: function() {
    return b
  },
  useClickMessage: function() {
    return G
  },
  useHoveredMessage: function() {
    return B
  },
  useFocusInside: function() {
    return k
  },
  useClickReply: function() {
    return F
  },
  useClickInteractionCommandName: function() {
    return w
  }
}), n("702976"), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("404118"),
  i = n("272030"),
  r = n("819689"),
  o = n("352674"),
  u = n("244201"),
  d = n("42203"),
  c = n("836417"),
  E = n("377253"),
  f = n("697218"),
  _ = n("659500"),
  T = n("791776"),
  I = n("568734"),
  m = n("773336"),
  N = n("158998"),
  p = n("441823"),
  S = n("913491"),
  C = n("456936"),
  A = n("49111"),
  h = n("782340");

function g(e, t, n) {
  return a.useCallback(() => {
    n({
      [e]: !t
    })
  }, [e, n, t])
}

function M(e, t, n) {
  return a.useCallback(s => {
    let a = f.default.getUser(e);
    if (null == a) return;
    if (s.preventDefault(), s.stopPropagation(), !s.shiftKey) {
      n();
      return
    }
    let l = "@".concat(N.default.getUserTag(a, {
        decoration: "never"
      })),
      i = "<@".concat(e, ">");
    _.ComponentDispatch.dispatchToLastSubscribed(A.ComponentActions.INSERT_TEXT, {
      plainText: l,
      rawText: i
    }), o.default.startTyping(t)
  }, [e, t, n])
}

function O(e, t, n, s) {
  let a = g("usernameProfile", n, s);
  return M(e.author.id, t.id, a)
}

function R(e, t, n, s) {
  let a = g("referencedUsernameProfile", n, s);
  return M(null == e ? void 0 : e.author.id, t.id, a)
}

function L(e, t, n, s) {
  let a = g("interactionUsernameProfile", n, s);
  return M(null == e ? void 0 : e.user.id, t.id, a)
}

function v(e) {
  return a.useCallback(t => {
    t.preventDefault(), t.stopPropagation(), e()
  }, [e])
}

function P(e, t) {
  let n = g("avatarProfile", e, t);
  return v(n)
}

function D(e, t) {
  let n = g("referencedAvatarProfile", e, t);
  return v(n)
}

function x(e, t) {
  let n = g("interactionAvatarProfile", e, t);
  return v(n)
}

function y(e, t, l, r) {
  let {
    id: o
  } = t, {
    id: f,
    flags: _
  } = e, T = (0, I.hasFlag)(_, A.MessageFlags.EPHEMERAL), N = (0, S.default)(e), p = (0, u.useAppContext)();
  return a.useCallback((e, t) => {
    if (T) return;
    if (!m.isPlatformEmbedded) {
      let t = e.target;
      if ("A" === t.tagName && "" !== t.textContent || null == window.getSelection) return;
      let n = window.getSelection();
      if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return
    }
    let a = d.default.getChannel(o),
      u = E.default.getMessage(o, f),
      _ = c.default.isEditing(o, f);
    null != a && null != u && !_ && (l({
      contextMenu: !0
    }), (0, i.openContextMenuLazy)(e, async () => {
      if (N) {
        let {
          default: e
        } = await n.el("385065").then(n.bind(n, "385065"));
        return n => (0, s.jsx)(e, {
          ...n,
          message: u,
          channel: a,
          attachment: t
        })
      } {
        let {
          default: e
        } = await n.el("261649").then(n.bind(n, "261649"));
        return n => (0, s.jsx)(e, {
          ...n,
          message: u,
          channel: a,
          attachment: t,
          shouldHideMediaOptions: r
        })
      }
    }, {
      onClose: () => l({
        contextMenu: !1
      }),
      context: p
    }))
  }, [T, o, f, l, p, N, r])
}

function U(e, t) {
  return a.useCallback(n => {
    let s = f.default.getUser(e),
      a = d.default.getChannel(t);
    null != s && null != a && (n.stopPropagation(), (0, p.openUserContextMenu)(n, s, a))
  }, [e, t])
}

function j(e, t, n) {
  return a.useCallback(s => {
    let a = f.default.getUser(e),
      l = d.default.getChannel(t);
    null != a && null != l && (s.stopPropagation(), (0, p.openModerateUserContextMenu)(s, {
      user: a,
      channel: l,
      moderationAlertId: n
    }))
  }, [e, t, n])
}

function b(e, t) {
  return a.useCallback(n => {
    let s = f.default.getUser(e),
      a = d.default.getChannel(t);
    null != s && null != a && (n.stopPropagation(), (0, p.openModerationRaidContextMenu)(n, s, a.guild_id))
  }, [e, t])
}

function G(e, t) {
  let {
    id: n
  } = e, {
    id: s
  } = t;
  return a.useCallback(e => {
    e.altKey && (e.preventDefault(), (0, C.default)(s, n))
  }, [s, n])
}

function B(e, t, n) {
  let s = "".concat(e, ":").concat(t),
    l = a.useRef(n),
    [i, r] = a.useState(n);
  l.current = i || l.current;
  let o = a.useCallback(() => {
      !i && (_.ComponentDispatch.dispatchKeyed(A.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, s, !0), r(!0))
    }, [i, s]),
    u = a.useCallback(() => {
      _.ComponentDispatch.dispatchKeyed(A.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, s, !1), r(!1)
    }, [s]);
  return {
    hasHovered: l.current,
    isHovered: i,
    handleMouseEnter: o,
    handleMouseLeave: u
  }
}

function k(e, t) {
  let [n, s] = a.useState(!1), [l, i] = a.useState(!1), r = a.useCallback(t => {
    var n, a;
    let l = null !== (a = null === (n = (0, T.eventOwnerDocument)(t)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== a ? a : null;
    (t.target === t.currentTarget || t.currentTarget.contains(l)) && (i(!0), s(!0)), null != e && e(t)
  }, [e]), o = a.useCallback(e => {
    var n, a;
    let l = null !== (a = null === (n = (0, T.eventOwnerDocument)(e)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== a ? a : null;
    (e.target === e.currentTarget || !e.currentTarget.contains(l)) && s(!1), null != t && t(e)
  }, [t]);
  return {
    handleFocus: r,
    handleBlur: o,
    isFocused: n,
    hasFocused: l
  }
}

function F(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return a.useCallback(() => {
    null != t && (n ? l.default.show({
      title: h.default.Messages.UNBLOCK_TO_JUMP_TITLE,
      body: h.default.Messages.UNBLOCK_TO_JUMP_BODY.format({
        name: t.author.username
      }),
      confirmText: h.default.Messages.OKAY
    }) : r.default.jumpToMessage({
      channelId: t.channel_id,
      messageId: t.id,
      flash: !0,
      returnMessageId: e.id
    }))
  }, [n, e.id, t])
}

function w(e, t) {
  let n = g("interactionData", e, t);
  return a.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), n()
  }, [n])
}