n.d(t, {
	Z: function () {
		return O;
	}
}),
	n(47120),
	n(411104);
var i = n(735250),
	a = n(470079),
	s = n(392711),
	r = n.n(s),
	l = n(260034),
	o = n(481060),
	c = n(393903),
	d = n(410030),
	u = n(117496),
	_ = n(225784),
	E = n(626135),
	h = n(900849),
	m = n(540742),
	I = n(143021),
	g = n(393596),
	p = n(35448),
	T = n(458203),
	S = n(692420),
	f = n(689938),
	C = n(992945);
let N = 56,
	A = 94,
	v = Object.freeze({
		top: 0,
		bottom: 0,
		left: 32,
		right: 202
	}),
	Z = Object.freeze({
		top: 0,
		bottom: 0,
		left: 32,
		right: 32
	}),
	L = r().throttle(h.c6, 1000, {
		leading: !1,
		trailing: !0
	});
function O(e) {
	let { loadId: t, onGuildCardSeen: n, onGuildCardClick: r } = e,
		h = (0, d.ZP)(),
		{ guilds: O, loading: R, searchResultsQuery: x, loadMore: b, searchCategoryId: P } = (0, I.f)({ loadId: t }),
		M = a.useContext(E.AnalyticsContext),
		[D, y] = a.useState((0, u.P)()),
		[j, U] = a.useState(!0),
		G = a.useRef(j),
		[k, w] = a.useState(3),
		B = a.useRef(k),
		H = (0, c.y)((e) => {
			let t = null == e ? void 0 : e.getBoundingClientRect();
			if (null == t) return;
			let n = t.width;
			n < 1024 && G.current ? ((G.current = !1), U(!1)) : n > 1024 && !G.current && ((G.current = !0), U(!0));
			let i = 1;
			for (n -= j ? 420 : 0, n -= 250; n > 0; ) (n -= 234), (i += 1);
			i !== B.current && ((B.current = i), w(i));
		});
	a.useEffect(() => {
		y((0, u.P)());
	}, [x]);
	let V = a.useCallback(
			(e) => {
				L({
					loadId: t,
					searchId: D,
					query: x,
					guildResults: O,
					analyticsContext: M,
					categoryId: P,
					isTagSearch: !1
				}),
					n(e, P);
			},
			[M, O, t, n, P, D, x]
		),
		F = a.useMemo(() => (R ? [O.length, 0] : [O.length]), [O.length, R]),
		Y = 0 === O.length && !R,
		W = a.useCallback(
			(e, n, a) => {
				switch (e) {
					case 0:
						return (0, i.jsxs)(
							'div',
							{
								style: {
									paddingLeft: n.left,
									width: n.width - 16
								},
								children: [
									(0, i.jsx)(l.X, {
										variant: 'heading-lg/semibold',
										className: C.heading,
										children: f.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({ query: x })
									}),
									!j &&
										(0, i.jsxs)('div', {
											className: C.headingFilters,
											children: [(0, i.jsx)(p.Z, { loadId: t }), (0, i.jsx)(S.Z, { loadId: t })]
										}),
									Y && (0, i.jsx)(T.Z, { loadId: t })
								]
							},
							a
						);
					case 1:
						return (0, i.jsx)(o.Spinner, { className: C.spinner }, a);
				}
			},
			[Y, j, t, x]
		),
		z = a.useCallback(
			(e) => {
				switch (e) {
					case 0:
						let t = j ? N : A;
						return Y ? t + 400 : t;
					case 1:
						return 120;
					default:
						throw Error('[getSectionHeight] Failed for section: '.concat(e));
				}
			},
			[Y, j]
		),
		K = a.useCallback(
			(e, t) => {
				switch (e) {
					case 0:
						return O[t].id;
					case 1:
						return 'loading';
					default:
						throw Error('[getItemKey] Failed for section: '.concat(e));
				}
			},
			[O]
		),
		q = a.useCallback((e) => {
			switch (e) {
				case 0:
					return 320;
				case 1:
					return 0;
				default:
					throw Error('[getItemHeight] Failed for section: '.concat(e));
			}
		}, []),
		Q = a.useCallback(
			(e, t, n) => {
				var i, a;
				r(e, t, n);
				let s = null === (a = J.current) || void 0 === a ? void 0 : null === (i = a.getScrollerState()) || void 0 === i ? void 0 : i.scrollTop;
				null != s && m.B.setState({ searchScrollPosition: s });
			},
			[r]
		),
		X = a.useCallback(
			(e, t, n, a) => {
				if (0 === e) {
					let e = O[t];
					return (0, i.jsx)(
						'div',
						{
							style: n,
							children: (0, i.jsx)(
								_.Z,
								{
									guild: e,
									onView: (e) => Q(e, t, P),
									onGuildCardSeen: V,
									theme: h
								},
								e.id
							)
						},
						a
					);
				}
				return null;
			},
			[O, Q, V, P, h]
		),
		J = a.useRef(null);
	a.useEffect(() => {
		let e = J.current;
		return () => {
			var t;
			let n = null == e ? void 0 : null === (t = e.getScrollerState()) || void 0 === t ? void 0 : t.scrollTop;
			null != n && m.B.setState({ searchScrollPosition: n });
		};
	}, []),
		a.useLayoutEffect(() => {
			let { searchScrollPosition: e } = m.B.getState();
			null != e &&
				setTimeout(() => {
					var t;
					null === (t = J.current) ||
						void 0 === t ||
						t.scrollTo({
							to: e,
							animate: !1,
							callback: () => {
								m.B.setState({ searchScrollPosition: null });
							}
						});
				});
		}, []);
	let $ = a.useMemo(
			() =>
				(0, s.debounce)(() => {
					var e;
					let t = null === (e = J.current) || void 0 === e ? void 0 : e.getScrollerState();
					if (null == t) return;
					let n = t.scrollTop + t.offsetHeight;
					t.scrollHeight - n < 200 && b();
				}, 250),
			[b]
		),
		ee = j ? v : Z;
	return (0, i.jsx)('div', {
		className: C.container,
		ref: H,
		children: (0, i.jsx)(o.MasonryList, {
			ref: J,
			className: C.masonryList,
			sections: F,
			columns: k,
			itemGutter: 16,
			padding: ee,
			renderItem: X,
			renderSection: W,
			getSectionHeight: z,
			getItemKey: K,
			getItemHeight: q,
			chunkSize: 24,
			onScroll: $,
			renderAccessory: (e) =>
				j
					? (0, i.jsx)('div', {
							className: C.sidebar,
							style: { height: e },
							children: (0, i.jsxs)('div', {
								className: C.sidebarContent,
								children: [
									(0, i.jsx)('div', {
										className: C.sidebarLanguageSelect,
										children: (0, i.jsx)(S.Z, { loadId: t })
									}),
									(0, i.jsx)(g.Z, { loadId: t })
								]
							})
						})
					: null
		})
	});
}
