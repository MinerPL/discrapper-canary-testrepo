n.d(t, {
	Z: function () {
		return l;
	}
}),
	n(47120);
var r = n(470079),
	i = n(122289),
	u = n(622999);
function l() {
	let [e, t] = r.useState(null);
	return (
		r.useEffect(() => {
			(0, u.d2)()
				.then((e) => t(e))
				.catch((e) => {
					(0, i.q2)(e);
				});
		}, []),
		e
	);
}
