"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
});
var s = n("884691"),
  a = n("819689"),
  l = n("267567"),
  i = n("625149"),
  r = n("300322"),
  o = n("967241"),
  u = n("845579"),
  d = n("271938"),
  c = n("42203"),
  f = n("836417"),
  h = n("26989"),
  C = n("88093"),
  p = n("377253"),
  m = n("957255"),
  E = n("306160"),
  g = n("659500"),
  S = n("773336"),
  T = n("299039"),
  A = n("61400"),
  _ = n("913491"),
  M = n("583022"),
  I = n("363396"),
  N = n("49111");

function v(e) {
  return m.default.can(N.Permissions.MANAGE_MESSAGES, e)
}
var x = function(e, t, n) {
  let x = s.useRef(n);
  return x.current = n, s.useCallback(n => {
    var s, L, y, R, O;
    if (!x.current || n.target !== n.currentTarget) return;
    let D = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
      P = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
      b = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
      j = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
      k = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
      F = p.default.getMessage(t, e),
      H = c.default.getChannel(t);
    if (null == F || null == H) return;
    let U = d.default.getId();
    switch (n.key.toLowerCase()) {
      case "backspace":
        D && (v(H) || F.canDeleteOwnMessage(U)) && (n.preventDefault(), (0, I.deleteMessage)(H, F, n));
        break;
      case "c":
        ((0, S.isMac)() ? j : b) && E.SUPPORTS_COPY && (n.preventDefault(), (0, E.copy)(F.content));
        break;
      case "e":
        if (D) {
          ;
          if (s = U, L = H, y = F, !L.isSystemDM() && (0, A.default)(y, s)) n.preventDefault(), (0, I.editMessage)(H, F)
        }
        break;
      case "p":
        if (D || k) {
          ;
          if (R = H, O = F, !R.isSystemDM() && !(0, _.default)(O) && (v(R) || R.isPrivate())) n.preventDefault(), (0, I.pinMessage)(H, F, n)
        }
        break;
      case "+":
        (D || k) && function(e) {
          let t = null == e.guild_id || C.default.canChatInGuild(e.guild_id),
            n = u.RenderReactions.getSetting(),
            {
              disableReactionCreates: s
            } = (0, M.default)({
              channel: e,
              canChat: t,
              renderReactions: n,
              canAddNewReactions: t && m.default.can(N.Permissions.ADD_REACTIONS, e),
              isLurking: null != e.guild_id && l.default.isLurking(e.guild_id),
              isGuest: null != e.guild_id && h.default.isCurrentUserGuest(e.guild_id),
              isActiveChannelOrUnarchivableThread: (0, r.getIsActiveChannelOrUnarchivableThread)(e)
            });
          return !s && n
        }(H) && (n.preventDefault(), g.ComponentDispatch.dispatchKeyed(N.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, F.id, {
          emojiPicker: !0
        }));
        break;
      case "r":
        (D || k) && (0, i.canReplyToMessage)(H, F) && (n.preventDefault(), (0, I.replyToMessage)(H, F, n));
        break;
      case "t":
        if (D && (0, r.computeCanStartPublicThread)(H, F)) n.preventDefault(), (0, o.openThreadSidebarForCreating)(H, F, "Message Shortcut");
        else if (F.hasFlag(N.MessageFlags.HAS_THREAD)) {
          let e = c.default.getChannel(T.default.castMessageIdAsChannelId(F.id));
          null != e && (D || k) && (n.preventDefault(), (0, o.openThreadSidebarForViewing)(e, k))
        }
        break;
      case "enter":
        P && (n.preventDefault(), (0, I.markMessageUnread)(H, F));
        break;
      case "escape":
        f.default.isEditing(H.id, F.id) ? a.default.endEditMessage(H.id) : g.ComponentDispatch.dispatch(N.ComponentActions.TEXTAREA_FOCUS)
    }
  }, [e, t])
}