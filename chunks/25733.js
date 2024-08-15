var r = n(735250);
n(470079);
var i = n(433517),
	a = n(481060),
	s = n(704587),
	o = n(920133),
	l = n(338096);
t.Z = {
	openDmSettingsUpsellModal(e) {
		if (!(0, s.G)({ location: 'DmSettingsUpsellManager' })) return;
		let t = i.K.get(l.G),
			u = Date.now();
		null == t || u - t > l.k
			? (i.K.set(l.G, u),
				(0, a.openModalLazy)(async () => {
					let { default: t } = await n.e('35489').then(n.bind(n, 582712));
					return (n) =>
						(0, r.jsx)(t, {
							...n,
							guildId: e
						});
				}))
			: (0, o.L)(o.Q.SUPPRESSED_BY_COOLDOWN, e);
	}
};
