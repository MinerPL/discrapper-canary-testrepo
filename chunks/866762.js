n(312677);
var e = n(945124);
self.addEventListener('message', (t) => {
	var r, n;
	let {
		data: { unsortedClans: i, id: u, criteria: o }
	} = t;
	let a =
		((r = i),
		(n = o),
		r
			.map((t) => ({
				...t,
				affinity: (0, e.y)(t, n)
			}))
			.sort((t, r) => {
				var i, u;
				let o = null !== (i = r.affinity) && void 0 !== i ? i : (0, e.y)(r, n);
				return o - (null !== (u = t.affinity) && void 0 !== u ? u : (0, e.y)(t, n));
			}));
	self.postMessage({
		sortedClans: a,
		id: u
	});
});
