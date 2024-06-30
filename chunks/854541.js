n.d(t, {
    AG: function () {
        return v;
    },
    Z$: function () {
        return R;
    },
    jH: function () {
        return O;
    },
    zH: function () {
        return C;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(91192), l = n(924826), u = n(866442), c = n(1561), d = n(507274), _ = n(84735), E = n(463208), f = n(481060), h = n(408886), p = n(44315), m = n(502568), I = n(534828), T = n(981631), g = n(689938), S = n(19857);
let A = () => Promise.resolve();
function N(e) {
    let {
            color: t,
            isDefault: n = !1,
            isCustom: i = !1,
            isSelected: a = !1,
            disabled: l = !1,
            style: c = {},
            onClick: d,
            'aria-label': E
        } = e, h = (0, s.JA)('color-'.concat(t)), m = null != t ? (0, u.Rf)(t) : c.backgroundColor, I = !1;
    return i && !a ? I = !0 : (i || a) && (I = (0, u.Bd)(t) > 0.1), (0, r.jsx)(_.t, {
        offset: -2,
        children: (0, r.jsxs)('button', {
            type: 'button',
            className: o()(S.colorPickerSwatch, {
                [S.disabled]: l,
                [S.default]: n,
                [S.custom]: i,
                [S.noColor]: null == t
            }),
            disabled: l,
            onClick: () => null == d ? void 0 : d(t),
            style: {
                ...c,
                backgroundColor: m
            },
            'aria-label': null != E ? E : m,
            ...h,
            children: [
                i ? (0, r.jsx)(f.EyeDropperIcon, {
                    size: 'custom',
                    className: S.colorPickerDropper,
                    colorClass: S.colorPickerDropperFg,
                    width: 14,
                    height: 14,
                    color: (0, p.Lq)(I ? T.Ilk.WHITE_500 : T.Ilk.BLACK_500)
                }) : null,
                function () {
                    let e = 16, t = 16;
                    if ((i || n) && (e = 32, t = 24), a)
                        return (0, r.jsx)(f.CheckmarkLargeIcon, {
                            size: 'custom',
                            width: e,
                            height: t,
                            color: (0, p.Lq)(I ? T.Ilk.WHITE_500 : T.Ilk.BLACK_500)
                        });
                }()
            ]
        })
    });
}
class v extends i.PureComponent {
    render() {
        let {
            color: e,
            onChange: t,
            value: n,
            disabled: i
        } = this.props;
        return (0, r.jsx)(N, {
            isDefault: !0,
            color: e,
            isSelected: e === n || 0 === n,
            onClick: t,
            disabled: i
        });
    }
}
class O extends i.PureComponent {
    render() {
        let {
            customColor: e,
            value: t,
            disabled: n,
            'aria-label': i
        } = this.props;
        return (0, r.jsx)(N, {
            isCustom: !0,
            color: e,
            isSelected: t === e,
            disabled: n,
            'aria-label': i
        });
    }
}
let R = i.memo(function (e) {
    let {
            value: t,
            eagerUpdate: n = !1,
            onChange: a,
            onClose: s,
            suggestedColors: l,
            middle: _,
            footer: p,
            showEyeDropper: T,
            wrapperComponentType: A,
            className: N
        } = e, v = (0, h.Z)(), O = function (e) {
            if (null == e)
                return null;
            if ('string' == typeof e)
                return (0, u.FX)(e) ? (0, u._i)(e) : null;
            return e;
        }(t), R = null != O ? O : 0, C = (0, u.Rf)(R), y = (0, u.O)(R), [D, L] = i.useState({
            current: R,
            pending: {
                hex: C,
                hsl: y
            },
            input: C
        });
    i.useEffect(() => {
        if (null == O || O === D.current)
            return;
        let e = (0, u.Rf)(O), t = (0, u.O)(O);
        L({
            current: O,
            pending: {
                hex: e,
                hsl: t
            },
            input: e
        });
    }, [
        O,
        D
    ]), i.useEffect(() => s, [s]);
    let b = e => {
            let t = '#' === e[0] ? e : '#'.concat(e);
            if (!(0, u.FX)(t)) {
                L(e => ({
                    ...e,
                    input: t
                }));
                return;
            }
            let n = (0, u._i)(t), r = (0, u.O)(n);
            L({
                current: n,
                pending: {
                    hex: t,
                    hsl: r
                },
                input: t
            }), a(n);
        }, M = async () => {
            if (null != v)
                try {
                    let {sRGBHex: e} = await v.open();
                    b(e);
                } catch {
                }
        }, P = i.useCallback(e => {
            L(t => ({
                ...t,
                pending: e,
                input: e.hex
            })), n && a((0, u._i)(e.hex));
        }, [
            n,
            a
        ]), U = e => {
            a((0, u._i)(e));
        }, w = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(I.Z, {
                    onChange: P,
                    onChangeComplete: e => {
                        let {hex: t} = e;
                        return U(t);
                    },
                    color: D.pending.hsl
                }),
                _,
                (0, r.jsxs)('div', {
                    className: S.customColorPickerInputContainer,
                    children: [
                        T && null != v && (0, r.jsx)(m.JO, {
                            onClick: M,
                            tooltip: g.Z.Messages.PICK_A_COLOR_FROM_THE_PAGE,
                            tooltipPosition: 'top',
                            className: S.customColorPickerEyeDropper,
                            icon: f.EyeDropperIcon
                        }),
                        (0, r.jsx)(E.o, {
                            className: S.customColorPickerInput,
                            value: D.input,
                            onChange: b,
                            maxLength: 7
                        })
                    ]
                }),
                null != l && l.length > 0 && (0, r.jsx)('div', {
                    className: S.suggestedColors,
                    children: l.map((e, t) => (0, r.jsx)(c.P, {
                        'aria-label': '',
                        style: { backgroundColor: e },
                        className: S.suggestedColor,
                        onClick: () => b(e)
                    }, ''.concat(e, '-').concat(t)))
                }),
                p
            ]
        }), x = null != A ? A : d.V;
    return (0, r.jsx)(x, {
        'aria-label': g.Z.Messages.PICK_A_COLOR,
        className: o()(S.customColorPicker, N),
        children: w
    });
});
function C(e) {
    let {
            className: t,
            defaultColor: n,
            customColor: i,
            colors: a,
            value: u,
            disabled: c,
            onChange: d,
            renderDefaultButton: _,
            renderCustomButton: E,
            colorContainerClassName: f
        } = e, h = e => (0, r.jsx)('div', {
            className: S.colorPickerRow,
            children: e.map(e => (0, r.jsx)(N, {
                color: e,
                isSelected: e === u,
                onClick: d,
                disabled: c
            }, e))
        }), p = a.slice(0, a.length / 2), m = a.slice(a.length / 2, a.length), I = (0, l.ZP)({
            id: 'color-picker',
            isEnabled: !0,
            scrollToStart: A,
            scrollToEnd: A
        });
    return (0, r.jsx)(s.bG, {
        navigator: I,
        children: (0, r.jsx)(s.SJ, {
            children: e => {
                let {
                    ref: a,
                    ...s
                } = e;
                return (0, r.jsxs)('div', {
                    className: o()(S.container, t),
                    ref: a,
                    ...s,
                    children: [
                        (0, r.jsx)('div', {
                            className: o()(S.defaultContainer, f),
                            children: _({
                                value: u,
                                color: n,
                                onChange: d,
                                disabled: c
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: o()(S.customContainer, f),
                            children: E({
                                value: u,
                                customColor: i,
                                disabled: c
                            })
                        }),
                        (0, r.jsxs)('div', {
                            children: [
                                h(p),
                                h(m)
                            ]
                        })
                    ]
                });
            }
        })
    });
}
