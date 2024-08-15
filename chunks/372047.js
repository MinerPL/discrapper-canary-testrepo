let s = (0, n(818083).B)({
	kind: 'user',
	id: '2024-06_shop_popular_picks',
	label: 'Shop Popular Picks Experiment',
	defaultConfig: { enabled: !1 },
	treatments: [
		{
			id: 1,
			label: 'Enables popular picks row in shop',
			config: { enabled: !0 }
		}
	]
});
t.Z = (e) => {
	let { location: t } = e;
	return s.useExperiment({ location: t });
};
