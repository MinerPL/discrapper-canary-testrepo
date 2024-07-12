n.d(t, {
  G: function() {
return H;
  }
});
var r = n(127118),
  i = n(258008),
  a = n(536411),
  o = n(92981),
  s = n(129370),
  l = n(695249),
  u = n(226259),
  c = n(700830),
  d = n(108968),
  _ = n(859455),
  E = n(213693),
  f = n(563725),
  h = n(543179),
  p = n(2022),
  m = n(859974),
  I = n(993770),
  T = n(98426),
  g = n(842979),
  S = n(501422),
  A = n(852785),
  N = n(286507),
  v = n(995747),
  O = n(297418),
  R = n(229619),
  C = n(625895),
  y = n(290578),
  D = n(993518),
  L = n(440586),
  b = n(763677),
  M = n(724777),
  P = n(200045),
  U = n(938450),
  w = n(498184),
  x = n(951308),
  G = n(770003),
  k = n(470079),
  B = n(182823),
  F = n(616073),
  V = {};

function H(e) {
  var t;
  let n = (0, k.useRef)(),
{
  value: r,
  textValue: i,
  minValue: a,
  maxValue: o,
  isDisabled: s,
  isReadOnly: l,
  isRequired: u,
  onIncrement: c,
  onIncrementPage: d,
  onDecrement: _,
  onDecrementPage: E,
  onDecrementToMin: f,
  onIncrementToMax: h
} = e;
  let p = (0, F.qb)((t = V) && t.__esModule ? t.default : t, '@react-aria/spinbutton'),
m = () => clearTimeout(n.current);
  (0, k.useEffect)(() => () => m(), []);
  let I = (0, k.useRef)(!1),
T = () => {
  I.current = !0;
},
g = () => {
  I.current = !1;
};
  i = '' === i ? p.format('Empty') : (i || `${ r }`).replace('-', '\u2212'), (0, k.useEffect)(() => {
I.current && ((0, G.gb)('assertive'), (0, G.xQ)(i, 'assertive'));
  }, [i]);
  let S = (0, B.iW)(e => {
  m(), c(), n.current = window.setTimeout(() => {
    (isNaN(o) || isNaN(r) || r < o) && S(60);
  }, e);
}),
A = (0, B.iW)(e => {
  m(), _(), n.current = window.setTimeout(() => {
    (isNaN(a) || isNaN(r) || r > a) && A(60);
  }, e);
}),
N = e => {
  e.preventDefault();
},
{
  addGlobalListener: v,
  removeAllGlobalListeners: O
} = (0, B.xi)();
  return {
spinButtonProps: {
  role: 'spinbutton',
  'aria-valuenow': isNaN(r) ? null : r,
  'aria-valuetext': i,
  'aria-valuemin': a,
  'aria-valuemax': o,
  'aria-disabled': s || null,
  'aria-readonly': l || null,
  'aria-required': u || null,
  onKeyDown: e => {
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !l)
      switch (e.key) {
        case 'PageUp':
          if (d) {
            e.preventDefault(), d();
            break;
          }
        case 'ArrowUp':
        case 'Up':
          c && (e.preventDefault(), c());
          break;
        case 'PageDown':
          if (E) {
            e.preventDefault(), E();
            break;
          }
        case 'ArrowDown':
        case 'Down':
          _ && (e.preventDefault(), _());
          break;
        case 'Home':
          f && (e.preventDefault(), f());
          break;
        case 'End':
          h && (e.preventDefault(), h());
      }
  },
  onFocus: T,
  onBlur: g
},
incrementButtonProps: {
  onPressStart: () => {
    S(400), v(window, 'contextmenu', N);
  },
  onPressEnd: () => {
    m(), O();
  },
  onFocus: T,
  onBlur: g
},
decrementButtonProps: {
  onPressStart: () => {
    A(400), v(window, 'contextmenu', N);
  },
  onPressEnd: () => {
    m(), O();
  },
  onFocus: T,
  onBlur: g
}
  };
}
V = {
  'ar-AE': r.Z,
  'bg-BG': i.Z,
  'cs-CZ': a.Z,
  'da-DK': o.Z,
  'de-DE': s.Z,
  'el-GR': l.Z,
  'en-US': u.Z,
  'es-ES': c.Z,
  'et-EE': d.Z,
  'fi-FI': _.Z,
  'fr-FR': E.Z,
  'he-IL': f.Z,
  'hr-HR': h.Z,
  'hu-HU': p.Z,
  'it-IT': m.Z,
  'ja-JP': I.Z,
  'ko-KR': T.Z,
  'lt-LT': g.Z,
  'lv-LV': S.Z,
  'nb-NO': A.Z,
  'nl-NL': N.Z,
  'pl-PL': v.Z,
  'pt-BR': O.Z,
  'pt-PT': R.Z,
  'ro-RO': C.Z,
  'ru-RU': y.Z,
  'sk-SK': D.Z,
  'sl-SI': L.Z,
  'sr-SP': b.Z,
  'sv-SE': M.Z,
  'tr-TR': P.Z,
  'uk-UA': U.Z,
  'zh-CN': w.Z,
  'zh-TW': x.Z
};