n(653041), n(47120);
var r,
	i,
	a,
	s,
	o = n(348327),
	l = n.n(o),
	u = n(392711),
	c = n.n(u),
	d = n(442837),
	_ = n(570140),
	E = n(317381),
	f = n(676035),
	h = n(594190),
	p = n(106301),
	I = n(406066),
	m = n(768419),
	T = n(695346),
	g = n(581883),
	S = n(199902),
	A = n(272053),
	N = n(77498),
	v = n(981631);
let O = [],
	R = {};
function C() {
	let e = [],
		t = T.Ok.getSetting();
	null != t &&
		('0' === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) &&
		e.push((0, f.I)(t));
	let n = I.Z.getActivities();
	e.push(...n);
	let r = A.Z.getStream();
	null != r &&
		e.push({
			type: v.IIU.STREAMING,
			...r
		});
	let i = new Set();
	c().forEach(R, (t) => {
		null != t.application_id && (i.add(t.name), e.push(t));
	});
	let a = h.ZP.getVisibleGame(),
		s = null != a && null != a.name && i.has(a.name),
		o = null != a && a.isLauncher,
		u = S.Z.getCurrentUserActiveStream();
	if (null != a && null != a.name && !(s || (o && !(null != u)))) {
		var d, _;
		e.push({
			type: v.IIU.PLAYING,
			name: a.name,
			application_id:
				null !== (_ = a.id) && void 0 !== _
					? _
					: null === (d = N.Z.getGameByName(a.name)) || void 0 === d
						? void 0
						: d.id,
			timestamps: { start: a.start }
		});
	}
	let E = m.Z.getActivity();
	null != E &&
		e.push({
			type: v.IIU.LISTENING,
			...E
		});
	let g = p.Z.getCurrentHangStatus();
	if (null != g) {
		let t = p.Z.getCustomHangStatus();
		e.push({
			type: v.IIU.HANG_STATUS,
			name: 'Hang Status',
			state: g,
			details: null == t ? void 0 : t.status,
			emoji: null == t ? void 0 : t.emoji
		});
	}
	!l()(O, e) && (O = e);
}
class y extends (r = d.ZP.Store) {
	initialize() {
		this.waitFor(h.ZP, E.ZP, A.Z, S.Z, m.Z, g.Z, p.Z, N.Z), this.syncWith([I.Z, p.Z], () => C());
	}
	getActivities() {
		return O;
	}
	getPrimaryActivity() {
		return O[0];
	}
	getApplicationActivity(e) {
		return this.findActivity((t) => t.application_id === e);
	}
	getCustomStatusActivity() {
		return this.findActivity((e) => e.type === v.IIU.CUSTOM_STATUS);
	}
	findActivity(e) {
		return O.find(e);
	}
	getApplicationActivities() {
		return R;
	}
}
(s = 'LocalActivityStore'),
	(a = 'displayName') in (i = y)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new y(_.Z, {
		OVERLAY_INITIALIZE: function (e) {
			let { localActivities: t } = e;
			(R = { ...t }), C();
		},
		START_SESSION: function () {
			(R = {}), C();
		},
		LOCAL_ACTIVITY_UPDATE: function (e) {
			let { socketId: t, activity: n } = e;
			if (l()(R[t], n)) return !1;
			null != n ? (R[t] = n) : delete R[t], C();
		},
		RPC_APP_DISCONNECTED: function (e) {
			let { socketId: t } = e;
			delete R[t], C();
		},
		RUNNING_GAMES_CHANGE: C,
		LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: C,
		SPOTIFY_PLAYER_STATE: C,
		SPOTIFY_PLAYER_PLAY: C,
		STREAMING_UPDATE: C,
		USER_CONNECTIONS_UPDATE: C,
		STREAM_START: C,
		STREAM_STOP: C,
		USER_SETTINGS_PROTO_UPDATE: C,
		EMBEDDED_ACTIVITY_CLOSE: C,
		UPDATE_HANG_STATUS: C
	}));
