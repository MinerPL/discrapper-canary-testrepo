t.d(n, {
	O: function () {
		return d;
	}
}),
	t(47120);
var i = t(470079),
	a = t(373793),
	s = t(442837),
	l = t(911969),
	r = t(282923),
	o = t(905753);
function d() {
	let e = (0, s.cj)([o.Z], () => {
			var e;
			return Object.values(null !== (e = o.Z.getCommands()) && void 0 !== e ? e : {});
		}),
		[n, t] = i.useState(''),
		d = i.useMemo(
			() =>
				e.filter((e) => {
					var n;
					return (null == e.integration_types || e.integration_types.includes(a.Y.GUILD_INSTALL)) && (null == e.contexts || (null === (n = e.contexts) || void 0 === n ? void 0 : n.includes(l.D.GUILD)));
				}),
			[e]
		),
		u = i.useMemo(
			() =>
				[...d].sort((e, n) => {
					let t = l.yU.CHAT + 1,
						i = n.type > t ? t : n.type,
						a = i - (e.type > t ? t : e.type);
					return 0 !== a ? a : e.name.localeCompare(n.name);
				}),
			[d]
		),
		I = i.useMemo(() => (n.startsWith('/') ? u.filter((e) => e.type === l.yU.CHAT) : u), [n, u]),
		m = i.useMemo(() => (n.startsWith('/') ? n.substring(1) : n), [n]);
	return {
		query: n,
		results: i.useMemo(() => (0, r.B)(I, c, m), [I, m]),
		setQuery: t,
		unfilteredCount: e.length
	};
}
function c(e) {
	return {
		id: e.id,
		names: [e.displayName]
	};
}
