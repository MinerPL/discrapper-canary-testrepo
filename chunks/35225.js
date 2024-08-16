n.d(t, {
    V: function () {
        return u;
    }
});
var r = n(819553),
    i = n(931261),
    a = n(592125),
    s = n(984933),
    o = n(944486),
    l = n(176505);
function u(e) {
    var t;
    let n = o.Z.getChannelId(e),
        u = null === (t = s.ZP.getDefaultChannel(e)) || void 0 === t ? void 0 : t.id;
    return (n !== l.oC.GUILD_ONBOARDING || r.ZP.shouldShowOnboarding(e)) && (n !== l.oC.GUILD_HOME || (0, i.s)(e)) && null != a.Z.getChannel(n) ? n : u;
}
