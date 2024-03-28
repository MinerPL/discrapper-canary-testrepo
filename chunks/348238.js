"use strict";
n.r(t), n.d(t, {
  useClickInteractionCommandName: function() {
    return w
  },
  useClickInteractionUserAvatar: function() {
    return P
  },
  useClickInteractionUserUsername: function() {
    return v
  },
  useClickMessage: function() {
    return G
  },
  useClickMessageAuthorAvatar: function() {
    return x
  },
  useClickMessageAuthorUsername: function() {
    return R
  },
  useClickReferencedMessageAuthorAvatar: function() {
    return D
  },
  useClickReferencedMessageAuthorUsername: function() {
    return O
  },
  useClickReply: function() {
    return k
  },
  useContextMenuMessage: function() {
    return y
  },
  useContextMenuModerateUser: function() {
    return b
  },
  useContextMenuRaidAlert: function() {
    return j
  },
  useContextMenuUser: function() {
    return U
  },
  useFocusInside: function() {
    return F
  },
  useHoveredMessage: function() {
    return B
  }
}), n("789020"), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("668781"),
  i = n("239091"),
  r = n("904245"),
  o = n("144144"),
  u = n("40851"),
  d = n("592125"),
  c = n("323873"),
  f = n("375954"),
  E = n("594174"),
  _ = n("585483"),
  T = n("5967"),
  m = n("630388"),
  I = n("358085"),
  p = n("51144"),
  h = n("91047"),
  N = n("901461"),
  S = n("50284"),
  C = n("981631"),
  A = n("689938");

function g(e, t, n) {
  return a.useCallback(() => {
    n({
      [e]: !t
    })
  }, [e, n, t])
}

function M(e, t, n) {
  return a.useCallback(s => {
    let a = E.default.getUser(e);
    if (null == a) return;
    if (s.preventDefault(), s.stopPropagation(), !s.shiftKey) {
      n();
      return
    }
    let l = "@".concat(p.default.getUserTag(a, {
        decoration: "never"
      })),
      i = "<@".concat(e, ">");
    _.ComponentDispatch.dispatchToLastSubscribed(C.ComponentActions.INSERT_TEXT, {
      plainText: l,
      rawText: i
    }), o.default.startTyping(t)
  }, [e, t, n])
}

function R(e, t, n, s) {
  let a = g("usernameProfile", n, s);
  return M(e.author.id, t.id, a)
}

function O(e, t, n, s) {
  let a = g("referencedUsernameProfile", n, s);
  return M(null == e ? void 0 : e.author.id, t.id, a)
}

function v(e, t, n, s) {
  let a = g("interactionUsernameProfile", n, s);
  return M(null == e ? void 0 : e.user.id, t.id, a)
}

function L(e) {
  return a.useCallback(t => {
    t.preventDefault(), t.stopPropagation(), e()
  }, [e])
}

function x(e, t) {
  return L(g("avatarProfile", e, t))
}

function D(e, t) {
  return L(g("referencedAvatarProfile", e, t))
}

function P(e, t) {
  return L(g("interactionAvatarProfile", e, t))
}

function y(e, t, l, r) {
  let {
    id: o
  } = t, {
    id: E,
    flags: _
  } = e, T = (0, m.hasFlag)(_, C.MessageFlags.EPHEMERAL), p = (0, N.default)(e), h = (0, u.useAppContext)();
  return a.useCallback((e, t) => {
    if (T) return;
    if (!I.isPlatformEmbedded) {
      let t = e.target;
      if ("A" === t.tagName && "" !== t.textContent || null == window.getSelection) return;
      let n = window.getSelection();
      if (null != n && !n.isCollapsed && (n.focusNode === e.target || t.contains(n.focusNode))) return
    }
    let a = d.default.getChannel(o),
      u = f.default.getMessage(o, E),
      _ = c.default.isEditing(o, E);
    null != a && null != u && !_ && (l({
      contextMenu: !0
    }), (0, i.openContextMenuLazy)(e, async () => {
      if (p) {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("2047"), n.e("37766"), n.e("68125")]).then(n.bind(n, "240678"));
        return n => (0, s.jsx)(e, {
          ...n,
          message: u,
          channel: a,
          attachment: t
        })
      } {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("2047"), n.e("37766"), n.e("37220"), n.e("75301"), n.e("53751")]).then(n.bind(n, "225138"));
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
      context: h
    }))
  }, [T, o, E, l, h, p, r])
}

function U(e, t) {
  return a.useCallback(n => {
    let s = E.default.getUser(e),
      a = d.default.getChannel(t);
    null != s && null != a && (n.stopPropagation(), (0, h.openUserContextMenu)(n, s, a))
  }, [e, t])
}

function b(e, t, n) {
  return a.useCallback(s => {
    let a = E.default.getUser(e),
      l = d.default.getChannel(t);
    null != a && null != l && (s.stopPropagation(), (0, h.openModerateUserContextMenu)(s, {
      user: a,
      channel: l,
      moderationAlertId: n
    }))
  }, [e, t, n])
}

function j(e, t) {
  return a.useCallback(n => {
    let s = E.default.getUser(e),
      a = d.default.getChannel(t);
    null != s && null != a && (n.stopPropagation(), (0, h.openModerationRaidContextMenu)(n, s, a.guild_id))
  }, [e, t])
}

function G(e, t) {
  let {
    id: n
  } = e, {
    id: s
  } = t;
  return a.useCallback(e => {
    e.altKey && (e.preventDefault(), (0, S.default)(s, n))
  }, [s, n])
}

function B(e, t, n) {
  let s = "".concat(e, ":").concat(t),
    l = a.useRef(n),
    [i, r] = a.useState(n);
  l.current = i || l.current;
  let o = a.useCallback(() => {
      !i && (_.ComponentDispatch.dispatchKeyed(C.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, s, !0), r(!0))
    }, [i, s]),
    u = a.useCallback(() => {
      _.ComponentDispatch.dispatchKeyed(C.ComponentActionsKeyed.ANIMATE_CHAT_AVATAR, s, !1), r(!1)
    }, [s]);
  return {
    hasHovered: l.current,
    isHovered: i,
    handleMouseEnter: o,
    handleMouseLeave: u
  }
}

function F(e, t) {
  let [n, s] = a.useState(!1), [l, i] = a.useState(!1), r = a.useCallback(t => {
    var n, a;
    let l = null !== (a = null === (n = (0, T.eventOwnerDocument)(t)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== a ? a : null;
    (t.target === t.currentTarget || t.currentTarget.contains(l)) && (i(!0), s(!0)), null != e && e(t)
  }, [e]);
  return {
    handleFocus: r,
    handleBlur: a.useCallback(e => {
      var n, a;
      let l = null !== (a = null === (n = (0, T.eventOwnerDocument)(e)) || void 0 === n ? void 0 : n.activeElement) && void 0 !== a ? a : null;
      (e.target === e.currentTarget || !e.currentTarget.contains(l)) && s(!1), null != t && t(e)
    }, [t]),
    isFocused: n,
    hasFocused: l
  }
}

function k(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return a.useCallback(() => {
    null != t && (n ? l.default.show({
      title: A.default.Messages.UNBLOCK_TO_JUMP_TITLE,
      body: A.default.Messages.UNBLOCK_TO_JUMP_BODY.format({
        name: t.author.username
      }),
      confirmText: A.default.Messages.OKAY
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