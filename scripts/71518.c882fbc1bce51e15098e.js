(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["71518"], {
        93902: function(e, t, n) {
            "use strict";
            e.exports = n.p + "de1981a6479d060d8ebd.png"
        },
        315147: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3808a69f670fa9a67284.svg"
        },
        426188: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFetchCollectiblesProduct: function() {
                    return o
                }
            }), n("222007");
            var i = n("884691"),
                a = n("65597"),
                r = n("552712"),
                l = n("21526"),
                s = n("853987"),
                u = n("49111");

            function o(e) {
                let t = (0, a.default)([r.default], () => null != e ? r.default.get(e) : null),
                    n = null != t && t.productLine !== u.SKUProductLines.COLLECTIBLES,
                    [o, c] = (0, a.useStateFromStoresArray)([s.default], () => [s.default.isFetching, s.default.getProduct(e)]);
                return (0, i.useEffect)(() => {
                    null != e && null == c && !n && !o && (0, l.fetchCollectiblesProduct)(e)
                }, [e, c, n, o]), {
                    product: c,
                    isFetching: o
                }
            }
        },
        99836: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PaymentModalReviewStep: function() {
                    return N
                }
            }), n("222007"), n("70102");
            var i = n("37983"),
                a = n("884691"),
                r = n("627445"),
                l = n.n(r),
                s = n("612039"),
                u = n("916187"),
                o = n("154889"),
                c = n("917247"),
                d = n("527866"),
                p = n("826795"),
                m = n("659632"),
                f = n("635357"),
                S = n("642906"),
                h = n("85336"),
                P = n("310093"),
                I = n("367767"),
                v = n("176108"),
                E = n("298392"),
                y = n("153727"),
                T = n("39065"),
                x = n("650484"),
                C = n("646718"),
                b = n("843455"),
                _ = n("782340");

            function N(e) {
                var t, n;
                let r, {
                        handleStepChange: N,
                        trialId: g,
                        trialFooterMessageOverride: L,
                        reviewWarningMessage: A,
                        planGroup: j,
                        openInvoiceId: R,
                        analyticsData: M,
                        analyticsLocation: w,
                        referralTrialOfferId: F,
                        initialPlanId: O,
                        subscriptionTier: U,
                        handleClose: G
                    } = e,
                    {
                        activeSubscription: D,
                        setUpdatedSubscription: B,
                        contextMetadata: W,
                        currencies: k,
                        paymentSourceId: H,
                        paymentSources: V,
                        priceOptions: z,
                        purchaseError: Y,
                        purchaseTokenAuthState: Z,
                        selectedPlan: K,
                        selectedSkuId: Q,
                        setCurrency: J,
                        setPaymentSourceId: X,
                        setPurchaseState: q,
                        setPurchaseError: $,
                        step: ee,
                        purchaseState: et,
                        isPremium: en,
                        setHasAcceptedTerms: ei,
                        purchaseType: ea,
                        setEntitlementsGranted: er,
                        startedPaymentFlowWithPaymentSourcesRef: el
                    } = (0, S.usePaymentContext)(),
                    {
                        isGift: es,
                        giftMessage: eu,
                        giftRecipient: eo
                    } = (0, f.useGiftContext)();
                l(null != ee, "Step should be set");
                let ec = a.useRef(null),
                    [ed, ep] = (0, s.default)(!1, 500),
                    em = null !== (n = null != g ? g : F) && void 0 !== n ? n : null,
                    ef = null != em && (!en || (0, C.SubscriptionTrials)[em].skus.includes(Q)) ? em : null,
                    eS = (0, c.usePremiumTrialOffer)(F),
                    eh = (0, o.usePremiumDiscountOffer)(),
                    eP = {
                        user_trial_offer_id: null == eS ? void 0 : eS.id
                    };
                a.useEffect(() => {
                    null != Y && null != ec.current && ec.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }, [Y]);
                let eI = a.useCallback((e, t) => {
                        B(e), null != t && er(t), N(h.Step.CONFIRM, {
                            fulfillment: {
                                subscription: e,
                                entitlements: t
                            }
                        })
                    }, [N, B, er]),
                    ev = null != H ? V[H] : null,
                    eE = null != K && C.MULTI_MONTH_PLANS.has(K.id) && null != ev && !(0, u.isPaymentSourceEligibleForMultiMonthPlans)(ev) ? Error(_.default.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
                    ey = a.useRef(null),
                    [eT, ex] = a.useState(null),
                    eC = !es && null != eS && null != Q && (0, C.SubscriptionTrials)[eS.trial_id].skus.includes(Q),
                    eb = null == eh ? void 0 : null === (t = eh.discount) || void 0 === t ? void 0 : t.plan_ids,
                    e_ = !es && null != eh && null != eb && null != K && eb.includes(K.id),
                    eN = es && (0, m.shouldShowCustomGiftExperience)(eo, !0, "PaymentModalReviewStep"),
                    eg = null == O && null == U && ea === b.PurchaseTypes.SUBSCRIPTION,
                    eL = (0, v.inOneStepSubscriptionCheckout)({
                        isTrial: eC,
                        isGift: es,
                        selectedSkuId: Q,
                        startedPaymentFlowWithPaymentSources: el.current
                    }),
                    eA = es && ea === b.PurchaseTypes.ONE_TIME,
                    ej = eA || (eL ? eg && en : en),
                    eR = a.useCallback(() => {
                        if (eL) {
                            N(h.Step.SKU_SELECT);
                            return
                        }
                        return eA ? N(h.Step.GIFT_CUSTOMIZATION) : N(h.Step.PLAN_SELECT)
                    }, [N, eL, eA]);
                return ea === b.PurchaseTypes.ONE_TIME ? r = (0, i.jsx)(E.default, {
                    hasLegalTermsFlash: ed,
                    legalTermsNodeRef: ey,
                    onPaymentSourceChange: e => X(null != e ? e.id : null),
                    handlePaymentSourceAdd: () => N(h.Step.ADD_PAYMENT_STEPS)
                }) : null == D || es ? (l(null != K, "Expected plan to be selected"), r = (0, i.jsx)(d.default, {
                    selectedPlanId: K.id,
                    paymentSources: V,
                    onPaymentSourceChange: e => X(null != e ? e.id : null),
                    priceOptions: z,
                    currencies: k,
                    onCurrencyChange: e => J(e),
                    handlePaymentSourceAdd: () => N(h.Step.ADD_PAYMENT_STEPS),
                    setHasAcceptedTerms: ei,
                    legalTermsNodeRef: ey,
                    hasLegalTermsFlash: ed,
                    trialId: ef,
                    trialFooterMessageOverride: L,
                    reviewWarningMessage: A,
                    purchaseState: et,
                    referralTrialOfferId: F,
                    isTrial: eC || null != g && null != L,
                    isDiscount: e_,
                    handleClose: G
                })) : (l(null != K, "Expected plan to be selected"), r = (0, i.jsx)(p.default, {
                    premiumSubscription: D,
                    paymentSources: V,
                    priceOptions: z,
                    onPaymentSourceChange: e => {
                        X(null != e ? e.id : null)
                    },
                    onPaymentSourceAdd: () => {
                        N(h.Step.ADD_PAYMENT_STEPS)
                    },
                    planId: K.id,
                    setHasAcceptedTerms: ei,
                    legalTermsNodeRef: ey,
                    hasLegalTermsFlash: ed,
                    onInvoiceError: e => ex(e),
                    planGroup: j,
                    currencies: k,
                    onCurrencyChange: e => J(e),
                    hasOpenInvoice: null != R,
                    purchaseState: et,
                    handleClose: G
                })), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(P.GiftNote, {
                        giftMessage: eu
                    }), !eN && (0, i.jsx)(y.default, {
                        isEligibleForTrial: eC
                    }), (0, i.jsxs)(x.PaymentPortalBody, {
                        children: [(0, i.jsx)(I.default, {}), r]
                    }), (0, i.jsx)(x.PaymentPortalFooter, {
                        children: (0, i.jsx)(T.default, {
                            premiumSubscription: null != D ? D : null,
                            setPurchaseState: q,
                            onBack: eR,
                            onNext: eI,
                            onPurchaseError: e => $(e),
                            legalTermsNodeRef: ey,
                            flashLegalTerms: () => ep(!0),
                            invoiceError: eT,
                            planError: eE,
                            analyticsLocation: w,
                            baseAnalyticsData: M,
                            flowStartTime: W.startTime,
                            trialId: ef,
                            planGroup: j,
                            purchaseTokenAuthState: Z,
                            openInvoiceId: R,
                            backButtonEligible: ej,
                            metadata: eP,
                            isTrial: eC,
                            disablePurchase: null != ev && ea === b.PurchaseTypes.SUBSCRIPTION && eC && !ev.canRedeemTrial()
                        })
                    })]
                })
            }
        },
        310093: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftNote: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("812952"),
                r = n("978679"),
                l = n("659632"),
                s = n("635357"),
                u = n("782340"),
                o = n("588937");

            function c(e) {
                let {
                    giftMessage: t = u.default.Messages.PREMIUM_PAYMENT_IS_GIFT
                } = e, {
                    isGift: n,
                    giftRecipient: c
                } = (0, s.useGiftContext)();
                return !n || (0, l.shouldShowCustomGiftExperience)(c, !0, "GiftNote") ? null : (0, i.jsx)(a.default, {
                    className: o.paymentNote,
                    iconSize: a.default.Sizes.SMALL,
                    icon: r.default,
                    color: null == t ? a.default.Colors.PRIMARY : a.default.Colors.SECONDARY,
                    children: t
                })
            }
        },
        298392: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("627445"),
                r = n.n(a),
                l = n("976979"),
                s = n("65597"),
                u = n("77078"),
                o = n("703332"),
                c = n("812952"),
                d = n("740055"),
                p = n("545876"),
                m = n("84460"),
                f = n("883662"),
                S = n("623003"),
                h = n("617223"),
                P = n("102985"),
                I = n("160299"),
                v = n("622839"),
                E = n("167726"),
                y = n("953109"),
                T = n("315585"),
                x = n("659632"),
                C = n("153160"),
                b = n("635357"),
                _ = n("642906"),
                N = n("286350"),
                g = n("628135"),
                L = n("49111"),
                A = n("782340"),
                j = n("135878");

            function R(e) {
                let {
                    sku: t,
                    skuPricePreview: n
                } = e;
                r(null != n.amount, "SKU must have a price set.");
                let a = n.amount - n.tax;
                return !n.tax_inclusive && n.tax > 0 ? (0, i.jsxs)(f.PremiumInvoiceTable, {
                    className: j.invoice,
                    children: [(0, i.jsx)(f.PremiumInvoiceTableRow, {
                        label: t.name,
                        value: (0, C.formatPrice)(a, n.currency),
                        className: j.subscriptionCostRow
                    }), (0, i.jsx)(f.PremiumInvoiceTableRow, {
                        label: A.default.Messages.PURCHASE_REVIEW_TAX_LABEL,
                        value: (0, C.formatPrice)(n.tax, n.currency),
                        className: j.subscriptionCostRow
                    }), (0, i.jsx)(f.PremiumInvoiceTableDivider, {}), (0, i.jsx)(f.PremiumInvoiceTableTotalRow, {
                        label: A.default.Messages.BILLING_INVOICE_TOTAL.format(),
                        value: (0, C.formatPrice)(n.amount, n.currency),
                        className: j.subscriptionCostRow
                    })]
                }) : (0, i.jsx)(f.PremiumInvoiceTable, {
                    className: j.invoice,
                    children: (0, i.jsx)(f.PremiumInvoiceTableRow, {
                        label: t.name,
                        value: (0, C.formatPrice)(n.amount, n.currency),
                        className: j.subscriptionCostRow
                    })
                })
            }

            function M(e) {
                let {
                    application: t,
                    sku: n,
                    isEmbeddedIAP: a
                } = e;
                return !0 !== a ? null : (0, i.jsxs)("div", {
                    className: j.skuHeading,
                    children: [(0, i.jsx)(y.default, {
                        game: t
                    }), (0, i.jsx)(u.Heading, {
                        variant: "heading-lg/bold",
                        className: j.skuHeadingText,
                        children: n.name
                    })]
                })
            }

            function w(e) {
                let {
                    hasLegalTermsFlash: t,
                    legalTermsNodeRef: n,
                    onPaymentSourceChange: a,
                    handlePaymentSourceAdd: f
                } = e, {
                    application: y,
                    purchaseState: C,
                    paymentSources: w,
                    paymentSourceId: F,
                    setHasAcceptedTerms: O,
                    skusById: U,
                    skuPricePreviewsById: G,
                    selectedSkuId: D,
                    isEmbeddedIAP: B,
                    purchaseType: W
                } = (0, _.usePaymentContext)(), {
                    isGift: k,
                    giftRecipient: H
                } = (0, b.useGiftContext)(), V = k && (0, x.shouldShowCustomGiftExperience)(H, !0, "OneTimePurchaseReview");
                r(null != D, "Expected selectedSkuId");
                let z = U[D],
                    Y = G[D],
                    Z = null != F ? F : v.NO_PAYMENT_SOURCE,
                    K = null != Y ? Y[Z] : null;
                r(null != z, "SKU must exist and be fetched."), r(null != y, "Application must exist.");
                let Q = (0, s.default)([m.default, E.default], () => E.default.inTestModeForApplication(y.id) || m.default.inDevModeForApplication(y.id), [y.id]),
                    J = (0, s.default)([P.default], () => P.default.enabled),
                    X = l.CountryCodesSets.EEA_COUNTRIES.has(I.default.ipCountryCodeWithFallback),
                    q = C === N.PurchaseState.PURCHASING || C === N.PurchaseState.COMPLETED,
                    $ = null != F ? w[F].type : null;
                return (0, i.jsxs)("div", {
                    className: j.stepBody,
                    children: [Q && (0, i.jsx)(c.default, {
                        icon: T.default,
                        iconSize: c.default.Sizes.SMALL,
                        color: c.default.Colors.WARNING,
                        className: j.errorBlock,
                        children: A.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                    }, "TEST_MODE"), (0, i.jsx)(M, {
                        application: y,
                        sku: z,
                        isEmbeddedIAP: B
                    }), V && (0, i.jsx)(g.default, {
                        sku: z
                    }), null != H ? (0, i.jsx)(h.SendGiftToUser, {
                        giftRecipient: H
                    }) : null, (0, i.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H5,
                        children: k ? A.default.Messages.PREMIUM_GIFTING_BUTTON : A.default.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
                    }), null == K ? (0, i.jsx)(u.Spinner, {
                        type: u.Spinner.Type.WANDERING_CUBES,
                        className: j.invoiceSpinner
                    }) : (0, i.jsx)(R, {
                        sku: z,
                        skuPricePreview: K
                    }), (0, i.jsxs)("div", {
                        className: j.paymentSourceWrapper,
                        children: [(0, i.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            children: A.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, i.jsx)(d.default, {
                            paymentSources: Object.values(w),
                            selectedPaymentSourceId: F,
                            onChange: a,
                            onPaymentSourceAdd: f,
                            hidePersonalInformation: J
                        })]
                    }), (0, i.jsx)(S.default, {
                        isActive: t,
                        ref: n,
                        children: (0, i.jsx)(p.default, {
                            onChange: O,
                            forceShow: !0,
                            showWithdrawalWaiver: X,
                            disabled: q,
                            subscriptionPlan: null,
                            finePrintClassname: j.fineprint,
                            purchaseType: W,
                            isGift: k,
                            checkboxLabel: z.productLine === L.SKUProductLines.COLLECTIBLES ? A.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
                                paidURL: L.MarketingURLs.PAID_TERMS
                            }) : void 0,
                            finePrint: (0, i.jsx)(o.default, {
                                paymentSourceType: $,
                                isEmbeddedIAP: B,
                                purchaseType: W,
                                productLine: z.productLine,
                                isGift: k
                            })
                        })
                    })]
                })
            }
        },
        628135: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            }), n("794252");
            var i = n("37983");
            n("884691");
            var a = n("506838"),
                r = n("265586"),
                l = n("65597"),
                s = n("77078"),
                u = n("606292"),
                o = n("688318"),
                c = n("426188"),
                d = n("210721"),
                p = n("65324"),
                m = n("845962"),
                f = n("635471"),
                S = n("50885"),
                h = n("635357"),
                P = n("782340"),
                I = n("433264"),
                v = n("93902");
            let E = S.default.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;

            function y(e) {
                let {
                    avatarDecoration: t
                } = e, {
                    avatarDecorationSrc: n,
                    eventHandlers: a,
                    avatarPlaceholderSrc: r
                } = (0, o.default)({
                    avatarDecorationOverride: t,
                    size: (0, u.getDecorationSizeForAvatarSize)(s.AvatarSizes.SIZE_152)
                });
                return (0, i.jsx)("div", {
                    className: I.giftMainAnimationWrapper,
                    children: (0, i.jsx)(E, {
                        ...a,
                        avatarDecoration: n,
                        src: r,
                        className: I.avatar,
                        size: s.AvatarSizes.SIZE_152,
                        "aria-label": P.default.Messages.USER_SETTINGS_AVATAR
                    })
                })
            }

            function T(e) {
                let {
                    id: t
                } = e, n = (0, l.default)([m.default], () => {
                    var e;
                    return null === (e = m.default.getProfileEffectById(t)) || void 0 === e ? void 0 : e.config
                });
                return (0, i.jsxs)("div", {
                    className: I.profileEffectContainer,
                    children: [(0, i.jsx)("img", {
                        src: v,
                        alt: null == n ? void 0 : n.accessibilityLabel,
                        className: I.profileEffectBackground
                    }), (0, i.jsx)(f.default, {
                        profileEffectId: t
                    })]
                })
            }

            function x(e) {
                let {
                    sku: t
                } = e, {
                    selectedGiftStyle: n
                } = (0, h.useGiftContext)(), {
                    product: l
                } = (0, c.useFetchCollectiblesProduct)(null == t ? void 0 : t.id), s = null == l ? void 0 : l.items[0], u = (0, a.match)(s).with({
                    type: r.CollectiblesItemType.AVATAR_DECORATION
                }, e => (0, i.jsx)(y, {
                    avatarDecoration: e
                })).with({
                    type: r.CollectiblesItemType.PROFILE_EFFECT
                }, e => (0, i.jsx)(T, {
                    id: e.id
                })).otherwise(() => null);
                return null != n && null == u ? (0, i.jsx)("div", {
                    className: I.giftMainAnimationWrapper,
                    children: (0, i.jsx)(p.default, {
                        defaultAnimationState: d.AnimationState.LOOP,
                        giftStyle: n,
                        shouldAnimate: !0,
                        className: I.giftMainAnimation
                    })
                }) : u
            }
        },
        826795: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                r = n("627445"),
                l = n.n(r),
                s = n("976979"),
                u = n("446674"),
                o = n("77078"),
                c = n("335430"),
                d = n("703332"),
                p = n("740055"),
                m = n("545876"),
                f = n("812204"),
                S = n("685665"),
                h = n("635357"),
                P = n("642906"),
                I = n("286350"),
                v = n("176108"),
                E = n("102985"),
                y = n("160299"),
                T = n("10514"),
                x = n("719923"),
                C = n("380186"),
                b = n("809071"),
                _ = n("883662"),
                N = n("991329"),
                g = n("623003"),
                L = n("570727"),
                A = n("146163"),
                j = n("49111"),
                R = n("782340"),
                M = n("709626"),
                w = n("615689");

            function F(e) {
                var t;
                let n, {
                        premiumSubscription: r,
                        paymentSources: f,
                        priceOptions: S,
                        onPaymentSourceChange: b,
                        onPaymentSourceAdd: N,
                        planId: A,
                        setHasAcceptedTerms: M,
                        legalTermsNodeRef: F,
                        hasLegalTermsFlash: B,
                        onInvoiceError: W,
                        planGroup: k,
                        currencies: H,
                        onCurrencyChange: V,
                        hasOpenInvoice: z,
                        purchaseState: Y,
                        handleClose: Z
                    } = e,
                    {
                        selectedSkuId: K,
                        defaultPlanId: Q,
                        isPremium: J,
                        startedPaymentFlowWithPaymentSourcesRef: X
                    } = (0, P.usePaymentContext)(),
                    {
                        isGift: q
                    } = (0, h.useGiftContext)(),
                    $ = S.paymentSourceId,
                    ee = (0, u.useStateFromStores)([T.default], () => T.default.get(A));
                l(null != ee, "Missing newPlan");
                let et = (0, u.useStateFromStores)([E.default], () => E.default.hidePersonalInformation);
                n = z ? R.default.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, x.isPremiumSubscriptionPlan)(A) ? (0, x.getBillingReviewSubheader)(r, ee) : R.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                    planName: ee.name
                });
                let en = s.CountryCodesSets.EEA_COUNTRIES.has(y.default.ipCountryCodeWithFallback),
                    ei = Y === I.PurchaseState.PURCHASING || Y === I.PurchaseState.COMPLETED,
                    ea = (0, v.inOneStepSubscriptionCheckout)({
                        isTrial: !1,
                        isGift: q,
                        selectedSkuId: K,
                        startedPaymentFlowWithPaymentSources: X.current
                    }),
                    er = a.useMemo(() => (0, x.getPremiumPlanOptions)({
                        skuId: K,
                        isPremium: J,
                        multiMonthPlans: [],
                        currentSubscription: r,
                        isGift: q,
                        isEligibleForTrial: !1,
                        defaultPlanId: Q,
                        defaultToMonthlyPlan: !1
                    }), [K, r, Q, J, q]);
                return (0, i.jsxs)("div", {
                    className: w.stepBody,
                    children: [ea && (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(_.PremiumInvoiceTableDivider, {
                            negativeMarginTop: !0
                        }), (0, i.jsx)(L.PremiumSwitchPlanSelectBody, {
                            planOptions: er,
                            eligibleForMultiMonthPlans: !1,
                            selectedPlanId: A,
                            showTotal: !1,
                            handleClose: Z
                        }), (0, i.jsx)(_.PremiumInvoiceTableDivider, {})]
                    }), (0, i.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H5,
                        children: n
                    }), null != r ? z ? (0, i.jsx)(O, {
                        premiumSubscription: r,
                        onInvoiceError: W,
                        priceOptions: S,
                        preventFetch: !1
                    }) : (0, C.subscriptionCanSwitchImmediately)(r, A, k) ? (0, i.jsx)(U, {
                        premiumSubscription: r,
                        newPlan: ee,
                        onInvoiceError: W,
                        planGroup: k,
                        priceOptions: S,
                        preventFetch: ei
                    }) : (0, i.jsx)(D, {
                        premiumSubscription: r,
                        newPlan: ee,
                        planGroup: k,
                        priceOptions: S,
                        preventFetch: ei
                    }) : null, (0, i.jsxs)("div", {
                        className: w.paymentSourceWrapper,
                        children: [(0, i.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: R.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, i.jsx)(p.default, {
                            paymentSources: Object.values(f),
                            selectedPaymentSourceId: $,
                            onChange: b,
                            onPaymentSourceAdd: N,
                            hidePersonalInformation: et,
                            disabled: ei
                        })]
                    }), (0, i.jsxs)(c.CurrencyWrapper, {
                        currencies: H,
                        className: w.currencyWrapper,
                        children: [(0, i.jsx)(o.FormTitle, {
                            tag: o.FormTitleTags.H5,
                            children: R.default.Messages.PAYMENT_CURRENCY
                        }), (0, i.jsx)(c.default, {
                            selectedCurrency: S.currency,
                            currencies: H,
                            onChange: V,
                            disabled: ei
                        })]
                    }), (0, i.jsx)(g.default, {
                        isActive: B,
                        ref: F,
                        children: null != r && (0, C.subscriptionCanSwitchImmediately)(r, A, k) ? (0, i.jsx)(G, {
                            premiumSubscription: r,
                            newPlan: ee,
                            onInvoiceError: W,
                            planGroup: k,
                            priceOptions: S,
                            preventFetch: ei,
                            disabled: ei,
                            isEEA: en,
                            paymentSources: f,
                            setHasAcceptedTerms: M
                        }) : (0, i.jsx)(m.default, {
                            onChange: M,
                            finePrint: (0, i.jsx)(d.default, {
                                subscriptionPlan: ee,
                                paymentSourceType: null === (t = f[null != $ ? $ : ""]) || void 0 === t ? void 0 : t.type,
                                basePrice: (0, x.getPrice)(ee.id, !1, q, S),
                                currentSubscription: r,
                                planGroup: k
                            }),
                            forceShow: !0,
                            showPricingLink: ee.currency !== j.CurrencyCodes.USD,
                            showWithdrawalWaiver: en,
                            disabled: ei,
                            subscriptionPlan: ee,
                            currentSubscription: r,
                            planGroup: k
                        })
                    })]
                })
            }

            function O(e) {
                let {
                    premiumSubscription: t,
                    onInvoiceError: n,
                    priceOptions: r,
                    preventFetch: l
                } = e, [s, u] = (0, b.useGetSubscriptionInvoice)({
                    subscriptionId: t.id,
                    preventFetch: l
                });
                a.useEffect(() => {
                    n(u)
                }, [n, u]);
                let c = (0, x.isPrepaidPaymentSource)(r.paymentSourceId);
                return null != s ? (0, i.jsxs)(_.PremiumInvoiceTable, {
                    className: M.invoice,
                    children: [(0, i.jsx)(A.PremiumSubscriptionCurrentInvoiceRows, {
                        invoice: s,
                        isPrepaidPaymentSource: c
                    }), (0, i.jsx)(A.SubscriptionInvoiceFooter, {
                        premiumSubscription: t,
                        renewalInvoice: s,
                        isUpdate: !0,
                        isPrepaidPaymentSource: c
                    })]
                }) : (0, i.jsx)(o.Spinner, {})
            }

            function U(e) {
                let {
                    premiumSubscription: t,
                    newPlan: n,
                    onInvoiceError: r,
                    planGroup: l,
                    priceOptions: s,
                    preventFetch: u
                } = e, {
                    selectedSkuId: c,
                    startedPaymentFlowWithPaymentSourcesRef: d
                } = (0, P.usePaymentContext)(), {
                    isGift: p
                } = (0, h.useGiftContext)(), {
                    analyticsLocations: m
                } = (0, S.default)(), I = (0, x.getItemsWithUpsertedPlanIdForGroup)(t, n.id, 1, new Set(l)), [E, y] = (0, b.useSubscriptionInvoicePreview)({
                    subscriptionId: t.id,
                    items: I,
                    renewal: !1,
                    applyEntitlements: !0,
                    paymentSourceId: s.paymentSourceId,
                    currency: s.currency,
                    preventFetch: u,
                    analyticsLocations: m,
                    analyticsLocation: f.default.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
                }), [T, C] = (0, b.useSubscriptionInvoicePreview)({
                    subscriptionId: t.id,
                    items: I,
                    renewal: !0,
                    paymentSourceId: s.paymentSourceId,
                    currency: s.currency,
                    preventFetch: u,
                    analyticsLocations: m,
                    analyticsLocation: f.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                }), N = null != y ? y : C;
                if (a.useEffect(() => {
                        r(N)
                    }, [r, N]), null != N) return (0, i.jsx)(o.FormErrorBlock, {
                    children: N.message
                });
                let g = (0, v.inOneStepSubscriptionCheckout)({
                        isTrial: !1,
                        isGift: p,
                        selectedSkuId: c,
                        startedPaymentFlowWithPaymentSources: d.current
                    }),
                    L = (0, v.planSwitchLoadingShowSpinner)(g, E, n);
                if (null == E || null == T || L) return (0, i.jsx)(o.Spinner, {
                    className: w.spinner
                });
                let j = (0, x.isPrepaidPaymentSource)(s.paymentSourceId);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(A.SubscriptionPeriodResetNotice, {
                        proratedInvoice: E,
                        renewalInvoice: T
                    }), (0, i.jsxs)(_.PremiumInvoiceTable, {
                        className: w.invoice,
                        children: [(0, i.jsx)(_.PremiumInvoiceTableHeader, {
                            children: R.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, i.jsx)(A.PremiumSubscriptionChangePlanInvoiceRows, {
                            invoice: E,
                            newPlan: n,
                            isPrepaidPaymentSource: j
                        }), (0, i.jsx)(A.SubscriptionInvoiceFooter, {
                            premiumSubscription: t,
                            proratedInvoice: E,
                            renewalInvoice: T,
                            isUpdate: !0,
                            isPrepaidPaymentSource: j
                        })]
                    })]
                })
            }

            function G(e) {
                var t, n;
                let r, {
                        premiumSubscription: l,
                        newPlan: s,
                        onInvoiceError: u,
                        planGroup: c,
                        priceOptions: p,
                        preventFetch: h,
                        disabled: P,
                        isEEA: I,
                        paymentSources: v,
                        setHasAcceptedTerms: E
                    } = e,
                    {
                        analyticsLocations: y
                    } = (0, S.default)(),
                    T = (0, x.getItemsWithUpsertedPlanIdForGroup)(l, s.id, 1, new Set(c)),
                    [C, _] = (0, b.useSubscriptionInvoicePreview)({
                        subscriptionId: l.id,
                        items: T,
                        renewal: !0,
                        paymentSourceId: p.paymentSourceId,
                        currency: p.currency,
                        preventFetch: h,
                        analyticsLocations: y,
                        analyticsLocation: f.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
                    });
                return (a.useEffect(() => {
                    u(_)
                }, [u, _]), null != _) ? (0, i.jsx)(o.FormErrorBlock, {
                    children: _.message
                }) : (null != C && (r = {
                    amount: C.total,
                    currency: C.currency,
                    tax: C.tax,
                    taxInclusive: C.taxInclusive
                }), null == r) ? null : (0, i.jsx)(m.default, {
                    onChange: E,
                    finePrint: (0, i.jsx)(d.default, {
                        subscriptionPlan: s,
                        paymentSourceType: null === (t = v[null !== (n = p.paymentSourceId) && void 0 !== n ? n : ""]) || void 0 === t ? void 0 : t.type,
                        basePrice: r,
                        currentSubscription: l,
                        planGroup: c
                    }),
                    forceShow: !0,
                    showPricingLink: s.currency !== j.CurrencyCodes.USD,
                    showWithdrawalWaiver: I,
                    disabled: P,
                    subscriptionPlan: s,
                    currentSubscription: l,
                    planGroup: c
                })
            }

            function D(e) {
                let t, {
                        premiumSubscription: n,
                        newPlan: a,
                        planGroup: r,
                        priceOptions: l,
                        preventFetch: s
                    } = e,
                    {
                        analyticsLocations: u
                    } = (0, S.default)(),
                    [c, d] = (0, b.useSubscriptionInvoicePreview)({
                        subscriptionId: n.id,
                        items: (0, x.getItemsWithUpsertedPlanIdForGroup)(n, a.id, 1, new Set(r)),
                        renewal: !0,
                        applyEntitlements: !1,
                        paymentSourceId: l.paymentSourceId,
                        currency: l.currency,
                        preventFetch: s,
                        analyticsLocations: u,
                        analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview"
                    });
                if (null != d) return (0, i.jsx)(o.FormErrorBlock, {
                    children: d.message
                });
                if (null == c) return (0, i.jsx)("div", {
                    children: (0, i.jsx)(o.Spinner, {})
                });
                t = n.type === j.SubscriptionTypes.PREMIUM ? (0, x.getDisplayName)(a.id) : a.name;
                let p = (0, x.isPrepaidPaymentSource)(l.paymentSourceId);
                return (0, i.jsxs)("div", {
                    className: w.bodyText,
                    children: [(0, i.jsx)("div", {
                        className: M.renewalInvoiceDate,
                        children: R.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
                            renewalDate: c.subscriptionPeriodStart
                        })
                    }), (0, i.jsxs)(_.PremiumInvoiceTable, {
                        className: w.invoice,
                        children: [(0, i.jsx)(_.PremiumInvoiceTableHeader, {
                            children: R.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
                        }), (0, i.jsx)(_.PremiumInvoiceTableRow, {
                            label: t,
                            value: (0, x.getFormattedRateForPlan)(a, l, !0)
                        }), (0, i.jsx)(N.default, {
                            invoice: c
                        }), (0, i.jsx)(_.PremiumInvoiceTableDivider, {}), (0, i.jsx)(A.SubscriptionInvoiceFooter, {
                            premiumSubscription: n,
                            renewalInvoice: c,
                            isUpdate: !0,
                            isPrepaidPaymentSource: p
                        })]
                    })]
                })
            }
        },
        273108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                r = n("414456"),
                l = n.n(r),
                s = n("446674"),
                u = n("206230"),
                o = n("471671"),
                c = n("629758");
            class d extends a.PureComponent {
                async componentDidMount() {
                    let {
                        importData: e,
                        nextScene: t,
                        pauseWhileUnfocused: i,
                        pause: a,
                        isWindowFocused: r,
                        useReducedMotion: l
                    } = this.props, [s, {
                        default: u
                    }] = await Promise.all([e(), n.el("245749").then(n.t.bind(n, "245749", 23))]);
                    null != this.animationRef && (this.animation = u.loadAnimation({
                        container: this.animationRef,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !0,
                        animationData: s
                    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (i && !r || a || l) && this.animation.pause())
                }
                componentWillUnmount() {
                    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
                }
                componentDidUpdate(e) {
                    var t, n, i;
                    let {
                        nextScene: a,
                        pauseWhileUnfocused: r,
                        pause: l,
                        isWindowFocused: s,
                        useReducedMotion: u
                    } = this.props;
                    a !== this.currentScene && this.shouldForcePlayAfter() && !l && this.playScene(a), null != this.animation && (r && !e.isWindowFocused && s && !u && !0 !== l ? this.animation.play() : (u || r && e.isWindowFocused && !s) && this.animation.pause()), !e.pause && l ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !l && !u && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== a && l && (this.playScene(a), null === (i = this.animation) || void 0 === i || i.pause())
                }
                shouldForcePlayAfter() {
                    let {
                        sceneSegments: e
                    } = this.props, t = e[this.currentScene];
                    return !0 === t.shouldForcePlayAfter
                }
                playScene(e) {
                    if (this.isUnmounted) return;
                    let {
                        onScenePlay: t,
                        sceneSegments: n,
                        useReducedMotion: i
                    } = this.props, a = n[e], r = n[this.currentScene];
                    if (null != this.animation && (e === this.currentScene || a.BEG !== r.BEG || a.END !== r.END) && this.animation.playSegments([a.BEG, a.END], !0), this.currentScene = e, null != t && t(this.currentScene), i) {
                        var l;
                        null === (l = this.animation) || void 0 === l || l.pause()
                    }
                }
                render() {
                    return (0, i.jsx)("div", {
                        ref: this.handleSetRef,
                        className: l(this.props.className, c.wrapper)
                    })
                }
                constructor(...e) {
                    super(...e), this.animationRef = null, this.currentScene = this.props.nextScene, this.isUnmounted = !1, this.handleLoopComplete = () => {
                        let {
                            onSceneComplete: e,
                            nextScene: t
                        } = this.props;
                        null != e && e(this.currentScene), this.playScene(t)
                    }, this.handleComplete = () => {
                        let {
                            onSceneComplete: e
                        } = this.props;
                        null != e && e(this.currentScene)
                    }, this.handleSetRef = e => {
                        this.animationRef = e;
                        let {
                            animationRef: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            d.defaultProps = {
                pauseWhileUnfocused: !0,
                pause: !1
            };
            var p = e => {
                let {
                    componentRef: t,
                    ...n
                } = e, a = (0, s.useStateFromStores)([o.default], () => o.default.isFocused()), r = (0, s.useStateFromStores)([u.default], () => u.default.useReducedMotion);
                return (0, i.jsx)(d, {
                    ...n,
                    isWindowFocused: a,
                    useReducedMotion: r,
                    ref: t
                })
            }
        },
        315585: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("75196");

            function r(e) {
                let {
                    width: t = 14,
                    height: n = 14,
                    color: r = "currentColor",
                    foreground: l,
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 14 14",
                    children: (0, i.jsx)("path", {
                        className: l,
                        fill: r,
                        d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z"
                    })
                })
            }
        },
        181108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                r = n("516555");
            let l = [n("315147")],
                s = ["#FFFFFF"],
                u = 1e3 / 60,
                o = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 0,
                            y: 1
                        },
                        maxValue: {
                            x: 3,
                            y: 3
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        maxValue: {
                            x: 0,
                            y: 0,
                            z: 360
                        },
                        minAddValue: {
                            x: 0,
                            y: 0,
                            z: -5
                        },
                        maxAddValue: {
                            x: 0,
                            y: 0,
                            z: 5
                        }
                    },
                    size: {
                        type: "static-random",
                        minValue: 2,
                        maxValue: 6
                    },
                    dragCoefficient: {
                        type: "static",
                        value: {
                            x: .05,
                            y: .05
                        }
                    },
                    opacity: {
                        type: "static",
                        value: .3
                    }
                };

            function c(e) {
                let {
                    className: t,
                    firing: n = !0,
                    wind: c = 2
                } = e, [d, p] = a.useState(null), [m, f] = a.useState(null), S = (0, r.useConfettiCannon)(m, d), h = a.useMemo(() => new r.Environment({
                    wind: c
                }), [c]), P = a.useCallback(() => {
                    let e = null == m ? void 0 : m.getCanvas();
                    if (null == e) return;
                    let t = e.getBoundingClientRect();
                    S.createConfetti({
                        ...o,
                        position: {
                            type: "static-random",
                            minValue: {
                                x: -t.width / 2,
                                y: -6
                            },
                            maxValue: {
                                x: t.width,
                                y: -6
                            }
                        }
                    })
                }, [S, m]);
                return a.useEffect(() => {
                    let e = n ? setInterval(P, u) : null;
                    return () => clearInterval(e)
                }, [n, P]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(r.ConfettiCanvas, {
                        ref: f,
                        className: t,
                        environment: h
                    }), (0, i.jsx)(r.SpriteCanvas, {
                        ref: p,
                        colors: s,
                        sprites: l,
                        spriteWidth: 6,
                        spriteHeight: 6
                    })]
                })
            }
        }
    }
]);