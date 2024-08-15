n.d(t, {
	Z: function () {
		return c;
	}
});
var i = n(735250),
	l = n(470079),
	r = n(120356),
	a = n.n(r),
	s = n(481060),
	o = n(809642);
function c(e) {
	let {
		children: t,
		text: n,
		color: r,
		disableWrapper: c = !1,
		disabled: u = !1,
		hideOnClick: d = !0,
		shouldShow: h,
		forceOpen: p,
		selected: _ = !1,
		tooltipClass: f,
		tooltipContentClass: g
	} = e;
	return (0, i.jsx)(s.Tooltip, {
		shouldShow: h,
		forceOpen: p,
		spacing: 20,
		hideOnClick: d,
		text: u ? null : n,
		position: 'right',
		color: r,
		'aria-label': !1,
		tooltipClassName: a()(o.listItemTooltip, f),
		tooltipContentClassName: g,
		children: (e) =>
			c
				? l.cloneElement(l.Children.only(t), { ...e })
				: (0, i.jsx)('div', {
						className: a()(o.listItemWrapper, { [o.selected]: _ }),
						...e,
						children: t
					})
	});
}
