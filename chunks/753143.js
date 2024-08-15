n.d(t, {
	Z: function () {
		return l;
	},
	r: function () {
		return u;
	}
}),
	n(411104),
	n(47120);
var r = n(470079),
	i = n(134158),
	a = n(924428),
	s = n(151973);
let o = Object.freeze({
	spacerTop: 0,
	totalHeight: 0,
	items: [],
	isSidebarVisible: !1
});
function l(e) {
	let {
			sections: t,
			sectionHeight: n,
			rowHeight: l,
			footerHeight: u,
			sidebarHeight: c,
			listHeaderHeight: d,
			chunkSize: _ = 256,
			paddingTop: E = 0,
			paddingBottom: f = 0,
			getScrollerState: h,
			getAnchorId: p
		} = e,
		I = (0, a.Z)(),
		m = (0, r.useRef)(o),
		[T] = (0, r.useState)(() => new i.Z()),
		{
			dirty: g,
			chunkStart: S,
			chunkEnd: A,
			forceUpdateOnChunkChange: N
		} = (0, s.Z)({
			chunkSize: _,
			getScrollerState: h,
			forceUpdate: I
		}),
		{ items: v } = m.current,
		O = null,
		{ scrollTop: R } = h();
	for (let e of v) {
		if (0 === R) break;
		if ('footer' === e.type || 'header' === e.type || null == e.anchorId) continue;
		let t = 'row' === e.type ? e.row : void 0;
		if (e.offsetTop >= R) {
			O = {
				id: e.anchorId,
				section: e.section,
				row: t,
				scrollOffset: e.offsetTop - R
			};
			break;
		}
	}
	let C = (0, r.useMemo)(() => {
			let e = Math.max(0, S * _);
			return null != c && e < c;
		}, [_, S, c]),
		y = (0, r.useMemo)(
			() =>
				g > 0
					? m.current
					: (T.mergeProps({
							sectionHeight: n,
							rowHeight: l,
							footerHeight: u,
							listHeaderHeight: d,
							paddingBottom: f,
							paddingTop: E,
							sections: t,
							getAnchorId: p
						}),
						T.compute(Math.max(0, S * _), A * _)),
			[g, S, A, n, l, u, d, f, E, t, T, _, p]
		);
	return (
		(0, r.useLayoutEffect)(() => void (m.current = y)),
		{
			...y,
			listComputer: T,
			forceUpdateOnChunkChange: N,
			anchor: O,
			isSidebarVisible: C
		}
	);
}
function u(e) {
	let { scrollerRef: t, anchor: n, getScrollerState: i, listComputer: a, getAnchorId: s, totalHeight: o } = e;
	(0, r.useLayoutEffect)(() => {
		let { current: e } = t,
			{ scrollTop: r } = i();
		if (null == n || null == n.row || null == e || null == s || 0 === r) return;
		let o = (t) => {
			if (t < 0 || t >= a.sections[n.section] || s(n.section, n.row) !== n.id) return !1;
			let [i] = a.computeScrollPosition(n.section, t),
				o = i - n.scrollOffset;
			return r !== o && (e.scrollTop = o), !0;
		};
		if (!o(n.row)) !o(n.row - 1) && o(n.row + 1);
	}, [o]);
}
