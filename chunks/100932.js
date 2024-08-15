t.d(n, {
	x: function () {
		return s;
	}
});
var i = t(442837),
	a = t(594174),
	l = t(359119),
	r = t(237292),
	u = t(13279);
let s = (e) => {
	let n = (0, r.y0)({ location: 'context-menu-item' }),
		t = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
		s = (0, u.z)(e.id, 'context-menu-item');
	if ((null == t ? void 0 : t.isStaff()) !== !0 || !n || !e.isDM()) return null;
	let o = (null == s ? void 0 : s.type) === l.pj.INAPPROPRIATE_CONVERSATION_TIER_1;
	return {
		isTier1: o,
		isTier2: (null == s ? void 0 : s.type) === l.pj.INAPPROPRIATE_CONVERSATION_TIER_2
	};
};
