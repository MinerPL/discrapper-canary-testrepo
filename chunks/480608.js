n.d(t, {
	E: function () {
		return d;
	},
	H: function () {
		return E;
	}
});
var r = n(31775),
	i = n.n(r),
	a = n(544891),
	s = n(570140),
	o = n(749210),
	l = n(243730),
	u = n(981631);
async function c(e) {
	try {
		s.Z.dispatch({
			type: 'GUILD_ROLE_MEMBER_COUNT_FETCH_START',
			guildId: e
		});
		let t = (await a.tn.get({ url: u.ANM.GUILD_ROLE_MEMBER_COUNTS(e) })).body;
		s.Z.dispatch({
			type: 'GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS',
			guildId: e,
			roleMemberCount: t
		});
	} catch (t) {
		s.Z.dispatch({
			type: 'GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE',
			guildId: e
		});
	}
}
async function d(e) {
	l.Z.shouldFetch(e) && (await c(e));
}
let _ = new (i())({ maxAge: 10000 });
function E(e, t) {
	let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
		r = ''.concat(e, '-').concat(t);
	if (!n || null == _.get(r)) {
		var i, s;
		return _.set(r, !0), (i = e), (s = t), a.tn.get({ url: u.ANM.GUILD_ROLE_MEMBER_IDS(i, s) }).then((e) => (o.Z.requestMembersById(i, e.body, !1), e.body.length));
	}
	return Promise.resolve(null);
}
