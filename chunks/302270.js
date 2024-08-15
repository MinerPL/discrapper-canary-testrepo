n.d(t, {
	Z: function () {
		return H;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(442837),
	o = n(692547),
	c = n(481060),
	u = n(475179),
	d = n(40851),
	h = n(358221),
	m = n(933557),
	p = n(320007),
	_ = n(236091),
	f = n(623624),
	E = n(665149),
	g = n(984370),
	C = n(141321),
	I = n(618158),
	x = n(390322),
	T = n(616286),
	N = n(961048),
	v = n(430824),
	S = n(496675),
	Z = n(626135),
	A = n(792125),
	M = n(431328),
	b = n(501655),
	R = n(200498),
	j = n(146085),
	L = n(427679),
	P = n(592473),
	O = n(831002),
	y = n(903108),
	D = n(981631),
	k = n(474936),
	U = n(689938),
	w = n(985902);
function B(e) {
	let { inPopout: t, channel: n, toggleRequestToSpeakSidebar: s, showRequestToSpeakSidebar: o } = e,
		m = (0, d.bp)(),
		f = (0, r.e7)([h.Z], () => h.Z.getChatOpen(n.id)),
		E = (0, R.B)(n.id),
		g = (0, M.Rk)(n.id, b.pV.REQUESTED_TO_SPEAK_ONLY),
		{ preventIdle: v, allowIdle: S } = (0, I.Y)('popup');
	return (0, i.jsxs)(i.Fragment, {
		children: [
			(0, i.jsx)(_.Z, { channelId: n.id }, 'clips-enabled-indicator'),
			(0, i.jsx)(
				c.Popout,
				{
					position: 'bottom',
					animation: c.Popout.Animation.NONE,
					align: 'right',
					renderPopout: (e) =>
						(0, i.jsx)(x.Z, {
							children: (0, i.jsx)(O.Z, {
								...e,
								channelId: n.id,
								appContext: m
							})
						}),
					autoInvert: !1,
					children: (e, t) => {
						let { isShown: n } = t;
						return (0, a.createElement)(N.Z, {
							...e,
							key: 'more-options',
							isActive: n,
							className: w.button,
							iconClassName: w.buttonIcon
						});
					}
				},
				'more-options-popout'
			),
			!t && (0, i.jsx)(p.Z, { className: w.button }, 'clips'),
			(0, i.jsx)(
				C.Z,
				{
					onOpen: v,
					onClose: S,
					className: w.button
				},
				'recents'
			),
			!o && E
				? (0, i.jsx)('div', {
						className: w.button,
						children: (0, i.jsx)(P.Z, {
							toggleRequestToSpeakSidebar: () => {
								f && u.Z.updateChatOpen(n.id, !1), s();
							},
							showRequestToSpeakSidebar: o,
							numRequestToSpeak: g
						})
					})
				: null,
			!f &&
				(0, i.jsx)('div', {
					className: l()(w.button, { [w.sidebarOpen]: o }),
					children: (0, i.jsx)(T.T, {
						channelId: n.id,
						showRequestToSpeakSidebar: o,
						toggleRequestToSpeakSidebar: s,
						iconClassName: w.buttonIcon
					})
				})
		]
	});
}
function H(e) {
	var t, n;
	let { inPopout: s, channel: d, toggleRequestToSpeakSidebar: h, showRequestToSpeakSidebar: p } = e,
		_ = (0, m.ZP)(d),
		C = (0, r.e7)([L.Z], () => L.Z.getStageInstanceByChannel(d.id)),
		I = (0, M.Io)(d.id),
		x = (0, M.Rk)(d.id, b.pV.AUDIENCE),
		T = (0, r.e7)([v.Z], () => v.Z.getGuild(d.guild_id), [d.guild_id]),
		N = null !== (t = null == T ? void 0 : T.maxStageVideoChannelUsers) && void 0 !== t ? t : 0,
		R = (null == T ? void 0 : T.isCommunity())
			? N < D.TU7
			: (null == T ? void 0 : T.premiumTier) !== D.Eu4.TIER_3 && N <= D.eez,
		P = (0, y.Z)(d),
		O = (0, r.e7)([S.Z], () => S.Z.can(j.yP, d)),
		H = () => {
			u.Z.updateStageVideoLimitBoostUpsellDismissed(d.id, !0),
				Z.default.track(D.rMx.BOOSTING_UPSELL_CLICKED, {
					guild_id: d.guild_id,
					type: k.cd.VIDEO_STAGE_LIMIT,
					is_moderator: O,
					action: k.T7.DISMISS
				});
		};
	a.useEffect(() => {
		P &&
			Z.default.track(D.rMx.BOOSTING_UPSELL_VIEWED, {
				guild_id: d.guild_id,
				type: k.cd.VIDEO_STAGE_LIMIT,
				is_moderator: O,
				listener_count: I + x
			});
	}, [P]);
	let V = (0, i.jsxs)(E.ZP, {
		toolbar: (0, i.jsx)(B, {
			inPopout: s,
			toggleRequestToSpeakSidebar: h,
			showRequestToSpeakSidebar: p,
			channel: d
		}),
		onDoubleClick: g.O,
		transparent: !0,
		className: l()((0, A.Q)(D.BRd.DARK), w.participants),
		children: [
			(0, i.jsx)(E.ZP.Icon, {
				icon: c.StageIcon,
				disabled: !0,
				'aria-label': U.Z.Messages.STAGE_CHANNEL,
				className: w.icon,
				color: null != C ? o.Z.unsafe_rawColors.GREEN_360.css : void 0
			}),
			(0, i.jsx)(E.ZP.Title, {
				className: w.channelName,
				wrapperClassName: w.channelNameWrapper,
				children: null !== (n = null == C ? void 0 : C.topic) && void 0 !== n ? n : _
			}),
			(0, i.jsx)(E.ZP.Divider, { className: w.divider }),
			(0, i.jsxs)(E.ZP.Title, {
				children: [
					(0, i.jsx)(c.MicrophoneIcon, {
						size: 'xs',
						color: 'currentColor'
					}),
					(0, i.jsx)(c.Text, {
						variant: 'text-xs/medium',
						color: 'header-secondary',
						className: w.speakerCount,
						children: U.Z.Messages.SPEAKING_COUNT.format({ count: I })
					}),
					(0, i.jsx)(c.GroupIcon, {
						size: 'xs',
						color: 'currentColor'
					}),
					(0, i.jsx)(c.Text, {
						variant: 'text-xs/medium',
						color: 'header-secondary',
						className: w.speakerCount,
						children: U.Z.Messages.LISTENING_COUNT.format({ count: x })
					})
				]
			})
		]
	});
	return P
		? (0, i.jsxs)('div', {
				children: [
					V,
					(0, i.jsxs)('div', {
						className: w.boostUpsell,
						children: [
							(0, i.jsx)(G, {}),
							(0, i.jsxs)('div', {
								className: w.text,
								children: [
									(0, i.jsx)(c.Text, {
										variant: 'text-md/medium',
										color: 'header-primary',
										children: R ? U.Z.Messages.STAGE_FULL_MODERATOR_TITLE : U.Z.Messages.STAGE_FULL_MODERATOR_MAX_TITLE
									}),
									(0, i.jsx)(c.Text, {
										variant: 'text-xs/medium',
										color: 'text-normal',
										children: R ? U.Z.Messages.STAGE_FULL_MODERATOR_BODY : U.Z.Messages.STAGE_FULL_MAX_BODY
									})
								]
							}),
							(0, i.jsx)('div', {
								className: w.buttons,
								children: R
									? (0, i.jsxs)(i.Fragment, {
											children: [
												(0, i.jsx)(c.Button, {
													className: w.notNowButton,
													onClick: H,
													look: c.Button.Looks.BLANK,
													size: c.Button.Sizes.SMALL,
													children: U.Z.Messages.NOT_NOW
												}),
												(0, i.jsx)(c.ShinyButton, {
													size: c.Button.Sizes.SMALL,
													onClick: () => {
														(0, f.f)({
															guildId: d.guild_id,
															location: { section: D.jXE.STAGE_VIDEO_LIMIT }
														}),
															Z.default.track(D.rMx.BOOSTING_UPSELL_CLICKED, {
																guild_id: d.guild_id,
																type: k.cd.VIDEO_STAGE_LIMIT,
																is_moderator: O,
																action: k.T7.BOOST
															});
													},
													className: w.boostButton,
													children: U.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION
												})
											]
										})
									: (0, i.jsx)(c.Button, {
											className: w.notNowButton,
											onClick: H,
											look: c.Button.Looks.BLANK,
											size: c.Button.Sizes.SMALL,
											children: U.Z.Messages.DISMISS
										})
							})
						]
					})
				]
			})
		: V;
}
function G() {
	return (0, i.jsxs)('svg', {
		width: '36',
		height: '36',
		viewBox: '0 0 36 36',
		fill: 'none',
		children: [
			(0, i.jsxs)('g', {
				clipPath: 'url(#clip0_595_59940)',
				children: [
					(0, i.jsx)('path', {
						d: 'M36 18C36 19.8 33.075 21.15 32.625 22.725C32.175 24.3 33.525 27.225 32.625 28.575C31.725 29.925 28.35 29.25 27 30.375C25.65 31.5 25.2 34.425 23.625 35.1C22.05 35.775 19.8 33.3 18 33.3C16.2 33.3 13.95 35.55 12.375 35.1C10.8 34.65 10.35 31.275 9 30.375C7.65 29.475 4.5 29.925 3.375 28.575C2.25 27.225 3.825 24.525 3.375 22.725C2.925 20.925 0 19.8 0 18C0 16.2 2.925 14.85 3.375 13.275C3.825 11.7 2.475 8.77497 3.375 7.42496C4.275 6.07497 7.65 6.74997 9 5.62497C10.35 4.49997 10.8 1.57497 12.375 0.899965C13.95 0.224965 16.2 2.69997 18 2.69997C19.8 2.69997 22.05 0.449965 23.625 0.899965C25.2 1.34997 25.65 4.49997 27 5.62497C28.35 6.74997 31.5 6.07497 32.625 7.42496C33.75 8.77497 32.175 11.475 32.625 13.275C33.075 15.075 36 16.2 36 18Z',
						fill: 'url(#paint0_linear_595_59940)'
					}),
					(0, i.jsx)('path', {
						d: 'M15.75 20.7001L18 22.9501L20.25 20.7001V15.3001L18 13.0501L15.75 15.3001V20.7001Z',
						fill: 'white'
					}),
					(0, i.jsx)('path', {
						d: 'M18 6.75L11.25 13.5V22.5L18 29.25L24.75 22.5V13.5L18 6.75ZM22.5 21.6L18 26.1L13.5 21.6V14.4L18 9.9L22.5 14.4V21.6Z',
						fill: 'white'
					})
				]
			}),
			(0, i.jsxs)('defs', {
				children: [
					(0, i.jsxs)('linearGradient', {
						id: 'paint0_linear_595_59940',
						x1: '2.4046e-06',
						y1: '35.2166',
						x2: '35.7182',
						y2: '-1.45185',
						gradientUnits: 'userSpaceOnUse',
						children: [
							(0, i.jsx)('stop', { stopColor: '#3E70DD' }),
							(0, i.jsx)('stop', {
								offset: '1',
								stopColor: '#B377F3'
							})
						]
					}),
					(0, i.jsx)('clipPath', {
						id: 'clip0_595_59940',
						children: (0, i.jsx)('rect', {
							width: '36',
							height: '36',
							fill: 'white'
						})
					})
				]
			})
		]
	});
}
