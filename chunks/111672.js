var r = n(818083);
t.Z = (0, r.B)({
	kind: 'user',
	id: '2024-07_sidechain_compression',
	label: 'Test sidechain compression',
	defaultConfig: {
		sidechainAvailable: !1,
		sidechainEnabled: !1
	},
	treatments: [
		{
			id: 1,
			label: 'Sidechain Compression available, default enabled',
			config: {
				sidechainAvailable: !0,
				sidechainEnabled: !0
			}
		},
		{
			id: 2,
			label: 'Sidechain Compression avialable, default disabled',
			config: {
				sidechainAvailable: !0,
				sidechainEnabled: !1
			}
		}
	]
});
