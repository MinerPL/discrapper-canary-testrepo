"use strict";
n.d(t, {
  E: function() {
    return W
  }
});
var r = n(235003),
  i = n(385201),
  a = n(875889),
  o = n(867377),
  s = n(502651),
  u = n(364920),
  c = n(478943),
  l = n(518034),
  d = n(706015),
  f = n(974046),
  p = n(554520),
  h = n(726249),
  m = n(395861),
  g = n(953523),
  _ = n(706440),
  b = n(788675),
  v = n(591995),
  y = n(885723),
  E = n(580917),
  S = n(773959),
  x = n(168147),
  w = n(408291),
  C = n(396423),
  T = n(701809),
  D = n(340132),
  M = n(355180),
  O = n(778341),
  A = n(368480),
  k = n(453440),
  R = n(910188),
  N = n(733710),
  I = n(213789),
  L = n(814137),
  P = n(574573),
  B = n(770003),
  F = n(795250),
  U = n(753264),
  j = n(182823),
  Y = n(470079),
  z = n(275857),
  H = n(148836),
  G = n(201284),
  V = n(616073),
  $ = n(370225),
  Z = n(640900),
  K = {};

function W(e, t) {
  var n, r, i;
  let {
    buttonRef: a,
    popoverRef: o,
    inputRef: s,
    listBoxRef: u,
    keyboardDelegate: c,
    shouldFocusWrap: l,
    isReadOnly: d,
    isDisabled: f
  } = e;
  let p = (0, V.qb)((i = K) && i.__esModule ? i.default : i, "@react-aria/combobox"),
    {
      menuTriggerProps: h,
      menuProps: m
    } = (0, $.u4)({
      type: "listbox",
      isDisabled: f || d
    }, t, a);
  (0, U.Oj).set(t, {
    id: m.id
  });
  let g = (0, Y.useMemo)(() => c || new H.dp(t.collection, t.disabledKeys, u), [c, t.collection, t.disabledKeys, u]),
    {
      collectionProps: _
    } = (0, H.gq)({
      selectionManager: t.selectionManager,
      keyboardDelegate: g,
      disallowTypeAhead: !0,
      disallowEmptySelection: !0,
      shouldFocusWrap: l,
      ref: s,
      isVirtualized: !0
    }),
    b = (0, j.tv)(),
    {
      isInvalid: v,
      validationErrors: y,
      validationDetails: E
    } = t.displayValidation,
    {
      labelProps: S,
      inputProps: x,
      descriptionProps: w,
      errorMessageProps: C
    } = (0, Z.E)({
      ...e,
      onChange: t.setInputValue,
      onKeyDown: d ? e.onKeyDown : (0, j.tS)(t.isOpen && _.onKeyDown, n => {
        switch (n.key) {
          case "Enter":
          case "Tab":
            if (t.isOpen && "Enter" === n.key && n.preventDefault(), t.isOpen && null != t.selectionManager.focusedKey && t.selectionManager.isLink(t.selectionManager.focusedKey)) {
              if ("Enter" === n.key) {
                let e = u.current.querySelector(`[data-key="${CSS.escape(t.selectionManager.focusedKey.toString())}"]`);
                e instanceof HTMLAnchorElement && b.open(e, n)
              }
              t.close()
            } else t.commit();
            break;
          case "Escape":
            (null !== t.selectedKey || "" === t.inputValue || e.allowsCustomValue) && n.continuePropagation(), t.revert();
            break;
          case "ArrowDown":
            t.open("first", "manual");
            break;
          case "ArrowUp":
            t.open("last", "manual");
            break;
          case "ArrowLeft":
          case "ArrowRight":
            t.selectionManager.setFocusedKey(null)
        }
      }, e.onKeyDown),
      onBlur: n => {
        var r;
        !(n.relatedTarget === (null == a ? void 0 : a.current) || (null === (r = o.current) || void 0 === r ? void 0 : r.contains(n.relatedTarget))) && (e.onBlur && e.onBlur(n), t.setFocused(!1))
      },
      value: t.inputValue,
      onFocus: n => {
        !t.isFocused && (e.onFocus && e.onFocus(n), t.setFocused(!0))
      },
      autoComplete: "off",
      validate: void 0,
      [G.tL]: t
    }, s),
    T = (0, j.bE)({
      id: h.id,
      "aria-label": p.format("buttonLabel"),
      "aria-labelledby": e["aria-labelledby"] || S.id
    }),
    D = (0, j.bE)({
      id: m.id,
      "aria-label": p.format("listboxLabel"),
      "aria-labelledby": e["aria-labelledby"] || S.id
    }),
    M = (0, Y.useRef)(0),
    O = null != t.selectionManager.focusedKey && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0,
    A = null !== (n = null == O ? void 0 : O.parentKey) && void 0 !== n ? n : null,
    k = null !== (r = t.selectionManager.focusedKey) && void 0 !== r ? r : null,
    R = (0, Y.useRef)(A),
    N = (0, Y.useRef)(k);
  (0, Y.useEffect)(() => {
    if ((0, j.ad)() && null != O && k !== N.current) {
      let e = t.selectionManager.isSelected(k),
        n = null != A ? t.collection.getItem(A) : null,
        r = (null == n ? void 0 : n["aria-label"]) || ("string" == typeof(null == n ? void 0 : n.rendered) ? n.rendered : "") || "",
        i = p.format("focusAnnouncement", {
          isGroupChange: n && A !== R.current,
          groupTitle: r,
          groupCount: n ? [...(0, z._P)(n, t.collection)].length : 0,
          optionText: O["aria-label"] || O.textValue || "",
          isSelected: e
        });
      (0, B.xQ)(i)
    }
    R.current = A, N.current = k
  });
  let I = (0, z.is)(t.collection),
    L = (0, Y.useRef)(I),
    P = (0, Y.useRef)(t.isOpen);
  (0, Y.useEffect)(() => {
    let e = t.isOpen !== P.current && (null == t.selectionManager.focusedKey || (0, j.ad)());
    if (t.isOpen && (e || I !== L.current)) {
      let e = p.format("countAnnouncement", {
        optionCount: I
      });
      (0, B.xQ)(e)
    }
    L.current = I, P.current = t.isOpen
  });
  let W = (0, Y.useRef)(t.selectedKey);
  return (0, Y.useEffect)(() => {
    if ((0, j.ad)() && t.isFocused && t.selectedItem && t.selectedKey !== W.current) {
      let e = t.selectedItem["aria-label"] || t.selectedItem.textValue || "",
        n = p.format("selectedAnnouncement", {
          optionText: e
        });
      (0, B.xQ)(n)
    }
    W.current = t.selectedKey
  }), (0, Y.useEffect)(() => {
    if (t.isOpen) return (0, F.RP)([s.current, o.current])
  }, [t.isOpen, s, o]), {
    labelProps: S,
    buttonProps: {
      ...h,
      ...T,
      excludeFromTabOrder: !0,
      onPress: e => {
        "touch" === e.pointerType && (s.current.focus(), t.toggle(null, "manual"))
      },
      onPressStart: e => {
        "touch" !== e.pointerType && (s.current.focus(), t.toggle("keyboard" === e.pointerType || "virtual" === e.pointerType ? "first" : null, "manual"))
      },
      isDisabled: f || d
    },
    inputProps: (0, j.dG)(x, {
      role: "combobox",
      "aria-expanded": h["aria-expanded"],
      "aria-controls": t.isOpen ? m.id : void 0,
      "aria-autocomplete": "list",
      "aria-activedescendant": O ? (0, U.x3)(t, O.key) : void 0,
      onTouchEnd: e => {
        if (f || d) return;
        if (e.timeStamp - M.current < 500) {
          e.preventDefault(), s.current.focus();
          return
        }
        let n = e.target.getBoundingClientRect(),
          r = e.changedTouches[0],
          i = Math.ceil(n.left + .5 * n.width),
          a = Math.ceil(n.top + .5 * n.height);
        r.clientX === i && r.clientY === a && (e.preventDefault(), s.current.focus(), t.toggle(null, "manual"), M.current = e.timeStamp)
      },
      autoCorrect: "off",
      spellCheck: "false"
    }),
    listBoxProps: (0, j.dG)(m, D, {
      autoFocus: t.focusStrategy,
      shouldUseVirtualFocus: !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      linkBehavior: "selection"
    }),
    descriptionProps: w,
    errorMessageProps: C,
    isInvalid: v,
    validationErrors: y,
    validationDetails: E
  }
}
K = {
  "ar-AE": r.Z,
  "bg-BG": i.Z,
  "cs-CZ": a.Z,
  "da-DK": o.Z,
  "de-DE": s.Z,
  "el-GR": u.Z,
  "en-US": c.Z,
  "es-ES": l.Z,
  "et-EE": d.Z,
  "fi-FI": f.Z,
  "fr-FR": p.Z,
  "he-IL": h.Z,
  "hr-HR": m.Z,
  "hu-HU": g.Z,
  "it-IT": _.Z,
  "ja-JP": b.Z,
  "ko-KR": v.Z,
  "lt-LT": y.Z,
  "lv-LV": E.Z,
  "nb-NO": S.Z,
  "nl-NL": x.Z,
  "pl-PL": w.Z,
  "pt-BR": C.Z,
  "pt-PT": T.Z,
  "ro-RO": D.Z,
  "ru-RU": M.Z,
  "sk-SK": O.Z,
  "sl-SI": A.Z,
  "sr-SP": k.Z,
  "sv-SE": R.Z,
  "tr-TR": N.Z,
  "uk-UA": I.Z,
  "zh-CN": L.Z,
  "zh-TW": P.Z
}