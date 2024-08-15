n.d(t, {
	Z: function () {
		return d;
	}
});
var s = n(470079),
	a = n(442837),
	r = n(598077),
	i = n(699516),
	l = n(295226),
	o = n(786397),
	c = n(474936);
function d() {
	let e = (0, o.w)(c.a7),
		t = (0, a.e7)([l.Z], () => l.Z.getReferrer(null == e ? void 0 : e.trial_id)),
		n = (0, a.e7)([i.Z], () => null == t || i.Z.isBlocked(t.id));
	return s.useMemo(() => (n || null == t ? null : new r.Z(t)), [t, n]);
}
