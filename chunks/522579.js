n.d(t, {
    z9: function () {
        return s;
    }
}),
    n(399606);
var i = n(592125),
    a = n(709054);
function s(e, t) {
    if (e !== a.default.castChannelIdAsMessageId(t)) return !1;
    let n = i.Z.getChannel(t);
    if (null == n || !n.isForumPost()) return !1;
    let s = i.Z.getChannel(n.parent_id);
    return (null == s ? void 0 : s.isMediaChannel()) === !0;
}
