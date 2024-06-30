n.d(t, {
    f: function () {
        return f;
    }
});
var r = n(735250);
n(470079);
var i = n(512722), a = n.n(i), o = n(442837), s = n(100527), l = n(906732), u = n(430824), c = n(594174), d = n(725568), _ = n(443002);
let E = e => {
    let {
            guildId: t,
            close: n,
            location: i
        } = e, d = (0, o.e7)([c.default], () => c.default.getCurrentUser());
    a()(null != d, 'PremiumGuildPerksModalConnected: currentUser cannot be undefined');
    let E = (0, o.e7)([u.Z], () => u.Z.getGuild(t), [t]), {analyticsLocations: f} = (0, l.ZP)(s.Z.BOOSTED_GUILD_PERKS_MODAL);
    return null == E ? null : (0, r.jsx)(l.Gt, {
        value: f,
        children: (0, r.jsx)(_.Z, {
            analyticsLocation: i,
            onClose: n,
            guild: E
        })
    });
};
function f(e) {
    let {
        guildId: t,
        location: n
    } = e;
    (0, d.q4)(e => {
        let {closeLayer: i} = e;
        return (0, r.jsx)(E, {
            close: i,
            guildId: t,
            location: n
        });
    }, { layerKey: 'BoostedGuildPerksModalConnected' });
}
