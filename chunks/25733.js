var r = n(735250);
n(470079);
var i = n(433517), a = n(481060), o = n(704587), s = n(920133), l = n(338096);
t.Z = {
    openDmSettingsUpsellModal(e) {
        if (!(0, o.G)({ location: 'DmSettingsUpsellManager' }))
            return;
        let t = i.K.get(l.G), u = Date.now();
        null == t || u - t > l.k ? (i.K.set(l.G, u), (0, a.openModalLazy)(async () => {
            let {default: t} = await n.e('35489').then(n.bind(n, 582712));
            return n => (0, r.jsx)(t, {
                ...n,
                guildId: e
            });
        })) : (0, s.L)(s.Q.SUPPRESSED_BY_COOLDOWN, e);
    }
};
