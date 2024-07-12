t.d(n, {
  f: function() {
return p;
  }
});
var i = t(374470),
  l = t(475179),
  o = t(904245),
  E = t(45114),
  r = t(40851),
  u = t(358221),
  a = t(623292),
  s = t(807092),
  d = t(6025),
  _ = t(897473),
  c = t(913663),
  C = t(268350),
  I = t(433355),
  A = t(592125),
  S = t(703558),
  T = t(323873),
  L = t(375954),
  N = t(306680),
  O = t(944486),
  D = t(914010),
  g = t(574254),
  h = t(451478),
  R = t(585483),
  f = t(981631);
let p = {
  binds: [
'esc',
'shift+pagedown'
  ],
  comboKeysBindGlobal: !0,
  action(e) {
if (h.Z.isElementFullScreen())
  return !1;
if (R.S.hasSubscribers(f.CkL.CALL_DECLINE))
  return R.S.dispatch(f.CkL.CALL_DECLINE), !1;
if (g.Z.close())
  return !1;
if (R.S.hasSubscribers(f.CkL.MEDIA_MODAL_CLOSE))
  return R.S.dispatch(f.CkL.MEDIA_MODAL_CLOSE), !1;
if ((0, i.k)(e.target)) {
  let n = (0, r.J5)(e.target);
  if (null == n ? void 0 : n.hasSubscribers(f.CkL.POPOUT_CLOSE))
    return n.dispatch(f.CkL.POPOUT_CLOSE), !1;
}
if (R.S.hasSubscribers(f.CkL.CLOSE_GIF_PICKER))
  return R.S.dispatch(f.CkL.CLOSE_GIF_PICKER), !1;
if (R.S.hasSubscribers(f.CkL.MODAL_CLOSE))
  return R.S.dispatch(f.CkL.MODAL_CLOSE), !1;
if (R.S.hasSubscribers(f.CkL.SEARCH_RESULTS_CLOSE))
  return R.S.dispatch(f.CkL.SEARCH_RESULTS_CLOSE), !1;
let n = D.Z.getGuildId(),
  t = O.Z.getChannelId(n),
  o = A.Z.getChannel(t),
  E = I.ZP.getSection(t, null == o ? void 0 : o.isDM()) === f.ULH.SIDEBAR_CHAT ? I.ZP.getSidebarState(t) : null,
  a = (null == E ? void 0 : E.type) === _.tI.VIEW_THREAD || (null == E ? void 0 : E.type) === _.tI.VIEW_CHANNEL ? E.channelId : null;
if (!1 === P(t) || !1 === P(a))
  return !1;
if (null != t && (null == E ? void 0 : E.type) === _.tI.CREATE_THREAD)
  return d.Z.closeChannelSidebar(t), !1;
let s = Z(t),
  c = Z(a);
return null == t || s || c || null == E ? null != t && !s && u.Z.getChatOpen(t) ? (l.Z.updateChatOpen(t, !1), !1) : (R.S.dispatch(f.CkL.SCROLLTO_PRESENT), !1) : (d.Z.closeChannelSidebar(t), !1);
  }
};

function P(e) {
  if (null != e) {
if (T.Z.isEditingAny(e))
  return o.Z.endEditMessage(e), !1;
if (null != s.Z.getPendingReply(e))
  return (0, a.A6)(e), !1;
if (null != c.Z.getStickerPreview(e, S.d.ChannelMessage))
  return (0, C.qB)(e, S.d.ChannelMessage), !1;
  }
}

function Z(e) {
  if (null == e)
return !1;
  let n = !1;
  return L.Z.getMessages(e).hasMoreAfter && (o.Z.jumpToPresent(e, f.AQB), n = !0), N.ZP.hasUnread(e) && ((0, E.In)(e), n = !0), (0, E.iV)(e), n;
}