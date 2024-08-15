n.d(t, {
	Z: function () {
		return P;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(597312),
	l = n(481060),
	r = n(727637),
	o = n(410030),
	c = n(100527),
	u = n(906732),
	d = n(680295),
	h = n(785717),
	m = n(221292),
	p = n(318661),
	_ = n(78675),
	f = n(113557),
	E = n(169979),
	C = n(119096),
	g = n(215105),
	I = n(502762),
	x = n(256059),
	T = n(437758),
	N = n(544989),
	v = n(481932),
	S = n(272510),
	Z = n(171368),
	A = n(926150),
	M = n(940885),
	b = n(625015),
	R = n(228168),
	j = n(689938),
	L = n(317986);
function P(e) {
	let { user: t, currentUser: n, channel: P } = e,
		O = __OVERLAY__,
		y = (0, p.ZP)(t.id),
		D = (0, o.ZP)(),
		{ analyticsLocations: k } = (0, u.ZP)(c.Z.PROFILE_PANEL),
		U = (0, h.ZB)({
			layout: 'SIMPLIFIED_DM_PANEL',
			userId: t.id,
			channelId: P.id
		}),
		w = a.useRef(null),
		B = (0, r.Z)(w),
		[H, G] = a.useState(!1),
		[V, F] = a.useState(!1),
		[W, z] = a.useState(!1),
		[Y, K] = a.useState(),
		[q, X] = a.useState(),
		[Q, J] = a.useState(),
		$ = (e) => {
			K(e.interactionType), X(e.interactionSourceType), J(e.interactionSourceDetails);
		},
		ee = (e) => {
			(0, Z.openUserProfileModal)({
				sourceAnalyticsLocations: k,
				...U,
				...e
			});
		};
	return (0, i.jsx)(u.Gt, {
		value: k,
		children: (0, i.jsx)(h.Mt, {
			value: U,
			children: (0, i.jsxs)(I.Z, {
				ref: w,
				user: t,
				displayProfile: y,
				profileType: R.y0.PANEL,
				themeOverride: D,
				className: L.container,
				children: [
					null != Y && (0, i.jsx)('div', { className: L.backdrop }),
					(0, i.jsxs)(s.u2, {
						children: [
							(0, i.jsxs)(N.Z, {
								profileType: R.y0.PANEL,
								children: [
									(0, i.jsx)(v.Z, {
										user: t,
										profileType: R.y0.PANEL
									}),
									t.bot ? (0, i.jsx)(T.Z, { user: t }) : (0, i.jsx)(S.Z, { user: t })
								]
							}),
							(0, i.jsx)(l.Popout, {
								renderPopout: (e) => {
									let { setPopoutRef: n } = e;
									return null == q
										? (0, i.jsx)(i.Fragment, {})
										: (0, i.jsx)(g.Z, {
												user: t,
												channelId: P.id,
												profileType: R.y0.PANEL,
												sourceDetails: Q,
												sourceType: q,
												setPopoutRef: n,
												onInteraction: $,
												setInteractionToastShown: G,
												setInteractionSent: F,
												setIsReplyInteraction: z
											});
								},
								animationPosition: 'top',
								position: 'bottom',
								align: 'center',
								shouldShow: Y === R.P.REPLY && null != q,
								children: () =>
									(0, i.jsxs)('header', {
										className: L.header,
										children: [
											(0, i.jsx)(_.Z, {
												user: t,
												displayProfile: y,
												profileType: R.y0.PANEL,
												animateOnHover: !B
											}),
											(0, i.jsx)(C.Z, {
												isReply: W,
												sent: V,
												shown: H,
												className: L.toast
											}),
											(0, i.jsx)(f.Z, {
												location: 'SimplifiedProfilePanel',
												user: t,
												displayProfile: y,
												channelId: P.id,
												profileType: R.y0.PANEL,
												isInteractionSource: q === R.n_.AVATAR || q === R.n_.STATUS,
												onOpenProfile: O ? void 0 : ee,
												onInteraction: $,
												setInteractionToastShown: G,
												setInteractionSent: F,
												setIsReplyInteraction: z
											}),
											(0, i.jsx)(E.Z, {
												location: 'SimplifiedProfilePanel',
												user: t,
												channelId: P.id,
												profileType: R.y0.PANEL,
												isInteractionSource: q === R.n_.STATUS,
												onInteraction: $,
												setInteractionToastShown: G,
												setInteractionSent: F,
												setIsReplyInteraction: z
											}),
											(0, i.jsx)(x.Z, { user: t })
										]
									})
							}),
							(0, i.jsx)(A.Z, {
								user: t,
								currentUser: n,
								displayProfile: y,
								channel: P,
								isHovering: B,
								onOpenProfile: O ? void 0 : ee
							}),
							(0, i.jsx)(M.Z, { user: t }),
							(0, i.jsx)(b.Z, {
								user: t,
								displayProfile: y
							})
						]
					}),
					!O &&
						(0, i.jsx)('footer', {
							className: L.footer,
							children: (0, i.jsx)(l.Button, {
								fullWidth: !0,
								size: l.Button.Sizes.LARGE,
								look: l.Button.Looks.BLANK,
								color: L.footerButtonColor,
								onClick: () => {
									ee(),
										(0, m.pQ)({
											action: 'PRESS_VIEW_PROFILE',
											analyticsLocations: k,
											...U
										});
								},
								children: j.Z.Messages.VIEW_FULL_PROFILE
							})
						}),
					(null == y ? void 0 : y.profileEffectId) != null &&
						(0, i.jsx)(d.Z, {
							profileEffectId: null == y ? void 0 : y.profileEffectId,
							isHovering: B
						})
				]
			})
		})
	});
}
