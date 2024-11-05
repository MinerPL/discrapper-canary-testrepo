n.d(t, {
    E: function () {
        return q;
    }
});
var r = n(513394),
    i = n(621963),
    a = n(828079),
    s = n(453833),
    o = n(262234),
    l = n(398436),
    u = n(202514),
    c = n(163059),
    d = n(192722),
    f = n(740385),
    _ = n(462378),
    h = n(768107),
    p = n(224290),
    m = n(851902),
    g = n(551885),
    E = n(321531),
    v = n(685995),
    I = n(478638),
    S = n(578163),
    T = n(595048),
    b = n(762120),
    y = n(670598),
    A = n(102315),
    N = n(948109),
    C = n(918525),
    R = n(602250),
    O = n(143880),
    D = n(500652),
    L = n(147341),
    x = n(689845),
    w = n(365498),
    M = n(949739),
    P = n(683384),
    k = n(373141),
    U = n(770003),
    G = n(726983),
    B = n(46670),
    Z = n(661763),
    F = n(192379),
    V = n(989103),
    j = n(766203),
    H = n(969129),
    Y = n(649859),
    W = n(184495),
    K = n(298397),
    z = {};
function q(e, t) {
    var n, r, i;
    let { buttonRef: a, popoverRef: s, inputRef: o, listBoxRef: l, keyboardDelegate: u, shouldFocusWrap: c, isReadOnly: d, isDisabled: f } = e;
    let _ = (0, Y.qb)((i = z) && i.__esModule ? i.default : i, '@react-aria/combobox'),
        { menuTriggerProps: h, menuProps: p } = (0, W.u4)(
            {
                type: 'listbox',
                isDisabled: f || d
            },
            t,
            a
        );
    (0, B.Oj).set(t, { id: p.id });
    let m = (0, F.useMemo)(() => u || new j.dp(t.collection, t.disabledKeys, l), [u, t.collection, t.disabledKeys, l]),
        { collectionProps: g } = (0, j.gq)({
            selectionManager: t.selectionManager,
            keyboardDelegate: m,
            disallowTypeAhead: !0,
            disallowEmptySelection: !0,
            shouldFocusWrap: c,
            ref: o,
            isVirtualized: !0
        }),
        E = (0, Z.tv)(),
        { isInvalid: v, validationErrors: I, validationDetails: S } = t.displayValidation,
        {
            labelProps: T,
            inputProps: b,
            descriptionProps: y,
            errorMessageProps: A
        } = (0, K.E)(
            {
                ...e,
                onChange: t.setInputValue,
                onKeyDown: d
                    ? e.onKeyDown
                    : (0, Z.tS)(
                          t.isOpen && g.onKeyDown,
                          (n) => {
                              switch (n.key) {
                                  case 'Enter':
                                  case 'Tab':
                                      if ((t.isOpen && 'Enter' === n.key && n.preventDefault(), t.isOpen && null != t.selectionManager.focusedKey && t.selectionManager.isLink(t.selectionManager.focusedKey))) {
                                          if ('Enter' === n.key) {
                                              let e = l.current.querySelector(`[data-key="${CSS.escape(t.selectionManager.focusedKey.toString())}"]`);
                                              e instanceof HTMLAnchorElement && E.open(e, n);
                                          }
                                          t.close();
                                      } else t.commit();
                                      break;
                                  case 'Escape':
                                      (null !== t.selectedKey || '' === t.inputValue || e.allowsCustomValue) && n.continuePropagation(), t.revert();
                                      break;
                                  case 'ArrowDown':
                                      t.open('first', 'manual');
                                      break;
                                  case 'ArrowUp':
                                      t.open('last', 'manual');
                                      break;
                                  case 'ArrowLeft':
                                  case 'ArrowRight':
                                      t.selectionManager.setFocusedKey(null);
                              }
                          },
                          e.onKeyDown
                      ),
                onBlur: (n) => {
                    var r;
                    !(n.relatedTarget === (null == a ? void 0 : a.current) || (null === (r = s.current) || void 0 === r ? void 0 : r.contains(n.relatedTarget))) && (e.onBlur && e.onBlur(n), t.setFocused(!1));
                },
                value: t.inputValue,
                onFocus: (n) => {
                    !t.isFocused && (e.onFocus && e.onFocus(n), t.setFocused(!0));
                },
                autoComplete: 'off',
                validate: void 0,
                [H.tL]: t
            },
            o
        ),
        N = (0, Z.bE)({
            id: h.id,
            'aria-label': _.format('buttonLabel'),
            'aria-labelledby': e['aria-labelledby'] || T.id
        }),
        C = (0, Z.bE)({
            id: p.id,
            'aria-label': _.format('listboxLabel'),
            'aria-labelledby': e['aria-labelledby'] || T.id
        }),
        R = (0, F.useRef)(0),
        O = null != t.selectionManager.focusedKey && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0,
        D = null !== (n = null == O ? void 0 : O.parentKey) && void 0 !== n ? n : null,
        L = null !== (r = t.selectionManager.focusedKey) && void 0 !== r ? r : null,
        x = (0, F.useRef)(D),
        w = (0, F.useRef)(L);
    (0, F.useEffect)(() => {
        if ((0, Z.ad)() && null != O && L !== w.current) {
            let e = t.selectionManager.isSelected(L),
                n = null != D ? t.collection.getItem(D) : null,
                r = (null == n ? void 0 : n['aria-label']) || ('string' == typeof (null == n ? void 0 : n.rendered) ? n.rendered : '') || '',
                i = _.format('focusAnnouncement', {
                    isGroupChange: n && D !== x.current,
                    groupTitle: r,
                    groupCount: n ? [...(0, V._P)(n, t.collection)].length : 0,
                    optionText: O['aria-label'] || O.textValue || '',
                    isSelected: e
                });
            (0, U.xQ)(i);
        }
        (x.current = D), (w.current = L);
    });
    let M = (0, V.is)(t.collection),
        P = (0, F.useRef)(M),
        k = (0, F.useRef)(t.isOpen);
    (0, F.useEffect)(() => {
        let e = t.isOpen !== k.current && (null == t.selectionManager.focusedKey || (0, Z.ad)());
        if (t.isOpen && (e || M !== P.current)) {
            let e = _.format('countAnnouncement', { optionCount: M });
            (0, U.xQ)(e);
        }
        (P.current = M), (k.current = t.isOpen);
    });
    let q = (0, F.useRef)(t.selectedKey);
    return (
        (0, F.useEffect)(() => {
            if ((0, Z.ad)() && t.isFocused && t.selectedItem && t.selectedKey !== q.current) {
                let e = t.selectedItem['aria-label'] || t.selectedItem.textValue || '',
                    n = _.format('selectedAnnouncement', { optionText: e });
                (0, U.xQ)(n);
            }
            q.current = t.selectedKey;
        }),
        (0, F.useEffect)(() => {
            if (t.isOpen) return (0, G.RP)([o.current, s.current]);
        }, [t.isOpen, o, s]),
        {
            labelProps: T,
            buttonProps: {
                ...h,
                ...N,
                excludeFromTabOrder: !0,
                onPress: (e) => {
                    'touch' === e.pointerType && (o.current.focus(), t.toggle(null, 'manual'));
                },
                onPressStart: (e) => {
                    'touch' !== e.pointerType && (o.current.focus(), t.toggle('keyboard' === e.pointerType || 'virtual' === e.pointerType ? 'first' : null, 'manual'));
                },
                isDisabled: f || d
            },
            inputProps: (0, Z.dG)(b, {
                role: 'combobox',
                'aria-expanded': h['aria-expanded'],
                'aria-controls': t.isOpen ? p.id : void 0,
                'aria-autocomplete': 'list',
                'aria-activedescendant': O ? (0, B.x3)(t, O.key) : void 0,
                onTouchEnd: (e) => {
                    if (f || d) return;
                    if (e.timeStamp - R.current < 500) {
                        e.preventDefault(), o.current.focus();
                        return;
                    }
                    let n = e.target.getBoundingClientRect(),
                        r = e.changedTouches[0],
                        i = Math.ceil(n.left + 0.5 * n.width),
                        a = Math.ceil(n.top + 0.5 * n.height);
                    r.clientX === i && r.clientY === a && (e.preventDefault(), o.current.focus(), t.toggle(null, 'manual'), (R.current = e.timeStamp));
                },
                autoCorrect: 'off',
                spellCheck: 'false'
            }),
            listBoxProps: (0, Z.dG)(p, C, {
                autoFocus: t.focusStrategy,
                shouldUseVirtualFocus: !0,
                shouldSelectOnPressUp: !0,
                shouldFocusOnHover: !0,
                linkBehavior: 'selection'
            }),
            descriptionProps: y,
            errorMessageProps: A,
            isInvalid: v,
            validationErrors: I,
            validationDetails: S
        }
    );
}
z = {
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
