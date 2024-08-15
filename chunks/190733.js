n(47120);
var a = n(735250),
	i = n(470079),
	l = n(120356),
	r = n.n(l),
	s = n(481060),
	c = n(981631),
	o = n(689938),
	d = n(910627);
t.Z = i.forwardRef(function (e, t) {
	let { query: n, canShowCta: l = !1, onChange: u, onSubmit: _, className: g } = e,
		[m, f] = i.useState(!1);
	return (0, a.jsx)(s.SearchBox, {
		ref: t,
		className: r()(d.search, g),
		label: o.Z.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER,
		placeholder: o.Z.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER,
		searchTerm: n,
		cta: l && m && n.length > 0 ? o.Z.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null,
		onChange: u,
		onClear: () => u(''),
		onFocus: () => f(!0),
		onBlur: () => f(!1),
		onKeyPress: (e) => {
			e.charCode === c.yXg.ENTER && (null == _ || _());
		},
		autoFocus: !0
	});
});
