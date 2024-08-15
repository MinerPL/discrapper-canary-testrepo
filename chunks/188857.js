s.d(t, {
	Z: function () {
		return c;
	}
}),
	s(47120),
	s(724458),
	s(653041);
var n = s(470079),
	l = s(442837),
	a = s(749210),
	i = s(911969),
	r = s(271383),
	o = s(594174),
	d = s(823379);
function c(e, t) {
	let [s, c] = (0, l.Wu)(
		[r.ZP],
		() =>
			null == t || null == e
				? [[], []]
				: Object.values(t).reduce(
						(t, s) => {
							if (s.type !== i.BN.MEMBER) return t;
							let n = s.id;
							return r.ZP.isMember(e, n) ? t[0].push(n) : t[1].push(n), t;
						},
						[[], []]
					),
		[e, t]
	);
	return (
		n.useEffect(() => {
			c.length > 0 && null != e && a.Z.requestMembersById(e, c, !1);
		}, [c, e]),
		(0, l.Wu)([o.default], () => s.map(o.default.getUser).filter(d.lm), [s])
	);
}
