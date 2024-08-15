t.d(n, {
	z: function () {
		return l;
	}
});
var i = t(359119),
	r = t(897769),
	u = t(237292),
	a = t(403485),
	o = t(604849);
function l(e, n) {
	let t = (0, u.y0)({ location: n }),
		l = (0, o.c)(),
		s = (0, a.h)(e),
		d = (0, r.S)(e, i.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
	if (!(!t || !l || 0 === s.length || s.some((e) => e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1 || (e.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_2 && null != e.dismiss_timestamp)))) return d;
}
