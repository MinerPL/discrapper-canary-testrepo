"use strict";
n.d(t, {
  P: function() {
    return u
  }
});
var r = n(275857),
  i = n(913122),
  a = n(470079),
  o = n(697898),
  s = n(345926);

function u(e) {
  var t, n, u, c, l, d, f, p;
  let {
    defaultFilter: h,
    menuTrigger: m = "input",
    allowsEmptyCollection: g = !1,
    allowsCustomValue: _,
    shouldCloseOnBlur: b = !0
  } = e, [v, y] = (0, a.useState)(!1), [E, S] = (0, a.useState)(!1), {
    collection: x,
    selectionManager: w,
    selectedKey: C,
    setSelectedKey: T,
    selectedItem: D,
    disabledKeys: M
  } = (0, i.BA)({
    ...e,
    onSelectionChange: t => {
      e.onSelectionChange && e.onSelectionChange(t), t === C && (j(), F())
    },
    items: null !== (u = e.items) && void 0 !== u ? u : e.defaultItems
  }), [O, A] = (0, o.zk)(e.inputValue, null !== (l = null !== (c = e.defaultInputValue) && void 0 !== c ? c : null === (t = x.getItem(C)) || void 0 === t ? void 0 : t.textValue) && void 0 !== l ? l : "", e.onInputChange), k = (0, a.useMemo)(() => null == e.items && h ? function(e, t, n) {
    return new i.DC(function e(t, n, i, a) {
      let o = [];
      for (let s of n)
        if ("section" === s.type && s.hasChildNodes) {
          let n = e(t, (0, r._P)(s, t), i, a);
          [...n].some(e => "item" === e.type) && o.push({
            ...s,
            childNodes: n
          })
        } else "item" === s.type && a(s.textValue, i) ? o.push({
          ...s
        }) : "item" !== s.type && o.push({
          ...s
        });
      return o
    }(e, e, t, n))
  }(x, O, h) : x, [x, O, h, e.items]), [R, N] = (0, a.useState)(k), I = (0, a.useRef)("focus"), L = (0, s.W)({
    ...e,
    onOpenChange: t => {
      e.onOpenChange && e.onOpenChange(t, t ? I.current : void 0), w.setFocused(t), !t && w.setFocusedKey(null)
    },
    isOpen: void 0,
    defaultOpen: void 0
  }), P = (t, n) => {
    let r = "manual" === n || "focus" === n && "focus" === m;
    (g || k.size > 0 || r && x.size > 0 || e.items) && (r && !L.isOpen && void 0 === e.items && y(!0), I.current = n, L.open(t))
  }, B = (0, a.useCallback)(e => {
    L.isOpen && N(k), L.toggle(e)
  }, [L, k]), F = (0, a.useCallback)(() => {
    L.isOpen && (N(k), L.close())
  }, [L, k]), U = (0, a.useRef)(O), j = () => {
    var e, t;
    let n = null !== (t = null === (e = x.getItem(C)) || void 0 === e ? void 0 : e.textValue) && void 0 !== t ? t : "";
    U.current = n, A(n)
  }, Y = (0, a.useRef)(null !== (f = null !== (d = e.selectedKey) && void 0 !== d ? d : e.defaultSelectedKey) && void 0 !== f ? f : null), z = (0, a.useRef)(null !== (p = null === (n = x.getItem(C)) || void 0 === n ? void 0 : n.textValue) && void 0 !== p ? p : "");
  (0, a.useEffect)(() => {
    var t, n;
    E && (k.size > 0 || g) && !L.isOpen && O !== U.current && "manual" !== m && P(null, "input"), !v && !g && L.isOpen && 0 === k.size && F(), null != C && C !== Y.current && F(), O !== U.current && (w.setFocusedKey(null), y(!1), "" === O && (void 0 === e.inputValue || void 0 === e.selectedKey) && T(null)), C !== Y.current && (void 0 === e.inputValue || void 0 === e.selectedKey) ? j() : U.current = O;
    let r = null !== (n = null === (t = x.getItem(C)) || void 0 === t ? void 0 : t.textValue) && void 0 !== n ? n : "";
    !E && null != C && void 0 === e.inputValue && C === Y.current && z.current !== r && (U.current = r, A(r)), Y.current = C, z.current = r
  });
  let H = () => {
      Y.current = null, T(null), F()
    },
    G = () => {
      if (void 0 !== e.selectedKey && void 0 !== e.inputValue) {
        var t, n;
        e.onSelectionChange(C);
        let r = null !== (n = null === (t = x.getItem(C)) || void 0 === t ? void 0 : t.textValue) && void 0 !== n ? n : "";
        U.current = r, F()
      } else j(), F()
    },
    V = () => {
      if (_) {
        var e, t;
        O === (null !== (t = null === (e = x.getItem(C)) || void 0 === e ? void 0 : e.textValue) && void 0 !== t ? t : "") ? G() : H()
      } else G()
    },
    $ = (0, a.useMemo)(() => L.isOpen ? v ? x : k : R, [L.isOpen, x, k, v, R]);
  return {
    ...L,
    toggle: (t, n) => {
      let r = "manual" === n || "focus" === n && "focus" === m;
      (g || k.size > 0 || r && x.size > 0 || e.items || L.isOpen) && (r && !L.isOpen && void 0 === e.items && y(!0), !L.isOpen && (I.current = n), B(t))
    },
    open: P,
    close: V,
    selectionManager: w,
    selectedKey: C,
    setSelectedKey: T,
    disabledKeys: M,
    isFocused: E,
    setFocused: e => {
      e ? "focus" === m && P(null, "focus") : b && V(), S(e)
    },
    selectedItem: D,
    collection: $,
    inputValue: O,
    setInputValue: A,
    commit: () => {
      L.isOpen && null != w.focusedKey ? C === w.focusedKey ? G() : T(w.focusedKey) : V()
    },
    revert: () => {
      _ && null == C ? H() : G()
    }
  }
}