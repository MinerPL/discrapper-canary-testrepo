n.d(t, {
	NZ: function () {
		return eS;
	},
	r: function () {
		return ev;
	}
}),
	n(47120);
var i,
	a,
	s = n(735250),
	l = n(470079),
	r = n(120356),
	o = n.n(r),
	c = n(512722),
	u = n.n(c),
	d = n(338545),
	h = n(848246),
	m = n(442837),
	p = n(481060),
	_ = n(846027),
	f = n(287734),
	E = n(872810),
	g = n(410575),
	C = n(40851),
	I = n(317381),
	x = n(596040),
	T = n(100527),
	N = n(906732),
	v = n(67212),
	S = n(757454),
	Z = n(158631),
	A = n(709369),
	M = n(552740),
	b = n(358221),
	R = n(887012),
	j = n(659580),
	L = n(793865),
	P = n(575175),
	O = n(258609),
	y = n(446226),
	D = n(594190),
	k = n(569545),
	U = n(74299),
	w = n(989941),
	B = n(803647),
	H = n(554747),
	G = n(95764),
	V = n(459502),
	F = n(386542),
	W = n(746599),
	z = n(455961),
	Y = n(611845),
	K = n(618158),
	q = n(390322),
	X = n(791592),
	Q = n(136995),
	J = n(402113),
	$ = n(197016),
	ee = n(386000),
	et = n(698877),
	en = n(25827),
	ei = n(199902),
	ea = n(523746),
	es = n(131951),
	el = n(944486),
	er = n(594174),
	eo = n(449224),
	ec = n(700785),
	eu = n(923973),
	ed = n(829750),
	eh = n(189771),
	em = n(294629),
	ep = n(304745),
	e_ = n(985370),
	ef = n(544384),
	eE = n(560688),
	eg = n(127608),
	eC = n(76021),
	eI = n(173507),
	ex = n(981631),
	eT = n(354459),
	eN = n(177480);
function ev(e, t) {
	if (es.Z.isVideoEnabled() === e) return;
	let n = () => _.Z.setVideoEnabled(e);
	e ? (0, eI.Z)(n, t) : n();
}
function eS(e) {
	let { channel: t, currentUser: n, exitFullScreen: i, canGoLive: a, hasPermission: r, disabled: o } = e,
		c = (0, C.bp)(),
		u = (0, m.Wu)([ei.Z], () => ei.Z.getAllActiveStreams()).find((e) => e.ownerId === n.id),
		{ activated: d, hqStreamingState: _ } = (0, F.k)(h.q.STREAM_HIGH_QUALITY),
		f = null != u && d,
		g = l.useRef(null),
		I = t.getGuildId(),
		x = l.useCallback(() => {
			if ((null == i || i(), !a)) return (0, eg.Z)();
			(0, eC.Z)(I, t.id, ex.ZY5.GUILD_CHANNEL);
		}, [I, t.id, a, i]),
		T = (0, m.e7)([D.ZP, eo.Z], () => (0, w.Z)(D.ZP, eo.Z)),
		N = (0, Z.ZP)(),
		A = (0, S.Z)() && null != T,
		b = () => {
			A &&
				(null == u
					? (0, E.tE)({
							channelId: t.id,
							pid: null == T ? void 0 : T.pid
						})
					: (0, v.v$)((0, k.V9)(u), null == T ? void 0 : T.pid));
		},
		R = () => {
			if (A) {
				(0, M.D)(b);
				return;
			}
			if (a) {
				x();
				return;
			}
			(0, eg.Z)();
		},
		j = () => {
			if (N) {
				(0, M.Z)(() => (0, B.Z)(u));
				return;
			}
			(0, B.Z)(u);
		},
		L = W.pM,
		P = W.qA,
		O = (e, t) => {
			let { onClick: n, ...i } = null != e ? e : { onClick: void 0 },
				a = null != u && !N;
			return (0, s.jsx)(et.O, {
				...i,
				centerButton: !0,
				disabled: o || !r,
				className: eN.controlButton,
				hasPermission: r,
				streamActive: null != u,
				isSelfStream: !0,
				onPopoutClick: a
					? function (e) {
							_.hqStreamingIsEnabled && !_.hqStreamingPopoutDismissed && L(), null == n || n(e);
						}
					: null,
				popoutOpen: t,
				shouldShowTooltip: !t,
				premiumGlow: f && _.hqStreamingIsEnabled,
				buttonRef: g,
				onClick: null != u ? j : R
			});
		};
	return N
		? O()
		: (0, s.jsxs)(s.Fragment, {
				children: [
					f && _.hqStreamingIsEnabled
						? (0, s.jsx)(Y.$, {
								buttonRef: g,
								dismissed: _.hqStreamingPopoutDismissed,
								onDismiss: L
							})
						: (0, s.jsx)(z.b, {
								channel: t,
								buttonRef: g,
								dismissed: _.hqStreamingOptInPopoutDismissed,
								onDismiss: P
							}),
					(0, s.jsx)(K.Z, {
						children: (0, s.jsx)(p.Popout, {
							renderPopout: (e) => {
								let { closePopout: i } = e;
								return (0, s.jsx)(q.Z, {
									children: (0, s.jsx)(ef.Z, {
										channel: t,
										currentUser: n,
										activeStreams: null != u ? [u] : [],
										handleGoLive: x,
										onClose: i,
										appContext: c
									})
								});
							},
							position: 'top',
							align: 'center',
							animation: p.Popout.Animation.FADE,
							children: (e, t) => {
								let { ...n } = e,
									{ isShown: i } = t;
								return (0, s.jsx)('div', { children: O(n, i) });
							}
						})
					})
				]
			});
}
function eZ(e) {
	let { channel: t } = e,
		n = t.getGuildId();
	return (0, x.Z)(n, t.id)
		? (0, s.jsx)('div', {
				className: eN.buttonContainer,
				children: (0, s.jsx)(ep.M, { channel: t })
			})
		: null;
}
((a = i || (i = {})).ACTIVITY = 'ACTIVITY'),
	(a.STREAM = 'STREAM'),
	(a.CALL = 'CALL'),
	(a.EVENT = 'EVENT'),
	(a.BROADCAST = 'BROADCAST');
let eA = l.memo(function (e) {
	let { connectedActivityApplicationId: t, currentUser: n, onDisconnectCall: i, channel: a } = e,
		r = (0, m.e7)([b.Z], () => b.Z.getSelectedParticipant(a.id)),
		{ reducedMotion: o } = l.useContext(p.AccessibilityPreferencesContext),
		[c, u] = l.useState(!1),
		h = null == r ? void 0 : r.id,
		_ = (0, m.e7)([ei.Z], () => (null != h ? ei.Z.getActiveStreamForStreamKey(h) : null), [h]),
		g = (null == r ? void 0 : r.type) === eT.fO.STREAM && null != _ && _.ownerId !== (null == n ? void 0 : n.id),
		C = (0, m.Wu)([ei.Z], () =>
			ei.Z.getAllActiveStreamsForChannel(a.id).filter((e) => {
				let { ownerId: t } = e;
				return t !== (null == n ? void 0 : n.id);
			})
		),
		I = (0, H.qY)(a.id),
		x = (0, Z.zW)(a.id),
		T = l.useCallback(() => {
			if ((null == r ? void 0 : r.type) === eT.fO.ACTIVITY && r.id === t) return 'ACTIVITY';
			if (g) return 'STREAM';
			if (null != I) return 'EVENT';
			return 'CALL';
		}, [r, t, g, I]),
		[N, v] = l.useState(T()),
		S = (0, p.useSpring)(
			{
				opacity: c ? 0.2 : 1,
				transform: c && !o.enabled ? 'scale(0.7)' : 'scale(1)',
				config: {
					mass: 2,
					tension: c ? 600 : 1000,
					friction: 45,
					precision: 0.01,
					clamp: c
				},
				onRest: () => {
					v(T()), u(!1);
				}
			},
			'animate-always'
		);
	l.useEffect(() => {
		T() !== N && u(!0);
	}, [N, T]);
	let M = l.useCallback(() => {
			if (null != _) (0, E.g)((0, k.V9)(_));
			else for (let e of C) (0, E.g)((0, k.V9)(e));
		}, [C, _]),
		R = (e, t) => {
			let l = {
				centerButton: !0,
				className: eN.controlButton,
				popoutOpen: e
			};
			switch (N) {
				case 'ACTIVITY':
					if (null == r || null == n) return;
					return (0, s.jsx)(J.Z, {
						...l,
						applicationId: r.id,
						color: 'red',
						channelId: a.id,
						onPopoutClick: C.length > 0 ? t : null
					});
				case 'STREAM':
					return (0, s.jsx)(et.O, {
						...l,
						hasPermission: !0,
						streamActive: !0,
						color: 'red',
						onClick: M,
						onPopoutClick: C.length > 1 ? t : null,
						isSelfStream: !1
					});
				case 'CALL':
					return (0, s.jsx)($.Z, {
						...l,
						color: 'red',
						onClick: () => (null == i ? void 0 : i()),
						onPopoutClick: C.length > 0 ? t : null,
						channel: a
					});
				case 'EVENT':
					return (0, s.jsx)(G.Z, {
						channelId: a.id,
						onClick: () => {
							f.default.disconnect(), null == i || i();
						}
					});
			}
		};
	return (0, s.jsx)(p.Popout, {
		renderPopout: (e) => {
			let { closePopout: t } = e;
			return x
				? (0, s.jsx)(A.Z, { onClose: t })
				: (0, s.jsx)(ef.Z, {
						channel: a,
						currentUser: n,
						activeStreams: C,
						handleGoLive: ex.VqG,
						hideSelfOptions: !0,
						onClose: t
					});
		},
		position: 'top',
		align: 'center',
		animation: p.Popout.Animation.FADE,
		children: (e, t) => {
			let { onClick: n } = e,
				{ isShown: i } = t;
			return (0, s.jsx)(d.animated.div, {
				style: S,
				children: R(i, n)
			});
		}
	});
});
function eM(e) {
	let { channel: t, cameraUnavailable: n, hasCameraPermission: i, currentUser: a } = e,
		r = (0, C.bp)(),
		{ reachedLimit: c, limit: u } = (0, ed.Z)(t),
		d = l.useCallback(() => {
			(0, eI.Z)(() => f.default.selectVoiceChannel(t.id, !0), r);
		}, [t.id, r]),
		h = l.useCallback(() => {
			n ? (0, eE.Z)() : d();
		}, [n, d]),
		p = (0, m.e7)([ea.Z], () => {
			let e = ea.Z.getCall(t.id);
			return (null == e ? void 0 : e.ringing.includes(a.id)) === !0;
		});
	return (0, s.jsxs)(s.Fragment, {
		children: [
			(0, s.jsx)(en.C, {
				enabled: !0,
				centerButton: !0,
				join: !0,
				color: 'green',
				channelLimitReached: c,
				channelLimit: u,
				channel: t,
				cameraUnavailable: n,
				hasPermission: i,
				onCameraUnavailable: h,
				className: eN.controlButton,
				iconClassName: eN.__invalid_joinIcon,
				onChange: d
			}),
			(0, s.jsx)(Q.Z, {
				centerButton: !0,
				color: 'green',
				channel: t,
				className: o()(eN.controlButton, eN.__invalid_lastButton)
			}),
			p
				? (0, s.jsx)(X.Z, {
						color: 'red',
						channel: t,
						className: eN.controlButton
					})
				: null
		]
	});
}
t.ZP = function (e) {
	let { channel: t, className: n, onDisconnectCall: i, exitFullScreen: a } = e,
		l = (0, m.e7)([er.default], () => {
			let e = er.default.getCurrentUser();
			return u()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
		}),
		{ cameraUnavailable: r, enabled: c } = (0, eu.Z)(),
		d = (0, eh.Z)(t),
		{ suppress: h, selfMute: _, mute: f } = (0, em.Z)(t),
		{ canGoLive: E } = (0, m.cj)([es.Z], () => ({ canGoLive: (0, U.Z)(es.Z) })),
		C = (0, y.Z)(),
		x = (0, m.e7)([O.Z], () => null != O.Z.getAwaitingRemoteSessionInfo()),
		v = null != C,
		S = (0, m.e7)([el.Z], () => {
			var e;
			return (null !== (e = null == C ? void 0 : C.channelId) && void 0 !== e ? e : el.Z.getVoiceChannelId()) === t.id;
		}),
		Z = (0, R.Z)(t, !0),
		A = (0, m.e7)([I.ZP], () => {
			let e = I.ZP.getSelfEmbeddedActivityForChannel(t.id);
			return null != e ? e.applicationId : null;
		}),
		{ reachedLimit: M, limit: b } = (0, ed.Z)(t),
		{ analyticsLocations: D } = (0, N.ZP)(T.Z.VOICE_CONTROL_TRAY);
	if (!S)
		return (0, s.jsx)(N.Gt, {
			value: D,
			children: (0, s.jsx)(eM, {
				channel: t,
				cameraUnavailable: r,
				hasCameraPermission: d,
				currentUser: l
			})
		});
	let k =
		ec.BT({
			permission: ex.Plq.ADD_REACTIONS,
			user: l,
			context: t
		}) &&
		!t.isPrivate() &&
		!Z;
	return (0, s.jsx)(N.Gt, {
		value: D,
		children: (0, s.jsxs)(g.Z, {
			section: ex.jXE.VOICE_CONTROL_TRAY,
			children: [
				(0, s.jsx)('div', {
					className: eN.eventPromptsContainer,
					children: (0, s.jsx)(V.Z, { channelId: t.id })
				}),
				(0, s.jsxs)('div', {
					className: o()(eN.wrapper, n),
					children: [
						!v &&
							(0, s.jsx)(p.Popout, {
								renderPopout: (e) => {
									let { closePopout: t } = e;
									return (0, s.jsx)(q.Z, { children: (0, s.jsx)(L.Z, { onClose: t }) });
								},
								position: 'top',
								align: 'center',
								animation: p.Popout.Animation.FADE,
								children: (e, t) => {
									let { onClick: n } = e,
										{ isShown: i } = t;
									return (0, s.jsx)(en.C, {
										centerButton: !0,
										hasPermission: d,
										className: eN.controlButton,
										enabled: c,
										cameraUnavailable: r,
										onChange: ev,
										onCameraUnavailable: eE.Z,
										channelLimitReached: M,
										channelLimit: b,
										popoutOpen: i,
										onPopoutClick: n
									});
								}
							}),
						!v && (0, s.jsx)(eZ, { channel: t }),
						!v &&
							(0, s.jsx)(eS, {
								channel: t,
								currentUser: l,
								exitFullScreen: a,
								canGoLive: E,
								hasPermission: d
							}),
						(0, s.jsx)(p.Popout, {
							renderPopout: (e) => {
								let { closePopout: t } = e;
								return (0, s.jsx)(q.Z, {
									children: (0, s.jsx)(j.default, {
										onClose: t,
										renderInputDevices: !0,
										renderOutputDevices: !0,
										renderInputModes: !0
									})
								});
							},
							align: 'center',
							position: 'top',
							animation: p.Popout.Animation.FADE,
							children: (e, t) => {
								let { onClick: n } = e,
									{ isShown: i } = t;
								return (0, s.jsx)(ee.Z, {
									centerButton: !0,
									onPopoutClick: v ? null : n,
									className: eN.controlButton,
									selfMute: _,
									serverMute: f,
									suppress: h,
									popoutOpen: i,
									awaitingRemote: x,
									onClick: () => (0, P.Z)(f, h)
								});
							}
						}),
						k && !v
							? (0, s.jsx)('div', {
									className: eN.buttonContainer,
									children: (0, s.jsx)(e_.Z, { channel: t })
								})
							: null,
						(0, s.jsx)(eA, {
							connectedActivityApplicationId: A,
							currentUser: l,
							channel: t,
							onDisconnectCall: i
						})
					]
				})
			]
		})
	});
};
