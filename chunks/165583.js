n.d(t, {
    ZP: function () {
        return B;
    },
    dz: function () {
        return w;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(512722), l = n.n(s), u = n(913527), c = n.n(u), d = n(442837), _ = n(952265), E = n(780384), f = n(481060), h = n(410030), p = n(607070), m = n(238302), I = n(703656), T = n(483444), g = n(599250), S = n(74538), A = n(960048), N = n(98278), v = n(639119), O = n(197115), R = n(823188), C = n(474936), y = n(981631), D = n(689938), L = n(141488), b = n(867250);
function M(e) {
    if (null == e)
        return null;
    let t = c()(e), n = t.diff(c()(), 'h');
    if (n > 24) {
        let e = t.diff(c()(), 'd');
        return D.Z.Messages.PREMIUM_TRIAL_OFFER_ENDS_DAYS.format({ numDays: e });
    }
    if (n > 1)
        return D.Z.Messages.PREMIUM_TRIAL_OFFER_ENDS_HOURS.format({ numHours: n });
    let r = t.diff(c()(), 'minutes');
    return D.Z.Messages.PREMIUM_TRIAL_OFFER_ENDS_MINUTES.format({ numMinutes: r });
}
function P(e) {
    var t, n, i;
    let {
            className: a,
            children: s,
            withBottomMargin: l,
            discountOffer: u,
            trialOffer: c
        } = e, d = null !== (t = null == c ? void 0 : c.expires_at) && void 0 !== t ? t : null == u ? void 0 : u.expires_at, _ = null == c ? void 0 : c.subscription_trial, E = null !== (i = null !== (n = e.subscriptionTier) && void 0 !== n ? n : null == _ ? void 0 : _.sku_id) && void 0 !== i ? i : C.Si.TIER_2;
    return (0, r.jsxs)('div', {
        className: o()(a, L.gradientUpsellWrapper, {
            [L.gradientUpsellWrapperTier0]: E === C.Si.TIER_0,
            [L.gradientUpsellWrapperTier2]: E === C.Si.TIER_2,
            [L.gradientUpsellWrapperWithBottomMargin]: l
        }),
        children: [
            (0, r.jsxs)('div', {
                className: L.logo,
                children: [
                    (0, r.jsx)(f.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: L.logoIcon
                    }),
                    E === C.Si.TIER_0 && (0, r.jsx)(g.Z, { className: L.logoWordmark }),
                    E === C.Si.TIER_2 && (0, r.jsx)(T.Z, { className: L.logoWordmark })
                ]
            }),
            (0, r.jsx)(f.Text, {
                variant: 'text-md/medium',
                className: L.copy,
                color: 'none',
                children: s
            }),
            (0, r.jsx)(R.Cy, {
                text: null != u ? D.Z.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({ percent: u.discount.amount }) : D.Z.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                colorOptions: E === C.Si.TIER_0 ? R.VE.PREMIUM_TIER_0_WHITE_FILL : R.VE.PREMIUM_TIER_2_WHITE_FILL
            }),
            (0, r.jsx)(f.Text, {
                variant: 'eyebrow',
                className: L.countdownText,
                children: M(d)
            })
        ]
    });
}
function U(e) {
    var t, n;
    let {
            className: a,
            onClose: o,
            subscriptionTier: s,
            analyticsLocationObject: l,
            trialOffer: u,
            discountOffer: c
        } = e, [d, _] = i.useState(!1), E = null != c ? D.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: c.discount.amount }) : (0, S.Rt)({
            intervalType: null == u ? void 0 : null === (t = u.subscription_trial) || void 0 === t ? void 0 : t.interval,
            intervalCount: null == u ? void 0 : null === (n = u.subscription_trial) || void 0 === n ? void 0 : n.interval_count
        });
    return (0, r.jsx)(O.Z, {
        className: a,
        subscriptionTier: s,
        trialId: null == u ? void 0 : u.trial_id,
        submitting: d,
        premiumModalAnalyticsLocation: l,
        size: f.Button.Sizes.MEDIUM,
        color: f.Button.Colors.GREEN,
        onClick: () => {
            _(!0);
        },
        onSubscribeModalClose: e => {
            _(!1), e && (null == o || o());
        },
        buttonText: E
    });
}
function w(e) {
    var t, n;
    let i = null === (t = (0, v.N)()) || void 0 === t ? void 0 : t.subscription_trial, a = null !== (n = null == i ? void 0 : i.sku_id) && void 0 !== n ? n : C.Si.TIER_2;
    return (0, r.jsx)(f.Text, {
        variant: 'text-xs/bold',
        className: o()(L.trialBadge, e.className, {
            [L.trialBadgeGradientTier0]: a === C.Si.TIER_0,
            [L.trialBadgeGradientTier2]: a === C.Si.TIER_2
        }),
        color: 'none',
        children: (0, S.a5)({
            intervalType: null == i ? void 0 : i.interval,
            intervalCount: null == i ? void 0 : i.interval_count
        })
    });
}
function x(e) {
    let {
        subscriptionTier: t,
        onClose: n,
        analyticsLocationObject: i,
        trialOffer: a,
        discountOffer: o
    } = e;
    return (0, r.jsxs)('div', {
        className: L.footer,
        children: [
            (0, r.jsx)(f.Button, {
                onClick: n,
                size: f.Button.Sizes.SMALL,
                look: f.ButtonLooks.BLANK,
                className: L.cancelButton,
                children: D.Z.Messages.CLOSE
            }),
            (0, r.jsx)(U, {
                className: L.subscribeButton,
                subscriptionTier: t,
                analyticsLocationObject: i,
                onClose: n,
                discountOffer: o,
                trialOffer: a
            })
        ]
    });
}
function G(e) {
    let {
            onClose: t,
            analyticsLocationObject: n
        } = e, i = (0, v.N)();
    return (0, r.jsxs)('div', {
        className: L.tryOutUpsellContainer,
        children: [
            (0, r.jsx)(R.Cy, {
                className: L.topRimPill,
                text: D.Z.Messages.PREMIUM_FREE_NITRO_TRIAL_TEXT,
                colorOptions: R.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
            }),
            (0, r.jsx)(f.Heading, {
                variant: 'heading-md/semibold',
                color: 'text-normal',
                children: D.Z.Messages.USER_SETTINGS_TRY_OUT_PREMIUM_TRIAL_DESCRIPTION.format({ onClick: N.z })
            }),
            (0, r.jsx)(U, {
                trialOffer: i,
                className: L.subscribeButtonWide,
                subscriptionTier: C.Si.TIER_2,
                analyticsLocationObject: n,
                onClose: t
            }),
            (0, r.jsx)(f.Text, {
                variant: 'eyebrow',
                className: L.countdownTextInSetting,
                children: M(null == i ? void 0 : i.expires_at)
            })
        ]
    });
}
function k(e) {
    let {
        headingText: t,
        context: n,
        children: i,
        trialOffer: a,
        discountOffer: o
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(f.Heading, {
                className: L.__invalid_header,
                variant: 'heading-xl/semibold',
                children: t
            }),
            null != n && (0, r.jsx)(f.Text, {
                className: L.context,
                variant: 'text-md/normal',
                children: n
            }),
            (0, r.jsx)(P, {
                trialOffer: a,
                discountOffer: o,
                children: i
            })
        ]
    });
}
function B(e) {
    let {
            headingText: t,
            context: i,
            children: a,
            onClose: s,
            type: u,
            subscriptionTier: c,
            analyticsLocationObject: T,
            trialOffer: g,
            discountOffer: N
        } = e, v = (0, d.e7)([p.Z], () => p.Z.useReducedMotion), O = (0, h.ZP)();
    switch (u) {
    case C.cd.EMPTY_STICKER_PICKER_UPSELL:
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(f.Clickable, {
                    className: L.upsellClose,
                    onClick: s,
                    children: (0, r.jsx)(f.CloseSmallIcon, {
                        size: 'md',
                        color: 'currentColor'
                    })
                }),
                (0, r.jsxs)('div', {
                    className: L.contentContainer,
                    children: [
                        (0, r.jsx)('img', {
                            className: L.upsellImage,
                            src: b,
                            alt: D.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                        }),
                        (0, r.jsx)(f.Heading, {
                            variant: 'heading-xl/bold',
                            color: 'header-primary',
                            children: D.Z.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
                        }),
                        (0, r.jsx)(P, {
                            trialOffer: g,
                            discountOffer: N,
                            children: D.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                planName: (0, S.jP)(c),
                                onClick: () => (0, I.uL)(y.Z5c.APPLICATION_STORE)
                            })
                        })
                    ]
                }),
                (0, r.jsx)(x, {
                    subscriptionTier: c,
                    onClose: s,
                    analyticsLocationObject: {
                        section: y.jXE.EXPRESSION_PICKER,
                        object: y.qAy.BUTTON_CTA
                    },
                    trialOffer: g,
                    discountOffer: N
                })
            ]
        });
    case C.cd.STICKER_PICKER_UPSELL:
        return l()(null != a, 'You must specify children for this upsell type'), (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: L.contentContainer,
                    children: [
                        (0, r.jsx)('img', {
                            className: L.upsellImage,
                            src: b,
                            alt: D.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                        }),
                        (0, r.jsx)(f.Heading, {
                            variant: 'heading-xl/bold',
                            color: 'header-primary',
                            children: D.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
                        }),
                        (0, r.jsx)(P, {
                            trialOffer: g,
                            discountOffer: N,
                            children: D.Z.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION_NO_BOLD_V2.format({
                                planName: (0, S.jP)(c),
                                onClick: () => (0, I.uL)(y.Z5c.APPLICATION_STORE)
                            })
                        })
                    ]
                }),
                (0, r.jsx)(x, {
                    subscriptionTier: c,
                    onClose: s,
                    analyticsLocationObject: {
                        section: y.jXE.EXPRESSION_PICKER,
                        object: y.qAy.BUTTON_CTA
                    },
                    trialOffer: g,
                    discountOffer: N
                })
            ]
        });
    case C.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI:
        l()(null != a, 'You must specify children for this upsell type');
        let R = (0, E.ap)(O) ? n(537381) : n(341048);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: L.contentContainer,
                    children: [
                        (0, r.jsx)('img', {
                            alt: '',
                            className: L.upsellImage,
                            src: R
                        }),
                        (0, r.jsx)(f.Heading, {
                            variant: 'heading-xl/bold',
                            color: 'header-primary',
                            children: D.Z.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
                        }),
                        (0, r.jsx)(P, {
                            trialOffer: g,
                            discountOffer: N,
                            children: D.Z.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL_NO_BOLD_V2.format({
                                planName: (0, S.jP)(c),
                                onClick: () => (0, I.uL)(y.Z5c.APPLICATION_STORE)
                            })
                        })
                    ]
                }),
                (0, r.jsx)(x, {
                    subscriptionTier: c,
                    onClose: s,
                    analyticsLocationObject: {
                        section: y.jXE.EMOJI_PICKER_POPOUT,
                        object: y.qAy.BUTTON_CTA
                    },
                    trialOffer: g,
                    discountOffer: N
                })
            ]
        });
    case C.cd.UPLOAD_ERROR_UPSELL:
    case C.cd.BURST_REACTION_UPSELL:
    case C.cd.STREAM_QUALITY_UPSELL:
    case C.cd.MESSAGE_LENGTH_UPSELL:
        let M;
        switch (u) {
        case C.cd.UPLOAD_ERROR_UPSELL:
            M = D.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_WITH_SIZE_AND_ACTION_V2.format({
                planName: (0, S.jP)(c),
                premiumMaxSize: c === C.Si.TIER_0 ? D.Z.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED : D.Z.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE,
                onClick: () => {
                    (0, I.uL)(y.Z5c.APPLICATION_STORE), null == s || s();
                }
            });
            break;
        case C.cd.BURST_REACTION_UPSELL:
            M = D.Z.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                planName: (0, S.jP)(c),
                onClick: () => {
                    (0, I.uL)(y.Z5c.APPLICATION_STORE), null == s || s();
                }
            });
            break;
        case C.cd.STREAM_QUALITY_UPSELL:
            M = D.Z.Messages.STREAM_PREMIUM_UPSELL_WITH_ACTION.format({
                onClick: () => {
                    (0, I.uL)(y.Z5c.APPLICATION_STORE), null == s || s(), (0, _.pT)();
                }
            });
            break;
        case C.cd.MESSAGE_LENGTH_UPSELL:
            M = D.Z.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                premiumMaxMessageLength: y.en1,
                onClick: () => {
                    (0, I.uL)(y.Z5c.APPLICATION_STORE), null == s || s();
                }
            });
        }
        return l()(null != M, 'There must be some upsell context'), (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)('div', {
                className: L.contentContainer,
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
                    (0, r.jsx)(P, {
                        trialOffer: g,
                        discountOffer: N,
                        children: M
                    })
                ]
            })
        });
    case C.cd.BURST_REACTION_QUICK_ACTION_UPSELL:
        return (0, r.jsxs)('div', {
            className: L.contentContainer,
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
                (0, r.jsx)(P, {
                    trialOffer: g,
                    discountOffer: N,
                    children: D.Z.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_CLICK_V2.format({
                        planName: (0, S.jP)(c),
                        onClick: () => (0, I.uL)(y.Z5c.APPLICATION_STORE)
                    })
                }),
                (0, r.jsx)(U, {
                    className: L.upsellButton,
                    subscriptionTier: c,
                    analyticsLocationObject: T,
                    onClose: s,
                    trialOffer: g,
                    discountOffer: N
                })
            ]
        });
    case C.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT:
        return l()(null != a, 'You must specify children for this upsell type'), (0, r.jsx)(P, {
            trialOffer: g,
            discountOffer: N,
            children: D.Z.Messages.CLIENT_THEMES_EDITOR_UPSELL.format({
                onClick: () => {
                    (0, I.uL)(y.Z5c.APPLICATION_STORE), (0, m.my)();
                }
            })
        });
    case C.cd.MESSAGE_LENGTH_IN_EDITOR_UPSELL:
        return (0, r.jsxs)('div', {
            className: o()(L.messageLengthUpsellContainer, { [L.messageLengthUpsellAppearAnimation]: !v }),
            children: [
                (0, r.jsx)(f.Text, {
                    variant: 'text-lg/bold',
                    color: 'status-danger',
                    children: i
                }),
                (0, r.jsx)(f.Heading, {
                    variant: 'heading-lg/extrabold',
                    color: 'header-primary',
                    className: L.messageLengthUpsellHeader,
                    children: D.Z.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT_NO_COUNT
                }),
                (0, r.jsx)('div', { className: L.divider }),
                (0, r.jsx)(P, {
                    trialOffer: g,
                    discountOffer: N,
                    className: L.messageLengthBrandedContainer,
                    subscriptionTier: c,
                    children: D.Z.Messages.PREMIUM_CHAT_PERKS_MAX_MESSAGE_LENGTH_UPSELL.format({
                        premiumMaxMessageLength: y.en1,
                        onClick: () => {
                            (0, I.uL)(y.Z5c.APPLICATION_STORE), null == s || s();
                        }
                    })
                }),
                (0, r.jsx)(U, {
                    subscriptionTier: c,
                    analyticsLocationObject: T,
                    onClose: s,
                    trialOffer: g,
                    discountOffer: N
                })
            ]
        });
    case C.cd.CUSTOM_PROFILE_TRY_OUT_UPSELL:
    case C.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL:
        return (0, r.jsx)(G, {});
    case C.cd.GUILD_CAP_MODAL_UPSELL:
    case C.cd.PREMIUM_GUILD_IDENTITY_MODAL:
    case C.cd.CUSTOM_PROFILE_UPSELL:
    case C.cd.VIDEO_BACKGROUNDS_MODAL:
    case C.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED:
    case C.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED:
    case C.cd.EMOJI_PICKER_EMOJI_CLICKED:
    case C.cd.CUSTOM_NOTIFICATION_SOUNDS_UPSELL:
        return (0, r.jsx)(k, {
            trialOffer: g,
            discountOffer: N,
            headingText: t,
            context: i,
            children: a
        });
    default:
        return A.Z.captureMessage('Possible mishandling of a PremiumUpsellType: '.concat(u)), (0, r.jsx)(k, {
            headingText: t,
            context: i,
            children: a,
            trialOffer: g,
            discountOffer: N
        });
    }
}
