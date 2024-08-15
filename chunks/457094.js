n.r(t), n(47120);
var i = n(735250),
	a = n(470079),
	s = n(593473),
	r = n(266067),
	l = n(442837),
	o = n(481060),
	c = n(893776),
	d = n(943094),
	u = n(749210),
	_ = n(287734),
	E = n(401430),
	h = n(230711),
	m = n(607070),
	I = n(627845),
	g = n(185666),
	p = n(503737),
	T = n(513202),
	S = n(318891),
	f = n(687751),
	C = n(912471),
	N = n(100527),
	A = n(838134),
	v = n(77987),
	Z = n(679891),
	L = n(491575),
	O = n(954709),
	R = n(314533),
	x = n(935347),
	b = n(560067),
	P = n(823169),
	M = n(620360),
	D = n(96051),
	y = n(750995),
	j = n(696287),
	U = n(408026),
	G = n(763916),
	k = n(306721),
	w = n(531551),
	B = n(38618),
	H = n(972830),
	V = n(981283),
	F = n(584233),
	Y = n(15274),
	W = n(434404),
	z = n(543842),
	K = n(879064),
	q = n(315964),
	Q = n(495784),
	X = n(975533),
	J = n(377400),
	$ = n(285865),
	ee = n(659971),
	et = n(929809),
	en = n(122333),
	ei = n(960275),
	ea = n(818765),
	es = n(678492),
	er = n(269089),
	el = n(380570),
	eo = n(837689),
	ec = n(367207),
	ed = n(489977),
	eu = n(329557),
	e_ = n(304445),
	eE = n(893607),
	eh = n(703656),
	em = n(298969),
	eI = n(719256),
	eg = n(6025),
	ep = n(897473),
	eT = n(377368),
	eS = n(262702),
	ef = n(639033),
	eC = n(479313),
	eN = n(911560),
	eA = n(703016),
	ev = n(171368),
	eZ = n(429974),
	eL = n(332754),
	eO = n(507468),
	eR = n(357269),
	ex = n(282506),
	eb = n(444961),
	eP = n(314897),
	eM = n(433355),
	eD = n(592125),
	ey = n(896797),
	ej = n(430824),
	eU = n(819640),
	eG = n(283595),
	ek = n(944486),
	ew = n(914010),
	eB = n(695103),
	eH = n(241890),
	eV = n(897607),
	eF = n(417363),
	eY = n(900974),
	eW = n(358085),
	ez = n(998502),
	eK = n(346329),
	eq = n(981631),
	eQ = n(176505),
	eX = n(701476);
function eJ(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
n(117240),
	n(801077),
	n(967368),
	n(272053),
	n(974180),
	n(574254),
	n(551428),
	n(55563),
	n(455173),
	n(882029),
	n(959457),
	n(653255),
	n(663389),
	n(25990),
	n(778825),
	n(999382),
	n(388610),
	n(533947),
	n(277053),
	n(371398),
	n(141233),
	n(471073),
	n(628566);
let e$ = !1;
(0, C.DL)(),
	l.ZP.initialize(),
	em.Z.loadServer(),
	eW.isPlatformEmbedded &&
		(ez.ZP.on('USER_SETTINGS_OPEN', () => {
			!eU.Z.getLayers().includes(eq.S9g.USER_SETTINGS) && h.Z.open(eq.oAB.ACCOUNT);
		}),
		ez.ZP.on('LAUNCH_APPLICATION', (e, t) => {
			let n = eG.Z.getActiveLibraryApplication(t);
			eK.playApplication(t, n, {
				analyticsParams: {
					location: {
						page: eq.ZY5.DIRECT,
						object: eq.qAy.WEB_URL
					}
				}
			});
		}));
let e0 = l.ZP.connectStores([B.Z, ey.Z, eP.default], () => ({
		isConnected: B.Z.isConnected(),
		defaultRoute: ey.Z.defaultRoute,
		defaultRouteFallback: ey.Z.fallbackRoute,
		token: eP.default.getToken()
	}))(
		class extends a.Component {
			componentDidMount() {
				let { match: e } = this.props;
				null != e && null != e.params.inviteCode && (0, F.x)({ code: e.params.inviteCode });
			}
			render() {
				let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: a } = this.props;
				if (null == n) return (0, i.jsx)(r.l_, { to: eq.Z5c.DEFAULT_LOGGED_OUT });
				if (e) {
					let e = e3(t);
					return null == e ||
						((e.params.guildId === eq.ME || null != ej.Z.getGuild(e.params.guildId)) &&
							null != eD.Z.getChannel(e.params.channelId))
						? (0, i.jsx)(r.l_, { to: t })
						: (0, i.jsx)(r.l_, { to: a });
				}
				return null;
			}
		}
	),
	e1 = (0, v.e)(L.Z, null, { passProps: !1 }),
	e4 = (0, v.e)(A.default, null, { passProps: !1 }),
	e7 = [eq.Z5c.GUILD_BOOSTING_MARKETING(':guildId'), ...Array.from(eQ.Vg).map((e) => eq.Z5c.CHANNEL(':guildId', e))];
function e5(e) {
	let { guildId: t, channelId: n = null, messageId: i = null, threadId: a = null } = e.params;
	return {
		guildId: null != t ? t : eq.ME,
		channelId: n,
		messageId: i,
		threadId: a
	};
}
let e2 = [
	{
		path: [eq.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(':inviteCode')],
		render(e) {
			let { match: t } = e;
			return (0, i.jsx)(e0, { match: t });
		},
		isSessionRequired: !0
	},
	{
		path: [eq.Z5c.APP],
		render: () => (0, i.jsx)(e0, {}),
		isSessionRequired: !0
	},
	{
		path: [eq.Z5c.USERS(':id')],
		render: function (e) {
			let { match: t, location: n } = e,
				{ friend_token: a } = (0, s.parse)(n.search),
				{ id: l } = t.params;
			return (
				(0, H.h)(() =>
					(0, ev.openUserProfileModal)({
						userId: l,
						guildId: eq.ME,
						friendToken: a,
						sourceAnalyticsLocations: [N.Z.URI_SCHEME],
						analyticsLocation: { section: eq.jXE.DIRECT_ROUTE_ACCESS }
					})
				),
				(0, i.jsx)(r.l_, { to: ey.Z.defaultRoute })
			);
		}
	},
	{
		path: [eq.Z5c.APPLICATION_LIBRARY_ACTION(':gameId', ':action')],
		render: function (e) {
			let { match: t } = e,
				{ gameId: n, action: a } = t.params;
			return (
				eF.Z.whenInitialized(() => {
					eG.Z.whenInitialized(() => {
						switch (a) {
							case 'launch': {
								let e = eG.Z.getActiveLibraryApplication(n);
								if (null == e) return;
								eK.playApplication(e.id, e, {
									analyticsParams: {
										location: {
											page: eq.ZY5.DIRECT,
											object: eq.qAy.WEB_URL
										}
									}
								});
								break;
							}
							case 'test-mode':
								eB.Z.whenInitialized(() => E.Wt(n));
								break;
							case 'uninstall': {
								let e = eG.Z.getActiveLibraryApplication(n);
								if (null == e) return;
								(0, d.W)(e.id, e.branchId, eq.Sbl.URI_SCHEME);
							}
						}
					});
				}),
				(0, i.jsx)(r.l_, { to: eq.Z5c.APPLICATION_LIBRARY })
			);
		}
	},
	{
		path: [eq.Z5c.GUILD_CREATE],
		render: function () {
			return (
				(0, H.h)(() => b.Z.openCreateGuildModal({ location: 'External link' })),
				(0, i.jsx)(r.l_, { to: ey.Z.defaultRoute })
			);
		}
	},
	{
		path: [eq.Z5c.PICK_GUILD_SETTINGS(':section?', ':subsection?')],
		render: function (e) {
			let { match: t } = e,
				{ section: n, subsection: a } = t.params,
				l = (0, s.parse)(location.search).feature;
			return (
				(0, H.h)(() =>
					K.v({
						section: (0, z.Z)(eq.pNK, n),
						subsection: (0, z.Z)(eq.KsC, a),
						feature: l
					})
				),
				(0, i.jsx)(r.l_, { to: ey.Z.defaultRoute })
			);
		},
		isSessionRequired: !0
	},
	{
		path: [eq.Z5c.SETTINGS(':section', ':subsection?')],
		render: function (e) {
			let { location: t } = e,
				n = (0, eR.default)(t.pathname);
			return (
				null != n &&
					(0, H.h)(() =>
						h.Z.open(n.section, n.subsection, {
							openWithoutBackstack: !1,
							impressionSource: n.source
						})
					),
				(0, i.jsx)(r.l_, { to: ey.Z.defaultRoute })
			);
		},
		isSessionRequired: !0
	},
	{
		path: [eq.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(':guildId')],
		render: function (e) {
			let { match: t } = e,
				{ guildId: a } = t.params;
			return (
				(0, H.h)(() => {
					(0, o.openModalLazy)(async () => {
						let { default: e } = await Promise.all([n.e('5863'), n.e('48324')]).then(n.bind(n, 751212));
						return (t) =>
							(0, i.jsx)(e, {
								...t,
								guildId: a
							});
					});
				}),
				(0, i.jsx)(r.l_, { to: eq.Z5c.CHANNEL(a) })
			);
		},
		isSessionRequired: !0
	},
	{
		path: [eq.Z5c.APPLICATION_LIBRARY_INVENTORY],
		render: function () {
			return (0, H.h)(() => h.Z.open(eq.oAB.INVENTORY)), (0, i.jsx)(r.l_, { to: ey.Z.defaultRoute });
		},
		isSessionRequired: !0
	},
	{
		path: [eq.Z5c.WELCOME(':guildId?', ':channelId?')],
		render: function (e) {
			let { match: t } = e,
				{ guildId: n, channelId: a } = t.params;
			(0, et.c)(eX.M5.MARKETING_UNCLAIMED);
			let s = eq.Z5c.CHANNEL(n, a);
			return (0, i.jsx)(r.l_, { to: s });
		},
		isSessionRequired: !0
	},
	{
		path: [eq.Z5c.GUILD_EVENT_DETAILS(':guildId?', ':guildEventId')],
		render: function (e) {
			let { match: t } = e,
				{ guildId: n, guildEventId: a } = t.params;
			return (
				(0, H.h)(() => {
					(0, Y.bO)({ eventId: a });
				}),
				(0, i.jsx)(r.l_, { to: eq.Z5c.CHANNEL(n) })
			);
		},
		isSessionRequired: !0
	},
	{
		path: [eq.Z5c.GUILD_SETTINGS(':guildId', ':section?', ':subsection?')],
		render: function (e) {
			let { match: t } = e,
				{ guildId: n, section: a, subsection: s } = t.params;
			return (
				(0, H.h)(() => {
					W.Z.open(n, (0, z.Z)(eq.pNK, a), void 0, (0, z.Z)(eq.KsC, s));
				}),
				(0, i.jsx)(r.l_, { to: eq.Z5c.CHANNEL(n) })
			);
		},
		isSessionRequired: !0,
		isChatRoute: !0
	},
	{
		path: [
			eq.Z5c.CHANNEL_THREAD_VIEW(':guildId', ':channelId', ':threadId', ':messageId?'),
			eq.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?'),
			eq.Z5c.ACTIVITY,
			eq.Z5c.ACTIVITIES,
			eq.Z5c.ACTIVITIES_HAPPENING_NOW,
			eq.Z5c.ACTIVITY_DETAILS(':applicationId'),
			eq.Z5c.APPLICATION_LIBRARY,
			eq.Z5c.APPLICATION_STORE,
			eq.Z5c.MESSAGE_REQUESTS,
			eq.Z5c.COLLECTIBLES_SHOP,
			eq.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
			eq.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
			eq.Z5c.GUILD_DISCOVERY,
			eq.Z5c.QUEST_HOME,
			eq.Z5c.GLOBAL_DISCOVERY,
			eq.Z5c.GUILD_MEMBER_VERIFICATION(':guildId', ':inviteCode?'),
			eq.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(':guildId', ':inviteCode?'),
			eq.Z5c.GUILD_BOOSTING_MARKETING(':guildId'),
			eq.Z5c.FEATURE(':feature'),
			eq.Z5c.FAMILY_CENTER
		],
		render: e1,
		isSessionRequired: !0,
		isChatRoute: !0
	},
	{
		path: [eq.Z5c.APPLICATION_DIRECTORY],
		render: e4,
		isSessionRequired: !0
	}
];
function e3(e) {
	for (let { path: t, isChatRoute: n } of e2) {
		if (!n) continue;
		let i = (0, r.LX)(e, { path: t });
		if (null != i) return i;
	}
	return null;
}
function e9(e) {
	let { channelId: t, guildId: n, pathname: i } = e;
	if (!B.Z.isConnected()) return;
	let { location: a } = (0, eh.s1)();
	if (a.pathname === i) null == eD.Z.getChannel(t) ? (0, eh.dL)(eq.Z5c.CHANNEL(n)) : (0, eh.dL)(i);
}
class e6 extends a.PureComponent {
	componentDidMount() {
		ez.ZP.setZoomFactor(m.Z.zoom),
			em.Z.init(),
			Z.Z.initialize(),
			el.Z.initialize(),
			U.Z.initialize(),
			eb.Z.initialize(),
			G.Z.initialize(),
			ec.Z.initialize(),
			X.Z.initialize(),
			I.Z.init(),
			w.Z.init(),
			k.Z.init(),
			en.Z.initialize(),
			f.Z.initialize(),
			y.Z.initialize(),
			ed.Z.initialize(),
			S.ZP.initialize(),
			ex.Z.initialize(),
			er.Z.initialize(),
			T.Z.initialize(),
			V.Z.init(),
			q.Z.init(),
			eV.Z.init(),
			eY.Z.init(),
			p.Z.initialize(),
			eA.Z.init(),
			eH.Z.init(),
			eL.Z.init(),
			eS.Z.initialize(),
			ef.Z.initialize(),
			eZ.Z.initialize(),
			eO.Z.init(),
			D.Z.initialize(),
			g.Z.initialize(),
			eI.Z.initialize(),
			eT.Z.initialize(),
			ea.Z.initialize(),
			ei.Z.initialize(),
			es.Z.initialize(),
			R.Z.initialize(),
			Q.Z.init({
				hasModalOpen: o.hasAnyModalOpen,
				openModal: () =>
					(0, o.openModalLazy)(async () => {
						let { default: e } = await Promise.resolve().then(n.bind(n, 650233));
						return (t) => (0, i.jsx)(e, { ...t });
					})
			}),
			M.Z.init(),
			J.Z.initialize(),
			eu.Z.initialize(),
			eo.Z.initialize(),
			P.Z.initialize(),
			O.Z.initialize(),
			(this.rewriterUnlisten = e_.Z.addRouteRewriter(this.ensureChannelMatchesGuild)),
			(this.historyUnlisten = e_.Z.addRouteChangeListener(this.handleHistoryChange));
	}
	componentWillUnmount() {
		eb.Z.terminate(),
			ec.Z.terminate(),
			el.Z.terminate(),
			Z.Z.terminate(),
			S.ZP.terminate(),
			ex.Z.terminate(),
			T.Z.terminate(),
			ed.Z.terminate(),
			er.Z.terminate(),
			eZ.Z.terminate(),
			p.Z.terminate(),
			D.Z.terminate(),
			J.Z.terminate(),
			g.Z.terminate(),
			eu.Z.terminate(),
			eI.Z.terminate(),
			eT.Z.terminate(),
			ea.Z.terminate(),
			ei.Z.terminate(),
			es.Z.terminate(),
			R.Z.terminate(),
			eo.Z.terminate(),
			P.Z.terminate(),
			j.Z.terminate(),
			this.historyUnlisten(),
			this.rewriterUnlisten();
	}
	handleHistoryChange(e) {
		let { pathname: t, search: n } = e;
		!(function (e) {
			if (B.Z.isConnected() || B.Z.isTryingToConnect()) return;
			let t = eP.default.getToken();
			if (null != t)
				null !=
					(function (e) {
						for (let { path: t, isSessionRequired: n } of e2) {
							if (!n) continue;
							let i = (0, r.LX)(e, { path: t });
							if (null != i) return i;
						}
						return null;
					})(e) && c.Z.startSession(t);
		})(t),
			!(function (e, t) {
				let n = e3(e);
				if (null == n) return;
				let { guildId: i, channelId: a, messageId: l, threadId: o } = e5(n),
					c = (0, eE.S)(i),
					d = (0, eE.c)(a),
					E = (0, eE.c)(o),
					h = ew.Z.getGuildId(),
					m = h !== i;
				if ((c && m && u.Z.selectGuild(i), c && d)) {
					let n = ek.Z.getChannelId(h),
						r = n !== a;
					if (!e$ || m || r || null != l) {
						(e$ = !0),
							_.default.selectChannel({
								guildId: i,
								channelId: a,
								messageId: l
							});
						let { summaryId: e } = (0, s.parse)(t);
						null != e && eC.ZP.setSelectedSummary(a, e);
					}
					if (null != o && E) {
						let e = eM.ZP.getCurrentSidebarChannelId(n) !== o,
							t = null != eM.ZP.getGuildSidebarState(i);
						if (null != a && null != o && e) {
							if (t) (0, eh.dL)(eq.Z5c.CHANNEL(i, o, l));
							else {
								let e = { type: ep.Ff.THREAD };
								null != l && (e.initialMessageId = l),
									eg.Z.openThreadAsSidebar({
										guildId: i,
										baseChannelId: a,
										channelId: o,
										details: e
									});
							}
						}
					} else null != a && !r && eg.Z.closeChannelSidebar(a);
					let c = ee.Z.getIsOpen();
					if (a === eQ.oC.ROLE_SUBSCRIPTIONS) $.Z.closeSidebar();
					else if (m && c) {
						let t = null == h && i === eq.ME,
							n = e === eq.Z5c.GUILD_DISCOVERY;
						t || n ? $.Z.closeSidebar() : $.Z.openSidebar();
					} else ((r && c) || (!m && !r)) && $.Z.closeSidebar();
				} else {
					var I;
					if (
						((I = e),
						!e7.some((e) => {
							var t;
							return (null === (t = (0, r.LX)(I, e)) || void 0 === t ? void 0 : t.isExact) === !0;
						}))
					)
						(0, eh.dL)(ey.Z.fallbackRoute);
				}
			})(t, n);
	}
	ensureChannelMatchesGuild(e) {
		if (!B.Z.isConnected()) return null;
		let { pathname: t } = e,
			n = e3(t);
		if (null == n) return null;
		let { guildId: i, channelId: a, threadId: s } = e5(n),
			r = (0, eE.S)(i) && i !== eq.ME && i !== eq.I_8;
		if (null != a && (0, eE.c)(a) && !(0, eQ.AB)(a) && r) {
			let n = eD.Z.getChannel(a);
			if (null == n)
				eN.Z.loadThread(a).then(() =>
					e9({
						channelId: a,
						guildId: i,
						pathname: t
					})
				);
			else if (n.guild_id !== i)
				return {
					path: eq.Z5c.CHANNEL(i),
					state: e.state
				};
			if (null != s) {
				if (!((0, eE.c)(s) && !(0, eQ.AB)(a))) return null;
				let n = eD.Z.getChannel(s);
				if (null == n)
					eN.Z.loadThread(s).then(() =>
						e9({
							channelId: s,
							guildId: i,
							pathname: t
						})
					);
				else if ((null == n ? void 0 : n.parent_id) !== a)
					return (
						eg.Z.closeChannelSidebar(a),
						{
							path: eq.Z5c.CHANNEL(i, a),
							state: e.state
						}
					);
			}
		}
		return null;
	}
	render() {
		return (0, i.jsxs)(a.Fragment, {
			children: [
				(0, i.jsxs)(r.rs, {
					children: [
						(0, i.jsx)(r.l_, {
							exact: !0,
							from: '/channels',
							to: '/'
						}),
						e2.map((e) => {
							let { path: t, render: n } = e;
							return (0, i.jsx)(
								r.AW,
								{
									path: t,
									render: n
								},
								t[0]
							);
						}),
						(0, i.jsx)(r.l_, { to: '/' })
					]
				}),
				(0, i.jsx)(x.Z, {})
			]
		});
	}
	constructor(...e) {
		super(...e), eJ(this, 'historyUnlisten', () => {}), eJ(this, 'rewriterUnlisten', () => {});
	}
}
t.default = e6;
