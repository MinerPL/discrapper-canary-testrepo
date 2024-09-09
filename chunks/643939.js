t.d(s, {
    L: function () {
        return T;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(481060),
    l = t(626135),
    c = t(981631),
    d = t(689938),
    _ = t(453951),
    u = t(680674),
    E = t(74316);
let T = a.memo(function (e) {
    let { message: s, handleClick: t, handleClose: i, buttonText: T, useInitialGlow: S, useGlowOnHover: I, handleImageClick: N, className: m, analyticsLocations: C, upsellType: A } = e,
        [g, h] = a.useState(S);
    return (
        a.useEffect(() => {
            setTimeout(() => h(!1), 3000);
        }, []),
        a.useEffect(() => {
            l.default.track(c.rMx.POST_ACTION_UPSELL_SHOWN, {
                type: A,
                location: C
            });
        }, [A, C]),
        (0, n.jsx)('div', {
            className: _.wrapper,
            children: (0, n.jsxs)('div', {
                className: r()(_.content, g ? _.initialGlowUp : _.initialGlowDown, I ? _.contentGlow : null, m),
                children: [
                    (0, n.jsxs)('div', {
                        className: _.innerContent,
                        children: [
                            (0, n.jsx)('div', {
                                className: r()(_.imageWrapper, void 0 !== N ? _.imageHover : null),
                                ...(void 0 !== N
                                    ? {
                                          onClick: () => {
                                              l.default.track(c.rMx.POST_ACTION_UPSELL_SECONDARY_ACTION_CLICKED, {
                                                  type: A,
                                                  location: C
                                              }),
                                                  N();
                                          }
                                      }
                                    : {}),
                                children: (0, n.jsx)('img', {
                                    alt: '',
                                    className: _.image,
                                    src: u
                                })
                            }),
                            (0, n.jsx)('div', {
                                className: _.heading,
                                children: (0, n.jsx)(o.Heading, {
                                    variant: 'heading-sm/medium',
                                    children: s.format()
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: _.buttonWrapper,
                        children: (0, n.jsxs)(o.ShinyButton, {
                            className: _.button,
                            innerClassName: _.buttonInner,
                            size: o.Button.Sizes.SMALL,
                            color: o.ButtonColors.CUSTOM,
                            onlyShineOnHover: !0,
                            onClick: () => {
                                l.default.track(c.rMx.POST_ACTION_UPSELL_PRIMARY_ACTION_CLICKED, {
                                    type: A,
                                    location: C
                                }),
                                    t();
                            },
                            children: [
                                (0, n.jsx)('img', {
                                    alt: '',
                                    className: _.buttonNitroIcon,
                                    src: E
                                }),
                                T
                            ]
                        })
                    }),
                    (0, n.jsx)('div', {
                        className: _.closeButtonWrapper,
                        children: (0, n.jsx)(o.Clickable, {
                            onClick: () => {
                                l.default.track(c.rMx.POST_ACTION_UPSELL_DISMISSED, {
                                    type: A,
                                    location: C
                                }),
                                    i();
                            },
                            className: _.closeButton,
                            'aria-label': d.Z.Messages.CLOSE,
                            children: (0, n.jsx)(o.XSmallIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                        })
                    })
                ]
            })
        })
    );
});
