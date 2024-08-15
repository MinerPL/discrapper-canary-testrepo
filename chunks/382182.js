n.d(t, {
	JL: function () {
		return p;
	},
	P9: function () {
		return I;
	},
	h_: function () {
		return g;
	},
	p9: function () {
		return m;
	},
	wq: function () {
		return T;
	}
}),
	n(653041),
	n(47120);
var r,
	i,
	a = n(442837),
	s = n(387343),
	o = n(258609),
	l = n(131704),
	u = n(984933),
	c = n(430824),
	d = n(496675),
	_ = n(979651),
	E = n(934415),
	f = n(981631),
	h = n(689938);
function p(e, t, n) {
	var r;
	let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
	if (e.isPrivate()) return !0;
	let a = t.getGuild(e.getGuildId()),
		o = null !== (r = null == a ? void 0 : a.maxStageVideoChannelUsers) && void 0 !== r ? r : 0;
	return (
		(!e.isGuildStageVoice() || !(o <= 0)) &&
		(!i || !!(0, s.Z)(e, n)) &&
		!!n.can(f.Plq.STREAM, e) &&
		null != a &&
		a.afkChannelId !== e.id &&
		!0
	);
}
function I(e) {
	switch (e) {
		case 0:
			return h.Z.Messages.CONSOLE_STREAM_UNAVAILABLE;
		case 1:
			return h.Z.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_HEADER;
		case 2:
			return h.Z.Messages.STREAM_NO_PERMISSION_CTA;
		default:
			return h.Z.Messages.WATCH_STREAM;
	}
}
function m(e, t, n, r, i) {
	let a;
	if (null == e) return [!1, 2];
	let o = t.isInChannel(e.id),
		u = e instanceof l.Sf && (0, E.rY)(e, t, n),
		c = (0, s.Z)(e, r),
		d = null != i.getAwaitingRemoteSessionInfo() || null != i.getRemoteSessionId();
	return d ? (a = 0) : c || o ? u && !o && (a = 1) : (a = 2), [!__OVERLAY__ && !d && (o || (c && !u)), a];
}
function T(e) {
	return (0, a.Wu)([_.Z, c.Z, d.Z, o.Z], () => m(e, _.Z, c.Z, d.Z, o.Z));
}
function g(e, t, n) {
	let r = [];
	for (let { channel: i } of e[u.Zb]) p(i, t, n) && r.push(i);
	return r;
}
((i = r || (r = {}))[(i.REMOTE_MODE = 0)] = 'REMOTE_MODE'),
	(i[(i.CHANNEL_FULL = 1)] = 'CHANNEL_FULL'),
	(i[(i.NO_PERMISSION = 2)] = 'NO_PERMISSION');
