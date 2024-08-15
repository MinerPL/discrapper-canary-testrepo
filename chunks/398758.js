n.d(t, {
	DM: function () {
		return u;
	},
	r1: function () {
		return c;
	},
	te: function () {
		return d;
	}
});
var r = n(442837),
	i = n(430824),
	a = n(496675),
	s = n(9156),
	o = n(594174),
	l = n(981631);
function u(e) {
	return (0, r.e7)([s.ZP, i.Z, o.default], () => {
		var t, n, r, a;
		let u = s.ZP.isOptInEnabled(e),
			c =
				null !== (r = null === (t = i.Z.getGuild(e)) || void 0 === t ? void 0 : t.hasFeature(l.oNc.COMMUNITY)) &&
				void 0 !== r &&
				r,
			d =
				null !== (a = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.isStaff()) &&
				void 0 !== a &&
				a;
		return u && (c || d);
	});
}
function c(e) {
	let t = i.Z.getGuild(e),
		n = o.default.getCurrentUser();
	return (
		null != e && null != t && null != n && (t.hasFeature(l.oNc.COMMUNITY) || n.isStaff()) && s.ZP.isOptInEnabled(e)
	);
}
function d(e) {
	return (0, r.e7)([i.Z, a.Z], () => {
		var t;
		let n = i.Z.getGuild(e),
			r = a.Z.can(l.Plq.MANAGE_GUILD, n),
			s = a.Z.can(l.Plq.MANAGE_ROLES, n),
			o = null !== (t = null == n ? void 0 : n.hasFeature(l.oNc.GUILD_ONBOARDING_EVER_ENABLED)) && void 0 !== t && t;
		return null != n && r && s && !o;
	});
}
