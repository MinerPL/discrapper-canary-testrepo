var r = n(735250),
	i = n(470079),
	a = n(392711),
	s = n.n(a),
	o = n(792986),
	l = n(442837),
	u = n(481060),
	c = n(317381),
	d = n(966302),
	_ = n(378364),
	E = n(197344),
	f = n(474873),
	h = n(292959),
	p = n(944486),
	I = n(246946),
	m = n(340895),
	T = n(557177),
	g = n(918559),
	S = n(871465);
let A = {
		transform: 'scale(0.7)',
		opacity: 0
	},
	N = {
		transform: 'scale(1)',
		opacity: 1
	};
t.Z = () => {
	let { connectedActivityChannelId: e, activityPanelMode: t } = (0, l.cj)([c.ZP], () => ({
			connectedActivityChannelId: c.ZP.getConnectedActivityChannelId(),
			activityPanelMode: c.ZP.getActivityPanelMode()
		})),
		{ currentChannelId: n, selectedVoiceChannelId: a } = (0, l.cj)([p.Z], () => ({
			currentChannelId: p.Z.getChannelId(),
			selectedVoiceChannelId: p.Z.getVoiceChannelId()
		})),
		v = (0, l.Wu)([m.Z], () =>
			m.Z.getIncomingCalls().filter((r) => {
				let { channel: i } = r,
					s = e === i.id && a !== i.id && t === g.Ez.PANEL;
				return n !== i.id || s;
			})
		),
		O = (0, l.e7)([m.Z], () => m.Z.hasIncomingCalls()),
		R = (0, l.e7)([h.Z], () => h.Z.isSoundDisabled('call_ringing')),
		C = E.Z.useIsRingtoneEligible(),
		y = E.Z.useIsRingtoneDisabled(),
		D = (0, l.e7)([I.Z], () => I.Z.disableSounds),
		L = (0, l.e7)([f.Z], () => f.Z.getSoundpack()),
		b = i.useRef(!1),
		M = (0, o.Z)(() => {
			let e = 'call_ringing';
			return C && !y
				? (0, T.tu)(_.Z.ringtone, e)
				: L === S.YC.CLASSIC
					? (0, T.tu)(
							500 !== s().random(1, 1000)
								? 'call_ringing'
								: s().sample(['call_ringing_beat', 'call_ringing_snow_halation']),
							e
						)
					: (0, T.uk)('call_ringing', L);
		}, [L, y, C]);
	return (
		i.useEffect(
			() => () => {
				M.stop();
			},
			[M]
		),
		i.useEffect(() => {
			if (D || R) {
				b.current && (M.stop(), (b.current = !1));
				return;
			}
			O && !b.current ? (M.loop(), (b.current = !0)) : !O && b.current && (M.stop(), (b.current = !1));
		}, [R, D, O, M]),
		(0, u.useTransition)(v, {
			keys: (e) => {
				var t;
				return null === (t = e.channel) || void 0 === t ? void 0 : t.id;
			},
			enter: {
				from: A,
				to: N
			},
			leave: A,
			config: {
				mass: 1,
				tension: 500,
				friction: 18,
				clamp: !0
			}
		})((e, t) =>
			(0, r.jsx)(d.Z, {
				...t,
				animatedStyle: e
			})
		)
	);
};
