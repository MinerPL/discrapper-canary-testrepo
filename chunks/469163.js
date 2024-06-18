"use strict";
n.d(t, {
  G: function() {
    return z
  }
});
var r = n(127118),
  i = n(258008),
  a = n(536411),
  o = n(92981),
  s = n(129370),
  u = n(695249),
  c = n(226259),
  l = n(700830),
  d = n(108968),
  f = n(859455),
  p = n(213693),
  h = n(563725),
  m = n(543179),
  g = n(2022),
  _ = n(859974),
  b = n(993770),
  v = n(98426),
  y = n(842979),
  E = n(501422),
  S = n(852785),
  x = n(286507),
  w = n(995747),
  C = n(297418),
  T = n(229619),
  D = n(625895),
  M = n(290578),
  O = n(993518),
  A = n(440586),
  k = n(763677),
  R = n(724777),
  N = n(200045),
  I = n(938450),
  L = n(498184),
  P = n(951308),
  B = n(770003),
  F = n(470079),
  U = n(182823),
  j = n(616073),
  Y = {};

function z(e) {
  var t;
  let n = (0, F.useRef)(),
    {
      value: r,
      textValue: i,
      minValue: a,
      maxValue: o,
      isDisabled: s,
      isReadOnly: u,
      isRequired: c,
      onIncrement: l,
      onIncrementPage: d,
      onDecrement: f,
      onDecrementPage: p,
      onDecrementToMin: h,
      onIncrementToMax: m
    } = e;
  let g = (0, j.qb)((t = Y) && t.__esModule ? t.default : t, "@react-aria/spinbutton"),
    _ = () => clearTimeout(n.current);
  (0, F.useEffect)(() => () => _(), []);
  let b = (0, F.useRef)(!1),
    v = () => {
      b.current = !0
    },
    y = () => {
      b.current = !1
    };
  i = "" === i ? g.format("Empty") : (i || `${r}`).replace("-", "−"), (0, F.useEffect)(() => {
    b.current && ((0, B.gb)("assertive"), (0, B.xQ)(i, "assertive"))
  }, [i]);
  let E = (0, U.iW)(e => {
      _(), l(), n.current = window.setTimeout(() => {
        (isNaN(o) || isNaN(r) || r < o) && E(60)
      }, e)
    }),
    S = (0, U.iW)(e => {
      _(), f(), n.current = window.setTimeout(() => {
        (isNaN(a) || isNaN(r) || r > a) && S(60)
      }, e)
    }),
    x = e => {
      e.preventDefault()
    },
    {
      addGlobalListener: w,
      removeAllGlobalListeners: C
    } = (0, U.xi)();
  return {
    spinButtonProps: {
      role: "spinbutton",
      "aria-valuenow": isNaN(r) ? null : r,
      "aria-valuetext": i,
      "aria-valuemin": a,
      "aria-valuemax": o,
      "aria-disabled": s || null,
      "aria-readonly": u || null,
      "aria-required": c || null,
      onKeyDown: e => {
        if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !u) switch (e.key) {
          case "PageUp":
            if (d) {
              e.preventDefault(), d();
              break
            }
          case "ArrowUp":
          case "Up":
            l && (e.preventDefault(), l());
            break;
          case "PageDown":
            if (p) {
              e.preventDefault(), p();
              break
            }
          case "ArrowDown":
          case "Down":
            f && (e.preventDefault(), f());
            break;
          case "Home":
            h && (e.preventDefault(), h());
            break;
          case "End":
            m && (e.preventDefault(), m())
        }
      },
      onFocus: v,
      onBlur: y
    },
    incrementButtonProps: {
      onPressStart: () => {
        E(400), w(window, "contextmenu", x)
      },
      onPressEnd: () => {
        _(), C()
      },
      onFocus: v,
      onBlur: y
    },
    decrementButtonProps: {
      onPressStart: () => {
        S(400), w(window, "contextmenu", x)
      },
      onPressEnd: () => {
        _(), C()
      },
      onFocus: v,
      onBlur: y
    }
  }
}
Y = {
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