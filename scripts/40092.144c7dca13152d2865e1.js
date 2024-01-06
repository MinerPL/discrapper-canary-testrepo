(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40092"], {
        891865: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return G
                }
            }), t("222007");
            var a = t("37983"),
                l = t("884691"),
                n = t("414456"),
                u = t.n(n),
                _ = t("917351"),
                i = t.n(_),
                I = t("446674"),
                r = t("77078"),
                d = t("54239"),
                N = t("736964"),
                E = t("777273"),
                o = t("87657"),
                T = t("210721"),
                R = t("671484"),
                c = t("27618"),
                S = t("102985"),
                f = t("843823"),
                A = t("697218"),
                P = t("920700"),
                M = t("953109"),
                C = t("306160"),
                L = t("659632"),
                O = t("719923"),
                m = t("158998"),
                p = t("642906"),
                g = t("49111"),
                U = t("646718"),
                h = t("782340"),
                F = t("885515");

            function G(e) {
                let {
                    giftCode: s,
                    application: t,
                    sku: n,
                    subscriptionPlan: _,
                    selectedGiftStyle: i,
                    onClose: d,
                    hasSentMessage: N,
                    giftRecipient: E,
                    giftMessageError: T,
                    isSendingMessage: c
                } = e, {
                    productLine: f
                } = (0, p.usePaymentContext)(), [A, G] = l.useState(P.default.Modes.DEFAULT), x = (0, I.useStateFromStores)([S.default], () => S.default.enabled), B = () => null != _ ? _.skuId : null != n ? n.id : null, b = () => {
                    let e;
                    let s = null != i && U.SeasonalGiftStyles2023.includes(i);
                    if (null != T) return h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB;
                    if (null == _) return null;
                    let t = N || null != E;
                    return (e = _.interval === U.SubscriptionIntervalTypes.MONTH ? t ? s ? h.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : t ? s ? h.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
                        skuName: (0, O.getTierDisplayName)(_.id),
                        intervalCount: _.intervalCount
                    })
                }, H = (e, s) => {
                    null != n && (0, L.trackGiftCodeCopy)(new R.default({
                        code: s,
                        maxUses: 1
                    }), n);
                    try {
                        (0, C.copy)(e), G(P.default.Modes.SUCCESS)
                    } catch (e) {
                        G(P.default.Modes.ERROR)
                    }
                    setTimeout(() => {
                        G(P.default.Modes.DEFAULT)
                    }, 1500)
                }, y = () => {
                    let e;
                    if (null == s) return null;
                    switch (A) {
                        case P.default.Modes.SUCCESS:
                            e = h.default.Messages.BILLING_GIFT_COPIED;
                            break;
                        case P.default.Modes.ERROR:
                            e = h.default.Messages.FAILED;
                            break;
                        default:
                            e = h.default.Messages.COPY
                    }
                    return (0, a.jsxs)("div", {
                        className: F.giftCodeSection,
                        children: [(0, a.jsx)(r.FormTitle, {
                            children: h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
                        }), null != s && (0, a.jsx)(P.default, {
                            hideMessage: x ? h.default.Messages.GIFT_INVENTORY_HIDDEN : null,
                            value: (0, L.getGiftCodeURL)(s),
                            mode: A,
                            text: e,
                            onCopy: e => H(e, s),
                            supportsCopy: C.SUPPORTS_COPY,
                            className: F.copyInput,
                            buttonColor: P.default.ButtonColors.LINK,
                            buttonLook: P.default.ButtonLooks.LINK
                        }), (0, a.jsx)("div", {
                            className: F.subtext,
                            children: h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
                        })]
                    })
                };
                if (c) return (0, a.jsxs)("div", {
                    className: F.confirmation,
                    children: [null != t ? (0, a.jsx)(M.default, {
                        game: t,
                        className: F.icon,
                        size: M.default.Sizes.LARGE,
                        skuId: B()
                    }) : null, (0, a.jsx)(r.Spinner, {
                        type: r.SpinnerTypes.PULSING_ELLIPSIS
                    })]
                });
                let Y = (0, L.isCustomGiftEnabled)(E),
                    k = f === g.SKUProductLines.COLLECTIBLES;
                return (0, a.jsxs)("div", {
                    className: F.confirmation,
                    children: [null != t ? (0, a.jsx)(M.default, {
                        game: t,
                        className: F.icon,
                        size: M.default.Sizes.LARGE,
                        skuId: B()
                    }) : null, (0, a.jsx)(r.Heading, {
                        variant: "heading-lg/semibold",
                        className: u({
                            [F.header]: null == i && !k,
                            [F.headerCustomGifting]: null != i && !k
                        }),
                        children: Y || N && null == T ? h.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != T ? h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : h.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
                    }), N && null != E && null == T || (0, L.isCustomGiftEnabled)(E) ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(o.default, {
                            user: E,
                            className: F.giftRecipient,
                            size: r.AvatarSizes.SIZE_80
                        }), (0, a.jsx)(r.Heading, {
                            className: F.giftRecipientName,
                            variant: "heading-md/semibold",
                            children: m.default.getName(E)
                        }), (0, a.jsxs)("div", {
                            className: F.giftRecipientTag,
                            children: [" ", m.default.getUserTag(E)]
                        }), (0, a.jsx)("div", {
                            className: F.giftSentMessage,
                            children: b()
                        })]
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: F.blurb,
                            children: b()
                        }), null == T && (0, a.jsx)(D, {
                            giftCode: s,
                            onClose: d
                        }), (0, a.jsx)("div", {
                            className: F.divider
                        }), y()]
                    })]
                })
            }
            let D = e => {
                let {
                    giftCode: s,
                    onClose: t
                } = e;
                l.useEffect(() => {
                    N.default.fetchRelationships(), (0, E.fetchUserAffinities)()
                }, []);
                let [n, u] = l.useState(), [_, R] = l.useState(!1), [S, P] = l.useState(!1), {
                    userAffinities: M,
                    isLoading: C
                } = (0, I.useStateFromStoresObject)([f.default], () => ({
                    userAffinities: f.default.getUserAffinitiesUserIds(),
                    isLoading: f.default.getFetching()
                })), L = Array.from(M.values()), O = (0, I.useStateFromStores)([c.default], () => c.default.getFriendIDs()), p = i.difference(O, L), g = [...L, ...p], U = (0, I.useStateFromStores)([A.default], () => A.default.filter(e => g.includes(e.id) && !e.bot), [g]), G = null == U || 0 === U.length;
                if (G) return null;
                let D = i.sortBy(U, e => g.indexOf(e.id));
                return (0, a.jsxs)("div", {
                    className: F.giftRecipientSection,
                    children: [(0, a.jsx)(r.FormTitle, {
                        children: h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
                    }), (0, a.jsxs)("div", {
                        className: F.giftRecipient,
                        children: [(0, a.jsx)(r.SearchableSelect, {
                            placeholder: h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                            wrapperClassName: F.giftRecipientInputWrapper,
                            className: _ ? F.giftRecipientInputError : void 0,
                            renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, a.jsx)(o.default, {
                                user: e.value,
                                size: r.AvatarSizes.SIZE_20
                            }),
                            renderLeading: () => C ? (0, a.jsx)(r.Spinner, {
                                type: r.SpinnerTypes.PULSING_ELLIPSIS
                            }) : null,
                            value: n,
                            onChange: e => {
                                u(e), R(!1)
                            },
                            options: D.map(e => ({
                                value: e,
                                label: "".concat(m.default.getUserTag(e))
                            }))
                        }), (0, a.jsx)(r.Button, {
                            disabled: null == n,
                            submitting: S,
                            className: F.sendToRecipientButton,
                            onClick: () => {
                                P(!0), (0, T.sendGiftMessage)(n, s).then(() => {
                                    t(), (0, d.popAllLayers)()
                                }).catch(() => {
                                    R(!0), P(!1)
                                })
                            },
                            children: h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
                        })]
                    }), (0, a.jsx)("div", {
                        className: _ ? F.subtextError : F.subtext,
                        children: _ ? h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : h.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
                    })]
                })
            }
        },
        775155: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return M
                },
                PremiumSubscriptionGiftPurchaseConfirmation: function() {
                    return C
                }
            }), t("222007"), t("70102");
            var a = t("37983"),
                l = t("884691"),
                n = t("627445"),
                u = t.n(n),
                _ = t("446674"),
                i = t("77078"),
                I = t("465527"),
                r = t("635357"),
                d = t("891865"),
                N = t("353365"),
                E = t("10514"),
                o = t("552712"),
                T = t("719923"),
                R = t("977934"),
                c = t("646718"),
                S = t("49111"),
                f = t("782340"),
                A = t("535539");

            function P(e) {
                var s, t;
                let l, {
                        planId: n,
                        startingPremiumSubscriptionPlanId: i,
                        paymentSourceType: I
                    } = e,
                    [r, d] = (0, _.useStateFromStoresArray)([E.default], () => [E.default.get(i), E.default.get(n)]);
                if (u(null != r && null != d, "Missing startingPlan or newPlan"), s = i, t = n, c.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(s) < c.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(t)) switch (n) {
                        case c.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
                            l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1, S.DELAYED_PAYMENTS.has(null != I ? I : S.PaymentSourceTypes.UNKNOWN) && (l = f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
                            break;
                        case c.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
                            l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH, S.DELAYED_PAYMENTS.has(null != I ? I : S.PaymentSourceTypes.UNKNOWN) && (l = f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
                            break;
                        case c.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
                            l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR, S.DELAYED_PAYMENTS.has(null != I ? I : S.PaymentSourceTypes.UNKNOWN) && (l = f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
                            break;
                        case c.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
                            l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({
                                numFreeGuildSubscriptions: c.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                            }), S.DELAYED_PAYMENTS.has(null != I ? I : S.PaymentSourceTypes.UNKNOWN) && (l = f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({
                                numFreeGuildSubscriptions: c.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
                            }));
                            break;
                        case c.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
                        case c.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
                            l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
                            break;
                        case c.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
                        case c.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
                            l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
                            break;
                        default:
                            throw Error("Unexpected planId: ".concat(n))
                    } else if (r.skuId === c.PremiumSubscriptionSKUs.TIER_2 && d.skuId === c.PremiumSubscriptionSKUs.TIER_1) l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
                    else switch (d.skuId) {
                        case c.PremiumSubscriptionSKUs.TIER_0:
                            l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
                            break;
                        case c.PremiumSubscriptionSKUs.TIER_1:
                            l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
                            break;
                        case c.PremiumSubscriptionSKUs.TIER_2:
                            l = 1 !== r.intervalCount ? f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
                            break;
                        default:
                            throw Error("Unexpected skuId: ".concat(d.skuId))
                    }
                return (0, a.jsx)("div", {
                    className: A.text,
                    children: l
                })
            }

            function M(e) {
                let s, t, {
                        planId: n,
                        enableNoPaymentTrial: r,
                        startingPremiumSubscriptionPlanId: d,
                        onClose: N,
                        followupSKUInfo: M,
                        isDowngrade: C,
                        hideClose: L,
                        postSuccessGuild: O,
                        paymentSourceType: m
                    } = e,
                    {
                        theme: p
                    } = (0, i.useThemeContext)(),
                    g = (0, _.useStateFromStores)([o.default], () => null != M ? o.default.get(M.id) : null);
                l.useEffect(() => {
                    if (null == M || null != g) return;
                    let {
                        applicationId: e,
                        id: s
                    } = M;
                    (0, I.fetchSKU)(e, s).catch(S.NOOP_NULL)
                }, [M, g]);
                let U = e => {
                    if (e.skuId === c.PremiumSubscriptionSKUs.TIER_0) return S.DELAYED_PAYMENTS.has(null != m ? m : S.PaymentSourceTypes.UNKNOWN) ? f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
                    if (e.skuId === c.PremiumSubscriptionSKUs.TIER_1) return S.DELAYED_PAYMENTS.has(null != m ? m : S.PaymentSourceTypes.UNKNOWN) ? f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
                    return S.DELAYED_PAYMENTS.has(null != m ? m : S.PaymentSourceTypes.UNKNOWN) ? f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : r ? f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2
                };
                if (null != g) s = (0, a.jsx)("div", {
                    className: A.text,
                    children: f.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
                        skuName: g.name
                    })
                });
                else if (null != d) s = (0, a.jsx)(P, {
                    planId: n,
                    startingPremiumSubscriptionPlanId: d
                });
                else if (null != O) {
                    let e = E.default.get(n);
                    u(null != e, "Missing plan"), s = (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: A.text,
                            children: U(e)
                        }), (0, a.jsx)("div", {
                            className: A.text,
                            children: f.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({
                                guildName: O.name
                            })
                        })]
                    })
                } else {
                    let e = E.default.get(n);
                    u(null != e, "Missing plan"), s = (0, a.jsx)("div", {
                        className: A.text,
                        children: U(e)
                    })
                }
                let h = T.default.getPremiumType(n);
                return u(null != h, "premium type should not be null in purchase confirmation"), t = null != g ? f.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
                    skuName: g.name
                }) : C ? f.default.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != O ? f.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : f.default.Messages.PREMIUM_UPGRADE_DONE_BUTTON, (0, a.jsxs)("div", {
                    className: A.confirmation,
                    children: [(0, a.jsx)(R.default, {
                        className: A.banner,
                        theme: p,
                        premiumType: h,
                        type: S.DELAYED_PAYMENTS.has(null != m ? m : S.PaymentSourceTypes.UNKNOWN) ? R.default.Types.PREMIUM_PAYMENT_STARTED : null != d ? R.default.Types.PREMIUM_UPDATED : R.default.Types.PREMIUM_ACTIVATED
                    }), s, L ? null : (0, a.jsx)(i.Button, {
                        onClick: N,
                        children: t
                    })]
                })
            }

            function C(e) {
                let {
                    planId: s,
                    onClose: t
                } = e, {
                    giftRecipient: l,
                    selectedGiftStyle: n,
                    hasSentMessage: i,
                    giftMessageError: I,
                    isSendingMessage: o
                } = (0, r.useGiftContext)(), T = (0, _.useStateFromStores)([E.default], () => E.default.get(s));
                u(null != T, "Missing plan");
                let R = (0, _.useStateFromStores)([N.default], () => N.default.getGiftCode(T.skuId));
                return (0, a.jsx)(d.default, {
                    giftCode: R,
                    subscriptionPlan: T,
                    onClose: t,
                    selectedGiftStyle: n,
                    hasSentMessage: i,
                    giftRecipient: l,
                    giftMessageError: I,
                    isSendingMessage: o
                })
            }
        },
        920700: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                CopyInputModes: function() {
                    return N
                },
                default: function() {
                    return o
                }
            }), t("222007");
            var a = t("37983"),
                l = t("884691"),
                n = t("414456"),
                u = t.n(n),
                _ = t("77078"),
                i = t("474293"),
                I = t("145131"),
                r = t("782340"),
                d = t("863448");
            let N = {
                DEFAULT: "default",
                SUCCESS: "success",
                ERROR: "error"
            };
            class E extends l.PureComponent {
                select() {
                    var e;
                    null === (e = this.inputRef.current) || void 0 === e || e.select()
                }
                renderInput(e) {
                    var s;
                    let {
                        value: t,
                        mode: l
                    } = this.props, n = null === (s = this.context) || void 0 === s ? void 0 : s.titleId;
                    return (0, a.jsx)("input", {
                        className: u((0, i.getClass)(d, "input", l), {
                            [d.inputHidden]: e
                        }),
                        ref: this.inputRef,
                        type: "text",
                        value: t,
                        onClick: this.handleInputClick,
                        readOnly: !0,
                        "aria-labelledby": n
                    })
                }
                render() {
                    let e;
                    let {
                        text: s = r.default.Messages.COPY,
                        mode: t,
                        hideMessage: l,
                        className: n,
                        buttonLook: E
                    } = this.props, o = null != l;
                    switch (t) {
                        case N.SUCCESS:
                            e = _.ButtonColors.GREEN;
                            break;
                        case N.ERROR:
                            e = _.ButtonColors.RED;
                            break;
                        default:
                            e = this.props.buttonColor
                    }
                    return (0, a.jsx)(_.FocusRing, {
                        focusTarget: this.inputRef,
                        ringTarget: this.containerRef,
                        children: (0, a.jsx)("div", {
                            className: u((0, i.getClass)(d, "copyInput", t), n),
                            ref: this.containerRef,
                            children: (0, a.jsxs)(I.default, {
                                className: d.layout,
                                children: [(0, a.jsxs)(I.default, {
                                    className: d.inputWrapper,
                                    children: [this.renderInput(o), o ? (0, a.jsx)("div", {
                                        className: d.hiddenMessage,
                                        children: l
                                    }) : null]
                                }), (0, a.jsx)(I.default, {
                                    shrink: 1,
                                    grow: 0,
                                    style: {
                                        margin: 0
                                    },
                                    children: (0, a.jsx)(_.Button, {
                                        className: d.button,
                                        onClick: this.handleButtonClick,
                                        size: _.ButtonSizes.MIN,
                                        color: e,
                                        look: E,
                                        children: s
                                    })
                                })]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = l.createRef(), this.containerRef = l.createRef(), this.handleButtonClick = () => {
                        this.select();
                        let {
                            onCopy: e,
                            value: s
                        } = this.props;
                        e(s)
                    }, this.handleInputClick = () => {
                        this.select()
                    }
                }
            }
            E.contextType = _.FormContext, E.defaultProps = {
                supportsCopy: !0,
                buttonColor: _.ButtonColors.PRIMARY,
                buttonLook: _.ButtonLooks.FILLED,
                mode: N.DEFAULT
            }, E.Modes = N, E.ButtonColors = _.ButtonColors, E.ButtonLooks = _.ButtonLooks;
            var o = E
        }
    }
]);