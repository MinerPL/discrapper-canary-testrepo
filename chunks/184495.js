n.d(t, {
    H9: function () {
        return W;
    },
    iX: function () {
        return K;
    },
    u4: function () {
        return H;
    },
    x7: function () {
        return z;
    }
});
var r = n(677846),
    i = n(576677),
    a = n(995453),
    s = n(338027),
    o = n(260805),
    l = n(63719),
    u = n(767679),
    c = n(500995),
    d = n(422936),
    f = n(544344),
    _ = n(90468),
    h = n(176007),
    p = n(399174),
    m = n(517280),
    g = n(540099),
    E = n(63466),
    v = n(424327),
    I = n(963547),
    S = n(608382),
    T = n(632034),
    b = n(453361),
    y = n(694214),
    A = n(724339),
    N = n(761521),
    C = n(10893),
    R = n(2728),
    O = n(42090),
    D = n(870478),
    L = n(632174),
    x = n(4598),
    w = n(367788),
    M = n(746194),
    P = n(654237),
    k = n(319719),
    U = n(661763),
    G = n(649859),
    B = n(921336),
    Z = n(726983),
    F = n(766203),
    V = n(989103);
n(192379);
var j = {};
function H(e, t, n) {
    var r;
    let { type: i = 'menu', isDisabled: a, trigger: s = 'press' } = e,
        o = (0, U.Me)(),
        { triggerProps: l, overlayProps: u } = (0, Z.IB)({ type: i }, t, n);
    let c = (0, G.qb)((r = j) && r.__esModule ? r.default : r, '@react-aria/menu'),
        { longPressProps: d } = (0, B.TA)({
            isDisabled: a || 'longPress' !== s,
            accessibilityDescription: c.format('longPressMessage'),
            onLongPressStart() {
                t.close();
            },
            onLongPress() {
                t.open('first');
            }
        });
    return (
        delete l.onPress,
        {
            menuTriggerProps: {
                ...l,
                ...('press' === s
                    ? {
                          onPressStart(e) {
                              'touch' !== e.pointerType && 'keyboard' !== e.pointerType && !a && t.toggle('virtual' === e.pointerType ? 'first' : null);
                          },
                          onPress(e) {
                              'touch' === e.pointerType && !a && t.toggle();
                          }
                      }
                    : d),
                id: o,
                onKeyDown: (e) => {
                    if (!a) {
                        if (('longPress' !== s || e.altKey) && n && n.current)
                            switch (e.key) {
                                case 'Enter':
                                case ' ':
                                    if ('longPress' === s) return;
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
        }
    );
}
j = {
    'ar-AE': r.Z,
    'bg-BG': i.Z,
    'cs-CZ': a.Z,
    'da-DK': s.Z,
    'de-DE': o.Z,
    'el-GR': l.Z,
    'en-US': u.Z,
    'es-ES': c.Z,
    'et-EE': d.Z,
    'fi-FI': f.Z,
    'fr-FR': _.Z,
    'he-IL': h.Z,
    'hr-HR': p.Z,
    'hu-HU': m.Z,
    'it-IT': g.Z,
    'ja-JP': E.Z,
    'ko-KR': v.Z,
    'lt-LT': I.Z,
    'lv-LV': S.Z,
    'nb-NO': T.Z,
    'nl-NL': b.Z,
    'pl-PL': y.Z,
    'pt-BR': A.Z,
    'pt-PT': N.Z,
    'ro-RO': C.Z,
    'ru-RU': R.Z,
    'sk-SK': O.Z,
    'sl-SI': D.Z,
    'sr-SP': L.Z,
    'sv-SE': x.Z,
    'tr-TR': w.Z,
    'uk-UA': M.Z,
    'zh-CN': P.Z,
    'zh-TW': k.Z
};
let Y = new WeakMap();
function W(e, t, n) {
    let { shouldFocusWrap: r = !0, onKeyDown: i, onKeyUp: a, ...s } = e;
    !e['aria-label'] && !e['aria-labelledby'] && console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    let o = (0, U.zL)(e, { labelable: !0 }),
        { listProps: l } = (0, F._t)({
            ...s,
            ref: n,
            selectionManager: t.selectionManager,
            collection: t.collection,
            disabledKeys: t.disabledKeys,
            shouldFocusWrap: r,
            linkBehavior: 'override'
        });
    return (
        Y.set(t, {
            onClose: e.onClose,
            onAction: e.onAction
        }),
        {
            menuProps: (0, U.dG)(
                o,
                {
                    onKeyDown: i,
                    onKeyUp: a
                },
                {
                    role: 'menu',
                    ...l,
                    onKeyDown: (e) => {
                        'Escape' !== e.key && l.onKeyDown(e);
                    }
                }
            )
        }
    );
}
function K(e, t, n) {
    var r, i, a;
    let { key: s, closeOnSelect: o, isVirtualized: l, 'aria-haspopup': u, onPressStart: c, onPressUp: d, onPress: f, onPressChange: _, onPressEnd: h, onHoverStart: p, onHoverChange: m, onHoverEnd: g, onKeyDown: E, onKeyUp: v, onFocus: I, onFocusChange: S, onBlur: T } = e,
        b = !!u,
        y = null !== (i = e.isDisabled) && void 0 !== i ? i : t.disabledKeys.has(s),
        A = null !== (a = e.isSelected) && void 0 !== a ? a : t.selectionManager.isSelected(s),
        N = Y.get(t),
        C = e.onClose || N.onClose,
        R = b ? () => {} : e.onAction || N.onAction,
        O = (0, U.tv)(),
        D = (e) => {
            R && R(s), e.target instanceof HTMLAnchorElement && O.open(e.target, e);
        },
        L = 'menuitem';
    !b && ('single' === t.selectionManager.selectionMode ? (L = 'menuitemradio') : 'multiple' === t.selectionManager.selectionMode && (L = 'menuitemcheckbox'));
    let x = (0, U.mp)(),
        w = (0, U.mp)(),
        M = (0, U.mp)(),
        P = {
            'aria-disabled': y || void 0,
            role: L,
            'aria-label': e['aria-label'],
            'aria-labelledby': x,
            'aria-describedby': [w, M].filter(Boolean).join(' ') || void 0,
            'aria-controls': e['aria-controls'],
            'aria-haspopup': u,
            'aria-expanded': e['aria-expanded']
        };
    'none' !== t.selectionManager.selectionMode && !b && (P['aria-checked'] = A);
    let k = t.collection.getItem(s);
    l && ((P['aria-posinset'] = null == k ? void 0 : k.index), (P['aria-setsize'] = (0, V.is)(t.collection)));
    let { itemProps: G, isFocused: Z } = (0, F.Cs)({
            selectionManager: t.selectionManager,
            key: s,
            ref: n,
            shouldSelectOnPressUp: !0,
            allowsDifferentPressOrigin: !0,
            linkBehavior: 'none'
        }),
        { pressProps: j, isPressed: H } = (0, B.r7)({
            onPressStart: (e) => {
                'keyboard' === e.pointerType && D(e), null == c || c(e);
            },
            onPress: f,
            onPressUp: (e) => {
                'keyboard' !== e.pointerType && (D(e), !b && C && (null != o ? o : 'multiple' !== t.selectionManager.selectionMode || t.selectionManager.isLink(s)) && C()), null == d || d(e);
            },
            onPressChange: _,
            onPressEnd: h,
            isDisabled: y
        }),
        { hoverProps: W } = (0, B.XI)({
            isDisabled: y,
            onHoverStart(e) {
                !(0, B.E)() && (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(s)), null == p || p(e);
            },
            onHoverChange: m,
            onHoverEnd: g
        }),
        { keyboardProps: K } = (0, B.v5)({
            onKeyDown: (e) => {
                if (e.repeat) {
                    e.continuePropagation();
                    return;
                }
                switch (e.key) {
                    case ' ':
                        !y && 'none' === t.selectionManager.selectionMode && !b && !1 !== o && C && C();
                        break;
                    case 'Enter':
                        !y && !1 !== o && !b && C && C();
                        break;
                    default:
                        !b && e.continuePropagation(), null == E || E(e);
                }
            },
            onKeyUp: v
        }),
        { focusProps: z } = (0, B.KK)({
            onBlur: T,
            onFocus: I,
            onFocusChange: S
        }),
        q = (0, U.zL)(k.props, { isLink: !!(null == k ? void 0 : null === (r = k.props) || void 0 === r ? void 0 : r.href) });
    return (
        delete q.id,
        {
            menuItemProps: {
                ...P,
                ...(0, U.dG)(q, b ? { onFocus: G.onFocus } : G, j, W, K, z),
                tabIndex: null != G.tabIndex ? -1 : void 0
            },
            labelProps: { id: x },
            descriptionProps: { id: w },
            keyboardShortcutProps: { id: M },
            isFocused: Z,
            isSelected: A,
            isPressed: H,
            isDisabled: y
        }
    );
}
function z(e) {
    let { heading: t, 'aria-label': n } = e,
        r = (0, U.Me)();
    return {
        itemProps: { role: 'presentation' },
        headingProps: t
            ? {
                  id: r,
                  role: 'presentation'
              }
            : {},
        groupProps: {
            role: 'group',
            'aria-label': n,
            'aria-labelledby': t ? r : void 0
        }
    };
}
