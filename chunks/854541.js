n.d(t, {
    AG: () => D,
    Z$: () => M,
    jH: () => L,
    zH: () => k
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(91192),
    l = n(924826),
    c = n(866442),
    u = n(1561),
    d = n(507274),
    f = n(84735),
    _ = n(463208),
    p = n(481060),
    h = n(408886),
    m = n(44315),
    g = n(665149),
    E = n(981631),
    b = n(388032),
    y = n(14235);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let A = i.lazy(() => Promise.all([n.e('26436'), n.e('28102')]).then(n.bind(n, 534828))),
    C = 7,
    R = () => Promise.resolve();
function P(e) {
    return null == e ? null : 'string' == typeof e ? ((0, c.FX)(e) ? (0, c._i)(e) : null) : e;
}
function w(e) {
    let { color: t, isDefault: n = !1, isCustom: i = !1, isSelected: o = !1, disabled: l = !1, style: u = {}, onClick: d, isGradient: _ = !1, 'aria-label': h, gradientStart: g, gradientEnd: b } = e,
        v = (0, s.JA)('color-'.concat(t)),
        I = {};
    if (_ && null != g && null != b) {
        let e = (0, c.Rf)(g),
            t = (0, c.Rf)(b);
        I = { background: 'linear-gradient(to bottom, '.concat(e, ', ').concat(t, ')') };
    } else I = { backgroundColor: null != t ? (0, c.Rf)(t) : u.backgroundColor };
    let T = _ ? g : t,
        N = !1;
    function A() {
        let e = 16,
            t = 16;
        if (((i || n) && ((e = 32), (t = 24)), o))
            return (0, r.jsx)(p.dz2, {
                size: 'custom',
                width: e,
                height: t,
                color: (0, m.Lq)(N ? E.Ilk.WHITE_500 : E.Ilk.BLACK_500)
            });
    }
    return (
        i && !o ? (N = !0) : (i || o) && (N = (0, c.Bd)(null != T ? T : E.p6O) > 0.1),
        (0, r.jsx)(f.t, {
            offset: -2,
            children: (0, r.jsxs)(
                'button',
                S(
                    O(
                        {
                            type: 'button',
                            className: a()(y.colorPickerSwatch, {
                                [y.disabled]: l,
                                [y.default]: n,
                                [y.custom]: i,
                                [y.noColor]: null == t && !_,
                                [y.gradientPreset]: _
                            }),
                            disabled: l,
                            onClick: () =>
                                null == d
                                    ? void 0
                                    : d(
                                          _
                                              ? {
                                                    start: g,
                                                    end: b
                                                }
                                              : t
                                      ),
                            style: O({}, u, I),
                            'aria-label': null != h ? h : _ ? 'Gradient '.concat(g, '-').concat(b) : I.backgroundColor
                        },
                        v
                    ),
                    {
                        children: [
                            i
                                ? (0, r.jsx)(p.vdY, {
                                      size: 'custom',
                                      className: y.colorPickerDropper,
                                      colorClass: y.colorPickerDropperFg,
                                      width: 14,
                                      height: 14,
                                      color: (0, m.Lq)(N ? E.Ilk.WHITE_500 : E.Ilk.BLACK_500)
                                  })
                                : null,
                            A()
                        ]
                    }
                )
            )
        })
    );
}
class D extends i.PureComponent {
    render() {
        let { color: e, onChange: t, value: n, disabled: i } = this.props;
        return (0, r.jsx)(w, {
            isDefault: !0,
            color: e,
            isSelected: e === n || 0 === n,
            onClick: t,
            disabled: i
        });
    }
}
class L extends i.PureComponent {
    render() {
        let { customColor: e, value: t, disabled: n, 'aria-label': i } = this.props;
        return (0, r.jsx)(w, {
            isCustom: !0,
            color: e,
            isSelected: t === e,
            disabled: n,
            'aria-label': i
        });
    }
}
function x(e) {
    let { value: t, eagerUpdate: n = !1, onChange: o, onClose: s, suggestedColors: l, middle: f, footer: m, showEyeDropper: E, wrapperComponentType: v, className: I } = e,
        T = (0, h.Z)(),
        N = P(t),
        R = null != N ? N : 0,
        w = (0, c.Rf)(R),
        D = (0, c.O)(R),
        [L, x] = i.useState({
            current: R,
            pending: {
                hex: w,
                hsl: D
            },
            input: w
        });
    i.useEffect(() => {
        if (null == N || N === L.current) return;
        let e = (0, c.Rf)(N),
            t = (0, c.O)(N);
        x({
            current: N,
            pending: {
                hex: e,
                hsl: t
            },
            input: e
        });
    }, [N, L]),
        i.useEffect(() => s, [s]);
    let M = (e) => {
            let t = '#' === e[0] ? e : '#'.concat(e);
            if (!(0, c.FX)(t)) return void x((e) => S(O({}, e), { input: t }));
            let n = (0, c._i)(t),
                r = (0, c.O)(n);
            x({
                current: n,
                pending: {
                    hex: t,
                    hsl: r
                },
                input: t
            }),
                o(n);
        },
        k = async () => {
            if (null != T)
                try {
                    let { sRGBHex: e } = await T.open();
                    M(e);
                } catch (e) {}
        },
        j = i.useCallback(
            (e) => {
                x((t) =>
                    S(O({}, t), {
                        pending: e,
                        input: e.hex
                    })
                ),
                    n && o((0, c._i)(e.hex));
            },
            [n, o]
        ),
        U = (e) => {
            o((0, c._i)(e));
        },
        G = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(i.Suspense, {
                    fallback: null,
                    children: (0, r.jsx)(A, {
                        onChange: j,
                        onChangeComplete: (e) => {
                            let { hex: t } = e;
                            return U(t);
                        },
                        color: L.pending.hsl
                    })
                }),
                f,
                (0, r.jsxs)('div', {
                    className: y.customColorPickerInputContainer,
                    children: [
                        E &&
                            null != T &&
                            (0, r.jsx)(g.JO, {
                                onClick: k,
                                tooltip: b.NW.string(b.t['0dU9Nz']),
                                tooltipPosition: 'top',
                                className: y.customColorPickerEyeDropper,
                                icon: p.ilE
                            }),
                        (0, r.jsx)(_.o, {
                            className: y.customColorPickerInput,
                            value: L.input,
                            onChange: M,
                            maxLength: C
                        })
                    ]
                }),
                null != l &&
                    l.length > 0 &&
                    (0, r.jsx)('div', {
                        className: y.suggestedColors,
                        children: l.map((e, t) =>
                            (0, r.jsx)(
                                u.P,
                                {
                                    'aria-label': '',
                                    style: { backgroundColor: e },
                                    className: y.suggestedColor,
                                    onClick: () => M(e)
                                },
                                ''.concat(e, '-').concat(t)
                            )
                        )
                    }),
                m
            ]
        }),
        B = null != v ? v : d.V;
    return (0, r.jsx)(B, {
        'aria-label': b.NW.string(b.t.WTqQ5e),
        className: a()(y.customColorPicker, I),
        children: G
    });
}
let M = i.memo(x);
function k(e) {
    let { className: t, defaultColor: n, customColor: i, colors: o, value: c, secondaryValue: u, disabled: d, onChange: f, renderDefaultButton: _, renderCustomButton: p, colorContainerClassName: h, isGradient: m, renderGradientCustomButton: g } = e,
        E = (e) =>
            (0, r.jsx)('div', {
                className: y.colorPickerRow,
                children: m
                    ? e.map((e) =>
                          (0, r.jsx)(
                              w,
                              {
                                  gradientStart: e.start,
                                  gradientEnd: e.end,
                                  color: 0,
                                  isSelected: c === e.start && u === e.end,
                                  onClick: () => f(e.start, e.end),
                                  disabled: d,
                                  isGradient: !0,
                                  'aria-label': e.name
                              },
                              ''.concat(e.start, '-').concat(e.end)
                          )
                      )
                    : e.map((e) =>
                          (0, r.jsx)(
                              w,
                              {
                                  color: e,
                                  isSelected: e === c,
                                  onClick: f,
                                  disabled: d,
                                  isGradient: !1
                              },
                              e
                          )
                      )
            }),
        b = o.slice(0, o.length / 2),
        v = o.slice(o.length / 2, o.length),
        I = (0, l.ZP)({
            id: 'color-picker',
            isEnabled: !0,
            scrollToStart: R,
            scrollToEnd: R
        });
    return (0, r.jsx)(s.bG, {
        navigator: I,
        children: (0, r.jsx)(s.SJ, {
            children: (e) => {
                var { ref: o } = e,
                    s = T(e, ['ref']);
                return (0, r.jsxs)(
                    'div',
                    S(
                        O(
                            {
                                className: a()(y.container, t, { [y.gradient]: m }),
                                ref: o
                            },
                            s
                        ),
                        {
                            children: [
                                !m &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)('div', {
                                                className: a()(y.defaultContainer, h),
                                                children: _({
                                                    value: c,
                                                    color: n,
                                                    onChange: f,
                                                    disabled: d
                                                })
                                            }),
                                            (0, r.jsx)('div', {
                                                className: a()(y.customContainer, h),
                                                children: p({
                                                    value: c,
                                                    customColor: i,
                                                    disabled: d
                                                })
                                            })
                                        ]
                                    }),
                                m &&
                                    null != g &&
                                    (0, r.jsx)('div', {
                                        children: g({
                                            value: c,
                                            startColor: n,
                                            endColor: n,
                                            disabled: d
                                        })
                                    }),
                                (0, r.jsxs)('div', {
                                    children: [E(b), E(v)]
                                })
                            ]
                        }
                    )
                );
            }
        })
    });
}
