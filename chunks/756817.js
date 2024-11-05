n.d(t, {
    t: function () {
        return F;
    }
});
var r = n(992420),
    i = n(579515),
    a = n(53003),
    s = n(938568),
    o = n(609944),
    l = n(280919),
    u = n(770351),
    c = n(312423),
    d = n(793956),
    f = n(379937),
    _ = n(683562),
    h = n(321175),
    p = n(342406),
    m = n(554054),
    g = n(423800),
    E = n(417315),
    v = n(967442),
    I = n(478861),
    S = n(296681),
    T = n(553793),
    b = n(57277),
    y = n(120999),
    A = n(939479),
    N = n(97291),
    C = n(633474),
    R = n(414471),
    O = n(591552),
    D = n(465606),
    L = n(649169),
    x = n(229004),
    w = n(417992),
    M = n(716623),
    P = n(916866),
    k = n(456057),
    U = n(661763),
    G = n(649859),
    B = n(298397),
    Z = {};
function F(e, t, n) {
    var r;
    let i = (0, G.qb)((r = Z) && r.__esModule ? r.default : r, '@react-aria/searchfield'),
        { isDisabled: a, isReadOnly: s, onSubmit: o = () => {}, onClear: l, type: u = 'search' } = e,
        {
            labelProps: c,
            inputProps: d,
            descriptionProps: f,
            errorMessageProps: _,
            ...h
        } = (0, B.E)(
            {
                ...e,
                value: t.value,
                onChange: t.setValue,
                onKeyDown: s
                    ? e.onKeyDown
                    : (0, U.tS)((e) => {
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
        descriptionProps: f,
        errorMessageProps: _,
        ...h
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
