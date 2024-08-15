n.d(t, {
	Z: function () {
		return d;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(481060),
	o = n(49898),
	c = n(328759);
function d(e) {
	let { state: t, query: n, placeholder: s, onTextChange: d, onCollapsedClick: u, onClear: _, onBlur: E, onSubmit: h } = e,
		m = a.useRef(null),
		I = a.useCallback(
			(e) => {
				'Enter' === e.key && h();
			},
			[h]
		),
		g = a.useCallback(() => {
			u(),
				setTimeout(() => {
					var e;
					return null === (e = m.current) || void 0 === e ? void 0 : e.focus();
				});
		}, [u]);
	return t === o.WB.COLLAPSED
		? (0, i.jsx)(l.Clickable, {
				className: c.searchIcon,
				onClick: g,
				children: (0, i.jsx)(l.MagnifyingGlassIcon, {
					size: 'md',
					color: l.tokens.colors.INTERACTIVE_NORMAL
				})
			})
		: (0, i.jsx)(l.SearchBar, {
				ref: m,
				className: r()(c.searchBar, { [c.searchFloating]: t === o.WB.FLOATING }),
				size: l.SearchBar.Sizes.MEDIUM,
				query: n,
				placeholder: s,
				onChange: d,
				onClear: _,
				onKeyDown: I,
				onBlur: E
			});
}
