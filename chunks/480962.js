n.d(t, {
	_: function () {
		return d;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(539907),
	l = n(743236),
	u = n(21340),
	c = n(837244);
function d(e) {
	let { subMenuClassName: t, parentItem: n, isFocused: a, menuSubmenuProps: d, renderSubmenu: _ } = e,
		{ focusIndex: E, isUsingKeyboardNavigation: f, ...h } = d,
		p = i.useRef(null),
		m = i.useRef(null),
		I = i.useRef(null);
	return (
		i.useLayoutEffect(() => {
			var e;
			a && ((0, l.F)(p), null === (e = I.current) || void 0 === e || e.focus());
		}, [a]),
		(0, r.jsxs)('div', {
			ref: p,
			className: c.__invalid_submenuContainer,
			children: [
				(0, r.jsx)('div', { ref: m }),
				n,
				a
					? (0, r.jsx)(o.j, {
							targetRef: m,
							autoInvert: !0,
							nudgeAlignIntoViewport: !0,
							fixed: !0,
							spacing: 4,
							position: 'right',
							align: 'top',
							children: () =>
								(0, r.jsx)('div', {
									className: c.submenuPaddingContainer,
									children: (0, r.jsx)('div', {
										className: s()(c.submenu, t),
										...h,
										ref: I,
										children: (0, r.jsx)(u.zJ, {
											className: c.scroller,
											children: _()
										})
									})
								})
						})
					: null
			]
		})
	);
}
