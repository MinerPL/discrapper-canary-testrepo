t.d(n, {
	Z: function () {
		return R;
	}
}),
	t(47120);
var s = t(735250);
t(470079);
var i = t(481060),
	o = t(100527),
	l = t(906732),
	r = t(5192),
	a = t(785717),
	c = t(318661),
	d = t(78675),
	u = t(741308),
	I = t(899007),
	_ = t(438163),
	f = t(681837),
	E = t(502762),
	m = t(530),
	p = t(645410),
	x = t(437758),
	Z = t(357836),
	v = t(544989),
	h = t(934861),
	S = t(616140),
	T = t(29530),
	A = t(228168),
	g = t(981631),
	N = t(689938),
	j = t(612309),
	L = t(392214);
function R(e) {
	let {
			user: n,
			currentUser: t,
			guildId: R,
			channelId: b,
			messageId: C,
			roleId: P,
			sessionId: O,
			initialSection: M,
			initialSubsection: y,
			transitionState: U,
			onClose: D,
			sourceAnalyticsLocations: F = []
		} = e,
		B = R === g.ME ? void 0 : R,
		w = (0, c.ZP)(n.id, B),
		{ analyticsLocations: G } = (0, l.ZP)([...F, o.Z.SIMPLIFIED_PROFILE_MODAL]),
		V = (0, a.ZB)({
			layout: 'SIMPLIFIED_MODAL',
			userId: n.id,
			sourceSessionId: O,
			guildId: B,
			channelId: b,
			messageId: C,
			roleId: P
		}),
		k = (0, T.Z)(n);
	return (0, s.jsx)(l.Gt, {
		value: G,
		children: (0, s.jsx)(a.Mt, {
			value: V,
			children: (0, s.jsx)(i.ModalRoot, {
				transitionState: U,
				className: L.root,
				hideShadow: !0,
				'aria-label': N.Z.Messages.USER_PROFILE_MODAL,
				children: (0, s.jsxs)(E.Z, {
					user: n,
					displayProfile: w,
					profileType: A.y0.FULL_SIZE,
					children: [
						(0, s.jsx)(v.Z, {
							profileType: A.y0.FULL_SIZE,
							children: (0, s.jsx)(x.Z, {
								user: n,
								guildId: B
							})
						}),
						(0, s.jsxs)('header', {
							children: [
								(0, s.jsx)(d.Z, {
									user: n,
									displayProfile: w,
									profileType: A.y0.FULL_SIZE,
									hasProfileEffect: (null == w ? void 0 : w.profileEffectId) != null
								}),
								(0, s.jsxs)('div', {
									className: L.headerInner,
									children: [
										(0, s.jsx)(I.Z, {
											user: n,
											displayProfile: w,
											guildId: B,
											channelId: b,
											profileType: A.y0.FULL_SIZE
										}),
										(0, s.jsxs)('div', {
											className: j.buttons,
											children: [
												(0, s.jsx)(h.c, {
													userId: n.id,
													onClose: D,
													className: j.messageTextButton
												}),
												(0, s.jsx)(h.v, {
													userId: n.id,
													onClose: D,
													tooltipContainerClassName: j.messageIconButton
												}),
												(0, s.jsx)(Z.Z, {
													user: n,
													guildId: B
												}),
												(0, s.jsx)(p.Z, { user: n })
											]
										}),
										(0, s.jsx)(_.Z, {
											user: n,
											profileType: A.y0.FULL_SIZE,
											hasEntered: U === i.ModalTransitionState.ENTERED,
											onClose: D
										})
									]
								})
							]
						}),
						(0, s.jsxs)('div', {
							className: L.body,
							children: [
								(0, s.jsx)(m.Z, {
									user: n,
									profileType: A.y0.FULL_SIZE,
									nickname: r.ZP.getName(B, b, n),
									pronouns: null == w ? void 0 : w.pronouns,
									nicknameVariant: 'heading-xl/bold',
									nicknameIcons: (0, s.jsx)(f.Z, { userId: n.id }),
									tags: (0, s.jsx)(u.Z, {
										displayProfile: w,
										profileType: A.y0.FULL_SIZE,
										onClose: D
									})
								}),
								(0, s.jsx)(E.Z.Overlay, {
									className: L.overlay,
									children: (0, s.jsx)(S.Z, {
										user: n,
										currentUser: t,
										displayProfile: w,
										items: k,
										initialSection: null != M ? M : A.oh.BOT_INFO,
										initialSubsection: y,
										onClose: D
									})
								})
							]
						})
					]
				})
			})
		})
	});
}
