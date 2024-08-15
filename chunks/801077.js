n(47120), n(653041), n(724458);
var i,
	l,
	r,
	a,
	s = n(392711),
	o = n.n(s),
	c = n(442837),
	u = n(570140),
	d = n(782769),
	h = n(527805),
	p = n(841784),
	_ = n(503438),
	f = n(802856),
	g = n(420660),
	m = n(728345),
	C = n(812206),
	I = n(710845),
	E = n(38618),
	N = n(656063),
	x = n(761282),
	S = n(814443),
	v = n(789407),
	Z = n(974543),
	T = n(250889),
	L = n(199902),
	A = n(592125),
	b = n(480294),
	M = n(831506),
	R = n(731290),
	O = n(430824),
	P = n(496675),
	y = n(158776),
	j = n(699516),
	D = n(594174),
	w = n(979651),
	U = n(823379),
	G = n(981631);
let k = !1,
	B = !1,
	H = [],
	V = [],
	F = {},
	W = {},
	z = new Set(),
	Y = new Set();
function K() {
	let e = j.Z.getFriendIDs();
	return b.Z.hasConsented(G.pjP.PERSONALIZATION) ? new Set([...S.Z.getUserAffinitiesUserIds(), ...e]) : new Set(e);
}
function q(e) {
	return y.Z.findActivity(e, (e) => e.type !== G.IIU.CUSTOM_STATUS);
}
function Q(e) {
	return (
		null == F[e] &&
			(F = {
				...F,
				[e]: new T.Z({ name: e })
			}),
		F[e]
	);
}
function X(e) {
	return (
		null == W[e] &&
			(W = {
				...W,
				[e]: new Z.Z({ url: e })
			}),
		W[e]
	);
}
function J(e) {
	!Y.has(e) && z.add(e);
}
function $(e) {
	if ((0, _.Z)(e)) return v.r9;
	let t = null != e.application_id ? C.Z.getApplication(e.application_id) : null;
	return null != t ? t : (0, f.Z)(e) ? Q(e.name) : (0, g.Z)(e) && null != e.url ? X(e.url) : (null != e.application_id && J(e.application_id), t);
}
function ee(e) {
	let t = w.Z.getVoiceStateForUser(e);
	return (null == t ? void 0 : t.channelId) != null && P.Z.canWithPartialContext(G.Plq.VIEW_CHANNEL, { channelId: t.channelId }) ? t.channelId : null;
}
function et(e) {
	return j.Z.isFriend(e.id);
}
function en(e, t, n) {
	var i, l, r, a, s, c;
	let u;
	let _ = D.default.getCurrentUser(),
		f = null !== (i = null == _ ? void 0 : _.nsfwAllowed) && void 0 !== i && i,
		g = t.map((e) => e.id),
		m = t.filter((t) => e.has(t.id)),
		E = !1,
		S = [],
		b = new Set(),
		j = !1,
		G = [];
	for (let e of t) {
		let n = L.Z.getAnyStreamForUser(e.id),
			i = A.Z.getChannel(null == n ? void 0 : n.channelId);
		if ((null == i ? void 0 : i.isNSFW()) && (!f || !R.Z.didAgree(null == i ? void 0 : i.getGuildId()))) continue;
		let s = q(e.id);
		if (
			(null != n &&
				G.push({
					stream: n,
					streamUser: e,
					activity: s
				}),
			null == s)
		)
			continue;
		let c = (0, N.Z)(s);
		if (null == c) continue;
		j = c === v.XB;
		let u = (function (e) {
				let t = C.Z.getApplication(e);
				return null != t ? t : 'string' != typeof e ? (new I.Z('NowPlayingViewStore').error('Unknown type for applicationId: '.concat(typeof e, ', value: ').concat(e), { tags: { source: 'ACTIVITIES' } }), null) : e === v.XB ? v.r9 : e.startsWith(T.H) ? Q(e.slice(T.H.length)) : e.startsWith(Z._) ? X(e.slice(Z._.length)) : (J(e), null);
			})(c),
			g = null === (l = s.timestamps) || void 0 === l ? void 0 : l.start;
		if ((0, p.Z)(s)) {
			let t = (0, d.a)();
			if (
				(0, h.ZP)({
					activity: s,
					userId: e.id,
					application: u,
					channelId: null === (r = w.Z.getVoiceStateForUser(e.id)) || void 0 === r ? void 0 : r.channelId,
					currentUser: _,
					isActivitiesEnabledForCurrentPlatform: t,
					ChannelStore: A.Z,
					VoiceStateStore: w.Z,
					PermissionStore: P.Z,
					GuildStore: O.Z
				}) !== h.Fw.CAN_JOIN
			)
				continue;
		} else if (null == g) continue;
		if (!x.JE(s) || null == u || b.has(u.id)) continue;
		let m = null != s ? $(s) : null;
		(null == m || m.id !== u.id) && (s = null);
		let y = [];
		(y =
			null != s && null != s.party && null != s.party.id
				? Array.from(null !== (a = M.Z.getParty(s.party.id)) && void 0 !== a ? a : []).reduce((e, t) => {
						let n = D.default.getUser(t);
						return null != n && e.push(n), e;
					}, [])
				: t.filter((e) => {
						let t = q(e.id),
							n = null != t ? $(t) : null;
						return null != n && n.id === u.id;
					})),
			(y = o().orderBy(y, [et], ['desc'])).length !== t.length && (E = !0),
			b.add(u.id),
			S.push({
				game: u,
				activity: s,
				activityUser: e,
				startedPlayingTime: g,
				playingMembers: y
			});
	}
	let k = 1 === m.length,
		B = [],
		H = new Set(),
		V = new Set();
	for (let e of t) {
		let n = ee(e.id),
			i = A.Z.getChannel(n),
			l = null != i ? i.getGuildId() : null,
			r = O.Z.getGuild(l);
		if ((V.has(l) && H.has(n)) || null == i || null == r || i.id === r.afkChannelId) null == i && ((u = null), (k = !0));
		else {
			let e = o()(w.Z.getVoiceStatesForChannel(i.id))
				.map((e) => {
					let { userId: t } = e;
					return D.default.getUser(t);
				})
				.filter(U.lm)
				.orderBy([et], ['desc'])
				.value();
			e.filter((e) => !g.includes(e.id)).forEach((e) => t.push(e)),
				k ? !V.has(l) && (u = null) : ((u = r), (k = !0)),
				V.add(l),
				H.add(n),
				B.push({
					channel: i,
					guild: r,
					members: e
				});
		}
	}
	return {
		id: n,
		voiceChannels: B,
		isSpotifyActivity: j,
		priorityMembers: m.map((e) => ({
			user: e,
			status: y.Z.getStatus(e.id)
		})),
		partiedMembers: t,
		showPlayingMembers: E,
		guildContext: u,
		currentActivities: ((s = S),
		(c = (e) => {
			var t;
			return null !== (t = e.startedPlayingTime) && void 0 !== t ? t : 0;
		}),
		o()(s).orderBy([c, (e) => e.game.name], ['desc', 'asc'])).value(),
		applicationStreams: G
	};
}
function ei() {
	return k && E.Z.isConnected();
}
let el = o().throttle(() => {
	!(function () {
		var e;
		if (!ei()) return;
		z.clear(),
			(V = (H = (function (e) {
				let t = K(),
					n = en.bind(null, t);
				return o()(e).mapValues(n);
			})(
				((e = Array.from(K()).reduce((e, t) => {
					let n = D.default.getUser(t);
					return null != n && !n.bot && e.push(n), e;
				}, [])),
				o()(e).groupBy((e) => {
					var t;
					let n = ee(e.id),
						i = q(e.id);
					return null != n ? ''.concat('channel-', '-').concat(n) : (null == i ? void 0 : null === (t = i.party) || void 0 === t ? void 0 : t.id) != null ? ''.concat('party-', '-').concat(i.party.id) : ''.concat('user-', '-').concat(e.id);
				}))
			)
				.values()
				.orderBy([(e) => e.partiedMembers.length > 1, (e) => e.applicationStreams.length > 0, (e) => e.voiceChannels.length > 0, (e) => e.currentActivities.length > 0, (e) => e.isSpotifyActivity, (e) => e.priorityMembers.map((e) => e.user.username.toLowerCase()).join(' ')], ['desc', 'desc', 'desc', 'desc', 'asc', 'asc'])
				.value()
				.filter((e) => e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0)).map((e) => ({
				type: G.GOo.USER,
				party: e
			}))),
			!(function () {
				if (z.size > 0) {
					let e = Array.from(z);
					m.Z.fetchApplications(e), e.forEach((e) => Y.add(e)), z.clear();
				}
			})(),
			(B = !0);
	})(),
		es.emitChange();
}, 1000);
function er() {
	return !!ei() && (el(), !1);
}
class ea extends (i = c.ZP.Store) {
	initialize() {
		this.syncWith([D.default, C.Z, y.Z, M.Z, w.Z, L.Z, j.Z, b.Z, S.Z], er), this.waitFor(E.Z, O.Z, C.Z, D.default, S.Z);
	}
	get currentActivityParties() {
		return H;
	}
	get nowPlayingCards() {
		return V;
	}
	get isMounted() {
		return k;
	}
	get loaded() {
		return B;
	}
}
(a = 'NowPlayingViewStore'),
	(r = 'displayName') in (l = ea)
		? Object.defineProperty(l, r, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (l[r] = a);
let es = new ea(u.Z, {
	LOGOUT: function () {
		(k = !1), (H = []), (V = []), z.clear();
	},
	NOW_PLAYING_MOUNTED: function () {
		(k = !0), el();
	},
	NOW_PLAYING_UNMOUNTED: function () {
		k = !1;
	}
});
t.Z = es;
