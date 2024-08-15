n.d(t, {
	S: function () {
		return r;
	}
}),
	n(47120);
var r,
	i,
	a,
	s,
	o,
	l,
	u = n(442837),
	c = n(846519),
	d = n(570140),
	_ = n(70956),
	E = n(592125),
	f = n(496675),
	h = n(981631);
((a = r || (r = {}))[(a.SendMessage = 0)] = 'SendMessage'), (a[(a.CreateThread = 1)] = 'CreateThread');
let p = {
	0: {},
	1: {}
};
function m(e, t, n) {
	if (
		((function (e, t) {
			null != p[t][e.id] && (p[t][e.id].timer.stop(), delete p[t][e.id]);
		})(e, t),
		(function (e, t) {
			return 0 === t ? f.Z.can(h.Plq.MANAGE_CHANNELS, e) || f.Z.can(h.Plq.MANAGE_MESSAGES, e) : f.Z.can(h.Plq.MANAGE_THREADS, e);
		})(e, t) || n <= 0)
	)
		return;
	let r = n + Date.now();
	(p[t][e.id] = {
		rateLimitPerUser: e.rateLimitPerUser,
		cooldownMs: n,
		cooldownEndTimestamp: r,
		timer: new c.V7()
	}),
		p[t][e.id].timer.start(
			1000,
			() => {
				d.Z.dispatch({
					type: 'SLOWMODE_SET_COOLDOWN',
					channelId: e.id,
					slowmodeType: t,
					cooldownMs: Math.max(r - Date.now(), 0)
				});
			},
			!0
		);
}
function I(e, t) {
	let n = E.Z.getChannel(e);
	if (null == n) return !1;
	m(n, t, 0 === n.rateLimitPerUser ? 0 : n.rateLimitPerUser * _.Z.Millis.SECOND + 100);
}
function T(e) {
	let { file: t } = e,
		n = E.Z.getChannel(t.channelId);
	return null != n && m(n, 0, 0);
}
class g extends (i = u.ZP.Store) {
	initialize() {
		this.waitFor(E.Z);
	}
	getSlowmodeCooldownGuess(e, t) {
		let n = p[null != t ? t : 0][e];
		return null != n ? n.cooldownMs : 0;
	}
}
(l = 'SlowmodeStore'),
	(o = 'displayName') in (s = g)
		? Object.defineProperty(s, o, {
				value: l,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (s[o] = l),
	(t.Z = new g(d.Z, {
		SLOWMODE_RESET_COOLDOWN: function (e) {
			let { channelId: t, slowmodeType: n } = e;
			return I(t, n);
		},
		SLOWMODE_SET_COOLDOWN: function (e) {
			let { channelId: t, slowmodeType: n, cooldownMs: r } = e,
				i = E.Z.getChannel(t);
			if (null == i) return !1;
			m(i, n, 0 === r ? 0 : r + 100);
		},
		UPLOAD_START: function (e) {
			let { channelId: t } = e;
			return I(t, 0);
		},
		UPLOAD_FAIL: T,
		UPLOAD_CANCEL_REQUEST: T,
		CHANNEL_UPDATES: function (e) {
			let { channels: t } = e;
			[0, 1].forEach((e) => {
				for (let r of t) {
					var n;
					let t = p[e][r.id],
						i = r.rateLimitPerUser;
					if (null != t && t.rateLimitPerUser !== i) m(r, e, Math.min(null !== (n = null == t ? void 0 : t.cooldownMs) && void 0 !== n ? n : 0, i * _.Z.Millis.SECOND));
				}
			});
		},
		LOGOUT: function () {
			[0, 1].forEach((e) => {
				Object.keys(p[e]).forEach((t) => p[e][t].timer.stop()), (p[e] = {});
			});
		}
	}));
