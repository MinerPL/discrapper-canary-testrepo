n.d(t, {
	L6: function () {
		return F;
	},
	Rc: function () {
		return k;
	},
	W1: function () {
		return H;
	},
	WH: function () {
		return y;
	},
	aP: function () {
		return w;
	},
	dV: function () {
		return B;
	},
	g: function () {
		return U;
	},
	iV: function () {
		return P;
	},
	n9: function () {
		return x;
	},
	pR: function () {
		return M;
	},
	rn: function () {
		return b;
	},
	tE: function () {
		return V;
	},
	tK: function () {
		return D;
	},
	xc: function () {
		return G;
	}
});
var r = n(512722),
	i = n.n(r),
	a = n(990547),
	s = n(544891),
	o = n(570140),
	l = n(258609),
	u = n(569545),
	c = n(525925),
	d = n(522474),
	_ = n(199902),
	E = n(314897),
	f = n(592125),
	h = n(430824),
	p = n(944486),
	I = n(979651),
	m = n(934415),
	T = n(70956),
	g = n(557457),
	S = n(573261),
	A = n(26151),
	N = n(493683),
	v = n(475179),
	O = n(287734),
	R = n(981631),
	C = n(70722);
function y(e, t, n) {
	o.Z.dispatch({
		type: 'STREAM_START',
		streamType: null != e ? C.lo.GUILD : C.lo.CALL,
		guildId: e,
		channelId: t,
		appContext: __OVERLAY__ ? R.IlC.OVERLAY : R.IlC.APP,
		...n
	});
}
function D(e, t) {
	let n = (0, u.V9)(e);
	o.Z.dispatch({
		type: 'STREAM_SET_PAUSED',
		streamKey: n,
		paused: t
	});
}
function L(e, t) {
	let n = f.Z.getChannel(t);
	return i()(null != n, 'Cannot join a null voice channel'), !I.Z.isInChannel(t) && (0, m.rY)(n, I.Z, h.Z);
}
function b(e, t) {
	if (null != l.Z.getRemoteSessionId()) return;
	let { guildId: n, channelId: r } = e;
	if (null != n && L(n, r)) return;
	let i = (0, u.V9)(e),
		a =
			(null == t ? void 0 : t.forceMultiple) ||
			_.Z.getAllActiveStreamsForChannel(r).filter((e) => {
				let { ownerId: t } = e;
				return t !== E.default.getId();
			}).length >= 2;
	o.Z.dispatch({
		type: 'STREAM_WATCH',
		streamKey: i,
		allowMultiple: a
	}),
		!a && (null == t || !t.noFocus) && v.Z.selectParticipant(e.channelId, i);
}
function M(e, t) {
	o.Z.dispatch({
		type: 'STREAM_UPDATE_SELF_HIDDEN',
		channelId: e,
		selfStreamHidden: t
	});
}
function P(e, t) {
	let { guildId: n, channelId: r } = e;
	if (null != n && L(n, r)) return;
	b(e, t);
	let i = d.Z.getWindowOpen(R.KJ3.CHANNEL_CALL_POPOUT),
		a = p.Z.getVoiceChannelId();
	if (!i || a !== r) (0, c.Z)(e);
}
function U(e) {
	let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
	w(e, t),
		o.Z.dispatch({
			type: 'STREAM_STOP',
			streamKey: e,
			appContext: __OVERLAY__ ? R.IlC.OVERLAY : R.IlC.APP
		});
}
function w(e) {
	let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
	o.Z.dispatch({
		type: 'STREAM_CLOSE',
		streamKey: e,
		canShowFeedback: t
	});
}
async function x(e, t, n) {
	let r = (0, u.V9)({
		streamType: null != e ? C.lo.GUILD : C.lo.CALL,
		guildId: e,
		channelId: t,
		ownerId: n
	});
	o.Z.dispatch({
		type: 'STREAM_PREVIEW_FETCH_START',
		streamKey: r
	});
	try {
		let e = await s.tn.get({
			url: R.ANM.STREAM_PREVIEW(r),
			query: { version: Date.now() },
			oldFormErrors: !0
		});
		o.Z.dispatch({
			type: 'STREAM_PREVIEW_FETCH_SUCCESS',
			streamKey: r,
			previewURL: e.body.url
		});
	} catch (t) {
		let e;
		429 === t.status && (e = t.body.retry_after * T.Z.Millis.SECOND),
			o.Z.dispatch({
				type: 'STREAM_PREVIEW_FETCH_FAIL',
				streamKey: r,
				retryAfter: e
			});
	}
}
async function G(e) {
	try {
		await S.Z.post({
			url: R.ANM.STREAM_NOTIFY(e),
			oldFormErrors: !0,
			trackedActionData: { event: a.NetworkActionNames.STREAM_NOTIFY }
		});
	} catch (e) {}
}
function k(e) {
	(0, g.Ye)(e.preset, e.resolution, e.frameRate),
		o.Z.dispatch({
			type: 'STREAM_UPDATE_SETTINGS',
			...e
		});
}
function B(e, t) {
	s.tn.patch({
		url: R.ANM.STREAM(e),
		body: { region: t },
		oldFormErrors: !0
	});
}
function F() {
	let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
		t = _.Z.getCurrentUserActiveStream();
	null != t && U((0, u.V9)(t), e);
}
function V(e) {
	let { channelId: t, pid: n, sourceId: r, sourceName: i } = e;
	(null != n || null != r || null != i) &&
		(o.Z.dispatch({
			type: 'START_BROADCAST_STREAM',
			options: {
				pid: n,
				sourceId: r,
				sourceName: i
			}
		}),
		null == t
			? N.Z.createBroadcastPrivateChannel()
			: y(null, t, {
					pid: n,
					sourceId: r,
					sourceName: i
				}));
}
function H(e, t) {
	let n = E.default.getId(),
		r = (0, u.my)(t),
		i = p.Z.getVoiceChannelId();
	null != i && i !== e && O.default.disconnect(),
		N.Z.addRecipient(e, n, void 0, () => {
			A.Z.call(e, !1, !1, null, () => {
				P(r);
			});
		});
}
