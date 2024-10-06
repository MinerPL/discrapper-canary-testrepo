n.d(t, {
    A7: function () {
        return T;
    },
    hQ: function () {
        return N;
    },
    lo: function () {
        return R;
    },
    yn: function () {
        return S;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(924826),
    l = n(91192),
    u = n(178940),
    c = n(1561),
    d = n(742746),
    _ = n(326452),
    E = n(993365),
    f = n(481060),
    h = n(689938),
    p = n(251887);
let I = 'data-listbox-item-id',
    m = Object.freeze({
        STANDARD: p.selected,
        BRAND: p.selectedBrand
    });
function T(e) {
    let [t, n] = i.useState(() => new Set(e));
    return [
        t,
        i.useCallback((e) => {
            n((t) => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n;
            });
        }, [])
    ];
}
function S(e) {
    let [t, n] = i.useState(() => new Set(null != e ? [e] : void 0));
    return [
        t,
        i.useCallback((e) => {
            n(new Set([e]));
        }, [])
    ];
}
function g(e) {
    return String(e);
}
let A = i.createContext({
    activeDescendant: null,
    selected: new Set(),
    setSelected: () => null,
    itemToString: g
});
function N(e) {
    let { placeholder: t, children: n, value: a, onChange: u, className: c, listClassName: m, 'aria-label': T, multiSelect: S = !1, autoFocus: N = !1, maxVisibleItems: O = 5, itemToString: R = g, showScrollbar: v = !1 } = e,
        [C, L] = i.useState(''),
        [y] = i.useState(!0),
        [D, b] = i.useState(null),
        M = i.useId(),
        P = i.useRef(null);
    i.useLayoutEffect(() => {
        let e = document.querySelector('['.concat(I, '="').concat(D, '"]')),
            t = P.current;
        null != t &&
            null != e &&
            t.scrollIntoViewNode({
                node: e,
                padding: 12
            });
    }, [D]);
    let U = n(C),
        w = 0 === U.length,
        x = i.useId(),
        G = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = P.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        k = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = P.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        B = i.useCallback((e, t) => {
            b(t);
            let n = document.querySelector(e),
                r = P.current;
            null != r && null != n && r.scrollIntoViewNode({ node: n });
        }, []),
        F = (0, o.ZP)({
            id: x,
            isEnabled: !0,
            useVirtualFocus: !0,
            scrollToStart: G,
            scrollToEnd: k,
            setFocus: B
        }),
        V = v ? d.Tv : d.lW;
    return (0, r.jsx)(l.bG, {
        navigator: F,
        children: (0, r.jsx)(l.SJ, {
            children: (e) => {
                let { ref: n, onKeyDown: i, ...o } = e;
                return (0, r.jsxs)('div', {
                    ref: n,
                    role: 'combobox',
                    'aria-label': T,
                    'aria-expanded': y,
                    'aria-controls': y ? M : void 0,
                    'aria-owns': M,
                    'aria-haspopup': 'listbox',
                    className: s()(p.combobox, c),
                    children: [
                        (0, r.jsx)(_.E, {
                            autoFocus: N,
                            size: _.E.Sizes.MEDIUM,
                            placeholder: t,
                            query: C,
                            onChange: L,
                            onKeyDown: i,
                            onBlur: () => b(null),
                            onClear: () => L(''),
                            className: s()({ [p.searchWithScrollbar]: v }),
                            inputProps: {
                                'aria-multiline': !1,
                                'aria-activedescendant': null != D ? D : void 0
                            }
                        }),
                        (0, r.jsx)('div', {
                            children:
                                y &&
                                (w
                                    ? (0, r.jsxs)('div', {
                                          className: p.empty,
                                          children: [
                                              (0, r.jsx)(f.Heading, {
                                                  variant: 'heading-md/semibold',
                                                  children: h.Z.Messages.AUTOCOMPLETE_NO_RESULTS_HEADER
                                              }),
                                              (0, r.jsx)(E.x, {
                                                  color: 'text-muted',
                                                  variant: 'text-md/normal',
                                                  children: h.Z.Messages.AUTOCOMPLETE_NO_RESULTS_BODY
                                              })
                                          ]
                                      })
                                    : (0, r.jsx)(A.Provider, {
                                          value: {
                                              activeDescendant: D,
                                              selected: a,
                                              setSelected: u,
                                              itemToString: R
                                          },
                                          children: (0, r.jsx)(V, {
                                              ...o,
                                              style: { maxHeight: 46 * O },
                                              'aria-multiselectable': S,
                                              id: M,
                                              ref: P,
                                              className: s()(p.list, m, { [p.scroller]: v }),
                                              sections: [U.length],
                                              sectionHeight: 0,
                                              rowHeight: 40,
                                              renderRow: (e) => {
                                                  let { row: t } = e;
                                                  return U[t];
                                              },
                                              renderSection: () => null
                                          })
                                      }))
                        })
                    ]
                });
            }
        })
    });
}
let O = i.createContext(null);
function R(e) {
    var t;
    let { value: n, children: a, disabled: o = !1, selectedColor: u = m.STANDARD, ...d } = e,
        { activeDescendant: _, selected: E, setSelected: f, itemToString: h } = i.useContext(A),
        T = h(n),
        S = _ === T,
        g = null !== (t = null == d ? void 0 : d.selected) && void 0 !== t ? t : E.has(n),
        N = (0, l.JA)(T);
    return (0, r.jsx)(c.P, {
        tag: 'li',
        id: T,
        onClick: () => (o ? null : f(n)),
        [I]: n,
        className: s()(p.item, {
            [p.focused]: S,
            [u]: g,
            [p.disabled]: o
        }),
        ...N,
        role: 'option',
        'aria-selected': g,
        'aria-disabled': o,
        children: (0, r.jsx)(O.Provider, {
            value: n,
            children: a
        })
    });
}
(R.Colors = m),
    (R.Label = function (e) {
        let { children: t } = e;
        return (0, r.jsx)('span', {
            className: p.itemLabel,
            children: t
        });
    }),
    (R.Icon = function (e) {
        let { children: t } = e;
        return (0, r.jsx)('span', {
            className: p.itemCheckbox,
            children: t
        });
    }),
    (R.Checkbox = function (e) {
        let { checked: t } = e,
            { selected: n } = i.useContext(A),
            a = i.useContext(O);
        return (0, r.jsx)('span', {
            className: p.itemCheckbox,
            children: (0, r.jsx)(u.X, {
                displayOnly: !0,
                value: null != t ? t : null != a && n.has(a),
                type: u.X.Types.INVERTED,
                size: 20
            })
        });
    }),
    (R.Checkmark = function () {
        let { selected: e } = i.useContext(A),
            t = i.useContext(O);
        return e.has(t)
            ? (0, r.jsx)('span', {
                  className: p.itemCheckbox,
                  children: (0, r.jsx)(f.CircleCheckIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 20,
                      height: 20
                  })
              })
            : null;
    });
