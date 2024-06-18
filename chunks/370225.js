"use strict";
n.d(t, {
  H9: function() {
    return $
  },
  iX: function() {
    return Z
  },
  u4: function() {
    return G
  },
  x7: function() {
    return K
  }
});
var r = n(488745),
  i = n(478741),
  a = n(833442),
  o = n(278448),
  s = n(996244),
  u = n(367890),
  c = n(351931),
  l = n(850565),
  d = n(346957),
  f = n(815915),
  p = n(970151),
  h = n(311899),
  m = n(831280),
  g = n(221022),
  _ = n(623226),
  b = n(66099),
  v = n(130196),
  y = n(739050),
  E = n(985265),
  S = n(169794),
  x = n(301485),
  w = n(151593),
  C = n(558254),
  T = n(279465),
  D = n(134945),
  M = n(36737),
  O = n(884147),
  A = n(696421),
  k = n(623126),
  R = n(800889),
  N = n(135858),
  I = n(959736),
  L = n(103878),
  P = n(317141),
  B = n(182823),
  F = n(616073),
  U = n(612001),
  j = n(795250),
  Y = n(148836),
  z = n(275857);
n(470079);
var H = {};

function G(e, t, n) {
  var r;
  let {
    type: i = "menu",
    isDisabled: a,
    trigger: o = "press"
  } = e, s = (0, B.Me)(), {
    triggerProps: u,
    overlayProps: c
  } = (0, j.IB)({
    type: i
  }, t, n);
  let l = (0, F.qb)((r = H) && r.__esModule ? r.default : r, "@react-aria/menu"),
    {
      longPressProps: d
    } = (0, U.TA)({
      isDisabled: a || "longPress" !== o,
      accessibilityDescription: l.format("longPressMessage"),
      onLongPressStart() {
        t.close()
      },
      onLongPress() {
        t.open("first")
      }
    });
  return delete u.onPress, {
    menuTriggerProps: {
      ...u,
      ..."press" === o ? {
        onPressStart(e) {
          "touch" !== e.pointerType && "keyboard" !== e.pointerType && !a && t.toggle("virtual" === e.pointerType ? "first" : null)
        },
        onPress(e) {
          "touch" === e.pointerType && !a && t.toggle()
        }
      } : d,
      id: s,
      onKeyDown: e => {
        if (!a) {
          if (("longPress" !== o || e.altKey) && n && n.current) switch (e.key) {
            case "Enter":
            case " ":
              if ("longPress" === o) return;
            case "ArrowDown":
              !("continuePropagation" in e) && e.stopPropagation(), e.preventDefault(), t.toggle("first");
              break;
            case "ArrowUp":
              !("continuePropagation" in e) && e.stopPropagation(), e.preventDefault(), t.toggle("last");
              break;
            default:
              "continuePropagation" in e && e.continuePropagation()
          }
        }
      }
    },
    menuProps: {
      ...c,
      "aria-labelledby": s,
      autoFocus: t.focusStrategy || !0,
      onClose: t.close
    }
  }
}
H = {
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
};
let V = new WeakMap;

function $(e, t, n) {
  let {
    shouldFocusWrap: r = !0,
    onKeyDown: i,
    onKeyUp: a,
    ...o
  } = e;
  !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let s = (0, B.zL)(e, {
      labelable: !0
    }),
    {
      listProps: u
    } = (0, Y._t)({
      ...o,
      ref: n,
      selectionManager: t.selectionManager,
      collection: t.collection,
      disabledKeys: t.disabledKeys,
      shouldFocusWrap: r,
      linkBehavior: "override"
    });
  return V.set(t, {
    onClose: e.onClose,
    onAction: e.onAction
  }), {
    menuProps: (0, B.dG)(s, {
      onKeyDown: i,
      onKeyUp: a
    }, {
      role: "menu",
      ...u,
      onKeyDown: e => {
        "Escape" !== e.key && u.onKeyDown(e)
      }
    })
  }
}

function Z(e, t, n) {
  var r, i, a;
  let {
    key: o,
    closeOnSelect: s,
    isVirtualized: u,
    "aria-haspopup": c,
    onPressStart: l,
    onPressUp: d,
    onPress: f,
    onPressChange: p,
    onPressEnd: h,
    onHoverStart: m,
    onHoverChange: g,
    onHoverEnd: _,
    onKeyDown: b,
    onKeyUp: v,
    onFocus: y,
    onFocusChange: E,
    onBlur: S
  } = e, x = !!c, w = null !== (i = e.isDisabled) && void 0 !== i ? i : t.disabledKeys.has(o), C = null !== (a = e.isSelected) && void 0 !== a ? a : t.selectionManager.isSelected(o), T = V.get(t), D = e.onClose || T.onClose, M = x ? () => {} : e.onAction || T.onAction, O = (0, B.tv)(), A = e => {
    M && M(o), e.target instanceof HTMLAnchorElement && O.open(e.target, e)
  }, k = "menuitem";
  !x && ("single" === t.selectionManager.selectionMode ? k = "menuitemradio" : "multiple" === t.selectionManager.selectionMode && (k = "menuitemcheckbox"));
  let R = (0, B.mp)(),
    N = (0, B.mp)(),
    I = (0, B.mp)(),
    L = {
      "aria-disabled": w || void 0,
      role: k,
      "aria-label": e["aria-label"],
      "aria-labelledby": R,
      "aria-describedby": [N, I].filter(Boolean).join(" ") || void 0,
      "aria-controls": e["aria-controls"],
      "aria-haspopup": c,
      "aria-expanded": e["aria-expanded"]
    };
  "none" !== t.selectionManager.selectionMode && !x && (L["aria-checked"] = C);
  let P = t.collection.getItem(o);
  u && (L["aria-posinset"] = null == P ? void 0 : P.index, L["aria-setsize"] = (0, z.is)(t.collection));
  let {
    itemProps: F,
    isFocused: j
  } = (0, Y.Cs)({
    selectionManager: t.selectionManager,
    key: o,
    ref: n,
    shouldSelectOnPressUp: !0,
    allowsDifferentPressOrigin: !0,
    linkBehavior: "none"
  }), {
    pressProps: H,
    isPressed: G
  } = (0, U.r7)({
    onPressStart: e => {
      "keyboard" === e.pointerType && A(e), null == l || l(e)
    },
    onPress: f,
    onPressUp: e => {
      "keyboard" !== e.pointerType && (A(e), !x && D && (null != s ? s : "multiple" !== t.selectionManager.selectionMode || t.selectionManager.isLink(o)) && D()), null == d || d(e)
    },
    onPressChange: p,
    onPressEnd: h,
    isDisabled: w
  }), {
    hoverProps: $
  } = (0, U.XI)({
    isDisabled: w,
    onHoverStart(e) {
      !(0, U.E)() && (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(o)), null == m || m(e)
    },
    onHoverChange: g,
    onHoverEnd: _
  }), {
    keyboardProps: Z
  } = (0, U.v5)({
    onKeyDown: e => {
      if (e.repeat) {
        e.continuePropagation();
        return
      }
      switch (e.key) {
        case " ":
          !w && "none" === t.selectionManager.selectionMode && !x && !1 !== s && D && D();
          break;
        case "Enter":
          !w && !1 !== s && !x && D && D();
          break;
        default:
          !x && e.continuePropagation(), null == b || b(e)
      }
    },
    onKeyUp: v
  }), {
    focusProps: K
  } = (0, U.KK)({
    onBlur: S,
    onFocus: y,
    onFocusChange: E
  }), W = (0, B.zL)(P.props, {
    isLink: !!(null == P ? void 0 : null === (r = P.props) || void 0 === r ? void 0 : r.href)
  });
  return delete W.id, {
    menuItemProps: {
      ...L,
      ...(0, B.dG)(W, x ? {
        onFocus: F.onFocus
      } : F, H, $, Z, K),
      tabIndex: null != F.tabIndex ? -1 : void 0
    },
    labelProps: {
      id: R
    },
    descriptionProps: {
      id: N
    },
    keyboardShortcutProps: {
      id: I
    },
    isFocused: j,
    isSelected: C,
    isPressed: G,
    isDisabled: w
  }
}

function K(e) {
  let {
    heading: t,
    "aria-label": n
  } = e, r = (0, B.Me)();
  return {
    itemProps: {
      role: "presentation"
    },
    headingProps: t ? {
      id: r,
      role: "presentation"
    } : {},
    groupProps: {
      role: "group",
      "aria-label": n,
      "aria-labelledby": t ? r : void 0
    }
  }
}