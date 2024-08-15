n.d(t, {
	HI: function () {
		return l;
	},
	mJ: function () {
		return a;
	}
});
var s,
	a,
	r = n(818083);
((s = a || (a = {}))[(s.DEFAULT = 0)] = 'DEFAULT'),
	(s[(s.VARIANT_1 = 1)] = 'VARIANT_1'),
	(s[(s.VARIANT_2 = 2)] = 'VARIANT_2');
let i = (0, r.B)({
	kind: 'user',
	id: '2024-04_marketing_page_non_sub_perk_tile_order',
	label: 'Changes the order of the non-subscriber perk tiles',
	defaultConfig: { tileOrderVariant: 0 },
	treatments: [
		{
			id: 0,
			label: 'Default',
			config: { tileOrderVariant: 0 }
		},
		{
			id: 1,
			label: 'Variant 1',
			config: { tileOrderVariant: 1 }
		},
		{
			id: 2,
			label: 'Variant 2',
			config: { tileOrderVariant: 2 }
		}
	]
});
function l(e) {
	let { location: t } = e,
		{ tileOrderVariant: n } = i.useExperiment({ location: t });
	return n;
}
