r.d(n, {
    o: function () {
        return c;
    }
});
var i = r(592125),
    a = r(594174),
    s = r(5192),
    o = r(51144),
    l = r(484710),
    u = r(388032);
function c(e, n, r) {
    var c;
    let d = a.default.getUser(n),
        f = i.Z.getChannel(r),
        _ = null !== (c = s.ZP.getName(null == f ? void 0 : f.guild_id, null == f ? void 0 : f.id, d)) && void 0 !== c ? c : o.ZP.getGlobalName(d);
    switch (e) {
        case l.w.IGNORE_SUCCESS:
            return u.intl.formatToPlainString(u.t['+joqrK'], { username: _ });
        case l.w.UNIGNORE_SUCCESS:
            return u.intl.formatToPlainString(u.t.THExKS, { username: _ });
        case l.w.BLOCK_SUCCESS:
            return u.intl.formatToPlainString(u.t.XXPrIi, { username: _ });
        case l.w.UNBLOCK_SUCCESS:
            return u.intl.formatToPlainString(u.t.uExcGR, { username: _ });
        case l.w.MUTE_SUCCESS:
            return u.intl.formatToPlainString(u.t.X4NtYW, { username: _ });
        case l.w.UNMUTE_SUCCESS:
            return u.intl.formatToPlainString(u.t.tRaBfX, { username: _ });
        case l.w.REPORT_SUCCESS:
            return u.intl.formatToPlainString(u.t.FOptFR, { username: _ });
        case l.w.GENERIC_ERROR:
            return u.intl.string(u.t.zBpoc3);
        default:
            return u.intl.string(u.t['+c5xtb']);
    }
}
