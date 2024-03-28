"use strict";
n.r(t), n.d(t, {
  MARK_CHANNEL_READ: function() {
    return g
  }
});
var i = n("374470"),
  o = n("475179"),
  l = n("904245"),
  u = n("45114"),
  a = n("40851"),
  s = n("358221"),
  d = n("623292"),
  r = n("807092"),
  E = n("6025"),
  c = n("897473"),
  _ = n("913663"),
  A = n("268350"),
  C = n("433355"),
  T = n("592125"),
  I = n("703558"),
  S = n("323873"),
  f = n("375954"),
  N = n("306680"),
  O = n("944486"),
  R = n("914010"),
  L = n("574254"),
  p = n("451478"),
  D = n("585483"),
  h = n("981631");
let g = {
  binds: ["esc", "shift+pagedown"],
  comboKeysBindGlobal: !0,
  action(e) {
    if (p.default.isElementFullScreen()) return !1;
    if (D.ComponentDispatch.hasSubscribers(h.ComponentActions.CALL_DECLINE)) return D.ComponentDispatch.dispatch(h.ComponentActions.CALL_DECLINE), !1;
    if (L.default.close()) return !1;
    if (D.ComponentDispatch.hasSubscribers(h.ComponentActions.MEDIA_MODAL_CLOSE)) return D.ComponentDispatch.dispatch(h.ComponentActions.MEDIA_MODAL_CLOSE), !1;
    if ((0, i.isElement)(e.target)) {
      let t = (0, a.getWindowDispatchForElement)(e.target);
      if (null == t ? void 0 : t.hasSubscribers(h.ComponentActions.POPOUT_CLOSE)) return t.dispatch(h.ComponentActions.POPOUT_CLOSE), !1
    }
    if (D.ComponentDispatch.hasSubscribers(h.ComponentActions.CLOSE_GIF_PICKER)) return D.ComponentDispatch.dispatch(h.ComponentActions.CLOSE_GIF_PICKER), !1;
    if (D.ComponentDispatch.hasSubscribers(h.ComponentActions.MODAL_CLOSE)) return D.ComponentDispatch.dispatch(h.ComponentActions.MODAL_CLOSE), !1;
    if (D.ComponentDispatch.hasSubscribers(h.ComponentActions.SEARCH_RESULTS_CLOSE)) return D.ComponentDispatch.dispatch(h.ComponentActions.SEARCH_RESULTS_CLOSE), !1;
    let t = R.default.getGuildId(),
      n = O.default.getChannelId(t),
      l = T.default.getChannel(n),
      u = C.default.getSection(n, null == l ? void 0 : l.isDM()) === h.ChannelSections.SIDEBAR_CHAT ? C.default.getSidebarState(n) : null,
      d = (null == u ? void 0 : u.type) === c.SidebarType.VIEW_THREAD || (null == u ? void 0 : u.type) === c.SidebarType.VIEW_CHANNEL ? u.channelId : null;
    if (!1 === b(n) || !1 === b(d)) return !1;
    if (null != n && (null == u ? void 0 : u.type) === c.SidebarType.CREATE_THREAD) return E.default.closeChannelSidebar(n), !1;
    let r = G(n),
      _ = G(d);
    return null == n || r || _ || null == u ? null != n && !r && s.default.getChatOpen(n) ? (o.default.updateChatOpen(n, !1), !1) : (D.ComponentDispatch.dispatch(h.ComponentActions.SCROLLTO_PRESENT), !1) : (E.default.closeChannelSidebar(n), !1)
  }
};

function b(e) {
  if (null != e) {
    if (S.default.isEditingAny(e)) return l.default.endEditMessage(e), !1;
    if (null != r.default.getPendingReply(e)) return (0, d.deletePendingReply)(e), !1;
    if (null != _.default.getStickerPreview(e, I.DraftType.ChannelMessage)) return (0, A.clearStickerPreview)(e, I.DraftType.ChannelMessage), !1
  }
}

function G(e) {
  if (null == e) return !1;
  let t = !1;
  return f.default.getMessages(e).hasMoreAfter && (l.default.jumpToPresent(e, h.MAX_MESSAGES_PER_CHANNEL), t = !0), N.default.hasUnread(e) && ((0, u.ack)(e), t = !0), (0, u.localAck)(e), t
}