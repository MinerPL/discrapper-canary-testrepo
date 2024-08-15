n.d(t, {
	TV: function () {
		return c;
	},
	b8: function () {
		return u;
	},
	k$: function () {
		return o;
	},
	kr: function () {
		return l;
	},
	w5: function () {
		return s;
	},
	ym: function () {
		return a;
	}
}),
	n(653041);
var r = n(570140),
	i = n(509848);
function a(e, t) {
	r.Z.dispatch({
		type: 'GUILD_SUBSCRIPTIONS_MEMBERS_ADD',
		guildId: e,
		userIds: t
	});
}
function s(e, t) {
	r.Z.dispatch({
		type: 'GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE',
		guildId: e,
		userIds: t
	});
}
function o(e) {
	r.Z.dispatch({
		type: 'GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES',
		guildId: e
	});
}
function l(e) {
	r.Z.dispatch({
		type: 'GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES',
		guildId: e
	});
}
function u(e, t, n) {
	r.Z.dispatch({
		type: 'GUILD_SUBSCRIPTIONS_CHANNEL',
		guildId: e,
		channelId: t,
		ranges: n
	});
}
function c(e) {
	let { guildId: t, channelId: n, y: r, height: a, rowHeight: s } = e;
	function o(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
		return Math.max(0, Math.ceil(Math.ceil(e / s)) + t);
	}
	let l = [];
	function c(e) {
		let t = e + (i.dj - 1);
		return l.push([e, t]), t + 1;
	}
	let d = o(0.5 * a),
		_ = o(r, -d),
		E = o(r + a, d);
	for (_ > 0 && (_ = Math.max(c(0), _)), _ = Math.floor(_ / i.dj) * i.dj; _ <= E; ) _ = c(_);
	u(t, n, l);
}
