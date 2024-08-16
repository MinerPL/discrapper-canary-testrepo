t.d(e, {
    G: function () {
        return I;
    },
    U: function () {
        return m;
    }
});
var i = t(735250);
t(470079);
var l = t(557533),
    r = t.n(l),
    o = t(789978),
    s = t(368072),
    a = t(777207),
    c = t(752843),
    d = t(330711),
    u = t(772421),
    S = t(778342);
function m(n) {
    let { description: e, imgSrc: t, PurchaseButton: l, onPurchase: m, subscriptionType: I, title: x, onDetails: f, benefitItems: _, benefitsSummary: p } = n;
    return (0, i.jsx)(o.tE, {
        children: (0, i.jsxs)('div', {
            className: r()(u.container, S.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != f ? f() : null != m && m();
            },
            children: [
                (0, i.jsxs)('div', {
                    className: u.card,
                    children: [
                        null != I && (0, i.jsx)(c.Z, { type: I }),
                        (0, i.jsxs)('div', {
                            className: u.body,
                            children: [
                                (0, i.jsx)(a.x, {
                                    tag: 'div',
                                    variant: 'heading-lg/semibold',
                                    children: x
                                }),
                                (0, i.jsx)('div', {
                                    className: u.image,
                                    children:
                                        null != t
                                            ? (0, i.jsx)('img', {
                                                  src: t.toString(),
                                                  alt: ''
                                              })
                                            : (0, i.jsx)(s.V, {
                                                  color: 'white',
                                                  size: 'custom',
                                                  height: 48,
                                                  width: 48
                                              })
                                }),
                                null != l &&
                                    (0, i.jsx)(l, {
                                        className: u.purchaseBtn,
                                        onClick: (n) => {
                                            n.stopPropagation(), null == m || m();
                                        }
                                    }),
                                null != e &&
                                    '' !== e &&
                                    (0, i.jsx)(a.x, {
                                        className: u.description,
                                        color: 'text-normal',
                                        variant: 'text-sm/medium',
                                        children: e
                                    })
                            ]
                        })
                    ]
                }),
                null != p &&
                    (0, i.jsx)('div', {
                        className: u.benefitsSummary,
                        children: (0, i.jsx)(a.x, {
                            color: 'interactive-normal',
                            variant: 'text-sm/medium',
                            children: d.Z.Messages.Storefront.BENEFITS_SUMMARY.format({ count: p })
                        })
                    }),
                null != _ &&
                    (0, i.jsx)('div', {
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
                                    _.length > 3
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  _.slice(0, 3),
                                                  (0, i.jsx)(a.x, {
                                                      variant: 'text-md/semibold',
                                                      color: 'text-secondary',
                                                      children: d.Z.Messages.Storefront.MORE_BENEFITS.format({ count: _.length - 3 })
                                                  })
                                              ]
                                          })
                                        : _
                                ]
                            })
                        })
                    })
            ]
        })
    });
}
function I(n) {
    let { icon: e, name: t, description: l } = n;
    return (0, i.jsxs)('div', {
        className: u.cardBenefit,
        children: [
            (0, i.jsx)('div', {
                className: u.cardBenefitIcon,
                children: e
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(a.x, {
                        variant: 'text-md/semibold',
                        children: t
                    }),
                    null != l &&
                        (0, i.jsx)(a.x, {
                            variant: 'text-sm/medium',
                            color: 'text-muted',
                            children: l
                        })
                ]
            })
        ]
    });
}
