n.d(t, {
	Z: function () {
		return o;
	}
}),
	n(315314),
	n(610138),
	n(216116),
	n(78328),
	n(815648),
	n(47120);
var i = n(470079),
	a = n(143927),
	s = n(731965),
	r = n(836768),
	l = n(49898);
function o() {
	let e = (0, r.d)((e) => e.selectedPage, a.Z);
	return (
		i.useEffect(() => {
			let e = (function (e) {
				if ('/discovery/quests' === e) return l.F$.QUESTS;
				return l.F$.SERVERS;
			})(new URL(window.location.href).pathname);
			(0, s.j)(() => r.d.setState({ selectedPage: e }));
		}, []),
		e
	);
}
