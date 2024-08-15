n.d(t, {
	Z: function () {
		return l;
	}
}),
	n(47120);
var r = n(470079),
	i = n(409813),
	u = n(45572);
function l(e) {
	let [t, n] = r.useState(u.A.WAITING);
	return (
		r.useEffect(() => {
			null != e && e !== i.h8.REVIEW && t !== u.A.WAITING && t !== u.A.COMPLETED && n(u.A.WAITING);
		}, [e, t, n]),
		[t, n]
	);
}
