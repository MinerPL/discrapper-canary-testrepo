t.d(s, {
	Z: function () {
		return l;
	}
});
var n = t(735250);
t(470079);
var a = t(481060),
	i = t(506937),
	r = t(107665),
	o = t(836864);
function l() {
	return (0, n.jsxs)(n.Fragment, {
		children: [
			(0, n.jsx)(a.Select, {
				options: [
					{
						value: 'en-US',
						label: 'English'
					},
					{
						value: 'fr',
						label: 'French'
					}
				],
				isSelected: (e) => e === o.N.currentLocale,
				select: (e) => o.N.setLocale(e),
				serialize: (e) => e
			}),
			(0, n.jsx)(a.Spacer, { size: 32 }),
			(0, n.jsxs)(a.FormSection, {
				tag: a.FormTitleTags.H1,
				children: [
					(0, n.jsx)(a.Text, {
						tag: 'div',
						variant: 'heading-lg/bold',
						children: o.N.format(r.Z.JJ0wpK)
					}),
					(0, n.jsx)(a.Text, {
						tag: 'div',
						variant: 'text-md/normal',
						children: o.N.format(i.Z.swfLzc)
					})
				]
			})
		]
	});
}
