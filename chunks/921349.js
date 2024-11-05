n.d(t, {
    V: function () {
        return w;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(423802),
    l = n(372817),
    u = n(924826),
    c = n(91192),
    d = n(260866),
    f = n(693789),
    _ = n(178940),
    h = n(1561),
    p = n(84735),
    m = n(15127),
    g = n(766646),
    E = n(742746),
    v = n(235874),
    I = n(922770),
    S = n(993365),
    T = n(481060),
    b = n(393238),
    y = n(434650),
    A = n(98650),
    N = n(237617),
    C = n(540059),
    R = n(748585),
    O = n(388032),
    D = n(711230);
let L = { keys: ['label'] };
function x(e) {
    return e.label;
}
let w = i.forwardRef(function (e, t) {
    let { options: n, value: a, onChange: l, clearable: d = !1, multi: f = !1, closeOnSelect: _ = !0, onOpen: g, onClose: E, placeholder: I = O.intl.string(O.t.XqMe3N), wrapperClassName: S, className: A, isDisabled: C = !1, maxVisibleItems: w = 7, look: P = R.q.FILLED, autoFocus: G = !1, popoutPosition: B = 'bottom', filter: V = !0, debounceTime: j, renderOptionLabel: H = x, onSearchChange: Y, renderOptionPrefix: W = () => null, renderOptionSuffix: K = () => null, 'aria-describedby': z, 'aria-invalid': q, 'aria-labelledby': Q, 'aria-required': X, inputClassNames: J, centerCaret: $ = !1, onBlur: ee, matchSorterOptions: et, clearQueryOnSelect: en = !1, hidePills: er, renderCustomPill: ei, customPillContainerClassName: ea, ...es } = e,
        { ref: eo, width: el } = (0, b.Z)(),
        { titleId: eu, errorId: ec, error: ed } = (0, m.Gc)(),
        { ref: ef, width: e_ } = (0, b.Z)(),
        eh = i.useRef(null),
        [ep, em] = i.useState(null),
        [eg, eE] = i.useState(!1),
        [ev, eI] = i.useState(null),
        [eS, eT] = i.useState(!1),
        eb = i.useRef(null),
        ey = i.useRef(null),
        {
            options: eA,
            loading: eN,
            onQueryChange: eC
        } = (function (e) {
            let { active: t, loadableOptions: n, debounceTime: r } = e,
                a = 'function' == typeof n,
                [s, o] = i.useState({
                    options: a ? [] : n,
                    query: '',
                    debouncedQuery: '',
                    loading: !1
                }),
                { options: l, loading: u, query: c, debouncedQuery: d } = s,
                f = i.useCallback(
                    (e) =>
                        o((t) => ({
                            ...t,
                            loading: a,
                            query: e,
                            debouncedQuery: e
                        })),
                    [a]
                );
            return (
                i.useEffect(() => {
                    t && f('');
                }, [t, f]),
                i.useEffect(() => {
                    let e;
                    return (
                        a
                            ? (o((e) => ({
                                  ...e,
                                  loading: !0,
                                  debouncedQuery: null
                              })),
                              (e = setTimeout(
                                  () => {
                                      f(c);
                                  },
                                  null != r ? r : 500
                              )))
                            : f(c),
                        () => {
                            clearTimeout(e);
                        }
                    );
                }, [a, c, r, f]),
                i.useEffect(() => {
                    let e = !1;
                    return (
                        t &&
                            null !== d &&
                            ('function' == typeof n ? n(d) : Promise.resolve(n)).then((t) => {
                                !e &&
                                    o((e) => ({
                                        ...e,
                                        options: t,
                                        loading: !1
                                    }));
                            }),
                        () => {
                            e = !0;
                        }
                    );
                }, [t, n, d]),
                {
                    options: l,
                    loading: u,
                    onQueryChange: i.useCallback((e) => {
                        o((t) => ({
                            ...t,
                            query: e
                        }));
                    }, [])
                }
            );
        })({
            active: eg,
            loadableOptions: n,
            debounceTime: j
        }),
        eR = i.useMemo(() => {
            var e, t;
            return (e = eA), null == (t = a) ? [] : (Array.isArray(t) ? t : [t]).map((t) => ('object' == typeof t && (null == t || 'value' in t) ? t : e.find((e) => e.value === t))).filter(Boolean);
        }, [eA, a]),
        eO = i.useMemo(() => eR.map((e) => e.value), [eR]),
        eD = eR[eR.length - 1],
        eL = (0, N.Z)(eD),
        ex = i.useId(),
        ew = i.useId(),
        eM = i.useId(),
        eP = i.useCallback(
            (e) => {
                eg !== e && !C && (eE(e), e ? null == g || g() : null == E || E());
            },
            [C, E, g, eg]
        ),
        ek = i.useCallback(
            (e) => {
                eg && !e && eP(!1);
            },
            [eP, eg]
        ),
        eU = (0, y.O)(ek);
    i.useImperativeHandle(t, () => ({
        close() {
            eP(!1);
        }
    }));
    let eG = i.useCallback((e, t) => {
            let n = document.querySelector(e),
                r = eb.current;
            em(t), null != r && null != n && r.scrollIntoViewNode({ node: n });
        }, []),
        eB = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = eb.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        eZ = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = eb.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        eF = (0, u.ZP)({
            id: ew,
            defaultFocused: null != eD ? String(eD.value) : void 0,
            scrollToStart: eB,
            scrollToEnd: eZ,
            isEnabled: eg,
            wrap: !0,
            useVirtualFocus: !0,
            setFocus: eG,
            disableClickOnSpace: !0
        }),
        eV = (0, N.Z)(eF),
        ej = (0, N.Z)(eA);
    i.useEffect(() => {
        let e = ej.current,
            t = eL.current;
        eg &&
            null != t &&
            !eN &&
            requestAnimationFrame(() => {
                let n = eb.current,
                    r = e.indexOf(t);
                null == n ||
                    n.scrollToIndex({
                        section: 0,
                        row: r
                    });
            });
    }, [eg, eN]),
        i.useEffect(() => {
            let e = eV.current;
            if (eg && !eN) {
                var t;
                let n = eh.current;
                if (null != n) {
                    n.focus();
                    let { value: e } = n;
                    (n.value = ' '), (n.value = e);
                }
                em(null !== (t = e.focusedItemId()) && void 0 !== t ? t : null);
            } else {
                let t = eL.current,
                    n = null != t ? String(t.value) : null;
                e.setFocus(n), em(null);
            }
        }, [eg, eN]),
        i.useLayoutEffect(() => {
            !eg && (f ? eI('') : null != eD && eI(eD.label));
        }, [f, eD, eg]),
        i.useLayoutEffect(() => {
            f && eI('');
        }, [f, eR.length]);
    let eH = i.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == e) {
                l(f ? [] : void 0);
                return;
            }
            let r = 'function' == typeof n,
                i = r ? eA.find((t) => t.value === e) : e;
            if (f) {
                let n = null != a ? a : [];
                if ((n.some((t) => (r ? t.value : t) === e) ? l(n.filter((t) => (r ? t.value : t) !== e)) : l([...n, i]), t)) {
                    var s;
                    null === (s = eh.current) || void 0 === s || s.focus();
                }
            } else l(i);
            em(null), (!f || _) && eP(!1), eT(!1), en && eI('');
        },
        [n, eA, f, _, en, l, a, eP]
    );
    i.useLayoutEffect(() => {
        if (G) {
            var e;
            null === (e = eh.current) || void 0 === e || e.focus();
        }
    }, [G]);
    let eY = i.useCallback(() => {
            eI(''), eH(null), eP(!0);
        }, [eH, eP]),
        eW = i.useCallback(
            (e) => {
                switch (e.key) {
                    case 'Escape':
                        eg && (e.stopPropagation(), eP(!1));
                        break;
                    case 'ArrowDown':
                    case 'ArrowUp':
                        eP(!0);
                }
            },
            [eP, eg]
        ),
        eK = eA;
    eS && null != ev && !1 !== V && (eK = 'function' == typeof V ? V(eA, ev) : (0, o.Lu)(eA, ev, null != et ? et : L)),
        i.useEffect(() => {
            let e = eb.current;
            null == e || e.scrollToTop();
        }, [ev]),
        i.useEffect(() => {
            !eN && eS && null !== ev && requestAnimationFrame(() => eF.focusFirstVisibleItem());
        }, [eN, eS, ev]);
    let ez = f ? F : Z,
        eq = i.useRef(null),
        { focusPreviousItem: eQ, focusNextItem: eX } = k(eq, eh, eR);
    return (0, r.jsxs)(c.bG, {
        navigator: eF,
        children: [
            (0, r.jsx)(v.y, {
                spacing: 0,
                animation: v.y.Animation.NONE,
                shouldShow: eg,
                onRequestClose: () => eP(!1),
                layerContext: es.popoutLayerContext,
                renderPopout: (e) => {
                    let { closePopout: t, position: n, updatePosition: i } = e;
                    return (0, r.jsx)(M, {
                        loading: eN,
                        multi: !!f,
                        listRef: eb,
                        listId: ex,
                        maxVisibleItems: w,
                        width: e_,
                        selectedValues: eO,
                        closePopout: t,
                        onSelect: eH,
                        closeOnSelect: _,
                        options: eK,
                        activeDescendant: ep,
                        renderOptionLabel: H,
                        updatePosition: i,
                        popoutPosition: n,
                        renderOptionPrefix: W,
                        renderOptionSuffix: K
                    });
                },
                position: B,
                children: (e, t) => {
                    let { 'aria-expanded': n, 'aria-controls': i } = e,
                        { isShown: a, position: o } = t,
                        l = a ? T.ChevronSmallUpIcon : T.ChevronSmallDownIcon,
                        { ref: u, onKeyDown: c } = eF.containerProps;
                    return (0, r.jsxs)('div', {
                        ref: ey,
                        className: s()(S, D.wrapper),
                        style: { '--icons-width': ''.concat(el, 'px') },
                        onBlur: (e) => {
                            var t, n, r;
                            if (!((null === (t = ey.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) || (null === (r = eb.current) || void 0 === r ? void 0 : null === (n = r.getScrollerNode()) || void 0 === n ? void 0 : n.contains(e.relatedTarget)))) !f && null != eD && eI(eD.label), eT(!1), eP(!1), null == ee || ee(e);
                        },
                        children: [
                            (0, r.jsx)(p.t, {
                                ringTarget: ef,
                                focusTarget: eh,
                                offset: 4,
                                children: (0, r.jsx)('div', {
                                    onClick: C
                                        ? void 0
                                        : (e) => {
                                              e.stopPropagation(), e.preventDefault(), eI(''), eP(!0);
                                          },
                                    onMouseDown: (e) => {
                                        e.preventDefault();
                                    },
                                    ref: (e) => {
                                        (ef.current = e), (eU.current = e);
                                    },
                                    className: s()(D.select, D.searchable, A, {
                                        [D.open]: a,
                                        [D.lookFilled]: P === R.q.FILLED,
                                        [D.disabled]: C,
                                        [D.multi]: f,
                                        [D.selectPositionTop]: 'top' === o
                                    }),
                                    children: (0, r.jsx)('div', {
                                        className: s()(D.value, { [D.multi]: f }),
                                        children: (0, r.jsx)(ez, {
                                            query: ev,
                                            selectedOptions: eR,
                                            loading: eN,
                                            renderOptionPrefix: W,
                                            renderOptionSuffix: K,
                                            isDisabled: C,
                                            isEditing: eS,
                                            inputRef: eh,
                                            'aria-describedby': null != z ? z : ec,
                                            'aria-required': X,
                                            'aria-invalid': null != q ? q : null != ed,
                                            'aria-labelledby': null != Q ? Q : eu,
                                            'aria-expanded': n,
                                            setInputRef: (e) => {
                                                (u.current = e), (eh.current = e);
                                            },
                                            onFocus: () => {
                                                var e, t;
                                                null === (e = eh.current) || void 0 === e || e.setSelectionRange(0, null !== (t = null == ev ? void 0 : ev.length) && void 0 !== t ? t : 0);
                                            },
                                            onChange: (e) => {
                                                eC(e), null == Y || Y(e), eI(e), eP(!0), eT(!0);
                                            },
                                            onKeyDown: (e) => {
                                                var t;
                                                null === (t = es.onKeyDown) || void 0 === t || t.call(es, e), c(e), eW(e);
                                            },
                                            activeDescendant: ep,
                                            placeholder: I,
                                            inputId: eM,
                                            listboxId: ex,
                                            navigatorId: ew,
                                            selectValue: function (e) {
                                                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                                eH(e, t);
                                            },
                                            inputClassNames: J,
                                            hidePills: er
                                        })
                                    })
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: s()(D.icons, {
                                    [D.multi]: f,
                                    [D.iconsContainer]: !$
                                }),
                                ref: eo,
                                children: [
                                    d && ((null != ev && '' !== ev) || eR.length > 0)
                                        ? (0, r.jsx)(h.P, {
                                              'aria-label': O.intl.string(O.t.VkKicX),
                                              'aria-controls': eM,
                                              onClick: eY,
                                              children: (0, r.jsx)(T.XSmallIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: D.clear
                                              })
                                          })
                                        : null,
                                    (0, r.jsx)(h.P, {
                                        className: s()({ [D.iconsCenter]: $ }),
                                        'aria-label': eg ? O.intl.string(O.t.cpT0Cg) : O.intl.string(O.t['3xjX0d']),
                                        'aria-controls': eM,
                                        onClick: () => {
                                            eP(!eg);
                                        },
                                        children: (0, r.jsx)(l, { className: D.dropdownIcon })
                                    })
                                ]
                            })
                        ]
                    });
                }
            }),
            eR.length > 0 &&
                null != ei &&
                (0, r.jsx)('div', {
                    children: (0, r.jsx)(U, {
                        listRef: eq,
                        selectedOptions: eR,
                        selectValue: function (e) {
                            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                            eH(e, t);
                        },
                        focusNextItem: eX,
                        focusPreviousItem: eQ,
                        renderCustomPill: ei,
                        customPillContainerClassName: ea
                    })
                })
        ]
    });
});
function M(e) {
    let { onSelect: t, closePopout: n, selectedValues: a, options: o, width: l, maxVisibleItems: u, activeDescendant: d, listRef: f, listId: _, renderOptionLabel: h, updatePosition: p, loading: m = !1, multi: g, popoutPosition: v, closeOnSelect: T, renderOptionPrefix: b = () => null, renderOptionSuffix: y = () => null } = e,
        N = i.useRef(null),
        C = i.useCallback(
            (e) => {
                t(e), T && n();
            },
            [T, n, t]
        );
    return ((0, A.Z)(p), m)
        ? (0, r.jsx)('div', {
              'aria-busy': !0,
              className: s()(D.popout, D.loading, { [D.popoutPositionTop]: 'top' === v }),
              style: { width: l },
              children: (0, r.jsx)(I.$, {
                  itemClassName: D.loadingSpinner,
                  type: I.R.PULSING_ELLIPSIS
              })
          })
        : 0 === o.length
          ? (0, r.jsx)('div', {
                className: s()(D.popout, D.noResults, { [D.popoutPositionTop]: 'top' === v }),
                style: { width: l },
                children: (0, r.jsx)(S.x, {
                    color: 'text-muted',
                    variant: 'text-md/normal',
                    children: O.intl.string(O.t['Xe+fJC'])
                })
            })
          : (0, r.jsx)(c.SJ, {
                children: (e) => {
                    let { ref: t, onKeyDown: n, ...i } = e;
                    return (0, r.jsx)(E._2, {
                        className: s()(D.popout, D.searchableSelect, {
                            [D.noScrollbar]: o.length <= u,
                            [D.popoutPositionTop]: 'top' === v
                        }),
                        style: {
                            width: l,
                            maxHeight: 44 * u
                        },
                        ref: (e) => {
                            var n;
                            f.current = e;
                            let r = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null;
                            (N.current = r), (t.current = r);
                        },
                        ...i,
                        role: void 0,
                        innerRole: 'listbox',
                        innerAriaMultiselectable: g,
                        innerId: _,
                        rowHeight: 44,
                        sections: [o.length],
                        sectionHeight: 0,
                        renderRow: (e) => {
                            var t;
                            let { row: n } = e,
                                i = o[n],
                                s = h(i);
                            return (0, r.jsx)(
                                G,
                                {
                                    multi: g,
                                    'aria-posinset': n,
                                    'aria-setsize': o.length,
                                    isSelected: a.includes(i.value),
                                    isFocused: d === String(i.value),
                                    value: i.value,
                                    label: s,
                                    onSelect: C,
                                    prefix: b(i, {
                                        inPill: !1,
                                        inDropdown: !0
                                    }),
                                    suffix: y(i, {
                                        inPill: !1,
                                        inDropdown: !0
                                    })
                                },
                                null !== (t = i.key) && void 0 !== t ? t : n
                            );
                        },
                        renderSection: () => null
                    });
                }
            });
}
function P(e, t) {
    if (null == e || null == t) return !1;
    let n = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
    return (e.compareDocumentPosition(t) & n) === n;
}
function k(e, t, n) {
    let r = i.useMemo(
            () =>
                (0, l.E)({
                    getFocusableElements() {
                        let t = e.current;
                        return null != t ? Array.from(t.querySelectorAll('[data-option-pill-value]')) : [];
                    },
                    getActiveElement() {
                        var t, n;
                        return null == e ? void 0 : null === (n = e.current) || void 0 === n ? void 0 : null === (t = n.ownerDocument) || void 0 === t ? void 0 : t.activeElement;
                    }
                }),
            [n]
        ),
        a = i.useCallback(
            (t) => {
                var n, r;
                return t === (null === (r = e.current) || void 0 === r ? void 0 : null === (n = r.ownerDocument) || void 0 === n ? void 0 : n.activeElement);
            },
            [e]
        ),
        s = i.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = await r.getPreviousFocusableElement({ wrap: !e });
                if (e && ((null == n || a(n)) && (n = await r.getNextFocusableElement()), null == n || a(n))) {
                    var i;
                    return null === (i = t.current) || void 0 === i ? void 0 : i.focus();
                }
                return null == n ? void 0 : n.focus();
            },
            [r, a, t]
        ),
        o = i.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = await r.getNextFocusableElement({ wrap: !e });
                if (e && ((null == n || a(n)) && (n = await r.getPreviousFocusableElement()), null == n || a(n))) {
                    var i;
                    return null === (i = t.current) || void 0 === i ? void 0 : i.focus();
                }
                return null == n ? void 0 : n.focus();
            },
            [r, a, t]
        );
    return {
        focusPreviousItem: s,
        focusNextItem: o,
        focusLastItem: i.useCallback(async () => {
            let e = await r.getLastFocusableElement();
            return null == e ? void 0 : e.focus();
        }, [r])
    };
}
function U(e) {
    let { selectedOptions: t, selectValue: n, listRef: a, focusPreviousItem: s, focusNextItem: o, renderOptionSuffix: l, renderOptionPrefix: u, renderCustomPill: c, customPillContainerClassName: d } = e,
        f = null != c,
        _ = i.useCallback(
            (e) => {
                if (null != a.current)
                    switch (e.key) {
                        case 'ArrowRight':
                            return e.stopPropagation(), e.preventDefault(), o();
                        case 'ArrowLeft':
                            return e.stopPropagation(), e.preventDefault(), s();
                    }
            },
            [a, s, o]
        ),
        [h, p] = i.useState(null);
    return (0, r.jsx)('ul', {
        className: f ? d : D.optionPillContainer,
        ref: a,
        onKeyDown: _,
        onFocus: (e) => {
            let t = e.target;
            null != a.current && P(a.current, t) && p(t.getAttribute('data-option-pill-value'));
        },
        onBlur: (e) => {
            let t = e.relatedTarget;
            !P(a.current, t) && p(null);
        },
        children: t.map((e, t) => {
            var i;
            return (0, r.jsx)(
                'li',
                {
                    className: f ? void 0 : D.optionPillItem,
                    children: (0, r.jsx)(j, {
                        isCustomPill: f,
                        option: e,
                        focused: null == h ? 0 === t : h === String(e.value),
                        onClick: () => n(e.value),
                        renderOptionPrefix: u,
                        renderOptionSuffix: l,
                        onKeyDown: async (t) => {
                            'Backspace' === t.key ? (await s(!0), n(e.value, !1)) : 'Delete' === t.key && (await o(!0), n(e.value, !1));
                        },
                        children: f
                            ? c(e)
                            : (0, r.jsx)('div', {
                                  className: D.content,
                                  children: e.label
                              })
                    })
                },
                null !== (i = e.key) && void 0 !== i ? i : ''.concat(e.label, '-').concat(e.value)
            );
        })
    });
}
function G(e) {
    let { value: t, label: n, prefix: i, suffix: a, onSelect: o, isSelected: l, isFocused: u, multi: d, ...f } = e,
        _ = (0, c.JA)(String(t));
    return (0, r.jsxs)(h.P, {
        tag: 'li',
        style: { height: 44 },
        focusProps: { enabled: !1 },
        className: s()(D.option, {
            [D.focused]: u,
            [D.multi]: d
        }),
        onClick: () => o(t),
        ..._,
        ...f,
        'aria-selected': l,
        id: _['data-list-item-id'],
        role: 'option',
        children: [
            (0, r.jsxs)('div', {
                className: D.content,
                children: [n, '\xA0']
            }),
            null != i &&
                (0, r.jsx)('div', {
                    className: D.prefix,
                    children: i
                }),
            ' ',
            null != a &&
                (0, r.jsx)('div', {
                    className: D.suffix,
                    children: a
                }),
            ' ',
            (0, r.jsx)(B, {
                isSelected: l,
                multi: d
            })
        ]
    });
}
function B(e) {
    let { isSelected: t, multi: n } = e,
        i = (0, C.Q)('SearchableSelectOption'),
        a = i ? 24 : 20;
    return n
        ? i
            ? (0, r.jsx)(_.F, {
                  value: t,
                  shape: _.X.Shapes.BOX,
                  size: 20,
                  disabled: !1,
                  indicatorClassName: D.multiSelectCheckbox
              })
            : (0, r.jsx)('div', {
                  className: s()(D.multiSelectCheckbox, {
                      [D.checked]: t,
                      [D.unchecked]: !t
                  }),
                  children:
                      t &&
                      (0, r.jsx)(T.CheckmarkLargeIcon, {
                          size: 'md',
                          color: 'currentColor',
                          colorClass: D.multiSelectCheck
                      })
              })
        : t
          ? (0, r.jsx)(T.CircleCheckIcon, {
                size: 'custom',
                color: 'currentColor',
                'aria-hidden': !0,
                secondaryColor: 'white',
                className: D.selectedIcon,
                width: a,
                height: a
            })
          : null;
}
function Z(e) {
    let { selectedOptions: t, renderOptionPrefix: n, renderOptionSuffix: i, ...a } = e,
        s = t[0],
        o =
            null == n
                ? void 0
                : n(null != s ? s : null, {
                      inPill: !1,
                      inDropdown: !1
                  }),
        l =
            null == i
                ? void 0
                : i(null != s ? s : null, {
                      inPill: !1,
                      inDropdown: !1
                  });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != o
                ? (0, r.jsx)('div', {
                      'aria-hidden': !0,
                      children: o
                  })
                : null,
            (0, r.jsx)(V, {
                selectedOptions: t,
                ...a
            }),
            null != l
                ? (0, r.jsx)('div', {
                      'aria-hidden': !0,
                      children: l
                  })
                : null
        ]
    });
}
function F(e) {
    let { query: t, placeholder: n, selectedOptions: a, selectValue: o, onKeyDown: l, isEditing: u, isDisabled: c, inputRef: d, renderOptionPrefix: f, renderOptionSuffix: _, inputClassNames: h, hidePills: p, ...m } = e,
        g = Math.max(n.length, (null != t ? t : '').length),
        E = i.useRef(null),
        { focusPreviousItem: v, focusNextItem: I, focusLastItem: S } = k(E, d, a);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            a.length > 0 &&
                !p &&
                (0, r.jsx)(U, {
                    listRef: E,
                    selectedOptions: a,
                    renderOptionPrefix: f,
                    renderOptionSuffix: _,
                    selectValue: o,
                    focusNextItem: I,
                    focusPreviousItem: v
                }),
            (0, r.jsx)(V, {
                style: { minWidth: ''.concat(g, 'ch') },
                className: s()(D.multi, h),
                query: t,
                placeholder: n,
                selectValue: o,
                selectedOptions: a,
                isEditing: u,
                isDisabled: c,
                inputRef: d,
                onKeyDown: (e) => {
                    ['ArrowLeft', 'Backspace'].includes(e.key) && ('' === t || null == t) && a.length > 0 ? S() : l(e);
                },
                ...m
            })
        ]
    });
}
function V(e) {
    let { query: t, inputId: n, 'aria-describedby': i, 'aria-invalid': a, 'aria-required': o, 'aria-labelledby': l, 'aria-expanded': u, isDisabled: c, listboxId: f, activeDescendant: _, navigatorId: h, onChange: p, onFocus: m, setInputRef: g, isEditing: E, onKeyDown: v, placeholder: I, loading: S, style: T, className: b } = e;
    return (0, r.jsx)('input', {
        role: 'combobox',
        id: n,
        'aria-haspopup': 'listbox',
        'aria-invalid': a,
        'aria-labelledby': l,
        'aria-autocomplete': 'list',
        'aria-expanded': u,
        'aria-describedby': i,
        'aria-disabled': c,
        'aria-controls': f,
        'aria-required': o,
        'aria-busy': S,
        style: null != T ? T : {},
        'aria-activedescendant': null != _ ? (0, d.jb)(h, _) : '',
        disabled: c,
        value: null != t ? t : '',
        onChange: (e) => {
            p(e.target.value);
        },
        onFocus: m,
        className: s()(D.searchInput, b, {
            [D.editing]: E,
            [D.disabled]: c
        }),
        onKeyDown: v,
        placeholder: '' !== (null != t ? t : '').trim() ? void 0 : I,
        ref: g
    });
}
function j(e) {
    let { option: t, focused: n, onClick: i, onKeyDown: a, renderOptionPrefix: s, renderOptionSuffix: o, children: l, isCustomPill: u } = e,
        c =
            !u &&
            (null == s
                ? void 0
                : s(t, {
                      inPill: !0,
                      inDropdown: !1
                  })),
        d =
            !u &&
            (null == o
                ? void 0
                : o(t, {
                      inPill: !0,
                      inDropdown: !1
                  }));
    return (0, r.jsx)(p.t, {
        offset: 3,
        children: (0, r.jsxs)(f.zx, {
            look: f.zx.Looks.BLANK,
            tabIndex: n ? 0 : -1,
            'data-option-pill-value': t.value,
            className: D.optionPillBtn,
            innerClassName: u ? null : D.optionPill,
            onClick: () => (null == i ? void 0 : i(t.value)),
            onKeyDown: a,
            children: [
                l,
                null != c &&
                    (0, r.jsx)('div', {
                        className: D.prefix,
                        children: c
                    }),
                ' ',
                null != d &&
                    (0, r.jsx)('div', {
                        className: D.suffix,
                        children: d
                    }),
                (0, r.jsx)(g.n, { children: O.intl.string(O.t.N86XcH) }),
                !u &&
                    (0, r.jsx)(T.XSmallIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: D.deleteOptionIcon,
                        width: 14,
                        height: 14
                    })
            ]
        })
    });
}
