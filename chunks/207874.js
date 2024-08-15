n.d(t, {
	Z: function () {
		return h;
	}
});
var i = n(735250),
	s = n(470079),
	l = n(442837),
	r = n(461745),
	o = n(663389),
	a = n(5967),
	c = n(996733),
	u = n(981631),
	d = n(689938);
function h(e) {
	let { style: t } = e,
		n = (0, c.Z7)(),
		h = s.useCallback((e, t) => {
			t.stopPropagation(), t.preventDefault(), (0, c.QH)(e);
		}, []),
		m = s.useCallback(() => {
			(0, c.QH)(!1), (0, c.yN)('');
		}, []),
		p = s.useRef(null),
		f = (0, l.e7)([o.Z], () => o.Z.getSection());
	return (
		s.useEffect(() => {
			let e = (e) => {
				var t;
				let n = p.current,
					i = null === (t = (0, a.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
				if (!(i !== p.current && (0, a.VG)(i))) f !== u.oAB.PROFILE_CUSTOMIZATION && (null == n || n.focus());
			};
			return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
		}, [f]),
		(0, i.jsx)('div', {
			style: { marginBottom: '8px' },
			children: (0, i.jsx)(r.ZP, {
				ref: p,
				size: r.ZP.Sizes.MEDIUM,
				query: n,
				onClear: m,
				onQueryChange: c.yN,
				placeholder: d.Z.Messages.SEARCH,
				className: t,
				inputProps: {
					'aria-label': d.Z.Messages.USER_SETTINGS_SEARCH_BAR,
					'aria-expanded': !0,
					onFocus: (e) => h(!0, e),
					onBlur: (e) => h(!1, e)
				}
			})
		})
	);
}
