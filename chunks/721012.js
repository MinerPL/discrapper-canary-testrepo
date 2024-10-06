t.d(n, {
    i: function () {
        return I;
    }
}),
    t(47120);
var s = t(735250),
    l = t(470079);
t(120356);
var a = t(212433),
    i = t(481060),
    r = t(671533),
    o = t(689938),
    c = t(689937);
function d(e) {
    let { testimonial: n, className: t } = e,
        { message: l, profilePic: a, adminTitle: r, emphasisColor: o = 'interactive-normal' } = n;
    return (0, s.jsxs)('div', {
        className: t,
        children: [
            (0, s.jsx)(i.Text, {
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: l.format({
                    testimonialHook: (e, n) =>
                        (0, s.jsx)(
                            i.Text,
                            {
                                tag: 'span',
                                variant: 'text-sm/bold',
                                color: o,
                                children: e
                            },
                            n
                        )
                })
            }),
            (0, s.jsxs)('div', {
                className: c.userContainer,
                children: [
                    (0, s.jsx)(i.Avatar, {
                        src: a,
                        size: i.AvatarSizes.SIZE_16,
                        'aria-hidden': !0
                    }),
                    (0, s.jsx)(i.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: r
                    })
                ]
            })
        ]
    });
}
function I(e) {
    let { testimonials: n } = e,
        [[t, a], d] = l.useState([0, 'right']),
        I = l.useCallback(() => {
            d((e) => {
                let [t] = e;
                return 0 === t ? [n.length - 1, 'left'] : [t - 1, 'left'];
            });
        }, [d, n.length]),
        _ = l.useCallback(() => {
            d((e) => {
                let [t] = e;
                return [(t + 1) % n.length, 'right'];
            });
        }, [d, n.length]),
        u = n[t],
        E = l.useCallback(
            (e, n, t, l) =>
                (0, s.jsx)(
                    N,
                    {
                        item: n,
                        state: t,
                        cleanup: l,
                        direction: a
                    },
                    e
                ),
            [a]
        );
    return (0, s.jsxs)('div', {
        className: c.testimonialHeroContainer,
        children: [
            (0, s.jsx)('div', {
                className: c.animatedContainer,
                children: (0, s.jsx)(i.TransitionGroup, {
                    items: [u],
                    renderItem: E,
                    getItemKey: (e) => e.adminTitle
                })
            }),
            (0, s.jsx)(i.Text, {
                variant: 'text-lg/bold',
                className: c.heroQuotes,
                children: '\u201C'
            }),
            (0, s.jsxs)('div', {
                className: c.testimonialsControls,
                children: [
                    (0, s.jsxs)(i.Button, {
                        className: c.testimonialControl,
                        innerClassName: c.testimonialControlInner,
                        onClick: I,
                        size: i.Button.Sizes.MIN,
                        color: i.Button.Colors.PRIMARY,
                        children: [
                            (0, s.jsx)(r.Z, {
                                className: c.testimonialControlIcon,
                                direction: r.Z.Directions.LEFT
                            }),
                            (0, s.jsx)(i.HiddenVisually, { children: o.Z.Messages.BACK })
                        ]
                    }),
                    (0, s.jsxs)(i.Button, {
                        className: c.testimonialControl,
                        innerClassName: c.testimonialControlInner,
                        onClick: _,
                        size: i.Button.Sizes.MIN,
                        color: i.Button.Colors.PRIMARY,
                        children: [
                            (0, s.jsx)(r.Z, {
                                className: c.testimonialControlIcon,
                                direction: r.Z.Directions.RIGHT
                            }),
                            (0, s.jsx)(i.HiddenVisually, { children: o.Z.Messages.NEXT })
                        ]
                    })
                ]
            })
        ]
    });
}
function N(e) {
    let { item: n, state: t, cleanup: l, direction: r } = e,
        [o] = (0, i.useSpring)(
            () => {
                switch (t) {
                    case i.TransitionStates.ENTERED:
                        return {
                            from: { transform: 'right' === r ? 'translateX(150%)' : 'translate(-150%)' },
                            to: { transform: 'translateX(0%)' }
                        };
                    case i.TransitionStates.YEETED:
                        return {
                            from: { transform: 'translateX(0%)' },
                            to: { transform: 'right' === r ? 'translateX(-150%)' : 'translate(150%)' },
                            onRest: l
                        };
                    default:
                        return {};
                }
            },
            'respect-motion-settings',
            [t]
        );
    return (0, s.jsx)(a.animated.div, {
        style: o,
        children: (0, s.jsx)(d, {
            className: c.testimonial,
            testimonial: n
        })
    });
}
