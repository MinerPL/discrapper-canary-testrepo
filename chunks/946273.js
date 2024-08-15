n.d(t, {
	vV: function () {
		return u;
	}
}),
	n(789020);
var r = n(442837),
	i = n(271383),
	a = n(430824),
	s = n(594174),
	o = n(630388),
	l = n(372897);
let u = (e, t) => {
	var n, u, c;
	let d = (0, r.e7)([i.ZP], () => {
			var n, r;
			return (0, o.yE)(null !== (r = null === (n = i.ZP.getMember(e, t)) || void 0 === n ? void 0 : n.flags) && void 0 !== r ? r : 0, l.q.DID_REJOIN);
		}),
		_ = (0, r.e7)([a.Z], () => {
			var t;
			return null === (t = a.Z.getGuild(e)) || void 0 === t ? void 0 : t.isNew();
		}),
		E = (0, r.e7)([s.default], () => {
			var e;
			return null === (e = s.default.getUser(t)) || void 0 === e ? void 0 : e.bot;
		});
	return (
		(n = e),
		(u = { maxDaysOld: 7 }),
		(c = t),
		(0, r.e7)(
			[],
			() =>
				(function (e, t, n) {
					let { maxDaysOld: r, minDaysOld: s = 0 } = t,
						o = a.Z.getGuild(e),
						l = null == o ? void 0 : o.joinedAt;
					if (null != n) {
						let t = i.ZP.getMember(e, n);
						l = (null == t ? void 0 : t.joinedAt) == null ? null : new Date(t.joinedAt);
					}
					if (null == l) return !1;
					let u = Date.now() - l.getTime();
					return (null == r || u <= 86400000 * r) && u >= 86400000 * s;
				})(n, u, c),
			[u, n, c]
		) &&
			!_ &&
			!E &&
			!d
	);
};
