n.d(t, {
	L: function () {
		return c;
	}
}),
	n(47120);
var i = n(470079),
	a = n(468194),
	s = n(645896),
	r = n(559469),
	l = n(308083),
	o = n(689938);
function c(e) {
	let { guild: t } = e,
		n = (0, r.n)(),
		c = (0, s.Cc)(null == t ? void 0 : t.id),
		[d, u] = (0, s.L_)(null == t ? void 0 : t.id);
	return (
		i.useEffect(() => {
			!d && null != t && u();
		}, [t, d, u]),
		i.useMemo(() => {
			var e;
			return null != c
				? c
				: null == t
					? null
					: {
							...n[n.length - 1],
							id: t.id,
							name: t.name,
							icon: t.icon,
							description: null !== (e = t.description) && void 0 !== e ? e : o.Z.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER,
							memberCount: 0,
							games: [],
							playstyle: l.zv.CASUAL,
							traits: [],
							tag: (0, a.Zg)(t.name),
							wildcardDescriptors: l.LK
						};
		}, [t, n, c])
	);
}
