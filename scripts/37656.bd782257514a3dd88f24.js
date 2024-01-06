(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["37656"], {
        392459: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e813b2b634fd928e71ca.svg"
        },
        26245: function(e, t, n) {
            "use strict";
            e.exports = n.p + "da8bcf0d776e8fde9e5b.svg"
        },
        21340: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d008fce672ad7583f06e.svg"
        },
        159548: function(e, t, n) {
            "use strict";
            e.exports = n.p + "8098ac87218ab1d81fe5.svg"
        },
        897184: function(e, t, n) {
            "use strict";
            e.exports = n.p + "400abe52c21c39a34b0d.svg"
        },
        990439: function(e, t, n) {
            "use strict";
            e.exports = n.p + "30e1ee80e32cc6659f02.svg"
        },
        999641: function(e, t, n) {
            "use strict";
            e.exports = n.p + "73113affb82e7871d40a.svg"
        },
        74771: function(e, t, n) {
            "use strict";
            e.exports = n.p + "94a8228b586e56215077.svg"
        },
        910549: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f46d6b0cbeeea15ecd81.png"
        },
        559965: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a2c4ffe04406bdb03384.png"
        },
        335430: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CurrencyWrapper: function() {
                    return i
                },
                default: function() {
                    return a
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("575209");

            function i(e) {
                let {
                    currencies: t,
                    className: n,
                    children: r
                } = e;
                return t.length < 2 ? null : (0, s.jsx)("div", {
                    className: n,
                    children: r
                })
            }
            var a = function(e) {
                let {
                    currencies: t,
                    onChange: n,
                    selectedCurrency: i,
                    className: a,
                    disabled: u = !1
                } = e;
                if (t.length < 2) return null;
                let o = t.map((e, t) => ({
                    key: t,
                    value: e,
                    label: "".concat(e.toUpperCase(), " - ").concat((0, l.getCurrencyFullName)(e))
                }));
                return (0, s.jsx)(r.SingleSelect, {
                    value: i,
                    options: o,
                    onChange: e => {
                        null != e && n(e)
                    },
                    className: a,
                    isDisabled: u
                })
            }
        },
        405932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("225389"),
                l = n("77078"),
                i = n("135898"),
                a = function(e) {
                    let {
                        message: t
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: i.container,
                        children: [(0, s.jsx)(r.CircleInformationIcon, {
                            className: i.icon,
                            width: 20,
                            height: 20,
                            color: l.tokens.colors.TEXT_WARNING
                        }), (0, s.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "header-muted",
                            children: t
                        })]
                    })
                }
        },
        50517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AwaitingPurchaseTokenAuthStepBody: function() {
                    return u
                },
                AwaitingPurchaseTokenAuthStepFooter: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("145131"),
                i = n("782340"),
                a = n("57153");
            let u = e => {
                    let {
                        className: t,
                        isEmailResent: n,
                        resendEmail: l
                    } = e;
                    return (0, s.jsx)("div", {
                        className: t,
                        children: (0, s.jsxs)("div", {
                            className: a.awaitingWrapper,
                            children: [(0, s.jsx)(r.Heading, {
                                variant: "heading-xl/bold",
                                children: i.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_HEADER
                            }), (0, s.jsxs)("p", {
                                children: [(0, s.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    children: i.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL
                                }), (0, s.jsx)("br", {}), (0, s.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    children: i.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_INSTRUCTIONS
                                }), (0, s.jsx)("br", {}), (0, s.jsxs)(r.Text, {
                                    variant: "text-md/normal",
                                    children: [i.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_PROMPT, "\xa0", n ? i.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_SENT : (0, s.jsx)(r.Anchor, {
                                        onClick: l,
                                        children: i.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_ACTION
                                    })]
                                })]
                            })]
                        })
                    })
                },
                o = () => (0, s.jsx)("div", {
                    children: (0, s.jsx)(r.ModalFooter, {
                        justify: l.default.Justify.BETWEEN,
                        align: l.default.Align.CENTER,
                        children: (0, s.jsx)(r.Button, {
                            "data-testid": "continue",
                            color: r.Button.Colors.BRAND,
                            disabled: !0,
                            children: i.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_NEXT_BUTTON
                        })
                    })
                })
        },
        763377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleQuestionIcon: function() {
                    return i
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: i = "transparent",
                    secondaryColorClass: a = "",
                    color: u = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...c
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, l.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, s.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof i ? i : i.css,
                        className: a
                    }), (0, s.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-.28-16c-.98 0-1.81.47-2.27 1.14A1 1 0 1 1 7.8 7.01 4.73 4.73 0 0 1 11.72 5c2.5 0 4.65 1.88 4.65 4.38 0 2.1-1.54 3.77-3.52 4.24l.14 1a1 1 0 0 1-1.98.27l-.28-2a1 1 0 0 1 .99-1.14c1.54 0 2.65-1.14 2.65-2.38 0-1.23-1.1-2.37-2.65-2.37ZM13 17.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        422244: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ShopIcon: function() {
                    return i
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, s.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M2.63 4.19A3 3 0 0 1 5.53 2H7a1 1 0 0 1 1 1v3.98a3.07 3.07 0 0 1-.3 1.35A2.97 2.97 0 0 1 4.98 10c-2 0-3.44-1.9-2.9-3.83l.55-1.98ZM10 2a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3 3 3 0 0 0 3-2.97V3a1 1 0 0 0-1-1h-4ZM17 2a1 1 0 0 0-1 1v3.98a3.65 3.65 0 0 0 0 .05A2.95 2.95 0 0 0 19.02 10c2 0 3.44-1.9 2.9-3.83l-.55-1.98A3 3 0 0 0 18.47 2H17Z",
                        className: a
                    }), (0, s.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M21 11.42V19a3 3 0 0 1-3 3h-2.75a.25.25 0 0 1-.25-.25V16a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v5.75c0 .14-.11.25-.25.25H6a3 3 0 0 1-3-3v-7.58c0-.18.2-.3.37-.24a4.46 4.46 0 0 0 4.94-1.1c.1-.12.3-.12.4 0a4.49 4.49 0 0 0 6.58 0c.1-.12.3-.12.4 0a4.45 4.45 0 0 0 4.94 1.1c.17-.07.37.06.37.24Z",
                        className: a
                    })]
                })
            }
        },
        645156: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashIcon: function() {
                    return i
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M19.12 2a.5.5 0 0 1 .43.76L8.22 21.64a.75.75 0 0 1-.64.36h-2.7a.5.5 0 0 1-.43-.76L15.78 2.36a.75.75 0 0 1 .64-.36h2.7Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        594203: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ResizeOrientation: function() {
                    return s
                },
                default: function() {
                    return c
                }
            }), n("222007");
            var s, r, l, i, a = n("884691"),
                u = n("917351");

            function o(e) {
                return 2 === e || 3 === e ? 1 : 0
            }(l = s || (s = {}))[l.VERTICAL_TOP = 0] = "VERTICAL_TOP", l[l.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", l[l.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", l[l.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", (i = r || (r = {}))[i.VERTICAL = 0] = "VERTICAL", i[i.HORIZONTAL = 1] = "HORIZONTAL";
            var c = e => {
                let {
                    initialElementDimension: t,
                    resizableDomNodeRef: n,
                    maxDimension: s,
                    minDimension: r,
                    onElementResize: l,
                    onElementResizeEnd: i,
                    throttleDuration: c = 300,
                    orientation: d,
                    usePointerEvents: f = !1
                } = e, [m, _] = a.useState(!1), E = a.useRef(0), I = a.useRef(null == t ? 0 : t);
                return a.useLayoutEffect(() => {
                    if (!m || null == n.current) return;

                    function e(e) {
                        let t = 1 === o(d) ? e.screenX : e.screenY,
                            n = 0 === d || 2 === d,
                            l = (t - E.current) * (n ? -1 : 1),
                            i = I.current + l;
                        return (0, u.clamp)(i, null != r ? r : 0, null != s ? s : i)
                    }
                    let t = (0, u.throttle)(l, c),
                        a = s => {
                            if (null == n.current) return null;
                            let r = e(s),
                                l = 1 === o(d) ? "width" : "height";
                            n.current.style[l] = "".concat(r, "px"), t(r)
                        },
                        p = t => {
                            _(!1);
                            let n = e(t);
                            l(n), null == i || i(n)
                        },
                        N = f ? "pointerup" : "mouseup",
                        S = f ? "pointermove" : "mousemove",
                        P = n.current.ownerDocument;
                    return P.addEventListener(N, p), P.addEventListener(S, a), () => {
                        P.removeEventListener(N, p), P.removeEventListener(S, a), t.cancel()
                    }
                }, [m, l, r, s, d, n, c, i, f]), a.useCallback(e => {
                    let t = 1 === o(d);
                    null != n.current && (I.current = t ? n.current.offsetWidth : n.current.offsetHeight), E.current = t ? e.screenX : e.screenY, _(!0)
                }, [d, n])
            }
        },
        837148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("862205");
            let r = (0, s.createExperiment)({
                kind: "user",
                id: "2023-12_collectibles_gifting_dm_entrypoint",
                label: "Collectibles Gifting From DM's",
                defaultConfig: {
                    confirmUpsellEnabled: !1,
                    successUpsellEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Collectibles Gifting From DM's Enabled With Success Step Upsell",
                    config: {
                        confirmUpsellEnabled: !1,
                        successUpsellEnabled: !0
                    }
                }, {
                    id: 2,
                    label: "Collectibles Gifting from DM's Enabled With Confirm Step Upsell",
                    config: {
                        confirmUpsellEnabled: !0,
                        successUpsellEnabled: !1
                    }
                }, {
                    id: 100,
                    label: "Collectibles Gifting from DM's Enabled With All Upsells",
                    config: {
                        confirmUpsellEnabled: !0,
                        successUpsellEnabled: !0
                    }
                }]
            });
            var l = e => {
                let {
                    location: t,
                    autoTrackExposure: n = !0,
                    trackExposureOptions: s = {}
                } = e;
                return r.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: n,
                    trackExposureOptions: s
                })
            }
        },
        903494: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("422244"),
                l = n("77078"),
                i = n("812204"),
                a = n("685665"),
                u = n("393414"),
                o = n("21526"),
                c = n("49111"),
                d = n("782340"),
                f = n("898689"),
                m = e => {
                    let {
                        onClose: t
                    } = e, {
                        analyticsLocations: n
                    } = (0, a.default)(), m = () => {
                        t(), (0, u.transitionTo)(c.Routes.COLLECTIBLES_SHOP), (0, o.openCollectiblesShop)({
                            openInLayer: !1,
                            analyticsSource: i.default.PREMIUM_PAYMENT_MODAL,
                            analyticsLocations: n
                        })
                    };
                    return (0, s.jsxs)("div", {
                        className: f.container,
                        children: [(0, s.jsx)("div", {
                            className: f.iconBackground,
                            children: (0, s.jsx)(r.ShopIcon, {
                                width: 20,
                                height: 20,
                                color: l.tokens.colors.WHITE
                            })
                        }), (0, s.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "header-primary",
                            children: d.default.Messages.COLLECTIBLES_GIFT_CODE_MODAL_UPSELL.format({
                                checkItOut: e => (0, s.jsx)(l.Clickable, {
                                    className: f.link,
                                    onClick: m,
                                    children: e
                                })
                            })
                        })]
                    })
                }
        },
        605886: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                purchaseProduct: function() {
                    return S
                }
            }), n("70102"), n("222007");
            var s = n("627445"),
                r = n.n(s),
                l = n("913144"),
                i = n("850068"),
                a = n("112679"),
                u = n("596523"),
                o = n("465527"),
                c = n("388290"),
                d = n("599110"),
                f = n("745279"),
                m = n("659632"),
                _ = n("719923"),
                E = n("286350"),
                I = n("49111"),
                p = n("646718"),
                N = n("782340");
            async function S(e) {
                let {
                    setPurchaseState: t,
                    setHasAcceptedTerms: n,
                    setIsSubmitting: s,
                    setPurchaseError: S,
                    hasRedirectURL: P,
                    setHasRedirectURL: T,
                    isGift: C,
                    giftStyle: A,
                    baseAnalyticsData: h,
                    analyticsLocation: O,
                    analyticsLocations: R,
                    flowStartTime: g,
                    subscriptionPlan: v,
                    planGroup: M,
                    trialId: x,
                    priceOptions: y,
                    paymentSource: L,
                    isPrepaidPaymentPastDue: b,
                    openInvoiceId: j,
                    premiumSubscription: G,
                    onNext: D,
                    metadata: U,
                    sku: B,
                    skuPricePreview: F,
                    purchaseType: w,
                    referralCode: k,
                    loadId: H,
                    giftRecipient: Y,
                    customMessage: W,
                    emojiConfetti: Z,
                    soundEffect: K
                } = e;
                t(E.PurchaseState.PURCHASING), n(!0), s(!0), l.default.wait(a.clearError), S(null);
                try {
                    let e, n, s;
                    if (d.default.track(I.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
                            ...h,
                            duration_ms: Date.now() - g
                        }), P) return;
                    let l = (0, m.getGiftExperience)(Y),
                        a = m.GIFT_EXPERIENCES_WITH_CUSTOM_MESSAGING.has(l),
                        S = m.GIFT_EXPERIENCES_WITH_CUSTOM_EMOJI_SOUNDBOARD.has(l);
                    if (w === I.PurchaseTypes.ONE_TIME) r(null != B, "SKU must exist and be fetched."), r(null != F, "SKUPricePreview must exist."), e = await (0, o.purchaseSKU)(B.applicationId, B.id, {
                        expectedAmount: F.amount,
                        expectedCurrency: F.currency,
                        isGift: C,
                        paymentSource: L,
                        loadId: H,
                        giftStyle: A,
                        recipientId: l !== m.GiftExperience.DEFAULT ? null == Y ? void 0 : Y.id : void 0,
                        customMessage: a ? W : void 0,
                        emojiConfetti: S ? Z : void 0,
                        soundEffect: S ? K : void 0
                    });
                    else if (r(null != v, "Missing subscriptionPlan"), C) {
                        let t = (0, _.getPrice)(v.id, !1, !0, y);
                        if ("usd" === t.currency && (null == L ? void 0 : L.type) === I.PaymentSourceTypes.GCASH) {
                            var V;
                            let e = Error("Invalid USD currency for GCash");
                            (0, f.captureBillingException)(e, {
                                tags: {
                                    paymentSourceId: null !== (V = null == L ? void 0 : L.id) && void 0 !== V ? V : "",
                                    subscriptionPlanId: v.id,
                                    priceOptions: JSON.stringify(y)
                                }
                            })
                        }
                        e = await (0, o.purchaseSKU)(p.PREMIUM_SUBSCRIPTION_APPLICATION, v.skuId, {
                            expectedAmount: t.amount,
                            expectedCurrency: t.currency,
                            paymentSource: L,
                            subscriptionPlanId: v.id,
                            isGift: !0,
                            giftStyle: A,
                            loadId: H,
                            recipientId: l !== m.GiftExperience.DEFAULT ? null == Y ? void 0 : Y.id : void 0,
                            customMessage: a ? W : void 0,
                            emojiConfetti: S ? Z : void 0,
                            soundEffect: S ? K : void 0
                        })
                    } else e = b && null != j && null != L && null != G ? I.PREPAID_PAYMENT_SOURCES.has(L.type) ? await (0, i.payInvoiceManually)(G, j, L, y.currency) : await (0, i.updateSubscription)(G, {
                        paymentSource: L,
                        currency: y.currency
                    }, R, O) : null != G ? await (0, i.updateSubscription)(G, {
                        items: (0, _.getItemsWithUpsertedPlanIdForGroup)(G, v.id, 1, new Set(M)),
                        paymentSource: L,
                        currency: y.currency
                    }, R, O) : await (0, u.subscribe)({
                        planId: v.id,
                        currency: y.currency,
                        paymentSource: L,
                        trialId: x,
                        metadata: U,
                        referralCode: k,
                        loadId: H
                    });
                    if (e.redirectConfirmation) {
                        T(null != e.redirectURL);
                        return
                    }
                    let z = {
                        ...h,
                        duration_ms: Date.now() - g,
                        payment_source_type: null == L ? void 0 : L.type
                    };
                    C && (a && (z.is_custom_message_edited = W !== N.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE), S && (z.is_custom_emoji_sound_available = !0, null != Z && (z.emoji_name = Z.surrogates), null != K && (z.sound_id = K.soundId))), t(E.PurchaseState.COMPLETED), "subscription" in e ? n = null != e.subscription ? c.default.createFromServer(e.subscription) : null : "entitlements" in e && (s = null != e.entitlements ? e.entitlements : void 0), D(n, s)
                } catch (e) {
                    t(E.PurchaseState.FAIL), S(e), d.default.track(I.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                        ...h,
                        payment_error_code: null == e ? void 0 : e.code,
                        payment_source_id: null == L ? void 0 : L.id,
                        payment_source_type: null == L ? void 0 : L.type,
                        duration_ms: Date.now() - g
                    })
                } finally {
                    !P && s(!1)
                }
            }
        },
        262683: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PaymentModalAddPaymentStep: function() {
                    return _
                }
            });
            var s = n("627445"),
                r = n.n(s),
                l = n("775560"),
                i = n("917247"),
                a = n("724522"),
                u = n("599110"),
                o = n("635357"),
                c = n("642906"),
                d = n("85336"),
                f = n("49111"),
                m = n("646718");

            function _(e) {
                let {
                    analyticsData: t,
                    initialPlanId: n,
                    breadcrumbSteps: s,
                    handleStepChange: _,
                    referralTrialOfferId: E,
                    onReturn: I
                } = e, {
                    contextMetadata: p,
                    step: N,
                    paymentSources: S,
                    paymentSourceId: P,
                    setPaymentSourceId: T,
                    purchaseError: C,
                    setPurchaseError: A,
                    purchaseErrorBlockRef: h,
                    paymentAuthenticationState: O,
                    selectedSkuId: R
                } = (0, c.usePaymentContext)(), {
                    isGift: g
                } = (0, o.useGiftContext)(), v = {
                    ...(0, a.useSharedPaymentModal)(),
                    paymentSources: S,
                    paymentSourceId: P,
                    setPaymentSourceId: T,
                    purchaseError: C,
                    setPurchaseError: A,
                    purchaseErrorBlockRef: h,
                    paymentAuthenticationState: O
                }, M = (0, i.usePremiumTrialOffer)(E), x = !g && null != M && null != R && (0, m.SubscriptionTrials)[M.trial_id].skus.includes(R), y = null != I ? I : () => {
                    let e = Object.values(S).length < 1 && null == n ? d.Step.PLAN_SELECT : d.Step.REVIEW;
                    _(e, {
                        trackedFromStep: d.Step.PAYMENT_TYPE
                    })
                };
                r(N, "Step should be set here");
                let L = (0, l.useStableMemo)(() => Date.now(), [N]);
                return (0, a.AddPaymentFlow)({
                    paymentModalArgs: v,
                    initialStep: d.Step.PAYMENT_TYPE,
                    prependSteps: [d.Step.PROMOTION_INFO],
                    appendSteps: [d.Step.REVIEW, d.Step.CONFIRM],
                    breadcrumpSteps: s,
                    currentBreadcrumpStep: N,
                    usePaymentModalStep: !0,
                    onReturn: y,
                    onComplete: e => {
                        _(d.Step.REVIEW, {
                            trackedFromStep: e
                        })
                    },
                    onStepChange: e => {
                        let {
                            currentStep: n,
                            toStep: s
                        } = e, r = Date.now();
                        u.default.track(f.AnalyticEvents.PAYMENT_FLOW_STEP, {
                            ...t,
                            from_step: n,
                            to_step: s,
                            step_duration_ms: r - L,
                            flow_duration_ms: r - p.startTime
                        })
                    },
                    isEligibleForTrial: x
                })
            }
        },
        946359: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("157009"),
                l = n("153727"),
                i = n("650484"),
                a = n("913390");

            function u() {
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(l.default, {}), (0, s.jsx)(i.PaymentPortalBody, {
                        children: (0, s.jsx)(r.AwaitingAuthenticationStepBody, {
                            className: a.awaitingAuthenticationStep
                        })
                    })]
                })
            }
        },
        724269: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                l = n("465527"),
                i = n("50517"),
                a = n("153727"),
                u = n("650484"),
                o = n("199142");

            function c() {
                let [e, t] = r.useState(!1), n = async () => {
                    t(!0), await (0, l.resendPaymentVerificationEmail)()
                };
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(a.default, {}), (0, s.jsx)(u.PaymentPortalBody, {
                        children: (0, s.jsx)(i.AwaitingPurchaseTokenAuthStepBody, {
                            className: o.body,
                            isEmailResent: e,
                            resendEmail: n
                        })
                    }), (0, s.jsx)(u.PaymentPortalFooter, {
                        children: (0, s.jsx)(i.AwaitingPurchaseTokenAuthStepFooter, {})
                    })]
                })
            }
        },
        39065: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                l = n("627445"),
                i = n.n(l),
                a = n("446674"),
                u = n("77078"),
                o = n("850068"),
                c = n("685665"),
                d = n("921149"),
                f = n("177998"),
                m = n("661128"),
                _ = n("868869"),
                E = n("926223"),
                I = n("467292"),
                p = n("622839"),
                N = n("145131"),
                S = n("599110"),
                P = n("719923"),
                T = n("635357"),
                C = n("642906"),
                A = n("605886"),
                h = n("286350"),
                O = n("102492"),
                R = n("376641"),
                g = n("49111"),
                v = n("994770");

            function M(e) {
                let {
                    premiumSubscription: t,
                    setPurchaseState: n,
                    onBack: l,
                    onNext: M,
                    legalTermsNodeRef: x,
                    flashLegalTerms: y,
                    invoiceError: L,
                    planError: b,
                    onPurchaseError: j,
                    baseAnalyticsData: G,
                    flowStartTime: D,
                    trialId: U,
                    planGroup: B,
                    analyticsLocation: F,
                    purchaseTokenAuthState: w,
                    openInvoiceId: k,
                    metadata: H,
                    backButtonEligible: Y,
                    disablePurchase: W,
                    isTrial: Z = !1
                } = e, {
                    selectedPlan: K,
                    priceOptions: V,
                    setHasAcceptedTerms: z,
                    setPurchaseError: J,
                    purchaseType: X,
                    paymentSourceId: q,
                    paymentSources: Q,
                    selectedSkuId: $,
                    skusById: ee,
                    skuPricePreviewsById: et,
                    referralCode: en,
                    contextMetadata: es
                } = (0, C.usePaymentContext)(), {
                    isGift: er,
                    selectedGiftStyle: el,
                    customGiftMessage: ei,
                    emojiConfetti: ea,
                    soundEffect: eu,
                    giftRecipient: eo
                } = (0, T.useGiftContext)(), ec = null == K ? void 0 : K.id, ed = (0, O.checkNoPaymentTrialEnabled)(U, V.paymentSourceId, ec), ef = (0, a.useStateFromStores)([E.default], () => E.default.popupCallbackCalled), {
                    analyticsLocations: em
                } = (0, c.default)(), e_ = null != q ? Q[q] : null, [eE, eI] = r.useState(ed), [ep, eN] = r.useState(!1), {
                    hasEntitlements: eS
                } = (0, m.useSubscriptionEntitlements)(ec, er), eP = (0, P.isPrepaidPaymentSource)(V.paymentSourceId), eT = eS || ed, eC = (0, d.useIsPrepaidPaymentPastDue)(), eA = null, eh = null;
                if (X === g.PurchaseTypes.ONE_TIME) {
                    var eO;
                    i(null != $, "SKU must be selected for one-time purchases"), i(null != (eA = null !== (eO = ee[$]) && void 0 !== eO ? eO : null), "SKU must exist and be fetched.");
                    let e = et[$],
                        t = null != q ? q : p.NO_PAYMENT_SOURCE;
                    eh = null != e ? e[t] : null
                }
                let eR = async () => {
                    await (0, A.purchaseProduct)({
                        setPurchaseState: n,
                        setHasAcceptedTerms: z,
                        setIsSubmitting: eI,
                        setPurchaseError: J,
                        hasRedirectURL: ep,
                        setHasRedirectURL: eN,
                        isGift: er,
                        giftStyle: el,
                        baseAnalyticsData: G,
                        analyticsLocation: F,
                        analyticsLocations: em,
                        flowStartTime: D,
                        subscriptionPlan: K,
                        planGroup: B,
                        trialId: U,
                        priceOptions: V,
                        paymentSource: e_,
                        isPrepaidPaymentPastDue: eC,
                        openInvoiceId: k,
                        premiumSubscription: t,
                        onNext: M,
                        metadata: H,
                        sku: eA,
                        skuPricePreview: eh,
                        purchaseType: X,
                        referralCode: en,
                        loadId: es.loadId,
                        giftRecipient: eo,
                        customMessage: ei,
                        emojiConfetti: ea,
                        soundEffect: eu
                    })
                };
                r.useEffect(() => {
                    let e = async () => {
                        if (!0 === ef) try {
                            if (null == E.default.redirectedPaymentId) return;
                            await (0, o.redirectedPaymentSucceeded)(E.default.redirectedPaymentId), n(h.PurchaseState.COMPLETED), M()
                        } catch (e) {
                            n(h.PurchaseState.FAIL), j(e), S.default.track(g.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                                ...G,
                                payment_error_code: null == e ? void 0 : e.code,
                                payment_source_id: q,
                                payment_source_type: null == e_ ? void 0 : e_.type,
                                duration_ms: Date.now() - D
                            })
                        } finally {
                            eI(!1), (0, o.resetPaymentIntentId)()
                        } else w === I.PurchaseTokenAuthState.SUCCESS && await eR()
                    };
                    e()
                }, [ef]), r.useEffect(() => {
                    ed && !er && null == t && eR()
                }, [ed, er, t]);
                let eg = null != k || X === g.PurchaseTypes.ONE_TIME && !er;
                return ed ? null : (0, s.jsxs)(u.ModalFooter, {
                    align: N.default.Align.CENTER,
                    children: [(0, s.jsx)(_.default, {
                        legalTermsNodeRef: x,
                        invoiceError: L,
                        planError: b,
                        disablePurchase: W,
                        flashLegalTerms: y,
                        isSubmitting: eE,
                        premiumSubscription: t,
                        isGift: er,
                        planGroup: B,
                        isPrepaid: eP,
                        isTrial: Z,
                        makePurchase: eR,
                        needsPaymentSource: null == e_ && !eT
                    }), (0, s.jsx)(R.default, {}), Y && !eg ? (0, s.jsx)("div", {
                        className: v.back,
                        children: (0, s.jsx)(f.default, {
                            onClick: l
                        })
                    }) : null]
                })
            }
        },
        883558: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("862205");
            let r = (0, s.createExperiment)({
                id: "2023-07_checkout_optimization_browser_autofill",
                label: "Checkout Optimization Browser Autofill",
                kind: "user",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var l = r
        },
        102492: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                checkNoPaymentTrialEnabled: function() {
                    return a
                }
            });
            var s = n("862205"),
                r = n("719923");
            let l = (0, s.createExperiment)({
                    kind: "user",
                    id: "2022-06_no_payment_info_trial",
                    label: "No Payment Info Trial",
                    defaultConfig: {
                        bypassCheckout: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Bypass collecting payment info",
                        config: {
                            bypassCheckout: !0
                        }
                    }]
                }),
                i = (e, t, n) => {
                    let s = null == n || (0, r.isPremiumBaseSubscriptionPlan)(n);
                    return null != e && null == t && s
                },
                a = (e, t, n) => {
                    let {
                        bypassCheckout: s
                    } = l.useExperiment({
                        location: "aeb070_1"
                    }, {
                        autoTrackExposure: !1
                    }), r = i(e, t, n);
                    return s && r
                }
        },
        35188: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var s = (0, n("862205").createExperiment)({
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
        909469: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PAYMENT_SOURCE_NAMES: function() {
                    return f
                },
                getLocalizedPricingNotice: function() {
                    return _
                },
                getLocalizedPricingBannerStrings: function() {
                    return E
                }
            }), n("222007"), n("424973");
            var s = n("592861"),
                r = n("988415"),
                l = n("701909"),
                i = n("153160"),
                a = n("49111"),
                u = n("843455"),
                o = n("782340");
            let c = new Set([u.CurrencyCodes.ARS, u.CurrencyCodes.CLP, u.CurrencyCodes.COP]),
                d = new Set([u.CurrencyCodes.USD, u.CurrencyCodes.JPY]),
                f = {
                    [a.PaymentSourceTypes.CARD]: () => o.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
                    [a.PaymentSourceTypes.PAYPAL]: () => o.default.Messages.PAYMENT_SOURCE_PAYPAL,
                    [a.PaymentSourceTypes.SOFORT]: () => o.default.Messages.PAYMENT_SOURCE_SOFORT,
                    [a.PaymentSourceTypes.GIROPAY]: () => o.default.Messages.PAYMENT_SOURCE_GIROPAY,
                    [a.PaymentSourceTypes.PRZELEWY24]: () => o.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
                    [a.PaymentSourceTypes.PAYSAFE_CARD]: () => o.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
                    [a.PaymentSourceTypes.GCASH]: () => o.default.Messages.PAYMENT_SOURCE_GCASH,
                    [a.PaymentSourceTypes.GRABPAY_MY]: () => o.default.Messages.PAYMENT_SOURCE_GRABPAY,
                    [a.PaymentSourceTypes.MOMO_WALLET]: () => o.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
                    [a.PaymentSourceTypes.VENMO]: () => o.default.Messages.PAYMENT_SOURCE_VENMO,
                    [a.PaymentSourceTypes.KAKAOPAY]: () => o.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
                    [a.PaymentSourceTypes.GOPAY_WALLET]: () => o.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
                    [a.PaymentSourceTypes.BANCONTACT]: () => o.default.Messages.PAYMENT_SOURCE_BANCONTACT,
                    [a.PaymentSourceTypes.EPS]: () => o.default.Messages.PAYMENT_SOURCE_EPS,
                    [a.PaymentSourceTypes.IDEAL]: () => o.default.Messages.PAYMENT_SOURCE_IDEAL,
                    [a.PaymentSourceTypes.CASH_APP]: () => o.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY
                },
                m = [a.PaymentSourceTypes.EPS, a.PaymentSourceTypes.BANCONTACT, a.PaymentSourceTypes.IDEAL, a.PaymentSourceTypes.SOFORT, a.PaymentSourceTypes.GIROPAY, a.PaymentSourceTypes.SEPA_DEBIT, a.PaymentSourceTypes.PAYSAFE_CARD],
                _ = (e, t, n, s) => {
                    if (null == e) return "";
                    let l = (0, r.getI18NCountryName)(e);
                    if (t === u.CurrencyCodes.EUR) return n ? o.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
                        country: l
                    }) : o.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
                        currencyISOCode: t.toUpperCase()
                    });
                    return s ? o.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
                        countryName: l
                    }) : o.default.Messages.LOCALIZED_PRICING_NOTICE.format({
                        country: l
                    })
                },
                E = e => {
                    let {
                        localizedPricingPromo: t,
                        subscription: n,
                        forceSingleLine: s = !1,
                        userLocale: _
                    } = e, {
                        countryCode: E,
                        amount: p,
                        currency: N,
                        paymentSourceTypes: S
                    } = t, P = 0 !== S.length, T = I(E), C = (0, i.formatPrice)(p, N, {
                        style: "currency",
                        currency: N,
                        currencyDisplay: "symbol",
                        localeOverride: T
                    }), A = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
                        helpCenterLink: l.default.getArticleURL(a.HelpdeskArticles.LOCALIZED_PRICING),
                        currencyISOCode: N.toUpperCase(),
                        localizedPriceWithCurrencySymbol: C
                    });
                    if (d.has(N) && (A = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                            helpCenterLink: l.default.getArticleURL(a.HelpdeskArticles.LOCALIZED_PRICING),
                            localizedPriceWithCurrencySymbol: C
                        })), c.has(N) && (A = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                            helpCenterLink: l.default.getArticleURL(a.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: N.toUpperCase(),
                            localizedPriceWithCurrencySymbol: C
                        })), null != n && !n.hasPremiumNitroMonthly && (A = o.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                            helpCenterLink: l.default.getArticleURL(a.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: N.toUpperCase()
                        })), N === u.CurrencyCodes.EUR && (A = s ? o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                            country: (0, r.getI18NCountryName)(E),
                            currencyISOCode: N.toUpperCase(),
                            helpCenterLink: l.default.getArticleURL(a.HelpdeskArticles.LOCALIZED_PRICING)
                        }) : o.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                            currencyISOCode: N.toUpperCase(),
                            helpCenterLink: l.default.getArticleURL(a.HelpdeskArticles.LOCALIZED_PRICING)
                        })), P) {
                        let e = m.filter(e => S.includes(e)),
                            t = S.filter(e => !m.includes(e)),
                            n = [...e, ...t],
                            s = n.slice(0, 2).map(e => {
                                var t, n;
                                return null !== (n = null === (t = f[e]) || void 0 === t ? void 0 : t.call(f)) && void 0 !== n ? n : o.default.Messages.PAYMENT_SOURCE_UNKNOWN
                            });
                        S.length >= 3 && s.push(o.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
                        let r = new Intl.ListFormat(_, {
                            style: "short",
                            type: "conjunction"
                        });
                        A = o.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
                            helpCenterLink: l.default.getArticleURL(a.HelpdeskArticles.LOCALIZED_PRICING),
                            paymentMethods: r.format(s)
                        })
                    }
                    return {
                        localizedPricingBannerHeader: o.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                            country: (0, r.getI18NCountryName)(E)
                        }),
                        localizedPricingBannerBody: A,
                        localizedPricingBannerLinkOnly: o.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                            helpCenterLink: l.default.getArticleURL(a.HelpdeskArticles.LOCALIZED_PRICING)
                        }),
                        localizedPricingBannerSubNotif: P ? void 0 : o.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
                    }
                },
                I = e => {
                    let t = s.default.find(t => t.alpha2 === e);
                    return null == t ? void 0 : t.localeForICU
                }
        },
        391533: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var s = (0, n("862205").createExperiment)({
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
        916187: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                },
                isPaymentSourceEligibleForMultiMonthPlans: function() {
                    return u
                }
            }), n("222007");
            var s = n("976979"),
                r = n("862205"),
                l = n("646718"),
                i = (0, r.createExperiment)({
                    kind: "user",
                    id: "2022-02_multi_month_plans",
                    label: "Multi Month Plans",
                    defaultConfig: {
                        newPlans: []
                    },
                    treatments: [{
                        id: 1,
                        label: "3 and 6 Month Plans",
                        config: {
                            newPlans: [l.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2, l.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2]
                        }
                    }, {
                        id: 2,
                        label: "3 Month Plan Only",
                        config: {
                            newPlans: [l.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2]
                        }
                    }]
                });
            let a = new Set([s.CountryCodes.US, s.CountryCodes.CA]);

            function u(e) {
                return null == e || a.has(e.country)
            }
        },
        809071: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateSubscriptionInvoicePreview: function() {
                    return f
                },
                useSubscriptionInvoicePreview: function() {
                    return E
                },
                useGetSubscriptionInvoice: function() {
                    return I
                },
                getItemUnitPriceWithDiscount: function() {
                    return p
                }
            }), n("222007");
            var s = n("884691"),
                r = n("446674"),
                l = n("872717"),
                i = n("448993"),
                a = n("195358"),
                u = n("521012"),
                o = n("719923"),
                c = n("49111");
            async function d(e) {
                let {
                    items: t,
                    paymentSourceId: n,
                    trialId: s,
                    code: r,
                    applyEntitlements: u = !1,
                    currency: d,
                    renewal: f,
                    metadata: m
                } = e;
                t = (0, o.coerceExistingItemsToNewItemInterval)(t);
                let _ = {
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
                    trial_id: s,
                    code: r,
                    apply_entitlements: u,
                    currency: d,
                    renewal: f,
                    metadata: m
                };
                try {
                    let e = await l.default.post({
                        url: c.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: _,
                        oldFormErrors: !0
                    });
                    return a.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new i.BillingError(e)
                }
            }
            async function f(e) {
                let {
                    subscriptionId: t,
                    items: n,
                    paymentSourceId: s,
                    renewal: r,
                    currency: u,
                    applyEntitlements: d = !1,
                    analyticsLocations: f,
                    analyticsLocation: m
                } = e;
                null != n && (n = (0, o.coerceExistingItemsToNewItemInterval)(n));
                let _ = {
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
                    payment_source_id: s,
                    renewal: r,
                    apply_entitlements: d,
                    currency: u
                };
                try {
                    let e = await l.default.patch({
                        url: c.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
                        query: {
                            location: m,
                            location_stack: f
                        },
                        body: _,
                        oldFormErrors: !0
                    });
                    return a.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new i.BillingError(e)
                }
            }
            async function m(e) {
                let {
                    subscriptionId: t,
                    preventFetch: n
                } = e;
                if (n) return null;
                let s = await l.default.get({
                    url: c.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return a.default.createInvoiceFromServer(s.body)
            }

            function _(e, t) {
                let {
                    preventFetch: n = !1
                } = e, [l, i] = (0, s.useState)(null), [a, o] = (0, s.useState)(null), c = (0, r.useStateFromStores)([u.default], () => u.default.getSubscriptions());
                return (0, s.useEffect)(() => {
                    let e = !1;
                    async function s() {
                        try {
                            o(null), i(null);
                            let n = await t();
                            !e && i(n)
                        } catch (t) {
                            !e && o(t)
                        }
                    }
                    return !n && s(), () => {
                        e = !0
                    }
                }, [n, t, c]), [l, a]
            }

            function E(e) {
                if ("subscriptionId" in e && null == e.subscriptionId) {
                    let {
                        subscriptionId: t,
                        ...n
                    } = e;
                    e = n
                }
                let t = (0, s.useCallback)(() => "subscriptionId" in e ? f(e) : "items" in e ? d(e) : null, [JSON.stringify(e)]);
                return _(e, t)
            }

            function I(e) {
                let t = (0, s.useCallback)(() => m(e), [JSON.stringify(e)]);
                return _(e, t)
            }

            function p(e) {
                let t = e.subscriptionPlanPrice;
                return e.discounts.forEach(n => {
                    let s = n.amount / e.quantity;
                    t -= s
                }), t
            }
        },
        968532: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckoutV2ChildExperiments: function() {
                    return r
                },
                default: function() {
                    return a
                }
            });
            var s, r, l = n("862205");
            (s = r || (r = {}))[s.NONE = 0] = "NONE", s[s.BROWSER_AUTOFILL = 1] = "BROWSER_AUTOFILL", s[s.MERGE_PLAN_SELECT_TO_REVIEW = 2] = "MERGE_PLAN_SELECT_TO_REVIEW";
            let i = (0, l.createExperiment)({
                id: "2023-08_checkout_v2_parent",
                label: "Checkout V2 Parent",
                kind: "user",
                defaultConfig: {
                    experiment: 0
                },
                treatments: [{
                    id: 1,
                    label: "Browser Autofill",
                    config: {
                        experiment: 1
                    }
                }, {
                    id: 2,
                    label: "Merge Plan Select to Review",
                    config: {
                        experiment: 2
                    }
                }]
            });
            var a = i
        },
        921149: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsPrepaidPaymentPastDue: function() {
                    return f
                }
            });
            var s = n("866227"),
                r = n.n(s),
                l = n("446674"),
                i = n("357957"),
                a = n("10514"),
                u = n("521012"),
                o = n("719923"),
                c = n("49111"),
                d = n("843455");

            function f() {
                let e = (0, l.useStateFromStores)([u.default], () => u.default.getPremiumTypeSubscription()),
                    t = (0, l.useStateFromStores)([a.default], () => null != e && null != e.planIdFromItems ? a.default.get(null == e ? void 0 : e.planIdFromItems) : null),
                    n = (0, l.useStateFromStores)([i.default], () => null != e && null != e.paymentSourceId ? i.default.getPaymentSource(e.paymentSourceId) : null, [e]),
                    s = null != n && d.PREPAID_PAYMENT_SOURCES.has(n.type),
                    f = (null == e ? void 0 : e.status) === c.SubscriptionStatusTypes.PAST_DUE ? r().diff(r(e.currentPeriodStart), "days") : 0;
                return !!(null != e && null != t && (0, o.isPremiumBaseSubscriptionPlan)(t.id)) && s && f >= 0 && f <= (0, o.getBillingGracePeriodDays)(e) && e.status === c.SubscriptionStatusTypes.PAST_DUE && !e.isPurchasedExternally
            }
        },
        279171: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShouldShowLegacyPricingNotice: function() {
                    return I
                },
                default: function() {
                    return p
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                i = n("627445"),
                a = n.n(i),
                u = n("423487"),
                o = n("701909"),
                c = n("35188"),
                d = n("391533"),
                f = n("296253"),
                m = n("49111"),
                _ = n("782340"),
                E = n("712109");

            function I() {
                let e = (0, f.default)(),
                    {
                        enabled: t
                    } = c.default.useExperiment({
                        location: "5ebfcf_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        enabled: n
                    } = d.default.useExperiment({
                        location: "5ebfcf_2"
                    }, {
                        autoTrackExposure: !1
                    });
                return null != e && ("PL" === e ? t : "TR" === e && n)
            }
            var p = e => {
                var t, n;
                let {
                    fromBoostCancelModal: r,
                    className: i
                } = e, c = (0, f.default)(), d = I();
                if (!d) return null;
                return a(null != c, "Subscription billing country should not be null"), (0, s.jsxs)("div", {
                    className: l(E.noticeRoot, i),
                    children: [(0, s.jsx)("div", {
                        className: E.iconContainer,
                        children: (0, s.jsx)(u.default, {
                            className: E.infoIcon
                        })
                    }), (0, s.jsx)("div", {
                        className: E.text,
                        children: (t = c, n = r, "PL" === t ? n ? _.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : _.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === t ? n ? _.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : _.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : n ? _.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : _.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
                            helpCenterLink: o.default.getArticleURL(m.HelpdeskArticles.LOCALIZED_PRICING)
                        })
                    })]
                })
            }
        },
        824734: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                i = n("153160"),
                a = n("646718"),
                u = n("782340"),
                o = n("552033");

            function c(e) {
                let {
                    price: t,
                    currency: n,
                    intervalType: r,
                    className: c,
                    intervalCount: d = 1,
                    isPrepaidPaymentSource: f = !1
                } = e, m = (0, i.formatPrice)(t, n), _ = null;
                return r === a.SubscriptionIntervalTypes.YEAR ? _ = u.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                    price: m
                }) : r === a.SubscriptionIntervalTypes.MONTH && 1 === d ? _ = u.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                    price: m
                }) : r === a.SubscriptionIntervalTypes.MONTH && d > 1 && (_ = u.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                    price: m,
                    intervalCount: d
                })), (0, s.jsx)("div", {
                    className: l(o.pricePerInterval, c),
                    "data-testid": "PricePerInterval-".concat(n),
                    children: null == r || f ? (0, s.jsx)("strong", {
                        children: m
                    }) : _
                })
            }
        },
        705820: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CUSTOM_GIFT_MESSAGE_MAX_LENGTH: function() {
                    return I
                },
                default: function() {
                    return N
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                l = n("414456"),
                i = n.n(l),
                a = n("77078"),
                u = n("850391"),
                o = n("149022"),
                c = n("681060"),
                d = n("570697"),
                f = n("233069"),
                m = n("49111"),
                _ = n("782340"),
                E = n("809331");
            let I = 190,
                p = (0, f.createChannelRecord)({
                    id: "1",
                    type: m.ChannelTypes.DM
                });

            function N(e) {
                let {
                    sectionTitle: t,
                    errors: n,
                    onTextChange: l,
                    pendingText: f,
                    placeholder: m,
                    currentText: N,
                    className: S,
                    innerClassName: P,
                    disabled: T = !1,
                    disableThemedBackground: C = !1
                } = e, [A, h] = r.useState(null != f ? f : N), [O, R] = r.useState((0, o.toRichValue)(A)), g = r.useRef(!1);
                return r.useEffect(() => {
                    g.current = !0
                }, []), r.useEffect(() => {
                    if (void 0 === f) {
                        let e = (0, o.toRichValue)(N);
                        h(N), R(e)
                    }
                }, [f, N]), (0, s.jsx)("div", {
                    className: i(E.body, S),
                    children: (0, s.jsxs)(d.default, {
                        title: t,
                        errors: n,
                        disabled: T,
                        children: [(0, s.jsx)(c.default, {
                            innerClassName: i(E.textArea, P),
                            editorClassName: E.editorTextArea,
                            maxCharacterCount: I,
                            onChange: function(e, t, n) {
                                t !== A && (h(t), R(n), l(t))
                            },
                            placeholder: m,
                            channel: p,
                            textValue: A,
                            richValue: O,
                            type: u.ChatInputTypes.CUSTOM_GIFT,
                            onBlur: () => {
                                g.current = !1
                            },
                            onFocus: () => {
                                g.current = !0
                            },
                            focused: g.current,
                            onSubmit: function() {
                                return new Promise(e => {
                                    e({
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    })
                                })
                            },
                            disableThemedBackground: C
                        }), (0, s.jsx)(a.HiddenVisually, {
                            children: _.default.Messages.MAXIMUM_LENGTH.format({
                                maxLength: I
                            })
                        })]
                    })
                })
            }
        },
        623003: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983"),
                r = n("884691"),
                l = n("414456"),
                i = n.n(l),
                a = n("849085");
            let u = r.forwardRef(function(e, t) {
                let {
                    isActive: n,
                    children: r
                } = e;
                return (0, s.jsx)("div", {
                    className: i(a.wrapper, {
                        [a.wrapperActive]: n
                    }),
                    ref: t,
                    children: r
                })
            });
            var o = u
        },
        889554: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftAnimationOptions: function() {
                    return S
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                l = n("77078"),
                i = n("635357"),
                a = n("742926"),
                u = n("659632"),
                o = n("210721"),
                c = n("78345"),
                d = n("53253"),
                f = n("65324"),
                m = n("563613"),
                _ = n("64798"),
                E = n("646718"),
                I = n("782340"),
                p = n("734203");
            let N = [c.PremiumGiftStyles.STANDARD_BOX, c.PremiumGiftStyles.CAKE, c.PremiumGiftStyles.COFFEE, c.PremiumGiftStyles.CHEST],
                S = () => {
                    let {
                        giftRecipient: e,
                        selectedGiftStyle: t,
                        setSelectedGiftStyle: n,
                        emojiConfetti: c,
                        soundEffect: S,
                        setEmojiConfetti: P,
                        setSoundEffect: T
                    } = (0, i.useGiftContext)(), [C, A] = r.useState(!1), h = r.useRef(null), O = (0, l.useRadioGroup)({
                        orientation: "horizontal"
                    }), R = (0, u.getGiftExperience)(e, !0, "premiumGiftSelect_GiftAnimationOptions"), g = u.GIFT_EXPERIENCES_WITH_CUSTOM_EMOJI_SOUNDBOARD.has(R), v = R !== u.GiftExperience.DEFAULT, M = (0, d.useIsSeasonalGiftingActive)(), {
                        enabled: x
                    } = d.default.useExperiment({
                        location: "premiumGiftSelect_GiftAnimationOptions"
                    }, {
                        autoTrackExposure: M
                    }), y = null;
                    return v && (y = M && x ? E.SeasonalGiftStyles2023 : N), (0, s.jsxs)("div", {
                        children: [v && (0, s.jsxs)("div", {
                            className: p.giftMainAnimation,
                            children: [null != t ? (0, s.jsx)(f.default, {
                                giftStyle: t,
                                defaultAnimationState: o.AnimationState.ACTION,
                                idleAnimationState: o.AnimationState.LOOP,
                                shouldAnimate: !0,
                                className: p.animation
                            }) : (0, s.jsx)(l.Spinner, {
                                className: p.spinner
                            }), g && (0, s.jsxs)("div", {
                                className: p.soundEmojiContainer,
                                children: [(0, s.jsx)("div", {
                                    className: p.sound,
                                    children: (0, s.jsx)(a.default, {
                                        sound: S,
                                        onSelect: e => {
                                            null != T && T(null == e ? void 0 : e)
                                        }
                                    })
                                }), (0, s.jsx)("div", {
                                    className: p.emoji,
                                    children: (0, s.jsx)(m.default, {
                                        setEmojiConfetti: P,
                                        emojiConfetti: null == c ? void 0 : c
                                    })
                                })]
                            })]
                        }), (0, s.jsx)("div", {
                            tabIndex: null != t || C ? void 0 : 0,
                            onFocus: e => {
                                var t;
                                e.target === e.currentTarget && (null === (t = h.current) || void 0 === t || t.focus())
                            },
                            className: p.giftBoxOptionContainer,
                            "aria-label": I.default.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
                            ...O,
                            children: null != y && y.map((e, r) => (0, s.jsx)(_.GiftStaticOption, {
                                isSelected: t === e,
                                giftStyle: e,
                                setSelectedGiftStyle: n,
                                ref: 0 === r ? h : null,
                                onFocus: () => A(!0),
                                onBlur: () => A(!1)
                            }, e))
                        }), (0, s.jsx)("div", {
                            className: p.selectPlanDivider
                        })]
                    })
                }
        },
        563613: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007"), n("781738");
            var s = n("37983"),
                r = n("884691"),
                l = n("77078"),
                i = n("86678"),
                a = n("46829"),
                u = n("49111"),
                o = n("958706"),
                c = n("782340"),
                d = n("347609");
            let f = {
                    section: u.AnalyticsSections.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
                    openPopoutType: "gift_effect_emoji_picker"
                },
                m = o.EmojiIntention.GIFT;

            function _(e) {
                let {
                    setEmojiConfetti: t,
                    emojiConfetti: n
                } = e, [u, o] = r.useState(!1), _ = e => (0, s.jsxs)("div", {
                    className: d.customGiftContent,
                    children: [(0, s.jsxs)("div", {
                        className: d.customGiftHeader,
                        children: [(0, s.jsx)(l.Text, {
                            variant: "text-md/bold",
                            children: c.default.Messages.GIFT_SELECT_EMOJI
                        }), (0, s.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            children: c.default.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
                        })]
                    }), e]
                }), E = e => {
                    null != t && (t(e), o(!1))
                };
                return (0, s.jsx)(l.Popout, {
                    shouldShow: u,
                    position: "bottom",
                    align: "left",
                    autoInvert: !1,
                    onRequestClose: () => o(!1),
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, s.jsx)(i.default, {
                            analyticsOverride: f,
                            closePopout: t,
                            onSelectEmoji: E,
                            wrapper: "div",
                            pickerIntention: m,
                            renderHeader: _,
                            headerClassName: d.emojiHeader,
                            className: d.emojiList,
                            listHeaderClassName: d.emojiList,
                            searchProps: {
                                accessory: (0, s.jsx)(s.Fragment, {})
                            }
                        })
                    },
                    children: () => (0, s.jsx)("div", {
                        className: d.container,
                        children: (0, s.jsx)(l.Clickable, {
                            className: d.emoji,
                            onClick: () => o(!0),
                            children: (null == n ? void 0 : n.name) == null ? (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(a.default, {
                                    className: d.emojiIcon,
                                    width: 14,
                                    height: 14
                                }), (0, s.jsx)(l.Text, {
                                    className: d.text,
                                    variant: "text-sm/semibold",
                                    children: c.default.Messages.GIFT_SELECT_EMOJI
                                })]
                            }) : (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(l.Text, {
                                    className: d.textSelected,
                                    variant: "text-sm/semibold",
                                    children: n.optionallyDiverseSequence
                                }), (0, s.jsx)(l.Text, {
                                    className: d.text,
                                    variant: "text-sm/semibold",
                                    children: n.name.replace(/_/g, " ")
                                })]
                            })
                        })
                    })
                })
            }
        },
        64798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftStaticOption: function() {
                    return p
                }
            });
            var s = n("37983"),
                r = n("884691"),
                l = n("77078"),
                i = n("78345"),
                a = n("203142"),
                u = n("392459"),
                o = n("26245"),
                c = n("21340"),
                d = n("159548"),
                f = n("897184"),
                m = n("990439"),
                _ = n("999641"),
                E = n("74771");
            let I = {
                    [i.PremiumGiftStyles.STANDARD_BOX]: f,
                    [i.PremiumGiftStyles.CAKE]: m,
                    [i.PremiumGiftStyles.CHEST]: _,
                    [i.PremiumGiftStyles.COFFEE]: E,
                    [i.PremiumGiftStyles.SNOWGLOBE]: "",
                    [i.PremiumGiftStyles.BOX]: "",
                    [i.PremiumGiftStyles.CUP]: "",
                    [i.PremiumGiftStyles.SEASONAL_CAKE]: o,
                    [i.PremiumGiftStyles.SEASONAL_CHEST]: c,
                    [i.PremiumGiftStyles.SEASONAL_COFFEE]: d,
                    [i.PremiumGiftStyles.SEASONAL_STANDARD_BOX]: u
                },
                p = r.forwardRef(function(e, t) {
                    let {
                        isSelected: n,
                        giftStyle: r,
                        setSelectedGiftStyle: i,
                        onFocus: u,
                        onBlur: o
                    } = e;
                    return (0, s.jsx)(l.Clickable, {
                        innerRef: t,
                        onClick: () => i(r),
                        onFocus: u,
                        onBlur: o,
                        children: (0, s.jsx)("img", {
                            style: {
                                width: "100%",
                                height: "100%"
                            },
                            alt: "",
                            src: I[r],
                            className: n ? a.customGiftBoxHighlighted : a.customGiftBox
                        })
                    })
                })
        },
        177998: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("782340"),
                i = n("816318"),
                a = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, s.jsx)(r.Anchor, {
                        onClick: t,
                        className: i.link,
                        children: l.default.Messages.BACK
                    })
                }
        },
        570727: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumSwitchPlanSelectBody: function() {
                    return Y
                },
                PremiumSwitchPlanSelectFooter: function() {
                    return W
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                l = n("627445"),
                i = n.n(l),
                a = n("446674"),
                u = n("77078"),
                o = n("405932"),
                c = n("798609"),
                d = n("837148"),
                f = n("903494"),
                m = n("635357"),
                _ = n("642906"),
                E = n("85336"),
                I = n("883558"),
                p = n("10514"),
                N = n("521012"),
                S = n("659632"),
                P = n("701909"),
                T = n("773336"),
                C = n("719923"),
                A = n("153160"),
                h = n("916187"),
                O = n("968532"),
                R = n("15733"),
                g = n("154889"),
                v = n("917247"),
                M = n("279171"),
                x = n("883662"),
                y = n("824734"),
                L = n("705820"),
                b = n("889554"),
                j = n("177998"),
                G = n("661128"),
                D = n("26785"),
                U = n("617223"),
                B = n("646718"),
                F = n("49111"),
                w = n("843455"),
                k = n("782340"),
                H = n("33769");

            function Y(e) {
                var t, n, l, E, I, N;
                let {
                    premiumSubscription: T,
                    skuId: O,
                    selectedPlanId: j,
                    setSelectedPlanId: G,
                    priceOptions: Y,
                    planOptions: W,
                    eligibleForMultiMonthPlans: Z,
                    referralTrialOfferId: K,
                    subscriptionPeriodEnd: V,
                    showTotal: z = !0,
                    discountInvoiceItems: J,
                    handleClose: X
                } = e, {
                    activeSubscription: q,
                    setSelectedPlanId: Q,
                    selectedSkuId: $,
                    selectedPlan: ee,
                    priceOptions: et
                } = (0, _.usePaymentContext)(), {
                    isGift: en,
                    giftRecipient: es,
                    selectedGiftStyle: er,
                    customGiftMessage: el,
                    setCustomGiftMessage: ei
                } = (0, m.useGiftContext)(), ea = (0, S.isCustomGiftEnabled)(es), eu = en && (0, S.shouldShowCustomGiftExperience)(es, !0, "PremiumSwitchPlanSelectBody"), {
                    confirmUpsellEnabled: eo
                } = (0, d.default)({
                    location: "PremiumSwitchPlanSelectBody"
                });
                O = null != O ? O : $, i(void 0 !== (T = null != T ? T : q), "should not be undefined");
                let [ec, ed] = (0, a.useStateFromStoresArray)([p.default], () => [null != T ? p.default.get(T.planId) : null, null != j ? p.default.get(j) : null]), ef = (0, v.usePremiumTrialOffer)(K), em = null == ef ? void 0 : ef.subscription_trial, e_ = (0, g.usePremiumDiscountOffer)(), eE = null == e_ ? void 0 : null === (t = e_.discount) || void 0 === t ? void 0 : t.plan_ids, eI = null != ed ? ed : ee, ep = r.useCallback(e => {
                    null != G ? G(e) : Q(e)
                }, [G, Q]), eN = null != Y ? Y : et;
                i(null != eN, "Price option has to be set");
                let eS = null != ef && (0, B.SubscriptionTrials)[ef.trial_id].skus.includes(O),
                    eP = null != e_ && W.some(e => null == eE ? void 0 : eE.includes(e)),
                    eT = (0, C.getPrice)(B.SubscriptionPlans.PREMIUM_MONTH_TIER_2, !1, en, eN);
                r.useEffect(() => {
                    Z && h.default.trackExposure({
                        location: "5f89bb_1"
                    })
                }, [Z]);
                let eC = (null == eI ? void 0 : eI.id) != null && W.includes(eI.id);
                r.useEffect(() => {
                    if (!eC) {
                        if (null == ec || en) ep(W[0]);
                        else if (null != ec) {
                            let e = W.find(e => e !== ec.id);
                            null != e && ep(e)
                        }
                    }
                }, [eC, en, W, ec, ep]);
                let eA = !eu && (en || !eS && !eP) && eC && z,
                    eh = (0, u.useRadioGroup)(),
                    eO = (null == eI ? void 0 : eI.id) != null ? (0, C.getPrice)(eI.id, !1, en, eN) : void 0,
                    {
                        ipCountryCode: eR
                    } = (0, R.default)(),
                    eg = "HR" === eR && null != eO && eO.currency === w.CurrencyCodes.EUR,
                    ev = (0, C.isPrepaidPaymentSource)(eN.paymentSourceId),
                    eM = (null == em ? void 0 : em.interval) === B.SubscriptionIntervalTypes.DAY ? k.default.Messages.BILLING_TRIAL_2_WEEK_PERIOD : k.default.Messages.BILLING_TRIAL_30_DAY_PERIOD,
                    ex = !en && (eP || null != em && eS && null != V),
                    ey = null == J ? void 0 : null === (E = J.find(e => e.subscriptionPlanId === B.SubscriptionPlans.PREMIUM_MONTH_TIER_2)) || void 0 === E ? void 0 : null === (l = E.discounts) || void 0 === l ? void 0 : null === (n = l.find(e => e.type === c.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === n ? void 0 : n.amount;
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("div", {
                        className: eu ? H.stepBodyCustomGift : H.stepBody,
                        children: [(0, s.jsxs)("div", {
                            className: eu ? H.bodyColumnMiddle : void 0,
                            children: [(0, s.jsx)(M.default, {
                                fromBoostCancelModal: !1,
                                className: H.legacyPricingNotice
                            }), eu && null != er && (0, s.jsx)(b.GiftAnimationOptions, {})]
                        }), (0, s.jsxs)("div", {
                            className: eu ? H.bodyColumnRight : void 0,
                            children: [ea && (0, s.jsx)(U.SendGiftToUser, {
                                giftRecipient: es
                            }), (() => {
                                if (ea && null != ei) return (0, s.jsx)(L.default, {
                                    sectionTitle: k.default.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: e => ei(e),
                                    pendingText: el,
                                    currentText: el
                                })
                            })(), null != ec && !en && (0, s.jsx)("div", {
                                className: H.bodyText,
                                children: function(e, t) {
                                    let n = k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
                                        s = k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
                                        r = (() => {
                                            switch (e.interval) {
                                                case B.SubscriptionIntervalTypes.YEAR:
                                                    return n;
                                                case B.SubscriptionIntervalTypes.MONTH:
                                                default:
                                                    return s
                                            }
                                        })(),
                                        l = e.skuId;
                                    switch (t) {
                                        case B.PremiumSubscriptionSKUs.TIER_0:
                                            switch (l) {
                                                case B.PremiumSubscriptionSKUs.TIER_1:
                                                    return k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                                                case B.PremiumSubscriptionSKUs.TIER_2:
                                                    return k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                                                default:
                                                    return r
                                            }
                                        case B.PremiumSubscriptionSKUs.TIER_1:
                                            switch (l) {
                                                case B.PremiumSubscriptionSKUs.TIER_0:
                                                    return k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                                                case B.PremiumSubscriptionSKUs.TIER_2:
                                                    return k.default.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                                                default:
                                                    return r
                                            }
                                        case B.PremiumSubscriptionSKUs.TIER_2:
                                            switch (l) {
                                                case B.PremiumSubscriptionSKUs.TIER_0:
                                                case B.PremiumSubscriptionSKUs.TIER_1:
                                                    return k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                                                case B.PremiumSubscriptionSKUs.TIER_2:
                                                    return e.interval === B.SubscriptionIntervalTypes.MONTH ? k.default.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                                                        numFreeGuildSubscriptions: B.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                                                    }) : r;
                                                default:
                                                    return r
                                            }
                                        default:
                                            return r
                                    }
                                }(ec, O)
                            }), (I = eS, N = eP, eu ? (0, s.jsx)(u.FormTitle, {
                                children: k.default.Messages.GIFT_SUBSCRIPTION_SELECTION
                            }) : ex ? I ? (0, s.jsxs)("div", {
                                children: [(0, s.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: H.trialPlanSelectHeader,
                                    children: k.default.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                                        trialEnd: V,
                                        trialPeriod: eM
                                    })
                                }), (0, s.jsx)("hr", {
                                    className: H.planSelectSeparator
                                })]
                            }) : N && null != ey && null != eT ? (0, s.jsxs)("div", {
                                children: [(0, s.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: H.trialPlanSelectHeader,
                                    children: k.default.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO.format({
                                        discountedPrice: (0, A.formatPrice)(eT.amount - ey, eT.currency),
                                        regularPrice: (0, A.formatPrice)(eT.amount, eT.currency)
                                    })
                                }), (0, s.jsx)("hr", {
                                    className: H.planSelectSeparator
                                })]
                            }) : void 0 : (0, s.jsx)("div", {
                                className: H.selectPlanChooseTitle,
                                children: k.default.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
                            })), (0, s.jsx)("div", {
                                ...eh,
                                children: W.map(e => (0, s.jsx)(D.default, {
                                    planId: e,
                                    premiumSubscription: en ? null : null != T ? T : null,
                                    selectPlan: ep,
                                    selected: (null == eI ? void 0 : eI.id) === e,
                                    priceOptions: eN,
                                    shouldShowUpdatedPaymentModal: ex,
                                    isEligibleForDiscount: eP,
                                    discountAmountOff: ey
                                }, e))
                            }), (0, s.jsx)("div", {
                                children: eA && null != eI && null != eO ? (0, s.jsxs)("div", {
                                    children: [(0, s.jsx)("div", {
                                        className: H.selectPlanDivider
                                    }), (0, s.jsx)(x.PremiumInvoiceTableTotalRow, {
                                        label: k.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                        value: (0, s.jsx)(y.default, {
                                            price: eO.amount,
                                            currency: eO.currency,
                                            intervalType: en ? null : eI.interval,
                                            intervalCount: eI.intervalCount,
                                            isPrepaidPaymentSource: ev
                                        }),
                                        className: H.selectPlanTotalRow
                                    })]
                                }) : null
                            }), eg && (0, s.jsx)(o.default, {
                                message: k.default.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
                                    kunaPriceWithCurrency: (0, A.formatPrice)(7.5345 * eO.amount, w.CurrencyCodes.HRK)
                                })
                            }), !en && !ex && z && (0, s.jsx)(o.default, {
                                message: k.default.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
                                    documentationLink: P.default.getArticleURL(F.HelpdeskArticles.LOCALIZED_PRICING)
                                })
                            }), eo && en && (0, s.jsx)(f.default, {
                                onClose: X
                            })]
                        })]
                    })
                })
            }

            function W(e) {
                let {
                    onStepChange: t,
                    selectedPlanId: n,
                    paymentSources: r,
                    onBackClick: l,
                    showBackButton: i,
                    planOptions: a,
                    shouldRenderUpdatedPaymentModal: o = !1,
                    isTrial: c
                } = e, {
                    paymentSources: d,
                    selectedPlan: f
                } = (0, _.usePaymentContext)(), {
                    isGift: E
                } = (0, m.useGiftContext)();
                return r = null != r ? r : d, n = null != n ? n : null == f ? void 0 : f.id, (0, s.jsxs)(s.Fragment, {
                    children: [null != n && a.includes(n) ? (0, s.jsx)(Z, {
                        paymentSources: r,
                        onStepChange: t,
                        selectedPlanId: n,
                        isGift: E,
                        shouldRenderUpdatedPaymentModal: o,
                        isTrial: c
                    }) : (0, s.jsx)(u.Button, {
                        disabled: !0,
                        children: k.default.Messages.SELECT
                    }), i ? (0, s.jsx)(j.default, {
                        onClick: l
                    }) : null]
                })
            }

            function Z(e) {
                let {
                    onStepChange: t,
                    selectedPlanId: n,
                    isGift: r,
                    paymentSources: l,
                    shouldRenderUpdatedPaymentModal: i,
                    isTrial: o
                } = e, c = (0, a.useStateFromStores)([N.default], () => N.default.getPremiumTypeSubscription()), {
                    hasEntitlements: d
                } = (0, G.useSubscriptionEntitlements)(n, r), f = null != c && null != c.paymentSourceId || Object.keys(l).length > 0 || d && !o;
                var m = i ? k.default.Messages.NEXT : k.default.Messages.SELECT,
                    _ = E.Step.ADD_PAYMENT_STEPS;
                return f ? _ = E.Step.REVIEW : (0, T.isDesktop)() && function() {
                    let {
                        experiment: e
                    } = O.default.getCurrentConfig({
                        location: "5f89bb_2"
                    });
                    if (e === O.CheckoutV2ChildExperiments.BROWSER_AUTOFILL) {
                        let {
                            enabled: e
                        } = I.default.getCurrentConfig({
                            location: "5f89bb_3"
                        }, {
                            autoTrackExposure: !0
                        });
                        return e
                    }
                    return !1
                }() && (_ = E.Step.AWAITING_BROWSER_CHECKOUT, m = k.default.Messages.CONTINUE_IN_BROWSER), (0, s.jsx)(u.Button, {
                    onClick: () => t(_),
                    children: m
                })
            }
        },
        26785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                i = n("627445"),
                a = n.n(i),
                u = n("446674"),
                o = n("669491"),
                c = n("77078"),
                d = n("635357"),
                f = n("915639"),
                m = n("10514"),
                _ = n("659632"),
                E = n("719923"),
                I = n("153160"),
                p = n("646718"),
                N = n("782340"),
                S = n("419063");

            function P(e) {
                let {
                    premiumSubscription: t,
                    planId: n,
                    selectPlan: r,
                    selected: i,
                    priceOptions: P,
                    shouldShowUpdatedPaymentModal: T,
                    isEligibleForDiscount: C,
                    discountAmountOff: A
                } = e, h = (0, u.useStateFromStores)([f.default], () => f.default.locale), O = (0, u.useStateFromStores)([m.default], () => m.default.get(n)), {
                    isGift: R,
                    giftRecipient: g
                } = (0, d.useGiftContext)(), v = R && (0, _.shouldShowCustomGiftExperience)(g, !0, "PremiumSwitchPlanSelectOption");
                a(null != O, "Missing subscriptionPlan");
                let M = null != t && t.planId === n,
                    x = M || n === p.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && null != t && [p.SubscriptionPlans.PREMIUM_YEAR_TIER_0, p.SubscriptionPlans.PREMIUM_YEAR_TIER_1].includes(t.planId),
                    y = p.DISCOUNTS[n],
                    L = (0, E.getPrice)(n, !1, R, P),
                    b = (0, E.isPrepaidPaymentSource)(P.paymentSourceId),
                    j = null != y && !T,
                    G = O.interval === p.SubscriptionIntervalTypes.YEAR ? N.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : N.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
                    D = () => null != y && (0, s.jsx)(c.Text, {
                        tag: "span",
                        variant: "eyebrow",
                        color: "always-white",
                        className: S.planOptionDiscount,
                        children: N.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
                            discount: (0, I.formatPercent)(h, y / 100)
                        })
                    }),
                    U = () => O.interval === p.SubscriptionIntervalTypes.YEAR && null != t || j && !M ? O.interval === p.SubscriptionIntervalTypes.YEAR && null != t ? (0, s.jsxs)("span", {
                        className: S.planOptionMonthsFree,
                        children: ["(", N.default.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
                    }) : j && !M ? D() : void 0 : null;
                return (0, s.jsxs)(c.Clickable, {
                    role: v ? "menuitem" : "radio",
                    "aria-checked": i,
                    tabIndex: i ? 0 : -1,
                    focusProps: {
                        offset: {
                            left: -4,
                            right: -4,
                            top: 0,
                            bottom: 0
                        }
                    },
                    onClick: x ? void 0 : () => r(n),
                    className: l(S.planOptionClickableContainer, {
                        [S.selectedPlan]: v && i,
                        [S.selectionBox]: v
                    }),
                    children: [(0, s.jsxs)("div", {
                        className: l(S.planOption, {
                            [S.planOptionDisabled]: x
                        }),
                        children: [(0, s.jsxs)("div", {
                            className: S.planOptionClickable,
                            children: [!v && (0, s.jsx)(c.Checkbox, {
                                readOnly: !0,
                                displayOnly: !0,
                                value: i,
                                shape: c.Checkbox.Shapes.ROUND,
                                color: o.default.unsafe_rawColors.BRAND_500.css,
                                type: c.Checkbox.Types.INVERTED,
                                className: S.planOptionCheckbox
                            }), (0, s.jsxs)("div", {
                                children: [(0, s.jsxs)("div", {
                                    className: l(S.planOptionInterval, {
                                        [S.optionSelected]: i || v,
                                        [S.updatedOptionSelected]: T && (i || v)
                                    }),
                                    children: [(0, E.getIntervalString)(O.interval, R, b, O.intervalCount, v, (0, E.getPremiumType)(O.id)), v && U()]
                                }), v && (0, s.jsx)("div", {
                                    className: S.planOneTimeCost,
                                    children: N.default.Messages.ONE_TIME_CHARGE.format({
                                        currencyAmount: (0, I.formatPrice)(L.amount, L.currency)
                                    })
                                })]
                            }), M && (0, s.jsxs)("span", {
                                className: S.planOptionCurrentPlan,
                                children: ["(", N.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
                            }), !v && U()]
                        }), T ? (0, s.jsx)("div", {
                            className: l({
                                [S.optionPriceSelected]: i
                            }),
                            children: N.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                price: (() => {
                                    if (C && null != A) return O.interval === p.SubscriptionIntervalTypes.MONTH ? (0, I.formatPrice)(L.amount - A, L.currency) : (0, I.formatPrice)(L.amount, L.currency);
                                    return (0, I.formatPrice)(0, L.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })()
                            })
                        }) : (0, s.jsx)("div", {
                            className: l({
                                [S.optionSelected]: i || v
                            }),
                            children: (0, I.formatPrice)(L.amount, L.currency)
                        })]
                    }), T && (0, s.jsx)("div", {
                        className: S.planOptionSubtextContainer,
                        children: (0, s.jsx)(c.Text, {
                            variant: "text-md/normal",
                            color: i ? "text-normal" : "interactive-normal",
                            className: l(S.planOptionSubtext, {
                                [S.discountPlanOptionSubtext]: C
                            }),
                            children: C && null != A ? O.interval === p.SubscriptionIntervalTypes.MONTH ? N.default.Messages.BILLING_DISCOUNT_MONTHLY_PRICE.format({
                                discountedPrice: (0, I.formatPrice)(L.amount - A, L.currency),
                                regularPrice: (0, I.formatPrice)(L.amount, L.currency)
                            }) : N.default.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
                                percent: y
                            }) : G.format({
                                price: (0, I.formatPrice)(L.amount, L.currency)
                            })
                        })
                    })]
                })
            }
        },
        617223: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SendGiftToUser: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("77078"),
                l = n("87657"),
                i = n("158998"),
                a = n("782340"),
                u = n("438269");
            let o = e => {
                let {
                    giftRecipient: t
                } = e;
                return null == t ? null : (0, s.jsxs)("div", {
                    className: u.content,
                    children: [(0, s.jsx)(r.FormTitle, {
                        children: a.default.Messages.FORM_LABEL_SEND_TO
                    }), (0, s.jsxs)("div", {
                        className: u.giftRecipientInfo,
                        children: [(0, s.jsx)(l.default, {
                            user: t,
                            className: u.giftRecipient,
                            size: r.AvatarSizes.SIZE_20
                        }), (0, s.jsx)(r.Heading, {
                            className: u.giftRecipientName,
                            variant: "text-md/normal",
                            children: i.default.getName(t)
                        }), (0, s.jsx)(r.Heading, {
                            className: u.giftRecipientTag,
                            variant: "text-md/normal",
                            children: i.default.getUserTag(t)
                        })]
                    })]
                })
            }
        },
        527866: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Y
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                l = n("627445"),
                i = n.n(l),
                a = n("976979"),
                u = n("446674"),
                o = n("669491"),
                c = n("77078"),
                d = n("335430"),
                f = n("703332"),
                m = n("740055"),
                _ = n("545876"),
                E = n("736978"),
                I = n("635357"),
                p = n("642906"),
                N = n("286350"),
                S = n("102492"),
                P = n("176108"),
                T = n("102985"),
                C = n("160299"),
                A = n("10514"),
                h = n("68238"),
                O = n("659632"),
                R = n("719923"),
                g = n("153160"),
                v = n("210721"),
                M = n("809071"),
                x = n("154889"),
                y = n("883662"),
                L = n("623003"),
                b = n("65324"),
                j = n("570727"),
                G = n("146163"),
                D = n("661128"),
                U = n("617223"),
                B = n("646718"),
                F = n("49111"),
                w = n("843455"),
                k = n("782340"),
                H = n("615689");

            function Y(e) {
                var t, n, l;
                let Y, W, {
                        selectedPlanId: Z,
                        paymentSources: K,
                        priceOptions: V,
                        currencies: z,
                        onCurrencyChange: J,
                        onPaymentSourceChange: X,
                        handlePaymentSourceAdd: q,
                        setHasAcceptedTerms: Q,
                        legalTermsNodeRef: $,
                        hasLegalTermsFlash: ee,
                        trialId: et,
                        trialFooterMessageOverride: en,
                        reviewWarningMessage: es,
                        metadata: er,
                        purchaseState: el,
                        hideSubscriptionDetails: ei,
                        referralTrialOfferId: ea,
                        isTrial: eu = !1,
                        isDiscount: eo = !1,
                        handleClose: ec
                    } = e,
                    {
                        isEmbeddedIAP: ed,
                        activeSubscription: ef,
                        selectedSkuId: em,
                        defaultPlanId: e_,
                        isPremium: eE,
                        startedPaymentFlowWithPaymentSourcesRef: eI
                    } = (0, p.usePaymentContext)(),
                    {
                        isGift: ep,
                        giftRecipient: eN,
                        selectedGiftStyle: eS
                    } = (0, I.useGiftContext)(),
                    eP = (0, x.usePremiumDiscountOffer)(),
                    eT = null == eP ? void 0 : null === (t = eP.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => B.SubscriptionPlanInfo[e].skuId === em),
                    eC = !ep && null != eP && null != em && eT,
                    eA = (0, u.useStateFromStores)([A.default], () => A.default.get(Z));
                i(null != eA, "Missing plan");
                let eh = [{
                        planId: eA.id,
                        quantity: 1
                    }],
                    eO = el === N.PurchaseState.PURCHASING || el === N.PurchaseState.COMPLETED,
                    eR = ep || eO,
                    [eg, ev] = (0, M.useSubscriptionInvoicePreview)({
                        items: eh,
                        renewal: !1,
                        preventFetch: eR,
                        applyEntitlements: !0,
                        paymentSourceId: V.paymentSourceId,
                        currency: V.currency,
                        trialId: et,
                        metadata: er
                    }),
                    [eM, ex] = (0, M.useSubscriptionInvoicePreview)({
                        items: eh,
                        renewal: !0,
                        preventFetch: eR,
                        trialId: et,
                        paymentSourceId: V.paymentSourceId,
                        currency: V.currency,
                        metadata: er
                    }),
                    [ey, eL] = (0, M.useSubscriptionInvoicePreview)({
                        items: [{
                            planId: B.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
                            quantity: 1
                        }],
                        renewal: !0,
                        preventFetch: !eC,
                        trialId: et,
                        paymentSourceId: V.paymentSourceId,
                        currency: V.currency,
                        metadata: er
                    }),
                    eb = ep && (0, O.shouldShowCustomGiftExperience)(eN, !0, "PremiumSubscriptionReview"),
                    ej = null !== (l = null != ev ? ev : ex) && void 0 !== l ? l : eL,
                    eG = (0, u.useStateFromStores)([T.default], () => T.default.enabled),
                    eD = V.paymentSourceId,
                    {
                        hasEntitlements: eU,
                        entitlements: eB
                    } = (0, D.useSubscriptionEntitlements)(eA.id, ep),
                    eF = (0, R.isPrepaidPaymentSource)(V.paymentSourceId),
                    ew = (0, S.checkNoPaymentTrialEnabled)(et, eD, Z),
                    ek = (0, P.inOneStepSubscriptionCheckout)({
                        isTrial: eu,
                        isGift: ep,
                        selectedSkuId: em,
                        startedPaymentFlowWithPaymentSources: eI.current
                    }),
                    [eH, eY] = r.useState(null == eg ? void 0 : eg.subscriptionPeriodEnd);
                r.useEffect(() => {
                    null == eH && eY(null == eg ? void 0 : eg.subscriptionPeriodEnd)
                }, [null == eg ? void 0 : eg.subscriptionPeriodEnd, eH]);
                let eW = r.useMemo(() => (0, R.getPremiumPlanOptions)({
                        skuId: em,
                        isPremium: eE,
                        multiMonthPlans: [],
                        currentSubscription: ef,
                        isGift: ep,
                        isEligibleForTrial: eu,
                        defaultPlanId: e_,
                        defaultToMonthlyPlan: !1
                    }), [em, ef, ep, e_, eE, eu]),
                    eZ = (0, P.planSwitchLoadingShowSpinner)(ek, eg, eA);
                if (null != ej) {
                    let e = ej.message;
                    return ej.code === E.ErrorCodes.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = k.default.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), (0, s.jsx)(c.FormErrorBlock, {
                        children: e
                    })
                }
                if (ep) W = (0, s.jsx)(G.SubscriptionInvoiceGift, {
                    paymentSourceId: V.paymentSourceId,
                    plan: eA,
                    className: H.invoice,
                    isPrepaidPaymentSource: eF,
                    isCustomGift: eb
                });
                else if (eu && null != eg) W = (0, s.jsxs)("div", {
                    children: [(0, s.jsx)(y.PremiumInvoiceTableDivider, {
                        negativeMarginTop: !0
                    }), (0, s.jsxs)(y.PremiumInvoiceTable, {
                        className: H.invoice,
                        children: [(0, s.jsxs)("div", {
                            className: H.trialPriceLine,
                            children: [(0, s.jsx)(c.Text, {
                                variant: "text-md/bold",
                                children: k.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                            }), (0, s.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: k.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                                    price: (0, g.formatPrice)(0, eg.currency, {
                                        maximumFractionDigits: 0
                                    })
                                })
                            })]
                        }), (0, s.jsx)("div", {
                            className: H.afterTrialPriceLine,
                            children: (0, s.jsx)(G.PremiumTrialInvoiceTableRow, {
                                invoice: eg,
                                plan: eA
                            })
                        })]
                    })]
                });
                else {
                    if (null == eg || null == eM || eZ) return (0, s.jsx)("div", {
                        className: H.spinnerWrapper,
                        children: (0, s.jsx)(c.Spinner, {})
                    });
                    eu && eg.subscriptionPeriodEnd !== eM.subscriptionPeriodEnd && (Y = eg.subscriptionPeriodEnd), W = (0, s.jsxs)(y.PremiumInvoiceTable, {
                        className: H.invoice,
                        children: [(0, s.jsx)(y.PremiumInvoiceTableHeader, {
                            children: k.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
                        }), (0, s.jsx)(G.PremiumSubscriptionChangePlanInvoiceRows, {
                            invoice: eg,
                            newPlan: eA,
                            isPrepaidPaymentSource: eF,
                            referralTrialOfferId: ea
                        }), eF ? null : (0, s.jsx)(G.SubscriptionInvoiceFooter, {
                            renewalInvoice: eM,
                            isTrial: eu,
                            priceOptions: V,
                            overrideRenewalDate: Y,
                            trialFooterMessageOverride: en,
                            hideSubscriptionDetails: ei
                        })]
                    })
                }
                let eK = a.CountryCodesSets.EEA_COUNTRIES.has(C.default.ipCountryCodeWithFallback),
                    {
                        checkboxLabel: eV,
                        checkboxClassname: ez,
                        checkboxLabelClassname: eJ
                    } = function(e, t, n) {
                        let s = null,
                            r = null,
                            l = null;
                        if (e && null != t) {
                            let {
                                intervalType: e,
                                intervalCount: i
                            } = R.default.getIntervalForInvoice(t), a = (0, g.formatRate)((0, g.formatPrice)(t.total, t.currency), e, i), u = null != n ? n : t.subscriptionPeriodEnd;
                            s = k.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
                                termsURL: F.MarketingURLs.TERMS,
                                paidURL: F.MarketingURLs.PAID_TERMS,
                                rate: a,
                                renewalDate: u
                            }), r = H.trialCheckbox, l = H.trialCheckboxLabel
                        }
                        return {
                            checkboxLabel: s,
                            checkboxClassname: r,
                            checkboxLabelClassname: l
                        }
                    }(null != eu && eu, eM, Y),
                    eX = k.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
                        planName: eA.name
                    });
                return ep && !eb ? eX = k.default.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : ep && eb ? eX = "" : (0, R.isPremiumSubscriptionPlan)(eA.id) && (eX = R.default.getBillingReviewSubheader(null, eA)), ew ? null : (0, s.jsxs)("div", {
                    className: H.stepBody,
                    children: [null != es && (0, s.jsxs)("div", {
                        className: H.reviewWarningMessageContainer,
                        children: [(0, s.jsx)(h.default, {
                            color: o.default.unsafe_rawColors.YELLOW_300.css,
                            width: 20,
                            height: 20
                        }), (0, s.jsx)(c.Text, {
                            className: H.reviewWarningMessage,
                            variant: "text-sm/normal",
                            children: es
                        })]
                    }), ek && (0, s.jsxs)("div", {
                        children: [(0, s.jsx)(y.PremiumInvoiceTableDivider, {
                            negativeMarginTop: !0
                        }), (0, s.jsx)(j.PremiumSwitchPlanSelectBody, {
                            planOptions: eW,
                            eligibleForMultiMonthPlans: !1,
                            referralTrialOfferId: void 0,
                            selectedPlanId: Z,
                            subscriptionPeriodEnd: eH,
                            showTotal: !1,
                            discountInvoiceItems: eC ? null == ey ? void 0 : ey.invoiceItems : void 0,
                            handleClose: ec
                        }), (0, s.jsx)(y.PremiumInvoiceTableDivider, {})]
                    }), !eu && (0, s.jsx)(c.FormTitle, {
                        tag: c.FormTitleTags.H5,
                        children: eX
                    }), eb && null != eS && (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(b.default, {
                            defaultAnimationState: v.AnimationState.LOOP,
                            giftStyle: eS,
                            shouldAnimate: !0,
                            className: H.giftMainAnimation
                        }), (0, s.jsx)(U.SendGiftToUser, {
                            giftRecipient: eN
                        })]
                    }), W, (0, s.jsxs)("div", {
                        className: H.paymentSourceWrapper,
                        children: [eu ? (0, s.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            className: H.formTitle,
                            children: k.default.Messages.BILLING_STEP_PAYMENT_METHOD
                        }) : (0, s.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            children: k.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, s.jsx)(m.default, {
                            paymentSources: Object.values(K),
                            selectedPaymentSourceId: eD,
                            prependOption: eU && !eu ? {
                                label: k.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                value: null
                            } : null,
                            onChange: X,
                            onPaymentSourceAdd: q,
                            hidePersonalInformation: eG,
                            isTrial: eu
                        }), eU && null == eD ? (0, s.jsx)("div", {
                            className: H.paymentSourceOptionalWarning,
                            children: k.default.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
                                months: eB.length
                            })
                        }) : null, eo ? null : (0, s.jsxs)(d.CurrencyWrapper, {
                            currencies: z,
                            className: H.currencyWrapper,
                            children: [(0, s.jsx)(c.FormTitle, {
                                tag: c.FormTitleTags.H5,
                                children: k.default.Messages.PAYMENT_CURRENCY
                            }), (0, s.jsx)(d.default, {
                                selectedCurrency: V.currency,
                                currencies: z,
                                onChange: J
                            })]
                        })]
                    }), (0, s.jsx)(L.default, {
                        isActive: ee,
                        ref: $,
                        children: (0, s.jsx)(_.default, {
                            onChange: Q,
                            forceShow: !0,
                            checkboxLabel: eV,
                            checkboxClassname: ez,
                            checkboxLabelClassname: eJ,
                            finePrint: null != en ? en : (0, s.jsx)(f.default, {
                                hide: eu || eo,
                                subscriptionPlan: eA,
                                renewalInvoice: eM,
                                isGift: ep,
                                paymentSourceType: null === (n = K[null != eD ? eD : ""]) || void 0 === n ? void 0 : n.type,
                                isEmbeddedIAP: ed,
                                basePrice: (0, R.getPrice)(eA.id, !1, ep, V)
                            }),
                            showPricingLink: eA.currency !== w.CurrencyCodes.USD,
                            showWithdrawalWaiver: eK,
                            disabled: eO,
                            isTrial: eu && null == en,
                            isDiscount: eo,
                            subscriptionPlan: eA,
                            isGift: ep
                        })
                    })]
                })
            }
        },
        891653: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                i = n("77078"),
                a = n("216422"),
                u = n("782340"),
                o = n("881609");

            function c(e) {
                let {
                    text: t = u.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
                    className: n
                } = e;
                return (0, s.jsx)(i.Tooltip, {
                    text: t,
                    children: e => (0, s.jsx)(i.Clickable, {
                        ...e,
                        children: (0, s.jsx)(a.default, {
                            className: l(o.nitroWheel, n)
                        })
                    })
                })
            }
        },
        570697: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("781738");
            var s = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                i = n("77078"),
                a = n("254490"),
                u = n("891653"),
                o = n("632892"),
                c = n("326908");

            function d(e) {
                let {
                    errors: t
                } = e;
                return (0, s.jsx)(s.Fragment, {
                    children: t.map((e, t) => (0, s.jsx)(i.Text, {
                        variant: "text-xs/normal",
                        color: "text-danger",
                        className: c.errorMessage,
                        children: e.replace(/[0-9.,]+ ?kb/g, e => {
                            let t = 1024 * parseInt(e, 10);
                            return isNaN(t) ? e : (0, a.sizeString)(t)
                        })
                    }, t))
                })
            }

            function f(e) {
                let {
                    title: t,
                    titleIcon: n,
                    titleId: r,
                    description: a,
                    children: f,
                    className: m,
                    errors: _,
                    disabled: E = !1,
                    hideDivider: I = !1,
                    showBorder: p = !1,
                    borderType: N,
                    hasBackground: S = !1,
                    forcedDivider: P = !1,
                    showPremiumIcon: T = !1
                } = e;
                return (0, s.jsx)("div", {
                    className: l(c.customizationSection, m, {
                        [c.disabled]: E,
                        [c.hideDivider]: I,
                        [c.showBorder]: p,
                        [c.withDivider]: P
                    }),
                    children: (0, s.jsxs)(o.default, {
                        className: c.customizationSectionBorder,
                        backgroundClassName: c.customizationSectionBackground,
                        isShown: p,
                        type: N,
                        hasBackground: S,
                        children: [(0, s.jsxs)(i.FormTitle, {
                            className: c.title,
                            id: r,
                            children: [t, T && (0, s.jsx)(u.default, {}), n]
                        }), null != a ? (0, s.jsx)(i.FormText, {
                            type: i.FormText.Types.DESCRIPTION,
                            className: c.sectionDescription,
                            children: a
                        }) : null, f, null != _ && (0, s.jsx)(d, {
                            errors: _
                        })]
                    })
                })
            }
        },
        632892: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FeatureBorderTypes: function() {
                    return r
                },
                default: function() {
                    return d
                }
            });
            var s, r, l = n("37983"),
                i = n("884691"),
                a = n("414456"),
                u = n.n(a),
                o = n("623682");
            (s = r || (r = {})).PREMIUM = "premium", s.LIMITED = "limited";
            let c = {
                premium: {
                    border: o.premiumFeatureBorder,
                    background: o.premiumBackground
                },
                limited: {
                    border: o.limitedFeatureBorder,
                    background: o.limitedBackground
                }
            };
            var d = i.forwardRef(function(e, t) {
                let {
                    children: n,
                    type: s = "premium",
                    isShown: r,
                    hasBackground: i = !1,
                    className: a,
                    backgroundClassName: d
                } = e;
                if (!r) return (0, l.jsx)(l.Fragment, {
                    children: n
                });
                let {
                    border: f,
                    background: m
                } = c[s];
                return (0, l.jsx)("div", {
                    ref: t,
                    className: u(f, a),
                    children: (0, l.jsx)("div", {
                        className: u(i ? m : o.background, d),
                        children: n
                    })
                })
            })
        },
        742926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                l = n("669491"),
                i = n("292915"),
                a = n("77078"),
                u = n("389480"),
                o = n("191191"),
                c = n("782340"),
                d = n("895576");
            let f = [54, 8, 8, 8];

            function m(e) {
                let {
                    onSelect: t,
                    sound: n
                } = e, [m, _] = r.useState(!1);

                function E(e) {
                    _(!1), null == t || t(e)
                }
                let I = e => (0, s.jsxs)("div", {
                    className: d.customGiftHeader,
                    children: [(0, s.jsxs)("div", {
                        className: d.customGiftHeaderText,
                        children: [(0, s.jsx)(a.Text, {
                            variant: "text-md/bold",
                            children: c.default.Messages.GIFT_SELECT_SOUND
                        }), (0, s.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            children: c.default.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
                        })]
                    }), (0, s.jsx)("div", {
                        className: d.searchAndSound,
                        children: e
                    })]
                });
                return (0, s.jsx)(a.Popout, {
                    shouldShow: m,
                    position: "bottom",
                    align: "left",
                    onRequestClose: () => _(!1),
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, s.jsx)(a.Dialog, {
                            children: (0, s.jsx)(o.default, {
                                suppressPlaySound: !0,
                                shouldShowUpsell: !1,
                                guildId: null,
                                channel: null,
                                onClose: t,
                                onSelect: E,
                                analyticsSource: "gift soundboard",
                                soundButtonOverlay: u.SoundButtonOverlay.ADD,
                                listPadding: f,
                                renderHeader: I,
                                defaultSoundsOnly: !0
                            })
                        })
                    },
                    children: () => (0, s.jsx)(a.Clickable, {
                        className: d.sound,
                        onClick: () => _(!0),
                        children: null == n ? (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(i.SoundboardIcon, {
                                color: l.default.colors.WHITE,
                                className: d.soundIcon,
                                width: 14,
                                height: 14
                            }), (0, s.jsx)(a.Text, {
                                className: d.text,
                                variant: "text-sm/semibold",
                                children: c.default.Messages.GIFT_SELECT_SOUND
                            })]
                        }) : (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(a.Text, {
                                className: d.textSelected,
                                variant: "text-sm/semibold",
                                children: n.emojiName
                            }), (0, s.jsx)(a.Text, {
                                className: d.text,
                                variant: "text-sm/semibold",
                                children: n.name
                            })]
                        })
                    })
                })
            }

            function _(e) {
                let {
                    sound: t,
                    onSelect: n
                } = e;
                return (0, s.jsx)("div", {
                    className: d.container,
                    children: (0, s.jsx)(m, {
                        onSelect: n,
                        sound: t
                    })
                })
            }
        },
        882641: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EMOJI_BUTTON_SPRING_CONFIG: function() {
                    return _
                },
                default: function() {
                    return E
                }
            }), n("222007");
            var s = n("37983"),
                r = n("884691"),
                l = n("414456"),
                i = n.n(l),
                a = n("907002"),
                u = n("77078"),
                o = n("913144"),
                c = n("474293"),
                d = n("958706"),
                f = n("782340"),
                m = n("505436");
            let _ = {
                tension: 800,
                friction: 24
            };
            var E = function(e) {
                var t;
                let {
                    tabIndex: n,
                    className: l,
                    renderButtonContents: E,
                    active: I,
                    onClick: p,
                    "aria-controls": N,
                    focusProps: S
                } = e, [P, T] = r.useState(!1), [C, A] = r.useState(50), h = P || I, O = (0, c.getClass)(m, "emojiButton", h ? "Hovered" : "Normal");
                let R = (t = C, {
                        "--custom-emoji-sprite-size": "".concat(24, "px"),
                        "--custom-emoji-sprite-row": Math.floor(t / 20),
                        "--custom-emoji-sprite-col": t % 20
                    }),
                    g = r.useCallback(() => {
                        if (!h) T(!0), A(Math.floor(77 * Math.random())), o.default.dispatch({
                            type: "EMOJI_INTERACTION_INITIATED",
                            interaction: d.EmojiInteractionPoint.EmojiButtonMouseEntered
                        })
                    }, [h, T, A]),
                    v = r.useCallback(() => {
                        T(!1)
                    }, [T]),
                    M = r.useCallback(() => {
                        o.default.dispatch({
                            type: "EMOJI_INTERACTION_INITIATED",
                            interaction: d.EmojiInteractionPoint.EmojiButtonFocused
                        })
                    }, []);
                return (0, s.jsx)(u.Button, {
                    look: u.Button.Looks.BLANK,
                    size: u.Button.Sizes.NONE,
                    tabIndex: n,
                    className: i(O, l),
                    onMouseEnter: g,
                    onMouseOver: g,
                    onMouseLeave: v,
                    onFocus: M,
                    onClick: p,
                    "aria-label": f.default.Messages.SELECT_EMOJI,
                    "aria-controls": N,
                    "aria-expanded": I,
                    "aria-haspopup": "dialog",
                    focusProps: S,
                    children: null != E ? E() : (0, s.jsx)(a.Spring, {
                        config: _,
                        to: {
                            value: h ? 1 : 0
                        },
                        children: e => {
                            let {
                                value: t
                            } = e;
                            return (0, s.jsxs)(a.animated.div, {
                                className: m.spriteContainer,
                                style: {
                                    ...R,
                                    transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
                                },
                                children: [(0, s.jsx)("div", {
                                    className: i(m.sprite, m.spriteColored, h ? m.active : m.inactive)
                                }), (0, s.jsx)("div", {
                                    className: i(m.sprite, m.spriteGreyscale, h ? m.inactive : m.active)
                                })]
                            })
                        }
                    })
                })
            }
        },
        834179: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("763377"),
                i = n("75196"),
                a = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, i.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            className: l,
                            fill: r,
                            d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
                        })
                    })
                }, l.CircleQuestionIcon, void 0, {
                    size: 24
                })
        },
        548775: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("645156"),
                i = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        className: l,
                        foreground: i
                    } = e;
                    return (0, s.jsx)("svg", {
                        className: l,
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, s.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, s.jsx)("rect", {
                                width: "16",
                                height: "16"
                            }), (0, s.jsx)("polygon", {
                                className: i,
                                fill: r,
                                points: "12 2.32 10.513 2 4 13.68 5.487 14"
                            })]
                        })
                    })
                }, l.SlashIcon, void 0, {
                    size: 16
                })
        },
        575209: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getCurrencyFullName: function() {
                    return r
                }
            });
            var s = n("782340");

            function r(e) {
                switch (e) {
                    case "brl":
                        return s.default.Messages.BRL_NAME;
                    case "pln":
                        return s.default.Messages.PLN_NAME;
                    case "try":
                        return s.default.Messages.TRY_NAME;
                    case "usd":
                        return s.default.Messages.USD_NAME;
                    case "aud":
                        return s.default.Messages.AUD_NAME;
                    case "pen":
                        return s.default.Messages.PEN_NAME;
                    case "php":
                        return s.default.Messages.PHP_NAME;
                    case "ars":
                        return s.default.Messages.ARS_NAME;
                    case "cop":
                        return s.default.Messages.COP_NAME;
                    case "clr":
                        return s.default.Messages.CLR_NAME;
                    case "jpy":
                        return s.default.Messages.JPY_NAME;
                    case "idr":
                        return s.default.Messages.IDR_NAME;
                    case "vnd":
                        return s.default.Messages.VND_NAME;
                    case "thb":
                        return s.default.Messages.THB_NAME;
                    case "myr":
                        return s.default.Messages.MYR_NAME;
                    case "krw":
                        return s.default.Messages.KRW_NAME;
                    case "mxn":
                        return s.default.Messages.MXN_NAME;
                    case "bgn":
                        return s.default.Messages.BGN_NAME;
                    case "czk":
                        return s.default.Messages.CZK_NAME;
                    case "dkk":
                        return s.default.Messages.DKK_NAME;
                    case "huf":
                        return s.default.Messages.HUF_NAME;
                    case "ron":
                        return s.default.Messages.RON_NAME;
                    case "sek":
                        return s.default.Messages.SEK_NAME;
                    case "eur":
                        return s.default.Messages.EUR_NAME;
                    default:
                        return ""
                }
            }
        }
    }
]);