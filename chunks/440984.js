t.d(s, {
	D: function () {
		return A;
	}
}),
	t(47120);
var n = t(735250),
	a = t(470079),
	i = t(442837),
	r = t(780384),
	o = t(481060),
	l = t(410030),
	c = t(607070),
	d = t(530618),
	_ = t(74538),
	E = t(937615),
	u = t(230916),
	I = t(798769),
	T = t(474936),
	S = t(689938),
	N = t(960699),
	C = t(982404),
	m = t(299156);
function A(e) {
	let {
			premiumSubscription: s,
			premiumType: t,
			onClose: A,
			confettiCanvas: O,
			userWasChurned: g = !1,
			userDiscountOffer: h
		} = e,
		p = (0, l.ZP)(),
		R = (0, r.wj)(p) ? C : m,
		x = a.useRef(null),
		[M, f] = a.useState(!1),
		D = (0, u._)(s, T.Xh.PREMIUM_MONTH_TIER_2, h),
		P = (0, _.aS)(T.Xh.PREMIUM_MONTH_TIER_2),
		L = (0, E.T4)(P.amount, P.currency),
		b = (0, i.e7)([c.Z], () => c.Z.useReducedMotion);
	if (
		(a.useEffect(() => {
			null != x.current && null != D && f(!0);
		}, [x, M, D]),
		null == h || null == D)
	)
		return null;
	let Z = S.Z.Messages.PREMIUM_TIER_SUBSCRIPTION_DESCRIPTION_AFTER_REDEMPTION_WITH_ACTIVE_SUB.format({
			numMonths: h.discount.user_usage_limit,
			discountedPrice: D,
			regularPrice: L
		}),
		v = (0, n.jsx)('div', {
			className: N.whatYouLoseButtonContainer,
			children: (0, n.jsx)(o.Button, {
				color: o.Button.Colors.BRAND,
				onClick: A,
				children: S.Z.Messages.PREMIUM_DISCOUNT_SWEET
			})
		});
	return (0, n.jsxs)(n.Fragment, {
		children: [
			(0, n.jsx)(I.Z, {
				premiumType: t,
				className: N.cancellationHeader,
				onClose: A
			}),
			(0, n.jsx)('div', {
				ref: x,
				children: (0, n.jsx)(o.ModalContent, {
					className: N.body,
					children:
						null != D
							? (0, n.jsxs)(n.Fragment, {
									children: [
										(0, n.jsxs)('div', {
											className: N.discountAppliedBody,
											children: [
												(0, n.jsx)('img', {
													alt: '',
													src: R,
													className: N.nitroIcon
												}),
												(0, n.jsx)(o.Heading, {
													variant: 'heading-xl/bold',
													children: g
														? S.Z.Messages.PREMIUM_TRIAL_TUTORIAL_WELCOME_BACK
														: S.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED_PUNCTUATED
												})
											]
										}),
										(0, n.jsx)('div', {
											className: N.bodyString,
											children: Z
										}),
										v
									]
								})
							: (0, n.jsx)(o.Spinner, {})
				})
			}),
			!b &&
				M &&
				(0, n.jsx)(d.Z, {
					confettiTarget: x.current,
					confettiCanvas: O,
					confettiVelocityMultiplier: 0.75
				})
		]
	});
}
