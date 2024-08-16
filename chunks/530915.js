n.d(t, {
    U: function () {
        return v;
    }
}),
    n(47120);
var s,
    r,
    a = n(735250),
    i = n(470079),
    o = n(120356),
    c = n.n(o),
    l = n(954955),
    d = n.n(l),
    u = n(717888),
    f = n.n(u),
    p = n(82923),
    g = n(442837),
    C = n(481060),
    _ = n(451478),
    m = n(259580),
    h = n(305271),
    b = n(689938),
    x = n(736699);
let E = {
    mass: 1,
    tension: 200,
    friction: 30,
    clamp: !0,
    easing: p.Z.Easing.bezier(0.15, 0, 0.25, 1),
    duration: 1000
};
((r = s || (s = {})).GO_TO_SLIDE = 'GO_TO_SLIDE'), (r.NEXT = 'NEXT'), (r.PREVIOUS = 'PREVIOUS');
let I = (e) => {
        let { currentSlideIndex: t, numSlides: n, onNext: s, onPrevious: r, onIndicatorClick: i, className: o, paginationButtonClassName: l } = e,
            d = c()(x.paginationButton, l);
        return (0, a.jsxs)('div', {
            className: c()(x.controls, o),
            children: [
                (0, a.jsx)(C.Button, {
                    look: C.Button.Looks.FILLED,
                    color: C.Button.Colors.PRIMARY,
                    className: d,
                    onClick: r,
                    'aria-label': b.Z.Messages.PAGINATION_PREVIOUS,
                    children: (0, a.jsx)(m.Z, { direction: m.Z.Directions.LEFT })
                }),
                (0, a.jsx)('div', {
                    className: x.paginationIndicatorContainer,
                    children: f()(n, (e) =>
                        (0, a.jsx)(
                            C.Button,
                            {
                                look: C.Button.Looks.BLANK,
                                size: C.Button.Sizes.NONE,
                                onClick: () => i(e),
                                className: c()(x.paginationIndicatorButton, { [x.selected]: e === t }),
                                'aria-label': b.Z.Messages.PAGINATION_SLIDE_LABEL.format({ pageNumber: e + 1 }),
                                children: (0, a.jsx)('div', { className: c()(x.paginationIndicator, { [x.selected]: e === t }) })
                            },
                            'slide-indicator-'.concat(e)
                        )
                    )
                }),
                (0, a.jsx)(C.Button, {
                    look: C.Button.Looks.FILLED,
                    color: C.Button.Colors.PRIMARY,
                    className: d,
                    onClick: s,
                    'aria-label': b.Z.Messages.PAGINATION_NEXT,
                    children: (0, a.jsx)(m.Z, { direction: m.Z.Directions.RIGHT })
                })
            ]
        });
    },
    v = (e) => {
        let { carouselId: t, items: n = [], renderItem: s, getItemId: r, onIntentionalChange: o, onChangeItem: l, className: u, controlsClassName: f, paginationButtonClassName: p, springConfig: m, delay: b, initialPaused: v = !1, unidirectional: S = !1, analyticsLocations: L } = e,
            { trackSlideView: T, trackPagination: N } = (0, h.X)(t, L),
            [O, k] = (0, i.useState)(0),
            [j, P] = (0, i.useState)(!1),
            [B, R] = (0, i.useState)(!1),
            A = i.useCallback(() => R(!0), []),
            Z = i.useCallback(() => R(!1), []),
            M = (0, g.e7)([_.Z], () => _.Z.isFocused()),
            y = null != b && !v && !B && M,
            w = i.useCallback((e) => (n.length + O + e) % n.length, [n, O]),
            D = i.useCallback(
                d()((e, t, s) => {
                    null != s && (null == o || o(n[e], t, e, s), N(e, O, r(e), r(t))), P('GO_TO_SLIDE' === s), null == l || l(n[e], t, e), k(e);
                }, 200),
                [n, o, l]
            );
        return (
            (0, i.useEffect)(() => {
                T(O, r(O));
            }, [T, O, r]),
            (0, i.useEffect)(() => {
                if (y) {
                    let e = w(1),
                        t = setInterval(() => D(e, O), b);
                    return () => clearInterval(t);
                }
            }, [y, b, O, w, D]),
            (0, a.jsxs)('div', {
                className: c()(x.carouselContainer, u),
                onMouseEnter: A,
                onMouseLeave: Z,
                children: [
                    (0, a.jsx)(C.Slides, {
                        activeSlide: String(O),
                        springConfig: null != m ? m : E,
                        directionOverride: S && !j ? 'forwards' : void 0,
                        fadeInOut: !0,
                        children: n.map((e, t) =>
                            (0, a.jsx)(
                                C.Slide,
                                {
                                    id: String(t),
                                    children: (0, a.jsx)('div', {
                                        className: c()(x.carousel),
                                        children: s(e, t)
                                    })
                                },
                                String(t)
                            )
                        )
                    }),
                    n.length > 1 &&
                        (0, a.jsx)(I, {
                            className: f,
                            paginationButtonClassName: p,
                            currentSlideIndex: O,
                            numSlides: n.length,
                            onNext: () => {
                                D(w(1), O, 'NEXT');
                            },
                            onPrevious: () => {
                                D(w(-1), O, 'PREVIOUS');
                            },
                            onIndicatorClick: (e) => {
                                D(e, O, 'GO_TO_SLIDE');
                            }
                        })
                ]
            })
        );
    };
