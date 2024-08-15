t.d(n, {
	B: function () {
		return o;
	}
}),
	t(47120);
var a = t(652874),
	r = t(731965),
	i = t(520623);
let s = new Map(),
	o = (0, a.Z)((e, n) => ({
		topGames: new Map(),
		tryFetchTopGames: async (t) => {
			let a = n().topGames,
				o = s.get(t);
			if (null != o && Date.now() - o < 3600000) {
				var l;
				return null !== (l = a.get(t)) && void 0 !== l ? l : {};
			}
			let c = await (0, i.M)(t),
				d = new Map(a);
			return (
				d.set(t, c),
				(0, r.j)(() => {
					e({ topGames: d });
				}),
				s.set(t, Date.now()),
				c
			);
		}
	}));
