n.d(t, {
	Z: function () {
		return o;
	}
});
var l = n(592125),
	a = n(430824),
	s = n(594174),
	i = n(981631);
function r(e) {
	if (!e.isPrivate()) {
		let t = a.Z.getGuild(e.guild_id);
		return null != t && t.hasFeature(i.oNc.INTERNAL_EMPLOYEE_ONLY);
	}
	return e.recipients.every((e) => {
		let t = s.default.getUser(e);
		return null != t && t.isStaff();
	});
}
function o(e, t) {
	var n;
	if (!(null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.isStaff())) return !1;
	let a = l.Z.getChannel(e.channel_id);
	return (
		!!(null != a && r(a)) &&
		t.some((e) => {
			let t = l.Z.getChannel(e);
			return !(null == t || t.isPrivate()) && !r(t);
		})
	);
}
