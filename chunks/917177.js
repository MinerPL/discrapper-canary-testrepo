n.d(t, {
    t: function () {
        return V;
    }
});
var r = n(267948),
    i = n(573500),
    a = n(544637),
    s = n(365739),
    o = n(999450),
    l = n(571513),
    u = n(759480),
    c = n(230432),
    d = n(125289),
    _ = n(471162),
    E = n(874207),
    f = n(822776),
    h = n(186824),
    p = n(923106),
    m = n(512996),
    I = n(937296),
    T = n(718870),
    g = n(692746),
    S = n(945640),
    A = n(775847),
    N = n(121407),
    v = n(746609),
    O = n(799880),
    R = n(557511),
    C = n(399121),
    y = n(381584),
    D = n(628116),
    L = n(572915),
    b = n(85677),
    M = n(117926),
    P = n(556742),
    U = n(328407),
    w = n(411510),
    x = n(257054),
    G = n(182823),
    k = n(616073),
    B = n(640900),
    F = {};
function V(e, t, n) {
    var r;
    let i = (0, k.qb)((r = F) && r.__esModule ? r.default : r, '@react-aria/searchfield'),
        { isDisabled: a, isReadOnly: s, onSubmit: o = () => {}, onClear: l, type: u = 'search' } = e,
        {
            labelProps: c,
            inputProps: d,
            descriptionProps: _,
            errorMessageProps: E,
            ...f
        } = (0, B.E)(
            {
                ...e,
                value: t.value,
                onChange: t.setValue,
                onKeyDown: s
                    ? e.onKeyDown
                    : (0, G.tS)((e) => {
                          let n = e.key;
                          'Enter' === n && e.preventDefault(), !a && !s && ('Enter' === n && o(t.value), 'Escape' === n && ('' === t.value ? e.continuePropagation() : (t.setValue(''), l && l())));
                      }, e.onKeyDown),
                type: u
            },
            n
        );
    return {
        labelProps: c,
        inputProps: {
            ...d,
            defaultValue: void 0
        },
        clearButtonProps: {
            'aria-label': i.format('Clear search'),
            excludeFromTabOrder: !0,
            preventFocusOnPress: !0,
            isDisabled: a || s,
            onPress: () => {
                t.setValue(''), l && l();
            },
            onPressStart: () => {
                var e;
                null === (e = n.current) || void 0 === e || e.focus();
            }
        },
        descriptionProps: _,
        errorMessageProps: E,
        ...f
    };
}
F = {
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
