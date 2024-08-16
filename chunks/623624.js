n.d(t, {
    f: function () {
        return f;
    }
});
var r = n(735250);
n(470079);
var i = n(512722),
    a = n.n(i),
    s = n(442837),
    o = n(100527),
    l = n(906732),
    u = n(84615),
    c = n(430824),
    d = n(594174),
    _ = n(443002);
let E = (e) => {
    let { guildId: t, close: n, location: i } = e,
        u = (0, s.e7)([d.default], () => d.default.getCurrentUser());
    a()(null != u, 'PremiumGuildPerksModalConnected: currentUser cannot be undefined');
    let E = (0, s.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        { analyticsLocations: f } = (0, l.ZP)(o.Z.BOOSTED_GUILD_PERKS_MODAL);
    return null == E
        ? null
        : (0, r.jsx)(l.Gt, {
              value: f,
              children: (0, r.jsx)(_.Z, {
                  analyticsLocation: i,
                  onClose: n,
                  guild: E
              })
          });
};
function f(e) {
    let { guildId: t, location: n } = e;
    (0, u.q4)(
        (e) => {
            let { closeLayer: i } = e;
            return (0, r.jsx)(E, {
                close: i,
                guildId: t,
                location: n
            });
        },
        { layerKey: 'BoostedGuildPerksModalConnected' }
    );
}
