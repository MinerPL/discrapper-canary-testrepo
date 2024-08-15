n.d(t, {
  H9: function() {
return W;
  },
  iX: function() {
return K;
  },
  u4: function() {
return Y;
  },
  x7: function() {
return z;
  }
});
var r = n(488745),
  i = n(478741),
  a = n(833442),
  s = n(278448),
  o = n(996244),
  l = n(367890),
  u = n(351931),
  c = n(850565),
  d = n(346957),
  _ = n(815915),
  E = n(970151),
  f = n(311899),
  h = n(831280),
  p = n(221022),
  m = n(623226),
  I = n(66099),
  T = n(130196),
  g = n(739050),
  S = n(985265),
  A = n(169794),
  N = n(301485),
  v = n(151593),
  O = n(558254),
  R = n(279465),
  C = n(134945),
  y = n(36737),
  D = n(884147),
  L = n(696421),
  b = n(623126),
  M = n(800889),
  P = n(135858),
  U = n(959736),
  w = n(103878),
  x = n(317141),
  G = n(182823),
  k = n(616073),
  B = n(612001),
  F = n(795250),
  V = n(148836),
  H = n(275857);
n(470079);
var Z = {};

function Y(e, t, n) {
  var r;
  let {
type: i = 'menu',
isDisabled: a,
trigger: s = 'press'
  } = e, o = (0, G.Me)(), {
triggerProps: l,
overlayProps: u
  } = (0, F.IB)({
type: i
  }, t, n);
  let c = (0, k.qb)((r = Z) && r.__esModule ? r.default : r, '@react-aria/menu'),
{
  longPressProps: d
} = (0, B.TA)({
  isDisabled: a || 'longPress' !== s,
  accessibilityDescription: c.format('longPressMessage'),
  onLongPressStart() {
    t.close();
  },
  onLongPress() {
    t.open('first');
  }
});
  return delete l.onPress, {
menuTriggerProps: {
  ...l,
  ...'press' === s ? {
    onPressStart(e) {
      'touch' !== e.pointerType && 'keyboard' !== e.pointerType && !a && t.toggle('virtual' === e.pointerType ? 'first' : null);
    },
    onPress(e) {
      'touch' === e.pointerType && !a && t.toggle();
    }
  } : d,
  id: o,
  onKeyDown: e => {
    if (!a) {
      if (('longPress' !== s || e.altKey) && n && n.current)
        switch (e.key) {
          case 'Enter':
          case ' ':
            if ('longPress' === s)
              return;
          case 'ArrowDown':
            !('continuePropagation' in e) && e.stopPropagation(), e.preventDefault(), t.toggle('first');
            break;
          case 'ArrowUp':
            !('continuePropagation' in e) && e.stopPropagation(), e.preventDefault(), t.toggle('last');
            break;
          default:
            'continuePropagation' in e && e.continuePropagation();
        }
    }
  }
},
menuProps: {
  ...u,
  'aria-labelledby': o,
  autoFocus: t.focusStrategy || !0,
  onClose: t.close
}
  };
}
Z = {
  'ar-AE': r.Z,
  'bg-BG': i.Z,
  'cs-CZ': a.Z,
  'da-DK': s.Z,
  'de-DE': o.Z,
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
let j = new WeakMap();

function W(e, t, n) {
  let {
shouldFocusWrap: r = !0,
onKeyDown: i,
onKeyUp: a,
...s
  } = e;
  !e['aria-label'] && !e['aria-labelledby'] && console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
  let o = (0, G.zL)(e, {
  labelable: !0
}),
{
  listProps: l
} = (0, V._t)({
  ...s,
  ref: n,
  selectionManager: t.selectionManager,
  collection: t.collection,
  disabledKeys: t.disabledKeys,
  shouldFocusWrap: r,
  linkBehavior: 'override'
});
  return j.set(t, {
onClose: e.onClose,
onAction: e.onAction
  }), {
menuProps: (0, G.dG)(o, {
  onKeyDown: i,
  onKeyUp: a
}, {
  role: 'menu',
  ...l,
  onKeyDown: e => {
    'Escape' !== e.key && l.onKeyDown(e);
  }
})
  };
}

function K(e, t, n) {
  var r, i, a;
  let {
key: s,
closeOnSelect: o,
isVirtualized: l,
'aria-haspopup': u,
onPressStart: c,
onPressUp: d,
onPress: _,
onPressChange: E,
onPressEnd: f,
onHoverStart: h,
onHoverChange: p,
onHoverEnd: m,
onKeyDown: I,
onKeyUp: T,
onFocus: g,
onFocusChange: S,
onBlur: A
  } = e, N = !!u, v = null !== (i = e.isDisabled) && void 0 !== i ? i : t.disabledKeys.has(s), O = null !== (a = e.isSelected) && void 0 !== a ? a : t.selectionManager.isSelected(s), R = j.get(t), C = e.onClose || R.onClose, y = N ? () => {} : e.onAction || R.onAction, D = (0, G.tv)(), L = e => {
y && y(s), e.target instanceof HTMLAnchorElement && D.open(e.target, e);
  }, b = 'menuitem';
  !N && ('single' === t.selectionManager.selectionMode ? b = 'menuitemradio' : 'multiple' === t.selectionManager.selectionMode && (b = 'menuitemcheckbox'));
  let M = (0, G.mp)(),
P = (0, G.mp)(),
U = (0, G.mp)(),
w = {
  'aria-disabled': v || void 0,
  role: b,
  'aria-label': e['aria-label'],
  'aria-labelledby': M,
  'aria-describedby': [
    P,
    U
  ].filter(Boolean).join(' ') || void 0,
  'aria-controls': e['aria-controls'],
  'aria-haspopup': u,
  'aria-expanded': e['aria-expanded']
};
  'none' !== t.selectionManager.selectionMode && !N && (w['aria-checked'] = O);
  let x = t.collection.getItem(s);
  l && (w['aria-posinset'] = null == x ? void 0 : x.index, w['aria-setsize'] = (0, H.is)(t.collection));
  let {
itemProps: k,
isFocused: F
  } = (0, V.Cs)({
selectionManager: t.selectionManager,
key: s,
ref: n,
shouldSelectOnPressUp: !0,
allowsDifferentPressOrigin: !0,
linkBehavior: 'none'
  }), {
pressProps: Z,
isPressed: Y
  } = (0, B.r7)({
onPressStart: e => {
  'keyboard' === e.pointerType && L(e), null == c || c(e);
},
onPress: _,
onPressUp: e => {
  'keyboard' !== e.pointerType && (L(e), !N && C && (null != o ? o : 'multiple' !== t.selectionManager.selectionMode || t.selectionManager.isLink(s)) && C()), null == d || d(e);
},
onPressChange: E,
onPressEnd: f,
isDisabled: v
  }), {
hoverProps: W
  } = (0, B.XI)({
isDisabled: v,
onHoverStart(e) {
  !(0, B.E)() && (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(s)), null == h || h(e);
},
onHoverChange: p,
onHoverEnd: m
  }), {
keyboardProps: K
  } = (0, B.v5)({
onKeyDown: e => {
  if (e.repeat) {
    e.continuePropagation();
    return;
  }
  switch (e.key) {
    case ' ':
      !v && 'none' === t.selectionManager.selectionMode && !N && !1 !== o && C && C();
      break;
    case 'Enter':
      !v && !1 !== o && !N && C && C();
      break;
    default:
      !N && e.continuePropagation(), null == I || I(e);
  }
},
onKeyUp: T
  }), {
focusProps: z
  } = (0, B.KK)({
onBlur: A,
onFocus: g,
onFocusChange: S
  }), q = (0, G.zL)(x.props, {
isLink: !!(null == x ? void 0 : null === (r = x.props) || void 0 === r ? void 0 : r.href)
  });
  return delete q.id, {
menuItemProps: {
  ...w,
  ...(0, G.dG)(q, N ? {
    onFocus: k.onFocus
  } : k, Z, W, K, z),
  tabIndex: null != k.tabIndex ? -1 : void 0
},
labelProps: {
  id: M
},
descriptionProps: {
  id: P
},
keyboardShortcutProps: {
  id: U
},
isFocused: F,
isSelected: O,
isPressed: Y,
isDisabled: v
  };
}

function z(e) {
  let {
heading: t,
'aria-label': n
  } = e, r = (0, G.Me)();
  return {
itemProps: {
  role: 'presentation'
},
headingProps: t ? {
  id: r,
  role: 'presentation'
} : {},
groupProps: {
  role: 'group',
  'aria-label': n,
  'aria-labelledby': t ? r : void 0
}
  };
}