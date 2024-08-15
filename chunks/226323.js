n.d(t, {
	Z: function () {
		return N;
	}
}),
	n(653041),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(442837),
	o = n(481060),
	c = n(239091),
	d = n(586902),
	u = n(512384),
	_ = n(184301),
	E = n(103575),
	h = n(314897),
	m = n(131951),
	I = n(51144),
	g = n(524484),
	p = n(689938),
	T = n(173744);
let S = { offset: 2 },
	f = {
		serverDeaf: {
			icon: o.HeadphonesDenyIcon,
			colorize: !0,
			getStatus: () => p.Z.Messages.SERVER_DEAFENED
		},
		serverMute: {
			icon: o.MicrophoneDenyIcon,
			colorize: !0,
			getStatus: () => p.Z.Messages.SERVER_MUTED
		},
		deaf: {
			icon: o.HeadphonesSlashIcon,
			colorize: !1,
			getStatus: () => p.Z.Messages.VOICE_CHANNEL_DEAFENED
		},
		mute: {
			icon: o.MicrophoneSlashIcon,
			colorize: !1,
			getStatus: () => p.Z.Messages.VOICE_CHANNEL_MUTED
		},
		localMute: {
			icon: o.MicrophoneDenyIcon,
			colorize: !1,
			getStatus: () => p.Z.Messages.VOICE_CHANNEL_LOCAL_MUTED
		}
	};
function C(e) {
	var t, a;
	let { channel: s, user: h, nick: C, mute: N, deaf: A, serverMute: v, serverDeaf: Z } = e,
		L = (0, l.e7)([m.Z], () => m.Z.isLocalMute(h.id)),
		O = (0, d.Z)({
			userId: h.id,
			checkSoundSharing: !0
		}),
		R = null !== (t = s.getGuildId()) && void 0 !== t ? t : void 0,
		x = h.getAvatarURL(s.guild_id, 24),
		b = null != C ? C : I.ZP.getName(h),
		{
			icon: P,
			colorize: M,
			getStatus: D
		} = null !==
			(a = (function (e) {
				let { serverDeaf: t, deaf: n, serverMute: i, mute: a, localMute: s } = e;
				if (t) return f.serverDeaf;
				if (n) return f.deaf;
				if (i) return f.serverMute;
				else if (s) return f.localMute;
				else if (a) return f.mute;
			})({
				serverDeaf: Z,
				deaf: A,
				serverMute: v,
				mute: N,
				localMute: L
			})) && void 0 !== a
			? a
			: {},
		y =
			null != D
				? p.Z.Messages.VOICE_PANEL_USER_TOOLTIP.format({
						userName: b,
						status: D()
					})
				: b;
	function j(e) {
		null != R
			? (0, c.jW)(e, async () => {
					let { default: e } = await Promise.all([n.e('79695'), n.e('70474'), n.e('12435'), n.e('46563')]).then(
						n.bind(n, 757387)
					);
					return (t) =>
						(0, i.jsx)(e, {
							...t,
							user: h,
							guildId: R,
							channel: s,
							showMediaItems: !0
						});
				})
			: (0, c.jW)(e, async () => {
					let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('740')]).then(n.bind(n, 881351));
					return (t) =>
						(0, i.jsx)(e, {
							...t,
							user: h,
							showMediaItems: !0
						});
				});
	}
	return (0, i.jsx)(o.Popout, {
		preload: () =>
			(0, _.Z)(h.id, h.getAvatarURL(R, 80), {
				guildId: R,
				channelId: s.id
			}),
		position: 'top',
		renderPopout: (e) =>
			(0, i.jsx)(E.Z, {
				location: 'RTCConnectionVoiceUsers',
				userId: h.id,
				guildId: R,
				channelId: s.id,
				...e
			}),
		children: (e) =>
			(0, i.jsx)(o.Tooltip, {
				text: y,
				children: (t) =>
					(0, i.jsx)(o.Clickable, {
						...t,
						...e,
						className: T.avatarContainer,
						onContextMenu: j,
						focusProps: S,
						children: (0, i.jsx)(u.Z, {
							shakeLocation: g.oZ.VOICE_USER,
							isShaking: O,
							children: (0, i.jsx)('div', {
								className: r()(T.avatar, { [T.speaking]: O }),
								style: { backgroundImage: 'url('.concat(x, ')') },
								children:
									null != P
										? (0, i.jsx)(P, {
												className: r()(T.avatarIconOverlay, { [T.avatarIconRed]: M }),
												color: 'currentColor',
												size: 'xs'
											})
										: null
							})
						})
					})
			})
	});
}
function N(e) {
	let { voiceStates: t, channel: n, className: s } = e,
		[c, d] = a.useState(!1),
		u = c ? o.MinusIcon : o.PlusSmallIcon,
		_ = (0, i.jsx)(o.CircleIconButton, {
			className: T.expandButton,
			onClick: () => d(!c),
			color: o.CircleIconButtonColors.PRIMARY,
			size: o.CircleIconButtonSizes.SIZE_24,
			tooltip: c ? p.Z.Messages.VOICE_PANEL_HIDE_EXTRAS : p.Z.Messages.VOICE_PANEL_SHOW_EXTRAS,
			icon: (0, i.jsx)(u, {
				size: 'xs',
				color: 'currentColor'
			}),
			focusProps: S
		}),
		E = (0, l.e7)([h.default], () => h.default.getId(), []),
		[m, I] = (function (e, t) {
			let n = [];
			for (let i of e) {
				if (!(i.user.id === t || n.some((e) => e.user.id === i.user.id))) {
					if (n.length >= 7) return [n, !0];
					n.push(i);
				}
			}
			return [n, !1];
		})(t, E),
		g = I && c ? t : m;
	return g.length <= 0
		? null
		: (0, i.jsx)(o.ScrollerThin, {
				className: r()(T.scroller, s),
				fade: !0,
				children: (0, i.jsxs)('div', {
					className: T.voiceUsers,
					role: 'group',
					'aria-label': p.Z.Messages.VOICE_PANEL_USERS_A11Y_LABEL,
					children: [
						g.map((e) => {
							let { user: t, nick: a, voiceState: s } = e;
							return t.id !== E
								? (0, i.jsx)(
										C,
										{
											channel: n,
											user: t,
											nick: a,
											mute: s.isVoiceMuted(),
											deaf: s.isVoiceDeafened(),
											video: s.selfVideo,
											serverMute: s.mute,
											serverDeaf: s.deaf
										},
										t.id
									)
								: null;
						}),
						I ? _ : null
					]
				})
			});
}
