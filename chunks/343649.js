t.r(n),
	t.d(n, {
		GuildBoostPurchaseModal: function () {
			return et;
		},
		default: function () {
			return eo;
		}
	}),
	t(47120);
var o,
	r = t(735250),
	a = t(470079),
	i = t(512722),
	c = t.n(i),
	l = t(77866),
	s = t(792986),
	u = t(772848),
	d = t(442837),
	p = t(780384),
	_ = t(481060),
	f = t(355467),
	m = t(179360),
	h = t(723484),
	S = t(330726),
	g = t(100527),
	b = t(906732),
	E = t(15640),
	I = t(89057),
	P = t(600164),
	y = t(232127),
	x = t(598),
	T = t(409813),
	M = t(45572),
	C = t(98278),
	v = t(431369),
	N = t(176919),
	A = t(3409),
	R = t(185139),
	L = t(210887),
	k = t(430824),
	O = t(314884),
	B = t(975060),
	w = t(853872),
	U = t(509545),
	D = t(78839),
	j = t(626135),
	Z = t(267642),
	F = t(74538),
	W = t(212895),
	G = t(296848),
	Y = t(518062),
	H = t(4434),
	V = t(333451),
	K = t(981631),
	z = t(474936),
	X = t(231338),
	q = t(689938),
	$ = t(55417);
(o || (o = {})).PREMIUM = 'discord://app/settings/nitro';
let J = z.Xh.NONE_MONTH,
	Q = [T.h8.PLAN_SELECT, T.h8.REVIEW, T.h8.CONFIRM],
	ee = [T.h8.PLAN_SELECT, T.h8.ADD_PAYMENT_STEPS, T.h8.REVIEW, T.h8.CONFIRM];
async function en(e) {
	await (0, m.X8)();
	let n = (0, Z.vx)(O.Z.boostSlots);
	return (0, m.W3)(
		e,
		n.map((e) => e.id)
	);
}
function et(e) {
	let n,
		{ transitionState: t, onClose: o, closeGuildPerksModal: i, analyticsLocations: m, analyticsLocation: et, analyticsSourceLocation: eo, guildId: er, onSubscribeComplete: ea, totalNumberOfSlotsToAssign: ei = 1, disablePremiumUpsell: ec = !1, onSubscriptionConfirmation: el, applicationId: es } = e,
		{ activeSubscription: eu, blockedPayments: ed } = (0, x.usePaymentContext)(),
		ep = (0, d.e7)([D.ZP], () => D.ZP.hasFetchedSubscriptions()),
		e_ = null != eu ? eu.paymentSourceId : null,
		ef = (0, d.e7)([U.Z], () => (null != eu ? (0, G.oE)(eu.planId) : null)),
		em = (0, d.e7)([U.Z], () => null == eu || null != U.Z.get(eu.planId)),
		eh = (0, d.e7)([U.Z], () => (null == ef ? U.Z.get(J) : ef)),
		eS = (0, d.e7)([L.Z], () => L.Z.theme),
		eg = a.useRef((0, Z.vx)(O.Z.boostSlots)).current,
		eb = (0, d.e7)([w.Z], () => w.Z.defaultPaymentSourceId),
		eE = (0, A.fL)(null != e_ ? e_ : ep ? eb : null),
		{ paymentSources: eI, setPurchaseError: eP, paymentSourceId: ey, setIsSubmittingCurrentStep: ex, paymentAuthenticationState: eT, setPaymentSourceId: eM, isSubmittingCurrentStep: eC, paymentError: ev, purchaseError: eN, purchaseErrorBlockRef: eA } = eE,
		eR = Object.keys(eI).length > 0,
		[eL, ek] = a.useState(ei - eg.length),
		[eO, eB] = a.useState(!1),
		ew = (0, d.e7)([B.Z], () => B.Z.popupCallbackCalled),
		eU = (0, E.V)(),
		eD = a.useMemo(
			() =>
				null != eu && em && eU
					? (0, v.g)(eu, eL)
					: [
							{
								planId: z.Xh.PREMIUM_MONTH_GUILD,
								quantity: eL
							}
						],
			[eu, em, eL, eU]
		),
		[ej, eZ] = (0, l.Z)(() => [(0, u.Z)(), Date.now()]),
		{ analyticsLocations: eF } = (0, b.ZP)(m, g.Z.GUILD_BOOST_PURCHASE_MODAL),
		eW = a.useMemo(() => {
			var e, n;
			return {
				load_id: ej,
				payment_type: X.Zu[X.GZ.SUBSCRIPTION],
				sku_id: z.Si.GUILD,
				subscription_type: K.NYc.PREMIUM,
				subscription_plan_id:
					null !==
						(n =
							null ===
								(e = eD.find((e) => {
									let { planId: n } = e;
									return z.Z1.has(n);
								})) || void 0 === e
								? void 0
								: e.planId) && void 0 !== n
						? n
						: z.Xh.PREMIUM_MONTH_GUILD,
				quantity: eL,
				location: et,
				source: eo,
				location_stack: eF
			};
		}, [ej, et, eF, eo, eD, eL]);
	a.useEffect(() => {
		(0, W.i1)(ey);
	}, [ey]),
		a.useEffect(() => {
			(async () => {
				if (!0 === ew)
					try {
						if (null == B.Z.redirectedPaymentId) return;
						await (0, f.OP)(B.Z.redirectedPaymentId), eJ(T.h8.CONFIRM), ez(M.A.COMPLETED), null != er && (await en(er)), null != ea && ea();
					} catch (e) {
						ez(M.A.FAIL),
							eP(e),
							j.default.track(K.rMx.PAYMENT_FLOW_FAILED, {
								...eW,
								payment_error_code: null == e ? void 0 : e.code,
								payment_gateway: K.gg$.STRIPE,
								payment_source_id: ey,
								duration_ms: Date.now() - eZ
							});
					} finally {
						ex(!1), (0, f.K2)();
					}
			})();
		}, [ew]),
		a.useEffect(() => {
			!D.ZP.hasFetchedSubscriptions() && (0, f.jg)(),
				(0, y.U)({
					...eW,
					guild_id: er,
					application_id: es
				}),
				null != eu &&
					null != eu.renewalMutations &&
					j.default.track(K.rMx.PREMIUM_GUILD_PENDING_MODAL, {
						location: et,
						guild_id: er
					});
		}, []);
	let [eG, eY] = a.useState(Q),
		[eH, eV] = a.useState(T.h8.PLAN_SELECT),
		[eK, ez] = a.useState(M.A.WAITING),
		[eX, eq] = a.useState(!0),
		e$ = (0, s.Z)(() => Date.now(), [eH]),
		eJ = a.useCallback(
			(e, n) => {
				eV(e), eP(null);
				let t = Date.now();
				j.default.track(K.rMx.PAYMENT_FLOW_STEP, {
					...eW,
					from_step: null != n ? n : eH,
					to_step: e === T.h8.ADD_PAYMENT_STEPS ? T.h8.PAYMENT_TYPE : e,
					step_duration_ms: t - e$,
					flow_duration_ms: t - eZ,
					guild_id: er,
					application_id: es
				});
			},
			[eP, eW, eH, e$, eZ, er, es]
		),
		eQ = () => {
			o(eK === M.A.COMPLETED);
		},
		e0 = null != eu && eu.isPurchasedExternally;
	a.useEffect(() => {
		eT !== N.wr.PENDING && eH !== T.h8.CONFIRM && null != e_ && (eG !== Q && eY(Q), !Q.includes(eH) && eH !== T.h8.PREMIUM_UPSELL && eJ(T.h8.REVIEW)), eH === T.h8.ADD_PAYMENT_STEPS && eG !== ee && eY(ee), e0 && eH !== T.h8.PLAN_SELECT && eV(T.h8.PLAN_SELECT);
	}, [eH, eJ, e0, eT, eu, e_, eG]),
		(0, N.bp)(eH, eT, eJ, ez),
		(0, T.dZ)(eH, eK, ez);
	let e1 = a.useRef(null),
		[e7, e2] = (0, S.Z)(!1, 500),
		[e8, e4] = a.useState(null),
		[e6, e5] = a.useState([]),
		[e3, e9] = a.useState(!1);
	a.useEffect(() => {
		let e;
		if (!!eU) null != U.Z.get(z.Xh.PREMIUM_MONTH_GUILD) && e5((e = (0, W.DE)(z.Xh.PREMIUM_MONTH_GUILD, ey, !1))), null == ey && null != eu && null != eu.paymentSourceId ? e4(eu.currency) : null != e && e4(e[0]);
	}, [ey, eu, eU, JSON.stringify(e6)]);
	let ne = (0, A.vP)({
		paymentModalArgs: eE,
		initialStep: T.h8.PAYMENT_TYPE,
		prependSteps: [T.h8.PLAN_SELECT],
		appendSteps: [T.h8.REVIEW, T.h8.CONFIRM],
		breadcrumpSteps: eG,
		currentBreadcrumpStep: eH,
		onReturn: () => {
			eJ(Object.values(eI).length < 1 ? T.h8.PLAN_SELECT : T.h8.REVIEW, T.h8.PAYMENT_TYPE);
		},
		onComplete: (e) => {
			eJ(T.h8.REVIEW, e);
		},
		onStepChange: (e) => {
			let { currentStep: n, toStep: t } = e,
				o = Date.now();
			j.default.track(K.rMx.PAYMENT_FLOW_STEP, {
				...eW,
				from_step: n,
				to_step: t,
				step_duration_ms: o - e$,
				flow_duration_ms: o - eZ,
				guild_id: er
			});
		}
	});
	if (ed) n = (0, r.jsx)(I.Vq, { onClose: eQ });
	else if (ep && em && eU && null != e8 && '' !== e8) {
		if (null == eu ? void 0 : eu.isPausedOrPausePending)
			n = (0, r.jsx)(_.ModalContent, {
				children: (0, r.jsx)('p', {
					className: $.copy,
					children: q.Z.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION
				})
			});
		else if (null != eu && null != eu.renewalMutations)
			n = (0, r.jsx)(_.ModalContent, {
				children: (0, r.jsx)('p', {
					className: $.copy,
					children: q.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_PENDING_MUTATION
				})
			});
		else if (eH === T.h8.PREMIUM_UPSELL) {
			c()(null != eh, 'Missing nextPremiumSubscriptionPlan'), c()(e8, 'Currency not defined');
			let e =
				null != ey
					? {
							paymentSourceId: ey,
							currency: e8
						}
					: { currency: e8 };
			n = (0, r.jsx)(V.Z, {
				premiumSubscriptionPlan: eh,
				analyticsLocation: et,
				analyticsSourceLocation: eo,
				onClose: eQ,
				onBack: () => eJ(T.h8.PLAN_SELECT),
				onSkip: () => eJ(null != e_ || eR ? T.h8.REVIEW : T.h8.ADD_PAYMENT_STEPS),
				onSubscriptionConfirmation: el,
				priceOptions: e
			});
		} else {
			let e, t, o, a;
			c()(e8, 'Currency not defined');
			let l =
				null != ey
					? {
							paymentSourceId: ey,
							currency: e8
						}
					: { currency: e8 };
			switch (eH) {
				case T.h8.PLAN_SELECT:
					c()(null != er, 'Missing guildId'),
						c()(null != eh, 'Missing nextPremiumSubscriptionPlan'),
						(e = (0, r.jsx)(H.CP, {
							premiumSubscriptionPlan: eh,
							numGuildBoosts: eL,
							setNumGuildBoosts: ek,
							setForceDisableSubmitButton: eq,
							premiumSubscription: eu,
							existingAvailableSlots: eg,
							onClickPremiumSubscriptionLink: () => {
								if (__BILLING_STANDALONE__) {
									window.location.href = 'discord://app/settings/nitro';
									return;
								}
								eQ(), null != i && i(), (0, C.z)();
							},
							guildId: er,
							priceOptions: l
						})),
						e0 &&
							null != eu &&
							null != eu.paymentGateway &&
							(e = (0, r.jsxs)(r.Fragment, {
								children: [
									(0, r.jsx)(_.FormErrorBlock, {
										className: $.externalErrorBlock,
										children: q.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_EXTERNAL.format({ paymentGatewayName: X.Vz[eu.paymentGateway] })
									}),
									e
								]
							})),
						(o = (0, r.jsx)(_.Button, {
							look: _.Button.Looks.LINK,
							color: (0, p.ap)(eS) ? _.Button.Colors.PRIMARY : _.Button.Colors.WHITE,
							onClick: eQ,
							children: q.Z.Messages.NEVERMIND
						})),
						(a = (0, r.jsx)(_.Button, {
							type: 'submit',
							disabled: eX || 0 === eL || e0,
							onClick: () => {
								if (!ec && (null == ef || ef.premiumSubscriptionType !== z.p9.TIER_2)) {
									eJ(T.h8.PREMIUM_UPSELL);
									return;
								}
								eJ(null != e_ || eR ? T.h8.REVIEW : T.h8.ADD_PAYMENT_STEPS);
							},
							children: q.Z.Messages.CONTINUE
						}));
					break;
				case T.h8.ADD_PAYMENT_STEPS:
					break;
				case T.h8.AWAITING_AUTHENTICATION:
					e = (0, r.jsx)(h.F, { className: $.__invalid_body });
					break;
				case T.h8.REVIEW:
					c()(null != eh, 'Missing nextPremiumSubscriptionPlan'),
						(e = (0, r.jsx)(H.Gq, {
							paymentSources: eI,
							priceOptions: l,
							currentPremiumSubscription: eu,
							premiumSubscriptionPaymentSourceId: e_,
							premiumSubscriptionPlan: eh,
							newAdditionalPlans: eD,
							onPaymentSourceChange: (e) => eM(null != e ? e.id : null),
							onPaymentSourceAdd: () => {
								eJ(T.h8.ADD_PAYMENT_STEPS), eM(null);
							},
							onPurchaseTermsChange: eB,
							legalTermsNodeRef: e1,
							hasLegalTermsFlash: e7
						})),
						(t = T.h8.PLAN_SELECT),
						(a = eO
							? (0, r.jsx)(_.Button, {
									color: _.Button.Colors.GREEN,
									type: 'submit',
									submitting: eC,
									onClick: async () => {
										c()(null != eD, 'Missing newAdditionalPlans');
										let e = null != ey ? eI[ey] : null;
										eP(null);
										try {
											if (
												(ez(M.A.PURCHASING),
												ex(!0),
												c()(null != ey, 'Missing paymentSourceId'),
												j.default.track(K.rMx.PAYMENT_FLOW_COMPLETED, {
													...eW,
													duration_ms: Date.now() - eZ,
													guild_id: er,
													application_id: es
												}),
												e3)
											)
												return;
											if (null == eu || null == ef) {
												c()(null != e, 'Missing paymentSource');
												let n = await (0, f.XW)({
													items: eD,
													paymentSource: e,
													currency: l.currency
												});
												if (n.redirectConfirmation) {
													e9(null != n.redirectURL);
													return;
												}
											} else {
												let n = { items: (0, F.MY)(eu, eD) };
												(n.currency = eu.currency), null == n.currency && (n.currency = l.currency), (n.paymentSource = null != e_ ? eI[e_] : void 0), null == n.paymentSource && (c()(null != e, 'Missing paymentSource'), (n.paymentSource = e), (n.currency = l.currency));
												let t = await (0, f.Mg)(eu, n, eF);
												if (t.redirectConfirmation) {
													e9(null != t.redirectURL);
													return;
												}
											}
											eJ(T.h8.CONFIRM), ez(M.A.COMPLETED), null != er && (await en(er)), null != ea && ea();
										} catch (n) {
											ez(M.A.FAIL),
												eP(n),
												j.default.track(K.rMx.PAYMENT_FLOW_FAILED, {
													...eW,
													payment_error_code: null == n ? void 0 : n.code,
													payment_gateway: null != e ? (e.type === K.HeQ.CARD ? K.gg$.STRIPE : K.gg$.BRAINTREE) : null,
													payment_source_id: ey,
													duration_ms: Date.now() - eZ
												});
										} finally {
											!e3 && ex(!1);
										}
									},
									children: q.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
								})
							: (0, r.jsx)(_.Tooltip, {
									text: q.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
									children: (e) =>
										(0, r.jsx)(_.Button, {
											...e,
											color: _.Button.Colors.GREEN,
											onClick: () => {
												null != e1.current && (e1.current.scrollIntoView({ behavior: 'smooth' }), e2(!0));
											},
											type: 'submit',
											children: q.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
										})
								}));
					break;
				case T.h8.CONFIRM:
					var nn;
					let s = k.Z.getGuild(er);
					e = (0, r.jsx)(H.R7, {
						guild: s,
						guildBoostQuantity: eL + eg.length,
						onClose: eQ,
						withAnimation: !1,
						paymentSourceType: null === (nn = eI[null != ey ? ey : '']) || void 0 === nn ? void 0 : nn.type
					});
			}
			let u = null != ev && null == (0, T.ly)(ev) ? ev : eN;
			n =
				eH === T.h8.ADD_PAYMENT_STEPS
					? ne
					: (0, r.jsx)(R.Z, {
							hideBreadcrumbs: eH === T.h8.CONFIRM,
							steps: eG,
							currentStep: eH,
							paymentError: u,
							purchaseErrorBlockRef: eA,
							hasCurrencies: e6.length > 1,
							body: e,
							footer:
								eH !== T.h8.CONFIRM
									? (0, r.jsxs)(_.ModalFooter, {
											direction: P.Z.Direction.HORIZONTAL,
											align: P.Z.Align.CENTER,
											justify: P.Z.Justify.END,
											children: [
												null != t
													? (0, r.jsx)('div', {
															className: $.backStep,
															children: (0, r.jsx)(_.Button, {
																color: (0, p.ap)(eS) ? _.Button.Colors.PRIMARY : _.Button.Colors.WHITE,
																look: _.Button.Looks.LINK,
																size: _.Button.Sizes.NONE,
																onClick: () => {
																	null != t && eJ(t);
																},
																children: q.Z.Messages.BACK
															})
														})
													: null,
												(0, r.jsxs)('div', {
													className: $.footerRight,
													children: [o, a]
												})
											]
										})
									: null
						});
		}
	} else
		n = (0, r.jsx)('div', {
			className: $.loadingWrapper,
			children: (0, r.jsx)(_.Spinner, {})
		});
	let nt = null;
	return (
		!ed &&
			eH !== T.h8.PREMIUM_UPSELL &&
			(nt = (0, r.jsx)(Y.Z, {
				onClose: eQ,
				currentStep: eH,
				purchaseState: eK
			})),
		(0, r.jsxs)(_.ModalRoot, {
			transitionState: t,
			children: [nt, n]
		})
	);
}
function eo(e) {
	let n = (0, d.e7)([D.ZP], () => D.ZP.getPremiumTypeSubscription()),
		{ analyticsLocations: t } = (0, b.ZP)(g.Z.GUILD_BOOST_PURCHASE_MODAL);
	return (0, r.jsx)(b.Gt, {
		value: t,
		children: (0, r.jsx)(x.PaymentContextProvider, {
			activeSubscription: n,
			stepConfigs: [],
			skuIDs: [],
			children: (0, r.jsx)(et, { ...e })
		})
	});
}
