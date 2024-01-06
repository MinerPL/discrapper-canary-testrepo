(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["43800"], {
        551290: function(e, t, s) {
            "use strict";
            e.exports = s.p + "f156f6c8b61734c205fc.png"
        },
        513002: function(e, t, s) {
            "use strict";
            e.exports = s.p + "f328a6f8209d4f1f5022.png"
        },
        777273: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                fetchUserAffinities: function() {
                    return a
                }
            });
            var n = s("872717"),
                l = s("913144"),
                r = s("843823"),
                i = s("49111");

            function a() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return r.default.needsRefresh() ? (l.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), n.default.get({
                    url: i.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    l.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    l.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_FAILURE"
                    })
                })) : Promise.resolve()
            }
        },
        926001: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                SlashBoxIcon: function() {
                    return i
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("669491"),
                r = s("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...u
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        206625: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var n = s("884691");

            function l(e, t) {
                let s = n.useRef(e);
                return n.useEffect(() => {
                    function e(e) {
                        null != s.current && !s.current.contains(e.target) && t()
                    }
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [s, t]), s
            }
        },
        162848: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return g
                }
            }), s("222007");
            var n = s("37983");
            s("884691");
            var l = s("414456"),
                r = s.n(l),
                i = s("77078"),
                a = s("446674"),
                u = s("265586"),
                o = s("606292"),
                d = s("688318"),
                c = s("635357"),
                f = s("184900"),
                S = s("845962"),
                E = s("506885"),
                I = s("697218"),
                p = s("153160"),
                _ = s("426188"),
                T = s("49111"),
                h = s("782340"),
                C = s("416465"),
                m = s("513002");
            let A = e => {
                    let {
                        avatarDecoration: t
                    } = e, s = (0, a.useStateFromStores)([I.default], () => I.default.getCurrentUser()), {
                        avatarDecorationSrc: l
                    } = (0, d.default)({
                        user: s,
                        avatarDecorationOverride: t,
                        size: (0, o.getDecorationSizeForAvatarSize)(i.AvatarSizes.SIZE_40)
                    });
                    return (0, n.jsx)("img", {
                        src: l,
                        alt: t.label,
                        className: C.avatarDecoration
                    })
                },
                N = e => {
                    var t;
                    let {
                        profileEffect: s
                    } = e, l = (0, a.useStateFromStores)([S.default], () => S.default.getProfileEffectById(s.id)), {
                        accessibilityLabel: r,
                        thumbnailPreviewSrc: i,
                        title: u
                    } = null !== (t = null == l ? void 0 : l.config) && void 0 !== t ? t : {};
                    return (0, n.jsxs)("div", {
                        className: C.profileEffectContainer,
                        children: [(0, n.jsx)("img", {
                            src: m,
                            alt: r,
                            className: C.profileEffectBackground
                        }), (0, n.jsx)("img", {
                            className: C.profileEffect,
                            src: i,
                            alt: u
                        })]
                    })
                };
            var g = e => {
                let {
                    selectedSkuId: t,
                    selectedSkuPricePreview: s,
                    className: l
                } = e, {
                    product: o
                } = (0, _.useFetchCollectiblesProduct)(t), {
                    giftRecipient: d,
                    giftRecipientError: S
                } = (0, c.useGiftContext)(), m = (0, a.useStateFromStores)([I.default], () => I.default.getCurrentUser());
                if (null == o || null == s) return null;
                let [g] = o.items, O = null != d && d.id !== (null == m ? void 0 : m.id);
                return (0, n.jsxs)("div", {
                    className: l,
                    children: [(0, n.jsxs)("div", {
                        className: C.previewTitleContainer,
                        children: [(0, n.jsx)(i.FormTitle, {
                            className: C.previewTitle,
                            children: h.default.Messages.COLLECTIBLES_GIFT_LABEL
                        }), O && (0, n.jsx)(i.Popout, {
                            preload: () => (0, E.default)(d.id, d.getAvatarURL(null, 80)),
                            renderPopout: e => (0, n.jsx)(f.default, {
                                ...e,
                                user: d,
                                pendingAvatar: d.getAvatarURL(null, (0, i.getAvatarSize)(i.AvatarSizes.SIZE_80)),
                                pendingAvatarDecoration: g.type === u.CollectiblesItemType.AVATAR_DECORATION ? g : null,
                                pendingProfileEffectId: g.type === u.CollectiblesItemType.PROFILE_EFFECT ? g.id : null,
                                canUsePremiumCustomization: !0,
                                onAvatarChange: T.NOOP,
                                onBannerChange: T.NOOP,
                                disabledInputs: !0
                            }),
                            align: "center",
                            position: "right",
                            children: e => (0, n.jsx)(i.Clickable, {
                                ...e,
                                className: C.previewLink,
                                children: (0, n.jsx)(i.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-link",
                                    children: h.default.Messages.COLLECTIBLES_PREVIEW_GIFT_PROFILE
                                })
                            })
                        }, d.id)]
                    }), (0, n.jsxs)("div", {
                        className: r(C.previewContainer, {
                            [C.previewContainerError]: null != S
                        }),
                        children: [g.type === u.CollectiblesItemType.AVATAR_DECORATION && (0, n.jsx)(A, {
                            avatarDecoration: g
                        }), g.type === u.CollectiblesItemType.PROFILE_EFFECT && (0, n.jsx)(N, {
                            profileEffect: g
                        }), (0, n.jsxs)("div", {
                            className: C.previewTextContainer,
                            children: [(0, n.jsx)(i.Text, {
                                variant: "text-md/semibold",
                                children: o.name
                            }), (0, n.jsx)(i.Heading, {
                                variant: "heading-sm/medium",
                                color: "header-secondary",
                                children: g.type === u.CollectiblesItemType.AVATAR_DECORATION ? h.default.Messages.USER_SETTINGS_AVATAR_DECORATION : g.type === u.CollectiblesItemType.PROFILE_EFFECT ? h.default.Messages.USER_SETTINGS_PROFILE_EFFECT : null
                            })]
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-md/semibold",
                            children: (0, p.formatPrice)(s.amount, s.currency)
                        })]
                    }), null != S && (0, n.jsx)(i.Text, {
                        className: C.recipientError,
                        variant: "text-sm/normal",
                        color: "status-danger-background",
                        children: S
                    })]
                })
            }
        },
        349133: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("77078"),
                r = s("446674"),
                i = s("87657"),
                a = s("635357"),
                u = s("27618"),
                o = s("697218"),
                d = s("158998"),
                c = s("21526"),
                f = s("782340"),
                S = e => {
                    let {
                        selectedSkuId: t,
                        className: s
                    } = e, S = (0, r.useStateFromStoresArray)([u.default], () => u.default.getFriendIDs()), E = (0, r.useStateFromStoresArray)([o.default], () => o.default.filter(e => S.includes(e.id) && !e.bot), [S]), {
                        giftRecipient: I,
                        setGiftRecipient: p,
                        giftRecipientError: _,
                        setGiftRecipientError: T,
                        setValidatingGiftRecipient: h
                    } = (0, a.useGiftContext)();
                    if (null == t) return null;
                    let C = async e => {
                        h(!0), null != _ && T(), p(e);
                        let s = await (0, c.validateCollectiblesRecipient)(e.id, t);
                        !s && T(f.default.Messages.COLLECTIBLES_GIFT_SEND_ERROR_OWNED), h(!1)
                    };
                    return (0, n.jsxs)("div", {
                        className: s,
                        children: [(0, n.jsx)(l.FormTitle, {
                            children: f.default.Messages.FORM_LABEL_SEND_TO
                        }), (0, n.jsx)(l.SearchableSelect, {
                            placeholder: f.default.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER,
                            renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, n.jsx)(i.default, {
                                user: e.value,
                                size: l.AvatarSizes.SIZE_20
                            }),
                            value: I,
                            onChange: C,
                            options: E.map(e => ({
                                value: e,
                                label: "".concat(d.default.getUserTag(e))
                            }))
                        })]
                    })
                }
        },
        597517: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                hideHotspot: function() {
                    return i
                },
                setHotspotOverride: function() {
                    return a
                },
                clearHotspotOverride: function() {
                    return u
                }
            });
            var n = s("913144"),
                l = s("599110"),
                r = s("49111");

            function i(e) {
                l.default.track(r.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), n.default.wait(() => {
                    n.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function a(e, t) {
                n.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function u(e) {
                n.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            }), s("222007");
            var n = s("446674"),
                l = s("913144"),
                r = s("197881"),
                i = s("492397");
            let a = new Set,
                u = {};
            class o extends n.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (a = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (u = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        s = !t && u[e];
                    return !(i.CONFERENCE_MODE_ENABLED || r.ProcessArgs.isDisallowPopupsSet()) && (s || !a.has(e))
                }
                hasHiddenHotspot(e) {
                    return a.has(e)
                }
                getHotspotOverride(e) {
                    return u[e]
                }
                getState() {
                    return {
                        hiddenHotspots: a,
                        hotspotOverrides: u
                    }
                }
            }
            o.displayName = "HotspotStore", o.persistKey = "hotspots", o.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var d = new o(l.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    a = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (a.has(t)) return !1;
                    a.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: s
                    } = e;
                    u[t] = s
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == u[t]) return !1;
                    delete u[t]
                }
            })
        },
        139321: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                HotspotStore: function() {
                    return r.default
                }
            });
            var n = s("533613");
            s.es(n, t);
            var l = s("597517");
            s.es(l, t);
            var r = s("269596")
        },
        639137: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            }), s("794252");
            var n = s("37983");
            s("884691");
            var l = s("414456"),
                r = s.n(l),
                i = s("506838"),
                a = s("77078"),
                u = s("85336"),
                o = s("782340"),
                d = s("432883");

            function c(e) {
                let {
                    step: t,
                    onClose: s
                } = e, l = (0, i.match)(t).with(u.Step.REVIEW, () => o.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_REVIEW_HEADER).with(u.Step.ADD_PAYMENT_STEPS, () => o.default.Messages.BILLING_STANDALONE_ADD_PAYMENT_TITLE).with(u.Step.GIFT_CUSTOMIZATION, () => o.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER).with(u.Step.CONFIRM, () => "").otherwise(() => null);
                return null == l ? null : (0, n.jsxs)(a.ModalHeader, {
                    className: r(d.headerContainerGift),
                    separator: t !== u.Step.CONFIRM,
                    children: [(0, n.jsx)(a.Heading, {
                        variant: "heading-lg/semibold",
                        children: l
                    }), (0, n.jsx)(a.ModalCloseButton, {
                        onClick: s,
                        className: d.closeButtonGift
                    })]
                })
            }
        },
        894742: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return m
                }
            }), s("222007");
            var n = s("37983"),
                l = s("884691"),
                r = s("516555"),
                i = s("812204"),
                a = s("685665"),
                u = s("635357"),
                o = s("642906"),
                d = s("85336"),
                c = s("385179"),
                f = s("292215"),
                S = s("639137"),
                E = s("526139"),
                I = s("158184"),
                p = s("385890"),
                _ = s("337978"),
                T = s("49111"),
                h = s("843455"),
                C = s("322859");

            function m(e) {
                let {
                    onClose: t,
                    onComplete: s,
                    transitionState: m,
                    loadId: A,
                    skuId: N,
                    isGift: g = !1,
                    giftRecipient: O,
                    giftMessage: x,
                    analyticsLocations: R,
                    returnRef: P
                } = e, {
                    analyticsLocations: v,
                    AnalyticsLocationProvider: L
                } = (0, a.default)([...R, i.default.COLLECTIBLES_PAYMENT_MODAL]), M = l.useRef(new r.Environment), [F, j] = l.useState(null), y = [f.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, p.COLLECTIBLES_GIFT_CUSTOMIZATION_STEP, E.COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG, ...f.SHARED_STEP_CONFIGS, f.REVIEW_STEP_CONFIG, {
                    key: d.Step.CONFIRM,
                    renderStep: e => (0, n.jsx)(I.CollectiblesPaymentModalConfirmStep, {
                        ...e,
                        confettiCanvas: F,
                        analyticsLocations: v
                    }),
                    options: {
                        bodyClassName: C.modalOverrideBody,
                        sliderBodyClassName: C.modalOverrideSliderBody
                    }
                }];
                return (0, n.jsxs)(L, {
                    children: [(0, n.jsx)(r.ConfettiCanvas, {
                        ref: j,
                        className: C.confettiCanvas,
                        environment: M.current
                    }), (0, n.jsx)(o.PaymentContextProvider, {
                        stepConfigs: y,
                        applicationId: T.COLLECTIBLES_APPLICATION_ID,
                        skuIDs: [N],
                        isGift: g,
                        activeSubscription: null,
                        purchaseType: h.PurchaseTypes.ONE_TIME,
                        children: (0, n.jsx)(u.GiftContextProvider, {
                            isGift: g,
                            giftRecipient: O,
                            giftMessage: x,
                            children: (0, n.jsx)(c.PaymentModal, {
                                onClose: t,
                                onComplete: s,
                                loadId: A,
                                applicationId: T.COLLECTIBLES_APPLICATION_ID,
                                skuId: N,
                                initialPlanId: null,
                                analyticsLocations: v,
                                transitionState: m,
                                renderHeader: (e, t, s) => g ? (0, n.jsx)(S.default, {
                                    step: s,
                                    onClose: () => t(!1)
                                }) : (0, n.jsx)(_.default, {
                                    step: s,
                                    onClose: () => t(!1)
                                }),
                                returnRef: P,
                                hideShadow: !0
                            })
                        })
                    })]
                })
            }
        },
        526139: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG: function() {
                    return u
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("357957"),
                r = s("635357"),
                i = s("85336"),
                a = s("262683");
            let u = {
                key: i.Step.ADD_PAYMENT_STEPS,
                renderStep: e => (0, n.jsx)(o, {
                    ...e
                }),
                options: {
                    renderHeader: !0
                }
            };

            function o(e) {
                let {
                    isGift: t
                } = (0, r.useGiftContext)();
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(a.PaymentModalAddPaymentStep, {
                        ...e,
                        breadcrumbSteps: [i.Step.ADD_PAYMENT_STEPS, i.Step.REVIEW, i.Step.CONFIRM],
                        onReturn: () => {
                            let s = l.default.paymentSources;
                            if (0 === Object.keys(s).length) {
                                if (t) {
                                    e.handleStepChange(i.Step.GIFT_CUSTOMIZATION);
                                    return
                                }
                                e.handleClose()
                            } else e.handleStepChange(i.Step.REVIEW, {
                                trackedFromStep: i.Step.ADD_PAYMENT_STEPS
                            })
                        }
                    })
                })
            }
        },
        158184: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                CollectiblesPaymentModalConfirmStep: function() {
                    return h
                }
            });
            var n = s("37983"),
                l = s("884691"),
                r = s("627445"),
                i = s.n(r),
                a = s("65597"),
                u = s("206230"),
                o = s("853987"),
                d = s("923702"),
                c = s("658756"),
                f = s("57940"),
                S = s("635357"),
                E = s("642906"),
                I = s("891865"),
                p = s("650484"),
                _ = s("367767");

            function T(e) {
                let {
                    handleClose: t,
                    confettiCanvas: s,
                    analyticsLocations: l
                } = e, {
                    skusById: r,
                    selectedSkuId: u,
                    application: d
                } = (0, E.usePaymentContext)(), f = (0, a.default)([o.default], () => o.default.getProduct(u));
                i(null != u, "Expected selectedSkuId"), i(null != d, "Expected application");
                let S = r[u];
                return (i(null != S, "Expected sku"), null == f) ? null : (0, n.jsxs)(p.PaymentPortalBody, {
                    children: [(0, n.jsx)(_.default, {}), (0, n.jsx)(c.CollectiblesCollectedModalInner, {
                        product: f,
                        onClose: t,
                        confettiCanvas: s,
                        analyticsLocations: l
                    })]
                })
            }

            function h(e) {
                let {
                    isGift: t,
                    giftCode: s,
                    selectedGiftStyle: r,
                    hasSentMessage: i,
                    giftRecipient: c,
                    giftMessageError: p,
                    isSendingMessage: _
                } = (0, S.useGiftContext)(), h = (0, a.default)([u.default], () => u.default.useReducedMotion), C = l.useRef(null), {
                    selectedSkuId: m
                } = (0, E.usePaymentContext)(), A = (0, a.default)([o.default], () => o.default.getProduct(m)), {
                    confettiColors: N,
                    confettiSprites: g
                } = (0, f.default)(null == A ? void 0 : A.categorySkuId);
                return t ? (0, n.jsxs)("div", {
                    ref: C,
                    children: [(0, n.jsx)(I.default, {
                        giftCode: s,
                        onClose: e.handleClose,
                        selectedGiftStyle: r,
                        hasSentMessage: i,
                        giftRecipient: c,
                        giftMessageError: p,
                        isSendingMessage: _
                    }), !h && (0, n.jsx)(d.default, {
                        confettiTarget: C.current,
                        confettiCanvas: e.confettiCanvas,
                        sprites: null != g ? g : f.DEFAULT_CONFETTI_SPRITES,
                        colors: null != N ? N : f.DEFAULT_CONFETTI_COLORS
                    })]
                }) : (0, n.jsx)(T, {
                    ...e
                })
            }
        },
        385890: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                COLLECTIBLES_GIFT_CUSTOMIZATION_STEP: function() {
                    return h
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("77078"),
                r = s("446674"),
                i = s("162848"),
                a = s("349133"),
                u = s("705820"),
                o = s("889554"),
                d = s("177998"),
                c = s("697218"),
                f = s("145131"),
                S = s("635357"),
                E = s("642906"),
                I = s("85336"),
                p = s("650484"),
                _ = s("782340"),
                T = s("578956");
            let h = {
                key: I.Step.GIFT_CUSTOMIZATION,
                renderStep: e => (0, n.jsx)(m, {
                    ...e
                }),
                options: {
                    isLargeModal: !0
                }
            };

            function C(e) {
                let {
                    onStepChange: t,
                    onBackClick: s,
                    showBackButton: r = !1,
                    disabled: i = !1,
                    loading: a = !1
                } = e, {
                    hasPaymentSources: u
                } = (0, E.usePaymentContext)(), o = u ? I.Step.REVIEW : I.Step.ADD_PAYMENT_STEPS;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(l.Button, {
                        onClick: () => t(o),
                        disabled: i,
                        submitting: a,
                        children: _.default.Messages.PAGINATION_NEXT
                    }), r ? (0, n.jsx)(d.default, {
                        onClick: s
                    }) : null]
                })
            }

            function m(e) {
                let {
                    handleStepChange: t,
                    handleClose: s
                } = e, {
                    customGiftMessage: d = "",
                    setCustomGiftMessage: I,
                    giftRecipientError: h,
                    validatingGiftRecipient: m,
                    giftRecipient: A
                } = (0, S.useGiftContext)(), {
                    selectedSkuId: N,
                    selectedSkuPricePreview: g
                } = (0, E.usePaymentContext)(), O = (0, r.useStateFromStores)([c.default], () => c.default.getCurrentUser());
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(p.PaymentPortalBody, {
                        children: (0, n.jsxs)("div", {
                            className: T.stepBody,
                            children: [(0, n.jsx)("div", {
                                className: T.bodyColumnMiddle,
                                children: (0, n.jsx)(o.GiftAnimationOptions, {})
                            }), (0, n.jsxs)("div", {
                                className: T.bodyColumnRight,
                                children: [(0, n.jsx)(a.default, {
                                    selectedSkuId: N,
                                    className: T.sendTo
                                }), (0, n.jsx)(u.default, {
                                    sectionTitle: _.default.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: e => null == I ? void 0 : I(e),
                                    pendingText: d,
                                    currentText: d,
                                    disableThemedBackground: !0,
                                    className: T.customGiftMessageWrapper,
                                    innerClassName: T.customGiftMessage
                                }), (0, n.jsx)(i.default, {
                                    selectedSkuId: N,
                                    selectedSkuPricePreview: g,
                                    className: T.giftPreview
                                })]
                            })]
                        })
                    }), (0, n.jsx)(p.PaymentPortalFooter, {
                        children: (0, n.jsx)(l.ModalFooter, {
                            justify: f.default.Justify.BETWEEN,
                            align: f.default.Align.CENTER,
                            children: (0, n.jsx)(C, {
                                onStepChange: t,
                                onBackClick: s,
                                disabled: null != h || null == A || A.id === (null == O ? void 0 : O.id) || d.length > u.CUSTOM_GIFT_MESSAGE_MAX_LENGTH,
                                loading: m
                            })
                        })
                    })]
                })
            }
        },
        337978: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("77078"),
                r = s("834897"),
                i = s("85336"),
                a = s("425480"),
                u = s("504898"),
                o = s("551290");

            function d(e) {
                let {
                    step: t,
                    onClose: s
                } = e, d = (0, r.default)(a.RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY);
                return t === i.Step.BENEFITS || t === i.Step.CONFIRM ? null : (0, n.jsxs)("div", {
                    className: u.headerContainer,
                    children: [!d && (0, n.jsx)("div", {
                        className: u.headerImageContainer,
                        "aria-hidden": "true",
                        "data-accessibility": "desaturate",
                        children: (0, n.jsx)("img", {
                            src: o,
                            alt: "",
                            className: u.headerImage
                        })
                    }), (0, n.jsx)(l.ModalCloseButton, {
                        withCircleBackground: !0,
                        className: u.closeButton,
                        onClick: s
                    })]
                })
            }
        },
        891865: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return F
                }
            }), s("222007");
            var n = s("37983"),
                l = s("884691"),
                r = s("414456"),
                i = s.n(r),
                a = s("917351"),
                u = s.n(a),
                o = s("446674"),
                d = s("77078"),
                c = s("54239"),
                f = s("736964"),
                S = s("777273"),
                E = s("87657"),
                I = s("210721"),
                p = s("671484"),
                _ = s("27618"),
                T = s("102985"),
                h = s("843823"),
                C = s("697218"),
                m = s("920700"),
                A = s("953109"),
                N = s("306160"),
                g = s("659632"),
                O = s("719923"),
                x = s("158998"),
                R = s("642906"),
                P = s("49111"),
                v = s("646718"),
                L = s("782340"),
                M = s("885515");

            function F(e) {
                let {
                    giftCode: t,
                    application: s,
                    sku: r,
                    subscriptionPlan: a,
                    selectedGiftStyle: u,
                    onClose: c,
                    hasSentMessage: f,
                    giftRecipient: S,
                    giftMessageError: I,
                    isSendingMessage: _
                } = e, {
                    productLine: h
                } = (0, R.usePaymentContext)(), [C, F] = l.useState(m.default.Modes.DEFAULT), y = (0, o.useStateFromStores)([T.default], () => T.default.enabled), U = () => null != a ? a.skuId : null != r ? r.id : null, D = () => {
                    let e;
                    let t = null != u && v.SeasonalGiftStyles2023.includes(u);
                    if (null != I) return L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB;
                    if (null == a) return null;
                    let s = f || null != S;
                    return (e = a.interval === v.SubscriptionIntervalTypes.MONTH ? s ? t ? L.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : s ? t ? L.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
                        skuName: (0, O.getTierDisplayName)(a.id),
                        intervalCount: a.intervalCount
                    })
                }, b = (e, t) => {
                    null != r && (0, g.trackGiftCodeCopy)(new p.default({
                        code: t,
                        maxUses: 1
                    }), r);
                    try {
                        (0, N.copy)(e), F(m.default.Modes.SUCCESS)
                    } catch (e) {
                        F(m.default.Modes.ERROR)
                    }
                    setTimeout(() => {
                        F(m.default.Modes.DEFAULT)
                    }, 1500)
                }, G = () => {
                    let e;
                    if (null == t) return null;
                    switch (C) {
                        case m.default.Modes.SUCCESS:
                            e = L.default.Messages.BILLING_GIFT_COPIED;
                            break;
                        case m.default.Modes.ERROR:
                            e = L.default.Messages.FAILED;
                            break;
                        default:
                            e = L.default.Messages.COPY
                    }
                    return (0, n.jsxs)("div", {
                        className: M.giftCodeSection,
                        children: [(0, n.jsx)(d.FormTitle, {
                            children: L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
                        }), null != t && (0, n.jsx)(m.default, {
                            hideMessage: y ? L.default.Messages.GIFT_INVENTORY_HIDDEN : null,
                            value: (0, g.getGiftCodeURL)(t),
                            mode: C,
                            text: e,
                            onCopy: e => b(e, t),
                            supportsCopy: N.SUPPORTS_COPY,
                            className: M.copyInput,
                            buttonColor: m.default.ButtonColors.LINK,
                            buttonLook: m.default.ButtonLooks.LINK
                        }), (0, n.jsx)("div", {
                            className: M.subtext,
                            children: L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
                        })]
                    })
                };
                if (_) return (0, n.jsxs)("div", {
                    className: M.confirmation,
                    children: [null != s ? (0, n.jsx)(A.default, {
                        game: s,
                        className: M.icon,
                        size: A.default.Sizes.LARGE,
                        skuId: U()
                    }) : null, (0, n.jsx)(d.Spinner, {
                        type: d.SpinnerTypes.PULSING_ELLIPSIS
                    })]
                });
                let k = (0, g.isCustomGiftEnabled)(S),
                    B = h === P.SKUProductLines.COLLECTIBLES;
                return (0, n.jsxs)("div", {
                    className: M.confirmation,
                    children: [null != s ? (0, n.jsx)(A.default, {
                        game: s,
                        className: M.icon,
                        size: A.default.Sizes.LARGE,
                        skuId: U()
                    }) : null, (0, n.jsx)(d.Heading, {
                        variant: "heading-lg/semibold",
                        className: i({
                            [M.header]: null == u && !B,
                            [M.headerCustomGifting]: null != u && !B
                        }),
                        children: k || f && null == I ? L.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != I ? L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : L.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
                    }), f && null != S && null == I || (0, g.isCustomGiftEnabled)(S) ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(E.default, {
                            user: S,
                            className: M.giftRecipient,
                            size: d.AvatarSizes.SIZE_80
                        }), (0, n.jsx)(d.Heading, {
                            className: M.giftRecipientName,
                            variant: "heading-md/semibold",
                            children: x.default.getName(S)
                        }), (0, n.jsxs)("div", {
                            className: M.giftRecipientTag,
                            children: [" ", x.default.getUserTag(S)]
                        }), (0, n.jsx)("div", {
                            className: M.giftSentMessage,
                            children: D()
                        })]
                    }) : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: M.blurb,
                            children: D()
                        }), null == I && (0, n.jsx)(j, {
                            giftCode: t,
                            onClose: c
                        }), (0, n.jsx)("div", {
                            className: M.divider
                        }), G()]
                    })]
                })
            }
            let j = e => {
                let {
                    giftCode: t,
                    onClose: s
                } = e;
                l.useEffect(() => {
                    f.default.fetchRelationships(), (0, S.fetchUserAffinities)()
                }, []);
                let [r, i] = l.useState(), [a, p] = l.useState(!1), [T, m] = l.useState(!1), {
                    userAffinities: A,
                    isLoading: N
                } = (0, o.useStateFromStoresObject)([h.default], () => ({
                    userAffinities: h.default.getUserAffinitiesUserIds(),
                    isLoading: h.default.getFetching()
                })), g = Array.from(A.values()), O = (0, o.useStateFromStores)([_.default], () => _.default.getFriendIDs()), R = u.difference(O, g), P = [...g, ...R], v = (0, o.useStateFromStores)([C.default], () => C.default.filter(e => P.includes(e.id) && !e.bot), [P]), F = null == v || 0 === v.length;
                if (F) return null;
                let j = u.sortBy(v, e => P.indexOf(e.id));
                return (0, n.jsxs)("div", {
                    className: M.giftRecipientSection,
                    children: [(0, n.jsx)(d.FormTitle, {
                        children: L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
                    }), (0, n.jsxs)("div", {
                        className: M.giftRecipient,
                        children: [(0, n.jsx)(d.SearchableSelect, {
                            placeholder: L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                            wrapperClassName: M.giftRecipientInputWrapper,
                            className: a ? M.giftRecipientInputError : void 0,
                            renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, n.jsx)(E.default, {
                                user: e.value,
                                size: d.AvatarSizes.SIZE_20
                            }),
                            renderLeading: () => N ? (0, n.jsx)(d.Spinner, {
                                type: d.SpinnerTypes.PULSING_ELLIPSIS
                            }) : null,
                            value: r,
                            onChange: e => {
                                i(e), p(!1)
                            },
                            options: j.map(e => ({
                                value: e,
                                label: "".concat(x.default.getUserTag(e))
                            }))
                        }), (0, n.jsx)(d.Button, {
                            disabled: null == r,
                            submitting: T,
                            className: M.sendToRecipientButton,
                            onClick: () => {
                                m(!0), (0, I.sendGiftMessage)(r, t).then(() => {
                                    s(), (0, c.popAllLayers)()
                                }).catch(() => {
                                    p(!0), m(!1)
                                })
                            },
                            children: L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
                        })]
                    }), (0, n.jsx)("div", {
                        className: a ? M.subtextError : M.subtext,
                        children: a ? L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
                    })]
                })
            }
        },
        7127: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                PaymentModalConfirmStep: function() {
                    return f
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("627445"),
                r = s.n(l),
                i = s("77078"),
                a = s("642906"),
                u = s("367767"),
                o = s("650484"),
                d = s("782340"),
                c = s("966425");

            function f(e) {
                let {
                    handleClose: t
                } = e, {
                    skusById: s,
                    selectedSkuId: l,
                    application: f
                } = (0, a.usePaymentContext)();
                r(null != l, "Expected selectedSkuId"), r(null != f, "Expected application");
                let S = s[l];
                r(null != S, "Expected sku");
                let E = d.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
                    applicationName: f.name,
                    itemName: S.name
                });
                return (0, n.jsxs)(o.PaymentPortalBody, {
                    children: [(0, n.jsx)(u.default, {}), (0, n.jsxs)("div", {
                        className: c.confirmation,
                        children: [(0, n.jsx)(i.Heading, {
                            variant: "heading-xxl/bold",
                            className: c.confirmationHeader,
                            children: "Success!"
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: E
                        }), (0, n.jsx)("div", {
                            className: c.divider
                        }), (0, n.jsx)(i.Button, {
                            onClick: t,
                            children: d.default.Messages.CLOSE
                        })]
                    })]
                })
            }
        },
        292215: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG: function() {
                    return f
                },
                ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG: function() {
                    return S
                },
                REVIEW_STEP_CONFIG: function() {
                    return p
                },
                ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG: function() {
                    return _
                },
                SHARED_STEP_CONFIGS: function() {
                    return T
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("357957"),
                r = s("85336"),
                i = s("262683"),
                a = s("946359"),
                u = s("724269"),
                o = s("7127"),
                d = s("99836"),
                c = s("217796");
            let f = {
                    key: null,
                    renderStep: e => (0, n.jsx)(c.OneTimePaymentPredicateStep, {
                        ...e
                    })
                },
                S = {
                    key: r.Step.ADD_PAYMENT_STEPS,
                    renderStep: e => (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)(i.PaymentModalAddPaymentStep, {
                            ...e,
                            breadcrumbSteps: [r.Step.ADD_PAYMENT_STEPS, r.Step.REVIEW, r.Step.CONFIRM],
                            onReturn: () => {
                                let t = l.default.paymentSources;
                                0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(r.Step.REVIEW, {
                                    trackedFromStep: r.Step.ADD_PAYMENT_STEPS
                                })
                            }
                        })
                    }),
                    options: {
                        renderHeader: !0
                    }
                },
                E = {
                    key: r.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: () => (0, n.jsx)(u.default, {})
                },
                I = {
                    key: r.Step.AWAITING_AUTHENTICATION,
                    renderStep: () => (0, n.jsx)(a.default, {})
                },
                p = {
                    key: r.Step.REVIEW,
                    renderStep: e => (0, n.jsx)(d.PaymentModalReviewStep, {
                        ...e
                    })
                },
                _ = {
                    key: r.Step.CONFIRM,
                    renderStep: e => (0, n.jsx)(o.PaymentModalConfirmStep, {
                        ...e
                    })
                },
                T = [E, I]
        },
        217796: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                OneTimePaymentPredicateStep: function() {
                    return S
                }
            }), s("222007");
            var n = s("37983"),
                l = s("884691"),
                r = s("627445"),
                i = s.n(r),
                a = s("245187"),
                u = s("635357"),
                o = s("642906"),
                d = s("85336"),
                c = s("628738"),
                f = s("49111");

            function S(e) {
                let {
                    handleStepChange: t,
                    handleClose: s
                } = e, {
                    blockedPayments: r,
                    hasFetchedSkus: S,
                    paymentSources: E,
                    hasFetchedPaymentSources: I,
                    application: p,
                    skusById: _,
                    selectedSkuId: T
                } = (0, o.usePaymentContext)(), {
                    isGift: h
                } = (0, u.useGiftContext)(), [C, m] = l.useState(!0);
                return (l.useEffect(() => {
                    let e = null != p;
                    S && I && e && m(!1)
                }, [S, I, p]), l.useEffect(() => {
                    if (C || r) return;
                    i(null != T, "Expected selectedSkuId");
                    let e = _[T];
                    if (h && (null == e ? void 0 : e.productLine) === f.SKUProductLines.COLLECTIBLES) {
                        t(d.Step.GIFT_CUSTOMIZATION);
                        return
                    }
                    if (0 === Object.keys(E).length) {
                        t(d.Step.ADD_PAYMENT_STEPS);
                        return
                    }
                    t(d.Step.REVIEW)
                }, [C, r, t, E, h, _, T]), C) ? (0, n.jsx)(c.default, {}) : r ? (0, n.jsx)(a.BlockedPaymentsContentModal, {
                    onClose: s
                }) : null
            }
        },
        65324: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            }), s("222007"), s("70102");
            var n = s("37983"),
                l = s("884691"),
                r = s("446674"),
                i = s("206230"),
                a = s("491605"),
                u = s("210721"),
                o = s("78345");

            function d(e) {
                let {
                    giftStyle: t,
                    className: s,
                    shouldAnimate: d = !0,
                    defaultAnimationState: c,
                    idleAnimationState: f
                } = e, S = (0, r.useStateFromStores)([i.default], () => i.default.useReducedMotion), [E, I] = l.useState(c), p = l.useRef((0, u.getGiftAnimationData)(t, E)), [_, T] = l.useState(null == f), [h, C] = l.useState(!1), [m, A] = l.useState(-1), N = () => {
                    p.current = (0, u.getGiftAnimationData)(t, E), A(e => e + 1)
                }, g = () => {
                    T(!1), C(!0), A(-1), I(c)
                };
                l.useEffect(() => {
                    null == f && I(c)
                }, [f, c]), l.useEffect(() => {
                    if (null != f && m >= 0) {
                        g();
                        return
                    }
                    N()
                }, [t, f]), l.useEffect(() => {
                    (!h || null == f) && N()
                }, [E]), l.useEffect(() => {
                    h && (T(null == f), C(!1), N())
                }, [h]);
                if (!o.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, n.jsx)(a.default, {
                    importData: p.current,
                    shouldAnimate: !S && d,
                    className: s,
                    versionKey: m,
                    onComplete: null != f ? () => {
                        null != f && (I(f), T(!0))
                    } : void 0,
                    loop: _
                })
            }
        },
        671484: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            }), s("702976");
            var n, l = s("866227"),
                r = s.n(l),
                i = s("666038"),
                a = s("568734"),
                u = s("797647"),
                o = s("646718");
            let d = Object.freeze({
                PAYMENT_SOURCE_REQUIRED: 1,
                EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
                NOT_SELF_REDEEMABLE: 4
            });
            n = class e extends i.default {
                static createFromServer(t) {
                    return new e({
                        userId: null != t.user ? t.user.id : null,
                        code: t.code,
                        skuId: t.sku_id,
                        applicationId: t.application_id,
                        uses: t.uses,
                        maxUses: t.max_uses,
                        storeListingId: null != t.store_listing ? t.store_listing.id : null,
                        expiresAt: null != t.expires_at ? r(t.expires_at) : null,
                        redeemed: t.redeemed,
                        subscriptionPlanId: null != t.subscription_plan ? t.subscription_plan.id : t.subscription_plan_id,
                        subscriptionPlan: null != t.subscription_plan ? u.default.createFromServer(t.subscription_plan) : null,
                        revoked: !1,
                        entitlementBranches: null != t.entitlement_branches ? t.entitlement_branches : null,
                        flags: null != t.flags ? t.flags : 0,
                        giftStyle: t.gift_style,
                        subscriptionTrial: null != t.subscription_trial ? {
                            id: t.subscription_trial.id,
                            interval: t.subscription_trial.interval,
                            intervalCount: t.subscription_trial.interval_count,
                            skuId: t.subscription_trial.sku_id
                        } : null,
                        promotion: null != t.promotion ? {
                            id: t.promotion.id,
                            startDate: t.promotion.start_date,
                            endDate: t.promotion.end_date,
                            inboundHeaderText: t.promotion.inbound_header_text,
                            inboundBodyText: t.promotion.inbound_body_text,
                            inboundHelpCenterLink: t.promotion.inbound_help_center_link
                        } : null
                    })
                }
                isExpired() {
                    let e = this.expiresAt;
                    return null != e && r().isAfter(e)
                }
                get hasMultipleCopies() {
                    return this.maxUses > 1
                }
                get isClaimed() {
                    return this.uses >= this.maxUses
                }
                get remainingUses() {
                    return this.maxUses - this.uses
                }
                get isSubscription() {
                    return null != this.subscriptionPlanId
                }
                get premiumSubscriptionType() {
                    return this.isSubscription && o.PremiumSubscriptionSKUToPremiumType[this.skuId] || null
                }
                get isSelfRedeemable() {
                    return !(0, a.hasFlag)(this.flags, d.NOT_SELF_REDEEMABLE)
                }
                get isExistingPremiumSubscriptionDisallowed() {
                    return (0, a.hasFlag)(this.flags, d.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED)
                }
                get analyticsData() {
                    return {
                        gift_code: this.code,
                        gift_code_max_uses: this.maxUses
                    }
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.userId = e.userId, this.code = e.code, this.skuId = e.skuId, this.applicationId = e.applicationId, this.uses = e.uses, this.maxUses = e.maxUses, this.expiresAt = e.expiresAt, this.redeemed = e.redeemed, this.storeListingId = e.storeListingId, this.subscriptionPlanId = e.subscriptionPlanId, this.subscriptionPlan = e.subscriptionPlan, this.revoked = e.revoked, this.entitlementBranches = e.entitlementBranches, this.flags = e.flags, this.subscriptionTrial = e.subscriptionTrial, this.promotion = e.promotion, this.giftStyle = e.giftStyle
                }
            }
        },
        843823: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            }), s("222007");
            var n = s("446674"),
                l = s("913144"),
                r = s("27618");
            let i = !1,
                a = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                u = {
                    ...a
                };

            function o() {
                u.affinityUserIds = new Set(u.userAffinities.map(e => e.user_id).filter(e => !r.default.isBlocked(e)))
            }
            class d extends n.default.PersistedStore {
                initialize(e) {
                    this.waitFor(r.default), null != e && (u.userAffinities = e.userAffinities, u.affinityUserIds = new Set(e.affinityUserIds), u.lastFetched = e.lastFetched), this.syncWith([r.default], o)
                }
                needsRefresh() {
                    return Date.now() - u.lastFetched > 864e5
                }
                getFetching() {
                    return i
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
            var c = new d(l.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: s
                    } = e;
                    u.userAffinities = null !== (t = s.user_affinities) && void 0 !== t ? t : [], u.lastFetched = Date.now(), o(), i = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    i = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    i = !1
                },
                LOGOUT: function() {
                    u = {
                        ...a
                    }
                }
            })
        },
        920700: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                CopyInputModes: function() {
                    return f
                },
                default: function() {
                    return E
                }
            }), s("222007");
            var n = s("37983"),
                l = s("884691"),
                r = s("414456"),
                i = s.n(r),
                a = s("77078"),
                u = s("474293"),
                o = s("145131"),
                d = s("782340"),
                c = s("863448");
            let f = {
                DEFAULT: "default",
                SUCCESS: "success",
                ERROR: "error"
            };
            class S extends l.PureComponent {
                select() {
                    var e;
                    null === (e = this.inputRef.current) || void 0 === e || e.select()
                }
                renderInput(e) {
                    var t;
                    let {
                        value: s,
                        mode: l
                    } = this.props, r = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
                    return (0, n.jsx)("input", {
                        className: i((0, u.getClass)(c, "input", l), {
                            [c.inputHidden]: e
                        }),
                        ref: this.inputRef,
                        type: "text",
                        value: s,
                        onClick: this.handleInputClick,
                        readOnly: !0,
                        "aria-labelledby": r
                    })
                }
                render() {
                    let e;
                    let {
                        text: t = d.default.Messages.COPY,
                        mode: s,
                        hideMessage: l,
                        className: r,
                        buttonLook: S
                    } = this.props, E = null != l;
                    switch (s) {
                        case f.SUCCESS:
                            e = a.ButtonColors.GREEN;
                            break;
                        case f.ERROR:
                            e = a.ButtonColors.RED;
                            break;
                        default:
                            e = this.props.buttonColor
                    }
                    return (0, n.jsx)(a.FocusRing, {
                        focusTarget: this.inputRef,
                        ringTarget: this.containerRef,
                        children: (0, n.jsx)("div", {
                            className: i((0, u.getClass)(c, "copyInput", s), r),
                            ref: this.containerRef,
                            children: (0, n.jsxs)(o.default, {
                                className: c.layout,
                                children: [(0, n.jsxs)(o.default, {
                                    className: c.inputWrapper,
                                    children: [this.renderInput(E), E ? (0, n.jsx)("div", {
                                        className: c.hiddenMessage,
                                        children: l
                                    }) : null]
                                }), (0, n.jsx)(o.default, {
                                    shrink: 1,
                                    grow: 0,
                                    style: {
                                        margin: 0
                                    },
                                    children: (0, n.jsx)(a.Button, {
                                        className: c.button,
                                        onClick: this.handleButtonClick,
                                        size: a.ButtonSizes.MIN,
                                        color: e,
                                        look: S,
                                        children: t
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
                            value: t
                        } = this.props;
                        e(t)
                    }, this.handleInputClick = () => {
                        this.select()
                    }
                }
            }
            S.contextType = a.FormContext, S.defaultProps = {
                supportsCopy: !0,
                buttonColor: a.ButtonColors.PRIMARY,
                buttonLook: a.ButtonLooks.FILLED,
                mode: f.DEFAULT
            }, S.Modes = f, S.ButtonColors = a.ButtonColors, S.ButtonLooks = a.ButtonLooks;
            var E = S
        },
        83910: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("469563"),
                r = s("926001"),
                i = s("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, i.default)(a),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: r,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, r.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        95689: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("469563"),
                r = s("578478"),
                i = s("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: s = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, i.default)(a),
                        width: t,
                        height: s,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: r,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: l
                        })
                    })
                }, r.ImageIcon, void 0, {
                    size: 24
                })
        },
        811305: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                Sizes: function() {
                    return T
                },
                default: function() {
                    return m
                }
            }), s("424973"), s("222007");
            var n = s("37983"),
                l = s("884691"),
                r = s("414456"),
                i = s.n(r),
                a = s("627445"),
                u = s.n(a),
                o = s("77078"),
                d = s("506885"),
                c = s("981601"),
                f = s("766274"),
                S = s("697218"),
                E = s("368121"),
                I = s("523096"),
                p = s("587974"),
                _ = s("494101");
            let T = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function h(e, t) {
                let s = e instanceof f.default ? e : null != e ? e.user : null;
                return null != s ? s.id : "user-".concat(t)
            }
            class C extends l.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: s = this.defaultRenderUser,
                        size: l,
                        extraDetail: r
                    } = this.props, i = [], a = e.length === t ? e.length : t - 1, u = this.renderMoreUsers(a), o = 0;
                    for (; o < a && o < e.length;) {
                        var d;
                        let t = null == u && null == r && o === e.length - 1,
                            a = s(e[o], t, o);
                        i.push(t ? (0, n.jsx)("div", {
                            className: _.avatarContainer,
                            children: a
                        }, h(null !== (d = e[o]) && void 0 !== d ? d : null, o)) : (0, n.jsx)(p.default, {
                            className: _.avatarContainerMasked,
                            height: l,
                            width: l,
                            mask: p.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: a
                        }, h(e[o], o))), o++
                    }
                    return null != r ? i.push(r) : null != u && i.push(u), i
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: s,
                        hideMoreUsers: r,
                        renderMoreUsers: i,
                        users: a
                    } = this.props, u = Math.min(e, a.length);
                    if (!r) {
                        if (null != s) {
                            if (s >= t) return (0, n.jsx)(l.Fragment, {
                                children: i("".concat(t, "+"), t)
                            }, "more-users");
                            if (s > a.length) {
                                let e = s - a.length;
                                return (0, n.jsx)(l.Fragment, {
                                    children: i("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (u < a.length) {
                            let e = Math.min(a.length - u, 99);
                            return (0, n.jsx)(l.Fragment, {
                                children: i("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, n.jsx)(E.default, {
                        foreground: _.foreground,
                        className: _.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: s,
                        guildId: l,
                        showUserPopout: r,
                        useFallbackUserForPopout: a
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, E = s.find(e => null != e && e.id === f), I = a && null == S.default.getUser(f);
                    return (0, n.jsx)(o.Popout, {
                        position: "right",
                        preload: null == E ? void 0 : () => (0, d.default)(E.id, E.getAvatarURL(l, 80), {
                            guildId: l
                        }),
                        shouldShow: !0 === r && null != f,
                        fixed: !0,
                        renderPopout: e => (u(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, n.jsx)(c.default, {
                            ...this.props,
                            user: I && null != E ? E : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: s => (0, n.jsxs)("div", {
                            className: i(e, _.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.SIZE_24;
                                switch (e) {
                                    case T.SIZE_16:
                                        return _.size16;
                                    case T.SIZE_24:
                                        return _.size24;
                                    case T.SIZE_32:
                                        return _.size32;
                                    case T.SIZE_56:
                                        return _.size56;
                                    default:
                                        return _.size24
                                }
                            }(t)),
                            ref: this._ref,
                            ...s,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutUserId: null
                    }, this._ref = l.createRef(), this.defaultRenderUser = (e, t, s) => {
                        let {
                            showUserPopout: l,
                            guildId: r,
                            size: i
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, n.jsx)("div", {
                                className: _.emptyUser
                            });
                            {
                                let e = (null != s ? s : 0) % I.default.DEFAULT_AVATARS.length,
                                    t = I.default.DEFAULT_AVATARS[e];
                                return (0, n.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: _.avatar
                                })
                            }
                        }
                        let a = (0, n.jsx)("img", {
                            src: e.getAvatarURL(r, i),
                            alt: e.username,
                            className: _.avatar
                        }, e.id);
                        return l ? (0, n.jsx)(o.Clickable, {
                            className: _.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: a
                        }, e.id) : a
                    }
                }
            }
            C.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, n.jsx)("div", {
                        className: _.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: T.SIZE_24
            };
            var m = C
        }
    }
]);