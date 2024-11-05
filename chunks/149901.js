n.d(t, {
    I: function () {
        return Y;
    }
});
var r = n(443704),
    i = n(44730),
    a = n(240257),
    s = n(187700),
    o = n(89223),
    l = n(306063),
    u = n(741546),
    c = n(364762),
    d = n(995031),
    f = n(981752),
    _ = n(805711),
    h = n(588290),
    p = n(414842),
    m = n(565894),
    g = n(819931),
    E = n(324600),
    v = n(112741),
    I = n(421607),
    S = n(595938),
    T = n(154072),
    b = n(999209),
    y = n(374705),
    A = n(868055),
    N = n(443507),
    C = n(7439),
    R = n(466071),
    O = n(703788),
    D = n(710879),
    L = n(713933),
    x = n(445879),
    w = n(114946),
    M = n(434054),
    P = n(40889),
    k = n(686949),
    U = n(661763),
    G = n(192379),
    B = n(969129),
    Z = n(921336),
    F = n(298397),
    V = n(649859),
    j = n(98881),
    H = {};
function Y(e, t, n) {
    var r;
    let i,
        { id: a, decrementAriaLabel: s, incrementAriaLabel: o, isDisabled: l, isReadOnly: u, isRequired: c, minValue: d, maxValue: f, autoFocus: _, label: h, formatOptions: p, onBlur: m = () => {}, onFocus: g, onFocusChange: E, onKeyDown: v, onKeyUp: I, description: S, errorMessage: T, ...b } = e,
        { increment: y, incrementToMax: A, decrement: N, decrementToMin: C, numberValue: R, inputValue: O, commit: D, commitValidation: L } = t;
    let x = (0, V.qb)((r = H) && r.__esModule ? r.default : r, '@react-aria/numberfield'),
        w = (0, U.Me)(a),
        { focusProps: M } = (0, Z.KK)({
            onBlur() {
                D();
            }
        }),
        P = (0, V.Ux)(p),
        k = (0, G.useMemo)(() => P.resolvedOptions(), [P]),
        Y = (0, V.Ux)({
            ...p,
            currencySign: void 0
        }),
        W = (0, G.useMemo)(() => (isNaN(R) ? '' : Y.format(R)), [Y, R]),
        {
            spinButtonProps: K,
            incrementButtonProps: z,
            decrementButtonProps: q
        } = (0, j.G)({
            isDisabled: l,
            isReadOnly: u,
            isRequired: c,
            maxValue: f,
            minValue: d,
            onIncrement: y,
            onIncrementToMax: A,
            onDecrement: N,
            onDecrementToMin: C,
            value: R,
            textValue: W
        }),
        [Q, X] = (0, G.useState)(!1),
        { focusWithinProps: J } = (0, Z.L_)({
            isDisabled: l,
            onFocusWithinChange: X
        }),
        $ = (0, G.useCallback)(
            (e) => {
                !(Math.abs(e.deltaY) <= Math.abs(e.deltaX)) && (e.deltaY > 0 ? y() : e.deltaY < 0 && N());
            },
            [N, y]
        ),
        ee = l || u || !Q;
    (0, Z.y0)(
        {
            onScroll: $,
            isDisabled: ee
        },
        n
    );
    let et = k.maximumFractionDigits > 0,
        en = isNaN(t.minValue) || t.minValue < 0,
        er = 'numeric';
    (0, U.IN)() ? (en ? (er = 'text') : et && (er = 'decimal')) : (0, U.Dt)() && (en ? (er = 'numeric') : et && (er = 'decimal'));
    let ei = (0, U.zL)(e),
        ea = (0, G.useCallback)(
            (e) => {
                'Enter' === e.key ? (D(), L()) : e.continuePropagation();
            },
            [D, L]
        ),
        { isInvalid: es, validationErrors: eo, validationDetails: el } = t.displayValidation,
        {
            labelProps: eu,
            inputProps: ec,
            descriptionProps: ed,
            errorMessageProps: ef
        } = (0, F.h)(
            {
                ...b,
                ...ei,
                name: void 0,
                label: h,
                autoFocus: _,
                isDisabled: l,
                isReadOnly: u,
                isRequired: c,
                validate: void 0,
                [B.tL]: t,
                value: O,
                defaultValue: void 0,
                autoComplete: 'off',
                'aria-label': e['aria-label'] || null,
                'aria-labelledby': e['aria-labelledby'] || null,
                id: w,
                type: 'text',
                inputMode: er,
                onChange: (e) => {
                    t.validate(e) && t.setInputValue(e);
                },
                onBlur: m,
                onFocus: g,
                onFocusChange: E,
                onKeyDown: (0, G.useMemo)(() => (0, U.tS)(ea, v), [ea, v]),
                onKeyUp: I,
                description: S,
                errorMessage: T
            },
            t,
            n
        );
    (0, U.y$)(n, t.numberValue, t.setNumberValue);
    let e_ = (0, U.dG)(K, M, ec, {
        role: null,
        'aria-roledescription': (0, U.gn)() ? null : x.format('numberField'),
        'aria-valuemax': null,
        'aria-valuemin': null,
        'aria-valuenow': null,
        'aria-valuetext': null,
        autoCorrect: 'off',
        spellCheck: 'false'
    });
    'native' === e.validationBehavior && (e_['aria-required'] = void 0);
    let eh = (e) => {
            document.activeElement !== n.current && ('mouse' === e.pointerType ? n.current.focus() : e.target.focus());
        },
        ep = e['aria-label'] || ('string' == typeof e.label ? e.label : '');
    !ep && (i = null != e.label ? eu.id : e['aria-labelledby']);
    let em = (0, U.Me)(),
        eg = (0, U.Me)(),
        eE = (0, U.dG)(z, {
            'aria-label': o || x.format('increase', { fieldLabel: ep }).trim(),
            id: i && !o ? em : null,
            'aria-labelledby': i && !o ? `${em} ${i}` : null,
            'aria-controls': w,
            excludeFromTabOrder: !0,
            preventFocusOnPress: !0,
            allowFocusWhenDisabled: !0,
            isDisabled: !t.canIncrement,
            onPressStart: eh
        }),
        ev = (0, U.dG)(q, {
            'aria-label': s || x.format('decrease', { fieldLabel: ep }).trim(),
            id: i && !s ? eg : null,
            'aria-labelledby': i && !s ? `${eg} ${i}` : null,
            'aria-controls': w,
            excludeFromTabOrder: !0,
            preventFocusOnPress: !0,
            allowFocusWhenDisabled: !0,
            isDisabled: !t.canDecrement,
            onPressStart: eh
        });
    return {
        groupProps: {
            ...J,
            role: 'group',
            'aria-disabled': l,
            'aria-invalid': es ? 'true' : void 0
        },
        labelProps: eu,
        inputProps: e_,
        incrementButtonProps: eE,
        decrementButtonProps: ev,
        errorMessageProps: ef,
        descriptionProps: ed,
        isInvalid: es,
        validationErrors: eo,
        validationDetails: el
    };
}
H = {
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
