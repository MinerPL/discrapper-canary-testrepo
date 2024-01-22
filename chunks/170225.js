"use strict";
n.r(t), n.d(t, {
  useSpinButton: function() {
    return V
  }
}), n("781738");
var r = n("362561"),
  i = n("884691"),
  o = n("290895"),
  s = n("181551"),
  a = {},
  c = {},
  u = {},
  d = {},
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
  K = {};

function V(e) {
  var t;
  let n = (0, i.useRef)(),
    {
      value: c,
      textValue: u,
      minValue: d,
      maxValue: l,
      isDisabled: f,
      isReadOnly: p,
      isRequired: h,
      onIncrement: g,
      onIncrementPage: b,
      onDecrement: v,
      onDecrementPage: m,
      onDecrementToMin: y,
      onIncrementToMax: x
    } = e;
  let w = (0, s.useLocalizedStringFormatter)((t = a) && t.__esModule ? t.default : t),
    S = () => clearTimeout(n.current);
  (0, i.useEffect)(() => () => S(), []);
  let k = (0, i.useRef)(!1),
    _ = () => {
      k.current = !0
    },
    E = () => {
      k.current = !1
    };
  u = "" === u ? w.format("Empty") : (u || "".concat(c)).replace("-", "−"), (0, i.useEffect)(() => {
    k.current && ((0, r.clearAnnouncer)("assertive"), (0, r.announce)(u, "assertive"))
  }, [u]);
  let M = (0, o.useEffectEvent)(e => {
      S(), g(), n.current = window.setTimeout(() => {
        (isNaN(l) || isNaN(c) || c < l) && M(60)
      }, e)
    }),
    D = (0, o.useEffectEvent)(e => {
      S(), v(), n.current = window.setTimeout(() => {
        (isNaN(d) || isNaN(c) || c > d) && D(60)
      }, e)
    }),
    C = e => {
      e.preventDefault()
    },
    {
      addGlobalListener: P,
      removeAllGlobalListeners: T
    } = (0, o.useGlobalListeners)();
  return {
    spinButtonProps: {
      role: "spinbutton",
      "aria-valuenow": isNaN(c) ? null : c,
      "aria-valuetext": u,
      "aria-valuemin": d,
      "aria-valuemax": l,
      "aria-disabled": f || null,
      "aria-readonly": p || null,
      "aria-required": h || null,
      onKeyDown: e => {
        if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !p) switch (e.key) {
          case "PageUp":
            if (b) {
              e.preventDefault(), b();
              break
            }
          case "ArrowUp":
          case "Up":
            g && (e.preventDefault(), g());
            break;
          case "PageDown":
            if (m) {
              e.preventDefault(), m();
              break
            }
          case "ArrowDown":
          case "Down":
            v && (e.preventDefault(), v());
            break;
          case "Home":
            y && (e.preventDefault(), y());
            break;
          case "End":
            x && (e.preventDefault(), x())
        }
      },
      onFocus: _,
      onBlur: E
    },
    incrementButtonProps: {
      onPressStart: () => {
        M(400), P(window, "contextmenu", C)
      },
      onPressEnd: () => {
        S(), T()
      },
      onFocus: _,
      onBlur: E
    },
    decrementButtonProps: {
      onPressStart: () => {
        D(400), P(window, "contextmenu", C)
      },
      onPressEnd: () => {
        S(), T()
      },
      onFocus: _,
      onBlur: E
    }
  }
}
a = {
  "ar-AE": c = {
    Empty: "فارغ"
  },
  "bg-BG": u = {
    Empty: "Изпразни"
  },
  "cs-CZ": d = {
    Empty: "Pr\xe1zdn\xe9"
  },
  "da-DK": l = {
    Empty: "Tom"
  },
  "de-DE": f = {
    Empty: "Leer"
  },
  "el-GR": p = {
    Empty: "Άδειο"
  },
  "en-US": h = {
    Empty: "Empty"
  },
  "es-ES": g = {
    Empty: "Vac\xedo"
  },
  "et-EE": b = {
    Empty: "T\xfchjenda"
  },
  "fi-FI": v = {
    Empty: "Tyhj\xe4"
  },
  "fr-FR": m = {
    Empty: "Vide"
  },
  "he-IL": y = {
    Empty: "ריק"
  },
  "hr-HR": x = {
    Empty: "Prazno"
  },
  "hu-HU": w = {
    Empty: "\xdcres"
  },
  "it-IT": S = {
    Empty: "Vuoto"
  },
  "ja-JP": k = {
    Empty: "空"
  },
  "ko-KR": _ = {
    Empty: "비어 있음"
  },
  "lt-LT": E = {
    Empty: "Tuščias"
  },
  "lv-LV": M = {
    Empty: "Tukšs"
  },
  "nb-NO": D = {
    Empty: "Tom"
  },
  "nl-NL": C = {
    Empty: "Leeg"
  },
  "pl-PL": P = {
    Empty: "Pusty"
  },
  "pt-BR": T = {
    Empty: "Vazio"
  },
  "pt-PT": A = {
    Empty: "Vazio"
  },
  "ro-RO": R = {
    Empty: "Gol"
  },
  "ru-RU": I = {
    Empty: "Не заполнено"
  },
  "sk-SK": O = {
    Empty: "Pr\xe1zdne"
  },
  "sl-SI": j = {
    Empty: "Prazen"
  },
  "sr-SP": N = {
    Empty: "Prazno"
  },
  "sv-SE": L = {
    Empty: "Tomt"
  },
  "tr-TR": F = {
    Empty: "Boş"
  },
  "uk-UA": B = {
    Empty: "Пусто"
  },
  "zh-CN": z = {
    Empty: "空"
  },
  "zh-TW": K = {
    Empty: "空白"
  }
}