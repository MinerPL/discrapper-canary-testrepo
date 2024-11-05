n.d(t, {
    P: function () {
        return l;
    }
});
var r = n(989103),
    i = n(155263),
    a = n(192379),
    s = n(239700),
    o = n(932143);
function l(e) {
    var t, n, l, u, c, d, f, _;
    let { defaultFilter: h, menuTrigger: p = 'input', allowsEmptyCollection: m = !1, allowsCustomValue: g, shouldCloseOnBlur: E = !0 } = e,
        [v, I] = (0, a.useState)(!1),
        [S, T] = (0, a.useState)(!1),
        {
            collection: b,
            selectionManager: y,
            selectedKey: A,
            setSelectedKey: N,
            selectedItem: C,
            disabledKeys: R
        } = (0, i.BA)({
            ...e,
            onSelectionChange: (t) => {
                e.onSelectionChange && e.onSelectionChange(t), t === A && (Z(), G());
            },
            items: null !== (l = e.items) && void 0 !== l ? l : e.defaultItems
        }),
        [O, D] = (0, s.zk)(e.inputValue, null !== (c = null !== (u = e.defaultInputValue) && void 0 !== u ? u : null === (t = b.getItem(A)) || void 0 === t ? void 0 : t.textValue) && void 0 !== c ? c : '', e.onInputChange),
        L = (0, a.useMemo)(
            () =>
                null == e.items && h
                    ? (function (e, t, n) {
                          return new i.DC(
                              (function e(t, n, i, a) {
                                  let s = [];
                                  for (let o of n)
                                      if ('section' === o.type && o.hasChildNodes) {
                                          let n = e(t, (0, r._P)(o, t), i, a);
                                          [...n].some((e) => 'item' === e.type) &&
                                              s.push({
                                                  ...o,
                                                  childNodes: n
                                              });
                                      } else 'item' === o.type && a(o.textValue, i) ? s.push({ ...o }) : 'item' !== o.type && s.push({ ...o });
                                  return s;
                              })(e, e, t, n)
                          );
                      })(b, O, h)
                    : b,
            [b, O, h, e.items]
        ),
        [x, w] = (0, a.useState)(L),
        M = (0, a.useRef)('focus'),
        P = (0, o.W)({
            ...e,
            onOpenChange: (t) => {
                e.onOpenChange && e.onOpenChange(t, t ? M.current : void 0), y.setFocused(t), !t && y.setFocusedKey(null);
            },
            isOpen: void 0,
            defaultOpen: void 0
        }),
        k = (t, n) => {
            let r = 'manual' === n || ('focus' === n && 'focus' === p);
            (m || L.size > 0 || (r && b.size > 0) || e.items) && (r && !P.isOpen && void 0 === e.items && I(!0), (M.current = n), P.open(t));
        },
        U = (0, a.useCallback)(
            (e) => {
                P.isOpen && w(L), P.toggle(e);
            },
            [P, L]
        ),
        G = (0, a.useCallback)(() => {
            P.isOpen && (w(L), P.close());
        }, [P, L]),
        B = (0, a.useRef)(O),
        Z = () => {
            var e, t;
            let n = null !== (t = null === (e = b.getItem(A)) || void 0 === e ? void 0 : e.textValue) && void 0 !== t ? t : '';
            (B.current = n), D(n);
        },
        F = (0, a.useRef)(null !== (f = null !== (d = e.selectedKey) && void 0 !== d ? d : e.defaultSelectedKey) && void 0 !== f ? f : null),
        V = (0, a.useRef)(null !== (_ = null === (n = b.getItem(A)) || void 0 === n ? void 0 : n.textValue) && void 0 !== _ ? _ : '');
    (0, a.useEffect)(() => {
        var t, n;
        S && (L.size > 0 || m) && !P.isOpen && O !== B.current && 'manual' !== p && k(null, 'input'), !v && !m && P.isOpen && 0 === L.size && G(), null != A && A !== F.current && G(), O !== B.current && (y.setFocusedKey(null), I(!1), '' === O && (void 0 === e.inputValue || void 0 === e.selectedKey) && N(null)), A !== F.current && (void 0 === e.inputValue || void 0 === e.selectedKey) ? Z() : (B.current = O);
        let r = null !== (n = null === (t = b.getItem(A)) || void 0 === t ? void 0 : t.textValue) && void 0 !== n ? n : '';
        !S && null != A && void 0 === e.inputValue && A === F.current && V.current !== r && ((B.current = r), D(r)), (F.current = A), (V.current = r);
    });
    let j = () => {
            (F.current = null), N(null), G();
        },
        H = () => {
            if (void 0 !== e.selectedKey && void 0 !== e.inputValue) {
                var t, n;
                e.onSelectionChange(A);
                let r = null !== (n = null === (t = b.getItem(A)) || void 0 === t ? void 0 : t.textValue) && void 0 !== n ? n : '';
                (B.current = r), G();
            } else Z(), G();
        },
        Y = () => {
            if (g) {
                var e, t;
                O === (null !== (t = null === (e = b.getItem(A)) || void 0 === e ? void 0 : e.textValue) && void 0 !== t ? t : '') ? H() : j();
            } else H();
        },
        W = (0, a.useMemo)(() => (P.isOpen ? (v ? b : L) : x), [P.isOpen, b, L, v, x]);
    return {
        ...P,
        toggle: (t, n) => {
            let r = 'manual' === n || ('focus' === n && 'focus' === p);
            (m || L.size > 0 || (r && b.size > 0) || e.items || P.isOpen) && (r && !P.isOpen && void 0 === e.items && I(!0), !P.isOpen && (M.current = n), U(t));
        },
        open: k,
        close: Y,
        selectionManager: y,
        selectedKey: A,
        setSelectedKey: N,
        disabledKeys: R,
        isFocused: S,
        setFocused: (e) => {
            e ? 'focus' === p && k(null, 'focus') : E && Y(), T(e);
        },
        selectedItem: C,
        collection: W,
        inputValue: O,
        setInputValue: D,
        commit: () => {
            P.isOpen && null != y.focusedKey ? (A === y.focusedKey ? H() : N(y.focusedKey)) : Y();
        },
        revert: () => {
            g && null == A ? j() : H();
        }
    };
}
