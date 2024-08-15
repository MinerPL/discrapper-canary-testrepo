t.d(s, {
	R: function () {
		return G;
	}
}),
	t(411104);
var n = t(735250);
t(470079);
var a = t(120356),
	i = t.n(a),
	r = t(512722),
	o = t.n(r),
	l = t(481060),
	c = t(366939),
	d = t(100527),
	_ = t(906732),
	E = t(710845),
	u = t(963249),
	I = t(301766),
	T = t(509545),
	S = t(931331),
	N = t(754347),
	C = t(122289),
	m = t(74538),
	A = t(212895),
	O = t(296848),
	g = t(140465),
	h = t(879463),
	p = t(104494),
	R = t(987997),
	x = t(833569),
	M = t(823188),
	f = t(474936),
	D = t(981631),
	P = t(689938),
	L = t(899482);
let b = new E.Z('SubscriptionHeader.tsx'),
	Z = {
		page: D.ZY5.USER_SETTINGS,
		section: D.jXE.SETTINGS_PREMIUM,
		object: D.qAy.CARD
	},
	v = [D.O0b.PAUSED, D.O0b.PAUSE_PENDING, D.O0b.BILLING_RETRY];
function j(e) {
	let { wordMark: s, subscriptionInfo: t, buttons: a, statusClasses: r, shouldUseDiscountMarketing: o, discountAmount: l } = e;
	return (0, n.jsxs)('div', {
		className: i()(L.banner, r),
		children: [
			(0, n.jsx)('div', { className: L.bannerBackgroundImage }),
			(0, n.jsxs)('div', {
				className: L.detailsContainer,
				children: [
					(0, n.jsx)('div', { className: L.image }),
					(0, n.jsxs)('div', {
						className: L.details,
						children: [
							(0, n.jsxs)('div', {
								className: L.headerLabel,
								children: [
									s,
									o &&
										null != l &&
										(0, n.jsx)(M.Cy, {
											text: P.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({ percent: l }),
											className: L.discountPill,
											colorOptions: M.VE.PREMIUM_TIER_2_WHITE_FILL,
											isPillOnBorder: !1
										})
								]
							}),
							t
						]
					})
				]
			}),
			(0, n.jsx)('div', {
				className: L.buttons,
				children: a
			})
		]
	});
}
function B(e) {
	let { wordMark: s, subscriptionInfo: t, buttons: a, statusClasses: r, shouldUseDiscountMarketing: o, discountAmount: l } = e;
	return (0, n.jsxs)('div', {
		className: i()(L.banner, r, L.repositioned),
		children: [
			(0, n.jsx)('div', { className: L.bannerBackgroundImage }),
			(0, n.jsx)('div', {
				className: L.detailsContainer,
				children: (0, n.jsx)('div', {
					className: L.details,
					children: (0, n.jsxs)('div', {
						className: L.headerLabel,
						children: [
							(0, n.jsx)('div', { className: L.image }),
							(0, n.jsxs)('div', {
								className: L.headerColumnB,
								children: [
									s,
									o &&
										null != l &&
										(0, n.jsx)(M.Cy, {
											text: P.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({ percent: l }),
											className: L.discountPill,
											colorOptions: M.VE.PREMIUM_TIER_2_WHITE_FILL,
											isPillOnBorder: !1
										}),
									t
								]
							})
						]
					})
				})
			}),
			(0, n.jsx)('div', {
				className: L.buttons,
				children: a
			})
		]
	});
}
function U() {
	return (0, n.jsxs)('div', {
		className: L.wordMark,
		children: [
			(0, n.jsx)(N.Z, {
				className: L.discordWordmark,
				'aria-label': P.Z.Messages.PREMIUM_TIER_1
			}),
			(0, n.jsx)('div', { className: L.classicWordmark })
		]
	});
}
function G() {
	let { analyticsLocations: e } = (0, _.ZP)(d.Z.ACCOUNT_CREDIT_BANNER);
	return (0, n.jsx)(j, {
		wordMark: (0, n.jsx)(U, {}),
		subscriptionInfo: (0, n.jsx)('div', {
			className: L.planInfo,
			children: P.Z.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_DESCRIPTION
		}),
		buttons: (0, n.jsx)(R.Z, {
			className: L.toolsButton,
			onClick: () =>
				(0, u.Z)({
					subscriptionTier: f.Si.TIER_1,
					analyticsLocations: e,
					analyticsObject: Z
				}),
			children: P.Z.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_BANNER_CTA
		}),
		statusClasses: { [L.tier1]: !0 }
	});
}
s.Z = function (e) {
	var s, a;
	let { subscription: r, renewalInvoicePreview: E, paymentSource: M, busy: G, analyticsLocation: F } = e,
		{ analyticsLocations: y } = (0, _.ZP)(d.Z.SUBSCRIPTION_HEADER),
		{ enabled: V } = (0, h.ZP)({ location: 'subscription_header' });
	(!f.pj.has(r.planId) || !D.JwP.ALL_PAUSEABLE.has(r.status)) && (V = !1);
	let Y = (0, p.Ng)(),
		w = null == Y ? void 0 : null === (s = Y.discount) || void 0 === s ? void 0 : s.amount,
		H = (0, g.t7)(),
		k = (0, g.lr)(),
		W = () => {
			if (r.status === D.O0b.ACTIVE || r.status === D.O0b.PAST_DUE || r.status === D.O0b.PAUSED) Q(x.Steps.PAUSE_SELECT);
		},
		K = () => {
			if (r.status === D.O0b.ACTIVE || r.status === D.O0b.PAST_DUE || r.status === D.O0b.PAUSE_PENDING) Q();
		},
		z = () => {
			if (r.status === D.O0b.BILLING_RETRY) Q(x.Steps.CONFIRM);
		},
		Q = (e) => {
			(0, l.openModalLazy)(async () => {
				let { default: s } = await Promise.resolve().then(t.bind(t, 833569));
				return (t) =>
					(0, n.jsx)(s, {
						...t,
						premiumSubscription: r,
						analyticsLocation: F,
						analyticsLocations: y,
						initialStep: e
					});
			});
		},
		X = () => {
			if (null != r && null != r.planIdFromItems) {
				let e = T.Z.get(r.planIdFromItems);
				if (null == e) {
					b.info('Plan not fetched for plan id: '.concat(r.planIdFromItems));
					return;
				}
				let s = (0, A.DE)(e, null == M ? void 0 : M.id, !1),
					t = s.length > 0 ? s[0] : r.currency,
					n = !1;
				1 === s.length && (null == M ? void 0 : M.id) === r.paymentSourceId && (0, A.tD)(e.id, t, null == M ? void 0 : M.id) && (n = !0),
					n
						? c.O5(r, y)
						: (0, u.Z)({
								initialPlanId: r.planIdFromItems,
								analyticsLocations: y,
								analyticsLocation: F,
								analyticsObject: Z,
								subscription: r
							});
			}
		},
		q = () => {
			if (!v.includes(r.status) || null == r.pauseEndsAt) {
				(0, C.q2)(Error('Invalid subscription to resume'), {
					extra: {
						subscriptionId: r.id,
						status: r.status,
						pauseEndsAt: r.pauseEndsAt
					}
				});
				return;
			}
			r.status === D.O0b.PAUSED
				? (0, u.Z)({
						initialPlanId: r.planIdFromItems,
						analyticsLocations: y,
						analyticsLocation: F,
						analyticsObject: Z,
						subscription: r,
						skipConfirm: !0
					})
				: c.v4(r, y);
		},
		J = () => {
			if (r.status === D.O0b.PAUSED) Q(x.Steps.PAUSE_SELECT);
		},
		$ = () => {
			Q(x.Steps.WHAT_YOU_LOSE);
		},
		ee = m.ZP.getPlanIdFromInvoice(r, E);
	if ((0, I.Q0)(ee)) return null;
	let es = m.ZP.getStatusFromInvoice(r, E),
		et = m.ZP.getPremiumType(ee),
		en = {
			[L.tier0]: et === f.p9.TIER_0,
			[L.tier1]: et === f.p9.TIER_1,
			[L.tier2]: et === f.p9.TIER_2,
			[L.canceled]: es === D.O0b.CANCELED,
			[L.pausePending]: es === D.O0b.PAUSE_PENDING,
			[L.paused]: es === D.O0b.PAUSED,
			[L.failedPayment]: (0, m.zV)(es)
		},
		ea = null;
	switch (et) {
		case f.p9.TIER_0:
			ea = (0, n.jsxs)('div', {
				className: L.wordMark,
				children: [
					(0, n.jsx)(N.Z, {
						className: L.discordWordmark,
						'aria-label': P.Z.Messages.PREMIUM_TIER_0
					}),
					(0, n.jsx)('div', { className: L.basicWordmark })
				]
			});
			break;
		case f.p9.TIER_1:
			ea = (0, n.jsx)(U, {});
			break;
		case f.p9.TIER_2:
			ea = (0, n.jsx)(S.Z, {
				className: L.planName,
				'aria-label': P.Z.Messages.PREMIUM_TITLE
			});
	}
	let ei = v.includes(r.status) ? B : j;
	return (0, n.jsx)(ei, {
		wordMark: ea,
		subscriptionInfo:
			((a = ee),
			o()(null != E, 'Expected renewalInvoicePreview'),
			(0, n.jsx)('div', {
				className: L.planInfo,
				children: (0, m.qV)({
					planId: a,
					subscription: r,
					renewalInvoicePreview: E,
					hasDiscountApplied: H,
					activeDiscountInfo: k
				})
			})),
		buttons: (() => {
			let { status: e } = r;
			if (r.isPurchasedExternally) {
				let e = (0, m.JE)(r.paymentGateway, 'SUBSCRIPTION_MANAGEMENT');
				return (0, n.jsx)(l.Anchor, {
					href: e,
					useDefaultUnderlineStyles: !1,
					children: (0, n.jsx)(l.Button, {
						className: i()(L.toolsButton, L.externalButton),
						size: l.Button.Sizes.SMALL,
						look: l.ButtonLooks.OUTLINED,
						color: l.ButtonColors.WHITE,
						submitting: G,
						children: P.Z.Messages.BILLING_MANAGE_SUBSCRIPTION
					})
				});
			}
			if (m.ZP.isBaseSubscriptionCanceled(r))
				return (0, n.jsx)(l.Button, {
					className: L.toolsButton,
					size: l.Button.Sizes.SMALL,
					color: l.ButtonColors.BRAND_INVERTED,
					submitting: G,
					onClick: X,
					children: P.Z.Messages.RESUBSCRIBE
				});
			switch (e) {
				case D.O0b.BILLING_RETRY:
					return (0, n.jsx)(l.Button, {
						className: L.billingRetryCancel,
						size: l.Button.Sizes.SMALL,
						color: l.ButtonColors.CUSTOM,
						submitting: G,
						onClick: z,
						children: P.Z.Messages.CANCEL
					});
				case D.O0b.PAUSE_PENDING:
					return (0, n.jsxs)('div', {
						className: L.toolsButtons,
						children: [
							(0, n.jsx)(l.Button, {
								className: L.toolsButton,
								size: l.Button.Sizes.SMALL,
								look: l.ButtonLooks.LINK,
								color: l.ButtonColors.WHITE,
								submitting: G,
								onClick: K,
								children: P.Z.Messages.PREMIUM_CANCEL_CONFIRM_BUTTON
							}),
							(0, n.jsx)(l.Button, {
								className: L.toolsButton,
								size: l.Button.Sizes.SMALL,
								color: l.ButtonColors.BRAND_INVERTED,
								submitting: G,
								onClick: q,
								children: P.Z.Messages.CANCEL_PAUSE
							})
						]
					});
				case D.O0b.PAUSED:
					let { durations: s } = (0, O.AT)(r);
					return (0, n.jsxs)('div', {
						className: L.toolsButtons,
						children: [
							s.length > 0
								? (0, n.jsx)(l.Button, {
										className: L.linkButton,
										size: l.Button.Sizes.SMALL,
										look: l.ButtonLooks.LINK,
										color: l.ButtonColors.WHITE,
										submitting: G,
										onClick: J,
										children: P.Z.Messages.PREMIUM_CANCEL_OR_EXTEND_PAUSE_SUBSCRIPTION
									})
								: (0, n.jsx)(l.Button, {
										className: L.linkButton,
										size: l.Button.Sizes.SMALL,
										look: l.ButtonLooks.LINK,
										color: l.ButtonColors.WHITE,
										submitting: G,
										onClick: $,
										children: P.Z.Messages.PREMIUM_CANCEL_CONFIRM_BUTTON
									}),
							(0, n.jsx)(l.Button, {
								className: L.toolsButton,
								size: l.Button.Sizes.SMALL,
								color: l.ButtonColors.BRAND_INVERTED,
								submitting: G,
								onClick: q,
								children: P.Z.Messages.RESUME
							})
						]
					});
				case D.O0b.ACTIVE:
				case D.O0b.PAST_DUE:
					let t = !1,
						a = null;
					return (
						null != r.renewalMutations && ((t = !0), (a = r.renewalMutations.planId !== r.planId ? P.Z.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PLAN : P.Z.Messages.PREMIUM_SWITCH_PLAN_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION)),
						null != r.trialEndsAt && ((t = !0), (a = P.Z.Messages.PREMIUM_SWITCH_PLAN_DISABLED_IN_TRIAL)),
						e === D.O0b.PAST_DUE && (t = !0),
						(0, n.jsxs)('div', {
							className: L.toolsButtons,
							children: [
								V
									? (0, n.jsx)(l.Button, {
											className: L.toolsButton,
											size: l.Button.Sizes.SMALL,
											look: l.ButtonLooks.LINK,
											color: l.ButtonColors.WHITE,
											submitting: G,
											onClick: W,
											children: P.Z.Messages.PREMIUM_PAUSE_OR_CANCEL_SUBSCRIPTION
										})
									: (0, n.jsx)(l.Button, {
											className: L.toolsButton,
											size: l.Button.Sizes.SMALL,
											look: l.ButtonLooks.LINK,
											color: l.ButtonColors.WHITE,
											submitting: G,
											onClick: K,
											children: P.Z.Messages.CANCEL
										}),
								(0, n.jsx)(l.Tooltip, {
									text: a,
									children: (e) =>
										(0, n.jsx)(R.Z, {
											...e,
											disabled: t,
											className: L.toolsButton,
											onClick: () => {
												(0, u.Z)({
													analyticsLocations: y,
													analyticsLocation: F,
													analyticsObject: Z,
													subscription: r
												});
											},
											children: P.Z.Messages.PREMIUM_SWITCH_PLANS
										})
								})
							]
						})
					);
			}
		})(),
		statusClasses: en,
		shouldUseDiscountMarketing: H,
		discountAmount: w
	});
};
