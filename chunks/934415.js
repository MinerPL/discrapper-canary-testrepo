n.d(t, {
	EO: function () {
		return x;
	},
	LY: function () {
		return U;
	},
	Nj: function () {
		return a.Z;
	},
	a5: function () {
		return M;
	},
	c4: function () {
		return b;
	},
	g7: function () {
		return L;
	},
	jZ: function () {
		return R;
	},
	oQ: function () {
		return O;
	},
	rX: function () {
		return C;
	},
	rY: function () {
		return D;
	},
	rt: function () {
		return y;
	},
	wR: function () {
		return w;
	},
	wl: function () {
		return P;
	}
}),
	n(411104),
	n(653041),
	n(47120);
var r = n(149765),
	i = n(911969),
	a = n(90463),
	s = n(968358),
	o = n(874748),
	l = n(590415),
	u = n(131704),
	c = n(592125),
	d = n(984933),
	_ = n(496675),
	E = n(944486),
	f = n(938475),
	h = n(700785),
	p = n(709054),
	m = n(981631),
	I = n(474936),
	T = n(689938);
let { GUILD_VOICE: g, GUILD_CATEGORY: S, GUILD_STAGE_VOICE: A } = m.d4z;
function N(e, t) {
	return e === t || e === S;
}
function v(e, t, n) {
	let i = h.Hn;
	return (
		((0, u.r8)(t) || t === S) && (i = r.IH(i, m.Plq.VIEW_CHANNEL)),
		(N(t, g) || N(t, A)) && ((i = r.IH(i, m.Plq.VIEW_CHANNEL)), (i = r.IH(i, m.Plq.CONNECT))),
		{
			id: e,
			type: n,
			deny: h.Hn,
			allow: i
		}
	);
}
function O(e, t, n) {
	let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
		s = [];
	if (n.length > 0 || a) {
		var o, l, c;
		let n;
		s.push(
			((o = e),
			(l = t),
			(c = i.BN.ROLE),
			(n = h.Hn),
			((0, u.r8)(l) || l === S) && (n = r.IH(n, m.Plq.VIEW_CHANNEL)),
			N(l, g) && ((n = r.IH(n, m.Plq.VIEW_CHANNEL)), (n = r.IH(n, m.Plq.CONNECT))),
			{
				id: o,
				type: c,
				allow: h.Hn,
				deny: n
			})
		);
	}
	return (
		n.forEach((e) => {
			s.push(v(e, t, i.BN.ROLE));
		}),
		s
	);
}
function R(e, t) {
	return v(e, t, i.BN.MEMBER);
}
function C(e, t) {
	return v(e, t, i.BN.ROLE);
}
function y(e) {
	return [
		{
			id: e,
			type: i.BN.ROLE,
			deny: m.Plq.SEND_MESSAGES,
			allow: h.Hn
		}
	];
}
function D(e, t, n) {
	var r, i;
	let a = e.getGuildId(),
		o = n.getGuild(a),
		l = null !== (r = null == o ? void 0 : o.maxVideoChannelUsers) && void 0 !== r ? r : -1,
		u = null !== (i = null == o ? void 0 : o.maxStageVideoChannelUsers) && void 0 !== i ? i : -1,
		c = f.ZP.countVoiceStatesForChannel(e.id),
		d = f.ZP.getVoiceStatesForChannel(e),
		E = _.Z.can(m.Plq.MOVE_MEMBERS, e) && _.Z.can(m.Plq.CONNECT, e),
		h = !1;
	h = e.type === A ? null != a && (t.hasVideo(e.id) || (0, s.a)(d)) && u > 0 && c >= u : null != a && t.hasVideo(e.id) && l > 0 && c >= l + (E ? 1 : 0);
	let p = e.userLimit > 0 && c >= e.userLimit;
	return h || (p && !E);
}
function L(e, t) {
	return t.isGuildStageVoice() ? m.epw : null == e ? m.eWB : Math.max(e.hasFeature(m.oNc.VIP_REGIONS) ? I.HO[m.Eu4.TIER_3].limits.bitrate : m.eWB, I.HO[e.premiumTier].limits.bitrate);
}
function b(e) {
	let { channels: t, selectedChannelId: n, selectedVoiceChannelId: r, voiceStates: i } = e;
	return (function (e) {
		let { channels: t, selectedChannelId: n, selectedVoiceChannelId: r, voiceStates: i } = e,
			a = [];
		return (
			t.forEach((e) => {
				if (e.id === r || e.id === n) return;
				let t = i[e.id];
				null != t &&
					(e.isGuildStageVoice()
						? t.forEach((e) => {
								(0, l.gf)(e.voiceState) === l.xO.ON_STAGE && a.push(e);
							})
						: t.forEach((e) => a.push(e)));
			}),
			a
		);
	})({
		channels: t,
		selectedChannelId: n,
		selectedVoiceChannelId: r,
		voiceStates: i
	}).map((e) => e.user);
}
function M(e) {
	let { type: t } = e;
	switch (t) {
		case m.d4z.DM:
			return T.Z.Messages.DM;
		case m.d4z.GROUP_DM:
			return T.Z.Messages.GROUP_DM;
		case m.d4z.GUILD_TEXT:
			return T.Z.Messages.TEXT_CHANNEL;
		case m.d4z.GUILD_FORUM:
			return T.Z.Messages.FORUM_CHANNEL;
		case m.d4z.GUILD_MEDIA:
			return T.Z.Messages.MEDIA_CHANNEL;
		case m.d4z.GUILD_VOICE:
			return T.Z.Messages.VOICE_CHANNEL;
		case m.d4z.GUILD_STAGE_VOICE:
			return T.Z.Messages.STAGE_CHANNEL;
		case m.d4z.GUILD_ANNOUNCEMENT:
			return T.Z.Messages.NEWS_CHANNEL;
		case m.d4z.GUILD_STORE:
			return T.Z.Messages.STORE_CHANNEL;
		case m.d4z.GUILD_CATEGORY:
			return T.Z.Messages.CATEGORY;
		default:
			return null;
	}
}
function P(e) {
	if (null == e) return 'text';
	let t = e.isMediaChannel();
	if (e.type === m.d4z.GUILD_VOICE) return _.Z.can(m.Plq.CONNECT, e) ? 'voice' : 'voice-locked';
	if (e.type === m.d4z.GUILD_STAGE_VOICE) return _.Z.can(m.Plq.CONNECT, e) ? 'stage' : 'stage-locked';
	if (u.Ec.has(e.type)) return e.isForumPost() ? 'post' : 'thread';
	else if (e.type === m.d4z.GUILD_FORUM) return t ? 'media' : 'forum';
	else if (e.type === m.d4z.GUILD_MEDIA) return 'media';
	else if (u.sR.has(e.type)) return 'text';
}
function U(e) {
	let t;
	let n = c.Z.getChannel(E.Z.getLastSelectedChannelId());
	if (null != n && n.getGuildId() === e && n.type === m.d4z.GUILD_TEXT) t = n.id;
	else {
		let n = d.ZP.getDefaultChannel(e);
		t = null != n ? n.id : null;
	}
	return m.Z5c.CHANNEL(e, t);
}
function w(e, t, n, r) {
	return ''
		.concat(location.protocol, '//')
		.concat(location.host)
		.concat(m.Z5c.CHANNEL(e, t, n))
		.concat(null == r ? '' : '?summaryId='.concat(r));
}
function x(e, t, n, r) {
	let i;
	let a = e.getGuildId(),
		s = (0, o.BC)(a, t);
	if (null != t && s) {
		var l, u, c, d;
		(l = a),
			(u = t.id),
			(c = e.id),
			(d = p.default.castChannelIdAsMessageId(e.id)),
			(i =
				null == l || null == u || null == c
					? w(l, u, d)
					: ''
							.concat(location.protocol, '//')
							.concat(location.host)
							.concat(m.Z5c.CHANNEL_THREAD_VIEW(l, u, c, d)));
	} else i = null != r ? r : w(a, e.id, n);
	return i;
}
