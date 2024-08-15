n.d(t, {
	AZ: function () {
		return f;
	},
	Bq: function () {
		return g;
	},
	RL: function () {
		return I;
	},
	Ym: function () {
		return p;
	},
	gr: function () {
		return h;
	},
	pB: function () {
		return m;
	},
	vu: function () {
		return T;
	}
}),
	n(47120);
var r = n(423875),
	i = n(442837),
	a = n(394821),
	s = n(353647),
	o = n(146282),
	l = n(26033),
	u = n(561308),
	c = n(206583),
	d = n(981631),
	_ = n(616922),
	E = n(728151);
function f(e) {
	if ((0, l.dU)(e)) {
		var t, n;
		return (null === (n = e.extra.entries[0]) || void 0 === n ? void 0 : null === (t = n.media) || void 0 === t ? void 0 : t.provider) === r.p.SPOTIFY;
	}
	return !!(0, l.KF)(e) && e.extra.media.provider === r.p.SPOTIFY;
}
function h(e) {
	return !!(0, l.y0)(e) && e.extra.application_id === E.sp;
}
function p(e, t) {
	let n = e.extra;
	return null != n && (('application_id' in t && t.application_id === n.application_id) || ('game_name' in n && t.name === n.game_name));
}
function m(e, t) {
	if (f(e)) {
		var n;
		return (0, _.Ps)(null === (n = t.party) || void 0 === n ? void 0 : n.id);
	}
	return !1;
}
function I(e, t) {
	return !!((0, a.Z)(t) && h(e)) && e.extra.media_title === t.details;
}
function T(e, t) {
	let n = e.filter(u.kr);
	return t.type === d.IIU.PLAYING ? n.filter(l.dX).find((e) => p(e, t)) : t.type === d.IIU.LISTENING ? n.filter(l.dU).find((e) => m(e, t)) : t.type === d.IIU.WATCHING ? e.filter(l.y0).find((e) => I(e, t)) : void 0;
}
function g(e) {
	let { activity: t, user: n } = e,
		r = (0, i.e7)([o.Z], () =>
			o.Z.getMatchingInboxEntry({
				activity: t,
				userId: n.id,
				feedId: c.YN.GLOBAL_FEED
			})
		),
		a = (0, i.e7)([s.Z], () =>
			s.Z.getMatchingOutboxEntry({
				activity: t,
				userId: n.id
			})
		);
	return null != r ? r : a;
}
