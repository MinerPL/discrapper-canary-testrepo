t.d(n, {
    G: function () {
        return m;
    },
    U: function () {
        return p;
    }
});
var i = t(735250);
t(470079);
var l = t(557533),
    r = t.n(l),
    s = t(789978),
    o = t(368072),
    a = t(777207),
    u = t(752843),
    c = t(330711),
    d = t(772421),
    f = t(778342);
function p(e) {
    let { description: n, imgSrc: t, renderPurchaseButton: l, onPurchase: p, subscriptionType: m, title: v, onDetails: I, benefitItems: S, benefitsSummary: g } = e;
    return (0, i.jsx)(s.tE, {
        children: (0, i.jsxs)('div', {
            className: r()(d.container, f.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != I ? I() : null != p && p();
            },
            children: [
                (0, i.jsxs)('div', {
                    className: d.card,
                    children: [
                        null != m && (0, i.jsx)(u.Z, { type: m }),
                        (0, i.jsxs)('div', {
                            className: d.body,
                            children: [
                                (0, i.jsx)(a.x, {
                                    tag: 'div',
                                    variant: 'heading-lg/semibold',
                                    children: v
                                }),
                                (0, i.jsx)('div', {
                                    className: d.image,
                                    children:
                                        null != t
                                            ? (0, i.jsx)('img', {
                                                  src: t.toString(),
                                                  alt: ''
                                              })
                                            : (0, i.jsx)(o.V, {
                                                  color: 'white',
                                                  size: 'custom',
                                                  height: 48,
                                                  width: 48
                                              })
                                }),
                                null != l
                                    ? l({
                                          className: d.purchaseBtn,
                                          onClick: (e) => {
                                              e.stopPropagation(), null == p || p();
                                          }
                                      })
                                    : null,
                                null != n &&
                                    '' !== n &&
                                    (0, i.jsx)(a.x, {
                                        className: d.description,
                                        color: 'text-normal',
                                        variant: 'text-sm/medium',
                                        children: n
                                    })
                            ]
                        })
                    ]
                }),
                null != g &&
                    (0, i.jsx)('div', {
                        className: d.benefitsSummary,
                        children: (0, i.jsx)(a.x, {
                            color: 'interactive-normal',
                            variant: 'text-sm/medium',
                            children: c.Z.Messages.Storefront.BENEFITS_SUMMARY.format({ count: g })
                        })
                    }),
                null != S &&
                    (0, i.jsx)('div', {
                        className: d.benefits,
                        children: (0, i.jsx)('div', {
                            className: d.benefitsContainer,
                            children: (0, i.jsxs)('div', {
                                className: d.benefitsList,
                                children: [
                                    (0, i.jsx)(a.x, {
                                        color: 'header-secondary',
                                        variant: 'eyebrow',
                                        children: c.Z.Messages.Storefront.BENEFITS_TITLE
                                    }),
                                    S.length > 3
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  S.slice(0, 3),
                                                  (0, i.jsx)(a.x, {
                                                      variant: 'text-md/semibold',
                                                      color: 'text-secondary',
                                                      children: c.Z.Messages.Storefront.MORE_BENEFITS.format({ count: S.length - 3 })
                                                  })
                                              ]
                                          })
                                        : S
                                ]
                            })
                        })
                    })
            ]
        })
    });
}
function m(e) {
    let { icon: n, name: t, description: l } = e;
    return (0, i.jsxs)('div', {
        className: d.cardBenefit,
        children: [
            (0, i.jsx)('div', {
                className: d.cardBenefitIcon,
                children: n
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
