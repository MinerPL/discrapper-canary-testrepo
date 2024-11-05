n.d(t, {
    Dd: function () {
        return A;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(335131),
    s = n(628952),
    c = n(225657),
    d = n(600164),
    u = n(109213),
    m = n(927699),
    h = n(987716),
    f = n(311821),
    p = n(251660),
    g = n(703656),
    _ = n(594174),
    C = n(855775),
    E = n(987209),
    I = n(563132),
    x = n(409813),
    v = n(614277),
    N = n(981631),
    T = n(474936),
    S = n(388032),
    b = n(829294);
let A = {
    key: x.h8.GIFT_CUSTOMIZATION,
    renderStep: (e) => (0, i.jsx)(Z, { ...e }),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => S.intl.string(S.t['W685+f'])
    }
};
function j(e) {
    let { onStepChange: t, onBackClick: n, showBackButton: r = !1, disabled: l = !1, loading: o = !1 } = e,
        { hasPaymentSources: s } = (0, I.usePaymentContext)(),
        c = s ? x.h8.REVIEW : x.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.Button, {
                onClick: () => t(c),
                disabled: l,
                submitting: o,
                children: S.intl.string(S.t.XiOHRU)
            }),
            r ? (0, i.jsx)(f.Z, { onClick: n }) : null
        ]
    });
}
function Z(e) {
    let { handleStepChange: t, handleClose: n } = e,
        { customGiftMessage: f = '', setCustomGiftMessage: g, giftRecipientError: x, setGiftRecipientError: N, validatingGiftRecipient: A, giftRecipient: Z, recommendedGiftSkuIds: P, giftingOrigin: y, setValidatingGiftRecipient: L } = (0, E.wD)(),
        { selectedSkuId: O, setSelectedSkuId: M, selectedSkuPricePreview: k, paymentSourceId: D, skuPricePreviewsById: B } = (0, I.usePaymentContext)(),
        w = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
        { enabled: U, giftRecommendationAlgorithm: F } = u.G.useExperiment({ location: 'CollectiblesPaymentModalGiftCustomizationStep' }, { autoTrackExposure: !1 }),
        G = U && y === T.Wt.DM_CHANNEL,
        V = F === u.u.POPULAR ? S.intl.string(S.t.Kwgrrq) : S.intl.string(S.t.r1huYW),
        H = async (e, t) => {
            L(!0), null != x && N(), !(await (0, o.B1)(e.id, t)) && N(S.intl.string(S.t['4kgVqa'])), L(!1);
        };
    r.useEffect(() => {
        null != O && null != Z && H(Z, O);
    }, []);
    let z = (e) => {
            null != Z && H(Z, e), M(e);
        },
        W = (e) => {
            let t = B[e],
                n = null != D ? D : C.c,
                r = null != t ? t[n] : null;
            if (null != r)
                return (0, i.jsx)(
                    s.Z,
                    {
                        skuId: e,
                        skuPricePreview: r,
                        isSelected: e === O,
                        onSelect: (e) => z(e),
                        className: b.recommendedGiftPreview
                    },
                    e
                );
        },
        K = () =>
            (0, i.jsx)(m.Z, {
                sectionTitle: S.intl.string(S.t.B3miEx),
                onTextChange: (e) => (null == g ? void 0 : g(e)),
                pendingText: f,
                currentText: f,
                disableThemedBackground: !0,
                className: b.customGiftMessageWrapper,
                innerClassName: b.customGiftMessage
            });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.C3, {
                children: (0, i.jsxs)('div', {
                    className: b.stepBody,
                    children: [
                        G
                            ? (0, i.jsxs)('div', {
                                  className: b.bodyColumnLeft,
                                  children: [
                                      (0, i.jsx)(a.Text, {
                                          variant: 'text-xs/bold',
                                          color: 'header-secondary',
                                          className: b.selectGiftTitle,
                                          children: V.toLocaleUpperCase()
                                      }),
                                      P.map((e) => W(e)),
                                      (0, i.jsx)(R, { handleClose: n }),
                                      ';'
                                  ]
                              })
                            : (0, i.jsx)('div', {
                                  className: b.bodyColumnMiddle,
                                  children: (0, i.jsx)(h.q, { isShopGift: !0 })
                              }),
                        G
                            ? (0, i.jsxs)('div', {
                                  className: b.bodyColumnRight,
                                  children: [
                                      (0, i.jsx)(p.s, { giftRecipient: Z }),
                                      (0, i.jsx)(h.q, {
                                          isShopGift: !0,
                                          className: b.selectedGiftAnimation,
                                          optionsContainerClassName: b.giftAnimationOptionsContainer
                                      }),
                                      K()
                                  ]
                              })
                            : (0, i.jsxs)('div', {
                                  className: b.bodyColumnRight,
                                  children: [
                                      (0, i.jsx)(c.Z, {
                                          selectedSkuId: O,
                                          className: b.sendTo,
                                          validateSelectedGift: H
                                      }),
                                      K(),
                                      (0, i.jsx)(s.Z, {
                                          skuId: O,
                                          skuPricePreview: k,
                                          className: b.giftPreview,
                                          isSelected: !0,
                                          shouldDisplayHeader: !0
                                      })
                                  ]
                              })
                    ]
                })
            }),
            (0, i.jsx)(v.O3, {
                children: (0, i.jsx)(a.ModalFooter, {
                    justify: d.Z.Justify.BETWEEN,
                    align: d.Z.Align.CENTER,
                    children: (0, i.jsx)(j, {
                        onStepChange: t,
                        onBackClick: n,
                        disabled: null != x || null == Z || Z.id === (null == w ? void 0 : w.id) || f.length > T.$n,
                        loading: A
                    })
                })
            })
        ]
    });
}
function R(e) {
    let { handleClose: t } = e;
    return (0, i.jsx)(a.Clickable, {
        onClick: function () {
            t(), (0, g.uL)(N.Z5c.COLLECTIBLES_SHOP);
        },
        children: (0, i.jsxs)('div', {
            className: b.navigateToShopButton,
            children: [
                (0, i.jsxs)('div', {
                    className: b.navigateToShopBody,
                    children: [
                        (0, i.jsx)('div', {
                            className: b.shopIcon,
                            children: (0, i.jsx)(a.ShopIcon, {
                                size: 'custom',
                                width: 18,
                                height: 18,
                                color: 'var(--header-primary)'
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: b.navigateToShopTextWrapper,
                            children: [
                                (0, i.jsx)(a.Text, {
                                    color: 'header-primary',
                                    variant: 'text-md/semibold',
                                    children: S.intl.string(S.t['1+Co8P'])
                                }),
                                (0, i.jsx)(a.Heading, {
                                    color: 'header-secondary',
                                    variant: 'heading-sm/medium',
                                    children: S.intl.string(S.t.nYn52N)
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    children: (0, i.jsx)(a.ArrowLargeRightIcon, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: 'var(--header-primary)'
                    })
                })
            ]
        })
    });
}
