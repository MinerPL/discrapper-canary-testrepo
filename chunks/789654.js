n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(627494),
    n(757143),
    n(47120),
    n(724458),
    n(390547),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(642549);
var r = n(735250),
    a = n(470079),
    l = n(688619),
    i = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(470716),
    u = n(433517),
    d = n(190558),
    h = n(203165),
    m = n(481060),
    x = n(410030),
    f = n(705262),
    g = n(374794),
    p = n(246992),
    b = n(231338),
    v = n(926091);
let { SemanticColors: _ } = d.V;
function C(e) {
    return e.replaceAll(/_|\./g, '-').toLowerCase();
}
function j(e) {
    return e.replaceAll(/_|-/g, '.').toLowerCase();
}
function T(e, t) {
    let [n, r] = a.useState(() => {
        let n = u.K.get(e);
        return null != n ? n : t;
    });
    return (
        a.useEffect(() => {
            u.K.set(e, n);
        }, [e, n]),
        [n, r]
    );
}
function N(e) {
    let t = _[e];
    return {
        name: e,
        colors: Object.fromEntries(
            Object.values(b.BR).map((e) => [
                e,
                {
                    color: t[e].raw,
                    opacity: t[e].opacity
                }
            ])
        ),
        highlight: !1
    };
}
function S(e, t, n, r, a) {
    return {
        name: t,
        colors: {
            ...e.colors,
            [a]: {
                color: n,
                opacity: r
            }
        },
        highlight: !1
    };
}
function y() {
    let e = (0, x.Fg)(),
        [{ semanticColorOverrides: t, rawColorOverrides: n }, l, o, u, d, b] = (function (e, t) {
            let [n, r] = T(''.concat(e, '-states'), [t]),
                [l, i] = T(''.concat(e, '-index'), 0),
                o = n[l],
                s = a.useCallback(
                    (e) => {
                        r(['function' == typeof e ? e(o) : e, ...n].slice(0, 20)), i(0);
                    },
                    [i, r, n, o]
                ),
                c = a.useCallback(() => {
                    i(Math.min(n.length - 1, l + 1));
                }, [l, i, n.length]),
                u = a.useCallback(() => {
                    i(Math.max(0, l - 1));
                }, [l, i]),
                d = l < n.length - 1;
            return [o, s, c, u, d, l > 0];
        })('color-override-08-30-2024', {
            semanticColorOverrides: {},
            rawColorOverrides: {}
        }),
        y = a.useMemo(
            () =>
                Object.keys(h.b).reduce(
                    (e, t) => [
                        ...e,
                        {
                            value: t,
                            label: t
                        }
                    ],
                    []
                ),
            []
        ),
        w = a.useMemo(() => {
            let r = Object.entries(t).map((t) => {
                    let [n, r] = t,
                        { colors: a, highlight: l } = r,
                        i = a[e];
                    if (null == i) return '';
                    let o = C(n);
                    if (l) return '--'.concat(o, ': magenta !important;');
                    let s = C(i.color),
                        c = i.opacity,
                        u = c < 1 ? 'hsl(var(--'.concat(s, '-hsl) / ').concat(c, ')') : 'var(--'.concat(s, ')');
                    return '--'.concat(o, ': color-mix(\n        in oklab,\n        ').concat(u, ' 100%,\n        var(--theme-base-color, black) var(--theme-base-color-amount, 0%)\n      );');
                }),
                a = Object.keys(n).flatMap((e) => {
                    let t = n[e],
                        {
                            h: r,
                            s: a,
                            l
                        } = (function (e) {
                            let [t, n, r] = 'transparent' === e ? [0, 0, 0] : i()(e).hsl(),
                                a = isNaN(t) ? 0 : s().round(t, 1),
                                l = s().round(100 * r, 1);
                            return {
                                h: a,
                                s: s().round(100 * n, 1),
                                l: l
                            };
                        })(t.highlight ? '#FF00FF' : t.color),
                        o = s().kebabCase(e);
                    return ['--'.concat(o, '-hsl: ').concat(r, ' calc(var(--saturation-factor, 1) * ').concat(a, '%) ').concat(l, '% !important;'), '--'.concat(o, ': hsl(var(--').concat(o, '-hsl)) !important;')];
                });
            return '\n      .theme-'.concat(e, ' {\n        ').concat(r.join('\n'), '\n      }\n\n      html {\n        ').concat(a.join('\n'), '\n      }\n    ');
        }, [n, t, e]),
        k = a.useCallback(
            (e) => {
                l((t) => {
                    var n;
                    let { semanticColorOverrides: r } = t,
                        a = null !== (n = r[e]) && void 0 !== n ? n : N(e);
                    return {
                        ...t,
                        semanticColorOverrides: {
                            ...r,
                            [e]: a
                        }
                    };
                });
            },
            [l]
        ),
        E = a.useCallback(
            (e) => {
                l((t) => {
                    let { rawColorOverrides: n } = t;
                    return null == n[e]
                        ? {
                              ...t,
                              rawColorOverrides: {
                                  ...n,
                                  [e]: {
                                      color: h.b[e].hex,
                                      highlight: !1
                                  }
                              }
                          }
                        : t;
                });
            },
            [l]
        ),
        R = a.useCallback(
            (e) => {
                l((t) => {
                    let { semanticColorOverrides: n } = t,
                        r = { ...n };
                    return (
                        delete r[e],
                        {
                            ...t,
                            semanticColorOverrides: r
                        }
                    );
                });
            },
            [l]
        ),
        Z = a.useCallback(
            (e) => {
                l((t) => {
                    var n;
                    let { semanticColorOverrides: r } = t,
                        a = r[e];
                    if (null == a) return t;
                    let l = { ...r };
                    return (
                        (l[e] = {
                            ...(n = a),
                            highlight: !n.highlight
                        }),
                        {
                            ...t,
                            semanticColorOverrides: l
                        }
                    );
                });
            },
            [l]
        ),
        O = Object.keys(_).map((e) => ({
            value: e,
            label: C(e)
        })),
        A = Object.keys(h.b).map((e) => ({
            value: e,
            label: e
        }));
    return (0, r.jsxs)('div', {
        className: v.panel,
        children: [
            (0, r.jsxs)('div', {
                className: v.toolbar,
                style: {
                    '--custom-theme-selection-selection-size': '40px',
                    '--custom-theme-selection-group-column-gap': 'var(--spacing-8)'
                },
                children: [
                    (0, r.jsx)(f.ZP, {
                        type: f.yH.SETTINGS,
                        children: (0, r.jsx)(f.ZP.Basic, {
                            className: v.toolbarThemeSelector,
                            hideSystemSelector: !0
                        })
                    }),
                    (0, r.jsxs)('div', {
                        className: v.toolbarButtons,
                        children: [
                            (0, r.jsx)(m.Button, {
                                size: m.Button.Sizes.ICON,
                                color: m.Button.Colors.TRANSPARENT,
                                look: m.Button.Looks.BLANK,
                                onClick: o,
                                disabled: !d,
                                children: (0, r.jsx)(m.UndoIcon, {})
                            }),
                            (0, r.jsx)(m.Button, {
                                size: m.Button.Sizes.ICON,
                                color: m.Button.Colors.TRANSPARENT,
                                look: m.Button.Looks.BLANK,
                                onClick: u,
                                disabled: !b,
                                children: (0, r.jsx)(m.RedoIcon, {})
                            }),
                            (0, r.jsx)(g.Z, {
                                'aria-label': 'Import',
                                filters: [
                                    {
                                        name: 'JSON',
                                        extensions: ['json']
                                    }
                                ],
                                onChange: (e) => {
                                    let t = e.currentTarget.files,
                                        n = null == t ? void 0 : t[0];
                                    if (null == n) return;
                                    let r = new FileReader();
                                    (r.onload = () => {
                                        let e = r.result;
                                        if ('string' == typeof e)
                                            try {
                                                let t = JSON.parse(e);
                                                if (null == t) return;
                                                let { semanticColorOverrides: n, rawColorOverrides: r } = t;
                                                l({
                                                    semanticColorOverrides: n,
                                                    rawColorOverrides: r
                                                });
                                            } catch (e) {}
                                    }),
                                        r.readAsText(n);
                                },
                                size: m.Button.Sizes.ICON,
                                color: m.Button.Colors.TRANSPARENT,
                                look: m.Button.Looks.BLANK,
                                children: (0, r.jsx)(m.UploadIcon, {})
                            }),
                            (0, r.jsx)(m.Button, {
                                size: m.Button.Sizes.ICON,
                                color: m.Button.Colors.TRANSPARENT,
                                look: m.Button.Looks.BLANK,
                                onClick: () => {
                                    let e = JSON.stringify(
                                            {
                                                semanticColorOverrides: t,
                                                rawColorOverrides: n
                                            },
                                            null,
                                            2
                                        ),
                                        r = new Blob([e], { type: 'application/json' }),
                                        a = URL.createObjectURL(r),
                                        l = document.createElement('a'),
                                        i = btoa(e).slice(0, 8);
                                    (l.href = a), (l.download = 'color-overrides-'.concat(i, '.json')), l.click(), URL.revokeObjectURL(a);
                                },
                                children: (0, r.jsx)(m.DownloadIcon, {})
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(m.Text, {
                variant: 'text-lg/semibold',
                children: 'Semantic Tokens'
            }),
            (0, r.jsx)(m.SearchableSelect, {
                options: O,
                placeholder: 'Search for a semantic token...',
                value: void 0,
                onChange: k,
                renderOptionPrefix: (t) =>
                    null == t
                        ? null
                        : (0, r.jsx)('div', {
                              'data-theme': e,
                              className: v.colorPreview,
                              style: { '--custom-color': 'var(--'.concat(t.label, ')') }
                          }),
                popoutLayerContext: p.O$
            }),
            (0, r.jsx)('ul', {
                className: v.overrides,
                children: Object.entries(t).map((t) => {
                    let [n, a] = t,
                        i = a.colors[e];
                    if (null == i) return null;
                    let o = j(i.color),
                        s = i.opacity,
                        c = _[n][e];
                    return (0, r.jsx)(
                        I,
                        {
                            title: C(n),
                            subtitle: 1 === c.opacity ? j(c.raw) : ''.concat(j(c.raw), ' @ ').concat(100 * c.opacity, '%'),
                            highlight: a.highlight,
                            onReset: () => {
                                l((e) => {
                                    let { semanticColorOverrides: t } = e;
                                    if (null == t[n]) return e;
                                    let r = N(n);
                                    return {
                                        ...e,
                                        semanticColorOverrides: {
                                            ...t,
                                            [n]: r
                                        }
                                    };
                                });
                            },
                            onRemove: () => R(n),
                            onHighlightToggle: () => Z(n),
                            children: (0, r.jsxs)('div', {
                                className: v.semanticOverride,
                                children: [
                                    (0, r.jsx)(m.SearchableSelect, {
                                        value: o,
                                        options: y,
                                        onChange: (t) => {
                                            l((r) => {
                                                let { semanticColorOverrides: a } = r,
                                                    l = a[n];
                                                if (null == l) return r;
                                                let i = l.colors[e];
                                                if (null == i) return r;
                                                let o = S(l, n, t, i.opacity, e);
                                                return {
                                                    ...r,
                                                    semanticColorOverrides: {
                                                        ...a,
                                                        [n]: o
                                                    }
                                                };
                                            });
                                        },
                                        renderOptionPrefix: (t) => {
                                            if (null == t) return null;
                                            let n = t.label.replaceAll('.', '-');
                                            return (0, r.jsx)('div', {
                                                'data-theme': e,
                                                className: v.colorPreview,
                                                style: { '--custom-color': 'var(--'.concat(n, ')') }
                                            });
                                        },
                                        popoutLayerContext: p.O$
                                    }),
                                    (0, r.jsx)(m.TextInput, {
                                        inputClassName: v.opacityInput,
                                        type: 'number',
                                        value: s,
                                        min: 0,
                                        max: 1,
                                        step: 0.01,
                                        onChange: (t) => {
                                            let r = parseFloat(t);
                                            !isNaN(r) &&
                                                l((t) => {
                                                    let { semanticColorOverrides: a } = t,
                                                        l = a[n];
                                                    if (null == l) return t;
                                                    let i = l.colors[e];
                                                    if (null == i) return t;
                                                    let o = S(l, n, i.color, r, e);
                                                    return {
                                                        ...t,
                                                        semanticColorOverrides: {
                                                            ...a,
                                                            [n]: o
                                                        }
                                                    };
                                                });
                                        }
                                    })
                                ]
                            })
                        },
                        n
                    );
                })
            }),
            (0, r.jsx)('div', { className: v.divider }),
            (0, r.jsx)(m.Text, {
                variant: 'text-lg/semibold',
                children: 'Raw Tokens'
            }),
            (0, r.jsx)(m.SearchableSelect, {
                options: A,
                placeholder: 'Search for a raw color...',
                value: void 0,
                onChange: E,
                renderOptionPrefix: (t) => {
                    if (null == t) return null;
                    let n = t.label.replaceAll('.', '-');
                    return (0, r.jsx)('div', {
                        'data-theme': e,
                        className: v.colorPreview,
                        style: { '--custom-color': 'var(--'.concat(n, ')') }
                    });
                },
                popoutLayerContext: p.O$
            }),
            (0, r.jsx)('ul', {
                className: v.rawOverrides,
                children: Object.entries(n).map((e) => {
                    let [t, n] = e;
                    return (0, r.jsxs)(
                        I,
                        {
                            title: t,
                            subtitle: h.b[t].hex,
                            highlight: n.highlight,
                            onReset: () => {
                                l((e) => {
                                    let { rawColorOverrides: n } = e,
                                        r = { ...n };
                                    return (
                                        (r[t] = {
                                            color: h.b[t].hex,
                                            highlight: !1
                                        }),
                                        {
                                            ...e,
                                            rawColorOverrides: r
                                        }
                                    );
                                });
                            },
                            onRemove: () => {
                                l((e) => {
                                    let { rawColorOverrides: n } = e,
                                        r = { ...n };
                                    return (
                                        delete r[t],
                                        {
                                            ...e,
                                            rawColorOverrides: r
                                        }
                                    );
                                });
                            },
                            onHighlightToggle: () => {
                                l((e) => {
                                    let { rawColorOverrides: n } = e,
                                        r = n[t];
                                    if (null == r) return e;
                                    let a = { ...n };
                                    return (
                                        (a[t] = {
                                            ...r,
                                            highlight: !r.highlight
                                        }),
                                        {
                                            ...e,
                                            rawColorOverrides: a
                                        }
                                    );
                                });
                            },
                            children: [
                                (0, r.jsx)('input', {
                                    className: v.colorInput,
                                    type: 'color',
                                    value: n.color,
                                    onChange: (e) => {
                                        let n = e.target.value;
                                        l((e) => {
                                            let { rawColorOverrides: r } = e;
                                            return {
                                                ...e,
                                                rawColorOverrides: {
                                                    ...r,
                                                    [t]: {
                                                        color: n,
                                                        highlight: !1
                                                    }
                                                }
                                            };
                                        });
                                    }
                                }),
                                (0, r.jsx)(m.Text, {
                                    variant: 'text-sm/medium',
                                    tabularNumbers: !0,
                                    children: n.color
                                })
                            ]
                        },
                        t
                    );
                })
            }),
            (0, r.jsx)(c.ql, {
                children: (0, r.jsx)('style', {
                    id: 'devtools-color-overrides',
                    children: w
                })
            })
        ]
    });
}
function I(e) {
    let { title: t, subtitle: n, highlight: a, onReset: l, onRemove: i, onHighlightToggle: o, children: s } = e;
    return (0, r.jsxs)('li', {
        className: v.override,
        'data-highlight': a,
        children: [
            (0, r.jsxs)('div', {
                className: v.overrideHeader,
                children: [
                    (0, r.jsxs)('div', {
                        className: v.title,
                        children: [
                            (0, r.jsx)(m.Text, {
                                lineClamp: 1,
                                variant: 'text-md/medium',
                                className: v.overrideHeading,
                                tabularNumbers: !0,
                                children: t
                            }),
                            null != n
                                ? (0, r.jsx)(m.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'text-secondary',
                                      tabularNumbers: !0,
                                      children: n
                                  })
                                : null
                        ]
                    }),
                    (0, r.jsx)(m.Clickable, {
                        onClick: o,
                        className: v.clickabeIcon,
                        children: (0, r.jsx)(m.EyeIcon, {
                            size: 'xs',
                            color: a ? 'var(--text-brand)' : 'currentColor'
                        })
                    }),
                    (0, r.jsx)(m.Clickable, {
                        className: v.clickabeIcon,
                        onClick: l,
                        children: (0, r.jsx)(m.RefreshIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    }),
                    (0, r.jsx)(m.Clickable, {
                        className: v.removeOverride,
                        onClick: i,
                        children: (0, r.jsx)(m.XSmallIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: v.overrideContent,
                children: s
            })
        ]
    });
}
