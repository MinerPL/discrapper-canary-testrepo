s.d(a, {
	Z: function () {
		return h;
	}
});
var n = s(735250),
	c = s(470079),
	o = s(120356),
	r = s.n(o),
	i = s(481060),
	t = s(235449),
	l = s(300234),
	d = s(92475);
function h(e) {
	let { guildId: a, goToThread: s } = e,
		o = (0, t.nA)(a),
		h = c.useCallback(
			(e) => {
				let a = o[e.row];
				return (0, n.jsx)(
					l.Z,
					{
						threadId: a,
						goToThread: s,
						showChannelName: !0
					},
					''.concat(e.section, '-').concat(e.row)
				);
			},
			[o, s]
		);
	return (0, n.jsx)(i.List, {
		className: r()(d.list, d.activeThreadsList),
		fade: !0,
		sections: [o.length],
		renderSection: () => null,
		sectionHeight: 0,
		rowHeight: 80,
		renderRow: h,
		chunkSize: 20
	});
}
