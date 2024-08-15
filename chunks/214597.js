l.d(n, {
	Z: function () {
		return s;
	}
});
var t = l(470079),
	r = l(902704),
	i = l(232567),
	a = l(720202),
	u = l(594174);
function s(e) {
	let { entry: n, channel: l } = e,
		s = t.useRef([]);
	return (
		t.useEffect(() => {
			if (!(0, r.E)(s.current, n.participants))
				(s.current = n.participants),
					n.participants
						.filter((e) => null == u.default.getUser(e))
						.forEach((e) => {
							null == l.guild_id ? (0, i.PR)(e) : a.Z.requestMember(l.guild_id, e);
						});
		}, [n, l.guild_id]),
		{}
	);
}
