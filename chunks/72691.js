n.r(r), n.d(r, {
    default: function () {
        return A;
    }
});
var o = n(735250), l = n(470079), s = n(120356), t = n.n(s), c = n(442837), i = n(481060), a = n(570140), u = n(355467), d = n(821849), _ = n(15640), p = n(598), m = n(409813), f = n(104494), E = n(639119), I = n(165583), N = n(197115), S = n(185139), C = n(263954), h = n(706454), P = n(853872), T = n(930153), R = n(74538), x = n(937615), M = n(981631), b = n(474936), g = n(689938), j = n(672574);
let L = e => {
        let {locale: r} = e;
        return (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(C.Z, {
                    icon: i.StickerIcon,
                    iconClassName: j.iconColorPurple,
                    description: g.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                }),
                (0, o.jsx)(C.Z, {
                    icon: i.BoostTier2SimpleIcon,
                    iconClassName: j.iconColorPink,
                    description: g.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
                        numGuildSubscriptions: b.cb,
                        discountPercent: (0, T.T3)(r, b.Rr / 100)
                    })
                }),
                (0, o.jsx)(C.Z, {
                    icon: i.ReactionIcon,
                    iconClassName: j.iconColorYellow,
                    description: g.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
                })
            ]
        });
    }, v = e => {
        let {
                trialOffer: r,
                discountOffer: l,
                isLoading: s,
                price: a,
                onClose: u
            } = e, d = (0, c.e7)([h.default], () => h.default.locale), _ = null != r || null != l;
        return (0, o.jsxs)('div', {
            className: j.wrapper,
            children: [
                (0, o.jsx)(i.ModalCloseButton, {
                    onClick: u,
                    className: j.closeButton
                }),
                _ && (0, o.jsx)(I.dz, { className: j.premiumTrialBadge }),
                (0, o.jsx)('img', {
                    className: t()(j.heroImage, { [j.heroImageWithTrialOffer]: _ }),
                    src: n(178632),
                    alt: ''
                }),
                s ? (0, o.jsx)(i.Spinner, {}) : (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            className: j.heading,
                            children: null == a ? (0, o.jsx)(i.Spinner, { type: i.Spinner.Type.PULSING_ELLIPSIS }) : g.Z.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({ monthlyPrice: (0, x.T4)(a.amount, a.currency) })
                        }),
                        (0, o.jsx)('div', {
                            className: j.perks,
                            children: (0, o.jsx)(L, { locale: d })
                        })
                    ]
                })
            ]
        });
    }, y = e => {
        let {
                trialOffer: r,
                discountOffer: n,
                onClose: l
            } = e, s = { section: M.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL };
        return (0, o.jsxs)(i.ModalFooter, {
            className: j.footer,
            children: [
                (0, o.jsx)(i.Button, {
                    onClick: l,
                    size: i.Button.Sizes.SMALL,
                    color: i.Button.Colors.PRIMARY,
                    look: i.Button.Looks.LINK,
                    children: g.Z.Messages.CLOSE
                }),
                (0, o.jsx)(N.Z, {
                    buttonText: null != r || null != n ? g.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
                    premiumModalAnalyticsLocation: s,
                    subscriptionTier: b.Si.TIER_2,
                    size: i.Button.Sizes.SMALL,
                    color: i.Button.Colors.GREEN,
                    onClick: () => {
                        l();
                    }
                })
            ]
        });
    };
function A(e) {
    let {
            onClose: r,
            ...n
        } = e, s = (0, _.V)(), t = (0, c.e7)([P.Z], () => P.Z.hasFetchedPaymentSources), I = s && t, N = (0, E.N)(), C = (0, f.Ng)();
    l.useEffect(() => {
        a.Z.wait(() => {
            (0, u.tZ)(), (0, d.Y2)(null, null, M.JjL.DISCOVERY);
        });
    }, []);
    let h = I ? R.ZP.getDefaultPrice(b.Xh.PREMIUM_MONTH_TIER_2) : null;
    return (0, o.jsx)(p.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, o.jsx)(i.ModalRoot, {
            ...n,
            'aria-labelledby': 'sticker-pack-premium-upsell-modal-header',
            children: (0, o.jsx)(S.Z, {
                hideBreadcrumbs: !0,
                body: (0, o.jsx)(v, {
                    trialOffer: N,
                    discountOffer: C,
                    isLoading: !I,
                    price: h,
                    onClose: r
                }),
                footer: (0, o.jsx)(y, {
                    trialOffer: N,
                    discountOffer: C,
                    onClose: r
                }),
                steps: [m.h8.PREMIUM_UPSELL],
                currentStep: m.h8.PREMIUM_UPSELL
            })
        })
    });
}
