var r = n(818083);
(t.C = (0, r.B)({
	kind: 'user',
	id: '2024-07_icymi',
	label: 'In-case-you-missed-it tab',
	defaultConfig: { enabled: !1 },
	treatments: [
		{
			id: 1,
			label: 'enables the new icymi tab',
			config: { enabled: !0 }
		}
	]
})),
	(0, r.B)({
		kind: 'user',
		id: '2024-07_icymi_negative_items',
		label: 'icymi negative content (debugging only)',
		defaultConfig: { enabled: !1 },
		treatments: [
			{
				id: 1,
				label: 'allow negative items only',
				config: { enabled: !0 }
			}
		]
	});
