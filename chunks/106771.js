t.d(n, {
	Z: function () {
		return m;
	}
});
var i = t(735250),
	a = t(470079),
	l = t(481060),
	o = t(783097),
	r = t(176412),
	s = t(753972),
	c = t(532309),
	d = t(728021),
	u = t(413097);
function m(e) {
	var n;
	let { command: t, application: m, onClick: p, query: _, searchResultsPosition: C } = e,
		{ iconURL: f, name: h, description: A } = a.useMemo(() => (0, o.sl)(m, { fakeAppIconURL: u }), [m]),
		E = a.useMemo(() => {
			var e;
			let n = null !== (e = null == t ? void 0 : t.displayDescription) && void 0 !== e ? e : A;
			return null == n ? null : (0, r.ae)(n, void 0);
		}, [A, null == t ? void 0 : t.displayDescription]),
		{ trackSearchResultsItemImpressionRef: N } = (0, c.Z)({
			applicationId: m.id,
			commandId: null == t ? void 0 : t.id,
			query: _,
			searchResultsPosition: C
		});
	return (0, i.jsx)(l.Clickable, {
		className: d.clickable,
		innerRef: (e) => (N.current = e),
		onClick: p,
		children: (0, i.jsxs)(l.FocusBlock, {
			className: d.focusBlock,
			children: [
				(0, i.jsx)(s.Z, {
					src: f,
					className: d.icon,
					'aria-hidden': !0,
					rendersPlaceholder: !0
				}),
				(0, i.jsxs)('div', {
					className: d.cmdDetails,
					children: [
						(0, i.jsx)(l.Heading, {
							variant: 'heading-md/semibold',
							color: 'header-primary',
							lineClamp: 1,
							children: null !== (n = null == t ? void 0 : t.displayName) && void 0 !== n ? n : h
						}),
						(0, i.jsx)(l.Text, {
							variant: 'text-sm/normal',
							color: 'text-secondary',
							lineClamp: 1,
							children: E
						})
					]
				}),
				null != t
					? (0, i.jsx)(l.Text, {
							className: d.cmdAppName,
							variant: 'text-sm/normal',
							color: 'text-secondary',
							children: h
						})
					: null,
				(0, i.jsx)('div', { className: d.underline })
			]
		})
	});
}
