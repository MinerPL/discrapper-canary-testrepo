n(47120), n(411104);
var i = n(735250), l = n(470079), r = n(392711), a = n.n(r), s = n(481060), o = n(65205), c = n(689938), u = n(179216);
function d(e) {
    let {className: t} = e;
    return (0, i.jsxs)('svg', {
        className: t,
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 48 48',
        children: [
            (0, i.jsx)('g', {
                filter: 'url(#a)',
                children: (0, i.jsx)('path', {
                    d: 'M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z',
                    fill: 'currentColor'
                })
            }),
            (0, i.jsx)('defs', {
                children: (0, i.jsxs)('filter', {
                    id: 'a',
                    x: '0',
                    y: '0',
                    width: '48',
                    height: '48',
                    filterUnits: 'userSpaceOnUse',
                    colorInterpolationFilters: 'sRGB',
                    children: [
                        (0, i.jsx)('feFlood', {
                            floodOpacity: '0',
                            result: 'BackgroundImageFix'
                        }),
                        (0, i.jsx)('feColorMatrix', {
                            in: 'SourceAlpha',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            result: 'hardAlpha'
                        }),
                        (0, i.jsx)('feOffset', { dy: '8' }),
                        (0, i.jsx)('feGaussianBlur', { stdDeviation: '8' }),
                        (0, i.jsx)('feColorMatrix', { values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0' }),
                        (0, i.jsx)('feBlend', {
                            in2: 'BackgroundImageFix',
                            result: 'effect1_dropShadow_605_72103'
                        }),
                        (0, i.jsx)('feBlend', {
                            in: 'SourceGraphic',
                            in2: 'effect1_dropShadow_605_72103',
                            result: 'shape'
                        })
                    ]
                })
            })
        ]
    });
}
let h = [
        {
            x: 0.5,
            y: 0.05
        },
        {
            x: 0.95,
            y: 0.2
        },
        {
            x: 1,
            y: 0.5
        },
        {
            x: 0.95,
            y: 0.8
        },
        {
            x: 0.5,
            y: 0.95
        },
        {
            x: 0.05,
            y: 0.8
        },
        {
            x: 0,
            y: 0.5
        },
        {
            x: 0.05,
            y: 0.2
        }
    ], p = h.length;
function _(e, t, n) {
    let i = e * t;
    return e > 0.5 ? i - n : e < 0.5 ? i : i - n / 2;
}
let f = (e, t) => {
    let n = Math.abs(t.x), i = 180 / Math.PI * Math.atan2(Math.abs(t.y), n), l = e / 2 - 28.8;
    return {
        x: Math.max(l * Math.cos(2 * Math.PI * i / 360), 0),
        y: Math.max(l * Math.sin(2 * Math.PI * i / 360), 0)
    };
};
t.Z = l.memo(function (e) {
    let {
            wheelWidth: t,
            wheelHeight: n,
            itemWidth: m,
            itemHeight: g,
            showDeadZoneIndicator: C,
            activeItem: I,
            onItemSelect: E,
            onItemAction: N,
            interactive: x = !0,
            children: S
        } = e, Z = l.useRef(null), v = l.useRef([]), T = l.useRef(!1), L = l.useRef(null), [A, b] = l.useState(0), [M, R] = l.useState({
            x: 0,
            y: 0
        }), y = Math.abs(M.x) + Math.abs(M.y) > 0, O = l.useMemo(() => a().chunk(S, p), [S]), P = l.useCallback((e, t) => {
            null == v.current[A] ? v.current[A] = [] : v.current[A][t] = e;
        }, [A]), j = l.useCallback((e, t) => {
            L.current = t, E(p * e + t);
        }, [E]), D = l.useCallback(() => {
            L.current = null, E(null);
        }, [E]), U = l.useCallback(e => {
            D(), T.current = e;
        }, [D]), G = l.useCallback((e, t, n) => {
            if (T.current) {
                R({
                    x: 0,
                    y: 0
                });
                return;
            }
            let i = {
                    x: e.x - t.x,
                    y: e.y - t.y
                }, l = i.x < 0, r = i.y < 0, a = f(n, i), s = l ? Math.max(i.x, -a.x) : Math.min(i.x, a.x);
            R({
                x: s / 2,
                y: (r ? Math.max(i.y, -a.y) : Math.min(i.y, a.y)) / 2
            });
        }, []), w = l.useCallback(e => {
            if (null != L.current)
                e.preventDefault(), e.stopPropagation(), null == N || N(p * A + L.current);
        }, [
            N,
            A
        ]), k = l.useMemo(() => (0, r.throttle)(e => {
            if (null == Z.current)
                return;
            let i = Z.current.getBoundingClientRect(), l = i.left + i.width / 2, r = {
                    x: l,
                    y: i.top + i.height / 2
                }, a = {
                    x: e.clientX,
                    y: e.clientY
                };
            if (G(a, r, Math.max(t, n)), T.current) {
                null != I && D();
                return;
            }
            let s = (0, o.ld)(r, a, Math.max(t, n));
            for (let e = 0; e < v.current[A].length; e++) {
                let t = v.current[A][e];
                if (null == t)
                    continue;
                let n = t.getBoundingClientRect();
                if ((0, o.Vr)(r, s, n)) {
                    j(A, e);
                    return;
                }
            }
            D();
        }, 16), [
            I,
            G,
            D,
            j,
            A,
            n,
            t
        ]), B = l.useCallback(e => {
            if (!x)
                return;
            let t = A + (e.deltaY > 0 ? 1 : -1);
            t >= 0 && t < O.length && (null != L.current && (O[t].length > L.current ? j(t, L.current) : D()), b(t));
        }, [
            x,
            A,
            O,
            j,
            D
        ]), V = l.useMemo(() => O[A].map((e, l) => {
            let r = h[l];
            if (null == r)
                throw Error('Too many items supplied '.concat(S.length, ' expected max of ').concat(h.length));
            let a = _(r.x, t, m), s = _(r.y, n, g);
            return (0, i.jsx)('div', {
                ref: e => P(e, l),
                className: u.chatWheelItem,
                style: {
                    left: a,
                    top: s,
                    width: m,
                    height: g
                },
                children: e
            }, l);
        }), [
            O,
            A,
            t,
            m,
            n,
            g,
            S.length,
            P
        ]);
    return (0, i.jsx)(s.Clickable, {
        className: u.chatWheelMouseInput,
        onMouseMove: k,
        onWheel: B,
        onClick: w,
        children: (0, i.jsxs)('div', {
            ref: Z,
            className: u.chatWheel,
            style: {
                width: t,
                height: n
            },
            children: [
                (0, i.jsxs)('svg', {
                    className: u.chatWheelBackground,
                    viewBox: '0 0 288 288',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                        (0, i.jsxs)('filter', {
                            id: 'soundboard-wheel-background-shadow',
                            x: '0',
                            y: '0',
                            width: '288',
                            height: '288',
                            filterUnits: 'userSpaceOnUse',
                            colorInterpolationFilters: 'sRGB',
                            children: [
                                (0, i.jsx)('feFlood', {
                                    floodOpacity: '0',
                                    result: 'BackgroundImageFix'
                                }),
                                (0, i.jsx)('feColorMatrix', {
                                    in: 'SourceAlpha',
                                    values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                                    result: 'hardAlpha'
                                }),
                                (0, i.jsx)('feOffset', { dy: '8' }),
                                (0, i.jsx)('feGaussianBlur', { stdDeviation: '8' }),
                                (0, i.jsx)('feColorMatrix', { values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0' }),
                                (0, i.jsx)('feBlend', {
                                    in2: 'BackgroundImageFix',
                                    result: 'effect1_dropShadow_489_60382'
                                }),
                                (0, i.jsx)('feBlend', {
                                    in: 'SourceGraphic',
                                    in2: 'effect1_dropShadow_489_60382',
                                    result: 'shape'
                                })
                            ]
                        }),
                        (0, i.jsxs)('g', {
                            filter: 'url(#soundboard-wheel-background-shadow)',
                            children: [
                                (0, i.jsx)('circle', {
                                    className: u.chatWheelBackground,
                                    cx: '144',
                                    cy: '144',
                                    r: '103.68',
                                    strokeWidth: '40.32'
                                }),
                                C && (0, i.jsx)('circle', {
                                    className: u.chatWheelDeadZone,
                                    onMouseEnter: () => U(!0),
                                    onMouseLeave: () => U(!1),
                                    cx: 144,
                                    cy: 144,
                                    r: 28.8
                                }),
                                y && (0, i.jsx)('circle', {
                                    className: u.chatWheelCenter,
                                    cx: 144 + M.x,
                                    cy: 144 + M.y,
                                    r: 28.8
                                })
                            ]
                        }),
                        C && (0, i.jsx)('circle', {
                            className: u.chatWheelDeadZone,
                            onMouseEnter: () => U(!0),
                            onMouseLeave: () => U(!1),
                            cx: 144,
                            cy: 144,
                            r: 28.8,
                            stroke: 'none'
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: u.innerContent,
                    children: [
                        C && (0, i.jsx)(d, { className: u.chatWheelDeadZoneIcon }),
                        x && O.length > 1 ? (0, i.jsx)('div', {
                            className: u.paginationHint,
                            children: c.Z.Messages.CHAT_WHEEL_PAGINATION_HINT
                        }) : null
                    ]
                }),
                V
            ]
        })
    });
});
