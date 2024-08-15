t.d(n, {
	Z: function () {
		return j;
	}
}),
	t(47120);
var i = t(735250),
	a = t(470079),
	l = t(392711),
	o = t.n(l),
	r = t(209173),
	s = t(110924),
	c = t(367907),
	d = t(555573),
	u = t(895924),
	m = t(809547),
	p = t(583027),
	_ = t(585483),
	C = t(499254),
	f = t(424602),
	h = t(541099),
	A = t(827498),
	E = t(392370),
	N = t(98880),
	v = t(520315),
	x = t(532309),
	I = t(561160),
	g = t(41558),
	P = t(106771),
	L = t(79984),
	b = t(314734),
	R = t(981631),
	S = t(689938),
	T = t(429032);
let M = Array(6)
		.fill(0)
		.map((e, n) => n),
	y = [, , ,].fill(0).map((e, n) => n);
function j(e) {
	return e.enableGlobalSearch ? (0, i.jsx)(O, { ...e }) : (0, i.jsx)(Z, { ...e });
}
function O(e) {
	let { channel: n, query: t, entrypoint: l, isScrollCloseToBottom: s } = e,
		{ enabled: c } = f.nS.useExperiment({ location: 'App Launcher Search View' }, { autoTrackExposure: !1 }),
		d = l === A._b.TEXT,
		u = l === A._b.TEXT,
		{
			loading: p,
			isEmptyState: _,
			commandResults: C,
			hasCommandResults: h,
			applicationResults: N
		} = (0, E.pe)({
			channel: n,
			query: t,
			searchesActivities: !0,
			searchesCommands: d,
			searchesBots: u
		}),
		{
			fetchState: v,
			applicationResults: x,
			fetchNextPage: g
		} = (0, E.Q2)({
			query: t,
			channel: n,
			fetches: l !== A._b.VOICE || c,
			pageLimit: 5,
			entrypoint: l
		});
	a.useEffect(() => {
		s && v === m.M.FETCHED && g();
	}, [g, v, s]);
	let P = null == v || v === m.M.FETCHING,
		L = a.useMemo(() => {
			let e = N.map((e) => ({
				application: e,
				installOnDemand: !1
			}));
			if (l === A._b.VOICE) return e;
			let n = new Set(
				N.map((e) => {
					let { id: n } = e;
					return n;
				})
			);
			return [
				...e,
				...o().compact(
					x.map((e) =>
						e.type === r.s.CONNECTION || n.has(e.data.id)
							? null
							: {
									application: e.data,
									installOnDemand: !0
								}
					)
				)
			];
		}, [l, x, N]),
		b = L.length > 0,
		R = _ && !b && !P;
	return p
		? (0, i.jsx)(D, {})
		: R
			? (0, i.jsx)(I.A, {
					type: A.LG.SEARCH_EMPTY,
					searchQuery: t,
					textContent:
						l === A._b.TEXT
							? S.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY
							: S.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
				})
			: (0, i.jsxs)('div', {
					children: [
						h &&
							(0, i.jsx)(H, {
								channel: n,
								commandResults: C,
								query: t
							}),
						(b || P) &&
							(0, i.jsx)(k, {
								applicationResults: L,
								includePlaceholder: P,
								query: t,
								searchesBots: u
							})
					]
				});
}
function Z(e) {
	let { channel: n, query: t, entrypoint: l } = e,
		o = l === A._b.TEXT,
		r = l === A._b.TEXT,
		{
			loading: s,
			isEmptyState: c,
			commandResults: d,
			hasCommandResults: u,
			applicationResults: m,
			hasApplicationResults: p
		} = (0, E.pe)({
			channel: n,
			query: t,
			commandLimit: 10,
			searchesCommands: o,
			searchesBots: r,
			searchesActivities: !0
		}),
		_ = a.useMemo(
			() =>
				m.map((e) => ({
					application: e,
					installOnDemand: !1
				})),
			[m]
		);
	return s
		? (0, i.jsx)(D, {})
		: c
			? (0, i.jsx)(I.A, {
					type: A.LG.SEARCH_EMPTY,
					searchQuery: t,
					textContent:
						l === A._b.TEXT
							? S.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_BODY
							: S.Z.Messages.APP_LAUNCHER_SEARCH_EMPTY_STATE_ACTIVITIES_BODY
				})
			: (0, i.jsxs)('div', {
					children: [
						u &&
							(0, i.jsx)(H, {
								channel: n,
								commandResults: d,
								query: t
							}),
						p &&
							(0, i.jsx)(k, {
								applicationResults: _,
								query: t,
								searchesBots: r
							})
					]
				});
}
function H(e) {
	var n, t;
	let { channel: l, commandResults: o, query: r } = e,
		m = o.length > 4,
		f = a.useMemo(() => (m ? o.slice(0, 4) : o), [o, m]),
		[E, N] = a.useState(!1),
		x = null !== (n = (0, s.Z)(E)) && void 0 !== n ? n : E,
		I = a.useCallback(() => N((e) => !e), []),
		L = (null !== (t = (0, s.Z)(r)) && void 0 !== t ? t : r)[0] !== r[0],
		M = E && !L;
	a.useLayoutEffect(() => N(!1), [L]);
	let {
		ref: y,
		isTransitioning: j,
		onTransitionEnd: O
	} = (0, v.Z)({
		key: r,
		isExpanded: M,
		durationMs: 200,
		maxAnimationHeight: b.K7
	});
	a.useEffect(() => {
		!x &&
			E &&
			(0, c.yw)(R.rMx.APP_LAUNCHER_SECTION_VIEW_MORE, {
				section_name: A.L3.SEARCH,
				source: h.Z.entrypoint(),
				num: o.length
			});
	}, [o.length, x, E]);
	let Z = M || j,
		H = M ? g.Z.buttonTypes.VIEW_LESS : g.Z.buttonTypes.VIEW_MORE,
		U = Z ? o : f;
	return (0, i.jsxs)('div', {
		children: [
			(0, i.jsx)(g.Z, {
				title: S.Z.Messages.COMMANDS,
				buttonType: H,
				onClickViewButton: m ? I : void 0
			}),
			(0, i.jsx)('div', {
				className: T.sectionContentContainer,
				ref: y,
				onTransitionEnd: O,
				children: U.map((e, n) => {
					let { command: t, application: a, section: o } = e;
					return (0, i.jsx)(
						P.Z,
						{
							command: t,
							application: a,
							query: r,
							searchResultsPosition: n,
							onClick: () => {
								let e = h.Z.entrypoint();
								C.y(A.ti.DISMISSED),
									(0, p.Mo)({
										command: t,
										location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
										sectionName: A.L3.SEARCH
									}),
									d.Po({
										channelId: l.id,
										command: t,
										section: o,
										location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
										triggerSection: void 0,
										queryLength: r.length,
										sectionName: A.L3.SEARCH,
										query: r,
										searchResultsPosition: n,
										source: e
									}),
									_.S.dispatch(R.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: l.id });
							}
						},
						t.id
					);
				})
			})
		]
	});
}
function U(e) {
	let { trackSearchResultsItemImpressionRef: n } = (0, x.Z)({
		applicationId: e.application.id,
		query: e.query,
		searchResultsPosition: e.resultsPosition
	});
	return (0, i.jsx)('div', {
		className: T.searchOpenAppDetailAppCard,
		ref: (e) => (n.current = e),
		children: (0, i.jsx)(N.kA, {
			...e,
			tracksImpression: !1,
			enableVideoBanner: !0
		})
	});
}
function k(e) {
	let { applicationResults: n, includePlaceholder: t, query: a, searchesBots: l } = e;
	return l
		? (0, i.jsxs)('div', {
				children: [
					(0, i.jsx)(g.Z, { title: S.Z.Messages.APPS }),
					(0, i.jsxs)('div', {
						className: T.sectionContentContainer,
						children: [
							n.map((e, n) => {
								let { application: t, installOnDemand: l } = e;
								return (0, i.jsx)(
									B,
									{
										application: t,
										location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
										sectionName: A.L3.SEARCH,
										resultsPosition: n,
										installOnDemand: l,
										query: a
									},
									t.id
								);
							}),
							t && y.map((e) => (0, i.jsx)(L.Z, {}, e))
						]
					})
				]
			})
		: (0, i.jsxs)('div', {
				children: [
					(0, i.jsx)(g.Z, { title: S.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE }),
					(0, i.jsxs)('div', {
						className: T.sectionActivitiesContentContainer,
						children: [
							n.map((e, n) => {
								let { application: t, installOnDemand: l } = e;
								return (0, i.jsx)(
									U,
									{
										application: t,
										look: N.U4.LARGE_BANNER,
										location: u.Vh.APP_LAUNCHER_HOME_SEARCH,
										sectionName: A.L3.SEARCH,
										resultsPosition: n,
										installOnDemand: l,
										query: a
									},
									t.id
								);
							}),
							t && y.map((e) => (0, i.jsx)(L.Z, {}, e))
						]
					})
				]
			});
}
function B(e) {
	let n = (0, N.cG)(e);
	return (0, i.jsx)(P.Z, {
		application: e.application,
		onClick: n,
		query: e.query,
		searchResultsPosition: e.resultsPosition
	});
}
function D() {
	return (0, i.jsxs)('div', {
		children: [
			(0, i.jsx)(g.Z, { title: S.Z.Messages.COMMANDS }),
			(0, i.jsx)('div', {
				className: T.sectionContentContainer,
				children: M.map((e) => (0, i.jsx)(L.Z, {}, e))
			}),
			(0, i.jsx)(g.Z, { title: S.Z.Messages.APPS }),
			(0, i.jsx)('div', {
				className: T.sectionContentContainer,
				children: y.map((e) => (0, i.jsx)(L.Z, {}, e))
			})
		]
	});
}
