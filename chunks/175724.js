t.d(n, {
    f: function () {
        return p;
    }
});
var i = t(374470),
    l = t(475179),
    o = t(904245),
    r = t(45114),
    E = t(40851),
    a = t(358221),
    u = t(623292),
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
    g = t(914010),
    h = t(574254),
    D = t(451478),
    R = t(585483),
    f = t(981631);
let p = {
    binds: ['esc', 'shift+pagedown'],
    comboKeysBindGlobal: !0,
    action(e) {
        if (D.Z.isElementFullScreen()) return !1;
        if (R.S.hasSubscribers(f.CkL.CALL_DECLINE)) return R.S.dispatch(f.CkL.CALL_DECLINE), !1;
        if (h.Z.close()) return !1;
        if (R.S.hasSubscribers(f.CkL.MEDIA_MODAL_CLOSE)) return R.S.dispatch(f.CkL.MEDIA_MODAL_CLOSE), !1;
        if ((0, i.k)(e.target)) {
            let n = (0, E.J5)(e.target);
            if (null == n ? void 0 : n.hasSubscribers(f.CkL.POPOUT_CLOSE)) return n.dispatch(f.CkL.POPOUT_CLOSE), !1;
        }
        if (R.S.hasSubscribers(f.CkL.CLOSE_GIF_PICKER)) return R.S.dispatch(f.CkL.CLOSE_GIF_PICKER), !1;
        if (R.S.hasSubscribers(f.CkL.MODAL_CLOSE)) return R.S.dispatch(f.CkL.MODAL_CLOSE), !1;
        if (R.S.hasSubscribers(f.CkL.SEARCH_RESULTS_CLOSE)) return R.S.dispatch(f.CkL.SEARCH_RESULTS_CLOSE), !1;
        let n = g.Z.getGuildId(),
            t = O.Z.getChannelId(n),
            o = A.Z.getChannel(t),
            r = I.ZP.getSection(t, null == o ? void 0 : o.isDM()) === f.ULH.SIDEBAR_CHAT ? I.ZP.getSidebarState(t) : null,
            u = (null == r ? void 0 : r.type) === _.tI.VIEW_THREAD || (null == r ? void 0 : r.type) === _.tI.VIEW_CHANNEL ? r.channelId : null;
        if (!1 === P(t) || !1 === P(u)) return !1;
        if (null != t && (null == r ? void 0 : r.type) === _.tI.CREATE_THREAD) return d.Z.closeChannelSidebar(t), !1;
        let s = Z(t),
            c = Z(u);
        return null == t || s || c || null == r ? (null != t && !s && a.Z.getChatOpen(t) ? (l.Z.updateChatOpen(t, !1), !1) : (R.S.dispatch(f.CkL.SCROLLTO_PRESENT), !1)) : (d.Z.closeChannelSidebar(t), !1);
    }
};
function P(e) {
    if (null != e) {
        if (T.Z.isEditingAny(e)) return o.Z.endEditMessage(e), !1;
        if (null != s.Z.getPendingReply(e)) return (0, u.A6)(e), !1;
        if (null != c.Z.getStickerPreview(e, S.d.ChannelMessage)) return (0, C.qB)(e, S.d.ChannelMessage), !1;
    }
}
function Z(e) {
    if (null == e) return !1;
    let n = !1;
    return L.Z.getMessages(e).hasMoreAfter && (o.Z.jumpToPresent(e, f.AQB), (n = !0)), N.ZP.hasUnread(e) && ((0, r.In)(e), (n = !0)), (0, r.iV)(e), n;
}
