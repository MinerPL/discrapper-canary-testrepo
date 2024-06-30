t.d(n, {
    G: function () {
        return _;
    },
    U: function () {
        return S;
    }
});
var i = t(735250);
t(470079);
var l = t(557533), r = t.n(l), s = t(789978), o = t(368072), a = t(777207), c = t(752843), d = t(330711), u = t(948469), m = t(216297);
function S(e) {
    let {
        description: n,
        imgSrc: t,
        PurchaseButton: l,
        onPurchase: S,
        subscriptionType: _,
        title: p,
        onDetails: f,
        benefitItems: h,
        benefitsSummary: I
    } = e;
    return (0, i.jsx)(s.tE, {
        children: (0, i.jsxs)('div', {
            className: r()(u.container, m.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != f ? f() : null != S && S();
            },
            children: [
                (0, i.jsxs)('div', {
                    className: u.card,
                    children: [
                        null != _ && (0, i.jsx)(c.Z, { type: _ }),
                        (0, i.jsxs)('div', {
                            className: u.body,
                            children: [
                                (0, i.jsx)(a.x, {
                                    tag: 'div',
                                    variant: 'heading-lg/semibold',
                                    children: p
                                }),
                                (0, i.jsx)('div', {
                                    className: u.image,
                                    children: null != t ? (0, i.jsx)('img', {
                                        src: t.toString(),
                                        alt: ''
                                    }) : (0, i.jsx)(o.V, {
                                        color: 'white',
                                        size: 'custom',
                                        height: 48,
                                        width: 48
                                    })
                                }),
                                null != l && (0, i.jsx)(l, {
                                    className: u.purchaseBtn,
                                    onClick: e => {
                                        e.stopPropagation(), null == S || S();
                                    }
                                }),
                                null != n && '' !== n && (0, i.jsx)(a.x, {
                                    className: u.description,
                                    color: 'text-normal',
                                    variant: 'text-sm/medium',
                                    children: n
                                })
                            ]
                        })
                    ]
                }),
                null != I && (0, i.jsx)('div', {
                    className: u.benefitsSummary,
                    children: (0, i.jsx)(a.x, {
                        color: 'interactive-normal',
                        variant: 'text-sm/medium',
                        children: d.Z.Messages.Storefront.BENEFITS_SUMMARY.format({ count: I })
                    })
                }),
                null != h && (0, i.jsx)('div', {
                    className: u.benefits,
                    children: (0, i.jsx)('div', {
                        className: u.benefitsContainer,
                        children: (0, i.jsxs)('div', {
                            className: u.benefitsList,
                            children: [
                                (0, i.jsx)(a.x, {
                                    color: 'header-secondary',
                                    variant: 'eyebrow',
                                    children: d.Z.Messages.Storefront.BENEFITS_TITLE
                                }),
                                h.length > 3 ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        h.slice(0, 3),
                                        (0, i.jsx)(a.x, {
                                            variant: 'text-md/semibold',
                                            color: 'text-secondary',
                                            children: d.Z.Messages.Storefront.MORE_BENEFITS.format({ count: h.length - 3 })
                                        })
                                    ]
                                }) : h
                            ]
                        })
                    })
                })
            ]
        })
    });
}
function _(e) {
    let {
        icon: n,
        name: t,
        description: l
    } = e;
    return (0, i.jsxs)('div', {
        className: u.cardBenefit,
        children: [
            (0, i.jsx)('div', {
                className: u.cardBenefitIcon,
                children: n
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(a.x, {
                        variant: 'text-md/semibold',
                        children: t
                    }),
                    null != l && (0, i.jsx)(a.x, {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: l
                    })
                ]
            })
        ]
    });
}
