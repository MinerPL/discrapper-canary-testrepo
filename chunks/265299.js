n.d(t, {
	Z: function () {
		return u;
	}
});
var i = n(735250);
n(470079);
var a = n(481060),
	s = n(113434),
	r = n(497505),
	l = n(37303),
	o = n(683650),
	c = n(513766);
function u(e) {
	let { questId: t } = e,
		{ quests: n, isFetchingCurrentQuests: u } = (0, s.J2)({ fetchPolicy: 'cache-or-network' }),
		d = n.find((e) => e.id === t);
	return u
		? (0, i.jsx)(a.Spinner, { className: c.spinner })
		: null == d
			? (0, i.jsx)(o.o, {})
			: (0, i.jsx)(
					l.Z,
					{
						quest: d,
						location: r.jn.QUESTS_EMBED
					},
					d.id
				);
}
