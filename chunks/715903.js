n.d(t, {
	EY: function () {
		return c;
	},
	Ow: function () {
		return l;
	},
	no: function () {
		return u;
	},
	ux: function () {
		return d;
	}
}),
	n(47120),
	n(724458),
	n(653041),
	n(789020);
var r = n(442837),
	i = n(271383),
	a = n(630388),
	s = n(372897);
let o = [s.q.AUTOMOD_QUARANTINED_BIO, s.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME, s.q.AUTOMOD_QUARANTINED_CLAN_TAG];
function l(e) {
	return null == e ? new Set() : new Set(o.reduce((t, n) => ((0, a.yE)(null != e ? e : 0, n) && t.push(n), t), []));
}
function u(e) {
	return null == e ? new Set() : l(e.flags);
}
function c(e) {
	return (
		null != e &&
		null != e.flags &&
		o.some((t) => {
			var n;
			return (0, a.yE)(null !== (n = e.flags) && void 0 !== n ? n : 0, t);
		})
	);
}
function d(e) {
	return (0, r.e7)([i.ZP], () => null != e && c(i.ZP.getSelfMember(e)), [e]);
}
