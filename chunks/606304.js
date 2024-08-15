n(47120), n(789020), n(724458);
var r,
	i,
	a,
	s,
	o = n(442837),
	l = n(570140),
	u = n(700785),
	c = n(592125),
	d = n(131951),
	_ = n(19780),
	E = n(944486),
	f = n(981631),
	h = n(65154);
let p = new Map(),
	I = null,
	m = null,
	T = null;
function g(e, t) {
	let n = p.get(e);
	if (null == n) return !1;
	let r = n.delete(t);
	return 0 === n.size && p.delete(e), r;
}
function S(e, t, n) {
	var r, i, a;
	return (
		((null !==
			(a =
				null === (i = p.get(e)) || void 0 === i
					? void 0
					: null === (r = i.get(t)) || void 0 === r
						? void 0
						: r.flags) && void 0 !== a
			? a
			: h.Dg.NONE) &
			n) ===
		n
	);
}
function A(e, t) {
	let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
		r = p.get(e);
	if (null == r) return !1;
	for (let [e, { flags: i }] of r) {
		if (!n || e !== I) {
			if ((i & t) === t) return !0;
		}
	}
	return !1;
}
function N(e) {
	let { user: t, sessionId: n } = e;
	(I = t.id), (m = n), (T = null);
}
class v extends (r = o.ZP.Store) {
	initialize() {
		this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type && 'VOICE_STATE_UPDATES' !== e.type), this.waitFor(_.Z);
	}
	getSpeakingDuration(e, t) {
		var n, r;
		let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.Yn.DEFAULT,
			a = null === (r = p.get(i)) || void 0 === r ? void 0 : null === (n = r.get(e)) || void 0 === n ? void 0 : n.since;
		return null != a ? t - a : 0;
	}
	getSpeakers() {
		var e, t;
		let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.Yn.DEFAULT;
		return Array.from(
			null !== (t = null === (e = p.get(n)) || void 0 === e ? void 0 : e.keys()) && void 0 !== t ? t : []
		).filter((e) => S(n, e, h.Dg.VOICE));
	}
	isSpeaking(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.Yn.DEFAULT;
		return S(t, e, h.Dg.VOICE);
	}
	isPrioritySpeaker(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.Yn.DEFAULT;
		return S(t, e, h.Dg.PRIORITY);
	}
	isSoundSharing(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.Yn.DEFAULT;
		return S(t, e, h.Dg.SOUNDSHARE);
	}
	isAnyoneElseSpeaking() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.Yn.DEFAULT;
		return A(e, h.Dg.VOICE, !0);
	}
	isCurrentUserSpeaking() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.Yn.DEFAULT;
		return null != I && this.isSpeaking(I, e);
	}
	isAnyonePrioritySpeaking() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.Yn.DEFAULT;
		return A(e, h.Dg.VOICE | h.Dg.PRIORITY);
	}
	isCurrentUserPrioritySpeaking() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.Yn.DEFAULT;
		return null != I && this.isPrioritySpeaker(I, e) && this.isSpeaking(I, e);
	}
}
(s = 'SpeakingStore'),
	(a = 'displayName') in (i = v)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new v(l.Z, {
		CONNECTION_OPEN: N,
		OVERLAY_INITIALIZE: N,
		SPEAKING: function (e) {
			let { context: t, userId: n, speakingFlags: r } = e;
			if ((r & h.Dg.PRIORITY) === h.Dg.PRIORITY) {
				let e = c.Z.getChannel(E.Z.getVoiceChannelId());
				null != e &&
				u.BT({
					permission: f.Plq.PRIORITY_SPEAKER,
					user: n,
					context: e
				})
					? d.Z.setCanHavePriority(n, !0)
					: (d.Z.setCanHavePriority(n, !1), (r &= ~h.Dg.PRIORITY));
			}
			return (function (e, t, n) {
				var r, i;
				let a = (function () {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.Yn.DEFAULT,
							t = p.get(e);
						return null == t && ((t = new Map()), p.set(e, t)), t;
					})(e),
					s = a.get(t),
					o = null !== (r = null == s ? void 0 : s.flags) && void 0 !== r ? r : 0;
				if (0 === o && 0 === n) return !1;
				if (0 === n) a.delete(t), 0 === a.size && p.delete(e);
				else {
					let e = null !== (i = null == s ? void 0 : s.since) && void 0 !== i ? i : null,
						r = (o & h.Dg.VOICE) === h.Dg.VOICE,
						l = (n & h.Dg.VOICE) === h.Dg.VOICE;
					r !== l && (e = l ? Date.now() : null),
						a.set(t, {
							flags: n,
							since: e
						});
				}
				return !0;
			})(t, n, r);
		},
		VOICE_STATE_UPDATES: function (e) {
			let { voiceStates: t } = e;
			return t.reduce((e, t) => {
				let { userId: n, channelId: r, sessionId: i } = t,
					a = !1,
					s = T;
				return (
					n === I && i === m && (T = null != r ? r : null),
					s !== T && (a = p.delete(h.Yn.DEFAULT) || a),
					null == r
						? (a = n === I && i === m ? p.delete(h.Yn.DEFAULT) || a : g(h.Yn.DEFAULT, n) || a)
						: n === I && i !== m
							? (a = p.delete(h.Yn.DEFAULT) || a)
							: n !== I && r !== _.Z.getChannelId() && (a = g(h.Yn.DEFAULT, n) || a),
					a || e
				);
			}, !1);
		}
	}));
