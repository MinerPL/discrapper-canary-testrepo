E.d(_, {
	Fo: function () {
		return g;
	},
	KY: function () {
		return f;
	},
	Uo: function () {
		return Z;
	},
	fU: function () {
		return H;
	},
	qw: function () {
		return p;
	},
	tn: function () {
		return P;
	}
}),
	E(733860);
var s = E(470079),
	T = E(658722),
	I = E.n(T),
	n = E(913527),
	t = E.n(n),
	A = E(442837),
	r = E(704215),
	a = E(45114),
	N = E(740504),
	l = E(605236),
	L = E(931261),
	S = E(540126),
	D = E(671098),
	U = E(703656),
	G = E(592125),
	O = E(324067),
	o = E(306680),
	i = E(709054),
	M = E(981631),
	u = E(176505),
	R = E(443063),
	c = E(490897),
	C = E(689938);
function d(e, _) {
	e.index = _;
}
function g(e, _, E, T) {
	T = T.toLowerCase();
	let n = (0, L.g)(e),
		t = s.useCallback((e, _) => !(n && e.channel.hasFlag(u.zZ.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== M.d4z.GUILD_DIRECTORY && (0 === _.length || I()(_, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(_)), [n]);
	return s.useMemo(() => {
		let e = {
			null: [],
			_categories: []
		};
		return (
			E[M.d4z.GUILD_CATEGORY].forEach((E) => {
				let { channel: s } = E;
				'null' === s.id && (e.null = _.null.filter((e) => t(e, T))), (e[s.id] = _[s.id].filter((e) => t(e, T)));
			}),
			(e._categories = _._categories.filter((_) => 'null' === _.channel.id || 0 === T.length || e[_.channel.id].length > 0)),
			(0, N.Z)(e._categories, e).forEach(d),
			e
		);
	}, [_, E, t, T]);
}
function f(e) {
	let _ = e.getSections(!1);
	if (_[S.wZ] > 0)
		switch (e.getGuildActionSection().getRow(0)) {
			case R.z.GUILD_HOME:
				return u.oC.GUILD_HOME;
			case R.z.GUILD_ROLE_SUBSCRIPTIONS:
				return u.oC.ROLE_SUBSCRIPTIONS;
			case R.z.GUILD_MEMBER_APPLICATIONS:
				return u.oC.MEMBER_APPLICATIONS;
		}
	for (let s = S.wd; s < e.voiceChannelsSectionNumber; s++)
		if (_[s] > 0) {
			var E;
			let _ = null === (E = e.getChannelFromSectionRow(s, 0)) || void 0 === E ? void 0 : E.channel;
			if (null != _) return _.id;
		}
	return null;
}
function Z(e, _) {
	let E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
	(0, D.n)(e, _),
		(0, a.y5)(
			_.map((e) => ({
				channelId: e,
				readStateType: c.W.CHANNEL,
				messageId: o.ZP.lastMessageId(e)
			}))
		),
		null != E && (0, U.uL)(M.Z5c.CHANNEL(e, E));
}
function P(e, _, E, s) {
	let T = (0, l.wE)(r.z.CHANNEL_BROWSER_NUX),
		I = (0, A.cj)(
			[G.Z],
			() => {
				let _ = {},
					E = G.Z.getMutableGuildChannelsForGuild(e);
				for (let e in E) {
					let { parent_id: T } = E[e];
					if (null != T) {
						var s;
						_[T] = (null !== (s = _[T]) && void 0 !== s ? s : 0) + 1;
					}
				}
				return _;
			},
			[e]
		),
		n = _._categories.map((e) => {
			let s = _[e.channel.id];
			return {
				rowCount: 'null' !== e.channel.id && 0 === I[e.channel.id] ? 1 : s.length,
				rowHeight: 0 === s.length ? 0 : E
			};
		});
	return (
		!T &&
			null != s &&
			n.unshift({
				rowCount: 1,
				rowHeight: s
			}),
		n
	);
}
function H(e) {
	var _, E;
	let s = (0, A.e7)([O.Z], () => O.Z.getCategories(e)),
		T = s._categories.length,
		I = s._categories[s._categories.length - 1];
	if (null == I) return 0;
	let n = s[null !== (E = null === (_ = I.channel) || void 0 === _ ? void 0 : _.id) && void 0 !== E ? E : 'null'];
	return null == n ? 0 : 0 === n.length ? I.index + 2 - T : n[n.length - 1].index + 2 - T;
}
function p(e) {
	var _;
	return C.Z.Messages.CHANNEL_BROWSER_ACTIVE_TEXT.format({ timeAgo: t()(i.default.extractTimestamp(null !== (_ = o.ZP.lastMessageId(e)) && void 0 !== _ ? _ : e)).fromNow() });
}
