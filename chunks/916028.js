t(47120);
var n = t(735250);
t(470079);
var a = t(481060),
	i = t(113434);
s.Z = function (e) {
	let { onSelect: s, quest: t } = e,
		{ quests: r } = (0, i.J2)({ fetchPolicy: 'cache-and-network' }),
		o = [
			{
				label: 'NONE',
				value: null
			},
			...r.map((e) => ({
				label: e.config.messages.questName,
				value: e
			}))
		];
	return (0, n.jsxs)(a.FormItem, {
		children: [
			(0, n.jsx)(a.FormTitle, {
				tag: a.FormTitleTags.H5,
				children: 'Prefill with Quest'
			}),
			(0, n.jsx)(a.FormText, {
				children: (0, n.jsx)(a.Select, {
					'aria-label': 'Prefill Quest',
					options: o,
					isSelected: (e) => (null == e ? void 0 : e.id) === (null == t ? void 0 : t.id),
					select: s,
					serialize: String
				})
			})
		]
	});
};
