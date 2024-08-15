t.d(n, {
	DT: function () {
		return P;
	},
	Ef: function () {
		return O;
	},
	HO: function () {
		return p;
	},
	NZ: function () {
		return v;
	},
	Pq: function () {
		return A;
	},
	Q1: function () {
		return T;
	},
	RK: function () {
		return I;
	},
	_0: function () {
		return f;
	},
	hz: function () {
		return x;
	},
	yi: function () {
		return S;
	}
});
var l = t(512722),
	s = t.n(l),
	i = t(149765),
	a = t(544891),
	r = t(493683);
t(749210);
var d = t(911969),
	u = t(367907),
	c = t(944486),
	o = t(979651),
	h = t(700785),
	_ = t(922482),
	m = t(192079),
	E = t(706058),
	g = t(590415),
	N = t(981631);
function T(e, n) {
	let t = e.getGuildId();
	return (
		s()(null != t, 'This channel cannot be guildless.'),
		n && (0, u.yw)(N.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, m.s$)(e) }),
		a.tn.patch({
			url: N.ANM.UPDATE_VOICE_STATE(t),
			body: {
				request_to_speak_timestamp: n ? new Date().toISOString() : null,
				channel_id: e.id
			}
		})
	);
}
function f(e, n) {
	let t = e.getGuildId();
	return (
		s()(null != t, 'This channel cannot be guildless.'),
		a.tn.patch({
			url: N.ANM.UPDATE_VOICE_STATE(t, n),
			body: {
				suppress: !1,
				request_to_speak_timestamp: new Date().toISOString(),
				channel_id: e.id
			}
		})
	);
}
function I(e, n) {
	let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
		l = null == e ? void 0 : e.getGuildId();
	s()(null != l, 'This channel cannot be guildless.');
	let i = o.Z.getVoiceStateForChannel(e.id);
	return (
		(0, g.gf)(i) === g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
			!n &&
			(0, u.yw)(N.rMx.PROMOTED_TO_SPEAKER, { ...(0, m.s$)(e) }),
		a.tn.patch({
			url: N.ANM.UPDATE_VOICE_STATE(l),
			body: {
				suppress: n,
				request_to_speak_timestamp: null,
				channel_id: e.id,
				...(t ? { silent: t } : {})
			}
		})
	);
}
function S(e) {
	let n = null == e ? void 0 : e.getGuildId();
	return (
		s()(null != n, 'This channel cannot be guildless.'),
		a.tn.patch({
			url: N.ANM.UPDATE_VOICE_STATE(n),
			body: {
				suppress: !0,
				channel_id: e.id,
				self_video: !1,
				self_stream: !1
			}
		})
	);
}
function P(e, n, t) {
	let l = e.getGuildId();
	return (
		s()(null != l, 'This channel cannot be guildless.'),
		a.tn.patch({
			url: N.ANM.UPDATE_VOICE_STATE(l, n),
			body: {
				suppress: t,
				channel_id: e.id
			}
		})
	);
}
function x(e, n) {
	if (null == n || null == e) return;
	let t = n.getGuildId();
	return (
		s()(null != t, 'This channel cannot be guildless.'),
		P(n, e.id, !0),
		a.tn.patch({
			url: N.ANM.UPDATE_VOICE_STATE(t, e.id),
			body: {
				suppress: !0,
				channel_id: n.id,
				self_video: !1,
				self_stream: !1
			}
		})
	);
}
function A(e, n, t) {
	let l = e.getGuildId();
	s()(null != l, 'Channel cannot be guildless');
	let a = e.permissionOverwrites[l],
		u = {
			id: l,
			type: d.BN.ROLE,
			allow: h.Hn,
			deny: h.Hn,
			...a
		};
	t
		? ((u.allow = i.IH(u.allow, n)), (u.deny = i.Od(u.deny, n)))
		: ((u.allow = i.Od(u.allow, n)), (u.deny = i.IH(u.deny, n))),
		r.Z.updatePermissionOverwrite(e.id, u);
}
async function p(e, n, t, l) {
	if ('' === n) return;
	c.Z.getVoiceChannelId() !== e.id && (0, _.TM)(e);
	let s = await (0, E.me)(e.id, n, t, l);
	return I(e, !1, !0), s;
}
async function O(e, n, t) {
	if ('' !== n) return await (0, E.Dk)(e.id, n, t);
}
async function v(e) {
	await (0, E.Ix)(e.id);
}
