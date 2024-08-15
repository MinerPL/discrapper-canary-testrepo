n.d(t, {
	K_: function () {
		return d;
	},
	P3: function () {
		return u;
	},
	PE: function () {
		return h;
	}
}),
	n(789020);
var i = n(399606),
	a = n(271383),
	s = n(630388),
	l = n(563534),
	r = n(846121),
	o = n(460347),
	c = n(372897);
function u(e, t) {
	var n;
	let a = (0, o.Z)(e),
		s = (0, i.e7)([l.Z], () => l.Z.getNewMemberActions(e), [e]),
		c = (0, i.e7)([r.Z], () => r.Z.getCompletedActions(e));
	if (!a) return {};
	let u = null !== (n = null == s ? void 0 : s.findIndex((e) => e.channelId === t.id)) && void 0 !== n ? n : 0,
		d = u >= 0 && null != s ? s[u] : null,
		h = null != d && (null == c ? void 0 : c[d.channelId]) === !0;
	return {
		channelAction: d,
		completed: h
	};
}
function d(e, t) {
	let n = (0, i.e7)([l.Z], () => l.Z.getNewMemberActions(e)),
		a = (0, i.e7)([r.Z], () => r.Z.getCompletedActions(e));
	return null == n ? void 0 : n.find((e) => (null == a ? void 0 : a[e.channelId]) !== !0 && e.channelId !== t);
}
function h(e) {
	var t;
	let n = (0, i.e7)([a.ZP], () => a.ZP.getSelfMember(e));
	return (0, s.yE)(null !== (t = null == n ? void 0 : n.flags) && void 0 !== t ? t : 0, c.q.COMPLETED_HOME_ACTIONS);
}
