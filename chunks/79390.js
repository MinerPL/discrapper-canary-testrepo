n.d(t, {
	D$: function () {
		return R;
	},
	N4: function () {
		return L;
	},
	UI: function () {
		return v;
	},
	Uu: function () {
		return S;
	},
	_N: function () {
		return O;
	},
	cS: function () {
		return C;
	},
	cZ: function () {
		return b;
	},
	e1: function () {
		return M;
	},
	eQ: function () {
		return N;
	},
	fw: function () {
		return A;
	},
	uY: function () {
		return y;
	},
	x9: function () {
		return D;
	}
}),
	n(757143),
	n(47120),
	n(724458);
var r = n(392711),
	i = n.n(r),
	a = n(772848),
	s = n(263568),
	o = n(468194),
	l = n(442837),
	u = n(566006),
	c = n(739566),
	d = n(592125),
	_ = n(542578),
	E = n(375954),
	f = n(496675),
	h = n(699516),
	p = n(70956),
	I = n(5192),
	m = n(489887),
	T = n(981631),
	g = n(689938);
function S() {
	return {
		text: void 0,
		image: void 0,
		localCreationAnswerId: (function () {
			return (0, a.Z)();
		})()
	};
}
function A(e) {
	return e.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, '');
}
function N(e) {
	for (let t of e.reactions) if (null == t.me_vote) return !0;
	return !1;
}
function v(e) {
	return (0, l.e7)(
		[f.Z],
		() =>
			!!(null != e && T.TPd.POLLS.has(e.type)) &&
			(!!e.isPrivate() || (f.Z.can(T.Plq.SEND_MESSAGES, e) && f.Z.can(T.Plq.SEND_POLLS, e)))
	);
}
function O() {
	return !1;
}
function R(e, t, n) {
	return 0 === e.length && null == t.find((e) => C(e, n));
}
function C(e, t) {
	if (t === s.C.IMAGE_ONLY_ANSWERS) return null != e.image;
	{
		var n;
		let t = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
		return null != t && t.length > 0;
	}
}
function y(e, t) {
	var n;
	let r = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
	return t === s.C.DEFAULT && null != e.image && (null == r || 0 === r.length);
}
function D(e) {
	var t, n;
	if (null == e) return;
	let r =
		null == e
			? void 0
			: null === (t = e.answers) || void 0 === t
				? void 0
				: t.map((e, t) => {
						var n, r;
						let i = null === (n = e.poll_media) || void 0 === n ? void 0 : n.emoji,
							a = {
								...e.poll_media,
								emoji:
									null != i
										? {
												id: i.id,
												name: null !== (r = i.name) && void 0 !== r ? r : ''
											}
										: void 0
							};
						return {
							...e,
							answer_id: t + 1,
							poll_media: a
						};
					});
	let i =
		(null == e ? void 0 : e.duration) != null
			? ((n = e.duration), new Date(Date.now() + n * p.Z.Millis.HOUR).toISOString())
			: '0';
	return {
		...e,
		expiry: i,
		answers: r
	};
}
function L(e) {
	let t = (0, c.ZH)(e),
		n = (function (e, t) {
			var n, r, i, a;
			let s =
				null !==
					(a =
						null === (i = e.embeds[0]) || void 0 === i
							? void 0
							: null === (r = i.fields) || void 0 === r
								? void 0
								: null === (n = r.find((e) => 'poll_question_text' === e.rawName)) || void 0 === n
									? void 0
									: n.rawValue) && void 0 !== a
					? a
					: '';
			return null != t ? (0, o.aF)(s, t) : s;
		})(e, m.Dv);
	return g.Z.Messages.POLL_RESULT_REPLY_TEXT.format({
		username: t.nick,
		title: n
	});
}
function b(e) {
	return e.reduce((e, t) => {
		var n, r;
		return (
			e + (null !== (r = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== r ? r : 0)
		);
	}, 0);
}
function M(e, t, n) {
	var r, a;
	let s = E.Z.getMessage(t, e);
	if (null == s) return '';
	let o = s.getReaction({
			id: n,
			name: '',
			animated: !1
		}),
		l =
			null !== (a = null == o ? void 0 : null === (r = o.count_details) || void 0 === r ? void 0 : r.vote) &&
			void 0 !== a
				? a
				: 0,
		c = (function (e, t) {
			let n = e.getChannelId(),
				r = _.Z.getReactions(
					n,
					e.id,
					{
						id: t,
						name: '',
						animated: !1
					},
					m.$J,
					u.O.VOTE
				),
				a = d.Z.getChannel(n),
				s = null == a || a.isPrivate() ? null : a.getGuildId();
			return i()(r)
				.reject((e) => h.Z.isBlocked(e.id))
				.take(m.$J)
				.map((e) => I.ZP.getName(s, null == a ? void 0 : a.id, e))
				.value();
		})(s, n);
	return 0 === c.length
		? ''
		: (function (e, t) {
				let n = Math.max(0, t - e.length);
				if (1 === e.length)
					return n > 0
						? g.Z.Messages.POLL_VOTES_TOOLTIP_1_N.format({
								a: e[0],
								n: n.toLocaleString()
							})
						: e[0];
				if (2 === e.length)
					return n > 0
						? g.Z.Messages.POLL_VOTES_TOOLTIP_2_N.format({
								a: e[0],
								b: e[1],
								n: n.toLocaleString()
							})
						: g.Z.Messages.POLL_VOTES_TOOLTIP_2.format({
								a: e[0],
								b: e[1]
							});
				if (3 !== e.length) return g.Z.Messages.POLL_VOTES_TOOLTIP_N.format({ n: n.toLocaleString() });
				else
					return n > 0
						? g.Z.Messages.POLL_VOTES_TOOLTIP_3_N.format({
								a: e[0],
								b: e[1],
								c: e[2],
								n: n.toLocaleString()
							})
						: g.Z.Messages.POLL_VOTES_TOOLTIP_3.format({
								a: e[0],
								b: e[1],
								c: e[2]
							});
			})(c, l);
}
