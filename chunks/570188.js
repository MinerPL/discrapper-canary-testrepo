t.d(n, {
    J: function () {
        return r;
    },
    U: function () {
        return o;
    }
});
var a = t(442837), l = t(650774), s = t(496675), i = t(231338);
function r(e) {
    return (0, a.e7)([s.Z], () => null != e && s.Z.can(i.Pl.MENTION_EVERYONE, e), [e]);
}
function o(e) {
    let n = null == e ? void 0 : e.guild_id, t = (0, a.e7)([l.Z], () => l.Z.getMemberCount(n), [n]);
    return null == e || null != t && !(t > 50000) && !0;
}
