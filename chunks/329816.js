n(47120), n(653041);
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(802498),
	l = n(266067),
	u = n(873546),
	c = n(442837),
	d = n(704215),
	_ = n(335854),
	E = n(481060),
	f = n(570140),
	h = n(721037),
	p = n(490173),
	I = n(114250),
	m = n(315263),
	T = n(40851),
	g = n(607070),
	S = n(899663),
	A = n(793903),
	N = n(213609),
	v = n(613413),
	O = n(94795),
	R = n(327943),
	C = n(907459),
	y = n(559407),
	D = n(556766),
	L = n(514361),
	b = n(724145),
	M = n(260035),
	P = n(482215),
	U = n(947519),
	w = n(243778),
	x = n(314910),
	G = n(84615),
	k = n(429142),
	B = n(813744),
	F = n(311476),
	V = n(892254),
	H = n(210887),
	Z = n(978781),
	Y = n(819640),
	j = n(594174),
	W = n(451478),
	K = n(358085),
	z = n(74538),
	q = n(663993),
	Q = n(823453),
	X = n(628123),
	$ = n(436774),
	J = n(962745),
	ee = n(686546),
	et = n(151851),
	en = n(981631),
	er = n(921944),
	ei = n(138837);
n(167666),
	Promise.resolve()
		.then(n.bind(n, 62883))
		.then((e) => {
			K.isPlatformEmbedded
				? window.addEventListener('contextmenu', e.contextMenuCallbackNative, !1)
				: window.addEventListener('contextmenu', e.contextMenuCallbackWeb, !1);
		}),
	(0, _.E)({ getDefaultLinkInterceptor: m.default }),
	(0, q.Un)({
		createPromise: () => Promise.all([n.e('77298'), n.e('80451'), n.e('30634'), n.e('54343')]).then(n.bind(n, 849493)),
		webpackId: 849493
	}),
	(0, q.Un)({
		createPromise: () => Promise.all([n.e('77298'), n.e('80451'), n.e('30634'), n.e('81811')]).then(n.bind(n, 80753)),
		webpackId: 80753
	});
let ea = (0, q.Un)({
		createPromise: () => n.e('46369').then(n.bind(n, 177741)),
		webpackId: 177741
	}),
	es = i.memo(function (e) {
		let t = (0, c.e7)([W.Z], () => W.Z.isFocused());
		return (0, r.jsx)(et.Z, {
			...e,
			focused: t
		});
	});
t.Z = function (e) {
	let { children: t, skipsSettingDefaultPageTitle: n } = e,
		{ pathname: a } = (0, l.TH)(),
		_ = (0, K.getPlatform)(),
		m = u.tq || u.Em,
		W = (0, c.e7)([H.Z], () => (H.Z.darkSidebar ? en.BRd.DARK : void 0)),
		q = (0, c.e7)([g.Z], () => (g.Z.useForcedColors ? 'yes' : 'no')),
		[et, eo, el] = (0, c.Wu)([L.Z], () => [L.Z.isEditorOpen, L.Z.isCoachmark, L.Z.isPreview]),
		[eu, ec] = (0, c.Wu)([R.Z], () => [R.Z.isEditorOpen, R.Z.isUpsellPreview]),
		ed = (0, c.e7)([Y.Z], () => Y.Z.getLayers().includes(en.S9g.USER_SETTINGS)),
		e_ = (0, c.e7)([j.default], () => z.ZP.canUseClientThemes(j.default.getCurrentUser())),
		eE = et && !ed,
		ef = [];
	eE && eo && !e_ && ef.push(d.z.CLIENT_THEMES_COACHMARK);
	let [eh, ep] = (0, w.US)(ef, er.R.SIDEBAR, !0);
	ef.push(d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
	let eI = eh === d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
		em = eh === d.z.CLIENT_THEMES_COACHMARK;
	i.useEffect(() => {
		null ==
			(0, l.LX)(a, {
				path: 'invite',
				exact: !1,
				strict: !1
			}) &&
			eI &&
			!em &&
			((0, O.nJ)(),
			f.Z.dispatch({
				type: 'APP_ICON_TRACK_IMPRESSION',
				markAsDismissed: ep
			}));
	}, [eI, em, ep, a]);
	let eT = i.useRef(document.body),
		eg = (eE && !eo) || em,
		eS = eu && !ed && !em,
		eA = el || ec,
		{ enabled: eN } = F.Z.useExperiment(
			{ location: 'AppSkeleton' },
			{
				autoTrackExposure: eA && (eg || eS),
				disable: !eA
			}
		);
	return (0, r.jsx)(
		V.Z,
		{
			children: (0, r.jsx)(S.Z, {
				children: (0, r.jsxs)(E.RedesignIconContextProvider, {
					children: [
						(0, r.jsx)(Q.Z, { skipsSettingDefaultPageTitle: n }),
						(0, r.jsx)(J.Z, {
							children: (0, r.jsx)(X.Z, {
								children: (0, r.jsxs)(E.FocusRingScope, {
									containerRef: eT,
									children: [
										(0, r.jsx)(ee.Co, {}),
										(0, r.jsx)($.ZP, {}),
										(0, r.jsx)(o.OU, {}),
										null != _
											? (0, r.jsx)(es, {
													type: _,
													themeOverride: W
												})
											: null,
										(0, r.jsx)(T.Wu, {
											appContext: en.IlC.APP,
											renderWindow: window,
											children: (0, r.jsxs)(x.yP, {
												children: [
													(0, r.jsxs)('div', {
														className: s()(ei.appAsidePanelWrapper, m && ei.mobileAppAsidePanelWrapper, {
															[ei.allowsScrolling]: (() => {
																let e = (0, l.LX)(a, {
																	path: en.Z5c.APPLICATION_DIRECTORY,
																	exact: !1,
																	strict: !1
																});
																return ((!!u.tq || !!u.Em) && null != e) || !1;
															})()
														}),
														children: [
															(0, r.jsx)(P.K, {}),
															(0, r.jsx)('div', {
																className: ei.notAppAsidePanel,
																'data-app-not-dev-tools': !0,
																children: (0, r.jsx)(M.m, {
																	children: (0, r.jsx)(k.OR, {
																		children: (0, r.jsxs)(A.Z.Provider, {
																			value: N.Z,
																			children: [
																				(0, r.jsx)('div', {
																					className: s()(m ? ei.mobileApp : ei.app),
																					children: t
																				}),
																				(0, r.jsx)(y.Z, {}),
																				(0, r.jsx)(p.Z, {}),
																				(0, r.jsx)(E.Modals, {}),
																				(0, r.jsx)(I.Z, {}),
																				(0, r.jsx)(G.Ox, {}),
																				(0, r.jsx)(x.Un, {}),
																				(0, r.jsx)(k.ot, {}),
																				(0, r.jsx)(E.ToastContainer, {}),
																				(0, r.jsx)(v.Z, {}),
																				(0, r.jsx)(B.Z, {}),
																				(0, r.jsx)(ea, {})
																			]
																		})
																	})
																})
															}),
															(0, r.jsx)(D.Z, {}),
															(0, r.jsx)(h.Z, {}),
															eg && !eN && (0, r.jsx)(b.Z, { markAsDismissed: ep }),
															eS &&
																!eN &&
																(0, r.jsx)(C.Z, {
																	isCoachmark: eI,
																	markAsDismissed: ep
																}),
															(eg || eS) &&
																eN &&
																(0, r.jsx)(Z.Z, {
																	initialTab: eS ? Z._.APP_ICONS : Z._.CLIENT_THEMES,
																	markAsDismissed: ep
																}),
															(0, r.jsx)(U.Z, { mobile: m })
														]
													}),
													!1
												]
											})
										}),
										(0, r.jsx)(o.OU, {})
									]
								})
							})
						})
					]
				})
			})
		},
		q
	);
};
