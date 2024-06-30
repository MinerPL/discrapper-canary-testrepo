t.d(n, {
    f: function () {
        return p;
    }
});
var i = t(374470), l = t(475179), o = t(904245), E = t(45114), r = t(40851), u = t(358221), a = t(623292), s = t(807092), d = t(6025), _ = t(897473), c = t(913663), C = t(268350), A = t(433355), I = t(592125), S = t(703558), T = t(323873), L = t(375954), N = t(306680), O = t(944486), D = t(914010), g = t(574254), R = t(451478), f = t(585483), h = t(981631);
let p = {
    binds: [
        'esc',
        'shift+pagedown'
    ],
    comboKeysBindGlobal: !0,
    action(e) {
        if (R.Z.isElementFullScreen())
            return !1;
        if (f.S.hasSubscribers(h.CkL.CALL_DECLINE))
            return f.S.dispatch(h.CkL.CALL_DECLINE), !1;
        if (g.Z.close())
            return !1;
        if (f.S.hasSubscribers(h.CkL.MEDIA_MODAL_CLOSE))
            return f.S.dispatch(h.CkL.MEDIA_MODAL_CLOSE), !1;
        if ((0, i.k)(e.target)) {
            let n = (0, r.J5)(e.target);
            if (null == n ? void 0 : n.hasSubscribers(h.CkL.POPOUT_CLOSE))
                return n.dispatch(h.CkL.POPOUT_CLOSE), !1;
        }
        if (f.S.hasSubscribers(h.CkL.CLOSE_GIF_PICKER))
            return f.S.dispatch(h.CkL.CLOSE_GIF_PICKER), !1;
        if (f.S.hasSubscribers(h.CkL.MODAL_CLOSE))
            return f.S.dispatch(h.CkL.MODAL_CLOSE), !1;
        if (f.S.hasSubscribers(h.CkL.SEARCH_RESULTS_CLOSE))
            return f.S.dispatch(h.CkL.SEARCH_RESULTS_CLOSE), !1;
        let n = D.Z.getGuildId(), t = O.Z.getChannelId(n), o = I.Z.getChannel(t), E = A.ZP.getSection(t, null == o ? void 0 : o.isDM()) === h.ULH.SIDEBAR_CHAT ? A.ZP.getSidebarState(t) : null, a = (null == E ? void 0 : E.type) === _.tI.VIEW_THREAD || (null == E ? void 0 : E.type) === _.tI.VIEW_CHANNEL ? E.channelId : null;
        if (!1 === P(t) || !1 === P(a))
            return !1;
        if (null != t && (null == E ? void 0 : E.type) === _.tI.CREATE_THREAD)
            return d.Z.closeChannelSidebar(t), !1;
        let s = Z(t), c = Z(a);
        return null == t || s || c || null == E ? null != t && !s && u.Z.getChatOpen(t) ? (l.Z.updateChatOpen(t, !1), !1) : (f.S.dispatch(h.CkL.SCROLLTO_PRESENT), !1) : (d.Z.closeChannelSidebar(t), !1);
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
    return L.Z.getMessages(e).hasMoreAfter && (o.Z.jumpToPresent(e, h.AQB), n = !0), N.ZP.hasUnread(e) && ((0, E.In)(e), n = !0), (0, E.iV)(e), n;
}
