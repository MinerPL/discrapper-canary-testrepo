n.d(t, {
	_T: function () {
		return d;
	},
	y: function () {
		return u;
	}
});
var r = n(442837),
	i = n(592125),
	a = n(271383),
	s = n(699516),
	o = n(51144),
	l = n(689938);
function u(e, t, n) {
	if (null == n) return null;
	if (null != e) return a.ZP.getNick(e, n.id);
	if (null != t) {
		let e = i.Z.getChannel(t);
		if (null == e ? void 0 : e.isPrivate()) return s.Z.getNickname(n.id);
	}
	return null;
}
function c(e, t, n) {
	var r;
	return null == n
		? l.Z.Messages.UNKNOWN_USER_MENTION_PLACEHOLDER
		: null !== (r = u(e, t, n)) && void 0 !== r
			? r
			: o.ZP.getName(n);
}
function d(e, t, n) {
	return (0, r.e7)([a.ZP, i.Z, s.Z], () => c(e, t, n));
}
t.ZP = {
	getNickname: u,
	getName: c,
	useName: d
};
