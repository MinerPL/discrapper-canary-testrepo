n.d(t, {
	Z: function () {
		return k;
	}
}),
	n(47120);
var r = n(735250);
n(470079);
var i = n(120356),
	a = n.n(i),
	s = n(442837),
	o = n(481060),
	l = n(287734),
	u = n(872810),
	c = n(110924),
	d = n(100527),
	_ = n(906732),
	E = n(194082),
	f = n(318374),
	h = n(382182),
	p = n(769654),
	m = n(543882),
	I = n(592125),
	T = n(430824),
	g = n(496675),
	S = n(938475),
	A = n(502762),
	N = n(652853),
	v = n(194811),
	O = n(373826),
	R = n(315324),
	C = n(582123),
	y = n(648926),
	D = n(290274),
	L = n(318134),
	b = n(228168),
	M = n(981631),
	P = n(689938),
	U = n(139665),
	w = n(321635),
	x = n(924482),
	G = n(774797);
function k(e) {
	let { user: t, currentUser: n, stream: i, className: k, onClose: B } = e,
		{ profileType: F, theme: V } = (0, N.z)(),
		H = {
			[w.fullSize]: F === b.y0.FULL_SIZE,
			[U.fullSize]: F === b.y0.FULL_SIZE
		},
		{ analyticsLocations: Z } = (0, _.ZP)(d.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
		{ onAction: Y, trackViewRef: j } = (0, L.Z)({
			display: 'live',
			user: t,
			stream: i,
			analyticsLocations: Z
		}),
		W = (0, s.e7)([T.Z], () => T.Z.getGuild(null == i ? void 0 : i.guildId)),
		K = (0, s.e7)([I.Z], () => I.Z.getChannel(null == i ? void 0 : i.channelId)),
		z = (0, s.Wu)([S.ZP], () =>
			null != K
				? S.ZP.getVoiceStatesForChannel(K).map((e) => {
						let { user: t } = e;
						return t;
					})
				: []
		),
		[q, Q] = (0, h.wq)(K),
		{
			url: X,
			isLoading: $,
			canSeePreview: J
		} = (0, s.cj)([g.Z, m.Z], () => {
			let e = null != K && g.Z.canBasicChannel(M.S7T.CONNECT, K);
			return e
				? {
						url: m.Z.getPreviewURL(i.guildId, i.channelId, i.ownerId),
						isLoading: m.Z.getIsPreviewLoading(i.guildId, i.channelId, i.ownerId),
						canSeePreview: e
					}
				: {
						url: null,
						isLoading: !1,
						canSeePreview: e
					};
		}),
		ee = (0, c.Z)($ ? null : X),
		et = $ || null == X ? ee : X;
	if (null == W || null == K) return null;
	let en = () => {
			let e = a()(w.preview, H),
				t = () => {
					Y({ action: 'PRESS_STREAM_IMAGE' }), l.default.selectVoiceChannel(i.channelId), (0, u.iV)(i), null == B || B();
				};
			return null == et && $
				? (0, r.jsx)('div', {
						className: e,
						children: (0, r.jsx)(o.Spinner, {})
					})
				: null == et
					? (0, r.jsxs)(o.Clickable, {
							className: a()(e, { [w.clickable]: q }),
							onClick: q ? t : void 0,
							children: [
								(0, r.jsx)('img', {
									alt: '',
									src: V === M.BRd.LIGHT ? G : x
								}),
								F !== b.y0.FULL_SIZE &&
									(0, r.jsx)(o.Text, {
										variant: 'text-xs/normal',
										children: J ? P.Z.Messages.STREAM_NO_PREVIEW : P.Z.Messages.STREAM_NO_PERMISSION_CTA
									})
							]
						})
					: (0, r.jsxs)(o.Clickable, {
							className: a()(e, w.overlay, { [w.clickable]: q }),
							onClick: q ? t : void 0,
							children: [
								(0, r.jsx)('img', {
									alt: '',
									src: et,
									className: w.image
								}),
								F === b.y0.BITE_SIZE &&
									(0, r.jsx)(o.ClydeIcon, {
										size: 'xs',
										color: 'currentColor',
										className: w.clyde
									})
							]
						});
		},
		er = () =>
			F !== b.y0.FULL_SIZE
				? null
				: (0, r.jsxs)('div', {
						className: U.details,
						children: [
							(0, r.jsxs)('div', {
								children: [
									(0, r.jsxs)(o.Heading, {
										variant: 'heading-sm/semibold',
										color: 'text-normal',
										className: U.voiceChannelHeading,
										children: [
											(0, r.jsx)(o.VoiceNormalIcon, {
												size: 'xxs',
												color: o.tokens.colors.TEXT_NORMAL,
												className: U.voiceIcon
											}),
											(0, r.jsx)(o.Clickable, {
												className: a()(U.clickable, U.inline),
												onClick: () => {
													l.default.selectVoiceChannel(K.id), (0, p.X)(W.id), null == Y || Y({ action: 'OPEN_VOICE_CHANNEL' }), null == B || B();
												},
												children: K.name
											})
										]
									}),
									(0, r.jsx)(O.Z, {
										variant: 'text-xs/normal',
										text: P.Z.Messages.USER_PROFILE_IN_GUILD_DETAILS.format({ guildName: W.name }),
										onClick: () => {
											(0, p.X)(W.id), Y({ action: 'OPEN_VOICE_GUILD' }), null == B || B();
										}
									})
								]
							}),
							(0, r.jsx)(f.Z, {
								users: z,
								guildId: W.id,
								channelId: K.id,
								maxUsers: R.W,
								size: o.AvatarSizes.SIZE_16,
								disableUserPopout: (e) => e === t.id,
								overflowCountVariant: 'text-xxs/semibold',
								overflowCountColor: 'text-muted'
							})
						]
					}),
		ei = () =>
			F === b.y0.FULL_SIZE
				? null
				: (0, r.jsxs)(r.Fragment, {
						children: [
							(0, r.jsx)('div', { className: U.voiceChannelDivider }),
							(0, r.jsx)(R.Z, {
								user: t,
								guild: W,
								channel: K,
								onAction: Y,
								onClose: B
							})
						]
					}),
		ea = () =>
			t.id === n.id
				? null
				: (0, r.jsx)('div', {
						className: a()(U.actions, H),
						children: (0, r.jsx)(y.Z, {
							stream: i,
							canWatch: q,
							unavailableReason: Q,
							onAction: Y,
							onClose: B
						})
					});
	return (0, r.jsx)(_.Gt, {
		value: Z,
		children: (0, r.jsx)(C.Z, {
			user: t,
			onClose: B,
			children: (e) => {
				let { onAutoDismiss: n } = e;
				return (0, r.jsxs)(A.Z.Overlay, {
					className: a()(U.card, k),
					ref: j,
					children: [
						(0, r.jsx)(v.Z, {
							text: P.Z.Messages.USER_ACTIVITY_STREAMING,
							tags: (0, r.jsxs)(r.Fragment, {
								children: [
									(0, r.jsx)(E.ZP, { size: E.OH.SMALL }),
									(0, r.jsx)(D.Z, {
										display: 'live',
										user: t,
										onClose: B,
										onRequestOpen: n
									})
								]
							})
						}),
						(0, r.jsxs)('div', {
							className: U.body,
							children: [
								(0, r.jsxs)('div', {
									className: a()(U.content, H),
									children: [en(), er(), F === b.y0.FULL_SIZE && ea()]
								}),
								ei()
							]
						}),
						F !== b.y0.FULL_SIZE && ea()
					]
				});
			}
		})
	});
}
