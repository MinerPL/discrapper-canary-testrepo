t(47120), t(852437);
var i = t(735250),
	a = t(470079),
	l = t(481060),
	o = t(100527),
	r = t(367907),
	s = t(906732),
	c = t(541099),
	d = t(695676),
	u = t(173790),
	m = t(361917),
	p = t(684256),
	_ = t(314734),
	C = t(981631),
	f = t(79499);
let h = {
		width: _.Gy,
		height: _.lv
	},
	A = { height: _.lv };
function E(e) {
	let { children: n } = e,
		[t, l] = a.useState([{ type: d.gc.HOME }]),
		[o, r] = a.useState({}),
		s = t[t.length - 1],
		[c, u] = a.useState(!1),
		m = a.useCallback((e) => {
			l((n) => [...n, e]);
		}, []),
		p = a.useCallback(() => {
			let e = null;
			l((n) => (n.length <= 1 ? n : ((e = n[n.length - 1]), n.slice(0, -1)))),
				r((n) =>
					null == e
						? n
						: {
								...n,
								[e.type]: e
							}
				);
		}, []),
		_ = a.useCallback(
			(e) => {
				var n;
				return null !== (n = t.findLast((n) => n.type === e)) && void 0 !== n ? n : o[e];
			},
			[t, o]
		);
	return (0, i.jsx)(d.uX.Provider, {
		value: {
			history: t,
			discard: o,
			currentView: s,
			pushHistory: m,
			goBack: p,
			getMostRecentHistoryItemByType: _,
			isSlideReady: c,
			setSlideReady: u
		},
		children: n
	});
}
function N(e) {
	let { channel: n, entrypoint: t } = e,
		[o, r] = a.useState(''),
		{ setScroller: s, isCloseToBottom: c } = (function (e) {
			let [n, t] = a.useState(null),
				[i, l] = a.useState(!1),
				o = a.useRef(0);
			return (
				a.useEffect(() => {
					null == n || n.scrollTo(0, 0);
				}, [n, e]),
				a.useEffect(() => {
					if (null != n)
						return (
							n.scrollTo(0, o.current),
							n.addEventListener('scroll', e),
							() => {
								n.removeEventListener('scroll', e, !1);
							}
						);
					function e() {
						if (null != n) (o.current = n.scrollTop), l(n.scrollHeight - (n.scrollTop + n.clientHeight) < 0.5 * _.K7);
					}
				}, [n]),
				{
					setScroller: t,
					isCloseToBottom: i
				}
			);
		})(o),
		{ currentView: C, getMostRecentHistoryItemByType: h, setSlideReady: E } = (0, d.hH)();
	a.useEffect(() => {
		E(!1);
	}, [null == C ? void 0 : C.type, E]);
	let N = a.useCallback(() => {
		E(!0);
	}, [E]);
	if (null == C) return null;
	let v = h(d.gc.LIST),
		x = h(d.gc.APPLICATION);
	return (0, i.jsxs)(l.Slides, {
		activeSlide: C.type,
		width: _.Gy,
		onSlideReady: N,
		children: [
			(0, i.jsx)(l.Slide, {
				id: d.gc.HOME,
				children: (0, i.jsx)('div', {
					className: f.slideContent,
					style: A,
					children: (0, i.jsx)(m.Z, {
						isScrollCloseToBottom: c,
						setScroller: s,
						channel: n,
						entrypoint: t,
						searchQuery: o,
						setSearchQuery: r
					})
				})
			}),
			(0, i.jsx)(l.Slide, {
				id: d.gc.LIST,
				children: (0, i.jsx)('div', {
					className: f.slideContent,
					style: A,
					children:
						null != v &&
						(0, i.jsx)(p.Z, {
							channel: n,
							entrypoint: t,
							title: v.title,
							look: v.look,
							items: v.items,
							sectionName: v.sectionName
						})
				})
			}),
			(0, i.jsx)(l.Slide, {
				id: d.gc.APPLICATION,
				children: (0, i.jsx)('div', {
					className: f.slideContent,
					style: A,
					children:
						null != x &&
						(0, i.jsx)(u.Z, {
							channel: n,
							application: x.application,
							sectionName: x.sectionName,
							installOnDemand: x.installOnDemand
						})
				})
			})
		]
	});
}
n.Z = a.memo(
	a.forwardRef(function (e, n) {
		let { channel: t, entrypoint: l } = e,
			{ analyticsLocations: d } = (0, s.ZP)(o.Z.APP_LAUNCHER);
		return (
			a.useEffect(() => {
				(0, r.yw)(C.rMx.APPLICATION_COMMAND_TOP_OF_FUNNEL, {
					source: l,
					location: 'app_launcher'
				});
			}, [l]),
			a.useEffect(() => {
				let e = Date.now();
				return () => {
					(0, r.yw)(C.rMx.APP_LAUNCHER_CLOSED, {
						reason: c.Z.closeReason(),
						time_spent: Date.now() - e,
						source: l
					});
				};
			}, [l]),
			(0, i.jsx)('div', {
				className: f.drawerSizingWrapper,
				ref: n,
				style: h,
				children: (0, i.jsx)('div', {
					className: f.contentWrapper,
					children: (0, i.jsx)(s.Gt, {
						value: d,
						children: (0, i.jsx)(E, {
							children: (0, i.jsx)(N, {
								channel: t,
								entrypoint: l
							})
						})
					})
				})
			})
		);
	})
);
