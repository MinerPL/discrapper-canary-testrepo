a.d(t, {
    W: function () {
        return i;
    }
});
var l = a(592125),
    n = a(496675),
    s = a(981631);
function i(e) {
    let t = l.Z.getChannel(e),
        a = null == t ? void 0 : t.isPrivate(),
        i = null == t ? void 0 : t.isForumChannel();
    return a || (n.Z.can(s.Plq.ATTACH_FILES, t) && n.Z.can(s.Plq.SEND_MESSAGES, t) && !i);
}
