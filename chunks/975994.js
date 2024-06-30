n.d(t, {
    E: function () {
        return q;
    }
});
var r = n(235003), i = n(385201), a = n(875889), o = n(867377), s = n(502651), l = n(364920), u = n(478943), c = n(518034), d = n(706015), _ = n(974046), E = n(554520), f = n(726249), h = n(395861), p = n(953523), m = n(706440), I = n(788675), T = n(591995), g = n(885723), S = n(580917), A = n(773959), N = n(168147), v = n(408291), O = n(396423), R = n(701809), C = n(340132), y = n(355180), D = n(778341), L = n(368480), b = n(453440), M = n(910188), P = n(733710), U = n(213789), w = n(814137), x = n(574573), G = n(770003), k = n(795250), B = n(753264), F = n(182823), V = n(470079), H = n(275857), Z = n(148836), Y = n(201284), j = n(616073), W = n(370225), K = n(640900), z = {};
function q(e, t) {
    var n, r, i;
    let {
        buttonRef: a,
        popoverRef: o,
        inputRef: s,
        listBoxRef: l,
        keyboardDelegate: u,
        shouldFocusWrap: c,
        isReadOnly: d,
        isDisabled: _
    } = e;
    let E = (0, j.qb)((i = z) && i.__esModule ? i.default : i, '@react-aria/combobox'), {
            menuTriggerProps: f,
            menuProps: h
        } = (0, W.u4)({
            type: 'listbox',
            isDisabled: _ || d
        }, t, a);
    (0, B.Oj).set(t, { id: h.id });
    let p = (0, V.useMemo)(() => u || new Z.dp(t.collection, t.disabledKeys, l), [
            u,
            t.collection,
            t.disabledKeys,
            l
        ]), {collectionProps: m} = (0, Z.gq)({
            selectionManager: t.selectionManager,
            keyboardDelegate: p,
            disallowTypeAhead: !0,
            disallowEmptySelection: !0,
            shouldFocusWrap: c,
            ref: s,
            isVirtualized: !0
        }), I = (0, F.tv)(), {
            isInvalid: T,
            validationErrors: g,
            validationDetails: S
        } = t.displayValidation, {
            labelProps: A,
            inputProps: N,
            descriptionProps: v,
            errorMessageProps: O
        } = (0, K.E)({
            ...e,
            onChange: t.setInputValue,
            onKeyDown: d ? e.onKeyDown : (0, F.tS)(t.isOpen && m.onKeyDown, n => {
                switch (n.key) {
                case 'Enter':
                case 'Tab':
                    if (t.isOpen && 'Enter' === n.key && n.preventDefault(), t.isOpen && null != t.selectionManager.focusedKey && t.selectionManager.isLink(t.selectionManager.focusedKey)) {
                        if ('Enter' === n.key) {
                            let e = l.current.querySelector(`[data-key="${ CSS.escape(t.selectionManager.focusedKey.toString()) }"]`);
                            e instanceof HTMLAnchorElement && I.open(e, n);
                        }
                        t.close();
                    } else
                        t.commit();
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
            }, e.onKeyDown),
            onBlur: n => {
                var r;
                !(n.relatedTarget === (null == a ? void 0 : a.current) || (null === (r = o.current) || void 0 === r ? void 0 : r.contains(n.relatedTarget))) && (e.onBlur && e.onBlur(n), t.setFocused(!1));
            },
            value: t.inputValue,
            onFocus: n => {
                !t.isFocused && (e.onFocus && e.onFocus(n), t.setFocused(!0));
            },
            autoComplete: 'off',
            validate: void 0,
            [Y.tL]: t
        }, s), R = (0, F.bE)({
            id: f.id,
            'aria-label': E.format('buttonLabel'),
            'aria-labelledby': e['aria-labelledby'] || A.id
        }), C = (0, F.bE)({
            id: h.id,
            'aria-label': E.format('listboxLabel'),
            'aria-labelledby': e['aria-labelledby'] || A.id
        }), y = (0, V.useRef)(0), D = null != t.selectionManager.focusedKey && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0, L = null !== (n = null == D ? void 0 : D.parentKey) && void 0 !== n ? n : null, b = null !== (r = t.selectionManager.focusedKey) && void 0 !== r ? r : null, M = (0, V.useRef)(L), P = (0, V.useRef)(b);
    (0, V.useEffect)(() => {
        if ((0, F.ad)() && null != D && b !== P.current) {
            let e = t.selectionManager.isSelected(b), n = null != L ? t.collection.getItem(L) : null, r = (null == n ? void 0 : n['aria-label']) || ('string' == typeof (null == n ? void 0 : n.rendered) ? n.rendered : '') || '', i = E.format('focusAnnouncement', {
                    isGroupChange: n && L !== M.current,
                    groupTitle: r,
                    groupCount: n ? [...(0, H._P)(n, t.collection)].length : 0,
                    optionText: D['aria-label'] || D.textValue || '',
                    isSelected: e
                });
            (0, G.xQ)(i);
        }
        M.current = L, P.current = b;
    });
    let U = (0, H.is)(t.collection), w = (0, V.useRef)(U), x = (0, V.useRef)(t.isOpen);
    (0, V.useEffect)(() => {
        let e = t.isOpen !== x.current && (null == t.selectionManager.focusedKey || (0, F.ad)());
        if (t.isOpen && (e || U !== w.current)) {
            let e = E.format('countAnnouncement', { optionCount: U });
            (0, G.xQ)(e);
        }
        w.current = U, x.current = t.isOpen;
    });
    let q = (0, V.useRef)(t.selectedKey);
    return (0, V.useEffect)(() => {
        if ((0, F.ad)() && t.isFocused && t.selectedItem && t.selectedKey !== q.current) {
            let e = t.selectedItem['aria-label'] || t.selectedItem.textValue || '', n = E.format('selectedAnnouncement', { optionText: e });
            (0, G.xQ)(n);
        }
        q.current = t.selectedKey;
    }), (0, V.useEffect)(() => {
        if (t.isOpen)
            return (0, k.RP)([
                s.current,
                o.current
            ]);
    }, [
        t.isOpen,
        s,
        o
    ]), {
        labelProps: A,
        buttonProps: {
            ...f,
            ...R,
            excludeFromTabOrder: !0,
            onPress: e => {
                'touch' === e.pointerType && (s.current.focus(), t.toggle(null, 'manual'));
            },
            onPressStart: e => {
                'touch' !== e.pointerType && (s.current.focus(), t.toggle('keyboard' === e.pointerType || 'virtual' === e.pointerType ? 'first' : null, 'manual'));
            },
            isDisabled: _ || d
        },
        inputProps: (0, F.dG)(N, {
            role: 'combobox',
            'aria-expanded': f['aria-expanded'],
            'aria-controls': t.isOpen ? h.id : void 0,
            'aria-autocomplete': 'list',
            'aria-activedescendant': D ? (0, B.x3)(t, D.key) : void 0,
            onTouchEnd: e => {
                if (_ || d)
                    return;
                if (e.timeStamp - y.current < 500) {
                    e.preventDefault(), s.current.focus();
                    return;
                }
                let n = e.target.getBoundingClientRect(), r = e.changedTouches[0], i = Math.ceil(n.left + 0.5 * n.width), a = Math.ceil(n.top + 0.5 * n.height);
                r.clientX === i && r.clientY === a && (e.preventDefault(), s.current.focus(), t.toggle(null, 'manual'), y.current = e.timeStamp);
            },
            autoCorrect: 'off',
            spellCheck: 'false'
        }),
        listBoxProps: (0, F.dG)(h, C, {
            autoFocus: t.focusStrategy,
            shouldUseVirtualFocus: !0,
            shouldSelectOnPressUp: !0,
            shouldFocusOnHover: !0,
            linkBehavior: 'selection'
        }),
        descriptionProps: v,
        errorMessageProps: O,
        isInvalid: T,
        validationErrors: g,
        validationDetails: S
    };
}
z = {
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
