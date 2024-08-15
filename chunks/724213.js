t.d(n, {
	hi: function () {
		return u;
	},
	kH: function () {
		return h;
	},
	rz: function () {
		return m;
	}
}),
	t(789020),
	t(47120),
	t(653041),
	t(524437);
var l = t(549817);
t(581883);
var a = t(984933),
	i = t(271383),
	r = t(9156),
	s = t(630388),
	o = t(152376),
	c = t(398758),
	d = t(372897);
function u(e) {
	var n, t;
	let l = (0, c.r1)(e),
		a = null !== (t = null === (n = i.ZP.getSelfMember(e)) || void 0 === n ? void 0 : n.flags) && void 0 !== t ? t : 0,
		o = (0, s.yE)(a, d.q.COMPLETED_ONBOARDING),
		u = r.ZP.getOptedInChannels(e).size > 0;
	return !l && !o && !u;
}
function h(e) {
	if (u(e)) {
		m(e);
		return;
	}
	{
		let n = (0, c.r1)(e);
		(0, o.QG)(e, !n);
	}
}
function m(e) {
	let { include: n = new Set(), exclude: t = new Set() } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
		i = a.ZP.getChannels(e),
		r = [...i[a.sH], ...i[a.Zb]]
			.filter((e) => {
				let { channel: n } = e;
				return !n.isThread() && !t.has(n.id);
			})
			.map((e) => {
				let { channel: n } = e;
				return n.id;
			});
	n.forEach((e) => r.push(e)), l.Z.onboardExistingMember(e, new Set(r));
}
