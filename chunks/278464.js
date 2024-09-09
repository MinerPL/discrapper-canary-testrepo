n.d(t, {
    n: function () {
        return a;
    }
});
var i = n(266067),
    l = n(905423),
    r = n(981631);
function a() {
    let e = (0, l.Z)((e) => e.guildId),
        { pathname: t } = (0, i.TH)(),
        n = t.startsWith(r.Z5c.GUILD_DISCOVERY) || t.startsWith(r.Z5c.GLOBAL_DISCOVERY),
        a = t.startsWith(r.Z5c.GUILD_MEMBER_VERIFICATION('')),
        s = t.startsWith(r.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(''));
    return null == e && !(n || a || s);
}
