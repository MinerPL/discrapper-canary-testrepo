n.d(t, {
	$U: function () {
		return g;
	},
	Rm: function () {
		return S;
	},
	aL: function () {
		return i;
	},
	em: function () {
		return m;
	},
	jv: function () {
		return h;
	},
	mV: function () {
		return T;
	},
	rK: function () {
		return p;
	},
	wV: function () {
		return I;
	}
}),
	n(47120),
	n(724458),
	n(653041),
	n(873546);
var i,
	a,
	s = n(661869),
	r = n(876215);
n(442837), n(638395);
var l = n(786761);
n(375954);
var o = n(306680),
	c = n(709054),
	d = n(505369);
n(109911);
var u = n(265164),
	_ = n(761080),
	E = n(584925);
function h(e) {
	return e < -1.5 ? 4 : e < 0 ? 3 : e > 0 ? 2 : 1;
}
async function m(e, t, n) {
	let i = u.Z.getHydratedItems(),
		a = e.slice(t, n);
	if (0 === a.length) return;
	let s = a.filter((e) => null == i[e.id]),
		r = s
			.filter((e) => e.type === _.Rr.MESSAGE)
			.map((e) => ({
				channel_id: e.data.channel_id,
				message_id: e.data.message_id
			})),
		l = s
			.filter((e) => e.type === _.Rr.SUMMARY)
			.map((e) => ({
				guild_id: e.data.guild_id,
				channel_id: e.data.channel_id,
				summary_id: e.data.summary_id
			})),
		o = s
			.filter((e) => e.type === _.Rr.ACTIVITY)
			.map((e) => ({
				user_id: e.data.user_id,
				content_id: e.data.content_id
			}));
	await d.Z.fetchHydrated(r, l, o, t, n);
}
((a = i || (i = {}))[(a.UNKNOWN = 0)] = 'UNKNOWN'),
	(a[(a.DEFAULT = 1)] = 'DEFAULT'),
	(a[(a.MORE = 2)] = 'MORE'),
	(a[(a.LESS = 3)] = 'LESS'),
	(a[(a.MUTED = 4)] = 'MUTED');
function I(e, t) {
	let n = [],
		i = [],
		a = 0;
	for (let t of e.messages)
		if (null != t.reactions) {
			if (n.length < 5)
				for (let e of t.reactions) {
					var s, r;
					(null == e.count_details ||
						(null !== (s = e.count_details.burst) && void 0 !== s ? s : 0) > 0 ||
						(null !== (r = e.count_details.normal) && void 0 !== r ? r : 0) > 0) &&
						n.push(e);
				}
			a += (function (e) {
				let t = 0;
				if (null != e.reactions) {
					let n = (null != e.reactions ? e.reactions : []).map((e) => {
						var t, n;
						return null == e.count_details
							? 0
							: (null !== (t = e.count_details.burst) && void 0 !== t ? t : 0) +
									(null !== (n = e.count_details.normal) && void 0 !== n ? n : 0);
					});
					n.length > 0 && (t = n.reduce((e, t) => e + t));
				}
				return t;
			})(t);
		}
	let o = null;
	for (let t of e.messages)
		if (null != t.author && o !== t.author.id && (i.push((0, l.e5)(t)), (o = t.author.id), i.length >= 3)) break;
	return {
		id: e.id,
		topic: e.topic,
		summShort: e.summ_short,
		people: Array.from(new Set(e.people)),
		startId: e.start_id,
		endId: e.end_id,
		count: e.count,
		channelId: e.channel_id,
		type: e.type,
		messages: i,
		reactions: n,
		messageIds: e.messages.map((e) => e.id),
		guildId: t,
		reactionCount: a,
		numTotalMessages: e.messages.length,
		source: e.source
	};
}
function g(e, t) {
	let n = o.ZP.ackMessageId(e);
	return null != n && c.default.extractTimestamp(t) > c.default.extractTimestamp(n);
}
function p(e) {
	return !1;
}
function T(e) {
	var t;
	return {
		id: e.id,
		type: _.Rr.CUSTOM_STATUS,
		activity: {
			id: e.id,
			author_id: e.data.user_id,
			author_type: s.i.USER,
			traits: [],
			participants: [],
			content_type: r.s.CUSTOM_STATUS,
			extra: {
				type: 'custom_status_extra',
				status: null !== (t = e.data.text) && void 0 !== t ? t : '',
				emoji_id: e.data.emoji_id,
				emoji_name: e.data.emoji_name,
				emoji_animated: e.data.emoji_animated
			}
		},
		score: e.score,
		score_components: e.score_components
	};
}
function S(e, t, n) {
	let i = E.Z.getReadTimestamp(e);
	null == i && (i = null == n ? void 0 : n[e]);
	let a = E.Z.getReadTimestamp(t);
	return (null == a && (a = null == n ? void 0 : n[t]), null == i && null == a)
		? 0
		: null == i
			? -1
			: null == a
				? 1
				: a - i;
}
