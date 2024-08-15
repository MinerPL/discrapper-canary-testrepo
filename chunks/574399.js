l.d(n, {
	I: function () {
		return N;
	}
});
var t = l(735250),
	r = l(470079),
	i = l(442837),
	a = l(481060),
	u = l(16084),
	s = l(558381),
	o = l(821849),
	c = l(106976),
	d = l(488915),
	m = l(171246),
	f = l(509545),
	p = l(55563),
	E = l(551428),
	v = l(937615),
	C = l(147496),
	h = l(519896),
	x = l(981631),
	_ = l(689938);
function N(e) {
	r.useEffect(() => {
		if (null != e) (0, u.jU)(e), (0, o.GZ)(e), (0, s.km)(e);
	}, [e]);
	let n = (0, i.e7)([p.Z], () => (null != e ? p.Z.get(e) : void 0), [e]),
		l = (0, i.e7)([f.Z], () => (null != e ? f.Z.getForSKU(e) : void 0), [e]),
		N = r.useMemo(() => (null != l ? l.map((e) => e.id)[0] : void 0), [l]),
		T = (0, i.e7)([E.Z], () => (null != e ? E.Z.getForSKU(e) : void 0), [e]);
	r.useEffect(() => {
		if (null != N) (0, c.vY)(N);
	}, [N]);
	let I = null == n ? void 0 : n.applicationId,
		g = (0, i.e7)([d.Z], () => (null != I ? d.Z.getSubscriptionGroupListingForApplication(I) : null), [I]),
		S = r.useCallback(() => {
			if ((null == n ? void 0 : n.applicationId) == null || (null == n ? void 0 : n.id) == null || (null == g ? void 0 : g.id) == null || (null == g ? void 0 : g.sku_flags) == null) return null;
			(0, a.openModal)((e) => {
				let { onClose: l, transitionState: r } = e;
				return (0, t.jsx)(h.SubscriptionDetailsModal, {
					appId: n.applicationId,
					groupListingId: g.id,
					groupListingType: (0, m.KW)(g.sku_flags) ? 'user' : 'guild',
					onClose: l,
					skuId: n.id,
					transitionState: r
				});
			});
		}, [null == n ? void 0 : n.applicationId, null == n ? void 0 : n.id, null == g ? void 0 : g.id, null == g ? void 0 : g.sku_flags]),
		O = r.useCallback(() => {
			if (null == n) return null;
			(0, a.openModal)((e) => {
				let { onClose: l, transitionState: r } = e;
				return (0, t.jsx)(C.ItemDetailsModal, {
					appId: n.applicationId,
					skuId: n.id,
					onClose: l,
					transitionState: r
				});
			});
		}, [n]);
	if (null != n && null != T && (null == n || n.type !== x.epS.SUBSCRIPTION || null != g)) {
		if (null == e || (null != n && !n.available))
			return {
				disabled: !0,
				label: _.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
			};
		if (n.type === x.epS.SUBSCRIPTION) {
			if (null == l || 0 === l.length)
				return {
					disabled: !0,
					label: _.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
				};
			let e = l[0];
			return {
				disabled: !1,
				label: _.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
					skuName: n.name,
					price: (0, v.T4)(e.price, e.currency)
				}),
				onClick: S
			};
		}
		return null == n.price
			? {
					disabled: !0,
					label: _.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
				}
			: {
					disabled: !1,
					label: _.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
						skuName: n.name,
						price: (0, v.T4)(n.price.amount, n.price.currency)
					}),
					onClick: O
				};
	}
}
