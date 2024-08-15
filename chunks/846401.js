t.d(n, {
	Z: function () {
		return E;
	}
}),
	t(47120);
var l = t(470079),
	s = t(913527),
	a = t.n(s),
	r = t(848246),
	i = t(442837),
	o = t(846519),
	c = t(114064),
	u = t(689938);
function d(e) {
	return e.toString().padStart(2, '0');
}
function m(e) {
	let n = a().duration(e.diff(a()()));
	return ''.concat(d(n.hours()), ':').concat(d(n.minutes()), ':').concat(d(n.seconds()));
}
function E() {
	let [e, n] = l.useState(m(a()(c.Z.activatedEndTime(r.q.STREAM_HIGH_QUALITY)))),
		t = (0, i.e7)([c.Z], () => c.Z.activatedEndTime(r.q.STREAM_HIGH_QUALITY)),
		s = l.useMemo(() => a()(t), [t]),
		d = l.useRef(new o.Xp()),
		E = l.useCallback(() => {
			n(m(s));
		}, [s]);
	return (
		l.useEffect(() => {
			let e = a().duration(s.diff(a()()));
			1 > e.seconds()
				? (n('00:00:00'), d.current.stop())
				: 1 > e.days()
					? (E(), d.current.start(1000, E))
					: (n(u.Z.Messages.HUMANIZE_DURATION_DAYS.format({ time: Math.floor(e.asDays()) })), d.current.stop());
		}, [s, E]),
		e
	);
}
