n.d(t, {
	Z: function () {
		return h;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(617136),
	o = n(497505),
	c = n(602667),
	d = n(439826),
	u = n(43779),
	_ = n(981631),
	E = n(882442);
function h(e) {
	let { quest: t, className: n, questContent: s, contentPosition: h, rowIndex: m } = e,
		[I, g] = a.useState(!1),
		[p, T] = a.useState([]),
		S = a.useCallback(() => {
			g(!0),
				(0, l.dA)({
					questId: t.id,
					event: _.rMx.QUEST_HOVER,
					properties: (0, l.mH)(s)
				});
		}, [g, s, t.id]),
		f = a.useCallback(() => {
			g(!1);
		}, [g]);
	return (0, i.jsx)(c.A, {
		questOrQuests: t,
		questContent: s,
		questContentPosition: h,
		questContentRowIndex: m,
		trackGuildAndChannelMetadata: s === o.jn.QUESTS_EMBED,
		children: (e) =>
			(0, i.jsxs)('div', {
				id: 'quest-tile-'.concat(t.id),
				ref: (t) => {
					e.current = t;
				},
				className: r()(E.container, n),
				onMouseEnter: S,
				onMouseLeave: f,
				children: [
					(0, i.jsx)(d.Z, {
						quest: t,
						isHovering: I,
						errorHints: p
					}),
					(0, i.jsx)(u.Z, {
						quest: t,
						questContent: s,
						isHovering: I,
						contentPosition: h,
						rowIndex: m,
						onReceiveErrorHints: T
					})
				]
			})
	});
}
