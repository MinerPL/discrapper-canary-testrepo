n.d(t, {
	g: function () {
		return r;
	}
});
let r = (0, n(818083).B)({
	kind: 'user',
	id: '2024-06_outbound_promo_desktop_upsell',
	label: 'Upsell Outbound Promos',
	defaultConfig: {
		enabled: !1,
		getNitroCTA: !1
	},
	treatments: [
		{
			id: 1,
			label: 'Enable upsells for outbound promos w/ Nagbar variant 1 - gift inventory cta',
			config: {
				enabled: !0,
				getNitroCTA: !1
			}
		},
		{
			id: 2,
			label: 'Enable upsells for outbound promos w/ Nagbar variant 2 - get nitro cta',
			config: {
				enabled: !0,
				getNitroCTA: !0
			}
		}
	]
});
