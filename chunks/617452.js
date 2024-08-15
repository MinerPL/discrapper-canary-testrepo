n.d(t, {
	e: function () {
		return i;
	}
});
let r = (0, n(818083).B)({
		kind: 'user',
		id: '2024-05_collectibles_shop_bundle',
		label: 'Collectibles Shop Bundle',
		defaultConfig: { enabled: !1 },
		treatments: [
			{
				id: 1,
				label: 'Shop with bundle',
				config: { enabled: !0 }
			},
			{
				id: 2,
				label: 'Bundle + Use Now Non-Bundle',
				config: { enabled: !0 }
			}
		]
	}),
	i = (e) => r.useExperiment({ location: e }).enabled;
