n.d(t, {
	Z: function () {
		return I;
	}
});
var i = n(872810),
	a = n(594190),
	s = n(199902),
	r = n(592125),
	l = n(430824),
	o = n(131951),
	c = n(496675),
	d = n(944486),
	u = n(449224),
	_ = n(382182),
	E = n(74299),
	h = n(960861),
	m = n(989941);
function I() {
	let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
	if (!(0, E.Z)(o.Z) || null != s.Z.getCurrentUserActiveStream()) return !1;
	let t = d.Z.getVoiceChannelId(),
		n = r.Z.getChannel(t);
	if (null == n) return !1;
	let I = n.getGuildId();
	if (!(0, _.JL)(n, l.Z, c.Z, !1)) return !1;
	if (h.ZP.enabled()) h.ZP.presentPicker();
	else {
		let t = (0, m.Z)(a.ZP, u.Z);
		if (null == t || (t.isLauncher && !e)) return !1;
		(0, i.WH)(I, n.id, { pid: t.pid });
	}
	return !0;
}
