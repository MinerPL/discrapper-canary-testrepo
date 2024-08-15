n.r(t),
	n.d(t, {
		OAuth2Authorize: function () {
			return er;
		},
		OAuth2AuthorizeModal: function () {
			return en;
		},
		OAuth2AuthorizePage: function () {
			return et;
		},
		getOAuth2AuthorizeProps: function () {
			return el;
		},
		openOAuth2Modal: function () {
			return eo;
		},
		openOAuth2ModalWithCreateGuildModal: function () {
			return es;
		},
		useOAuth2AuthorizeForm: function () {
			return ei;
		}
	}),
	n(47120),
	n(411104);
var r,
	i,
	a = n(735250),
	s = n(470079),
	o = n(120356),
	l = n.n(o),
	u = n(266067),
	c = n(729594),
	d = n(373793),
	_ = n(243814),
	E = n(149765),
	f = n(442837),
	h = n(693789),
	p = n(952265),
	m = n(21340),
	I = n(922770),
	T = n(993365),
	g = n(481060),
	S = n(893776),
	A = n(434650),
	N = n(367907),
	v = n(702493),
	O = n(728345),
	R = n(979200),
	C = n(560067),
	y = n(353926),
	D = n(341298),
	L = n(703656),
	b = n(973616),
	M = n(598077),
	P = n(314897),
	U = n(700785),
	w = n(591759),
	x = n(807675),
	G = n(489863),
	k = n(228763),
	B = n(422559),
	F = n(713938),
	V = n(166148),
	H = n(807989),
	Z = n(260430),
	Y = n(668185),
	j = n(407546),
	W = n(41259),
	K = n(28752),
	z = n(787025),
	q = n(397394),
	Q = n(574384),
	X = n(981631),
	$ = n(689938),
	J = n(828947);
let ee = 'oauth2-authorize-header-id';
function et() {
	let e = (0, u.TH)(),
		t = s.useMemo(() => (0, x.y)(e.search), [e.search]);
	return (
		(0, v.Z)(),
		(0, a.jsx)(z.G, {
			children: (0, a.jsx)(er, {
				...t,
				showLogout: !0
			})
		})
	);
}
function en(e) {
	let { transitionState: t, ...n } = e,
		{
			header: r,
			body: i,
			footer: s,
			overlay: o,
			nextStep: u,
			appDetails: c
		} = ei({
			...n,
			disableContinueUntilRead: !0,
			inApp: !0
		}),
		d = (0, a.jsxs)('div', {
			className: J.content,
			children: [r, i, null == u ? c : null]
		});
	return (0, a.jsx)(z.j, {
		transitionState: t,
		'aria-labelledby': ee,
		footer: s,
		overlay: o,
		children: (0, a.jsx)('div', {
			className: l()(J.authorize, { [J.inApp]: n.inApp }),
			children: (0, a.jsx)(m.zJ, {
				orientation: 'auto',
				children: d
			})
		})
	});
}
function er(e) {
	let { scrollable: t, ...n } = e,
		{ header: r, body: i, footer: s, nextStep: o, appDetails: u } = ei(n),
		c = (0, a.jsxs)(a.Fragment, {
			children: [
				(0, a.jsxs)('div', {
					className: J.content,
					children: [r, i, null == o ? u : null]
				}),
				s
			]
		});
	return t
		? (0, a.jsxs)('div', {
				className: J.fullWidth,
				children: [
					(0, a.jsx)('div', {
						className: l()(J.authorize, { [J.inApp]: n.inApp }),
						children: (0, a.jsx)(m.zJ, {
							orientation: 'auto',
							children: c
						})
					}),
					s
				]
			})
		: (0, a.jsx)('div', {
				className: l()(J.authorize, { [J.inApp]: n.inApp }),
				children: (0, a.jsx)('div', {
					className: J.fullWidth,
					children: c
				})
			});
}
function ei(e) {
	var t, n, r, i, o;
	let p,
		m,
		v,
		C,
		D,
		z,
		{ clientId: et, responseType: en, redirectUri: er, codeChallenge: ei, codeChallengeMethod: ea, state: es, nonce: eo, prompt: el, authorizations: eu, scopes: ec, permissions: ed, guildId: e_, channelId: eE, integrationType: ef, disableGuildSelect: eh = !1, disableContinueUntilRead: ep = !1, showLogout: em = !1, cancelCompletesFlow: eI = !0, isTrustedName: eT = !1, isEmbeddedFlow: eg = !1, inApp: eS = !1, callback: eA, callbackWithoutPost: eN, onClose: ev, disclosures: eO } = e,
		eR = null != ef ? (null == eu ? void 0 : eu.get(ef)) : void 0,
		eC = (0, u.TH)(),
		ey = (0, f.e7)([y.Z], () => y.Z.hasLoadedExperiments);
	s.useEffect(() => {
		P.default.isAuthenticated() && !ey && S.Z.getExperiments();
	}, [ey]);
	let [eD, eL] = s.useState(null),
		[eb, eM] = s.useState(null),
		[eP, eU] = s.useState(null),
		[ew, ex] = s.useState(!1),
		[eG, ek] = s.useState(!ep),
		eB = null == eD ? void 0 : eD.guilds,
		[eF, eV] = s.useState(null != e_ ? e_ : null),
		[eH, eZ] = s.useState(null != eE ? eE : null),
		[eY, ej] = s.useState(U.Hn),
		eW = s.useMemo(() => ((null == eD ? void 0 : eD.user) != null ? new M.Z(eD.user) : null), [null == eD ? void 0 : eD.user]),
		eK = s.useMemo(() => (null == eB ? void 0 : eB.find((e) => e.id === eF)), [eB, eF]),
		[ez, eq] = s.useState(null),
		eQ = s.useMemo(() => {
			var e;
			return null == eR && null == ef && (null !== (e = null == ec ? void 0 : ec.length) && void 0 !== e ? e : 0) === 0 && null == er;
		}, [eR, null == ec ? void 0 : ec.length, er, ef]),
		[eX, e$] = s.useState(null);
	s.useEffect(() => {
		eQ && O.Z.fetchApplication(et).then((e) => e$(b.Z.createFromServer(e)));
	}, [et, eQ]);
	let eJ = s.useMemo(() => {
			var e, t;
			return null == ez ? null : null == eX ? void 0 : null === (t = eX.integrationTypesConfig) || void 0 === t ? void 0 : null === (e = t[ez]) || void 0 === e ? void 0 : e.oauth2InstallParams;
		}, [null == eX ? void 0 : eX.integrationTypesConfig, ez]),
		{ requestedScopes: e0, accountScopes: e1 } = s.useMemo(() => {
			let e = eQ ? (null == eJ ? void 0 : eJ.scopes) : ec,
				t = (0, x.K)(null != e ? e : []),
				n = F.Qe.filter((e) => t.includes(e));
			return {
				requestedScopes: t,
				accountScopes: n
			};
		}, [null == eJ ? void 0 : eJ.scopes, ec, eQ]),
		e2 = s.useMemo(() => {
			var e;
			let t = eQ ? E.vB(null !== (e = null == eJ ? void 0 : eJ.permissions) && void 0 !== e ? e : 0) : ed;
			return null != t ? t : U.Hn;
		}, [null == eJ ? void 0 : eJ.permissions, ed, eQ]),
		e3 = s.useRef(!1),
		[e4, e5] = s.useState(null != eO ? eO : []),
		[e6, e7] = s.useState(null != eO && eO.length > 0);
	s.useEffect(() => {
		if (e3.current) return;
		let e = async () => {
			e3.current = !0;
			try {
				let { disclosures: e, allAcked: t } = await (0, R.de)(et);
				e7(!t), e5(e);
			} catch (n) {
				let { status: e, body: t } = n;
				if (401 === e) {
					(0, G.c$)(eC);
					return;
				}
				eU(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
			} finally {
				e3.current = !1;
			}
		};
		if (null == eO) {
			if (!P.default.isAuthenticated()) {
				(0, G.c$)(eC);
				return;
			}
			e();
		}
	}, [et, eC, eO, e5, eU, e7, eM]);
	let e8 = s.useCallback(
			async (e) => {
				if (null != eN) {
					eN(e);
					return;
				}
				if (!e && !eI) {
					null != eA &&
						(eA({
							application: null == eD ? void 0 : eD.application,
							guild: eK
						}),
						null == ev || ev());
					return;
				}
				if (null == ez) {
					eU(Error('No integration type was selected.'));
					return;
				}
				try {
					ex(!0);
					let t = await (0, G.Iq)({
						authorize: e,
						clientId: et,
						scopes: e0,
						responseType: en,
						redirectUri: er,
						codeChallenge: ei,
						codeChallengeMethod: ea,
						state: es,
						nonce: eo,
						integrationType: ez,
						permissions: E.Od(e2, eY),
						guildId: ez === d.Y.GUILD_INSTALL && null != eF ? eF : void 0,
						channelId: ez === d.Y.GUILD_INSTALL && null != eH ? eH : void 0
					});
					if ((e && (await (0, R.x9)(et, e4)), null != eA))
						eA({
							application: null == eD ? void 0 : eD.application,
							location: t.location,
							guild: eK
						}),
							null == ev || ev();
					else if (null != t.location) {
						let { host: e, path: n } = c.parse(t.location);
						w.Z.isDiscordHostname(e) && n === X.Z5c.OAUTH2_AUTHORIZED
							? (0, L.uL)(X.Z5c.OAUTH2_AUTHORIZED, {
									state: {
										application: null == eD ? void 0 : eD.application,
										guild: eK
									}
								})
							: (window.location = t.location);
					} else ex(!1);
				} catch (t) {
					let e = t.body;
					(null == e ? void 0 : e.message) != null && '' !== e.message ? eU(Error(e.message)) : eU(e), eM(1), ex(!1);
				}
			},
			[eN, eI, eA, null == eD ? void 0 : eD.application, eK, ev, et, e0, en, er, ei, ea, es, eo, e2, eY, eF, ez, eH, e4]
		),
		e9 = s.useRef(!1),
		te = s.useCallback(async () => {
			if (!P.default.isAuthenticated()) {
				(0, G.c$)(eC);
				return;
			}
			if (!e3.current) {
				if (!e9.current) {
					e9.current = !0;
					try {
						let e =
							null != eR
								? eR
								: await (0, G.Ww)({
										clientId: et,
										scopes: e0,
										responseType: en,
										redirectUri: er,
										codeChallenge: ei,
										codeChallengeMethod: ea,
										state: es,
										nonce: eo,
										integrationType: null != ez ? ez : void 0
									});
						eL((0, k.d)(e)), el === V.s.NONE && e.authorized && !e6 && e8(!0), (0, N.yw)(X.rMx.OAUTH2_AUTHORIZE_VIEWED, { application_id: e.application.id });
					} catch (n) {
						let { status: e, body: t } = n;
						if (401 === e) {
							(0, G.c$)(eC);
							return;
						}
						eU(Error(null != t.message ? t.message : ''.concat(Object.keys(t)[0], ': ').concat(Object.values(t)[0])));
					} finally {
						e9.current = !1;
					}
				}
			}
		}, [eC, eR, et, e0, en, er, ei, ea, es, eo, ez, el, e8, e6]),
		tt = s.useMemo(() => {
			var e;
			return null != eX && eQ
				? Object.entries(null !== (e = eX.integrationTypesConfig) && void 0 !== e ? e : {})
						.filter((e) => {
							let [t, n] = e;
							return null != n.oauth2InstallParams;
						})
						.map((e) => {
							let [t, n] = e;
							return Number(t);
						})
				: [];
		}, [eX, eQ]);
	s.useEffect(() => {
		if (null == eb && (!eQ || null != eX) && !!ey)
			if (null != eR) {
				var e;
				eq(null !== (e = eR.integration_type) && void 0 !== e ? e : d.Y.GUILD_INSTALL), eM(1);
			} else tt.length > 1 ? eM(0) : (1 === tt.length ? eq(tt[0]) : null != ef ? eq(ef) : eq(d.Y.GUILD_INSTALL), eM(1));
	}, [eR, tt, eX, eQ, ef, eb, ey]),
		s.useEffect(() => {
			if (null == ez || null != eD || null != eP) return;
			ez === d.Y.USER_INSTALL && (eV(null), eZ(null));
			let e = e0.filter((e) => !F.ak.includes(e));
			0 === e0.length ? eU(Error('No scopes were provided.')) : e.length > 0 ? eU(Error('Invalid scope: '.concat(e[0]))) : (0, B._$)(e2) ? eU(Error('Invalid permission(s) provided.')) : te();
		}, [e6, te, e0, e2, ez, eD, eP]);
	let tn = s.useCallback((e) => {
			e && ek(!0);
		}, []),
		tr = (0, A.O)(tn);
	if (eP instanceof Error) return { body: (0, a.jsx)(q.Lk, { message: eP.message }) };
	let ti = !1,
		ta = !0,
		ts = !0,
		to = !0;
	switch (eb) {
		case null:
			return { body: (0, a.jsx)(I.$, {}) };
		case 0:
			if (null == eX) return { body: (0, a.jsx)(I.$, {}) };
			(p = (0, a.jsx)(K.Z, {
				inApp: eS,
				application: eX,
				onSelect: (e) => {
					eq(e), eL(null), eM(1);
				}
			})),
				(ta = !1),
				(ts = !1),
				(to = !1);
			break;
		case 1:
			if (null == eD || null == eW || null == ez) return { body: (0, a.jsx)(I.$, {}) };
			let tl = null == eP || eP instanceof Error ? {} : eP,
				tu = null == eB ? void 0 : eB.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
				tc = ez === d.Y.GUILD_INSTALL && e0.includes(_.x.WEBHOOK_INCOMING),
				td = tc || (ez === d.Y.GUILD_INSTALL && (e0.includes(_.x.BOT) || e0.includes(_.x.APPLICATIONS_COMMANDS)));
			(p = (0, a.jsxs)(a.Fragment, {
				children: [
					(0, a.jsx)(Z.Z, {
						application: eD.application,
						accountScopes: e1,
						requestedScopes: e0,
						integrationType: ez,
						errors: tl,
						isTrustedName: eT
					}),
					td
						? (0, a.jsx)(j.Z, {
								error: (null !== (n = null !== (t = tl[_.x.BOT]) && void 0 !== t ? t : tl[_.x.APPLICATIONS_COMMANDS]) && void 0 !== n ? n : [])[0],
								selectedGuildId: eF,
								onGuildChange: eV,
								guilds: null != tu ? tu : [],
								disabled: '' !== eF && null != eF && !0 === eh
							})
						: null,
					tc
						? (0, a.jsx)(Q.Z, {
								error: (null !== (r = tl[_.x.WEBHOOK_INCOMING]) && void 0 !== r ? r : [])[0],
								selectedChannelId: eH,
								selectedGuildId: eF,
								onChannelChange: eZ
							})
						: null
				]
			})),
				e0.includes(_.x.BOT) && !E.fS(e2, U.Hn) && (v = 2),
				tt.length > 1 && (m = 0),
				(ti = (td && null == eK) || (tc && null == eH));
			break;
		case 2:
			if (null == eD) return { body: (0, a.jsx)(I.$, {}) };
			(p = (0, a.jsx)(Y.Z, {
				application: eD.application,
				permissions: e2,
				deniedPermissions: eY,
				onPermissionsChange: (e, t) => {
					ej((n) => (e ? E.Od(n, t) : E.IH(n, t)));
				},
				guild: eK
			})),
				(m = 1);
	}
	if (ta && null != eD) {
		let e = null === (i = eD.bot) || void 0 === i ? void 0 : i.approximate_guild_count;
		C = (0, a.jsxs)(a.Fragment, {
			children: [
				(0, a.jsx)(H.Z, {
					application: eD.application,
					scopes: e0,
					disclosures: e4,
					redirectUri: null !== (o = eD.redirect_uri) && void 0 !== o ? o : null,
					approximateGuildCount: void 0 !== e ? e : null,
					isEmbeddedFlow: eg
				}),
				(0, a.jsx)('div', {
					className: J.intObserver,
					ref: tr
				})
			]
		});
	}
	ts &&
		null != eD &&
		null != eW &&
		(D = (0, a.jsx)(W.Z, {
			id: ee,
			user: eW,
			application: eD.application,
			bot: eD.bot,
			accountScopes: e1,
			showLogout: em || !1,
			location: eC,
			isTrustedName: eT
		}));
	let t_ = null == v && null != C && !eG;
	to &&
		(z = (0, a.jsxs)('div', {
			className: l()(J.footer, { [J.inApp]: eS }),
			children: [
				null != m
					? (0, a.jsx)(h.zx, {
							look: h.zx.Looks.LINK,
							color: h.zx.Colors.PRIMARY,
							onClick: () => eM(m),
							children: $.Z.Messages.BACK
						})
					: (0, a.jsx)(h.zx, {
							look: h.zx.Looks.LINK,
							color: h.zx.Colors.PRIMARY,
							onClick: () => e8(!1),
							children: $.Z.Messages.CANCEL
						}),
				0 !== eb
					? null != v
						? (0, a.jsx)(h.zx, {
								onClick: () => eM(v),
								disabled: ti,
								children: $.Z.Messages.CONTINUE
							})
						: t_
							? (0, a.jsxs)('div', {
									className: J.action,
									children: [
										(0, a.jsx)(T.x, {
											className: J.helpText,
											variant: 'text-xs/normal',
											color: 'text-muted'
										}),
										(0, a.jsx)(g.Tooltip, {
											text: $.Z.Messages.OAUTH2_SCROLL_TO_READ_DISCLOSURES,
											children: (e) =>
												(0, a.jsx)('div', {
													...e,
													children: (0, a.jsxs)(h.zx, {
														onClick: () => e8(!0),
														disabled: !0,
														submitting: ew,
														innerClassName: J.buttonOverflow,
														children: [
															$.Z.Messages.OAUTH2_KEEP_SCROLLING,
															' ',
															(0, a.jsx)('span', {
																className: J.emoji,
																role: 'img',
																'aria-label': 'down',
																children: '\uD83D\uDC47'
															})
														]
													})
												})
										})
									]
								})
							: (0, a.jsxs)('div', {
									className: J.action,
									children: [
										(0, a.jsx)(T.x, {
											className: J.helpText,
											variant: 'text-xs/normal',
											color: 'text-muted',
											children: 'Click to authorize this app'
										}),
										(0, a.jsx)(h.zx, {
											onClick: () => e8(!0),
											submitting: ew,
											children: $.Z.Messages.AUTHORIZE
										})
									]
								})
					: null
			]
		}));
	let tE = t_ ? (0, a.jsx)('div', { className: J.overlay }) : null;
	return {
		header: D,
		body: p,
		footer: z,
		nextStep: v,
		appDetails: C,
		overlay: tE,
		sendAuthorize: e8
	};
}
function ea(e, t) {
	if (null == t.location || (null != e && e(t))) return;
	let { host: n, path: r, query: i } = c.parse(t.location, !0),
		s = w.Z.isDiscordHostname(n) || window.location.host === n;
	if (s && r === X.Z5c.OAUTH2_AUTHORIZED)
		(0, p.h7)((e) =>
			(0, a.jsx)(z.j, {
				...e,
				'aria-labelledby': ee,
				children: (0, a.jsx)(q.Jh, {
					guild: t.guild,
					application: t.application,
					onClose: e.onClose
				})
			})
		);
	else if (s && (null == r ? void 0 : r.startsWith(X.Z5c.OAUTH2_ERROR)))
		(0, p.h7)((e) => {
			let t = i.error_description || i.error || $.Z.Messages.OAUTH2_UNKNOWN_ERROR;
			return (
				Array.isArray(t) && (t = t[0]),
				(0, a.jsx)(z.j, {
					...e,
					'aria-labelledby': ee,
					children: (0, a.jsx)(q.Lk, {
						message: t,
						onClose: e.onClose
					})
				})
			);
		});
	else {
		var o;
		null === (o = window.open(t.location, '_blank')) || void 0 === o || o.focus();
	}
}
function es(e, t) {
	if ((0, D.g)('create-guild-and-oauth2-modal')) {
		C.Z.openCreateGuildModal({
			onSuccess: (n) =>
				eo(
					{
						...e,
						guildId: n
					},
					t
				)
		});
		return;
	}
	eo(e, t);
}
function eo(e, t) {
	(0, p.h7)(
		(t) =>
			(0, a.jsx)(en, {
				...t,
				...e,
				cancelCompletesFlow: !1,
				callback: ea.bind(null, e.callback)
			}),
		{ onCloseCallback: t }
	);
}
function el(e) {
	let { hostname: t = '', host: n, path: r, query: i } = c.parse(e);
	return null != r && null != i && (w.Z.isDiscordHostname(t) || n === window.location.host) && (r.startsWith('/api'.concat(X.ANM.OAUTH2_AUTHORIZE)) || r.startsWith(X.Z5c.OAUTH2_AUTHORIZE)) ? (0, x.y)(i) : null;
}
((i = r || (r = {}))[(i.SELECT_INSTALL_TYPE = 0)] = 'SELECT_INSTALL_TYPE'), (i[(i.AUTHORIZE_SCOPES = 1)] = 'AUTHORIZE_SCOPES'), (i[(i.AUTHORIZE_BOT_PERMISSIONS = 2)] = 'AUTHORIZE_BOT_PERMISSIONS');
