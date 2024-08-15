n.d(t, {
	T: function () {
		return R;
	},
	Z: function () {
		return j;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(442837),
	o = n(481060),
	c = n(475179),
	u = n(763520),
	d = n(358221),
	h = n(414910),
	m = n(266910),
	p = n(352978),
	_ = n(928518),
	f = n(204197),
	E = n(470956),
	C = n(314897),
	g = n(271383),
	I = n(131951),
	x = n(451478),
	T = n(5192),
	N = n(44136),
	v = n(981631),
	S = n(65154),
	Z = n(689938),
	A = n(149050);
let M = o.AvatarSizes.SIZE_80,
	b = o.AvatarSizes.SIZE_40;
function R(e) {
	let { channelId: t, userId: n } = e;
	return (0, E.Eu)(t, n)
		? (0, i.jsx)(o.Tooltip, {
				text: Z.Z.Messages.NOTICE_USER_DISCONNECTED,
				position: 'bottom',
				color: o.TooltipColors.GREY,
				children: (e) =>
					(0, i.jsx)('div', {
						...e,
						className: A.interactive,
						children: (0, i.jsx)(o.CircleWarningIcon, { color: o.tokens.colors.STATUS_WARNING_BACKGROUND })
					})
			})
		: null;
}
function j(e) {
	let { participant: t, channel: n, inCall: s, width: o, paused: E, selected: R, fit: j, onVideoResize: L, blocked: P, noVideoRender: O = !1, pulseSpeakingIndicator: y = !1 } = e,
		D = I.Z.getVideoComponent(),
		k = (0, r.e7)([C.default], () => C.default.getId()),
		{ user: U, streamId: w, speaking: B } = t,
		H = U.id === k,
		G = (0, N.ZP)(t),
		V = (0, r.e7)([x.Z], () => x.Z.isFocused()),
		F = (0, r.e7)([_.Z], () => _.Z.getWindowFocused(v.KJ3.CHANNEL_CALL_POPOUT)),
		W = (0, r.e7)([I.Z], () => null != U.id && I.Z.isLocalVideoDisabled(U.id, (0, h.Z)(t.type)), [U.id, t.type]),
		z = (0, r.e7)([g.ZP], () => g.ZP.isGuestOrLurker(n.guild_id, U.id)),
		Y = T.ZP.getName(n.getGuildId(), n.id, U) + (z ? ' '.concat(Z.Z.Messages.GUEST_NAME_SUFFIX) : ''),
		K = B && (F || V),
		q = o < 124 ? b : M,
		{ avatarSrc: X, avatarDecorationSrc: Q } = (0, f.Z)({
			user: U,
			guildId: n.guild_id,
			size: q,
			animateOnHover: !K
		}),
		J = (0, r.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id));
	return (a.useEffect(() => {
		n.isGuildStageVoice() && !G && (null == J ? void 0 : J.id) === U.id && c.Z.selectParticipant(n.id, null);
	}, [G]),
	s && !W && !O && G && !R && null != D && I.Z.supports(S.AN.VIDEO))
		? (0, i.jsx)(
				p.Z,
				{
					onResize: L,
					wrapperClassName: A.videoWrapper,
					className: A.content,
					mirror: H,
					streamId: w,
					videoComponent: D,
					fit: j,
					paused: E,
					videoSpinnerContext: U.id === k ? u.m.SELF_VIDEO : u.m.REMOTE_VIDEO,
					userId: U.id
				},
				w
			)
		: (0, i.jsx)('div', {
				className: l()(A.content, { [A.blockedAvatar]: P }),
				children: (0, i.jsx)(m.Z, {
					'aria-label': Y,
					src: X,
					avatarDecoration: Q,
					backgroundSrc: U.getAvatarURL(n.guild_id, 80),
					size: q,
					pulseSpeakingIndicator: y,
					speaking: B,
					userId: U.id
				})
			});
}
