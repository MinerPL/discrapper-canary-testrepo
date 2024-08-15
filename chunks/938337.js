t.d(e, {
	i: function () {
		return c;
	}
});
var i = t(735250),
	l = t(470079),
	r = t(512100),
	o = t(906732),
	s = t(626135),
	a = t(981631);
function c(n) {
	let { appId: e, skuId: t, ...c } = n,
		{ analyticsLocations: d } = (0, o.ZP)();
	return (
		l.useEffect(() => {
			s.default.track(a.rMx.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
				application_id: e,
				sku_id: t,
				location_stack: d
			});
		}, [d, e, t]),
		(0, i.jsx)(r.u, { ...c })
	);
}
