"use strict";
n.r(t), n.d(t, {
  useMenuTrigger: function() {
    return G
  },
  useMenu: function() {
    return Z
  },
  useMenuItem: function() {
    return Y
  },
  useMenuSection: function() {
    return X
  }
}), n("222007");
var r = n("290895"),
  i = n("181551"),
  o = n("495912"),
  s = n("439991"),
  a = n("628364"),
  c = n("780095"),
  u = n("872834"),
  d = n("884691"),
  l = {},
  f = {},
  p = {},
  h = {},
  g = {},
  b = {},
  v = {},
  m = {},
  y = {},
  x = {},
  w = {},
  S = {},
  k = {},
  _ = {},
  E = {},
  M = {},
  D = {},
  C = {},
  P = {},
  T = {},
  A = {},
  R = {},
  I = {},
  O = {},
  j = {},
  N = {},
  L = {},
  F = {},
  B = {},
  z = {},
  K = {},
  V = {},
  U = {},
  q = {},
  H = {};

function G(e, t, n) {
  var a;
  let {
    type: c = "menu",
    isDisabled: u,
    trigger: d = "press"
  } = e, f = (0, r.useId)(), {
    triggerProps: p,
    overlayProps: h
  } = (0, s.useOverlayTrigger)({
    type: c
  }, t, n);
  let g = (0, i.useLocalizedStringFormatter)((a = l) && a.__esModule ? a.default : a),
    {
      longPressProps: b
    } = (0, o.useLongPress)({
      isDisabled: u || "longPress" !== d,
      accessibilityDescription: g.format("longPressMessage"),
      onLongPressStart() {
        t.close()
      },
      onLongPress() {
        t.open("first")
      }
    });
  return delete p.onPress, {
    menuTriggerProps: {
      ...p,
      ..."press" === d ? {
        onPressStart(e) {
          "touch" !== e.pointerType && "keyboard" !== e.pointerType && !u && t.toggle("virtual" === e.pointerType ? "first" : null)
        },
        onPress(e) {
          "touch" === e.pointerType && !u && t.toggle()
        }
      } : b,
      id: f,
      onKeyDown: e => {
        if (!u) {
          if (("longPress" !== d || e.altKey) && n && n.current) switch (e.key) {
            case "Enter":
            case " ":
              if ("longPress" === d) return;
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
      ...h,
      "aria-labelledby": f,
      autoFocus: t.focusStrategy || !0,
      onClose: t.close
    }
  }
}
l = {
  "ar-AE": f = {
    longPressMessage: "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"
  },
  "bg-BG": p = {
    longPressMessage: "Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"
  },
  "cs-CZ": h = {
    longPressMessage: "Dlouh\xfdm stiskem nebo stisknut\xedm kl\xe1ves Alt + šipka dolů otevřete nab\xeddku"
  },
  "da-DK": g = {
    longPressMessage: "Langt tryk eller tryk p\xe5 Alt + pil ned for at \xe5bne menuen"
  },
  "de-DE": b = {
    longPressMessage: "Dr\xfccken Sie lange oder dr\xfccken Sie Alt + Nach-unten, um das Men\xfc zu \xf6ffnen"
  },
  "el-GR": v = {
    longPressMessage: "Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"
  },
  "en-US": m = {
    longPressMessage: "Long press or press Alt + ArrowDown to open menu"
  },
  "es-ES": y = {
    longPressMessage: "Mantenga pulsado o pulse Alt + flecha abajo para abrir el men\xfa"
  },
  "et-EE": x = {
    longPressMessage: "Men\xfc\xfc avamiseks vajutage pikalt v\xf5i vajutage klahve Alt + allanool"
  },
  "fi-FI": w = {
    longPressMessage: "Avaa valikko painamalla pohjassa tai n\xe4pp\xe4inyhdistelm\xe4ll\xe4 Alt + Alanuoli"
  },
  "fr-FR": S = {
    longPressMessage: "Appuyez de mani\xe8re prolong\xe9e ou appuyez sur Alt\xa0+\xa0Fl\xe8che vers le bas pour ouvrir le menu."
  },
  "he-IL": k = {
    longPressMessage: "לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"
  },
  "hr-HR": _ = {
    longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"
  },
  "hu-HU": E = {
    longPressMessage: "Nyomja meg hosszan, vagy nyomja meg az Alt + lefele ny\xedl gombot a men\xfc megnyit\xe1s\xe1hoz"
  },
  "it-IT": M = {
    longPressMessage: "Premere a lungo o premere Alt + Freccia gi\xf9 per aprire il menu"
  },
  "ja-JP": D = {
    longPressMessage: "長押しまたは Alt+下矢印キーでメニューを開く"
  },
  "ko-KR": C = {
    longPressMessage: "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"
  },
  "lt-LT": P = {
    longPressMessage: "Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."
  },
  "lv-LV": T = {
    longPressMessage: "Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"
  },
  "nb-NO": A = {
    longPressMessage: "Langt trykk eller trykk Alt + PilNed for \xe5 \xe5pne menyen"
  },
  "nl-NL": R = {
    longPressMessage: "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"
  },
  "pl-PL": I = {
    longPressMessage: "Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w d\xf3ł, aby otworzyć menu"
  },
  "pt-BR": O = {
    longPressMessage: "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"
  },
  "pt-PT": j = {
    longPressMessage: "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"
  },
  "ro-RO": N = {
    longPressMessage: "Apăsați lung sau apăsați pe Alt + săgeată \xeen jos pentru a deschide meniul"
  },
  "ru-RU": L = {
    longPressMessage: "Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"
  },
  "sk-SK": F = {
    longPressMessage: "Ponuku otvor\xedte dlh\xfdm stlačen\xedm alebo stlačen\xedm kl\xe1vesu Alt + kl\xe1vesu so š\xedpkou nadol"
  },
  "sl-SI": B = {
    longPressMessage: "Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"
  },
  "sr-SP": z = {
    longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"
  },
  "sv-SE": K = {
    longPressMessage: "H\xe5ll nedtryckt eller tryck p\xe5 Alt + pil ned\xe5t f\xf6r att \xf6ppna menyn"
  },
  "tr-TR": V = {
    longPressMessage: "Men\xfcy\xfc a\xe7mak i\xe7in uzun basın veya Alt + Aşağı Ok tuşuna basın"
  },
  "uk-UA": U = {
    longPressMessage: "Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"
  },
  "zh-CN": q = {
    longPressMessage: "长按或按 Alt + 向下方向键以打开菜单"
  },
  "zh-TW": H = {
    longPressMessage: "長按或按 Alt+向下鍵以開啟功能表"
  }
};
let W = new WeakMap;

function Z(e, t, n) {
  let {
    shouldFocusWrap: i = !0,
    ...o
  } = e;
  !e["aria-label"] && !e["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let s = (0, r.filterDOMProps)(e, {
      labelable: !0
    }),
    {
      listProps: c
    } = (0, a.useSelectableList)({
      ...o,
      ref: n,
      selectionManager: t.selectionManager,
      collection: t.collection,
      disabledKeys: t.disabledKeys,
      shouldFocusWrap: i
    });
  return W.set(t, {
    onClose: e.onClose,
    onAction: e.onAction
  }), {
    menuProps: (0, r.mergeProps)(s, {
      role: "menu",
      "aria-hidden": t.expandedKeys.size > 0 || void 0,
      ...c,
      onKeyDown: e => {
        "Escape" !== e.key && c.onKeyDown(e)
      }
    })
  }
}

function Y(e, t, n) {
  var s, l;
  let {
    key: f,
    closeOnSelect: p,
    isVirtualized: h,
    "aria-haspopup": g
  } = e, {
    direction: b
  } = (0, i.useLocale)(), v = !!g, m = t.expandedKeys.has(f), y = null !== (s = e.isDisabled) && void 0 !== s ? s : t.disabledKeys.has(f), x = null !== (l = e.isSelected) && void 0 !== l ? l : t.selectionManager.isSelected(f), w = (0, d.useRef)(), S = (0, d.useCallback)(() => {
    w.current && (clearTimeout(w.current), w.current = void 0)
  }, [w]), k = (0, r.useEffectEvent)(() => {
    S(), t.setExpandedKeys(new Set([f]))
  });
  (0, r.useLayoutEffect)(() => () => S(), [S]);
  let _ = W.get(t),
    E = e.onClose || _.onClose,
    M = (0, d.useCallback)(() => {
      k()
    }, []),
    D = v ? M : e.onAction || _.onAction,
    C = "menuitem";
  "single" === t.selectionManager.selectionMode ? C = "menuitemradio" : "multiple" === t.selectionManager.selectionMode && (C = "menuitemcheckbox");
  let P = (0, r.useSlotId)(),
    T = (0, r.useSlotId)(),
    A = (0, r.useSlotId)(),
    R = {
      "aria-disabled": y || void 0,
      role: C,
      "aria-label": e["aria-label"],
      "aria-labelledby": P,
      "aria-describedby": [T, A].filter(Boolean).join(" ") || void 0
    };
  "none" !== t.selectionManager.selectionMode && (R["aria-checked"] = x), h && (R["aria-posinset"] = t.collection.getItem(f).index, R["aria-setsize"] = (0, u.getItemCount)(t.collection)), null != g && (R["aria-haspopup"] = g, R["aria-expanded"] = m ? "true" : "false");
  let {
    itemProps: I,
    isFocused: O
  } = (0, a.useSelectableItem)({
    selectionManager: t.selectionManager,
    key: f,
    ref: n,
    shouldSelectOnPressUp: !0,
    allowsDifferentPressOrigin: !0
  }), {
    pressProps: j,
    isPressed: N
  } = (0, o.usePress)({
    onPressStart: e => {
      "keyboard" === e.pointerType && D && D(f)
    },
    onPressUp: e => {
      "keyboard" !== e.pointerType && (D && D(f), !v && E && (null != p ? p : "multiple" !== t.selectionManager.selectionMode) && E())
    },
    isDisabled: y || v && t.expandedKeys.has(f)
  }), {
    hoverProps: L
  } = (0, o.useHover)({
    isDisabled: y,
    onHoverStart() {
      !(0, o.isFocusVisible)() && !(v && t.expandedKeys.has(f)) && (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(f), f === t.selectionManager.focusedKey && t.selectionManager.isFocused && document.activeElement !== n.current && (0, c.focusSafely)(n.current))
    },
    onHoverChange: e => {
      e && v && !t.expandedKeys.has(f) ? !w.current && (w.current = setTimeout(() => {
        k()
      }, 200)) : !e && S()
    }
  }), {
    keyboardProps: F
  } = (0, o.useKeyboard)({
    onKeyDown: e => {
      if (e.repeat) {
        e.continuePropagation();
        return
      }
      switch (e.key) {
        case " ":
          !y && "none" === t.selectionManager.selectionMode && !v && !1 !== p && E && E();
          break;
        case "Enter":
          !y && !1 !== p && !v && E && E();
          break;
        case "ArrowRight":
          v && "ltr" === b ? k() : e.continuePropagation();
          break;
        case "ArrowLeft":
          v && "rtl" === b ? k() : e.continuePropagation();
          break;
        default:
          e.continuePropagation()
      }
    }
  });
  return {
    menuItemProps: {
      ...R,
      ...(0, r.mergeProps)(I, j, L, F)
    },
    labelProps: {
      id: P
    },
    descriptionProps: {
      id: T
    },
    keyboardShortcutProps: {
      id: A
    },
    isFocused: O,
    isSelected: x,
    isPressed: N,
    isDisabled: y
  }
}

function X(e) {
  let {
    heading: t,
    "aria-label": n
  } = e, i = (0, r.useId)();
  return {
    itemProps: {
      role: "presentation"
    },
    headingProps: t ? {
      id: i,
      role: "presentation"
    } : {},
    groupProps: {
      role: "group",
      "aria-label": n,
      "aria-labelledby": t ? i : void 0
    }
  }
}