var s,
	a,
	r,
	i,
	l = n(442837),
	o = n(570140),
	c = n(594174),
	d = n(981631);
let _ = null;
class u extends (i = l.ZP.Store) {
	getHouseMembership() {
		return _;
	}
}
(r = 'HypeSquadStore'),
	(a = 'displayName') in (s = u)
		? Object.defineProperty(s, a, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (s[a] = r),
	(t.Z = new u(o.Z, {
		CONNECTION_OPEN: function () {
			let e = c.default.getCurrentUser();
			null != e &&
				(e.hasFlag(d.xW$.HYPESQUAD_ONLINE_HOUSE_1)
					? (_ = d.gkr.HOUSE_1)
					: e.hasFlag(d.xW$.HYPESQUAD_ONLINE_HOUSE_2)
						? (_ = d.gkr.HOUSE_2)
						: e.hasFlag(d.xW$.HYPESQUAD_ONLINE_HOUSE_3) && (_ = d.gkr.HOUSE_3));
		},
		HYPESQUAD_ONLINE_MEMBERSHIP_LEAVE_SUCCESS: function () {
			_ = null;
		},
		HYPESQUAD_ONLINE_MEMBERSHIP_JOIN_SUCCESS: function (e) {
			_ = e.houseID;
		}
	}));
