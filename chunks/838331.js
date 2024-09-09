n.d(t, {
    A7: function () {
        return g;
    },
    hQ: function () {
        return v;
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
    d = n(260034),
    _ = n(742746),
    E = n(326452),
    f = n(993365),
    h = n(481060),
    p = n(689938),
    m = n(310761);
let I = 'data-listbox-item-id',
    T = Object.freeze({
        STANDARD: m.selected,
        BRAND: m.selectedBrand
    });
function g(e) {
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
function A(e) {
    return String(e);
}
let N = i.createContext({
    activeDescendant: null,
    selected: new Set(),
    setSelected: () => null,
    itemToString: A
});
function v(e) {
    let { placeholder: t, children: n, value: a, onChange: u, className: c, listClassName: h, 'aria-label': T, multiSelect: g = !1, autoFocus: S = !1, maxVisibleItems: v = 5, itemToString: O = A, showScrollbar: R = !1 } = e,
        [C, y] = i.useState(''),
        [D] = i.useState(!0),
        [L, b] = i.useState(null),
        M = i.useId(),
        P = i.useRef(null);
    i.useLayoutEffect(() => {
        let e = document.querySelector('['.concat(I, '="').concat(L, '"]')),
            t = P.current;
        null != t &&
            null != e &&
            t.scrollIntoViewNode({
                node: e,
                padding: 12
            });
    }, [L]);
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
        V = R ? _.Tv : _.lW;
    return (0, r.jsx)(l.bG, {
        navigator: F,
        children: (0, r.jsx)(l.SJ, {
            children: (e) => {
                let { ref: n, onKeyDown: i, ...o } = e;
                return (0, r.jsxs)('div', {
                    ref: n,
                    role: 'combobox',
                    'aria-label': T,
                    'aria-expanded': D,
                    'aria-controls': D ? M : void 0,
                    'aria-owns': M,
                    'aria-haspopup': 'listbox',
                    className: s()(m.combobox, c),
                    children: [
                        (0, r.jsx)(E.E, {
                            autoFocus: S,
                            size: E.E.Sizes.MEDIUM,
                            placeholder: t,
                            query: C,
                            onChange: y,
                            onKeyDown: i,
                            onBlur: () => b(null),
                            onClear: () => y(''),
                            className: s()({ [m.searchWithScrollbar]: R }),
                            inputProps: {
                                'aria-multiline': !1,
                                'aria-activedescendant': null != L ? L : void 0
                            }
                        }),
                        (0, r.jsx)('div', {
                            children:
                                D &&
                                (w
                                    ? (0, r.jsxs)('div', {
                                          className: m.empty,
                                          children: [
                                              (0, r.jsx)(d.X, {
                                                  variant: 'heading-md/semibold',
                                                  children: p.Z.Messages.AUTOCOMPLETE_NO_RESULTS_HEADER
                                              }),
                                              (0, r.jsx)(f.x, {
                                                  color: 'text-muted',
                                                  variant: 'text-md/normal',
                                                  children: p.Z.Messages.AUTOCOMPLETE_NO_RESULTS_BODY
                                              })
                                          ]
                                      })
                                    : (0, r.jsx)(N.Provider, {
                                          value: {
                                              activeDescendant: L,
                                              selected: a,
                                              setSelected: u,
                                              itemToString: O
                                          },
                                          children: (0, r.jsx)(V, {
                                              ...o,
                                              style: { maxHeight: 46 * v },
                                              'aria-multiselectable': g,
                                              id: M,
                                              ref: P,
                                              className: s()(m.list, h, { [m.scroller]: R }),
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
    let { value: n, children: a, disabled: o = !1, selectedColor: u = T.STANDARD, ...d } = e,
        { activeDescendant: _, selected: E, setSelected: f, itemToString: h } = i.useContext(N),
        p = h(n),
        g = _ === p,
        S = null !== (t = null == d ? void 0 : d.selected) && void 0 !== t ? t : E.has(n),
        A = (0, l.JA)(p);
    return (0, r.jsx)(c.P, {
        tag: 'li',
        id: p,
        onClick: () => (o ? null : f(n)),
        [I]: n,
        className: s()(m.item, {
            [m.focused]: g,
            [u]: S,
            [m.disabled]: o
        }),
        ...A,
        role: 'option',
        'aria-selected': S,
        'aria-disabled': o,
        children: (0, r.jsx)(O.Provider, {
            value: n,
            children: a
        })
    });
}
(R.Colors = T),
    (R.Label = function (e) {
        let { children: t } = e;
        return (0, r.jsx)('span', {
            className: m.itemLabel,
            children: t
        });
    }),
    (R.Icon = function (e) {
        let { children: t } = e;
        return (0, r.jsx)('span', {
            className: m.itemCheckbox,
            children: t
        });
    }),
    (R.Checkbox = function (e) {
        let { checked: t } = e,
            { selected: n } = i.useContext(N),
            a = i.useContext(O);
        return (0, r.jsx)('span', {
            className: m.itemCheckbox,
            children: (0, r.jsx)(u.X, {
                displayOnly: !0,
                value: null != t ? t : null != a && n.has(a),
                type: u.X.Types.INVERTED,
                size: 20
            })
        });
    }),
    (R.Checkmark = function () {
        let { selected: e } = i.useContext(N),
            t = i.useContext(O);
        return e.has(t)
            ? (0, r.jsx)('span', {
                  className: m.itemCheckbox,
                  children: (0, r.jsx)(h.CircleCheckIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 20,
                      height: 20
                  })
              })
            : null;
    });
