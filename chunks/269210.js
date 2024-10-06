t.d(e, {
    G: function () {
        return m;
    },
    U: function () {
        return p;
    }
});
var l = t(735250);
t(470079);
var i = t(557533),
    r = t.n(i),
    a = t(789978),
    o = t(368072),
    s = t(777207),
    u = t(330711),
    c = t(56273),
    d = t(103077),
    f = t(692547);
function p(n) {
    let { description: e, imgSrc: t, renderPurchaseButton: i, onPurchase: p, title: m, onDetails: v, benefitItems: I, benefitsSummary: S } = n;
    return (0, l.jsx)(a.tE, {
        children: (0, l.jsxs)('div', {
            className: r()(c.container, d.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != v ? v() : null != p && p();
            },
            children: [
                (0, l.jsx)('div', {
                    className: c.card,
                    children: (0, l.jsxs)('div', {
                        className: c.body,
                        children: [
                            (0, l.jsx)(s.x, {
                                tag: 'div',
                                variant: 'heading-lg/semibold',
                                children: m
                            }),
                            (0, l.jsx)('div', {
                                className: c.image,
                                children:
                                    null != t
                                        ? (0, l.jsx)('img', {
                                              src: t.toString(),
                                              alt: ''
                                          })
                                        : (0, l.jsx)(o.V, {
                                              color: f.Z.colors.ICON_PRIMARY,
                                              size: 'custom',
                                              height: 48,
                                              width: 48
                                          })
                            }),
                            null != i
                                ? i({
                                      className: c.purchaseBtn,
                                      onClick: (n) => {
                                          n.stopPropagation(), null == p || p();
                                      }
                                  })
                                : null,
                            null != e &&
                                '' !== e &&
                                (0, l.jsx)(s.x, {
                                    className: c.description,
                                    color: 'text-normal',
                                    variant: 'text-sm/medium',
                                    children: e
                                })
                        ]
                    })
                }),
                null != S &&
                    (0, l.jsx)('div', {
                        className: c.benefitsSummary,
                        children: (0, l.jsx)(s.x, {
                            color: 'interactive-normal',
                            variant: 'text-sm/medium',
                            children: u.Z.Messages.Storefront.BENEFITS_SUMMARY.format({ count: S })
                        })
                    }),
                null != I &&
                    (0, l.jsx)('div', {
                        className: c.benefits,
                        children: (0, l.jsx)('div', {
                            className: c.benefitsContainer,
                            children: (0, l.jsxs)('div', {
                                className: c.benefitsList,
                                children: [
                                    (0, l.jsx)(s.x, {
                                        color: 'header-secondary',
                                        variant: 'eyebrow',
                                        children: u.Z.Messages.Storefront.BENEFITS_TITLE
                                    }),
                                    I.length > 3
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  I.slice(0, 3),
                                                  (0, l.jsx)(s.x, {
                                                      variant: 'text-md/semibold',
                                                      color: 'text-secondary',
                                                      children: u.Z.Messages.Storefront.MORE_BENEFITS.format({ count: I.length - 3 })
                                                  })
                                              ]
                                          })
                                        : I
                                ]
                            })
                        })
                    })
            ]
        })
    });
}
function m(n) {
    let { icon: e, name: t, description: i } = n;
    return (0, l.jsxs)('div', {
        className: c.cardBenefit,
        children: [
            (0, l.jsx)('div', {
                className: c.cardBenefitIcon,
                children: e
            }),
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsx)(s.x, {
                        variant: 'text-sm/semibold',
                        children: t
                    }),
                    null != i &&
                        (0, l.jsx)(s.x, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: i
                        })
                ]
            })
        ]
    });
}
