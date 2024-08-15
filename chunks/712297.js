n.d(t, {
	Z: function () {
		return S;
	}
}),
	n(47120);
var r = n(470079),
	i = n(399606),
	u = n(16084),
	l = n(881052),
	o = n(128069),
	E = n(855775),
	a = n(55563),
	_ = n(474936);
function S(e) {
	let { applicationId: t, skuIDs: n, currentPaymentSourceId: S, isGift: s } = e,
		A = r.useMemo(() => n.filter((e) => !_.YQ.includes(e)), [JSON.stringify(n)]),
		c = (0, i.e7)([a.Z], () => A.every((e) => !a.Z.isFetching(e) && null != a.Z.get(e))),
		{ previewErrorsById: T, setErrorById: I } = (function () {
			let [e, t] = r.useState({});
			return {
				previewErrorsById: e,
				setErrorById: r.useCallback(
					(e, n) => {
						t((t) => ({
							...t,
							[e]: n
						}));
					},
					[t]
				)
			};
		})(),
		d = (0, i.cj)(
			[a.Z],
			() => {
				let e = {};
				for (let n of A) {
					var t;
					e[n] = null !== (t = a.Z.get(n)) && void 0 !== t ? t : void 0;
				}
				return e;
			},
			[A]
		);
	r.useEffect(() => {
		for (let e of A) !a.Z.isFetching(e) && null == a.Z.get(e) && (0, u.$N)(t, e);
	}, [t, A]);
	let R = (0, i.cj)(
		[E.Z],
		() => {
			let e = {};
			for (let n of A) {
				var t;
				e[n] = null !== (t = E.Z.getPricesForSku(n)) && void 0 !== t ? t : void 0;
			}
			return e;
		},
		[A]
	);
	return (
		r.useEffect(() => {
			for (let e of A)
				!E.Z.isFetchingSKU(e) &&
					(0, u.x2)(t, e, S, { isGift: s }).catch((t) => {
						t instanceof l.HF && (t.code === o.SM.BILLING_BUNDLE_ALREADY_PURCHASED || t.code === o.SM.BILLING_BUNDLE_PARTIALLY_OWNED) && I(e, t);
					});
		}, [t, A, S, s, I]),
		{
			hasFetchedSkus: c,
			skusById: d,
			skuPricePreviewsById: R,
			previewErrorsById: T
		}
	);
}
