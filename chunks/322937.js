n.d(t, {
	$: function () {
		return l;
	}
});
var i = n(470079),
	a = n(774078),
	s = n(202107);
function l(e) {
	let { communicationDisabledUntil: t, userId: n, guildId: l } = null != e ? e : {},
		r = (0, a.Z)(null != t ? Date.parse(t) : Date.now()),
		o = r.seconds,
		c = (0, i.useRef)(null);
	return (
		(0, i.useEffect)(() => {
			if (null == e || null == l || null == n) {
				clearTimeout(c.current);
				return;
			}
			return (
				o <= 0 &&
					null == c.current &&
					(c.current = setTimeout(() => {
						s.Z.clearGuildMemberTimeout(l, n);
					}, 1000)),
				() => {
					null != c.current && (clearTimeout(c.current), (c.current = null));
				}
			);
		}, [l, n, o, t, e]),
		r
	);
}
