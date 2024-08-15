let i;
var r = n(544891),
	s = n(570140),
	l = n(728345),
	a = n(812206),
	o = n(625128),
	u = n(335131),
	d = n(669079),
	c = n(981631),
	_ = n(474936);
async function E(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
		n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
	s.Z.dispatch({
		type: 'GIFT_CODE_RESOLVE',
		code: e
	});
	try {
		let i = await (0, d.bT)(e, t, n);
		if (null != i.application_id && i.application_id !== _.RQ) {
			let e = a.Z.getApplication(i.application_id);
			if (null == e)
				try {
					await l.Z.fetchApplication(i.application_id);
				} catch (e) {}
		}
		if (i.application_id === c.XAJ)
			try {
				await (0, u.jr)(i.sku_id);
			} catch (e) {}
		return (
			s.Z.dispatch({
				type: 'GIFT_CODE_RESOLVE_SUCCESS',
				giftCode: i
			}),
			{ giftCode: i }
		);
	} catch (t) {
		throw (
			(s.Z.dispatch({
				type: 'GIFT_CODE_RESOLVE_FAILURE',
				code: e,
				error: t
			}),
			t)
		);
	}
}
(i = n(775644).Z),
	(t.Z = {
		resolveGiftCode: E,
		async fetchUserGiftCodesForSKU(e) {
			let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
			s.Z.dispatch({
				type: 'GIFT_CODES_FETCH',
				skuId: e,
				subscriptionPlanId: t
			});
			try {
				let n = await r.tn.get({
					url: c.ANM.USER_GIFT_CODES,
					query: {
						sku_id: e,
						subscription_plan_id: t
					},
					oldFormErrors: !0
				});
				s.Z.dispatch({
					type: 'GIFT_CODES_FETCH_SUCCESS',
					giftCodes: n.body,
					skuId: e,
					subscriptionPlanId: t
				});
			} catch (n) {
				s.Z.dispatch({
					type: 'GIFT_CODES_FETCH_FAILURE',
					skuId: e,
					subscriptionPlanId: t
				});
			}
		},
		async createGiftCode(e) {
			let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
				n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
			s.Z.dispatch({
				type: 'GIFT_CODE_CREATE_START',
				skuId: e,
				subscriptionPlanId: t
			});
			try {
				let i = await r.tn.post({
					url: c.ANM.USER_GIFT_CODE_CREATE,
					body: {
						sku_id: e,
						subscription_plan_id: t,
						gift_style: n
					},
					oldFormErrors: !0
				});
				return (
					s.Z.dispatch({
						type: 'GIFT_CODE_CREATE_SUCCESS',
						giftCode: i.body
					}),
					i.body
				);
			} catch (n) {
				s.Z.dispatch({
					type: 'GIFT_CODE_CREATE_FAILURE',
					skuId: e,
					subscriptionPlanId: t
				});
			}
		},
		async revokeGiftCode(e) {
			s.Z.dispatch({
				type: 'GIFT_CODE_REVOKE',
				code: e
			});
			try {
				await r.tn.del({
					url: c.ANM.USER_GIFT_CODE_REVOKE(e),
					oldFormErrors: !0
				}),
					s.Z.dispatch({
						type: 'GIFT_CODE_REVOKE_SUCCESS',
						code: e
					});
			} catch (t) {
				s.Z.dispatch({
					type: 'GIFT_CODE_REVOKE_FAILURE',
					code: e
				});
			}
		},
		openNativeGiftCodeModal(e) {
			o.Z.openNativeAppModal(e, c.Etm.GIFT_CODE_BROWSER);
		},
		...i
	});
