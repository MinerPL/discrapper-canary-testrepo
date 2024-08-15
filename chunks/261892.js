n.d(t, {
	f: function () {
		return i;
	}
});
let i = (0, n(818083).B)({
	kind: 'user',
	id: '2024-06_friends_with_nitro_on_profile_side_panel_experiment',
	label: 'Friends with Nitro on Profile Side Panel',
	defaultConfig: {
		enabled: !1,
		variant: 0
	},
	treatments: [
		{
			id: 1,
			label: 'Dismissible, 2 CTAs',
			config: {
				enabled: !0,
				variant: 1
			}
		},
		{
			id: 2,
			label: 'Dismissible, text link',
			config: {
				enabled: !0,
				variant: 2
			}
		},
		{
			id: 3,
			label: 'Non-dismissible, text link',
			config: {
				enabled: !0,
				variant: 3
			}
		}
	]
});
