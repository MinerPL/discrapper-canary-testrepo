n.d(t, {
	Ng: function () {
		return E;
	},
	Wp: function () {
		return d;
	},
	kA: function () {
		return c;
	}
}),
	n(47120);
var r = n(470079),
	i = n(442837),
	a = n(846519),
	s = n(594174),
	o = n(295226),
	l = n(74538),
	u = n(474936);
function c(e) {
	return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at);
}
function d(e, t) {
	var n;
	return (
		null != e &&
		new Set(null === (n = e.discount) || void 0 === n ? void 0 : n.plan_ids.map((e) => u.GP[e].skuId)).has(t)
	);
}
function _(e, t) {
	let n = (0, i.e7)([o.Z], () => o.Z.getUserDiscountOffer(e)),
		[u, d] = r.useState(c(n)),
		_ = (0, i.e7)([s.default], () => (0, l.I5)(s.default.getCurrentUser()));
	return (
		r.useEffect(() => {
			if (null == n || null == n.expires_at) return;
			let e = new a.V7(),
				t = () => {
					let r = null != n.expires_at ? Date.parse(n.expires_at) - Date.now() : 0;
					null == e ||
						e.start(r, () => {
							!u && c(n) ? d(!0) : t();
						});
				};
			return t(), () => e.stop();
		}, [u, n]),
		u || (_ && !t) ? null : n
	);
}
function E() {
	var e, t;
	let n = _(u.hs),
		r = _(u.RU),
		i = _(u.rB),
		a = _(u.ih);
	return null !== (t = null !== (e = null != n ? n : r) && void 0 !== e ? e : i) && void 0 !== t ? t : a;
}
