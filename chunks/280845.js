t.d(n, {
	U: function () {
		return f;
	},
	o: function () {
		return g;
	}
}),
	t(47120);
var i = t(275726),
	s = t(442837),
	l = t(71619),
	a = t(665906),
	r = t(496675),
	o = t(594174),
	u = t(981631),
	d = t(231338);
function c(e, n, t) {
	let s;
	return (
		(s = e.isPrivate() ? !e.isSystemDM() : t.can(d.Pl.SEND_MESSAGES, e) && t.can(d.Pl.READ_MESSAGE_HISTORY, e)) &&
		i.V.REPLYABLE.has(n.type)
	);
}
function E(e, n, t, i, s) {
	let l = n.hasFlag(u.iLy.EPHEMERAL),
		a = n.state === u.yb.SENT,
		r = !e.isArchivedThread() || s;
	return t && a && !l && !i && r;
}
function f(e, n) {
	var t;
	let i = (0, a.tc)(e),
		[, o] = (0, l.AB)(null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : void 0),
		u = (0, s.e7)([r.Z], () => null != e && null != n && c(e, n, r.Z));
	return null != e && null != n && E(e, n, u, o, i);
}
function g(e, n) {
	var t;
	let i = (0, a.kn)(e),
		s = c(e, n, r.Z),
		u = o.default.getCurrentUser(),
		[, d] = (0, l.s5)(null == u ? void 0 : u.id, null !== (t = e.getGuildId()) && void 0 !== t ? t : void 0);
	return E(e, n, s, d, i);
}
