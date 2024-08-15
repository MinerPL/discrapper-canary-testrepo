n.d(t, {
	T: function () {
		return u;
	}
}),
	n(47120);
var r = n(470079),
	i = n(399606),
	a = n(55563),
	s = n(335131),
	o = n(597688),
	l = n(981631);
function u(e) {
	let t = (0, i.e7)([a.Z], () => (null != e ? a.Z.get(e) : null)),
		n = null != t && t.productLine !== l.POd.COLLECTIBLES,
		[u, c] = (0, i.Wu)([o.Z], () => [o.Z.isFetchingProduct(e), o.Z.getProduct(e)]);
	return (
		(0, r.useEffect)(() => {
			if (null != e && null == c && !n && !u) (0, s.jr)(e);
		}, [e, c, n, u]),
		{
			product: c,
			isFetching: u
		}
	);
}
