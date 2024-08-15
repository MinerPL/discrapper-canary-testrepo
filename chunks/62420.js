t.d(n, {
	Z: function () {
		return o;
	}
}),
	t(653041),
	t(47120);
var i = t(735250);
t(470079);
var a = t(481060),
	l = t(117984),
	r = t(593214),
	u = t(362658),
	s = t(689938);
function o(e) {
	let n = (0, r.Mt)(),
		t = (0, r.s4)(e.id),
		o = (0, r.zv)(),
		{ isFavoritesPerk: d } = (0, u.z)('useChannelMoveToCategory');
	if (__OVERLAY__ || !n || null == t || !d) return null;
	let [c, _] = (function (e) {
		let n = [],
			t = null;
		for (let i of e) null == i.id ? (t = i) : n.push(i);
		return [t, n];
	})(o.filter((e) => e.id !== (null == t ? void 0 : t.parentId)));
	function M(e) {
		null != t && (0, l.uA)(t.id, e);
	}
	return null == c && 0 === _.length
		? null
		: (0, i.jsxs)(a.MenuItem, {
				id: 'move-to-category',
				label: s.Z.Messages.MOVE_TO,
				children: [
					null != c &&
						(0, i.jsx)(a.MenuGroup, {
							children: (0, i.jsx)(a.MenuItem, {
								id: 'favorite-uncategorized',
								label: c.name,
								action: () => M(c.id)
							})
						}),
					_.length > 0 &&
						(0, i.jsx)(a.MenuGroup, {
							children: _.map((e) => {
								let { id: n, name: t } = e;
								return (0, i.jsx)(
									a.MenuItem,
									{
										id: 'favorite-'.concat(n),
										label: t,
										action: () => M(n)
									},
									n
								);
							})
						})
				]
			});
}
