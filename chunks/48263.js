n(47120), n(653041), n(312677), n(411104);
var e = n(658722),
	r = n.n(e),
	t = n(954955),
	i = n.n(t),
	u = n(226951),
	c = n(624138),
	a = n(620490);
let f = {
		UPDATE_USERS: 'UPDATE_USERS',
		USER_RESULTS: 'USER_RESULTS',
		QUERY_SET: 'QUERY_SET',
		QUERY_CLEAR: 'QUERY_CLEAR'
	},
	s = new Map(),
	O = new Map(),
	p = new Set(),
	d = 'username',
	v = 'friendNickname',
	E = 'globalName',
	b = i()(
		() => {
			if (0 !== p.size)
				p.forEach((l) => {
					let o = O.get(l);
					null != o && h(l, o);
				}),
					p.clear();
		},
		100,
		{
			leading: !0,
			trailing: !0
		}
	);
function g(l, o) {
	return l * (null != o ? o : 1);
}
function h(l, o) {
	var n, e;
	let { query: t, limit: i, filters: f, blacklist: O, whitelist: p } = o,
		b = null != f && f.strict && null !== (n = f.guild) && void 0 !== n ? n : null,
		h = null !== (e = o.boosters) && void 0 !== e ? e : {},
		T = RegExp('^'.concat(u.Z.escape(t)), 'i'),
		F = RegExp(u.Z.escape(t), 'i'),
		S = [];
	if ('' === t) return y(t, S, l);
	let U = t.toLocaleLowerCase(),
		C = (0, c.Fv)(U);
	s.forEach((l, o) => {
		let n;
		if (
			!(function (l, o, n, e, r) {
				if (null != e && e.indexOf(l) >= 0) return !1;
				if (null != r && r.indexOf(l) >= 0) return !0;
				if (null != n) {
					let { friends: l, guild: e } = n;
					return (!0 === l && !0 === o.isFriend) || (null != e && (null != o[e] || null === o[e])) || !1;
				}
				return !0;
			})(o, l, f, O, p)
		)
			return;
		let { username: e } = l;
		o === t
			? (n = {
					id: o,
					username: e,
					comparator: o,
					score: g(10, h[o])
				})
			: Object.keys(l).forEach((t) => {
					let i;
					let u = l[t];
					if ('boolean' == typeof u || null == u || (null != b && t !== d && t !== v && t !== E && b !== t)) return;
					let a = (0, c._I)(u.toLocaleLowerCase());
					T.test(u)
						? (i = {
								comparator: u,
								score: g(10, h[o])
							})
						: F.test(u)
							? (i = {
									comparator: u,
									score: g(5, h[o])
								})
							: r()(U, a)
								? (i = {
										comparator: u,
										score: g(1, h[o])
									})
								: r()(C, (0, c.Fv)(a)) &&
									(i = {
										comparator: u,
										score: g(1, h[o])
									}),
						null != i &&
							(null == n || n.score < i.score) &&
							(n = {
								...i,
								id: o,
								username: e
							});
				}),
			null != n && S.push(n);
	}),
		S.sort(a.Z),
		S.length > i && (S.length = i),
		y(t, S, l);
}
function y(l, o, n) {
	let e = {
		type: f.USER_RESULTS,
		uuid: n,
		payload: {
			query: l,
			results: o
		}
	};
	self.postMessage(e);
}
self.addEventListener('message', (l) => {
	let { data: o } = l;
	if (null == o || null == o.type) throw Error('Invalid data');
	switch (o.type) {
		case f.UPDATE_USERS:
			return (function (l) {
				let { payload: o } = l,
					n = !1,
					e = new Set();
				o.forEach((l) => {
					var o;
					let { id: r, ...t } = l,
						i = null !== (o = s.get(r)) && void 0 !== o ? o : null,
						u = {
							...i,
							...t
						};
					s.set(r, u),
						O.size > 0 &&
							((u.isFriend !== (null == i ? void 0 : i.isFriend) || u.friendNickname !== (null == i ? void 0 : i.friendNickname)) && (n = !0),
							Object.keys(u).forEach((l) => {
								if ('isBot' !== l && 'isFriend' !== l && l !== d && l !== v && l !== E) e.add(l);
							}));
				}),
					O.forEach((l, o) => {
						let { filters: r } = l;
						(null == r || r.friends === n || e.has(r.guild)) && p.add(o);
					}),
					b();
			})(o);
		case f.QUERY_SET:
			return (function (l) {
				let { uuid: o, payload: n } = l;
				O.set(o, n), h(o, n);
			})(o);
		case f.QUERY_CLEAR:
			return (function (l) {
				let { uuid: o } = l;
				O.delete(o), p.delete(o), 0 === p.size && b.cancel();
			})(o);
	}
});
