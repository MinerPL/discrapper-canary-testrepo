n(411104), n(47120);
var i = n(72924),
	a = n(100527),
	s = n(367207),
	r = n(996106),
	l = n(452426),
	o = n(561205),
	c = n(334288),
	d = n(852926),
	u = n(186901),
	_ = n(981631),
	E = n(474936);
let h = [a.Z.RPC];
function m(e) {
	if (null == e)
		return {
			lock: _.VqG,
			context: _.IlC.APP
		};
	let t = (0, d.s0)(e);
	return {
		lock: t.lock,
		context: t.context
	};
}
function I(e, t) {
	let n = {
		subscriptionTier: E.Si.TIER_2,
		analyticsLocations: h,
		analyticsObject: t
	};
	switch (e) {
		case _.IlC.APP:
			return s.Z.openPremiumPaymentModalInApp(n);
		case _.IlC.OVERLAY:
			return s.Z.openPremiumPaymentModalInOverlay(n);
		default:
			throw Error('Unexpected app context: '.concat(e));
	}
}
t.Z = {
	[_.Etm.START_PURCHASE]: {
		[u.Gp.ANY]: [u.wE, u.lH],
		validation: (e) =>
			(0, l.Z)(e)
				.required()
				.keys({
					sku_id: e.string().required(),
					pid: e.number().min(0)
				}),
		handler(e) {
			let {
				socket: t,
				args: { sku_id: n, pid: a }
			} = e;
			(0, c.f)(t.transport);
			let s = t.application.id;
			if (null == s) throw new r.Z({ errorCode: _.lTL.INVALID_COMMAND }, 'No application.');
			let { lock: l, context: d } = m(t.transport !== u.He.POST_MESSAGE ? a : null);
			if (null == (0, o.Z)()) throw new r.Z({ errorCode: _.lTL.INVALID_CHANNEL }, 'Invalid channel');
			let E = { page: _.ZY5.IN_APP };
			return (async () => {
				try {
					let e = await (0, i.S)({
						applicationId: s,
						skuId: n,
						openPremiumPaymentModal: () => I(d, E),
						analyticsLocations: h,
						analyticsLocationObject: E,
						context: d
					});
					return l(), e;
				} catch (e) {
					if ((l(), null != e)) {
						let t = '';
						throw (
							((t =
								'object' == typeof e && 'message' in e && 'string' == typeof e.message
									? e.message
									: 'string' == typeof e
										? e
										: JSON.stringify(e)),
							new r.Z({ errorCode: _.lTL.PURCHASE_ERROR }, t))
						);
					}
					throw new r.Z({ errorCode: _.lTL.PURCHASE_CANCELED }, 'Purchase was canceled by the user.');
				}
			})();
		}
	},
	[_.Etm.START_PREMIUM_PURCHASE]: {
		[u.Gp.ANY]: [u.wE, u.lH],
		validation: (e) => (0, l.Z)(e).keys({ pid: e.number().min(0) }),
		handler(e) {
			let {
				socket: t,
				args: { pid: n }
			} = e;
			if (((0, c.f)(t.transport), null == t.application.id))
				throw new r.Z({ errorCode: _.lTL.INVALID_COMMAND }, 'No application.');
			let { lock: i, context: a } = m(t.transport !== u.He.POST_MESSAGE ? n : null);
			return I(a, { page: _.ZY5.IN_APP }).then(
				() => {
					i();
				},
				(e) => {
					if ((i(), null != e)) throw new r.Z({ errorCode: _.lTL.PURCHASE_ERROR }, e);
					throw new r.Z({ errorCode: _.lTL.PURCHASE_CANCELED }, 'Purchase was canceled by the user.');
				}
			);
		}
	}
};
