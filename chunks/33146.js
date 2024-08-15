n.d(t, {
	Z: function () {
		return c;
	}
}),
	n(411104);
var a = n(735250);
n(470079);
var i = n(481060),
	l = n(34674),
	r = n(927356),
	s = n(689938);
function c(e) {
	let t,
		n,
		{ category: c, className: o, onViewAll: d } = e;
	return (
		null == c || (0, l.m0)(c)
			? ((t = s.Z.Messages.APP_DIRECTORY_EMPTY_SEARCH_HEADING), (n = s.Z.Messages.APP_DIRECTORY_EMPTY_SEARCH_SUBHEADING))
			: ((t = s.Z.Messages.APP_DIRECTORY_EMPTY_CATEGORY_SEARCH_HEADING.format({ categoryName: c.name })),
				(n = s.Z.Messages.APP_DIRECTORY_EMPTY_CATEGORY_SEARCH_SUBHEADING.format({
					viewAllHook: (e, t) =>
						(0, a.jsx)(
							i.Anchor,
							{
								onClick: d,
								children: e
							},
							t
						)
				}))),
		(0, a.jsx)(r.Z, {
			className: o,
			heading: t,
			body: n
		})
	);
}
