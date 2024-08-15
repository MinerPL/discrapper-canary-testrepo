n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(442837),
	o = n(481060),
	c = n(287734),
	u = n(40851),
	d = n(358221),
	h = n(659580),
	m = n(793865),
	p = n(575175),
	_ = n(258609),
	f = n(74299),
	E = n(924301),
	g = n(459502),
	C = n(856691),
	I = n(889161),
	x = n(923973),
	T = n(829750),
	N = n(189771),
	v = n(294629),
	S = n(793319),
	Z = n(560688),
	A = n(390322),
	M = n(871499),
	b = n(386000),
	R = n(25827),
	j = n(314897),
	L = n(131951),
	P = n(496675),
	O = n(944486),
	y = n(594174),
	D = n(881824),
	k = n(471253),
	U = n(922482),
	w = n(200498),
	B = n(146085),
	H = n(88751),
	G = n(427679),
	V = n(71275),
	F = n(600518),
	W = n(485287),
	z = n(754277),
	Y = n(719100),
	K = n(184805),
	q = n(643632),
	X = n(270295),
	Q = n(981631),
	J = n(689938),
	$ = n(507372);
function ee(e) {
	let { channel: t, appContext: n } = e;
	if ((0, Y.Z)(t)) {
		(0, D.Us)(t, n);
		return;
	}
	c.default.disconnect();
}
function et(e) {
	var t, n;
	let { channel: a } = e,
		s = (0, K.Z)(a.id),
		[l, c] = (0, X.Z)(a),
		u = (0, r.e7)([P.Z], () => P.Z.can(Q.Plq.REQUEST_TO_SPEAK, a));
	if (s) return null;
	return (0, i.jsx)(M.d, {
		isActive: l,
		label:
			((t = l),
			(n = u),
			t
				? J.Z.Messages.AUDIENCE_LOWER_HAND
				: n
					? J.Z.Messages.AUDIENCE_RAISE_HAND_CTA
					: J.Z.Messages.AUDIENCE_RAISE_HAND_NO_PERMISSION),
		iconComponent: () =>
			(0, i.jsx)(o.HandRequestSpeakIcon, {
				size: 'md',
				color: 'currentColor',
				className: l ? $.raisedHandButtonIconActive : $.raisedHandButtonIcon
			}),
		onClick: c,
		className: $.buttonSpacing,
		disabled: !u && !l
	});
}
let en = a.memo(function (e) {
	let { channel: t } = e,
		n = (0, r.e7)([O.Z], () => O.Z.getVoiceChannelId() === t.id, [t.id]);
	return (0, i.jsxs)('div', {
		className: $.container,
		children: [
			(0, i.jsx)(el, { channelId: t.id }),
			n ? (0, i.jsx)(et, { channel: t }) : null,
			(0, i.jsx)(ea, { channel: t })
		]
	});
});
function ei(e) {
	let { onClick: t } = e;
	return (0, i.jsx)(o.Button, {
		size: o.Button.Sizes.MEDIUM,
		color: $.primaryButtonColor,
		className: l()($.buttonSpacing, $.buttonWithTextButton),
		onClick: t,
		children: (0, i.jsxs)('div', {
			className: $.buttonWithTextInnerContainer,
			children: [
				(0, i.jsx)(o.MicrophoneArrowRightIcon, {
					size: 'md',
					color: 'currentColor',
					className: $.buttonWithTextIcon
				}),
				(0, i.jsx)(o.Text, {
					color: 'none',
					variant: 'text-sm/medium',
					children: J.Z.Messages.MODERATOR_RAISE_OWN_HAND
				})
			]
		})
	});
}
function ea(e) {
	let { channel: t, onSelect: n } = e,
		a = (0, u.bp)(),
		{ canManageGuildEvent: s } = (0, I.XJ)(t),
		c = (0, r.e7)([G.Z], () => G.Z.getStageInstanceByChannel(t.id), [t.id]),
		d = (0, r.e7)([E.ZP], () => E.ZP.getGuildScheduledEvent(null == c ? void 0 : c.guild_scheduled_event_id)),
		h = (0, r.e7)([O.Z], () => O.Z.getVoiceChannelId() === t.id, [t.id]),
		{ suppress: m } = (0, v.Z)(t),
		p = j.default.getId(),
		[_] = (0, X.Z)(t),
		f = H.ZP.isModerator(p, t.id),
		g = (0, w.B)(t.id),
		C = s(d);
	return h
		? (f || C) && null != c
			? (0, i.jsx)(o.Popout, {
					renderPopout: (e) => {
						let { closePopout: s } = e;
						return (0, i.jsx)(A.Z, {
							children: (0, i.jsx)(o.Menu, {
								navId: 'exit-options',
								'aria-label': J.Z.Messages.SET_STATUS,
								onClose: s,
								onSelect: n,
								children: (0, i.jsx)(o.MenuItem, {
									id: 'end-stage',
									color: 'danger',
									action: () => (0, D.Ev)(t, a),
									label: J.Z.Messages.END_GUILD_EVENT_FOR_EVERYONE,
									icon: o.CircleXIcon
								})
							})
						});
					},
					align: 'center',
					position: 'top',
					animation: o.Popout.Animation.FADE,
					children: (e, n) => {
						let { onClick: s } = e,
							{ isShown: l } = n;
						return (0, i.jsx)(M.d, {
							className: $.buttonSpacing,
							label: J.Z.Messages.EXIT_EVENT_STAGE_OPTIONS_LABEL,
							color: 'red',
							iconComponent: () =>
								(0, i.jsx)(o.PhoneHangUpIcon, {
									size: 'md',
									color: 'currentColor'
								}),
							onClick: () =>
								ee({
									channel: t,
									appContext: a
								}),
							onPopoutClick: s,
							popoutOpen: l
						});
					}
				})
			: (m && !g) || _
				? (0, i.jsx)(o.Button, {
						size: o.Button.Sizes.MEDIUM,
						color: o.Button.Colors.RED,
						className: l()($.buttonSpacing, $.buttonWithTextButton),
						onClick: () =>
							ee({
								channel: t,
								appContext: a
							}),
						children: (0, i.jsxs)('div', {
							className: $.buttonWithTextInnerContainer,
							children: [
								(0, i.jsx)(o.PhoneHangUpIcon, {
									size: 'md',
									color: 'currentColor',
									className: $.buttonWithTextIcon
								}),
								(0, i.jsx)(o.Text, {
									color: 'none',
									variant: 'text-sm/medium',
									children: J.Z.Messages.AUDIENCE_DISCONNECT
								})
							]
						})
					})
				: (0, i.jsx)(M.d, {
						className: $.buttonSpacing,
						label: J.Z.Messages.EXIT_EVENT_STAGE_OPTIONS_LABEL,
						color: 'red',
						iconComponent: () =>
							(0, i.jsx)(o.PhoneHangUpIcon, {
								size: 'md',
								color: 'currentColor'
							}),
						onClick: () =>
							ee({
								channel: t,
								appContext: a
							})
					})
		: (0, i.jsx)(o.Button, {
				size: o.Button.Sizes.MEDIUM,
				color: o.Button.Colors.GREEN,
				className: l()($.buttonSpacing, $.buttonWithTextButton),
				onClick: () => {
					var e;
					return (e = t), void (0, U.TM)(e);
				},
				children: (0, i.jsxs)('div', {
					className: $.buttonWithTextInnerContainer,
					children: [
						(0, i.jsx)(o.PhoneCallIcon, {
							size: 'md',
							color: 'currentColor',
							className: $.buttonWithTextIcon
						}),
						(0, i.jsx)(o.Text, {
							color: 'none',
							variant: 'text-sm/medium',
							children: J.Z.Messages.STAGE_CHANNEL_JOIN
						})
					]
				})
			});
}
function es(e) {
	let { onClick: t } = e;
	return (0, i.jsx)(o.Button, {
		size: o.Button.Sizes.MEDIUM,
		color: $.primaryButtonColor,
		className: l()($.buttonSpacing, $.buttonWithTextButton),
		onClick: t,
		children: (0, i.jsxs)('div', {
			className: $.buttonWithTextInnerContainer,
			children: [
				(0, i.jsx)(o.GroupArrowDownIcon, {
					size: 'md',
					color: 'currentColor',
					className: $.buttonWithTextIcon
				}),
				(0, i.jsx)(o.Text, {
					color: 'none',
					variant: 'text-sm/medium',
					children: J.Z.Messages.MOVE_ME_TO_AUDIENCE
				})
			]
		})
	});
}
function el(e) {
	let { channelId: t } = e,
		n = (0, r.e7)([z.Z], () => z.Z.isMuted()),
		a = (0, W.pp)(t),
		s = (0, r.e7)([z.Z], () => z.Z.shouldPlay());
	return a
		? (0, i.jsx)(M.d, {
				isActive: n,
				className: $.buttonSpacing,
				label: n ? J.Z.Messages.STAGE_MUSIC_UNMUTE : J.Z.Messages.STAGE_MUSIC_MUTE,
				iconComponent: () =>
					n
						? (0, i.jsx)(o.MusicSlashIcon, {
								size: 'md',
								color: 'currentColor'
							})
						: (0, i.jsx)(o.MusicIcon, {
								size: 'md',
								color: 'currentColor'
							}),
				onClick: () => (0, F.v)(!n)
			})
		: (0, i.jsx)(M.d, {
				isActive: s,
				className: $.buttonSpacing,
				label: s ? J.Z.Messages.STAGE_MUSIC_MUTE : J.Z.Messages.STAGE_MUSIC_UNMUTE,
				iconComponent: () =>
					s
						? (0, i.jsx)(o.MusicIcon, {
								size: 'md',
								color: 'currentColor'
							})
						: (0, i.jsx)(o.MusicSlashIcon, {
								size: 'md',
								color: 'currentColor'
							}),
				onClick: () => (0, F.z)(!s)
			});
}
let er = a.memo(function (e) {
	let { channel: t } = e,
		{ suppress: n, selfMute: a, mute: s } = (0, v.Z)(t),
		c = (0, w.B)(t.id),
		u = (0, r.e7)([_.Z], () => null != _.Z.getAwaitingRemoteSessionInfo()),
		{ cameraUnavailable: E, enabled: g } = (0, x.Z)(),
		C = (0, N.Z)(t),
		{ limit: I, reachedLimit: M } = (0, T.Z)(t),
		j = (0, r.e7)([y.default], () => y.default.getCurrentUser()),
		P = (0, r.e7)([L.Z], () => (0, f.Z)(L.Z)),
		D = (0, r.e7)([O.Z], () => O.Z.getVoiceChannelId() === t.id, [t.id]),
		U = (0, r.e7)([d.Z], () => d.Z.getStreamParticipants(t.id)[0], [t.id]),
		B = (0, V.PK)(t.id),
		H = I > 0,
		G = (M && !B) || (null != U && U.user.id !== (null == j ? void 0 : j.id));
	if (null == j) return null;
	let F = (0, i.jsxs)(i.Fragment, {
		children: [
			(0, i.jsx)(o.Popout, {
				renderPopout: (e) => {
					let { closePopout: t } = e;
					return (0, i.jsx)(A.Z, { children: (0, i.jsx)(m.Z, { onClose: t }) });
				},
				position: 'top',
				align: 'center',
				animation: o.Popout.Animation.FADE,
				children: (e, t) => {
					let { onClick: n } = e,
						{ isShown: a } = t;
					return (0, i.jsx)(R.C, {
						centerButton: !0,
						hasPermission: C,
						enabled: g,
						cameraUnavailable: E,
						onChange: S.r,
						onCameraUnavailable: Z.Z,
						channelLimitReached: M,
						channelLimit: I,
						popoutOpen: a,
						onPopoutClick: n
					});
				}
			}),
			(0, i.jsx)(S.NZ, {
				channel: t,
				currentUser: j,
				exitFullScreen: () => null,
				canGoLive: P,
				hasPermission: C,
				disabled: G
			})
		]
	});
	return (0, i.jsxs)('div', {
		className: $.container,
		children: [
			(0, i.jsx)(el, { channelId: t.id }),
			D && (0, i.jsx)(et, { channel: t }),
			D && !n
				? (0, i.jsxs)('div', {
						className: l()($.avControls, $.buttonSpacing),
						children: [
							H && I > 0 && F,
							(0, i.jsx)(o.Popout, {
								renderPopout: (e) => {
									let { closePopout: t } = e;
									return (0, i.jsx)(A.Z, {
										children: (0, i.jsx)(h.default, {
											onClose: t,
											renderInputDevices: !0,
											renderOutputDevices: !0
										})
									});
								},
								align: 'center',
								position: 'top',
								animation: o.Popout.Animation.FADE,
								children: (e, t) => {
									let { onClick: l } = e,
										{ isShown: r } = t;
									return (0, i.jsx)(b.Z, {
										centerButton: !0,
										onPopoutClick: l,
										selfMute: a,
										serverMute: s,
										suppress: n,
										popoutOpen: r,
										onClick: () => (0, p.Z)(s, n),
										awaitingRemote: u
									});
								}
							})
						]
					})
				: null,
			D && c && n && (0, i.jsx)(ei, { onClick: () => (0, k.RK)(t, !1) }),
			D && !n && (0, i.jsx)(es, { onClick: () => (0, k.yi)(t) }),
			(0, i.jsx)(ea, { channel: t })
		]
	});
});
function eo(e) {
	let { channel: t } = e;
	return (0, i.jsxs)('div', {
		className: $.container,
		children: [(0, i.jsx)(el, { channelId: t.id }), (0, i.jsx)(ea, { channel: t })]
	});
}
t.Z = a.memo(function (e) {
	let { channel: t, isOnStartStageScreen: n } = e,
		a = (0, K.Z)(t.id),
		s = (0, w.B)(t.id),
		l = (0, r.e7)([P.Z], () => P.Z.can(B.yP, t), [t]),
		o = (0, q.Z)(t.id),
		c = (0, r.e7)([d.Z], () => (null != t ? d.Z.getSelectedParticipant(t.id) : null)),
		u = !o && null == c;
	return n
		? (0, i.jsx)(eo, { channel: t })
		: a || s
			? (0, i.jsxs)('div', {
					className: $.containerColumn,
					children: [
						(0, i.jsxs)('div', {
							className: $.eventPrompts,
							children: [
								u ? (0, i.jsx)(g.Z, { channelId: null == t ? void 0 : t.id }) : null,
								(0, i.jsx)('div', { className: $.separator }),
								u && l
									? (0, i.jsx)(C.Z, {
											highlight: !0,
											channel: t
										})
									: null,
								(0, i.jsx)('div', { className: $.separator })
							]
						}),
						(0, i.jsx)(er, { channel: t })
					]
				})
			: (0, i.jsx)(en, { channel: t });
});
