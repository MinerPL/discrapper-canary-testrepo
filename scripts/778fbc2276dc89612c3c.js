(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["19193"], {
        35188: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2022-12_localized_pricing_poland_notice",
                label: "Localized Pricing Poland Notice",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Poland Notice",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        391533: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2023-05_localized_pricing_turkey_notice",
                label: "Localized Pricing Turkey Notice",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Turkey Notice",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        809071: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateSubscriptionInvoicePreview: function() {
                    return d
                },
                useSubscriptionInvoicePreview: function() {
                    return E
                },
                useGetSubscriptionInvoice: function() {
                    return N
                },
                getItemUnitPriceWithDiscount: function() {
                    return S
                }
            }), n("222007");
            var r = n("884691"),
                l = n("446674"),
                a = n("872717"),
                u = n("448993"),
                i = n("195358"),
                o = n("521012"),
                s = n("719923"),
                c = n("49111");
            async function _(e) {
                let {
                    items: t,
                    paymentSourceId: n,
                    trialId: r,
                    code: l,
                    applyEntitlements: o = !1,
                    currency: _,
                    renewal: d,
                    metadata: I
                } = e;
                t = (0, s.coerceExistingItemsToNewItemInterval)(t);
                let f = {
                    items: t.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: n,
                    trial_id: r,
                    code: l,
                    apply_entitlements: o,
                    currency: _,
                    renewal: d,
                    metadata: I
                };
                try {
                    let e = await a.default.post({
                        url: c.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: f,
                        oldFormErrors: !0
                    });
                    return i.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new u.BillingError(e)
                }
            }
            async function d(e) {
                let {
                    subscriptionId: t,
                    items: n,
                    paymentSourceId: r,
                    renewal: l,
                    currency: o,
                    applyEntitlements: _ = !1,
                    analyticsLocations: d,
                    analyticsLocation: I
                } = e;
                null != n && (n = (0, s.coerceExistingItemsToNewItemInterval)(n));
                let f = {
                    items: null == n ? void 0 : n.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: r,
                    renewal: l,
                    apply_entitlements: _,
                    currency: o
                };
                try {
                    let e = await a.default.patch({
                        url: c.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
                        query: {
                            location: I,
                            location_stack: d
                        },
                        body: f,
                        oldFormErrors: !0
                    });
                    return i.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new u.BillingError(e)
                }
            }
            async function I(e) {
                let {
                    subscriptionId: t,
                    preventFetch: n
                } = e;
                if (n) return null;
                let r = await a.default.get({
                    url: c.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return i.default.createInvoiceFromServer(r.body)
            }

            function f(e, t) {
                let {
                    preventFetch: n = !1
                } = e, [a, u] = (0, r.useState)(null), [i, s] = (0, r.useState)(null), c = (0, l.useStateFromStores)([o.default], () => o.default.getSubscriptions());
                return (0, r.useEffect)(() => {
                    let e = !1;
                    async function r() {
                        try {
                            s(null), u(null);
                            let n = await t();
                            !e && u(n)
                        } catch (t) {
                            !e && s(t)
                        }
                    }
                    return !n && r(), () => {
                        e = !0
                    }
                }, [n, t, c]), [a, i]
            }

            function E(e) {
                if ("subscriptionId" in e && null == e.subscriptionId) {
                    let {
                        subscriptionId: t,
                        ...n
                    } = e;
                    e = n
                }
                let t = (0, r.useCallback)(() => "subscriptionId" in e ? d(e) : "items" in e ? _(e) : null, [JSON.stringify(e)]);
                return f(e, t)
            }

            function N(e) {
                let t = (0, r.useCallback)(() => I(e), [JSON.stringify(e)]);
                return f(e, t)
            }

            function S(e) {
                let t = e.subscriptionPlanPrice;
                return e.discounts.forEach(n => {
                    let r = n.amount / e.quantity;
                    t -= r
                }), t
            }
        },
        296253: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("446674"),
                l = n("357957"),
                a = n("521012");

            function u() {
                let e = (0, r.useStateFromStores)([a.default], () => a.default.getPremiumTypeSubscription()),
                    t = (0, r.useStateFromStores)([l.default], () => {
                        var t;
                        return (null == e ? void 0 : e.paymentSourceId) != null ? null === (t = l.default.getPaymentSource(e.paymentSourceId)) || void 0 === t ? void 0 : t.country : null
                    });
                return t
            }
        },
        279171: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShouldShowLegacyPricingNotice: function() {
                    return N
                },
                default: function() {
                    return S
                }
            });
            var r = n("37983");
            n("884691");
            var l = n("414456"),
                a = n.n(l),
                u = n("627445"),
                i = n.n(u),
                o = n("423487"),
                s = n("701909"),
                c = n("35188"),
                _ = n("391533"),
                d = n("296253"),
                I = n("49111"),
                f = n("782340"),
                E = n("712109");

            function N() {
                let e = (0, d.default)(),
                    {
                        enabled: t
                    } = c.default.useExperiment({
                        location: "5ebfcf_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: n
                    } = _.default.useExperiment({
                        location: "5ebfcf_2"
                    }, {
                        autoTrackExposure: !1
                    });
                return null != e && ("PL" === e ? t : "TR" === e && n)
            }
            var S = e => {
                var t, n;
                let {
                    fromBoostCancelModal: l,
                    className: u
                } = e, c = (0, d.default)(), _ = N();
                if (!_) return null;
                return i(null != c, "Subscription billing country should not be null"), (0, r.jsxs)("div", {
                    className: a(E.noticeRoot, u),
                    children: [(0, r.jsx)("div", {
                        className: E.iconContainer,
                        children: (0, r.jsx)(o.default, {
                            className: E.infoIcon
                        })
                    }), (0, r.jsx)("div", {
                        className: E.text,
                        children: (t = c, n = l, "PL" === t ? n ? f.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : f.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === t ? n ? f.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : f.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : n ? f.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : f.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
                            helpCenterLink: s.default.getArticleURL(I.HelpdeskArticles.LOCALIZED_PRICING)
                        })
                    })]
                })
            }
        },
        67323: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            }), n("222007"), n("70102");
            var r = n("37983"),
                l = n("884691"),
                a = n("446674"),
                u = n("819855"),
                i = n("77078"),
                o = n("596523"),
                s = n("841098"),
                c = n("812204"),
                _ = n("685665"),
                d = n("649844"),
                I = n("357957"),
                f = n("10514"),
                E = n("599110"),
                N = n("719923"),
                S = n("153160"),
                O = n("713518"),
                T = n("380186"),
                p = n("809071"),
                C = n("360262"),
                L = n("510928"),
                m = n("775155"),
                R = n("646718"),
                P = n("49111"),
                M = n("782340"),
                y = n("889353"),
                U = e => {
                    let {
                        daysLeft: t,
                        premiumType: n,
                        premiumSubscription: U,
                        analyticsSource: A,
                        ...g
                    } = e, b = (0, s.default)(), [v, G] = l.useState(!1), {
                        analyticsLocations: B
                    } = (0, _.default)(c.default.PREMIUM_UNCANCEL_MODAL), h = (0, a.useStateFromStores)([I.default], () => (null == U ? void 0 : U.paymentSourceId) != null ? I.default.getPaymentSource(U.paymentSourceId) : null, [U]), [x] = (0, p.useSubscriptionInvoicePreview)({
                        subscriptionId: U.id,
                        renewal: !0,
                        analyticsLocations: (0, _.default)(c.default.PREMIUM_UNCANCEL_MODAL),
                        analyticsLocation: c.default.PREMIUM_UNCANCEL_MODAL
                    }), D = N.default.getPlanIdFromInvoice(U, x), Y = R.SubscriptionPlanInfo[D].skuId, k = (0, a.useStateFromStores)([f.default], () => (0, T.getOrFetchSubscriptionPlan)(D), [D]), F = (0, a.useStateFromStores)([f.default], () => f.default.isFetchingForSKU(Y)), W = null != k ? N.default.getDefaultPrice(D) : null, {
                        intervalType: w,
                        intervalCount: H
                    } = N.default.getInterval(D), j = n === R.PremiumTypes.TIER_1, Z = null != W ? (0, S.formatPrice)(W.amount, W.currency) : null;
                    return l.useEffect(() => {
                        E.default.track(P.AnalyticEvents.OPEN_MODAL, {
                            type: "Premium Uncancel Winback",
                            source: A
                        })
                    }, [A]), (0, r.jsx)(i.ModalRoot, {
                        ...g,
                        className: y.modal,
                        children: v ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(L.default, {
                                premiumType: n,
                                onClose: g.onClose
                            }), (0, r.jsx)(m.default, {
                                planId: D,
                                onClose: g.onClose,
                                paymentSourceType: null == h ? void 0 : h.type
                            })]
                        }) : (0, r.jsx)(C.default, {
                            premiumType: n,
                            titleText: j ? M.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE_TIER_1.format({
                                daysLeft: t
                            }) : M.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE.format({
                                daysLeft: t
                            }),
                            subtitleText: j ? M.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE_TIER_1.format() : M.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE.format(),
                            footer: (0, r.jsxs)("div", {
                                children: [null !== Z ? (0, r.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    children: function(e) {
                                        switch (w) {
                                            case R.SubscriptionIntervalTypes.YEAR:
                                                return j ? M.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY_TIER_1.format({
                                                    price: e
                                                }) : M.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY.format({
                                                    price: e
                                                });
                                            case R.SubscriptionIntervalTypes.MONTH:
                                                if (j) return M.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY_TIER_1.format({
                                                    price: e
                                                });
                                                if (1 === H) return M.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY.format({
                                                    price: e
                                                });
                                                else return M.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MULTI_MONTH.format({
                                                    price: e,
                                                    intervalCount: H
                                                });
                                            default:
                                                throw Error("Unknown interval type ".concat(w))
                                        }
                                    }(Z)
                                }) : (0, r.jsx)(i.Spinner, {
                                    type: i.SpinnerTypes.SPINNING_CIRCLE
                                }), (0, r.jsxs)("div", {
                                    className: y.footer,
                                    children: [(0, r.jsx)(i.Button, {
                                        disabled: F,
                                        onClick: () => {
                                            if (null != U) {
                                                let e = (0, O.planHasCurrency)(D, U.currency, null == h ? void 0 : h.id);
                                                null != h && h.id === U.paymentSourceId && e ? (o.resubscribe(U, B, P.AnalyticsLocations.UNCANCEL_WINBACK_MODAL), G(!0)) : (g.onClose(), (0, d.default)({
                                                    initialPlanId: D,
                                                    analyticsLocations: B,
                                                    analyticsLocation: P.AnalyticsLocations.UNCANCEL_WINBACK_MODAL
                                                }))
                                            }
                                        },
                                        children: M.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_KEEP_NITRO
                                    }), (0, r.jsx)(i.Button, {
                                        look: i.Button.Looks.LINK,
                                        color: (0, u.isThemeDark)(b) ? i.Button.Colors.WHITE : i.Button.Colors.PRIMARY,
                                        onClick: g.onClose,
                                        children: M.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_CANCEL
                                    })]
                                })]
                            }),
                            stickyFooter: !0,
                            onClose: g.onClose
                        })
                    })
                }
        }
    }
]);