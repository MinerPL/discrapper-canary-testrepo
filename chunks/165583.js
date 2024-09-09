n.d(t, {
    ZP: function () {
        return V;
    },
    dz: function () {
        return G;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    l = n.n(o),
    u = n(913527),
    c = n.n(u),
    d = n(442837),
    _ = n(952265),
    E = n(780384),
    f = n(481060),
    h = n(410030),
    p = n(607070),
    I = n(238302),
    m = n(703656),
    T = n(483444),
    S = n(599250),
    g = n(424218),
    A = n(74538),
    N = n(960048),
    O = n(861990),
    R = n(98278),
    v = n(639119),
    C = n(197115),
    y = n(823188),
    L = n(474936),
    D = n(981631),
    b = n(689938),
    M = n(134072),
    P = n(867250);
function U(e) {
    if (null == e) return null;
    let t = c()(e),
        n = t.diff(c()(), 'h');
    if (n > 24) {
        let e = t.diff(c()(), 'd');
        return b.Z.Messages.PREMIUM_TRIAL_OFFER_ENDS_DAYS.format({ numDays: e });
    }
    if (n > 1) return b.Z.Messages.PREMIUM_TRIAL_OFFER_ENDS_HOURS.format({ numHours: n });
    let r = t.diff(c()(), 'minutes');
    return b.Z.Messages.PREMIUM_TRIAL_OFFER_ENDS_MINUTES.format({ numMinutes: r });
}
function w(e) {
    var t, n, i;
    let { className: a, children: o, withBottomMargin: l, discountOffer: u, trialOffer: c } = e,
        d = null !== (t = null == c ? void 0 : c.expires_at) && void 0 !== t ? t : null == u ? void 0 : u.expires_at,
        _ = null == c ? void 0 : c.subscription_trial,
        E = null !== (i = null !== (n = e.subscriptionTier) && void 0 !== n ? n : null == _ ? void 0 : _.sku_id) && void 0 !== i ? i : L.Si.TIER_2;
    return (0, r.jsxs)('div', {
        className: s()(a, M.gradientUpsellWrapper, {
            [M.gradientUpsellWrapperTier0]: E === L.Si.TIER_0,
            [M.gradientUpsellWrapperTier2]: E === L.Si.TIER_2,
            [M.gradientUpsellWrapperWithBottomMargin]: l
        }),
        children: [
            (0, r.jsxs)('div', {
                className: M.logo,
                children: [
                    (0, r.jsx)(f.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: M.logoIcon
                    }),
                    E === L.Si.TIER_0 && (0, r.jsx)(S.Z, { className: M.logoWordmark }),
                    E === L.Si.TIER_2 && (0, r.jsx)(T.Z, { className: M.logoWordmark })
                ]
            }),
            (0, r.jsx)(f.Text, {
                variant: 'text-md/medium',
                className: M.copy,
                color: 'none',
                children: o
            }),
            (0, r.jsx)(y.Cy, {
                text: null != u ? b.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({ percent: u.discount.amount }) : b.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                colorOptions: E === L.Si.TIER_0 ? y.VE.PREMIUM_TIER_0_WHITE_FILL : y.VE.PREMIUM_TIER_2_WHITE_FILL
            }),
            (0, r.jsx)(f.Text, {
                variant: 'eyebrow',
                className: M.countdownText,
                children: U(d)
            })
        ]
    });
}
function x(e) {
    var t, n;
    let { className: a, onClose: s, subscriptionTier: o, analyticsLocationObject: l, trialOffer: u, discountOffer: c } = e,
        [d, _] = i.useState(!1),
        E =
            null != c
                ? b.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: c.discount.amount })
                : (0, A.Rt)({
                      intervalType: null == u ? void 0 : null === (t = u.subscription_trial) || void 0 === t ? void 0 : t.interval,
                      intervalCount: null == u ? void 0 : null === (n = u.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                  });
    return (0, r.jsx)(C.Z, {
        className: a,
        subscriptionTier: o,
        submitting: d,
        premiumModalAnalyticsLocation: l,
        size: f.Button.Sizes.MEDIUM,
        color: f.Button.Colors.GREEN,
        onClick: () => {
            _(!0);
        },
        onSubscribeModalClose: (e) => {
            _(!1), e && (null == s || s());
        },
        buttonText: E
    });
}
function G(e) {
    var t, n;
    let i = null === (t = (0, v.N)()) || void 0 === t ? void 0 : t.subscription_trial,
        a = null !== (n = null == i ? void 0 : i.sku_id) && void 0 !== n ? n : L.Si.TIER_2;
    return (0, r.jsx)(f.Text, {
        variant: 'text-xs/bold',
        className: s()(M.trialBadge, e.className, {
            [M.trialBadgeGradientTier0]: a === L.Si.TIER_0,
            [M.trialBadgeGradientTier2]: a === L.Si.TIER_2
        }),
        color: 'none',
        children: (0, A.a5)({
            intervalType: null == i ? void 0 : i.interval,
            intervalCount: null == i ? void 0 : i.interval_count
        })
    });
}
function k(e) {
    let { subscriptionTier: t, onClose: n, analyticsLocationObject: i, trialOffer: a, discountOffer: s } = e;
    return (0, r.jsxs)('div', {
        className: M.footer,
        children: [
            (0, r.jsx)(f.Button, {
                onClick: n,
                size: f.Button.Sizes.SMALL,
                look: f.ButtonLooks.BLANK,
                className: M.cancelButton,
                children: b.Z.Messages.CLOSE
            }),
            (0, r.jsx)(x, {
                className: M.subscribeButton,
                subscriptionTier: t,
                analyticsLocationObject: i,
                onClose: n,
                discountOffer: s,
                trialOffer: a
            })
        ]
    });
}
function B(e) {
    let { onClose: t, analyticsLocationObject: n } = e,
        i = (0, v.N)();
    return (0, r.jsxs)('div', {
        className: M.tryOutUpsellContainer,
        children: [
            (0, r.jsx)(y.Cy, {
                className: M.topRimPill,
                text: b.Z.Messages.PREMIUM_FREE_NITRO_TRIAL_TEXT,
                colorOptions: y.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
            }),
            (0, r.jsx)(f.Heading, {
                variant: 'heading-md/semibold',
                color: 'text-normal',
                children: b.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_TRIAL_DESCRIPTION.format({ onClick: R.z })
            }),
            (0, r.jsx)(x, {
                trialOffer: i,
                className: M.subscribeButtonWide,
                subscriptionTier: L.Si.TIER_2,
                analyticsLocationObject: n,
                onClose: t
            }),
            (0, r.jsx)(f.Text, {
                variant: 'eyebrow',
                className: M.countdownTextInSetting,
                children: U(null == i ? void 0 : i.expires_at)
            })
        ]
    });
}
function F(e) {
    let { headingText: t, context: n, children: i, trialOffer: a, discountOffer: s } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(f.Heading, {
                className: M.__invalid_header,
                variant: 'heading-xl/semibold',
                children: t
            }),
            null != n &&
                (0, r.jsx)(f.Text, {
                    className: M.context,
                    variant: 'text-md/normal',
                    children: n
                }),
            (0, r.jsx)(w, {
                trialOffer: a,
                discountOffer: s,
                children: i
            })
        ]
    });
}
function V(e) {
    let { headingText: t, context: i, children: a, onClose: o, type: u, subscriptionTier: c, analyticsLocationObject: T, trialOffer: S, discountOffer: R } = e,
        v = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
        C = (0, h.ZP)(),
        y = (0, g.BU)(O.zz / g.XD, { useKibibytes: !0 });
    switch (u) {
        case L.cd.EMPTY_STICKER_PICKER_UPSELL:
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(f.Clickable, {
                        className: M.upsellClose,
                        onClick: o,
                        children: (0, r.jsx)(f.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: M.contentContainer,
                        children: [
                            (0, r.jsx)('img', {
                                className: M.upsellImage,
                                src: P,
                                alt: b.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                            }),
                            (0, r.jsx)(f.Heading, {
                                variant: 'heading-xl/bold',
                                color: 'header-primary',
                                children: b.Z.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
                            }),
                            (0, r.jsx)(w, {
                                trialOffer: S,
                                discountOffer: R,
                                children: b.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                    planName: (0, A.jP)(c),
                                    onClick: () => (0, m.uL)(D.Z5c.APPLICATION_STORE)
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(k, {
                        subscriptionTier: c,
                        onClose: o,
                        analyticsLocationObject: {
                            section: D.jXE.EXPRESSION_PICKER,
                            object: D.qAy.BUTTON_CTA
                        },
                        trialOffer: S,
                        discountOffer: R
                    })
                ]
            });
        case L.cd.STICKER_PICKER_UPSELL:
            return (
                l()(null != a, 'You must specify children for this upsell type'),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: M.contentContainer,
                            children: [
                                (0, r.jsx)('img', {
                                    className: M.upsellImage,
                                    src: P,
                                    alt: b.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                                }),
                                (0, r.jsx)(f.Heading, {
                                    variant: 'heading-xl/bold',
                                    color: 'header-primary',
                                    children: b.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
                                }),
                                (0, r.jsx)(w, {
                                    trialOffer: S,
                                    discountOffer: R,
                                    children: b.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                        planName: (0, A.jP)(c),
                                        onClick: () => (0, m.uL)(D.Z5c.APPLICATION_STORE)
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)(k, {
                            subscriptionTier: c,
                            onClose: o,
                            analyticsLocationObject: {
                                section: D.jXE.EXPRESSION_PICKER,
                                object: D.qAy.BUTTON_CTA
                            },
                            trialOffer: S,
                            discountOffer: R
                        })
                    ]
                })
            );
        case L.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
            l()(null != a, 'You must specify children for this upsell type');
            let U = (0, E.ap)(C) ? n(537381) : n(341048);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)('div', {
                        className: M.contentContainer,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                className: M.upsellImage,
                                src: U
                            }),
                            (0, r.jsx)(f.Heading, {
                                variant: 'heading-xl/bold',
                                color: 'header-primary',
                                children: b.Z.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
                            }),
                            (0, r.jsx)(w, {
                                trialOffer: S,
                                discountOffer: R,
                                children: b.Z.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL_NO_BOLD_V2.format({
                                    planName: (0, A.jP)(c),
                                    onClick: () => (0, m.uL)(D.Z5c.APPLICATION_STORE)
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(k, {
                        subscriptionTier: c,
                        onClose: o,
                        analyticsLocationObject: {
                            section: D.jXE.EMOJI_PICKER_POPOUT,
                            object: D.qAy.BUTTON_CTA
                        },
                        trialOffer: S,
                        discountOffer: R
                    })
                ]
            });
        case L.cd.UPLOAD_ERROR_UPSELL:
        case L.cd.BURST_REACTION_UPSELL:
        case L.cd.STREAM_QUALITY_UPSELL:
        case L.cd.MESSAGE_LENGTH_UPSELL:
            let G;
            switch (u) {
                case L.cd.UPLOAD_ERROR_UPSELL:
                    G = b.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_WITH_SIZE_AND_ACTION_V2.format({
                        planName: (0, A.jP)(c),
                        premiumMaxSize: c === L.Si.TIER_0 ? b.Z.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED : y,
                        onClick: () => {
                            (0, m.uL)(D.Z5c.APPLICATION_STORE), null == o || o();
                        }
                    });
                    break;
                case L.cd.BURST_REACTION_UPSELL:
                    G = b.Z.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                        planName: (0, A.jP)(c),
                        onClick: () => {
                            (0, m.uL)(D.Z5c.APPLICATION_STORE), null == o || o();
                        }
                    });
                    break;
                case L.cd.STREAM_QUALITY_UPSELL:
                    G = b.Z.Messages.STREAM_PREMIUM_UPSELL_WITH_ACTION.format({
                        onClick: () => {
                            (0, m.uL)(D.Z5c.APPLICATION_STORE), null == o || o(), (0, _.pT)();
                        }
                    });
                    break;
                case L.cd.MESSAGE_LENGTH_UPSELL:
                    G = b.Z.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                        premiumMaxMessageLength: D.en1,
                        onClick: () => {
                            (0, m.uL)(D.Z5c.APPLICATION_STORE), null == o || o();
                        }
                    });
            }
            return (
                l()(null != G, 'There must be some upsell context'),
                (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)('div', {
                        className: M.contentContainer,
                        children: [
                            (0, r.jsx)(f.Heading, {
                                variant: 'heading-xl/bold',
                                color: 'header-primary',
                                children: t
                            }),
                            (0, r.jsx)(f.Text, {
                                variant: 'text-md/normal',
                                children: i
                            }),
                            (0, r.jsx)(w, {
                                trialOffer: S,
                                discountOffer: R,
                                children: G
                            })
                        ]
                    })
                })
            );
        case L.cd.BURST_REACTION_QUICK_ACTION_UPSELL:
            return (0, r.jsxs)('div', {
                className: M.contentContainer,
                children: [
                    (0, r.jsx)(f.Heading, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        children: t
                    }),
                    (0, r.jsx)(f.Text, {
                        variant: 'text-md/normal',
                        children: i
                    }),
                    (0, r.jsx)(w, {
                        trialOffer: S,
                        discountOffer: R,
                        children: b.Z.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                            planName: (0, A.jP)(c),
                            onClick: () => (0, m.uL)(D.Z5c.APPLICATION_STORE)
                        })
                    }),
                    (0, r.jsx)(x, {
                        className: M.upsellButton,
                        subscriptionTier: c,
                        analyticsLocationObject: T,
                        onClose: o,
                        trialOffer: S,
                        discountOffer: R
                    })
                ]
            });
        case L.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
            return (
                l()(null != a, 'You must specify children for this upsell type'),
                (0, r.jsx)(w, {
                    trialOffer: S,
                    discountOffer: R,
                    children: b.Z.Messages.CLIENT_THEMES_EDITOR_UPSELL.format({
                        onClick: () => {
                            (0, m.uL)(D.Z5c.APPLICATION_STORE), (0, I.Mo)();
                        }
                    })
                })
            );
        case L.cd.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
            return (0, r.jsxs)('div', {
                className: s()(M.messageLengthUpsellContainer, { [M.messageLengthUpsellAppearAnimation]: !v }),
                children: [
                    (0, r.jsx)(f.Text, {
                        variant: 'text-lg/bold',
                        color: 'status-danger',
                        children: i
                    }),
                    (0, r.jsx)(f.Heading, {
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        className: M.messageLengthUpsellHeader,
                        children: b.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT_NO_COUNT
                    }),
                    (0, r.jsx)('div', { className: M.divider }),
                    (0, r.jsx)(w, {
                        trialOffer: S,
                        discountOffer: R,
                        className: M.messageLengthBrandedContainer,
                        subscriptionTier: c,
                        children: b.Z.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                            premiumMaxMessageLength: D.en1,
                            onClick: () => {
                                (0, m.uL)(D.Z5c.APPLICATION_STORE), null == o || o();
                            }
                        })
                    }),
                    (0, r.jsx)(x, {
                        subscriptionTier: c,
                        analyticsLocationObject: T,
                        onClose: o,
                        trialOffer: S,
                        discountOffer: R
                    })
                ]
            });
        case L.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL:
        case L.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
            return (0, r.jsx)(B, {});
        case L.cd.GUILD_CAP_MODAL_UPSELL:
        case L.cd.PREMIUM_GUILD_IDENTITY_MODAL:
        case L.cd.CUSTOM_PROFILE_UPSELL:
        case L.cd.VIDEO_BACKGROUNDS_MODAL:
        case L.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
        case L.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
        case L.cd.EMOJI_PICKER_EMOJI_CLICKED:
        case L.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL:
            return (0, r.jsx)(F, {
                trialOffer: S,
                discountOffer: R,
                headingText: t,
                context: i,
                children: a
            });
        default:
            return (
                N.Z.captureMessage('Possible mishandling of a PremiumUpsellType: '.concat(u)),
                (0, r.jsx)(F, {
                    headingText: t,
                    context: i,
                    children: a,
                    trialOffer: S,
                    discountOffer: R
                })
            );
    }
}
