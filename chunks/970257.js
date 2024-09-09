t.d(n, {
    a4: function () {
        return o;
    },
    vc: function () {
        return u;
    }
});
var i = t(592125),
    s = t(650774),
    l = t(496675),
    a = t(594174),
    r = t(981631);
function o(e) {
    return (
        null != e &&
        (function (e) {
            if (null == e) return !1;
            let n = e.id,
                t = a.default.getCurrentUser();
            return null != t && t.id !== n && !0 !== e.system && !0;
        })(e.author)
    );
}
function u(e) {
    return (
        null != e &&
        o(e) &&
        (function (e) {
            let n = i.Z.getChannel(e);
            if (null == n) return !1;
            if (n.type === r.d4z.DM || n.type === r.d4z.GROUP_DM) return !0;
            if (l.Z.canWithPartialContext(r.Plq.MANAGE_MESSAGES, { channelId: e })) {
                let e = s.Z.getMemberCount(n.getGuildId());
                return null != e && e >= 50;
            }
            return !1;
        })(e.getChannelId())
    );
}
