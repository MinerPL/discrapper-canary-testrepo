var i = n(735250),
	a = n(470079),
	s = n(924826),
	r = n(91192),
	l = n(442837),
	o = n(481060),
	c = n(607070),
	d = n(617015),
	u = n(49175);
t.Z = function (e) {
	let { statusSections: t, renderRow: n, searchQuery: _ } = e,
		E = (e) => (0 === t[e].length ? 0 : d.De + 16),
		h = (e) => {
			let { section: i, row: a } = e,
				s = t[i];
			if (null == s || null == a) return null;
			let r = s[a];
			return null == r ? null : n(r);
		},
		m = (0, l.e7)([c.Z], () => c.Z.keyboardModeEnabled),
		I = a.useRef(null),
		g = a.useCallback(
			() =>
				new Promise((e) => {
					let t = I.current;
					if (null == t) return e();
					t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
				}),
			[]
		),
		p = a.useCallback(
			() =>
				new Promise((e) => {
					let t = I.current;
					if (null == t) return e();
					t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
				}),
			[]
		),
		T = a.useCallback((e) => {
			let t = document.querySelector(e),
				n = I.current;
			null != t &&
				null != n &&
				n.scrollIntoViewNode({
					node: t,
					padding: 8,
					callback: () => (null == t ? void 0 : t.focus())
				});
		}, []),
		S = (0, s.ZP)({
			id: 'people-list',
			isEnabled: m,
			scrollToStart: g,
			scrollToEnd: p,
			setFocus: T
		});
	return (0, i.jsx)(r.bG, {
		navigator: S,
		children: (0, i.jsx)(r.SJ, {
			children: (e) => {
				let { ref: n, ...a } = e;
				return (0, i.jsx)(o.ListAuto, {
					ref: (e) => {
						var t;
						(I.current = e), (n.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
					},
					sectionHeight: E,
					renderRow: h,
					rowHeight: d.NV,
					sections: t.map((e) => ('' !== _ && 0 === e.length ? e.length + 1 : e.length)),
					className: u.peopleList,
					...a
				});
			}
		})
	});
};
