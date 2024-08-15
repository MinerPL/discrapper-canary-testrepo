n(47120);
var s = n(470079),
	a = n(586739);
t.Z = function () {
	let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
		{ refreshOnDepChange: t } = e,
		[n, i] = s.useState([]),
		[r, l] = s.useState(!0),
		o = async () => {
			l(!0);
			try {
				let e = await a.Z.fetchTeams(!0);
				i(e.body);
			} catch (e) {}
			l(!1);
		},
		c = s.useRef(!0);
	return (
		s.useEffect(() => {
			(c.current || t) && ((c.current = !1), o());
		}, [t]),
		{
			teams: n,
			loading: r,
			refresh: o
		}
	);
};
