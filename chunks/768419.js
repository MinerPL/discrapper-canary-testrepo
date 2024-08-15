let r, i, a;
n(47120), n(653041), n(724458), n(757143), n(789020);
var s,
	o,
	l,
	u = n(392711),
	c = n.n(u),
	d = n(261470),
	_ = n(442837),
	E = n(902704),
	f = n(846519),
	h = n(570140),
	p = n(586902),
	m = n(726542),
	I = n(524331),
	T = n(710845),
	g = n(594190),
	S = n(314897),
	A = n(553795),
	N = n(517100),
	v = n(158776),
	O = n(606304),
	R = n(979651),
	C = n(626135),
	y = n(81063),
	D = n(70956),
	L = n(823379),
	b = n(781518),
	M = n(616922),
	P = n(981631);
function U(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
let w = m.Z.get(P.ABu.SPOTIFY),
	x = 'hm://pusher/v1/connections/',
	G = 30 * D.Z.Millis.SECOND,
	k = 30 * D.Z.Millis.SECOND,
	B = 5 * D.Z.Millis.MINUTE,
	F = 5 * D.Z.Millis.SECOND,
	V = 1.5 * D.Z.Millis.SECOND,
	H = 1 * D.Z.Millis.MINUTE,
	Z = 3 * D.Z.Millis.SECOND;
((l = s || (s = {})).PLAYER_STATE_CHANGED = 'PLAYER_STATE_CHANGED'), (l.DEVICE_STATE_CHANGED = 'DEVICE_STATE_CHANGED');
let Y = {
		MESSAGE: 'message',
		PING: 'ping',
		PONG: 'pong'
	},
	j = 'single',
	W = new T.Z('Spotify'),
	K = new f.V7(),
	z = new f.V7(),
	q = new f.V7(),
	Q = new f.V7(),
	X = new f.V7(),
	$ = {},
	J = {},
	ee = {},
	et = !1,
	en = null;
function er() {
	for (let e in $) {
		let t = $[e];
		if (!t.connected || null == J[e]) continue;
		let n = J[e].find((e) => e.is_active);
		if (null != n)
			return {
				socket: t,
				device: n
			};
	}
}
function ei(e) {
	h.Z.dispatch({
		type: 'SPOTIFY_PLAYER_STATE',
		accountId: e,
		track: null,
		volumePercent: 0,
		isPlaying: !1,
		repeat: !1,
		position: 0,
		context: null
	});
}
function ea(e) {
	return v.Z.findActivity(e, (e) => null != e.party && null != e.party.id && (0, M.Ps)(e.party.id));
}
let es = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
class eo {
	get connected() {
		return null != this.socket && es.has(this.socket.readyState);
	}
	connect() {
		!this.connected &&
			!this._requestedConnect &&
			(W.info('WS Connecting'),
			(this._requestedDisconnect = !1),
			(this._requestedConnect = !0),
			em(this.accountId, this.accessToken)
				.then(() => {
					(this._requestedConnect = !1), (this.socket = new WebSocket(''.concat('wss://dealer.spotify.com/?access_token=').concat(this.accessToken))), (this.socket.onopen = this.handleOpen.bind(this)), (this.socket.onmessage = this.handleMessage.bind(this)), (this.socket.onclose = this.socket.onerror = this.handleClose.bind(this));
				})
				.catch((e) => {
					W.error(e), (this._requestedConnect = !1), this.handleClose();
				}));
	}
	disconnect() {
		(this._requestedDisconnect = !0), this.backoff.cancel();
		try {
			var e;
			null === (e = this.socket) || void 0 === e || e.close();
		} catch (e) {}
	}
	ping() {
		var e;
		this.connected && (null === (e = this.socket) || void 0 === e || e.send(JSON.stringify({ type: Y.PING })));
	}
	handleOpen() {
		W.info('WS Connected'), this.backoff.succeed(), this.pingInterval.start(G, () => this.ping()), (0, b.Ai)(this.accountId, this.accessToken), (0, b.PW)(this.accountId, this.accessToken);
	}
	handleMessage(e) {
		let { data: t } = e;
		if ('string' != typeof t) return;
		let { type: n, uri: r, payloads: i } = JSON.parse(t);
		switch (n) {
			case Y.MESSAGE:
				if ('string' == typeof r && r.startsWith(x)) (this.connectionId = decodeURIComponent(r.split(x)[1])), (0, b.am)(this.accountId, this.accessToken, this.connectionId);
				else if (Array.isArray(i)) {
					for (let { events: e } of i) if (null != e) for (let t of e) this.handleEvent(t);
				}
			case Y.PONG:
		}
	}
	handleClose() {
		if ((this.pingInterval.stop(), !this._requestedDisconnect))
			try {
				let e = this.backoff.fail(() => {
					!this._requestedDisconnect && this.connect();
				});
				W.info('WS Disconnected. Next retry in '.concat(Math.round(e), 'ms'));
			} catch (e) {}
	}
	handleEvent(e) {
		let { type: t, event: n } = e;
		switch (t) {
			case 'PLAYER_STATE_CHANGED':
				null != n && null != n.state && ep(this.accountId, this.accessToken, n.state);
				break;
			case 'DEVICE_STATE_CHANGED':
				this.handleDeviceStateChange();
		}
	}
	constructor(e, t) {
		U(this, 'accessToken', void 0),
			U(this, 'accountId', void 0),
			U(this, 'connectionId', void 0),
			U(this, 'isPremium', void 0),
			U(this, 'pingInterval', void 0),
			U(this, 'backoff', void 0),
			U(this, 'socket', void 0),
			U(this, '_requestedDisconnect', !1),
			U(this, '_requestedConnect', !1),
			U(
				this,
				'handleDeviceStateChange',
				c().throttle(() => {
					(0, b.PW)(this.accountId, this.accessToken), em(this.accountId, this.accessToken);
				}, Z)
			),
			(this.accountId = e),
			(this.accessToken = t),
			(this.pingInterval = new f.Xp()),
			(this.backoff = new d.Z(void 0, H)),
			this.connect();
	}
}
function el(e, t) {
	e in $ ? (($[e].accessToken = t), W.info('Updated account access token: '.concat(e))) : (($[e] = new eo(e, t)), W.info('Added account: '.concat(e)));
}
function eu(e) {
	if (!(e in $)) return;
	$[e].disconnect(), delete $[e];
	let t = ee[e];
	null != t && null != r && t.track.id === r.track.id && (r = null), delete ee[e], W.info('Removed account: '.concat(e));
}
function ec(e, t) {
	for (let n of J[e]) n.is_active = n.id === t;
}
function ed(e, t, n) {
	var r, a;
	let s = er();
	if (null == s) return !1;
	let { socket: o, device: l } = s,
		{ sync_id: u, party: c, timestamps: d } = t;
	if (null == u || null == c || null == c.id || !(0, M.Ps)(c.id)) return !1;
	let _ = null != d && null != d.start ? d.start : Date.now(),
		E = Math.max(0, Date.now() - _),
		f = !1,
		h = ee[o.accountId];
	null != h && !1 === h.repeat && (f = null);
	let p = (0, M.c8)(null !== (a = null === (r = t.metadata) || void 0 === r ? void 0 : r.type) && void 0 !== a ? a : M.Hw.TRACK);
	if (null == p) return;
	(0, b.hY)(o.accountId, o.accessToken, u, p, {
		position: +E,
		deviceId: l.id,
		repeat: f
	}),
		(i = {
			userId: e,
			partyId: c.id,
			trackId: u,
			startTime: _
		});
	let m = 'presence change';
	n &&
		((m = 'started'),
		C.default.track(P.rMx.SPOTIFY_LISTEN_ALONG_STARTED, {
			party_id: c.id,
			other_user_id: e
		})),
		W.info('Listen along '.concat(m, ': ').concat(o.accountId, ' to ').concat(e, ' playing ').concat(u, ' on ').concat(l.name));
}
function e_() {
	C.default.track(P.rMx.SPOTIFY_LISTEN_ALONG_ENDED, {
		party_id: null != i ? i.partyId : null,
		other_user_id: null != i ? i.userId : null
	});
	let e = null != i ? i.trackId : null;
	(i = null), W.info('Listen along stopped');
	let t = er();
	if (null == t) return;
	let { socket: n } = t,
		r = ee[n.accountId];
	if (null != r && r.track.id === e) (0, b.wO)(n.accountId, n.accessToken);
}
function eE() {
	let e = Object.keys($),
		t = A.Z.getAccounts().filter((e) => {
			let { type: t } = e;
			return t === P.ABu.SPOTIFY;
		});
	if (null == t) return !1;
	let n = t.map((e) => {
		let { id: t } = e;
		return t;
	});
	for (let t of e) {
		if (!n.includes(t)) eu(t);
	}
	let i = !1;
	for (let n of t) {
		if ((null != r && r.account.id === n.id && ((r.account = n), (i = !0)), !e.includes(n.id))) {
			if (null != n.accessToken) {
				el(n.id, n.accessToken);
				continue;
			}
			(0, b.hP)(n.id);
		}
	}
	return i;
}
function ef() {
	if (null == r) return;
	let e = er();
	if (null == e) return;
	let { socket: t } = e;
	(et = !0), (0, b.wO)(t.accountId, t.accessToken), C.default.track(P.rMx.SPOTIFY_AUTO_PAUSED), W.info('Playback auto paused');
}
function eh(e) {
	if (e === S.default.getId()) {
		let t = R.Z.isCurrentClientInVoiceChannel(),
			n = (0, p.O)({
				userId: e,
				checkSoundSharing: !0,
				checkSoundboardSounds: !1
			});
		t && n && null != r ? (K.start(k, ef, !1), z.stop()) : z.start(100, () => K.stop(), !1);
	}
	return !1;
}
function ep(e, t, n) {
	var r, i, a, s, o, l, u, c, d, _, E, f, p, m;
	let I,
		T,
		{ device: g, progress_ms: S, is_playing: A, repeat_state: N, item: v, context: O } = n;
	if (null != v && v.type === M.Hw.TRACK) {
		let e = v.id;
		null != v.linked_from && null != v.linked_from.id && (e = v.linked_from.id),
			(I = {
				id: e,
				name: v.name,
				duration: v.duration_ms,
				type: M.Hw.TRACK,
				album: {
					id: null !== (o = null === (r = v.album) || void 0 === r ? void 0 : r.id) && void 0 !== o ? o : '',
					name: null !== (l = null === (i = v.album) || void 0 === i ? void 0 : i.name) && void 0 !== l ? l : '',
					image: null === (a = v.album) || void 0 === a ? void 0 : a.images[0],
					type: null !== (u = null === (s = v.album) || void 0 === s ? void 0 : s.type) && void 0 !== u ? u : M.Hw.ALBUM
				},
				artists: Array.isArray(v.artists) ? v.artists.filter((e) => (0, L.lm)(e.id) && (0, L.lm)(e.name)) : [],
				isLocal: v.is_local || !1
			});
	} else
		null != v &&
			v.type === M.Hw.EPISODE &&
			(I = {
				id: v.id,
				name: v.name,
				duration: v.duration_ms,
				type: M.Hw.EPISODE,
				album: {
					id: null !== (f = null === (c = v.show) || void 0 === c ? void 0 : c.id) && void 0 !== f ? f : '',
					name: null !== (p = null === (d = v.show) || void 0 === d ? void 0 : d.name) && void 0 !== p ? p : '',
					image: null === (_ = v.show) || void 0 === _ ? void 0 : _.images[0],
					type: null !== (m = null === (E = v.album) || void 0 === E ? void 0 : E.type) && void 0 !== m ? m : M.Hw.SHOW
				},
				artists: [],
				isLocal: !1
			});
	if (
		(null != g &&
			!0 !== g.is_active &&
			(g = {
				...g,
				is_active: !0
			}),
		null != O && [M.Hw.PLAYLIST, M.Hw.ALBUM].includes(O.type))
	) {
		let n = eT.getPlayerState(e);
		T =
			null != n && null != n.context && n.context.uri === O.uri
				? Promise.resolve(n.context)
				: O.type === M.Hw.ALBUM
					? Promise.resolve(O)
					: b.rC
							.get(e, t, { url: O.href })
							.then((e) => {
								let { body: t } = e;
								return t;
							})
							.catch((e) => {
								if (e && 404 === e.status) return null;
								throw e;
							});
	} else T = Promise.resolve(void 0);
	return T.then((t) => {
		null != t && t.type === M.Hw.PLAYLIST && !t.public && (t = null),
			h.Z.dispatch({
				type: 'SPOTIFY_PLAYER_STATE',
				accountId: e,
				track: I,
				volumePercent: null != g ? g.volume_percent : 0,
				isPlaying: A,
				repeat: 'off' !== N,
				position: S,
				context: t,
				device: g
			});
	});
}
function em(e, t) {
	return b.rC
		.get(e, t, {
			url: M.C7.PLAYER,
			query: { additional_types: ''.concat(M.Hw.TRACK, ',').concat(M.Hw.EPISODE) },
			onlyRetryOnAuthorizationErrors: !0
		})
		.then((n) => {
			let r = n.body;
			null != r ? ep(e, t, r).then(() => n) : ei(e);
		})
		.catch(() => ei(e));
}
class eI extends (o = _.ZP.Store) {
	initialize() {
		this.waitFor(A.Z, O.Z),
			this.syncWith([v.Z], () =>
				(function () {
					if (null == i || null == er()) return !1;
					let { userId: e } = i,
						t = ea(e);
					if (null == t)
						return (
							q.start(B, () => {
								if (null != i && i.userId === e) (0, I.Z)();
							}),
							!1
						);
					q.stop();
					let { sync_id: n, timestamps: r, party: a } = t,
						s = null != n && i.trackId !== n,
						o = null != r && i.startTime !== r.start;
					return s || o ? ed(e, t, !1) : null != a && a.id !== i.partyId && ((i.partyId = a.id), !0);
				})()
			),
			(0, b.k1)();
	}
	hasConnectedAccount() {
		return Object.keys($).length > 0;
	}
	getActiveSocketAndDevice() {
		return er();
	}
	getPlayableComputerDevices() {
		let e = [];
		for (let t in $) {
			let n = $[t];
			if (!n.connected || null == J[t]) continue;
			let r = J[t].find((e) => !e.is_restricted && 'Computer' === e.type);
			null != r &&
				e.push({
					socket: n,
					device: r
				});
		}
		return e;
	}
	canPlay(e) {
		let { sync_id: t, party: n } = e;
		return null != er() && null != t && null != n && null != n.id && (0, M.Ps)(n.id);
	}
	getSyncingWith() {
		return i;
	}
	wasAutoPaused() {
		return et;
	}
	getLastPlayedTrackId() {
		return a;
	}
	getTrack() {
		return null != r ? r.track : null;
	}
	getPlayerState(e) {
		return ee[e];
	}
	shouldShowActivity() {
		return null != r && r.account.showActivity && !N.Z.isIdle();
	}
	getActivity() {
		let e, t, n;
		if (null == r) return null != i ? ea(i.userId) : null;
		let {
				track: { artists: a, album: s, name: o, id: l, duration: u, isLocal: c, type: d },
				startTime: _,
				context: E
			} = r,
			f = a.slice(0, 5);
		a.length > 0 &&
			(e = f
				.map((e) => {
					let { name: t } = e;
					return t.replace(/;/g, '');
				})
				.join('; '));
		let h = {},
			p = null != s.image ? (0, y.getAssetFromImageURL)(P.ABu.SPOTIFY, s.image.url) : null;
		null != s.image && null != p && (h.large_image = p), s.type !== j && (h.large_text = s.name), null != E && (t = E.uri), (n = null != i && null != i.partyId ? i.partyId : ''.concat(M.lS).concat(S.default.getId()));
		let m = o.length > 128 ? o.substring(0, 125) + '...' : o,
			I = {
				context_uri: t,
				album_id: s.id,
				artist_ids: f.map((e) => {
					let { id: t } = e;
					return t;
				}),
				type: d,
				button_urls: []
			},
			T = {
				name: w.name,
				assets: h,
				details: m,
				state: e,
				timestamps: {
					start: _,
					end: _ + u
				},
				party: { id: n }
			};
		return !c && ((T.sync_id = l), (T.flags = P.xjy.PLAY | P.xjy.SYNC), (T.metadata = I)), T;
	}
}
U(eI, 'displayName', 'SpotifyStore');
let eT = new eI(h.Z, {
	USER_CONNECTIONS_UPDATE: eE,
	CONNECTION_OPEN: eE,
	SPOTIFY_ACCOUNT_ACCESS_TOKEN: function (e) {
		let { accountId: t, accessToken: n } = e;
		return el(t, n), !1;
	},
	SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: function (e) {
		let { accountId: t } = e;
		eu(t);
	},
	SPOTIFY_PROFILE_UPDATE: function (e) {
		let { accountId: t, isPremium: n } = e,
			r = $[t];
		if (null == r) return !1;
		(r.isPremium = n), W.info('Profile updated for '.concat(t, ': isPremium = ').concat(n));
	},
	SPOTIFY_PLAYER_STATE: function (e) {
		let { accountId: t, isPlaying: n, repeat: a, track: s, position: o, device: l, context: u } = e,
			d = !1;
		if (null != l) {
			if (null != J[t]) {
				let e = J[t].find((e) => {
					let { id: t } = e;
					return t === l.id;
				});
				null == e ? (J[t].push(l), (d = !0)) : !(0, E.Z)(e, l) && (Object.assign(e, l), (d = !0)), ec(t, l.id);
			} else (J[t] = [l]), (d = !0);
		}
		n ? null == en || en.start(k, ef) : ((s = null), null == en || en.stop());
		let _ = A.Z.getAccount(t, P.ABu.SPOTIFY);
		if (null == _) return d;
		let f = ee[t],
			p =
				null != s
					? {
							account: _,
							track: s,
							startTime: (function (e, t) {
								let n = Date.now(),
									r = null != e ? e.startTime : 0,
									i = n - t;
								return Math.abs(i - r) > V ? i : r;
							})(f, o),
							context: u,
							repeat: a
						}
					: null,
			m = null != l && null != i && 0 === o && !n;
		!m && (ee[t] = p);
		let T = r;
		if (
			((r = c()
				.values(ee)
				.find((e) => null != e)),
			eh(S.default.getId()),
			null == s || m ? Q.stop() : Q.start(s.duration - o + F, () => ei(_.id)),
			null != i && ((!n && o > 0) || null == l || (null != p && i.trackId !== p.track.id))
				? (W.info('Listen along active but playback stopped or track changed. Stopping listen along in '.concat(F, 'ms')),
					X.start(F, () => {
						W.info('Stopping listening along'), (0, I.Z)(), ei(_.id);
					}))
				: X.isStarted() && (W.info('Listen along stop cancelled as playback of track resumed'), X.stop()),
			T === r || (null == f && null == p) || (null != f && null != p && f.track.id === p.track.id && f.startTime === p.startTime))
		)
			return d;
		null != s &&
			(h.Z.dispatch({
				type: 'SPOTIFY_NEW_TRACK',
				track: s,
				connectionId: t
			}),
			C.default.track(P.rMx.ACTIVITY_UPDATED, {
				party_platform: P.ABu.SPOTIFY,
				track_id: s.id,
				has_images: !0,
				details: s.album.name,
				state: s.name,
				album_id: s.album.id,
				author_ids: s.artists.map((e) => e.id),
				author_names: s.artists.map((e) => e.name)
			}));
	},
	SPOTIFY_PLAYER_PLAY: function (e) {
		let { id: t } = e;
		a = t;
	},
	ACTIVITY_PLAY: function (e) {
		var t;
		let n,
			{ activity: r, metadata: a } = e,
			s = er();
		if (null == s) return !1;
		let { socket: o, device: l } = s,
			{ sync_id: u, party: c } = r;
		return (
			!!(null != u && null != c && null != c.id && (0, M.Ps)(c.id)) &&
			(null != a && (n = a.context_uri),
			null != i && e_(),
			null != a &&
				void ((0, b.hY)(o.accountId, o.accessToken, u, null !== (t = a.type) && void 0 !== t ? t : M.Hw.TRACK, {
					contextUri: n,
					deviceId: l.id
				}),
				W.info('Play started: '.concat(o.accountId, ' playing ').concat(u, ' on ').concat(l.name))))
		);
	},
	ACTIVITY_SYNC: function (e) {
		let { activity: t, userId: n } = e;
		return ed(n, t, !0);
	},
	ACTIVITY_SYNC_STOP: e_,
	SPOTIFY_SET_DEVICES: function (e) {
		let { accountId: t, devices: n } = e;
		(J[t] = n), W.info('Devices updated for '.concat(t, ':'), n);
	},
	SPOTIFY_SET_ACTIVE_DEVICE: function (e) {
		let { accountId: t, deviceId: n } = e;
		ec(t, n);
	},
	SPEAKING: function (e) {
		let { userId: t } = e;
		return eh(t);
	},
	VOICE_STATE_UPDATES: function (e) {
		let { voiceStates: t } = e;
		return t.reduce((e, t) => {
			let { userId: n } = t;
			return eh(n) || e;
		}, !1);
	},
	MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
		let { settings: t } = e;
		if ((null == t ? void 0 : t.desktopSettings) != null) {
			null == en || en.stop();
			let { sourceId: e, sound: n } = null == t ? void 0 : t.desktopSettings;
			null != e && g.ZP.getObservedAppNameForWindow(e) === w.name && n ? (en = new f.Xp()).start(k, ef) : (null == en || en.stop(), (en = null));
		} else null == t && (null == en || en.stop(), (en = null));
	}
});
t.Z = eT;
