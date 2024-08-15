n.d(t, {
	Pe: function () {
		return z;
	},
	Pr: function () {
		return F;
	},
	Qe: function () {
		return r;
	},
	nB: function () {
		return q;
	}
}),
	n(47120),
	n(733860);
var r,
	i,
	a = n(658722),
	s = n.n(a),
	o = n(392711),
	l = n.n(o),
	u = n(913527),
	c = n.n(u),
	d = n(346610),
	_ = n(984933),
	E = n(699516),
	f = n(768119),
	h = n(944486),
	p = n(914010),
	m = n(246946),
	I = n(594174),
	T = n(483360),
	g = n(226951),
	S = n(51144),
	A = n(981631),
	N = n(689938);
function v() {
	return new Set(
		c()
			.months()
			.map((e) => e.toLowerCase())
	);
}
function O() {
	return new Set(
		c()
			.weekdays()
			.map((e) => e.toLowerCase())
	);
}
function R() {
	let e = new Date().getFullYear();
	return new Set(
		l()
			.range(2015, e + 1)
			.map((e) => e.toString())
	);
}
function C(e, t) {
	return [e, e.clone().add(1, t)];
}
function y(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
	return C(c()().startOf(e).add(t, e), e);
}
function D(e, t, n) {
	return C(c()(e, t).local(), n);
}
function L() {
	return {
		[N.Z.Messages.SEARCH_SHORTCUT_TODAY]: () => y('day'),
		[N.Z.Messages.SEARCH_SHORTCUT_YESTERDAY]: () => y('day', -1),
		[N.Z.Messages.SEARCH_SHORTCUT_WEEK]: () => y('week'),
		[N.Z.Messages.SEARCH_SHORTCUT_MONTH]: () => y('month'),
		[N.Z.Messages.SEARCH_SHORTCUT_YEAR]: () => y('year')
	};
}
let b = RegExp('(?:\\s*('.concat('([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})', '|').concat('([0-9]{4})-([0-9]{1,2})', '|').concat('\\d{4}', '|').concat('([^\\d\\s]+)', '))'), 'i'),
	M = RegExp('\\s*(true|false)', 'i');
function P(e) {
	return ''.concat(e, ':');
}
function U(e) {
	return RegExp(P(e), 'i');
}
function w(e) {
	let t;
	let n = e.getMatch(1),
		r = (e) => (null != e ? (null == e ? void 0 : e.id) : null);
	return null != (t = A.Xyh.test(n) ? n : n === A.ME ? r(I.default.getCurrentUser()) : null != e.getMatch(4) ? r(I.default.findByTag(e.getMatch(4))) : r(I.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData('userId', t), !0);
}
function x(e, t) {
	let n, r;
	let i = e.getFullMatch().trim().toLowerCase(),
		a = L()[i];
	return null != a ? ([n, r] = a()) : v().has(i) ? ([n, r] = D(i, 'MMMM', 'month')) : O().has(i) ? ([n, r] = D(i, 'dddd', 'day')) : R().has(i) ? ([n, r] = D(i, 'YYYY', 'year')) : ([n, r] = D(i, A.b2L, 'day')), !!(n.isValid() && r.isValid()) && ('before' === t ? ((r = n), (n = null)) : 'after' === t && ((n = r), (r = null)), e.setData('start', n), e.setData('end', r), !0);
}
function G(e) {
	let t = e.getMatch(1),
		n = p.Z.getGuildId(),
		r = _.ZP.getChannels(n)[_.sH].concat(_.ZP.getChannels(n)[_.Zb]),
		i = _.ZP.getTextChannelNameDisambiguations(n),
		a = l()
			.chain(r)
			.map((e) => {
				let { channel: t } = e;
				return t;
			})
			.find((e) => {
				var n, r;
				return t === (null !== (r = null === (n = i[e.id]) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : e.name);
			})
			.value();
	return null != a && (e.setData('channel', a), !0);
}
function k(e) {
	let t = {
		[N.Z.Messages.SEARCH_ANSWER_HAS_LINK]: 'link',
		[N.Z.Messages.SEARCH_ANSWER_HAS_EMBED]: 'embed',
		[N.Z.Messages.SEARCH_ANSWER_HAS_POLL]: 'poll',
		[N.Z.Messages.SEARCH_ANSWER_HAS_SNAPSHOT]: 'snapshot',
		[N.Z.Messages.SEARCH_ANSWER_HAS_ATTACHMENT]: 'file',
		[N.Z.Messages.SEARCH_ANSWER_HAS_VIDEO]: 'video',
		[N.Z.Messages.SEARCH_ANSWER_HAS_IMAGE]: 'image',
		[N.Z.Messages.SEARCH_ANSWER_HAS_SOUND]: 'sound',
		[N.Z.Messages.SEARCH_ANSWER_HAS_STICKER]: 'sticker'
	}[e.getMatch(1)];
	return null != t && '' !== t && (e.setData('has', t), !0);
}
function B() {
	return [...Array.from(v()), ...Array.from(O()), ...Array.from(R()), ...Object.keys(L())];
}
function F() {
	return l().sample(B());
}
function V(e, t, n) {
	return H(e, t, B()).map((e) => ({
		...e,
		group: n,
		key: ''.concat(n, '-').concat(e.text)
	}));
}
function H(e, t, n) {
	let r = e.toLocaleLowerCase();
	return l()(n)
		.filter((e) => s()(r, e.toLocaleLowerCase()))
		.take(t)
		.map((e) => ({ text: e }))
		.value();
}
function Z(e, t) {
	let n,
		r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
		i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
		a = f.Z.getSearchType(t),
		s = {
			query: (e = e.split('#')[0]),
			limit: r,
			request: i
		};
	switch (a) {
		case A.aib.GUILD:
			n = T.ZP.queryGuildUsers({
				...s,
				guildId: t
			});
			break;
		case A.aib.CHANNEL:
			n = T.ZP.queryChannelUsers({
				...s,
				channelId: t
			});
			break;
		case A.aib.DMS:
			n = T.ZP.queryUsers(e, r, !0, i, () => !0);
			break;
		default:
			return [];
	}
	return n
		.filter((e) => {
			let { record: t } = e;
			return !E.Z.isBlocked(t.id);
		})
		.map((e) => {
			let { record: t } = e;
			return {
				text: S.ZP.getUserTag(t),
				user: t
			};
		});
}
function Y() {
	return f.Z.getSearchType() === A.aib.GUILD;
}
function j() {
	return !m.Z.hidePersonalInformation;
}
let W = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
((i = r || (r = {})).FILTER = 'FILTER'), (i.ANSWER = 'ANSWER');
let K = {};
function z() {
	Object.assign(
		K,
		(function () {
			let { canForwardMessages: e } = (0, d.WT)({ location: 'SearchTokens' }, { autoTrackExposure: !1 }),
				t = e ? [N.Z.Messages.SEARCH_ANSWER_HAS_SNAPSHOT] : [],
				n = [N.Z.Messages.SEARCH_ANSWER_HAS_LINK, N.Z.Messages.SEARCH_ANSWER_HAS_EMBED, N.Z.Messages.SEARCH_ANSWER_HAS_POLL, N.Z.Messages.SEARCH_ANSWER_HAS_ATTACHMENT, N.Z.Messages.SEARCH_ANSWER_HAS_VIDEO, N.Z.Messages.SEARCH_ANSWER_HAS_IMAGE, N.Z.Messages.SEARCH_ANSWER_HAS_SOUND, N.Z.Messages.SEARCH_ANSWER_HAS_STICKER, ...t];
			return {
				[A.dCx.FILTER_FROM]: {
					regex: U(N.Z.Messages.SEARCH_FILTER_FROM),
					componentType: 'FILTER',
					key: P(N.Z.Messages.SEARCH_FILTER_FROM),
					plainText: N.Z.Messages.SEARCH_FILTER_FROM,
					validator: j,
					getAutocompletions: Z
				},
				[A.dCx.ANSWER_USERNAME_FROM]: {
					follows: [A.dCx.FILTER_FROM],
					regex: W,
					validator: w,
					mutable: !0,
					componentType: 'ANSWER',
					queryKey: 'author_id'
				},
				[A.dCx.FILTER_MENTIONS]: {
					regex: U(N.Z.Messages.SEARCH_FILTER_MENTIONS),
					componentType: 'FILTER',
					key: P(N.Z.Messages.SEARCH_FILTER_MENTIONS),
					plainText: N.Z.Messages.SEARCH_FILTER_MENTIONS,
					validator: j,
					getAutocompletions: Z
				},
				[A.dCx.ANSWER_USERNAME_MENTIONS]: {
					follows: [A.dCx.FILTER_MENTIONS],
					regex: W,
					validator: w,
					mutable: !0,
					componentType: 'ANSWER',
					queryKey: 'mentions'
				},
				[A.dCx.FILTER_HAS]: {
					regex: U(N.Z.Messages.SEARCH_FILTER_HAS),
					componentType: 'FILTER',
					key: P(N.Z.Messages.SEARCH_FILTER_HAS),
					plainText: N.Z.Messages.SEARCH_FILTER_HAS,
					getAutocompletions: (e, t, r) => H(e, r, n)
				},
				[A.dCx.ANSWER_HAS]: {
					regex: RegExp('(?:\\s*-?('.concat(n.map((e) => g.Z.escape(e)).join('|'), '))'), 'i'),
					follows: [A.dCx.FILTER_HAS],
					validator: k,
					componentType: 'ANSWER',
					queryKey: 'has'
				},
				[A.dCx.FILTER_FILE_TYPE]: {
					regex: U(N.Z.Messages.SEARCH_FILTER_FILE_TYPE),
					key: P(N.Z.Messages.SEARCH_FILTER_FILE_TYPE),
					plainText: N.Z.Messages.SEARCH_FILTER_FILE_TYPE,
					componentType: 'FILTER'
				},
				[A.dCx.ANSWER_FILE_TYPE]: {
					regex: /(?:\s*([^\s]+))/,
					follows: [A.dCx.FILTER_FILE_TYPE],
					mutable: !0,
					componentType: 'ANSWER',
					queryKey: 'attachment_extensions'
				},
				[A.dCx.FILTER_FILE_NAME]: {
					regex: U(N.Z.Messages.SEARCH_FILTER_FILE_NAME),
					key: P(N.Z.Messages.SEARCH_FILTER_FILE_NAME),
					plainText: N.Z.Messages.SEARCH_FILTER_FILE_NAME,
					componentType: 'FILTER'
				},
				[A.dCx.ANSWER_FILE_NAME]: {
					regex: /(?:\s*([^\s]+)(?=\s))/,
					follows: [A.dCx.FILTER_FILE_NAME],
					mutable: !0,
					componentType: 'ANSWER',
					queryKey: 'attachment_filename'
				},
				[A.dCx.FILTER_BEFORE]: {
					regex: U(N.Z.Messages.SEARCH_FILTER_BEFORE),
					componentType: 'FILTER',
					key: P(N.Z.Messages.SEARCH_FILTER_BEFORE),
					plainText: N.Z.Messages.SEARCH_FILTER_BEFORE,
					getAutocompletions: (e, t, n) => V(e, n, A.dCx.FILTER_BEFORE)
				},
				[A.dCx.FILTER_ON]: {
					regex: U('('.concat(N.Z.Messages.SEARCH_FILTER_ON, '|').concat(N.Z.Messages.SEARCH_FILTER_DURING, ')')),
					componentType: 'FILTER',
					key: P(N.Z.Messages.SEARCH_FILTER_DURING),
					plainText: N.Z.Messages.SEARCH_FILTER_DURING,
					getAutocompletions: (e, t, n) => V(e, n, A.dCx.FILTER_ON)
				},
				[A.dCx.FILTER_AFTER]: {
					regex: U(N.Z.Messages.SEARCH_FILTER_AFTER),
					componentType: 'FILTER',
					key: P(N.Z.Messages.SEARCH_FILTER_AFTER),
					plainText: N.Z.Messages.SEARCH_FILTER_AFTER,
					getAutocompletions: (e, t, n) => V(e, n, A.dCx.FILTER_AFTER)
				},
				[A.dCx.ANSWER_BEFORE]: {
					regex: b,
					follows: [A.dCx.FILTER_BEFORE],
					componentType: 'ANSWER',
					mutable: !0,
					validator: (e) => x(e, 'before')
				},
				[A.dCx.ANSWER_ON]: {
					regex: b,
					follows: [A.dCx.FILTER_ON],
					componentType: 'ANSWER',
					mutable: !0,
					validator: (e) => x(e, 'on')
				},
				[A.dCx.ANSWER_AFTER]: {
					regex: b,
					follows: [A.dCx.FILTER_AFTER],
					componentType: 'ANSWER',
					mutable: !0,
					validator: (e) => x(e, 'after')
				},
				[A.dCx.FILTER_IN]: {
					regex: U(N.Z.Messages.SEARCH_FILTER_IN),
					componentType: 'FILTER',
					key: P(N.Z.Messages.SEARCH_FILTER_IN),
					plainText: N.Z.Messages.SEARCH_FILTER_IN,
					validator: Y,
					getAutocompletions(e, t, n) {
						'#' === e[0] && (e = e.substring(1));
						let r = T.ZP.queryChannels({
							query: e,
							type: _.sH,
							guildId: t,
							limit: 1 / 0
						})
							.concat(
								T.ZP.queryChannels({
									query: e,
									type: _.Zb,
									guildId: t,
									limit: 1 / 0
								})
							)
							.map((e) => {
								let { record: t } = e;
								return t;
							})
							.filter((e) => !e.isThread());
						if ('' === e.trim()) {
							let e = h.Z.getChannelId(t),
								n = r.find((t) => t.id === e);
							null != n && (r.splice(r.indexOf(n), 1), r.unshift(n));
						}
						let i = _.ZP.getTextChannelNameDisambiguations(t);
						return l()(r)
							.take(n)
							.map((e) => {
								var t, n;
								return {
									text: ''.concat(null !== (n = null === (t = i[e.id]) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : e.name),
									channel: e
								};
							})
							.value();
					}
				},
				[A.dCx.ANSWER_IN]: {
					regex: /(?:\s*#?([^ ]+))/i,
					mutable: !0,
					follows: [A.dCx.FILTER_IN],
					componentType: 'ANSWER',
					validator: G,
					queryKey: 'channel_id'
				},
				[A.dCx.FILTER_PINNED]: {
					regex: U(N.Z.Messages.SEARCH_FILTER_PINNED),
					componentType: 'FILTER',
					key: P(N.Z.Messages.SEARCH_FILTER_PINNED),
					plainText: N.Z.Messages.SEARCH_FILTER_PINNED,
					getAutocompletions: () => [{ text: 'true' }, { text: 'false' }]
				},
				[A.dCx.ANSWER_PINNED]: {
					regex: M,
					componentType: 'ANSWER',
					follows: [A.dCx.FILTER_PINNED],
					queryKey: 'pinned',
					validator: (e) => {
						let t = e.getMatch(1);
						return 'true' === t ? (e.setData('pinned', !0), !0) : 'false' === t && (e.setData('pinned', !1), !0);
					}
				}
			};
		})()
	);
}
function q(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(K).length;
	return l()(K)
		.keys()
		.filter((e) => A.TNx.test(e))
		.filter((e) => null != K[e].key)
		.map((e) => ({
			token: e,
			text: K[e].key
		}))
		.filter((t) => {
			let { text: n } = t;
			return s()(e.toLowerCase(), n);
		})
		.take(t)
		.value();
}
t.ZP = K;
