n.d(t, {
	T: function () {
		return T;
	}
}),
	n(47120),
	n(653041);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(392711),
	o = n(442837),
	c = n(475179),
	u = n(358221),
	d = n(306680),
	h = n(944486),
	m = n(111583),
	p = n(459273),
	_ = n(880831),
	f = n(774168),
	E = n(871499),
	C = n(981631),
	g = n(689938);
function I(e) {
	let t = (0, o.e7)([m.Z], () => !(0, r.isEmpty)(m.Z.getTypingUsers(e)), [e]),
		n = (0, o.e7)([h.Z], () => h.Z.getVoiceChannelId() === e, [e]),
		{ unreadCount: i, mentionCount: a } = (0, o.cj)(
			[d.ZP],
			() => ({
				unreadCount: d.ZP.getUnreadCount(e),
				mentionCount: d.ZP.getMentionCount(e)
			}),
			[e]
		);
	return {
		unreadCount: i,
		mentionCount: a,
		voiceChannelIsSelected: n,
		isTyping: t
	};
}
function x(e) {
	let { className: t, channelId: n } = e,
		{ unreadCount: a, mentionCount: s, isTyping: l, voiceChannelIsSelected: r } = I(n);
	return (0, i.jsx)(f.Z, {
		className: t,
		unreadCount: a,
		mentionCount: s,
		isTyping: l,
		canBadge: r
	});
}
function T(e) {
	let t,
		{ channelId: n, className: s, showingClassName: r, onClick: d, inPopout: h, showRequestToSpeakSidebar: m, toggleRequestToSpeakSidebar: f, ...T } = e,
		{ disabled: N } = T,
		v = a.useRef(null),
		S = (0, o.e7)([u.Z], () => u.Z.getChatOpen(n), [n]),
		{
			isShowing: Z,
			unreadCount: A,
			mentionCount: M
		} = (function (e) {
			let { unreadCount: t, mentionCount: n, isTyping: i } = I(e),
				[s, l] = a.useState(!1);
			return (
				a.useEffect(() => {
					l(t > 0);
					let e = setTimeout(() => {
						l(!1);
					}, _.z);
					return () => {
						clearTimeout(e), l(!1);
					};
				}, [t]),
				{
					isShowing: s || n > 0 || i,
					unreadCount: t,
					mentionCount: n
				}
			);
		})(n),
		b = a.useCallback(() => {
			null == d || d(), !S && m && (null == f || f()), c.Z.updateChatOpen(n, !S);
		}, [n, S, d, m, f]),
		R = a.useCallback(
			(e) => {
				let { className: t } = e;
				return (0, i.jsx)(x, {
					className: t,
					channelId: n
				});
			},
			[n]
		),
		j = a.useCallback(() => {
			var e;
			null === (e = v.current) || void 0 === e || e.focus();
		}, []);
	(0, p.yp)({
		event: C.CkL.FOCUS_CHAT_BUTTON,
		handler: N ? null : j
	});
	let [L, P] = a.useState(!1),
		O = a.useCallback(() => {
			h && P(!0);
		}, [h]);
	(0, p.yp)({
		event: C.CkL.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP,
		handler: O
	}),
		a.useEffect(() => {
			let e;
			return (
				L &&
					(e = setTimeout(() => {
						P(!1);
					}, 3000)),
				() => {
					clearTimeout(e);
				}
			);
		}, [L]);
	let y = [(t = h && N ? g.Z.Messages.TEXT_IN_VOICE_POPOUT_DISABLED : S ? g.Z.Messages.VIDEO_CALL_HIDE_CHAT : g.Z.Messages.VIDEO_CALL_SHOW_CHAT)];
	return (
		M > 0 && y.push(g.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({ mentionCount: M })),
		A > 0 && y.push(g.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD),
		(0, i.jsx)(E.Z, {
			buttonRef: v,
			onClick: b,
			label: t,
			'aria-label': y.join(', '),
			iconComponent: R,
			tooltipPosition: 'bottom',
			wrapperClassName: l()(s, null != r && { [r]: Z }),
			forceTooltipOpen: L,
			...T
		})
	);
}
