(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3437"], {
        619025: function(e, t, n) {
            "use strict";
            e.exports = n.p + "aa2afb65f20b2a22447c.svg"
        },
        258925: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c1957de296fc76c595c7.svg"
        },
        40755: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ea00a9ee82d2b42562bd.svg"
        },
        34125: function(e, t, n) {
            "use strict";
            e.exports = n.p + "0443790614dfcd466720.png"
        },
        880865: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c3389d3a16ceea3ef63a.svg"
        },
        777273: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchUserAffinities: function() {
                    return a
                }
            });
            var i = n("872717"),
                r = n("913144"),
                s = n("843823"),
                l = n("49111");

            function a() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return s.default.needsRefresh() ? (r.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), i.default.get({
                    url: l.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    r.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    r.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_FAILURE"
                    })
                })) : Promise.resolve()
            }
        },
        666031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GifIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                s = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87a2.9 2.9 0 0 1-1.66-.49 3.18 3.18 0 0 1-1.12-1.35A4.88 4.88 0 0 1 4 12c0-.75.14-1.42.42-2 .29-.59.7-1.04 1.24-1.37a3.7 3.7 0 0 1 1.95-.5c.64 0 1.21.14 1.72.4.5.28.89.67 1.15 1.16l-1.22.88a1.76 1.76 0 0 0-1.64-1.02c-.66 0-1.17.22-1.52.65a2.74 2.74 0 0 0-.53 1.8c0 .78.18 1.39.53 1.81.35.42.86.64 1.52.64.3 0 .57-.06.81-.16.25-.12.45-.27.58-.47v-.93H7.3v-1.4h3.24v4.23H9.27l-.2-.71c-.43.57-1.06.86-1.89.86Zm6.34-.15h-1.57V8.28h1.57v7.44Zm1.51 0h1.57v-2.83h2.76v-1.42H16.6V9.7H20V8.28h-4.97v7.44Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        236838: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("907002"),
                s = n("65597"),
                l = n("77078"),
                a = n("206230"),
                u = n("812204"),
                o = n("685665"),
                d = n("21526"),
                c = n("393414"),
                f = n("49111"),
                m = n("782340"),
                p = n("526380"),
                S = n("34125"),
                E = e => {
                    let {
                        onClose: t
                    } = e, {
                        analyticsLocations: n
                    } = (0, o.default)(), E = (0, s.default)([a.default], () => a.default.useReducedMotion), P = (0, r.useSpring)({
                        immediate: E,
                        delay: 800,
                        from: {
                            transform: "translate(0, -100%)"
                        },
                        to: {
                            transform: "translate(0, 0)"
                        }
                    }), _ = () => {
                        t(), (0, c.transitionTo)(f.Routes.COLLECTIBLES_SHOP), (0, d.openCollectiblesShop)({
                            openInLayer: !1,
                            analyticsSource: u.default.PREMIUM_PAYMENT_MODAL,
                            analyticsLocations: n
                        })
                    };
                    return (0, i.jsxs)(r.animated.div, {
                        style: P,
                        className: p.container,
                        children: [(0, i.jsx)("img", {
                            className: p.image,
                            src: S,
                            alt: ""
                        }), (0, i.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "header-primary",
                            children: m.default.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format({
                                checkItOut: e => (0, i.jsx)(l.Clickable, {
                                    className: p.link,
                                    onClick: _,
                                    children: e
                                }, "COLLECTIBLES_GIFT_CODE_MODAL_UPSELL")
                            })
                        })]
                    })
                }
        },
        307367: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var i = n("37983"),
                r = n("884691"),
                s = n("748820"),
                l = n("872717"),
                a = n("850068"),
                u = n("253981"),
                o = n("635357"),
                d = n("642906"),
                c = n("85336"),
                f = n("149833"),
                m = n("523591"),
                p = n("153727"),
                S = n("650484"),
                E = n("49111"),
                P = n("646718");

            function _(e) {
                let {
                    handleStepChange: t
                } = e, {
                    selectedPlan: n,
                    browserCheckoutState: _,
                    browserCheckoutStateLoadId: I,
                    contextMetadata: C
                } = (0, d.usePaymentContext)(), {
                    isGift: h
                } = (0, o.useGiftContext)(), [x, T] = r.useState(!1);
                return r.useEffect(() => {
                    var e;
                    !x && (T(!0), (0, a.startBrowserCheckout)(C.loadId), ! function(e, t, n, i) {
                        let r = E.Endpoints.BILLING_STANDALONE_CHECKOUT_PAGE(e, t, n),
                            a = new URL(u.default.makeUrl(E.Routes.BILLING_LOGIN_HANDOFF)),
                            o = (0, s.v4)();
                        a.searchParams.append("handoff_key", o), a.searchParams.append("redirect_to", r), l.default.post({
                            url: E.Endpoints.HANDOFF,
                            body: {
                                key: o
                            },
                            oldFormErrors: !0
                        }).then(e => {
                            a.searchParams.append("handoff_token", e.body.handoff_token), window.open(a.href)
                        }, () => {
                            i()
                        })
                    }(null !== (e = null == n ? void 0 : n.id) && void 0 !== e ? e : P.SubscriptionPlans.PREMIUM_MONTH_TIER_2, h, C.loadId, () => t(c.Step.ADD_PAYMENT_STEPS)))
                }, [n, h, x, T, C, t]), r.useEffect(() => {
                    I === C.loadId && _ === m.BrowserCheckoutState.DONE && t(c.Step.CONFIRM)
                }, [_, I, C, t]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(p.default, {}), (0, i.jsx)(S.PaymentPortalBody, {
                        children: (0, i.jsx)(f.AwaitingBrowserCheckoutStepBody, {})
                    }), (0, i.jsx)(S.PaymentPortalFooter, {
                        children: (0, i.jsx)(f.AwaitingBrowserCheckoutStepFooter, {
                            onStepChange: t,
                            onBackClick: () => t(c.Step.PLAN_SELECT)
                        })
                    })]
                })
            }
        },
        263820: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-08_checkout_aa_test",
                label: "Checkout AA Test",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "On",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var s = r
        },
        149833: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AwaitingBrowserCheckoutStepBody: function() {
                    return o
                },
                AwaitingBrowserCheckoutStepFooter: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("177998"),
                l = n("145131"),
                a = n("85336"),
                u = n("782340");
            let o = () => (0, i.jsx)("div", {
                    children: (0, i.jsx)(r.Heading, {
                        variant: "heading-xl/bold",
                        children: u.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_HEADER
                    })
                }),
                d = e => {
                    let {
                        onStepChange: t,
                        onBackClick: n
                    } = e;
                    return (0, i.jsx)("div", {
                        children: (0, i.jsxs)(r.ModalFooter, {
                            justify: l.default.Justify.BETWEEN,
                            align: l.default.Align.CENTER,
                            children: [(0, i.jsx)(r.Button, {
                                color: r.Button.Colors.BRAND,
                                onClick: () => {
                                    t(a.Step.ADD_PAYMENT_STEPS)
                                },
                                children: u.default.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_NEXT_BUTTON
                            }), (0, i.jsx)(s.default, {
                                onClick: n
                            })]
                        })
                    })
                }
        },
        992049: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentConfirmStep: function() {
                    return P
                }
            });
            var i = n("37983"),
                r = n("884691"),
                s = n("627445"),
                l = n.n(s),
                a = n("837148"),
                u = n("491523"),
                o = n("775155"),
                d = n("659632"),
                c = n("380186"),
                f = n("635357"),
                m = n("642906"),
                p = n("236838"),
                S = n("650484"),
                E = n("367767");

            function P(e) {
                var t, n;
                let s, {
                        handleClose: P,
                        planGroup: _,
                        onSubscriptionConfirmation: I,
                        renderPurchaseConfirmation: C,
                        postSuccessGuild: h,
                        followupSKUInfo: x
                    } = e,
                    {
                        activeSubscription: T,
                        paymentSources: g,
                        paymentSourceId: y,
                        selectedPlan: A,
                        selectedSkuId: L,
                        step: N,
                        updatedSubscription: M,
                        startingPremiumSubscriptionPlanIdRef: v
                    } = (0, m.usePaymentContext)(),
                    {
                        isGift: b,
                        giftRecipient: j,
                        giftCode: k,
                        hasSentMessage: O,
                        isSendingMessage: R,
                        sendGiftMessage: U
                    } = (0, f.useGiftContext)();
                l(null != A, "Expected plan to selected"), l(null != L, "Expected selectedSkuId"), l(null != N, "Step should be set");
                let {
                    successUpsellEnabled: F
                } = (0, a.default)({
                    location: "PremiumPaymentConfirmStep"
                }), w = r.useCallback(() => {
                    P(), null == I || I()
                }, [P, I]);
                return r.useEffect(() => {
                    if (!b || null == j || null == k || O || R || (0, d.shouldShowCustomGiftExperience)(j, !0, "PremiumPaymentConfirmStep")) return;
                    let e = u.AutomatedGiftCodeMessageExperiment.getCurrentConfig({
                        location: "36b986_1"
                    }).enabled;
                    e && U({
                        onSubscriptionConfirmation: I
                    })
                }, [U, b, j, k, O, R, I]), s = null != C ? C(A, w, M) : b ? (0, i.jsx)(o.PremiumSubscriptionGiftPurchaseConfirmation, {
                    planId: A.id,
                    onClose: w
                }) : v.current === A.id ? (0, i.jsx)(o.default, {
                    planId: A.id,
                    postSuccessGuild: h,
                    onClose: w,
                    paymentSourceType: null === (t = g[null != y ? y : ""]) || void 0 === t ? void 0 : t.type
                }) : (0, i.jsx)(o.default, {
                    followupSKUInfo: x,
                    startingPremiumSubscriptionPlanId: v.current,
                    planId: A.id,
                    onClose: w,
                    isDowngrade: null != T && (0, c.subscriptionCanDowngrade)(T, A.id, _),
                    paymentSourceType: null === (n = g[null != y ? y : ""]) || void 0 === n ? void 0 : n.type
                }), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(S.PaymentPortalBody, {
                        children: [(0, i.jsx)(E.default, {}), s]
                    }), F && b && (0, i.jsx)(p.default, {
                        onClose: w
                    })]
                })
            }
        },
        646139: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentModal: function() {
                    return O
                },
                STEPS: function() {
                    return F
                },
                default: function() {
                    return w
                }
            }), n("70102"), n("222007");
            var i = n("37983"),
                r = n("884691"),
                s = n("446674"),
                l = n("913144"),
                a = n("775433"),
                u = n("812204"),
                o = n("685665"),
                d = n("677156"),
                c = n("10514"),
                f = n("521012"),
                m = n("659632"),
                p = n("635357"),
                S = n("642906"),
                E = n("85336"),
                P = n("385179"),
                _ = n("262683"),
                I = n("946359"),
                C = n("307367"),
                h = n("724269"),
                x = n("99836"),
                T = n("263820"),
                g = n("992049"),
                y = n("176108"),
                A = n("97461"),
                L = n("403365"),
                N = n("498475"),
                M = n("254350"),
                v = n("49111"),
                b = n("646718"),
                j = n("782340");
            let k = [E.Step.PLAN_SELECT, E.Step.ADD_PAYMENT_STEPS, E.Step.REVIEW, E.Step.CONFIRM];

            function O(e) {
                let {
                    analyticsLocation: t,
                    analyticsObject: n,
                    analyticsSourceLocation: s,
                    onComplete: u,
                    transitionState: f,
                    initialPlanId: _,
                    subscriptionTier: I,
                    onClose: C,
                    trialId: h,
                    trialFooterMessageOverride: x,
                    reviewWarningMessage: g,
                    openInvoiceId: y,
                    onSubscriptionConfirmation: A,
                    renderPurchaseConfirmation: L,
                    postSuccessGuild: N,
                    followupSKUInfo: M,
                    renderHeader: j,
                    applicationId: k,
                    guildId: O,
                    referralTrialOfferId: R,
                    skuId: U,
                    returnRef: F
                } = e, {
                    analyticsLocations: w
                } = (0, o.default)();
                r.useEffect(() => {
                    !c.default.isLoadedForPremiumSKUs() && l.default.wait(() => (0, a.fetchPremiumSubscriptionPlans)())
                }, []), T.default.getCurrentConfig({
                    location: "3a6d55_1"
                }, {
                    autoTrackExposure: !0
                });
                let {
                    step: B
                } = (0, S.usePaymentContext)(), {
                    isGift: G,
                    giftMessage: D,
                    giftRecipient: H
                } = (0, p.useGiftContext)(), W = G && (0, m.shouldShowCustomGiftExperience)(H, !0, "PremiumPaymentModal") && B === E.Step.PLAN_SELECT;
                return null != H && d.CustomGiftExperiment.getCurrentConfig({
                    location: "initialRelease_PremiumPaymentModal"
                }), (0, i.jsx)(P.PaymentModal, {
                    analyticsLocations: w,
                    analyticsLocation: t,
                    analyticsObject: n,
                    analyticsSourceLocation: s,
                    analyticsSubscriptionType: v.SubscriptionTypes.PREMIUM,
                    onComplete: u,
                    transitionState: f,
                    initialPlanId: _,
                    giftMessage: D,
                    subscriptionTier: I,
                    onClose: C,
                    trialId: h,
                    isGift: G,
                    trialFooterMessageOverride: x,
                    reviewWarningMessage: g,
                    planGroup: b.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                    openInvoiceId: y,
                    onSubscriptionConfirmation: A,
                    renderPurchaseConfirmation: L,
                    postSuccessGuild: N,
                    followupSKUInfo: M,
                    renderHeader: j,
                    applicationId: k,
                    guildId: O,
                    referralTrialOfferId: R,
                    skuId: U,
                    shakeWhilePurchasing: !0,
                    isLargeModal: W,
                    returnRef: F
                })
            }

            function R(e) {
                let {
                    startedPaymentFlowWithPaymentSourcesRef: t,
                    selectedSkuId: n
                } = (0, S.usePaymentContext)(), {
                    isGift: i
                } = (0, p.useGiftContext)();
                return (0, y.inOneStepSubscriptionCheckout)({
                    isTrial: null != e && e,
                    isGift: i,
                    selectedSkuId: n,
                    startedPaymentFlowWithPaymentSources: t.current
                })
            }

            function U(e) {
                let {
                    initialPlanId: t,
                    handleStepChange: n,
                    referralTrialOfferId: r
                } = e, {
                    paymentSources: s,
                    selectedSkuId: l
                } = (0, S.usePaymentContext)(), {
                    isGift: a
                } = (0, p.useGiftContext)(), u = (0, M.default)({
                    isGift: a,
                    skuId: l,
                    referralTrialOfferId: r
                }), o = R(u);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(_.PaymentModalAddPaymentStep, {
                        ...e,
                        breadcrumbSteps: k,
                        onReturn: () => {
                            let e = Object.values(s).length < 1 && null == t ? E.Step.PLAN_SELECT : E.Step.REVIEW;
                            o && (e = E.Step.REVIEW), n(e, {
                                trackedFromStep: E.Step.PAYMENT_TYPE
                            })
                        }
                    })
                })
            }
            let F = [{
                key: null,
                renderStep: e => (0, i.jsx)(P.PaymentPredicateStep, {
                    ...e
                })
            }, {
                key: E.Step.SKU_SELECT,
                renderStep: e => (0, i.jsx)(L.PremiumPaymentSKUSelectStep, {
                    ...e
                }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0
                }
            }, {
                key: E.Step.WHAT_YOU_LOSE,
                renderStep: e => (0, i.jsx)(N.PremiumPaymentWhatYouLoseStep, {
                    ...e
                }),
                options: {
                    renderHeader: !1,
                    hideSlider: !0
                }
            }, {
                key: E.Step.PLAN_SELECT,
                renderStep: e => (0, i.jsx)(A.PremiumPaymentPlanSelectStep, {
                    ...e
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = R(e);
                        return t ? null : j.default.Messages.BILLING_STEP_SELECT_PLAN
                    }
                }
            }, {
                key: E.Step.ADD_PAYMENT_STEPS,
                renderStep: e => (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(U, {
                        ...e
                    })
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = R(e);
                        return t ? null : j.default.Messages.BILLING_STEP_PAYMENT
                    }
                }
            }, {
                key: E.Step.AWAITING_BROWSER_CHECKOUT,
                renderStep: e => (0, i.jsx)(C.default, {
                    ...e
                })
            }, {
                key: E.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                renderStep: () => (0, i.jsx)(h.default, {})
            }, {
                key: E.Step.AWAITING_AUTHENTICATION,
                renderStep: () => (0, i.jsx)(I.default, {})
            }, {
                key: E.Step.REVIEW,
                renderStep: e => (0, i.jsx)(x.PaymentModalReviewStep, {
                    ...e
                }),
                options: {
                    renderHeader: !0,
                    useBreadcrumbLabel: e => {
                        let t = R(e);
                        return t ? j.default.Messages.BILLING_STEP_PLAN_AND_PAYMENT : j.default.Messages.BILLING_STEP_REVIEW
                    }
                }
            }, {
                key: E.Step.CONFIRM,
                renderStep: e => (0, i.jsx)(g.PremiumPaymentConfirmStep, {
                    ...e
                })
            }];

            function w(e) {
                let t = (0, s.useStateFromStores)([f.default], () => f.default.getPremiumTypeSubscription()),
                    {
                        AnalyticsLocationProvider: n
                    } = (0, o.default)(e.analyticsLocations, u.default.PREMIUM_PAYMENT_MODAL),
                    {
                        subscriptionTier: r,
                        isGift: l,
                        giftRecipient: a,
                        giftMessage: d,
                        loadId: c,
                        defaultPlanId: m,
                        referralCode: E
                    } = e;
                if (null != r && !Object.values(b.PremiumSubscriptionSKUs).includes(r)) throw Error("subscriptionTier must be a premium subscription");
                return (0, i.jsx)(n, {
                    children: (0, i.jsx)(S.PaymentContextProvider, {
                        loadId: c,
                        activeSubscription: null != e.subscription ? e.subscription : t,
                        stepConfigs: F,
                        skuIDs: [...b.ACTIVE_PREMIUM_SKUS],
                        isGift: l,
                        defaultPlanId: m,
                        referralCode: E,
                        children: (0, i.jsx)(p.GiftContextProvider, {
                            isGift: l,
                            giftRecipient: null == a ? void 0 : a,
                            giftMessage: d,
                            children: (0, i.jsx)(O, {
                                ...e
                            })
                        })
                    })
                })
            }
        },
        97461: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentPlanSelectStep: function() {
                    return R
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                s = n("627445"),
                l = n.n(s),
                a = n("65597"),
                u = n("77078"),
                o = n("856413"),
                d = n("916187"),
                c = n("809071"),
                f = n("669073"),
                m = n("154889"),
                p = n("917247"),
                S = n("358821"),
                E = n("570727"),
                P = n("697218"),
                _ = n("10514"),
                I = n("145131"),
                C = n("659632"),
                h = n("701909"),
                x = n("719923"),
                T = n("635357"),
                g = n("642906"),
                y = n("85336"),
                A = n("153727"),
                L = n("628738"),
                N = n("650484"),
                M = n("310093"),
                v = n("367767"),
                b = n("49111"),
                j = n("646718"),
                k = n("782340"),
                O = n("424650");

            function R(e) {
                var t, n, s;
                let {
                    handleStepChange: R,
                    initialPlanId: U,
                    subscriptionTier: F,
                    trialId: w,
                    referralTrialOfferId: B,
                    handleClose: G
                } = e, {
                    activeSubscription: D,
                    hasFetchedSubscriptions: H,
                    paymentSourceId: W,
                    paymentSources: K,
                    selectedSkuId: Y,
                    selectedPlan: V,
                    step: Z,
                    defaultPlanId: z,
                    priceOptions: J,
                    isPremium: q
                } = (0, g.usePaymentContext)(), {
                    isGift: X,
                    giftRecipient: Q,
                    giftMessage: $
                } = (0, T.useGiftContext)(), ee = null != W ? K[W] : null, {
                    newPlans: et
                } = d.default.useExperiment({
                    location: "d17fd6_3"
                }, {
                    autoTrackExposure: !1
                }), en = (0, a.default)([P.default], () => P.default.getCurrentUser()), ei = !X && null != Y && Y === j.PremiumSubscriptionSKUs.TIER_2 && null != en && en.hasHadPremium() && H && null == D && (0, d.isPaymentSourceEligibleForMultiMonthPlans)(ee), er = (0, p.usePremiumTrialOffer)(B), es = !X && null != er && null != Y && (0, j.SubscriptionTrials)[er.trial_id].skus.includes(Y), el = (0, m.usePremiumDiscountOffer)(), ea = null == el ? void 0 : null === (t = el.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => j.SubscriptionPlanInfo[e].skuId === Y), eu = !X && null != el && null != Y && ea, eo = null !== (n = es || eu) && void 0 !== n && n, {
                    defaultToMonthlyPlan: ed
                } = f.TrialRedemptionDefaultPlanExperiment.useExperiment({
                    location: "d17fd6_4"
                }, {
                    autoTrackExposure: !1
                }), ec = r.useMemo(() => (0, x.getPremiumPlanOptions)({
                    skuId: Y,
                    isPremium: q,
                    multiMonthPlans: ei ? et : [],
                    currentSubscription: D,
                    isGift: X,
                    isEligibleForTrial: es,
                    defaultPlanId: z,
                    defaultToMonthlyPlan: ed
                }), [Y, q, et, D, ei, X, es, z, ed]), ef = eu && ec.includes(j.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? j.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : ec[0], em = (0, a.default)([_.default], () => _.default.get(ef)), ep = [{
                    planId: null == em ? void 0 : em.id,
                    quantity: 1
                }], [eS, eE] = r.useState(eo), [eP, e_] = (0, c.useSubscriptionInvoicePreview)({
                    items: ep,
                    renewal: !1,
                    preventFetch: !eo,
                    applyEntitlements: !0,
                    trialId: w,
                    paymentSourceId: J.paymentSourceId,
                    currency: J.currency
                });
                r.useEffect(() => {
                    eo && eE((null == eP ? void 0 : eP.subscriptionPeriodEnd) == null)
                }, [eP, eo]), (0, o.default)("Payment Modal Plan Select Step", eS, 5, {
                    proratedInvoicePreview: eP,
                    proratedInvoiceError: e_,
                    isEligibleForOffer: eo
                }, {
                    tags: {
                        app_context: "billing"
                    }
                });
                let eI = null !== (s = null == e_ ? void 0 : e_.message) && void 0 !== s ? s : k.default.Messages.ERROR_GENERIC_TITLE,
                    eC = eo && null == e_,
                    eh = eo && null != e_;
                return eC && (null == eP ? void 0 : eP.subscriptionPeriodEnd) == null ? (0, i.jsx)(L.default, {}) : (l(null != Z, "Step should be set"), l(ec.length > 0, "Premium plan options should be set"), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(M.GiftNote, {
                        giftMessage: $
                    }), !(X && (0, C.shouldShowCustomGiftExperience)(Q, !0, "PremiumPaymentPlanSelectStep")) && (0, i.jsx)(A.default, {
                        isEligibleForTrial: es
                    }), (0, i.jsxs)(N.PaymentPortalBody, {
                        children: [eC && (0, i.jsx)("hr", {
                            className: O.planSelectSeparatorUpper
                        }), (0, i.jsx)(S.default, {
                            isGift: X,
                            plan: V
                        }), (0, i.jsx)(v.default, {}), eh ? (0, i.jsx)(u.FormErrorBlock, {
                            children: eI
                        }) : (0, i.jsx)(E.PremiumSwitchPlanSelectBody, {
                            planOptions: ec,
                            eligibleForMultiMonthPlans: ei,
                            referralTrialOfferId: B,
                            selectedPlanId: null == V ? void 0 : V.id,
                            subscriptionPeriodEnd: null == eP ? void 0 : eP.subscriptionPeriodEnd,
                            discountInvoiceItems: eu ? null == eP ? void 0 : eP.invoiceItems : void 0,
                            handleClose: G
                        }), eC && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("hr", {
                                className: O.planSelectSeparatorLower
                            }), (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                children: k.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
                                    link: h.default.getArticleURL(b.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
                                })
                            })]
                        })]
                    }), (0, i.jsx)(N.PaymentPortalFooter, {
                        children: (0, i.jsx)(u.ModalFooter, {
                            justify: I.default.Justify.BETWEEN,
                            align: I.default.Align.CENTER,
                            children: (0, i.jsx)(E.PremiumSwitchPlanSelectFooter, {
                                onStepChange: R,
                                onBackClick: () => R(y.Step.SKU_SELECT),
                                showBackButton: null == U && null == F,
                                planOptions: ec,
                                shouldRenderUpdatedPaymentModal: eC,
                                isTrial: es
                            })
                        })
                    })]
                }))
            }
        },
        403365: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentSKUSelectStep: function() {
                    return P
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("917247"),
                l = n("279171"),
                a = n("49735"),
                u = n("719923"),
                o = n("635357"),
                d = n("642906"),
                c = n("85336"),
                f = n("176108"),
                m = n("254350"),
                p = n("646718"),
                S = n("782340"),
                E = n("600465");

            function P(e) {
                let {
                    handleStepChange: t,
                    handleClose: n,
                    referralTrialOfferId: r
                } = e, {
                    setSelectedSkuId: l,
                    activeSubscription: a,
                    startedPaymentFlowWithPaymentSourcesRef: S,
                    setSelectedPlanId: E
                } = (0, d.usePaymentContext)(), {
                    isGift: P
                } = (0, o.useGiftContext)(), I = (0, s.usePremiumTrialOffer)(r);
                return (0, i.jsx)(_, {
                    selectSku: e => (function(e) {
                        let {
                            activeSubscription: t,
                            newSkuId: n,
                            setSelectedSkuId: i,
                            handleStepChange: r,
                            isGift: s,
                            userTrialOffer: l,
                            setSelectedPlanId: a,
                            startedPaymentFlowWithPaymentSources: o
                        } = e;
                        i(n);
                        let d = c.Step.PLAN_SELECT,
                            S = (0, u.getPremiumSkuIdForSubscription)(t);
                        (S === p.PremiumSubscriptionSKUs.TIER_1 || S === p.PremiumSubscriptionSKUs.TIER_2) && n === p.PremiumSubscriptionSKUs.TIER_0 && !s && (d = c.Step.WHAT_YOU_LOSE);
                        let E = (0, m.isInTrialRedemption)({
                                userTrialOffer: l,
                                isGift: s,
                                skuId: n
                            }),
                            P = (0, f.inOneStepSubscriptionCheckout)({
                                isTrial: E,
                                isGift: s,
                                selectedSkuId: n,
                                startedPaymentFlowWithPaymentSources: o
                            });
                        if (d !== c.Step.WHAT_YOU_LOSE && P) {
                            d = c.Step.REVIEW;
                            let e = (0, f.getDefaultPlanOneStepCheckout)(n, t);
                            a(e)
                        }
                        r(d, {
                            analyticsDataOverride: {
                                sku_id: n
                            }
                        })
                    })({
                        activeSubscription: a,
                        newSkuId: e,
                        setSelectedSkuId: l,
                        handleStepChange: t,
                        isGift: P,
                        userTrialOffer: I,
                        startedPaymentFlowWithPaymentSources: S.current,
                        setSelectedPlanId: E
                    }),
                    onClose: n,
                    isGift: P
                })
            }

            function _(e) {
                let {
                    selectSku: t,
                    onClose: n,
                    isGift: s
                } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(r.ModalHeader, {
                        className: E.skuSelectModalHeader,
                        separator: !1,
                        children: [(0, i.jsx)(r.FormTitle, {
                            tag: r.FormTitleTags.H4,
                            children: S.default.Messages.BILLING_STEP_SELECT_PLAN
                        }), (0, i.jsx)(r.ModalCloseButton, {
                            onClick: n
                        })]
                    }), (0, i.jsxs)(r.ModalContent, {
                        className: E.skuSelectModalContent,
                        children: [(0, i.jsx)(l.default, {
                            fromBoostCancelModal: !1,
                            className: E.legacyPricingNotice
                        }), (0, i.jsx)(a.default, {
                            onSelectSku: t,
                            isGift: s
                        })]
                    })]
                })
            }
        },
        498475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentWhatYouLoseStep: function() {
                    return P
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("627445"),
                s = n.n(r),
                l = n("819855"),
                a = n("77078"),
                u = n("841098"),
                o = n("360262"),
                d = n("719923"),
                c = n("635357"),
                f = n("642906"),
                m = n("85336"),
                p = n("176108"),
                S = n("782340"),
                E = n("943490");

            function P(e) {
                let {
                    handleStepChange: t,
                    handleClose: n
                } = e, r = (0, u.default)(), {
                    activeSubscription: P,
                    selectedSkuId: _,
                    setSelectedPlanId: I,
                    startedPaymentFlowWithPaymentSourcesRef: C
                } = (0, f.usePaymentContext)(), {
                    isGift: h
                } = (0, c.useGiftContext)(), x = null != P ? (0, d.getPremiumPlanItem)(P) : null, T = null != x ? (0, d.getDisplayPremiumType)(x.planId) : null, g = null != x ? (0, d.getPremiumType)(x.planId) : null, y = (0, p.inOneStepSubscriptionCheckout)({
                    isTrial: !1,
                    isGift: h,
                    selectedSkuId: _,
                    startedPaymentFlowWithPaymentSources: C.current
                });
                return s(null != g, "Expected premium type"), (0, i.jsx)(o.default, {
                    premiumType: g,
                    titleText: S.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
                    subtitleText: S.default.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
                        subscriptionName: T
                    }),
                    footer: (0, i.jsxs)("div", {
                        className: E.whatYouLoseButtonContainer,
                        children: [(0, i.jsx)(a.Button, {
                            onClick: () => {
                                if (y) {
                                    let e = (0, p.getDefaultPlanOneStepCheckout)(_, P);
                                    I(e), t(m.Step.REVIEW)
                                } else t(m.Step.PLAN_SELECT)
                            },
                            children: S.default.Messages.CONTINUE
                        }), (0, i.jsx)(a.Button, {
                            look: a.Button.Looks.LINK,
                            color: (0, l.isThemeDark)(r) ? a.Button.Colors.WHITE : a.Button.Colors.PRIMARY,
                            onClick: n,
                            children: S.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
                        })]
                    }),
                    onClose: n,
                    isDowngrade: !0
                })
            }
        },
        491523: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AutomatedGiftCodeMessageExperiment: function() {
                    return r
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-07_automated_gift_code_message",
                label: "Automatically send gift code message in direct message to gift recipient",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show the automated gift code message",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        677156: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CustomGiftExperiment: function() {
                    return r
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2023-08_custom_gift",
                label: "Custom Gift Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show gift purchaser custom gift flow",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        358821: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("641078"),
                s = n("132554"),
                l = n("646718"),
                a = n("782340"),
                u = n("880865"),
                o = e => {
                    let {
                        isGift: t,
                        plan: n
                    } = e, o = (0, r.useIsEligibleForBogoPromotion)();
                    return t || (null == n ? void 0 : n.skuId) !== l.PremiumSubscriptionSKUs.TIER_2 || !o ? null : (0, i.jsx)(s.default, {
                        copy: a.default.Messages.BOGO_ANNOUNCEMENT_MODAL_UPGRADE_HEADER,
                        bannerImage: u
                    })
                }
        },
        49735: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("77078"),
                s = n("400307"),
                l = n("646718"),
                a = n("414539");

            function u(e) {
                let {
                    onClick: t,
                    isGift: n
                } = e;
                return (0, i.jsx)(r.Clickable, {
                    onClick: t,
                    style: {
                        cursor: "pointer"
                    },
                    children: (0, i.jsx)(s.Tier2Card, {
                        className: a.tier2MarketingCard,
                        ctaButton: null,
                        showWumpus: !0,
                        showYearlyPrice: !0,
                        isGift: n,
                        isModal: !0
                    })
                })
            }

            function o(e) {
                let {
                    onClick: t,
                    isGift: n
                } = e;
                return (0, i.jsx)(r.Clickable, {
                    onClick: t,
                    style: {
                        cursor: "pointer"
                    },
                    children: (0, i.jsx)(s.Tier0Card, {
                        className: a.tier0MarketingCard,
                        ctaButton: null,
                        showWumpus: !0,
                        showYearlyPrice: !0,
                        isGift: n
                    })
                })
            }
            var d = function(e) {
                let {
                    onSelectSku: t,
                    isGift: n
                } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(u, {
                        onClick: () => t(l.PremiumSubscriptionSKUs.TIER_2),
                        isGift: n
                    }), (0, i.jsx)(o, {
                        onClick: () => t(l.PremiumSubscriptionSKUs.TIER_0),
                        isGift: n
                    })]
                })
            }
        },
        132554: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                l = n("77078"),
                a = n("978679"),
                u = n("265469");

            function o(e) {
                let {
                    className: t,
                    copy: n,
                    bannerImage: r,
                    textColor: o = "always-white"
                } = e;
                return (0, i.jsxs)("div", {
                    className: s(u.bannerContainer, t),
                    children: [null == r ? null : (0, i.jsx)("img", {
                        alt: "",
                        className: u.banner,
                        src: r
                    }), (0, i.jsxs)("div", {
                        className: u.textContainer,
                        children: [(0, i.jsx)(a.default, {
                            className: u.giftIcon
                        }), (0, i.jsx)(l.Heading, {
                            className: u.textHeader,
                            color: o,
                            variant: "eyebrow",
                            children: n
                        })]
                    })]
                })
            }
        },
        843823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var i = n("446674"),
                r = n("913144"),
                s = n("27618");
            let l = !1,
                a = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                u = {
                    ...a
                };

            function o() {
                u.affinityUserIds = new Set(u.userAffinities.map(e => e.user_id).filter(e => !s.default.isBlocked(e)))
            }
            class d extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(s.default), null != e && (u.userAffinities = e.userAffinities, u.affinityUserIds = new Set(e.affinityUserIds), u.lastFetched = e.lastFetched), this.syncWith([s.default], o)
                }
                needsRefresh() {
                    return Date.now() - u.lastFetched > 864e5
                }
                getFetching() {
                    return l
                }
                getState() {
                    return u
                }
                getUserAffinities() {
                    return u.userAffinities
                }
                getUserAffinitiesUserIds() {
                    return u.affinityUserIds
                }
            }
            d.displayName = "UserAffinitiesStore", d.persistKey = "UserAffinitiesStore", d.migrations = [e => null];
            var c = new d(r.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: n
                    } = e;
                    u.userAffinities = null !== (t = n.user_affinities) && void 0 !== t ? t : [], u.lastFetched = Date.now(), o(), l = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    l = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    l = !1
                },
                LOGOUT: function() {
                    u = {
                        ...a
                    }
                }
            })
        }
    }
]);