s.d(n, {
    a4: function () {
        return o;
    },
    vc: function () {
        return d;
    }
});
var t = s(592125), l = s(650774), i = s(496675), a = s(594174), r = s(981631);
function o(e) {
    return null != e && function (e) {
        if (null == e)
            return !1;
        let n = e.id, s = a.default.getCurrentUser();
        return null != s && s.id !== n && !0 !== e.system && !0;
    }(e.author);
}
function d(e) {
    return null != e && o(e) && function (e) {
        let n = t.Z.getChannel(e);
        if (null == n)
            return !1;
        if (n.type === r.d4z.DM || n.type === r.d4z.GROUP_DM)
            return !0;
        if (i.Z.canWithPartialContext(r.Plq.MANAGE_MESSAGES, { channelId: e })) {
            let e = l.Z.getMemberCount(n.getGuildId());
            return null != e && e >= 50;
        }
        return !1;
    }(e.getChannelId());
}
