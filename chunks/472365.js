n.d(t, {
	Z: function () {
		return w;
	}
}),
	n(411104);
var i = n(735250),
	l = n(470079),
	r = n(120356),
	a = n.n(r),
	s = n(399606),
	o = n(481060),
	c = n(588705),
	u = n(100527),
	d = n(906732),
	h = n(388905),
	p = n(792766),
	_ = n(600164),
	f = n(436774),
	g = n(313201),
	m = n(451603),
	C = n(885714),
	I = n(973616),
	E = n(594174),
	N = n(855981),
	x = n(55543),
	S = n(626135),
	v = n(768581),
	Z = n(358085),
	T = n(998502),
	L = n(379164),
	A = n(590965),
	b = n(981631),
	M = n(474936),
	R = n(689938),
	O = n(933284),
	P = n(224499);
function y() {
	let { analyticsLocations: e, sourceAnalyticsLocations: t } = (0, d.ZP)(u.Z.PREMIUM_UPSELL_TOOLTIP);
	return (
		l.useEffect(() => {
			S.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
				type: M.cd.GUILD_CAP_INLINE_INVITE_MODAL,
				location: { page: b.ZY5.NATIVE_INVITE_MODAL },
				location_stack: t
			});
		}, [t]),
		(0, i.jsxs)(o.Clickable, {
			onClick: () =>
				(0, C.Z)({
					analyticsSource: { page: b.Sbl.EXTERNAL_INVITE_LINK_MODAL },
					analyticsLocation: {
						page: b.Sbl.EXTERNAL_INVITE_LINK_MODAL,
						section: b.jXE.GUILD_CAP_UPSELL_MODAL
					},
					analyticsLocations: e
				}),
			className: O.experimentUpsellError,
			children: [
				(0, i.jsx)(o.NitroWheelIcon, {
					size: 'md',
					className: O.experimentUpsellIcon,
					color: f.JX.PREMIUM_TIER_2
				}),
				(0, i.jsx)('span', {
					className: O.experimentUpsellText,
					children: R.Z.Messages.GUILD_CAP_UPSELL_TOOLTIP
				}),
				(0, i.jsx)('span', {
					className: O.experimentGetNitro,
					children: R.Z.Messages.GUILD_CAP_UPSELL_GET_NITRO
				})
			]
		})
	);
}
function j(e) {
	let { className: t } = e;
	return (0, i.jsxs)('div', {
		'aria-hidden': 'true',
		className: a()(O.iconContainer, t),
		children: [
			(0, i.jsx)(N.Z, { className: O.iconSparklePlus }),
			(0, i.jsx)(o.LinkIcon, {
				size: 'custom',
				color: 'currentColor',
				className: O.iconLink,
				width: 40,
				height: 40
			}),
			(0, i.jsx)(x.Z, { className: O.iconSparkleStar })
		]
	});
}
function D(e) {
	let { transitionState: t } = e,
		n = (0, g.Dt)(),
		{ analyticsLocations: l } = (0, d.ZP)(u.Z.INVITE_MODAL);
	return (0, i.jsx)(d.Gt, {
		value: l,
		children: (0, i.jsx)(o.ModalRoot, {
			size: o.ModalSize.DYNAMIC,
			'aria-labelledby': n,
			transitionState: t,
			children: (0, i.jsxs)(o.ModalContent, {
				className: O.errorContent,
				children: [
					(0, i.jsx)(j, { className: O.errorImage }),
					(0, i.jsx)(o.Heading, {
						id: n,
						variant: 'heading-xl/semibold',
						color: 'header-primary',
						children: R.Z.Messages.INVITE_MODAL_ERROR_INVALID_TITLE
					}),
					(0, i.jsx)('div', {
						className: O.errorBody,
						children: R.Z.Messages.INVITE_MODAL_ERROR_INVALID_BODY
					}),
					(0, i.jsx)(h.zx, {
						size: h.zx.Sizes.LARGE,
						onClick: () => L.Z.close(),
						color: h.zx.Colors.BRAND,
						children: R.Z.Messages.INVITE_MODAL_ERROR_BUTTON_TEXT
					})
				]
			})
		})
	});
}
function w(e) {
	let t,
		n,
		{ transitionState: r } = e;
	(0, s.e7)([E.default], () => {
		var e;
		return null === (e = E.default.getCurrentUser()) || void 0 === e ? void 0 : e.premiumType;
	});
	let { invite: f, error: C, submitting: N } = (0, s.cj)([A.Z], () => A.Z.getProps());
	l.useEffect(() => {
		!__OVERLAY__ && Z.isPlatformEmbedded && ((0, Z.isWindows)() ? T.ZP.minimize() : T.ZP.restore(), T.ZP.focus());
	}, []);
	let x = (0, g.Dt)(),
		{ analyticsLocations: S } = (0, d.ZP)(u.Z.INVITE_MODAL);
	if (null == f) return null;
	if (f.state === b.r2o.EXPIRED || f.state === b.r2o.BANNED || f.state === b.r2o.ERROR) return (0, i.jsx)(D, { transitionState: r });
	if (null == f.channel) return null;
	function M() {
		null != f && L.Z.acceptInvite(f);
	}
	let { guild: j, channel: w, inviter: U, target_application: G } = f,
		k = null != j,
		B = null != f.stage_instance,
		H = null == f.guild && null == f.channel && null != f.inviter;
	if (null != G) (t = null == j ? void 0 : j.name), (n = I.Z.createFromServer(G).getCoverImageURL(1024));
	else if (null != j)
		(t = j.name),
			(n = v.ZP.getGuildSplashURL({
				id: j.id,
				splash: j.splash
			}));
	else if (((null == (t = w.name) || '' === t) && null != U && (t = U.username), null == t)) throw Error('no name for group DM invite');
	let V = (0, m.yU)(),
		F = B ? R.Z.Messages.INSTANT_INVITE_ACCEPT_STAGE : R.Z.Messages.INVITE_MODAL_BUTTON.format({ guildName: t });
	return (
		H && (F = R.Z.Messages.ACCEPT_INVITE_MODAL_BUTTON),
		(0, i.jsx)(d.Gt, {
			value: S,
			children: (0, i.jsxs)(o.ModalRoot, {
				size: o.ModalSize.DYNAMIC,
				'aria-labelledby': x,
				transitionState: r,
				className: O.container,
				children: [
					(0, i.jsx)('div', {
						className: O.contentWrapper,
						children: (0, i.jsx)(o.Scroller, {
							className: O.scroller,
							children: (0, i.jsxs)(_.Z, {
								className: O.inviteContent,
								direction: _.Z.Direction.VERTICAL,
								justify: _.Z.Justify.BETWEEN,
								children: [
									(0, i.jsx)('div', {
										id: x,
										className: P.marginBottom20,
										children: (0, i.jsx)(c.Z, {
											invite: f,
											disableUser: k,
											error: C
										})
									}),
									B && null != j
										? (0, i.jsx)('div', {
												className: a()(P.marginBottom20, O.stage),
												children: (0, i.jsx)(p.Z, {
													isCard: !0,
													stageInstance: f.stage_instance,
													guild: j
												})
											})
										: null,
									(0, i.jsxs)('div', {
										children: [
											V ? (0, i.jsx)(y, {}) : null,
											null == G
												? (0, i.jsx)(o.Tooltip, {
														text: V ? R.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION : null,
														position: 'bottom',
														children: (e) => {
															let { onMouseEnter: t, onMouseLeave: n } = e;
															return (0, i.jsx)(h.zx, {
																size: h.zx.Sizes.LARGE,
																onClick: M,
																submitting: N,
																disabled: V,
																color: B ? h.zx.Colors.GREEN : h.zx.Colors.BRAND,
																onMouseEnter: t,
																onMouseLeave: n,
																children: V ? R.Z.Messages.GUILD_CAP_INVITE_MODAL_BUTTON : F
															});
														}
													})
												: (0, i.jsxs)('div', {
														className: O.buttonGroup,
														children: [
															(0, i.jsx)(h.zx, {
																size: h.zx.Sizes.LARGE,
																onClick: M,
																submitting: N,
																children: R.Z.Messages.PLAY
															}),
															(0, i.jsx)(h.zx, {
																color: h.zx.Colors.PRIMARY,
																size: h.zx.Sizes.LARGE,
																onClick: M,
																submitting: N,
																children: R.Z.Messages.SPECTATE
															})
														]
													}),
											(0, i.jsx)(_.Z, {
												justify: _.Z.Justify.CENTER,
												className: P.marginTop8,
												children: (0, i.jsx)(h.zx, {
													look: h.zx.Looks.LINK,
													className: O.noThanksButton,
													onClick: function () {
														L.Z.close();
													},
													color: h.zx.Colors.TRANSPARENT,
													children: R.Z.Messages.INIVTE_MODAL_NO_THANKS
												})
											})
										]
									})
								]
							})
						})
					}),
					null != n &&
						(0, i.jsx)('div', {
							className: O.inviteSplash,
							style: { backgroundImage: 'url('.concat(n, ')') }
						})
				]
			})
		})
	);
}
