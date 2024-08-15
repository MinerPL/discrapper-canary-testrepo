n.d(t, {
	C5: function () {
		return a;
	}
});
var s,
	a,
	r = n(818083);
((s = a || (a = {}))[(s.DEFAULT = 0)] = 'DEFAULT'),
	(s[(s.WINTER_2023_DROP = 1)] = 'WINTER_2023_DROP'),
	(s[(s.MONSTER_DROP = 2)] = 'MONSTER_DROP'),
	(s[(s.SPRINGTOONS = 4)] = 'SPRINGTOONS'),
	(s[(s.SHY = 5)] = 'SHY'),
	(s[(s.GALAXY = 6)] = 'GALAXY'),
	(s[(s.TIDE = 7)] = 'TIDE'),
	(s[(s.ROBERT = 8)] = 'ROBERT'),
	(s[(s.STORM = 9)] = 'STORM');
let i = (0, r.B)({
	kind: 'user',
	id: '2023-12_collectibles_shop_marketing',
	label: 'Collectibles Shop Marketing Variations',
	defaultConfig: { variant: 0 },
	treatments: [
		{
			id: 1,
			label: 'Winter 2023',
			config: { variant: 1 }
		},
		{
			id: 2,
			label: 'Jan 2024',
			config: { variant: 2 }
		},
		{
			id: 4,
			label: 'Springtoons 2024',
			config: { variant: 4 }
		},
		{
			id: 5,
			label: 'Shy 2024',
			config: { variant: 5 }
		},
		{
			id: 6,
			label: 'Galaxy 2024',
			config: { variant: 6 }
		},
		{
			id: 7,
			label: 'Tide 2024',
			config: { variant: 7 }
		},
		{
			id: 8,
			label: 'Robert 2024',
			config: { variant: 8 }
		},
		{
			id: 9,
			label: 'Storm 2024',
			config: { variant: 9 }
		}
	]
});
t.ZP = (e) => i.useExperiment({ location: e }).variant;
