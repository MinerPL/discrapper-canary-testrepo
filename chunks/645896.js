n.d(t, {
	Cc: function () {
		return d;
	},
	E8: function () {
		return _;
	},
	L_: function () {
		return E;
	}
}),
	n(47120);
var r = n(470079),
	i = n(652874),
	a = n(143927),
	s = n(731965),
	o = n(881052),
	l = n(931240);
let u = {},
	c = (0, i.Z)((e, t) => ({
		clans: {},
		isFetchingGuild: (e) => null != t().fetchPromises[e],
		error: null,
		fetchPromises: {},
		fetchClanInfo: async (n) => {
			let r = t().fetchPromises[n];
			if (
				!(function (e) {
					var t;
					let n = Date.now(),
						r = null !== (t = u[e]) && void 0 !== t ? t : 0;
					return n - r > 60000;
				})(n)
			) {
				var i;
				return null != r ? await r : Promise.resolve(null !== (i = t().clans[n]) && void 0 !== i ? i : null);
			}
			u[n] = Date.now();
			try {
				if (null != r) return await r;
				{
					let r = (async () => {
						let r = await (0, l.WJ)(n),
							i = t().clans,
							a = t().fetchPromises;
						return null == a[n]
							? r
							: (delete a[n],
								(0, s.j)(() => {
									e({
										clans: {
											...i,
											[n]: r
										},
										error: null,
										fetchPromises: a
									});
								}),
								r);
					})();
					return (
						(0, s.j)(() => {
							e({
								fetchPromises: {
									...t().fetchPromises,
									[n]: r
								}
							});
						}),
						await r
					);
				}
			} catch (a) {
				let r = new o.Hx(a),
					i = t().fetchPromises;
				null != i[n] && delete i[n],
					(0, s.j)(() => {
						e({
							error: r,
							fetchPromises: i
						});
					});
			}
			return null;
		}
	}));
function d(e) {
	return c((t) => (null != e ? t.clans[e] : null));
}
function _(e) {
	return c((t) => null != e && t.isFetchingGuild(e));
}
function E(e) {
	let [t, n] = c((e) => [e.fetchClanInfo, e.isFetchingGuild], a.Z),
		i = null != e && n(e),
		s = d(e),
		o = r.useCallback(async () => {
			if (i || null == e) return s;
			try {
				return await t(e);
			} catch (e) {
				return null;
			}
		}, [i, e, s, t]);
	return [i, o];
}
