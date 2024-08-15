n.d(t, {
	Z: function () {
		return eU;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(266067),
	o = n(990547),
	c = n(608787),
	d = n(873546),
	u = n(442837),
	_ = n(481060),
	E = n(711237),
	h = n(532835),
	m = n(290297),
	I = n(918854),
	g = n(279240),
	p = n(765717),
	T = n(358221),
	S = n(823748),
	f = n(626421),
	C = n(118379),
	N = n(652515),
	A = n(857428),
	v = n(194729),
	Z = n(668940),
	L = n(831565),
	O = n(724383),
	R = n(705334),
	x = n(372900),
	b = n(6039),
	P = n(637853),
	M = n(326145),
	D = n(269675),
	y = n(242601),
	j = n(416568),
	U = n(613609),
	G = n(160404),
	k = n(225675),
	w = n(745052),
	B = n(285865),
	H = n(659971),
	V = n(179742),
	F = n(270759),
	Y = n(918701),
	W = n(905423),
	z = n(304445),
	K = n(210887),
	q = n(592125),
	Q = n(271383),
	X = n(430824),
	J = n(944486),
	$ = n(933429),
	ee = n(823379),
	et = n(709054),
	en = n(792125),
	ei = n(374005),
	ea = n(409292),
	es = n(316173),
	er = n(256638),
	el = n(663701),
	eo = n(425369),
	ec = n(715702),
	ed = n(981631),
	eu = n(176505),
	e_ = n(290511),
	eE = n(264044);
let eh = () =>
		(0, i.jsx)('div', {
			className: eE.loader,
			children: (0, i.jsx)(_.Spinner, {})
		}),
	em = (0, c.Un)({
		createPromise: () => n.e('68614').then(n.bind(n, 650788)),
		webpackId: 650788,
		name: 'GuildShopPage',
		renderLoader: eh
	}),
	eI = (0, c.Un)({
		createPromise: () => n.e('44798').then(n.bind(n, 998420)),
		webpackId: 998420,
		name: 'GuildMemberApplicationReview',
		renderLoader: eh
	}),
	eg = (0, c.Un)({
		createPromise: () => n.e('60493').then(n.bind(n, 231588)),
		webpackId: 231588,
		name: 'GuildHomePage',
		renderLoader: eh
	}),
	ep = (0, c.Un)({
		createPromise: () => Promise.all([n.e('85552'), n.e('44400')]).then(n.bind(n, 545918)),
		webpackId: 545918,
		name: 'MemberSafetyPage',
		renderLoader: eh
	}),
	eT = (0, c.Un)({
		createPromise: () =>
			Promise.all([n.e('96427'), n.e('44156'), n.e('58227'), n.e('38359'), n.e('89818')]).then(n.bind(n, 603072)),
		webpackId: 603072,
		name: 'ChannelsAndRolesPage',
		renderLoader: eh
	}),
	eS = (0, c.Un)({
		createPromise: () =>
			Promise.all([n.e('96427'), n.e('44156'), n.e('19878'), n.e('38359'), n.e('10682')]).then(n.bind(n, 599263)),
		webpackId: 599263,
		name: 'GuildOnboardingPage',
		renderLoader: eh
	}),
	ef = (e) => {
		let { match: t } = e,
			n = (0, u.e7)([q.Z, J.Z], () => {
				let e = J.Z.getChannelId();
				return q.Z.getChannel(e);
			}),
			{ guildId: a, channelId: s, messageId: r } = t.params,
			l = (0, u.e7)([X.Z], () => X.Z.getGuild(a)),
			o = (0, u.e7)([Q.ZP], () => (null == a ? null : Q.ZP.getSelfMember(a))),
			c = (0, u.e7)([G.Z], () => {
				if (null == a) return;
				let e = G.Z.getData(a);
				if ((null == e ? void 0 : e.type) === k.z.SERVER_SHOP)
					switch (e.initialTab) {
						case 'role_subscriptions':
							return A.y.GUILD_ROLE_SUBSCRIPTIONS;
						case 'guild_products':
							return A.y.GUILD_PRODUCTS;
						default:
							return;
					}
			}),
			d = (0, N.C4)(a, 'channel_renderer');
		if (null != a && null != s && (0, eu.AB)(s))
			switch (s) {
				case eu.oC.ROLE_SUBSCRIPTIONS:
					return d
						? (0, i.jsx)(em, {
								guildId: a,
								initialTab: A.y.GUILD_ROLE_SUBSCRIPTIONS
							})
						: (0, i.jsx)(D.Z, { guildId: a });
				case eu.oC.GUILD_SHOP:
					return (0, i.jsx)(em, {
						guildId: a,
						productId: r,
						initialTab: c
					});
				case eu.oC.MEMBER_APPLICATIONS:
					return (0, i.jsx)(eI, { guildId: a });
				case eu.oC.GUILD_HOME:
					return (0, i.jsx)(eg, { guildId: a });
				case eu.oC.CHANNEL_BROWSER:
					return (0, i.jsx)(eT, {
						guildId: a,
						selectedSection: e_.l7.BROWSE
					});
				case eu.oC.GUILD_ONBOARDING:
					return (0, i.jsx)(eS, { guildId: a });
				case eu.oC.CUSTOMIZE_COMMUNITY:
					return (0, i.jsx)(eT, {
						guildId: a,
						selectedSection: e_.l7.CUSTOMIZE
					});
				case eu.oC.MEMBER_SAFETY:
					return (0, i.jsx)(ep, { guildId: a });
				default:
					(0, ee.vE)(s);
			}
		if ((0, P.p3)(l, o))
			return (0, i.jsx)(M.Z, {
				guildId: a,
				channelId: s
			});
		if ((null == n ? void 0 : n.type) === ed.d4z.GUILD_STORE) {
			let e = et.default.cast(t.params.messageId);
			return (0, i.jsx)(
				ea.Z,
				{
					channel: n,
					inputSkuId: e
				},
				n.id
			);
		}
		return (0, i.jsx)(S.Z, {});
	},
	eC = a.memo(function () {
		let { guildId: e, channelId: t } = (0, W.Z)(),
			n = (0, u.e7)([J.Z], () => (null != t ? t : J.Z.getChannelId(e))),
			a = (0, L.v)({ location: 'sidebar' });
		if (
			(function () {
				return window.location.pathname.startsWith(ed.Z5c.GLOBAL_DISCOVERY);
			})() ||
			(function () {
				return window.location.pathname.startsWith(ed.Z5c.GUILD_DISCOVERY) || (0, Y.OG)();
			})()
		)
			return a ? (0, i.jsx)(R._, {}) : (0, i.jsx)(Z.Z, {});
		return null != e
			? (0, i.jsx)(
					y.Z,
					{
						selectedChannelId: n,
						guildId: e
					},
					e
				)
			: (0, i.jsx)(el.Z, {});
	}),
	eN = (e) => (0, i.jsx)(ef, { ...e }),
	eA = (e) => {
		let t = null != e && e.length > 0 && e.startsWith('?') ? e.split('?')[1] : null;
		return (0, L.a)({ location: 'sidebar' }) ? (0, i.jsx)(O.A, {}) : (0, i.jsx)(v.Z, { searchRoute: t });
	},
	ev = (e) => {
		let { match: t } = e;
		return null != t.params.guildId
			? (0, i.jsx)(b.Z, {
					guildId: t.params.guildId,
					inviteCode: t.params.inviteCode
				})
			: null;
	},
	eZ = (e) => {
		let { match: t } = e;
		return null != t.params.guildId
			? (0, i.jsx)(U.Z, {
					guildId: t.params.guildId,
					inviteCode: t.params.inviteCode
				})
			: null;
	},
	eL = () => (0, i.jsx)(eo.Z, {}),
	eO = () => (0, i.jsx)(ec.Z, {}),
	eR = function () {
		let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
		return function (t) {
			return (0, i.jsx)(C.Z, {
				isFullScreen: e,
				...t
			});
		};
	},
	ex = (e) => (0, i.jsx)(g.Z, { ...e }),
	eb = () => (0, i.jsx)(I.Z, {}),
	eP = () => (0, i.jsx)(F.Z, {}),
	eM = () => (0, i.jsx)(w.Z, {}),
	eD = () => (0, i.jsx)(V.Z, {}),
	ey = (e) => {
		let { match: t } = e;
		switch (t.params.feature) {
			case 'addFriends':
				return (0, i.jsx)(F.Z, { initialSection: ed.pJs.ADD_FRIEND });
			case 'pendingFriends':
				return (0, i.jsx)(F.Z, { initialSection: ed.pJs.PENDING });
			case 'sessionManagement':
				return (0, i.jsx)(l.l_, { to: ed.Z5c.SETTINGS('sessions') });
			case 'connections':
				return (0, i.jsx)(l.l_, {
					to: {
						pathname: ed.Z5c.SETTINGS('connections'),
						search: e.location.search
					}
				});
			case 'family-center':
				return (0, i.jsx)(l.l_, { to: ed.Z5c.FAMILY_CENTER });
			case 'account-standing':
				return (0, i.jsx)(l.l_, { to: ed.Z5c.SETTINGS('privacy-and-safety', 'account-standing') });
			case 'authorized-apps':
				return (0, i.jsx)(l.l_, { to: ed.Z5c.SETTINGS('authorized-apps') });
			case 'open-shop':
				return (0, i.jsx)(l.l_, { to: ed.Z5c.COLLECTIBLES_SHOP_FULLSCREEN });
			default:
				return (0, i.jsx)(l.l_, { to: ed.Z5c.ME });
		}
	};
function ej(e) {
	let { hasNotice: t, sidebarTheme: n, hideSidebar: a } = e;
	(0, h.t)(!0);
	let s = 'app view user trigger debugging';
	E.R6.useExperiment({ location: s }, { autoTrackExposure: !1 }), E.R6.trackExposure({ location: s });
	let l = (0, u.e7)([T.Z], () => T.Z.isFullscreenInContext());
	return a
		? null
		: (0, i.jsxs)('div', {
				className: r()(eE.sidebar, (0, en.Q)(n), {
					[eE.hasNotice]: t,
					[eE.fullWidth]: d.tq,
					[eE.hidden]: l
				}),
				children: [(0, i.jsx)(eC, {}), (0, i.jsx)(ei.b, {}), (0, i.jsx)(es.Z, {})]
			});
}
function eU() {
	var e;
	let t = (0, u.e7)([$.Z], () => $.Z.hasNotice()),
		n = (0, u.e7)([K.Z], () => (K.Z.darkSidebar ? ed.BRd.DARK : void 0)),
		s = (function () {
			let [e, t] = a.useState(() => window.location.pathname.startsWith(ed.Z5c.GUILD_MEMBER_VERIFICATION('')));
			return (
				a.useEffect(
					() =>
						z.Z.addRouteChangeListener((e) => {
							t(e.pathname.startsWith(ed.Z5c.GUILD_MEMBER_VERIFICATION('')));
						}),
					[]
				),
				e
			);
		})(),
		r = (function () {
			let [e, t] = a.useState(() => window.location.pathname.startsWith(ed.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
			return (
				a.useEffect(
					() =>
						z.Z.addRouteChangeListener((e) => {
							t(e.pathname.startsWith(ed.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB('')));
						}),
					[]
				),
				e
			);
		})(),
		c = (function () {
			var e;
			let t = (0, l.TH)();
			return (
				(null === (e = (0, l.LX)(t.pathname, ed.Z5c.GUILD_BOOSTING_MARKETING(':guildId'))) || void 0 === e
					? void 0
					: e.isExact) === !0
			);
		})(),
		_ = (function () {
			var e;
			let t = (0, l.TH)();
			return (
				(null === (e = (0, l.LX)(t.pathname, ed.Z5c.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e
					? void 0
					: e.isExact) === !0
			);
		})(),
		E = (0, u.e7)([H.Z], () => H.Z.getIsOpen()),
		h = (0, l.$B)([ed.Z5c.CHANNEL(ed.ME, ':channelId'), ed.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?')]),
		I =
			(null == h ? void 0 : null === (e = h.params) || void 0 === e ? void 0 : e.channelId) === eu.oC.GUILD_ONBOARDING,
		g = a.useCallback(() => B.Z.openSidebar(), []);
	return (0, i.jsx)(i.Fragment, {
		children: (0, i.jsxs)('div', {
			className: eE.container,
			children: [
				E &&
					!_ &&
					(0, i.jsx)(j.Z, {
						className: eE.guilds,
						themeOverride: n
					}),
				(0, i.jsx)(x.Z.Provider, {
					value: (null == h ? void 0 : h.params.guildId) === ed.ME ? void 0 : null == h ? void 0 : h.params.guildId,
					children: (0, i.jsxs)('div', {
						className: eE.base,
						children: [
							d.tq ? null : (0, i.jsx)(er.Z, {}),
							(0, i.jsxs)('div', {
								className: eE.content,
								children: [
									(0, i.jsx)(f.Z, {}),
									(0, i.jsx)(ej, {
										hasNotice: t,
										sidebarTheme: n,
										hideSidebar: s || r || c || _ || I || !E
									}),
									(0, i.jsx)(m.Z.Provider, {
										value: g,
										children: (0, i.jsxs)(l.rs, {
											children: [
												(0, i.jsx)(p.Z, {
													path: ed.Z5c.ACTIVITY,
													disableTrack: !0,
													children: (0, i.jsx)(l.l_, { to: ed.Z5c.ME })
												}),
												(0, i.jsx)(p.Z, {
													path: ed.Z5c.ACTIVITIES_HAPPENING_NOW,
													render: eb,
													impressionName: o.ImpressionNames.ACTIVITIES
												}),
												(0, i.jsx)(p.Z, {
													path: ed.Z5c.ACTIVITY_DETAILS(':applicationId'),
													render: ex,
													impressionName: o.ImpressionNames.ACTIVITY_DETAILS,
													impressionProperties: (e) => {
														let { computedMatch: t } = e;
														return { application_id: t.params.applicationId };
													}
												}),
												(0, i.jsx)(p.Z, {
													path: ed.Z5c.ACTIVITIES,
													render: eb,
													impressionName: o.ImpressionNames.ACTIVITIES
												}),
												(0, i.jsx)(p.Z, {
													path: ed.Z5c.APPLICATION_LIBRARY,
													render: eL,
													impressionName: o.ImpressionNames.APPLICATION_LIBRARY,
													disableTrack: !0
												}),
												(0, i.jsx)(p.Z, {
													path: ed.Z5c.APPLICATION_STORE,
													render: eO,
													impressionName: o.ImpressionNames.APPLICATION_STORE,
													disableTrack: !0
												}),
												(0, i.jsx)(p.Z, {
													path: ed.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
													render: eR(!0),
													disableTrack: !0
												}),
												(0, i.jsx)(p.Z, {
													path: ed.Z5c.COLLECTIBLES_SHOP,
													render: eR(!1),
													disableTrack: !0
												}),
												(0, i.jsx)(p.Z, {
													path: ed.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
													render: eR(!1),
													disableTrack: !0
												}),
												(0, i.jsx)(p.Z, {
													path: ed.Z5c.MESSAGE_REQUESTS,
													render: eM,
													disableTrack: !0
												}),
												(0, i.jsx)(p.Z, {
													path: ed.Z5c.FAMILY_CENTER,
													render: eD,
													disableTrack: !0
												}),
												(0, i.jsx)(p.Z, {
													path: ed.Z5c.ME,
													exact: !0,
													render: eP,
													impressionName: o.ImpressionNames.FRIENDS,
													disableTrack: !0
												}),
												(0, i.jsx)(p.Z, {
													path: [
														ed.Z5c.CHANNEL_THREAD_VIEW(':guildId', ':channelId', ':threadId', ':messageId?'),
														ed.Z5c.CHANNEL(ed.ME, ':channelId'),
														ed.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?')
													],
													render: eN,
													impressionName: o.ImpressionNames.GUILD_CHANNEL,
													disableTrack: !0
												}),
												(0, i.jsx)(p.Z, {
													path: ed.Z5c.GLOBAL_DISCOVERY,
													render: (e) => {
														let { location: t } = e;
														return eA(t.search);
													},
													impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
													disableTrack: !0
												}),
												(0, i.jsx)(p.Z, {
													path: ed.Z5c.GLOBAL_DISCOVERY_SERVERS,
													render: (e) => {
														let { location: t } = e;
														return eA(t.search);
													},
													impressionName: o.ImpressionNames.GLOBAL_DISCOVERY,
													disableTrack: !0
												}),
												(0, i.jsx)(p.Z, {
													path: ed.Z5c.QUEST_HOME,
													render: (e) => {
														let { location: t } = e;
														return eA(t.search);
													},
													impressionName: o.ImpressionNames.QUEST_HOME,
													disableTrack: !0
												}),
												(0, i.jsx)(p.Z, {
													path: ed.Z5c.GUILD_DISCOVERY,
													render: (e) => {
														let { location: t } = e;
														return eA(t.search);
													},
													impressionName: o.ImpressionNames.GUILD_DISCOVERY,
													disableTrack: !0
												}),
												(0, i.jsx)(p.Z, {
													path: ed.Z5c.GUILD_MEMBER_VERIFICATION(':guildId', ':inviteCode?'),
													render: ev,
													impressionName: o.ImpressionNames.GUILD_MEMBER_VERIFICATION,
													disableTrack: !0
												}),
												(0, i.jsx)(p.Z, {
													path: ed.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(':guildId', ':inviteCode?'),
													render: eZ,
													impressionName: o.ImpressionNames.HUB_EMAIL_SIGNUP,
													impressionProperties: (e) => {
														let { computedMatch: t } = e;
														return { has_invite: void 0 !== t.params.inviteCode };
													}
												}),
												(0, i.jsx)(p.Z, {
													path: ed.Z5c.FEATURE(':feature'),
													exact: !0,
													render: ey,
													disableTrack: !0
												})
											]
										})
									})
								]
							})
						]
					})
				})
			]
		})
	});
}
