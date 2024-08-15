n.d(t, {
	Z: function () {
		return P;
	}
}),
	n(47120),
	n(789020);
var i = n(735250);
n(470079);
var a = n(613828),
	s = n(442837),
	r = n(477690),
	l = n(481060),
	o = n(668781),
	c = n(2052),
	u = n(100527),
	d = n(906732),
	_ = n(835473),
	E = n(522474),
	I = n(523746),
	m = n(592125),
	T = n(594174),
	h = n(630388),
	N = n(823379),
	f = n(624138),
	C = n(317381),
	p = n(638880),
	g = n(122613),
	S = n(147865),
	A = n(778569),
	R = n(884338),
	x = n(403404),
	O = n(701488),
	M = n(981631),
	v = n(689938),
	L = n(671487);
let Z = (0, f.Mg)(r.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);
function P(e) {
	var t, n, r, f;
	let { applicationId: P, message: b } = e,
		{ analyticsLocations: D } = (0, d.ZP)(u.Z.ACTIVITY_BOOKMARK),
		j = (0, c.O)(),
		U = b.channel_id,
		y = (0, s.e7)([m.Z], () => m.Z.getChannel(U), [U]),
		B = null == y ? void 0 : y.guild_id,
		k = null != y && (y.isGuildVoice() || y.isPrivate()),
		G = (0, s.e7)([C.ZP], () => C.ZP.getSelfEmbeddedActivityForChannel(U)),
		F = (null == G ? void 0 : G.applicationId) === P,
		[w] = (0, _.Z)([P, null !== (n = null == G ? void 0 : G.applicationId) && void 0 !== n ? n : '']),
		V = (0, S.ZP)(null !== (r = null == w ? void 0 : w.maxParticipants) && void 0 !== r ? r : 0),
		[H] = (0, s.Wu)(
			[C.ZP],
			() => (k ? C.ZP.getEmbeddedActivitiesForChannel(U).filter((e) => e.applicationId === P) : []),
			[P, U, k]
		),
		Y = Array.from(null !== (f = null == H ? void 0 : H.userIds) && void 0 !== f ? f : []),
		W = (0, s.Wu)([T.default], () => Y.map((e) => T.default.getUser(e)).filter(N.lm), [Y]),
		K = (0, A.Z)({
			applicationId: P,
			size: Z,
			names: ['embedded_cover']
		}),
		z = E.Z.getWindowOpen(M.KJ3.CHANNEL_CALL_POPOUT),
		Q = W.length > 0 ? v.Z.Messages.JOIN : v.Z.Messages.START,
		q = async () => {
			if (k) {
				if (null != H && W.length > 0)
					await (0, p.Z)({
						applicationId: H.applicationId,
						activityChannelId: U,
						locationObject: j.location,
						analyticsLocations: D
					});
				else {
					let e = y.isPrivate() && !I.Z.isCallActive(U),
						t = async () =>
							await (0, g.Z)({
								targetApplicationId: P,
								channelId: U,
								analyticsLocations: D
							});
					e
						? o.Z.show({
								title: v.Z.Messages.DEFAULT_CONFIRMATION_MODAL_HEADER,
								cancelText: v.Z.Messages.CANCEL,
								confirmText: v.Z.Messages.CONFIRM,
								onConfirm: () => t(),
								body: v.Z.Messages.EMBEDDED_ACTIVITIES_DM_START_CONFIRMATION_TEXT
							})
						: t();
				}
			} else
				(0, x.Z)({
					guildId: B,
					locationObject: j.location,
					openInPopout: z,
					initialSelectedApplicationId: P,
					initialSlide: O.ag.SELECT_CHANNEL,
					analyticsLocations: D
				});
		};
	return null != w && (0, h.yE)(w.flags, M.udG.EMBEDDED)
		? (0, i.jsx)(d.Gt, {
				value: D,
				children: (0, i.jsxs)('div', {
					className: L.container,
					children: [
						(0, i.jsx)('div', {
							className: L.imgContainer,
							children: (0, i.jsx)('img', {
								className: L.img,
								alt: w.name,
								src: K.url
							})
						}),
						(0, i.jsxs)('div', {
							className: L.content,
							children: [
								(0, i.jsx)(l.Heading, {
									className: L.heading,
									variant: 'heading-xl/semibold',
									children: w.name
								}),
								(0, i.jsx)(l.Heading, {
									className: L.description,
									variant: 'heading-sm/medium',
									children: null === (t = w.description) || void 0 === t ? void 0 : t.trim()
								}),
								(0, i.jsx)(l.Heading, {
									className: L.learnMore,
									variant: 'heading-sm/medium',
									children: (0, i.jsx)(a.rU, {
										to: M.Z5c.ACTIVITY_DETAILS(P),
										children: v.Z.Messages.LEARN_MORE
									})
								}),
								(0, i.jsxs)('div', {
									className: L.cta,
									children: [
										W.length > 0
											? (0, i.jsx)('div', {
													className: L.avatars,
													children: (0, i.jsx)(R.Z, {
														guildId: B,
														users: W,
														max: 4
													})
												})
											: (0, i.jsxs)('div', {
													className: L.maxParticipants,
													children: [
														(0, i.jsx)(l.GroupIcon, {
															size: 'md',
															color: 'currentColor',
															className: L.peopleIcon
														}),
														(0, i.jsx)(l.Text, {
															variant: 'text-xs/semibold',
															children: V
														})
													]
												}),
										(0, i.jsx)('div', {
											className: L.buttonWrapper,
											children: (0, i.jsx)(l.Button, {
												onClick: q,
												className: L.button,
												color: l.ButtonColors.GREEN,
												disabled: F,
												children: Q
											})
										})
									]
								})
							]
						})
					]
				})
			})
		: null;
}
