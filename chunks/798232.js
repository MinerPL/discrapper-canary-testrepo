"use strict";
n.r(t), n.d(t, {
  MARK_CHANNEL_READ: function() {
    return g
  }
});
var i = n("118810"),
  o = n("255397"),
  l = n("819689"),
  u = n("267363"),
  a = n("244201"),
  s = n("191145"),
  d = n("529805"),
  r = n("685841"),
  E = n("208021"),
  c = n("582713"),
  _ = n("328511"),
  A = n("467094"),
  C = n("982108"),
  T = n("42203"),
  S = n("474643"),
  I = n("836417"),
  f = n("377253"),
  N = n("660478"),
  O = n("18494"),
  R = n("162771"),
  L = n("144747"),
  p = n("471671"),
  D = n("659500"),
  h = n("49111");
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
      u = C.default.getSection(n, null == l ? void 0 : l.isDM()),
      d = u === h.ChannelSections.SIDEBAR_CHAT ? C.default.getSidebarState(n) : null,
      r = (null == d ? void 0 : d.type) === c.SidebarType.VIEW_THREAD || (null == d ? void 0 : d.type) === c.SidebarType.VIEW_CHANNEL ? d.channelId : null;
    if (!1 === b(n) || !1 === b(r)) return !1;
    if (null != n && (null == d ? void 0 : d.type) === c.SidebarType.CREATE_THREAD) return E.default.closeChannelSidebar(n), !1;
    let _ = G(n),
      A = G(r);
    return null == n || _ || A || null == d ? null != n && !_ && s.default.getChatOpen(n) ? (o.default.updateChatOpen(n, !1), !1) : (D.ComponentDispatch.dispatch(h.ComponentActions.SCROLLTO_PRESENT), !1) : (E.default.closeChannelSidebar(n), !1)
  }
};

function b(e) {
  if (null != e) {
    if (I.default.isEditingAny(e)) return l.default.endEditMessage(e), !1;
    if (null != r.default.getPendingReply(e)) return (0, d.deletePendingReply)(e), !1;
    if (null != _.default.getStickerPreview(e, S.DraftType.ChannelMessage)) return (0, A.clearStickerPreview)(e, S.DraftType.ChannelMessage), !1
  }
}

function G(e) {
  if (null == e) return !1;
  let t = !1,
    n = f.default.getMessages(e);
  return n.hasMoreAfter && (l.default.jumpToPresent(e, h.MAX_MESSAGES_PER_CHANNEL), t = !0), N.default.hasUnread(e) && ((0, u.ack)(e), t = !0), (0, u.localAck)(e), t
}