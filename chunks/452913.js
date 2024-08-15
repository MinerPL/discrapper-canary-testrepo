var i = t(392711),
	l = t.n(i),
	o = t(853856),
	r = t(706590),
	E = t(905423),
	a = t(592125),
	u = t(496675),
	s = t(944486),
	d = t(771845),
	_ = t(774343),
	c = t(475468),
	C = t(981631);
n.Z = l().throttle(function () {
	let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
		n = d.ZP.getFlattenedGuildIds(),
		t = (function (e) {
			let n = E.Z.getState().guildId;
			if (null == n) return -2;
			if (n === C.I_8) return -1;
			let t = e.indexOf(n);
			return -1 === t ? -2 : t;
		})(n);
	if (
		(-1 === (t += e) && !(0, r.z)(o.Z, a.Z, u.Z) && (t += e), -3 === t && (t = n.length - 1), t >= n.length || -2 === t)
	) {
		(0, c.z)(_.Z.getHomeLink());
		return;
	}
	let i = -1 === t ? C.I_8 : n[t],
		l = s.Z.getChannelId(i);
	(0, c.K)(i, l === i ? null : l, !1);
}, C.aZC);
