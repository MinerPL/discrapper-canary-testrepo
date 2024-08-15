n.d(t, {
	S: function () {
		return f;
	}
});
var i = n(735250),
	l = n(470079),
	r = n(120356),
	a = n.n(r),
	s = n(481060),
	o = n(593214),
	c = n(981631),
	u = n(689938),
	d = n(268864),
	h = n(416590),
	p = n(403614);
function _() {
	return (0, i.jsx)('div', {
		className: a()(h.row, h.rowGuildName),
		children: (0, i.jsx)('span', {
			className: a()(h.guildNameText, h.guildNameTextLimitedSize, d.tooltipText),
			children: u.Z.Messages.FAVORITE_ADDED
		})
	});
}
let f = l.memo(function (e) {
	let { 'aria-label': t = !1, children: n } = e,
		r = (function () {
			let { favoriteAdded: e, clearFavoriteAdded: t } = (0, o.up)();
			return (
				l.useEffect(() => {
					if (e) {
						let e = setTimeout(() => {
							t();
						}, 1500);
						return () => {
							t(), clearTimeout(e);
						};
					}
				}, [e, t]),
				e
			);
		})();
	return (0, i.jsx)(s.Tooltip, {
		forceOpen: r,
		color: s.TooltipColors.GREEN,
		hideOnClick: !0,
		spacing: 20,
		position: 'right',
		align: 'center',
		text: (0, i.jsx)(_, {}),
		'aria-label': t,
		tooltipClassName: p.listItemTooltip,
		children: (e) =>
			(0, i.jsx)('div', {
				...e,
				onMouseEnter: c.dG4,
				onMouseLeave: c.dG4,
				children: n
			})
	});
});
