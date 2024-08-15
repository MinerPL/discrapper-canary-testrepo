n.d(t, {
	Z: function () {
		return f;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(481060),
	l = n(806966),
	u = n(254494),
	c = n(895924),
	d = n(826298),
	_ = n(395812);
let E = [16, 12, 8, 12];
function f(e) {
	let { className: t, channel: n, sections: a, activeCategoryIndex: f, filteredSectionId: h, onSectionClick: p, applicationCommandListRef: m } = e,
		I = i.useRef(null),
		T = i.useCallback(
			(e, t) => {
				var n;
				let r = 8;
				return (null === (n = a[t + 1]) || void 0 === n ? void 0 : n.type) === c.Qi.BUILT_IN && (r += 8), 32 + r;
			},
			[a]
		),
		g = i.useCallback(
			(e, t) => {
				var n;
				if (!t) return 0 === e ? 0 : 8;
				return (null === (n = a[e + 1]) || void 0 === n ? void 0 : n.type) === c.Qi.BUILT_IN ? 0 : 8;
			},
			[a]
		),
		S = i.useCallback(
			(e, t) => {
				let i = a[t];
				if (null == i) return;
				let s = (0, d.ky)(i),
					l = i.type === c.Qi.BUILT_IN ? 4 : 0,
					u = 32 - 2 * l,
					E = (0, r.jsx)(s, {
						channel: n,
						section: i,
						isSelected: null != h ? i.id === h : f === t,
						padding: l,
						width: u,
						height: u,
						selectable: !0
					}),
					m = i.type !== c.Qi.BUILT_IN && t < a.length - 1 && a[t + 1].type === c.Qi.BUILT_IN;
				return (0, r.jsxs)(
					'div',
					{
						className: _.section,
						children: [
							(0, r.jsx)(o.Tooltip, {
								text: i.name,
								position: 'right',
								children: (e) => {
									let { onClick: t, ...n } = e;
									return (0, r.jsx)(o.Clickable, {
										'aria-label': i.name,
										onClick: () => {
											p(i), null == t || t();
										},
										...n,
										children: E
									});
								}
							}),
							m ? (0, r.jsx)('hr', { className: _.builtInSeparator }) : null
						]
					},
					i.id
				);
			},
			[f, n, p, a, h]
		);
	return 0 === a.length
		? null
		: (0, r.jsx)('div', {
				className: s()(t, _.wrapper),
				children: (0, r.jsx)(u.Z, {
					categoryListRef: I,
					expressionsListRef: m,
					store: l.Xn,
					categories: a,
					className: _.list,
					renderCategoryListItem: S,
					rowCount: a.length,
					categoryHeight: T,
					listPadding: E,
					getScrollOffsetForIndex: g
				})
			});
}
