t.d(s, {
	a: function () {
		return l;
	}
});
var n = t(442837),
	a = t(663389),
	i = t(996733),
	r = t(394644),
	o = t(295545);
function l(e, s) {
	var t;
	let l = (0, o.eA)({ location: 'settingsTabs' }),
		c = (0, r.Gj)(s),
		d = (0, i.Z7)(),
		_ = (0, n.e7)([a.Z], () => a.Z.getSubsection()),
		E = e.filter((e) => null == e.predicate || e.predicate());
	if (l) {
		if (null != c && c.size > 0) {
			let e = E.filter((e) => c.has(e.setting));
			E = e.length > 0 ? e : E;
		}
		if (null != d && d.length > 0 && null == _) {
			let e = E.find((e) => e.title.toLowerCase() === d.toLowerCase());
			if (null != e)
				return {
					viewableTabs: E,
					selectedTab: e
				};
		}
	}
	let u = null !== (t = E.find((e) => null != e && e.setting === _)) && void 0 !== t ? t : E[0];
	return {
		viewableTabs: E,
		selectedTab: u
	};
}
