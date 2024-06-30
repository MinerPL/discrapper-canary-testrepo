t.d(n, {
    U: function () {
        return f;
    },
    o: function () {
        return M;
    }
}), t(47120);
var i = t(275726), a = t(442837), r = t(71619), l = t(665906), o = t(496675), s = t(594174), u = t(981631), c = t(231338);
function d(e, n, t) {
    let a;
    return (a = e.isPrivate() ? !e.isSystemDM() : t.can(c.Pl.SEND_MESSAGES, e) && t.can(c.Pl.READ_MESSAGE_HISTORY, e)) && i.V.REPLYABLE.has(n.type);
}
function E(e, n, t, i, a) {
    let r = n.hasFlag(u.iLy.EPHEMERAL), l = n.state === u.yb.SENT, o = !e.isArchivedThread() || a;
    return t && l && !r && !i && o;
}
function f(e, n) {
    var t;
    let i = (0, l.tc)(e), [, s] = (0, r.AB)(null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : void 0), u = (0, a.e7)([o.Z], () => null != e && null != n && d(e, n, o.Z));
    return null != e && null != n && E(e, n, u, s, i);
}
function M(e, n) {
    var t;
    let i = (0, l.kn)(e), a = d(e, n, o.Z), u = s.default.getCurrentUser(), [, c] = (0, r.s5)(null == u ? void 0 : u.id, null !== (t = e.getGuildId()) && void 0 !== t ? t : void 0);
    return E(e, n, a, c, i);
}
