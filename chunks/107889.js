t.d(n, {
	Z: function () {
		return y;
	}
}),
	t(47120);
var s = t(735250),
	i = t(470079),
	o = t(442837),
	l = t(481060),
	r = t(727637),
	a = t(58540),
	c = t(100527),
	d = t(906732),
	u = t(680295),
	I = t(699516),
	_ = t(5192),
	f = t(785717),
	E = t(221292),
	m = t(481046),
	p = t(910128),
	x = t(318661),
	Z = t(78675),
	v = t(113557),
	h = t(169979),
	S = t(119096),
	T = t(502762),
	A = t(544989),
	g = t(481932),
	N = t(195387),
	j = t(272510),
	L = t(171368),
	R = t(900687),
	b = t(806926),
	C = t(228168),
	P = t(981631),
	O = t(689938),
	M = t(392214);
function y(e) {
	let {
			user: n,
			currentUser: t,
			guildId: y,
			channelId: U,
			messageId: D,
			roleId: F,
			sessionId: B,
			friendToken: w,
			initialSection: G,
			initialSubsection: V,
			transitionState: k,
			onClose: Y,
			showGuildProfile: W = !0,
			sourceAnalyticsLocations: K = []
		} = e,
		z = y === P.ME ? void 0 : y,
		{ analyticsLocations: H } = (0, d.ZP)([...K, c.Z.SIMPLIFIED_PROFILE_MODAL]),
		q = (0, f.ZB)({
			layout: 'SIMPLIFIED_MODAL',
			userId: n.id,
			sourceSessionId: B,
			guildId: z,
			channelId: U,
			messageId: D,
			roleId: F,
			showGuildProfile: W
		}),
		{ profileStatusEditEnabled: Q } = (0, m.K)({ location: 'SimplifiedUserProfileModalHeader' }),
		{ persistentCallCtaEnabled: X, activeInviteToCallCtaEnabled: J } = (0, p.l)({
			location: 'SimplifiedUserProfileModalHeader'
		}),
		[$, ee] = i.useState(),
		[en, et] = i.useState(),
		es = (e) => {
			ee(e.interactionType), et(e.interactionSourceType);
		},
		ei = (0, x.ZP)(n.id, W ? z : void 0),
		eo = (0, x.ZP)(n.id, z),
		el = (0, o.e7)([I.Z], () => I.Z.getRelationshipType(n.id)),
		er = i.useMemo(() => (null != z ? { [z]: [n.id] } : {}), [z, n.id]);
	(0, a.$)(er);
	let ea = i.createRef(),
		ec = (0, r.Z)(ea),
		[ed, eu] = i.useState(!1),
		[eI, e_] = i.useState(!1),
		[ef, eE] = i.useState(!1),
		em = () =>
			(null == eo ? void 0 : eo.guildId) == null
				? null
				: (null == ei ? void 0 : ei.guildId) != null
					? (0, s.jsx)(l.MenuItem, {
							id: 'view-main-profile',
							label: O.Z.Messages.VIEW_MAIN_PROFILE,
							subtext: O.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: _.ZP.getName(void 0, void 0, n) }),
							action: () => {
								Y(),
									(0, L.openUserProfileModal)({
										...q,
										showGuildProfile: !1,
										friendToken: w,
										sourceAnalyticsLocations: K
									}),
									(0, E.pQ)({
										action: 'PRESS_VIEW_MAIN_PROFILE',
										analyticsLocations: H,
										...q
									});
							}
						})
					: (0, s.jsx)(l.MenuItem, {
							id: 'view-server-profile',
							label: O.Z.Messages.VIEW_SERVER_PROFILE,
							subtext: O.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: _.ZP.getName(z, U, n) }),
							action: () => {
								Y(),
									(0, L.openUserProfileModal)({
										...q,
										showGuildProfile: !0,
										friendToken: w,
										sourceAnalyticsLocations: K
									}),
									(0, E.pQ)({
										action: 'PRESS_VIEW_SERVER_PROFILE',
										analyticsLocations: H,
										...q
									});
							}
						});
	return (0, s.jsx)(d.Gt, {
		value: H,
		children: (0, s.jsx)(f.Mt, {
			value: q,
			children: (0, s.jsxs)(l.ModalRoot, {
				transitionState: k,
				className: M.root,
				hideShadow: !0,
				'aria-label': O.Z.Messages.USER_PROFILE_MODAL,
				children: [
					(0, s.jsxs)(T.Z, {
						user: n,
						displayProfile: ei,
						profileType: C.y0.FULL_SIZE,
						ref: ea,
						children: [
							(0, s.jsxs)(A.Z, {
								profileType: C.y0.FULL_SIZE,
								children: [
									(0, s.jsx)(N.Z, {
										user: n,
										guildId: z,
										channelId: U,
										onClose: Y
									}),
									(0, s.jsx)(g.Z, {
										profileType: C.y0.FULL_SIZE,
										user: n,
										friendToken: w
									}),
									(0, s.jsx)(j.Z, {
										user: n,
										guildId: z,
										viewProfileItem: em()
									})
								]
							}),
							(0, s.jsxs)('header', {
								children: [
									(0, s.jsx)(Z.Z, {
										user: n,
										displayProfile: ei,
										profileType: C.y0.FULL_SIZE,
										hasProfileEffect: (null == ei ? void 0 : ei.profileEffectId) != null
									}),
									(0, s.jsx)(S.Z, {
										isReply: ef,
										sent: eI,
										shown: ed,
										className: M.toast
									}),
									null != $ && (0, s.jsx)('div', { className: M.backdrop }),
									(0, s.jsxs)('div', {
										className: M.headerInner,
										children: [
											(0, s.jsx)(v.Z, {
												location: 'SimplifiedUserProfileModal',
												user: n,
												displayProfile: ei,
												guildId: z,
												channelId: U,
												profileType: C.y0.FULL_SIZE,
												isInteractionSource: en === C.n_.AVATAR || en === C.n_.STATUS,
												onInteraction: es,
												showReplyPopout: $ === C.P.REPLY && en === C.n_.AVATAR,
												setInteractionToastShown: eu,
												setInteractionSent: e_,
												setIsReplyInteraction: eE
											}),
											(0, s.jsx)(R.Z, {
												user: n,
												isCurrentUser: n.id === t.id,
												guildId: z,
												relationshipType: el,
												persistentCallCtaEnabled: X,
												activeInviteToCallCtaEnabled: J,
												viewProfileItem: em(),
												onClose: Y
											}),
											(0, s.jsx)(h.Z, {
												location: 'SimplifiedUserProfileModal',
												user: n,
												displayProfile: ei,
												guildId: z,
												channelId: U,
												profileType: C.y0.FULL_SIZE,
												editEnabled: Q,
												hasEntered: k === l.ModalTransitionState.ENTERED,
												isInteractionSource: en === C.n_.STATUS,
												onInteraction: es,
												showReplyPopout: $ === C.P.REPLY && en === C.n_.STATUS,
												onClose: Y,
												setInteractionToastShown: eu,
												setInteractionSent: e_,
												setIsReplyInteraction: eE
											})
										]
									})
								]
							}),
							(0, s.jsx)(b.Z, {
								user: n,
								currentUser: t,
								channelId: U,
								displayProfile: ei,
								initialSection: G,
								initialSubsection: V,
								friendToken: w,
								onClose: Y
							})
						]
					}),
					(null == ei ? void 0 : ei.profileEffectId) != null &&
						(0, s.jsx)(u.Z, {
							profileEffectId: null == ei ? void 0 : ei.profileEffectId,
							isHovering: ec
						})
				]
			})
		})
	});
}
