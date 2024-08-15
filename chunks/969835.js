n.d(t, {
	Z: function () {
		return U;
	}
}),
	n(47120);
var r = n(735250),
	i = n(470079),
	a = n(442837),
	s = n(481060),
	o = n(727637),
	l = n(58540),
	u = n(100527),
	c = n(906732),
	d = n(680295),
	_ = n(271383),
	E = n(430824),
	f = n(785717),
	h = n(221292),
	p = n(481046),
	I = n(318661),
	m = n(78675),
	T = n(113557),
	g = n(169979),
	S = n(119096),
	A = n(215105),
	N = n(502762),
	v = n(544989),
	O = n(481932),
	R = n(195387),
	C = n(272510),
	y = n(171368),
	D = n(958120),
	L = n(215633),
	b = n(228168),
	M = n(689938),
	P = n(122269);
function U(e) {
	let {
			user: t,
			currentUser: n,
			guildId: U,
			channelId: w,
			messageId: x,
			roleId: G,
			closePopout: k,
			setPopoutRef: B,
			disableUserProfileLink: F = __OVERLAY__,
			newAnalyticsLocations: V = []
		} = e,
		{ analyticsLocations: H } = (0, c.ZP)([...V, u.Z.BITE_SIZE_PROFILE_POPOUT]),
		Z = (0, f.ZB)({
			layout: 'BITE_SIZE_POPOUT',
			userId: t.id,
			guildId: U,
			channelId: w,
			messageId: x,
			roleId: G
		}),
		Y = (0, a.e7)([E.Z], () => (null != U ? E.Z.getGuild(U) : null)),
		j = (0, a.e7)([_.ZP], () => (null != U ? _.ZP.getMember(U, t.id) : null)),
		W = i.useMemo(() => (null != U ? { [U]: [t.id] } : {}), [U, t.id]);
	(0, l.$)(W);
	let { profileStatusEditEnabled: K } = (0, p.K)({ location: 'BiteSizeProfilePopout' }),
		z = i.useRef(null),
		q = (0, I.ZP)(t.id, U),
		Q = (0, o.Z)(z),
		[X, $] = i.useState(!1),
		[J, ee] = i.useState(!1),
		[et, en] = i.useState(!1);
	i.useEffect(() => {
		null == B || B(null == z ? void 0 : z.current);
	}, [z, B]);
	let [er, ei] = i.useState(),
		[ea, es] = i.useState(),
		[eo, el] = i.useState(),
		eu = (e) => {
			ei(e.interactionType), es(e.interactionSourceType), el(e.interactionSourceDetails);
		},
		ec = (e) => {
			null == k || k(),
				(0, y.openUserProfileModal)({
					sourceAnalyticsLocations: H,
					...Z,
					...e
				});
		};
	return (0, r.jsx)(c.Gt, {
		value: H,
		children: (0, r.jsx)(f.Mt, {
			value: Z,
			shouldTrackViewOnMount: null == j || null != j.fullProfileLoadedTimestamp,
			children: (0, r.jsxs)(s.Dialog, {
				ref: z,
				'aria-label': t.username,
				children: [
					(0, r.jsxs)(N.Z, {
						user: t,
						displayProfile: q,
						profileType: b.y0.BITE_SIZE,
						children: [
							(0, r.jsxs)(v.Z, {
								profileType: b.y0.BITE_SIZE,
								children: [
									(0, r.jsx)(R.Z, {
										user: t,
										guildId: U,
										channelId: w,
										onClose: k
									}),
									(0, r.jsx)(O.Z, {
										profileType: b.y0.BITE_SIZE,
										user: t
									}),
									t.id !== n.id &&
										(0, r.jsx)(C.Z, {
											user: t,
											guildId: U,
											viewProfileItem: F
												? null
												: (0, r.jsx)(s.MenuItem, {
														id: 'view-profile',
														label: M.Z.Messages.VIEW_FULL_PROFILE,
														action: () => {
															ec(),
																(0, h.pQ)({
																	action: 'PRESS_VIEW_PROFILE',
																	analyticsLocations: H,
																	...Z
																});
														}
													})
										})
								]
							}),
							(0, r.jsx)(s.Popout, {
								renderPopout: (e) => {
									let { setPopoutRef: n } = e;
									return null == ea
										? (0, r.jsx)(r.Fragment, {})
										: (0, r.jsx)(A.Z, {
												user: t,
												guildId: U,
												channelId: w,
												profileType: b.y0.BITE_SIZE,
												sourceType: ea,
												sourceDetails: eo,
												setPopoutRef: n,
												onInteraction: eu,
												setInteractionToastShown: $,
												setInteractionSent: ee,
												setIsReplyInteraction: en
											});
								},
								animationPosition: 'top',
								position: 'bottom',
								align: 'center',
								shouldShow: er === b.P.REPLY && null != ea,
								children: () =>
									(0, r.jsxs)('header', {
										className: P.header,
										children: [
											null != er && (0, r.jsx)('div', { className: P.backdrop }),
											(0, r.jsx)(m.Z, {
												user: t,
												displayProfile: q,
												guildId: U,
												profileType: b.y0.BITE_SIZE,
												hasProfileEffect: (null == q ? void 0 : q.profileEffectId) != null
											}),
											(0, r.jsx)(S.Z, {
												isReply: et,
												sent: J,
												shown: X,
												className: P.toast
											}),
											(0, r.jsx)(T.Z, {
												location: 'BiteSizeProfilePopout',
												user: t,
												displayProfile: q,
												guildId: U,
												channelId: w,
												profileType: b.y0.BITE_SIZE,
												onOpenProfile: F ? void 0 : ec,
												isInteractionSource: ea === b.n_.AVATAR || ea === b.n_.STATUS,
												onInteraction: eu,
												setInteractionToastShown: $,
												setInteractionSent: ee,
												setIsReplyInteraction: en
											}),
											(0, r.jsx)(g.Z, {
												location: 'BiteSizeProfilePopout',
												user: t,
												guildId: U,
												channelId: w,
												profileType: b.y0.BITE_SIZE,
												editEnabled: K,
												isInteractionSource: ea === b.n_.STATUS,
												onInteraction: eu,
												onClose: k,
												setInteractionToastShown: $,
												setInteractionSent: ee,
												setIsReplyInteraction: en
											})
										]
									})
							}),
							(0, r.jsx)(D.Z, {
								user: t,
								currentUser: n,
								displayProfile: q,
								guild: Y,
								isHovering: Q,
								onOpenProfile: F ? void 0 : ec,
								channelId: w,
								onClose: k
							}),
							(0, r.jsx)(L.Z, {
								user: t,
								guildId: U,
								channelId: w,
								onClose: k
							})
						]
					}),
					(null == q ? void 0 : q.profileEffectId) != null &&
						(0, r.jsx)(d.Z, {
							profileEffectId: null == q ? void 0 : q.profileEffectId,
							isHovering: Q
						})
				]
			})
		})
	});
}
