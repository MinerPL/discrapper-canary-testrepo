n.d(t, {
	S: function () {
		return _;
	}
}),
	n(47120);
var r = n(470079),
	i = n(392711),
	a = n.n(i),
	s = n(941028),
	o = n(509848),
	l = n(849522),
	u = n(439170);
let c = '@here';
function d(e) {
	return !!(e.length > 1) || !(1 === e.length && 'GROUP' === e[0].type && 'unknown' === e[0].id);
}
function _(e, t, n) {
	let i = (0, l.Z)(),
		[_, E] = r.useState(!1),
		f = r.useMemo(
			() =>
				a().debounce(
					(e) => {
						var r, a, l, _;
						if (((r = e), (a = i), (l = t), (_ = n), d(u.ZP.getProps(l, _).groups) || (!(r.length < c.length) && !(r.length > a) && -1 !== r.indexOf(c) && ((0, s.b8)(l, _, o.KV), 1)))) E(!0);
					},
					200,
					{ maxWait: 500 }
				),
			[i, t, n]
		);
	r.useEffect(() => {
		let r = u.ZP.getProps(t, n).groups;
		if (null != t && !d(r) && !_)
			return (
				e.addListener('text-changed', f),
				() => {
					e.removeListener('text-changed', f), f.cancel();
				}
			);
	}, [_, f, e, t, n]);
}
