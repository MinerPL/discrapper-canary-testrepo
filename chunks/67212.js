n.d(t, {
	Ds: function () {
		return f;
	},
	E7: function () {
		return m;
	},
	MV: function () {
		return T;
	},
	b_: function () {
		return p;
	},
	v$: function () {
		return h;
	}
});
var r = n(544891),
	i = n(570140),
	a = n(594190),
	s = n(569545),
	o = n(598077),
	l = n(314897),
	u = n(592125),
	c = n(77498),
	d = n(770471),
	_ = n(292584),
	E = n(981631);
function f(e) {
	var t;
	let n = null !== (t = null == e ? void 0 : e.gameName) && void 0 !== t ? t : null == e ? void 0 : e.name;
	return null != n ? n.trim() : null;
}
function h(e, t) {
	if (null == t) return;
	let { canBroadcast: n } = d.Z.getCurrentConfig({ location: 'start_broadcast_for_stream' }, { autoTrackExposure: !1 });
	if (!n) return;
	let { ownerId: r, channelId: o } = (0, s.my)(e);
	if (null == r || null == o) return;
	let _ = l.default.getId();
	if (r !== _) return;
	let E = l.default.getSessionId();
	if (null == E) return;
	let h = u.Z.getChannel(o),
		p = null != h && h.isBroadcastChannel();
	if (null == h || r !== h.ownerId || !p) return;
	let I = (function (e) {
		var t;
		let n = f(a.ZP.getGameForPID(e)),
			r = c.Z.getGameByName(n);
		return null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : '0';
	})(t);
	null != I &&
		!(function (e) {
			let t = l.default.getId(),
				n = l.default.getSessionId();
			null != t &&
				null != n &&
				i.Z.dispatch({
					type: 'BROADCAST_START',
					broadcast: e
				});
		})({
			sessionId: E,
			userId: _,
			applicationId: I,
			channelId: h.id,
			streamKey: e
		});
}
function p() {
	i.Z.dispatch({ type: 'BROADCAST_STOP' });
}
function I(e) {
	let t = {};
	e.forEach((e) => {
		t[e] = -1;
	}),
		i.Z.dispatch({
			type: 'BROADCASTER_BUCKETS_RECEIVED',
			data: t
		});
}
async function m() {
	let e = _.Z.getUserIdsToValidate();
	try {
		let t = await r.tn.get({
			url: E.ANM.USER_BROADCASTS,
			query: { user_ids: e }
		});
		if (t.ok && null != t.body) {
			let n = {};
			e.forEach((e) => {
				var r;
				n[e] = null !== (r = t.body[e]) && void 0 !== r ? r : -1;
			}),
				i.Z.dispatch({
					type: 'BROADCASTER_BUCKETS_RECEIVED',
					data: n
				});
		} else I(e);
	} catch (t) {
		I(e);
	}
}
async function T() {
	let e = _.Z.getBroadcastsToValidateChannels()
		.filter((e) => null == e.viewers)
		.map((e) => e.channelId);
	if (0 !== e.length)
		try {
			let t = await r.tn.get({
				url: E.ANM.BROADCAST_CHANNELS,
				query: { channel_ids: e }
			});
			if (t.ok && null != t.body) {
				let e = t.body,
					n = {};
				e.forEach((e) => {
					var t;
					let r = _.Z.getBroadcastByChannel(e.id).userId,
						i = null !== (t = e.recipients) && void 0 !== t ? t : [];
					n[r] = i.map((e) => new o.Z(e)).filter((e) => e.id !== r);
				}),
					i.Z.dispatch({
						type: 'BROADCAST_VIEWERS_UPDATE',
						viewers: n
					});
			}
		} catch (e) {}
}
