t.r(n),
	t.d(n, {
		default: function () {
			return v;
		}
	});
var s = t(735250);
t(470079);
var i = t(512722),
	a = t.n(i),
	l = t(442837),
	u = t(481060),
	o = t(239091),
	r = t(100527),
	d = t(906732),
	c = t(299206),
	E = t(894059),
	_ = t(423589),
	M = t(837949),
	N = t(122074),
	I = t(314897),
	S = t(984933),
	g = t(594174),
	L = t(241851),
	T = t(94953),
	A = t(976192),
	h = t(904483),
	f = t(429824),
	Z = t(919815),
	O = t(858822),
	p = t(993356),
	C = t(58338),
	m = t(422525),
	x = t(522762),
	G = t(466330),
	b = t(981631),
	U = t(689938);
function P(e) {
	let { guild: n, onSelect: i, hideSettings: r } = e,
		d = n.id,
		P = S.ZP.getDefaultChannel(d),
		v = (0, l.e7)(
			[g.default],
			() => {
				let e = g.default.getCurrentUser();
				return a()(null != e, 'GuildContextMenu: user cannot be undefined'), n.isOwner(e);
			},
			[n]
		),
		R = (0, G.Z)({
			guild: n,
			source: b.t4x.GUILD_CONTEXT_MENU,
			channel: P
		}),
		j = (0, x.Z)(d),
		D = (0, O.Z)(n),
		y = (0, p.Z)(n),
		k = (0, m.Z)(n),
		F = (0, A.Z)({
			guildId: n.id,
			userId: I.default.getId(),
			analyticsLocation: {
				page: b.ZY5.GUILD_CHANNEL,
				section: b.jXE.CHAT_USERNAME,
				object: b.qAy.CONTEXT_MENU_ITEM
			}
		}),
		B = (0, T.Z)({
			guildId: n.id,
			userId: I.default.getId(),
			analyticsLocation: {
				page: b.ZY5.GUILD_CHANNEL,
				section: b.jXE.CHAT_USERNAME,
				object: b.qAy.CONTEXT_MENU_ITEM
			}
		}),
		Y = (0, h.Z)(n),
		H = (0, E.Z)(n.id),
		V = (0, c.Z)({
			id: n.id,
			label: U.Z.Messages.COPY_ID_GUILD
		}),
		w = (0, Z.Z)(n, { section: b.jXE.GUILD_LIST }),
		z = (0, M.Z)(n.id),
		K = (0, C.Z)(n.id),
		q = (0, N.ng)(n.id, !1),
		X = (0, f.Z)(n),
		W = (0, _.Mn)('GuildContextMenu');
	function Q() {
		(0, u.openModal)((e) =>
			(0, s.jsx)(L.g, {
				...e,
				guild: n
			})
		);
	}
	return n.hasFeature(b.oNc.HUB)
		? (0, s.jsxs)(u.Menu, {
				navId: 'guild-context',
				onClose: o.Zy,
				'aria-label': U.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
				onSelect: i,
				children: [
					(0, s.jsxs)(u.MenuGroup, {
						children: [
							R,
							(0, s.jsx)(u.MenuItem, {
								id: 'privacy',
								label: U.Z.Messages.HUB_PRIVACY_SETTINGS,
								action: () =>
									(0, u.openModalLazy)(async () => {
										let { default: e } = await Promise.all([
											t.e('77298'),
											t.e('23357'),
											t.e('44733'),
											t.e('84605'),
											t.e('52249'),
											t.e('54803'),
											t.e('15685'),
											t.e('47006'),
											t.e('32776'),
											t.e('18209'),
											t.e('6380'),
											t.e('8016'),
											t.e('18543'),
											t.e('72181'),
											t.e('76540'),
											t.e('30671'),
											t.e('68136'),
											t.e('81272'),
											t.e('95393'),
											t.e('18101'),
											t.e('29637'),
											t.e('87624'),
											t.e('86975'),
											t.e('22646'),
											t.e('46097'),
											t.e('8739'),
											t.e('58059'),
											t.e('22173'),
											t.e('5528'),
											t.e('43331'),
											t.e('30243'),
											t.e('30419'),
											t.e('18824'),
											t.e('37229'),
											t.e('99008'),
											t.e('52619'),
											t.e('26138'),
											t.e('29291'),
											t.e('93414'),
											t.e('54535'),
											t.e('71661'),
											t.e('5562'),
											t.e('54807'),
											t.e('28078')
										]).then(t.bind(t, 241420));
										return (t) =>
											(0, s.jsx)(e, {
												...t,
												guild: n
											});
									})
							}),
							F
						]
					}),
					v
						? null
						: (0, s.jsx)(u.MenuGroup, {
								children: (0, s.jsx)(u.MenuItem, {
									id: 'leave-guild',
									label: U.Z.Messages.LEAVE_HUB,
									action: Q,
									color: 'danger'
								})
							}),
					(0, s.jsx)(u.MenuGroup, { children: V })
				]
			})
		: (0, s.jsxs)(u.Menu, {
				navId: 'guild-context',
				onClose: o.Zy,
				'aria-label': U.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
				onSelect: i,
				children: [
					(0, s.jsx)(u.MenuGroup, { children: w }),
					(0, s.jsx)(u.MenuGroup, { children: R }),
					(0, s.jsxs)(u.MenuGroup, {
						children: [D, W || __OVERLAY__ ? null : y, W && !__OVERLAY__ ? K : null, q, j, z]
					}),
					(0, s.jsxs)(u.MenuGroup, {
						children: [
							r ? null : k,
							__OVERLAY__
								? null
								: (0, s.jsx)(u.MenuItem, {
										id: 'privacy',
										label: U.Z.Messages.PRIVACY_SETTINGS,
										action: () =>
											(0, u.openModalLazy)(async () => {
												let { default: e } = await Promise.all([
													t.e('77298'),
													t.e('23357'),
													t.e('44733'),
													t.e('84605'),
													t.e('52249'),
													t.e('54803'),
													t.e('15685'),
													t.e('47006'),
													t.e('32776'),
													t.e('18209'),
													t.e('6380'),
													t.e('8016'),
													t.e('18543'),
													t.e('72181'),
													t.e('76540'),
													t.e('30671'),
													t.e('68136'),
													t.e('81272'),
													t.e('95393'),
													t.e('18101'),
													t.e('29637'),
													t.e('87624'),
													t.e('86975'),
													t.e('22646'),
													t.e('46097'),
													t.e('8739'),
													t.e('58059'),
													t.e('22173'),
													t.e('5528'),
													t.e('43331'),
													t.e('30243'),
													t.e('30419'),
													t.e('18824'),
													t.e('37229'),
													t.e('99008'),
													t.e('52619'),
													t.e('26138'),
													t.e('29291'),
													t.e('93414'),
													t.e('54535'),
													t.e('71661'),
													t.e('5562'),
													t.e('54807'),
													t.e('28078')
												]).then(t.bind(t, 241420));
												return (t) =>
													(0, s.jsx)(e, {
														...t,
														guild: n
													});
											})
									}),
							F,
							B
						]
					}),
					(0, s.jsxs)(u.MenuGroup, {
						children: [Y, H]
					}),
					(0, s.jsxs)(u.MenuGroup, {
						children: [
							X,
							!v &&
								(0, s.jsx)(u.MenuItem, {
									id: 'leave-guild',
									label: U.Z.Messages.LEAVE_SERVER,
									action: Q,
									color: 'danger'
								})
						]
					}),
					(0, s.jsx)(u.MenuGroup, { children: V })
				]
			});
}
function v(e) {
	let { analyticsLocations: n } = (0, d.ZP)(r.Z.CONTEXT_MENU);
	return (0, s.jsx)(d.Gt, {
		value: n,
		children: (0, s.jsx)(P, { ...e })
	});
}
