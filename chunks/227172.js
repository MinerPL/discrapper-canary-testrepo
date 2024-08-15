n.d(t, {
	v: function () {
		return R;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(758713),
	l = n(442837),
	r = n(481060),
	o = n(620662),
	c = n(841784),
	u = n(420660),
	d = n(429589),
	h = n(757182),
	m = n(706454),
	p = n(374129),
	_ = n(639351),
	f = n(823379),
	E = n(192918),
	g = n(22211),
	C = n(561308),
	I = n(919394),
	x = n(438226),
	T = n(206295),
	N = n(91140),
	v = n(297781),
	S = n(591853),
	Z = n(410441),
	A = n(797342),
	M = n(981631),
	b = n(689938);
let R = {
	[s.z.DESKTOP]: null,
	[s.z.LINUX]: null,
	[s.z.MACOS]: null,
	[s.z.NINTENDO]: null,
	[s.z.IOS]: null,
	[s.z.ANDROID]: null,
	[s.z.XBOX]: _.Z,
	[s.z.PLAYSTATION]: p.Z
};
t.Z = (e) => {
	var t;
	let { channel: n, entry: s, requestId: p, closePopout: _ } = e,
		{
			iconUrl: j,
			iconTitle: L,
			user: P,
			details: O,
			appName: y,
			activity: D,
			coverImageUrl: k,
			richIcon: U
		} = (0, A.n)(s),
		{ primaryColor: w, secondaryColor: B } = (0, T.Z)(j),
		H = (0, l.e7)([m.default], () => m.default.locale),
		{ streamPreviewUrl: G, stream: V } = (0, g.Z)(s),
		{ displayParticipants: F, participant1: W, participant2: z, numOtherParticipants: Y } = (0, E.Z)(s, 3),
		K = a.useCallback(
			(e) => {
				if (null == j || null == n || null == P) return;
				let t =
					Y > 0
						? (0, x.VY)({
								entry: s,
								channel: n,
								users: [W, z],
								countOthers: Y
							})
						: (0, x.HV)(s, n, P);
				return (0, I.SO)({
					entry: s,
					applicationImageSrc: j,
					avatarSrcs: F.map((e) => e.getAvatarURL(n.guild_id, 128)),
					description: t,
					timestamp: (0, C.yh)(s, H),
					colors: [w, B],
					channelId: e
				});
			},
			[j, n, F, s, H, Y, W, z, w, B, P]
		);
	if (null == P) return null;
	let q = null != s.extra.platform ? R[s.extra.platform] : null,
		X = (0, i.jsx)(v.Gk, {
			location: v.Gt.POPOUT,
			children: N.W.map((e, t) => (0, i.jsx)(e, { entry: s }, t))
		}),
		Q =
			null == G
				? (0, i.jsx)(S.wG, {
						thumbnailSrc: null !== (t = null != U ? U : k) && void 0 !== t ? t : j,
						thumbnailTitle: L,
						channel: n,
						headerIcons:
							null == q
								? null
								: (0, i.jsx)(Z.Z, {
										Icon: q,
										'aria-label': b.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM
									}),
						userDescription: (0, C.kr)(s)
							? b.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING
							: b.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
						title: y,
						subtitle: O,
						badges: X,
						entry: s
					})
				: (0, i.jsx)(S.jL, {
						thumbnailSrc: U,
						thumbnailTitle: L,
						channel: n,
						streamPreviewSrc: G,
						title: s.extra.game_name,
						subtitle: O,
						badges: X,
						userDescription: b.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING,
						entry: s,
						stream: V
					}),
		J =
			(0, o.Z)(D, M.xjy.JOIN) || (0, c.Z)(D)
				? (0, i.jsx)(d.Z, {
						activity: D,
						user: P,
						ButtonComponent: (e) =>
							(0, i.jsx)(S.Ll, {
								IconComponent: r.GameControllerIcon,
								...e
							})
					})
				: null,
		$ = [
			J,
			(0, u.Z)(D)
				? (0, i.jsx)(h.Z, {
						activity: D,
						ButtonComponent: (e) =>
							(0, i.jsx)(S.Ll, {
								IconComponent: r.EyeIcon,
								...e
							})
					})
				: null
		].filter(f.lm);
	return (0, i.jsxs)(S.yR, {
		children: [
			Q,
			(0, i.jsx)(S.St, {
				children: (0, i.jsx)(S.WT, {
					closePopout: _,
					user: P,
					channel: n,
					generateReactionImage: K,
					reactionImageAltText: (0, x.IS)(s, P),
					entry: s,
					requestId: p,
					buttons: $
				})
			})
		]
	});
};
