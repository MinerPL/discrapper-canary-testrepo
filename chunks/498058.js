n.d(t, {
	Z: function () {
		return c;
	}
});
var i = n(470079),
	a = n(442837),
	s = n(592125),
	r = n(594174),
	l = n(292584),
	o = n(158631);
function c(e) {
	var t;
	let n = (0, a.e7)([r.default], () => r.default.getCurrentUser()),
		c = (0, a.e7)([s.Z], () => s.Z.getChannel(e)),
		d = (0, a.e7)([l.Z], () => (null != e ? l.Z.getBroadcastByChannel(e) : null)),
		u = (0, o.ZP)(),
		_ = i.useMemo(() => {
			var e, t;
			return null !== (t = null == c ? void 0 : null === (e = c.recipients) || void 0 === e ? void 0 : e.map((e) => r.default.getUser(e)).filter((e) => null != e && e.id !== (null == d ? void 0 : d.userId))) && void 0 !== t ? t : [];
		}, [null == d ? void 0 : d.userId, null == c ? void 0 : c.recipients]);
	return null == n ? [] : u ? _ : null !== (t = _.length > 0 ? [n].concat(_) : null == d ? void 0 : d.viewers) && void 0 !== t ? t : [];
}
