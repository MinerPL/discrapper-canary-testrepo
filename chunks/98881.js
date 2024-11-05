n.d(t, {
    G: function () {
        return V;
    }
});
var r = n(288377),
    i = n(138073),
    a = n(665898),
    s = n(936031),
    o = n(698649),
    l = n(614529),
    u = n(836098),
    c = n(454516),
    d = n(394711),
    f = n(177679),
    _ = n(612617),
    h = n(186207),
    p = n(142197),
    m = n(55231),
    g = n(265839),
    E = n(175486),
    v = n(629053),
    I = n(890521),
    S = n(891873),
    T = n(695848),
    b = n(261978),
    y = n(917322),
    A = n(108901),
    N = n(254105),
    C = n(818727),
    R = n(437223),
    O = n(516544),
    D = n(193014),
    L = n(30728),
    x = n(384762),
    w = n(290731),
    M = n(341348),
    P = n(882645),
    k = n(788654),
    U = n(770003),
    G = n(192379),
    B = n(661763),
    Z = n(649859),
    F = {};
function V(e) {
    var t;
    let n = (0, G.useRef)(),
        { value: r, textValue: i, minValue: a, maxValue: s, isDisabled: o, isReadOnly: l, isRequired: u, onIncrement: c, onIncrementPage: d, onDecrement: f, onDecrementPage: _, onDecrementToMin: h, onIncrementToMax: p } = e;
    let m = (0, Z.qb)((t = F) && t.__esModule ? t.default : t, '@react-aria/spinbutton'),
        g = () => clearTimeout(n.current);
    (0, G.useEffect)(() => () => g(), []);
    let E = (0, G.useRef)(!1),
        v = () => {
            E.current = !0;
        },
        I = () => {
            E.current = !1;
        };
    (i = '' === i ? m.format('Empty') : (i || `${r}`).replace('-', '\u2212')),
        (0, G.useEffect)(() => {
            E.current && ((0, U.gb)('assertive'), (0, U.xQ)(i, 'assertive'));
        }, [i]);
    let S = (0, B.iW)((e) => {
            g(),
                c(),
                (n.current = window.setTimeout(() => {
                    (isNaN(s) || isNaN(r) || r < s) && S(60);
                }, e));
        }),
        T = (0, B.iW)((e) => {
            g(),
                f(),
                (n.current = window.setTimeout(() => {
                    (isNaN(a) || isNaN(r) || r > a) && T(60);
                }, e));
        }),
        b = (e) => {
            e.preventDefault();
        },
        { addGlobalListener: y, removeAllGlobalListeners: A } = (0, B.xi)();
    return {
        spinButtonProps: {
            role: 'spinbutton',
            'aria-valuenow': isNaN(r) ? null : r,
            'aria-valuetext': i,
            'aria-valuemin': a,
            'aria-valuemax': s,
            'aria-disabled': o || null,
            'aria-readonly': l || null,
            'aria-required': u || null,
            onKeyDown: (e) => {
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
                            if (_) {
                                e.preventDefault(), _();
                                break;
                            }
                        case 'ArrowDown':
                        case 'Down':
                            f && (e.preventDefault(), f());
                            break;
                        case 'Home':
                            h && (e.preventDefault(), h());
                            break;
                        case 'End':
                            p && (e.preventDefault(), p());
                    }
            },
            onFocus: v,
            onBlur: I
        },
        incrementButtonProps: {
            onPressStart: () => {
                S(400), y(window, 'contextmenu', b);
            },
            onPressEnd: () => {
                g(), A();
            },
            onFocus: v,
            onBlur: I
        },
        decrementButtonProps: {
            onPressStart: () => {
                T(400), y(window, 'contextmenu', b);
            },
            onPressEnd: () => {
                g(), A();
            },
            onFocus: v,
            onBlur: I
        }
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
