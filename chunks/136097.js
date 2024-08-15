t.d(s, {
	h: function () {
		return d;
	},
	p: function () {
		return _;
	}
}),
	t(47120);
var n = t(470079),
	a = t(913527),
	i = t.n(a),
	r = t(442837),
	o = t(314897),
	l = t(673096),
	c = t(689938);
function d() {
	let e = (0, r.cj)([l.Z], () => l.Z.getSessions());
	return n.useMemo(() => {
		let s = [...e],
			t = null,
			n = o.default.getAuthSessionIdHash();
		if (null != n) {
			let e = s.findIndex((e) => e.id_hash === n);
			e >= 0 && (t = s.splice(e, 1)[0]);
		}
		return (
			s.sort((e, s) => s.approx_last_used_time.valueOf() - e.approx_last_used_time.valueOf()),
			{
				currentSession: t,
				otherSessions: s
			}
		);
	}, [e]);
}
function _(e) {
	return (Date.now() - e.valueOf()) / 1000 / 60 / 60 < 1
		? c.Z.Messages.AUTH_SESSIONS_ACTIVE_RECENTLY
		: i()(e).fromNow();
}
