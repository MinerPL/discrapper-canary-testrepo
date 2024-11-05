n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var r = n(200651),
    o = n(192379),
    i = n(120356),
    l = n.n(i),
    a = n(481060),
    s = n(393903),
    c = n(604162),
    u = n(420212),
    d = n(504446);
function m(e, t, n) {
    return n * (Math.max(e - t.left, 0) / t.width);
}
function p(e, t, n) {
    return n.left + (e / t) * n.width;
}
function f(e) {
    let { percent: t, animate: n, interactionEnabled: i, backgroundColor: f, preloadedBuffers: v, duration: C, maxSeekableTime: g, onClick: x, onScrubBack: S, onScrubForward: h } = e,
        [E, _] = o.useState(null),
        [T, b] = o.useState(null),
        [N, j] = o.useState(null),
        [I, y] = o.useState(!1);
    o.useEffect(() => {
        if (null != E) null == g ? j(null) : j(p(g, C, E));
    }, [E, g, C]);
    let k = (0, s.y)(() => {
            if (null != k.current) _(k.current.getBoundingClientRect());
        }),
        B = (e) => {
            b(e.clientX);
        },
        D = o.useCallback(
            (e) => {
                let { key: t } = e;
                t === u.mR.ArrowLeft && null != S ? (e.preventDefault(), e.stopPropagation(), S()) : t === u.mR.ArrowRight && null != h && (e.preventDefault(), e.stopPropagation(), h());
            },
            [S, h]
        ),
        A = null != T && null != E ? m(T, E, C) : 0,
        L = (0, c.yv)(A),
        P = null != E ? E.right - p((t / 100) * C, C, E) : null,
        M = null != T && null != E ? E.right - T : null,
        R = null != N && null != E ? E.right - N : null;
    return (0, r.jsxs)('div', {
        className: d.cont,
        ref: k,
        children: [
            (0, r.jsxs)(a.Clickable, {
                className: l()(d.hitboxArea, { [d.interactionEnabled]: i }),
                ignoreKeyPress: !0,
                onClick: (e) => {
                    if (!!i && null != x) x(m(e.clientX, e.currentTarget.getBoundingClientRect(), C));
                },
                onMouseEnter: (e) => {
                    if (!!i) y(!0), B(e);
                },
                onMouseLeave: (e) => {
                    if (!!i) y(!1), b(null);
                },
                onMouseMove: (e) => {
                    if (!!i) I && B(e);
                },
                onKeyDown: D,
                tabIndex: i ? void 0 : -1,
                focusProps: {
                    offset: {
                        top: 12,
                        bottom: 12
                    }
                },
                children: [
                    null == v
                        ? void 0
                        : v.map((e) =>
                              (0, r.jsx)(
                                  'div',
                                  {
                                      className: l()(d.buffer, { [d.bufferHovered]: I }),
                                      style: {
                                          width: ''.concat(100 * e.size, '%'),
                                          left: ''.concat(100 * e.start, '%')
                                      }
                                  },
                                  ''.concat(e.start, ':').concat(e.size)
                              )
                          ),
                    !i &&
                        null != R &&
                        R > 0 &&
                        (0, r.jsx)('div', {
                            className: d.seekableBar,
                            style: {
                                right: null != R ? ''.concat(R, 'px') : 'auto',
                                opacity: null != R ? 1 : 0
                            }
                        }),
                    (0, r.jsx)(a.Progress, {
                        className: d.progress,
                        percent: t,
                        foregroundColor: '#FFFFFF',
                        backgroundColor: null != f ? f : void 0,
                        size: I ? a.Progress.Sizes.XSMALL : a.Progress.Sizes.XXSMALL,
                        animate: n
                    }),
                    I &&
                        null != L &&
                        (0, r.jsx)(a.Text, {
                            className: d.timeDisplay,
                            variant: 'text-xs/normal',
                            style: { right: null != M ? ''.concat(M - 10, 'px') : 'auto' },
                            children: L
                        }),
                    I &&
                        i &&
                        (0, r.jsx)('div', {
                            className: d.grabber,
                            style: { right: null != P ? ''.concat(P - 6, 'px') : 'auto' }
                        })
                ]
            }),
            (0, r.jsx)('div', {
                className: d.progressGlow,
                style: { width: ''.concat(t, '%') }
            })
        ]
    });
}
