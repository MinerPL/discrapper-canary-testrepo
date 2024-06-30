n.d(t, {
    Z: function () {
        return f;
    }
}), n(47120);
var s = n(735250), u = n(470079), c = n(374470), a = n(442837), l = n(481060), i = n(295866), r = n(398327), o = n(63063), d = n(601993), E = n(981631), M = n(689938);
function f(e) {
    let {
            text: t = '',
            target: n
        } = e, f = (0, a.e7)([r.Z], () => r.Z.isEnabled()), p = (0, a.e7)([r.Z], () => r.Z.hasLearnedWord(t), [t]), C = u.useRef({
            ...e,
            spellcheckEnabled: f
        });
    C.current = {
        ...e,
        spellcheckEnabled: f
    };
    let T = u.useRef(!1), [Z, h] = u.useState(!1), [m, L] = u.useState([]), b = u.useCallback(() => {
            let {
                spellcheckEnabled: e,
                text: t,
                onHeightUpdate: n
            } = C.current;
            e && (0, d.Gb)() && Promise.all([
                (0, d.f5)(t, !0),
                (0, d.WA)(t, !0)
            ]).then(e => {
                let [t, s] = e;
                T.current && (h(t), L(s), n());
            });
        }, []), k = u.useCallback(() => {
            if ((0, c.k)(n, HTMLInputElement) || (0, c.k)(n, HTMLTextAreaElement)) {
                let {
                    selectionStart: e,
                    selectionEnd: t,
                    value: s
                } = n;
                n.value = '', n.value = s, 'email' !== n.type && (n.selectionStart = e, n.selectionEnd = t);
            }
        }, [n]);
    if (u.useEffect(() => {
            let e = (0, d.RD)(b);
            return T.current = !0, () => {
                T.current = !1, e();
            };
        }, [b]), u.useEffect(() => {
            b();
        }, [
            t,
            f,
            b
        ]), !(0, d.Gb)())
        return [
            null,
            null
        ];
    let x = m.map((e, t) => (0, s.jsx)(l.MenuItem, {
        id: 'correction-'.concat(t),
        label: e,
        action: () => {
            (0, d.Rs)(e), n.focus();
        }
    }, 'correction-'.concat(t)));
    return [
        x,
        (0, s.jsxs)(s.Fragment, {
            children: [
                Z ? (0, s.jsx)(l.MenuItem, {
                    id: 'add-to-dictionary',
                    label: M.Z.Messages.ADD_TO_DICTIONARY,
                    action: () => {
                        (0, i.D0)(t), k();
                    }
                }) : null,
                p && (0, s.jsx)(l.MenuItem, {
                    id: 'remove-from-dictionary',
                    label: M.Z.Messages.REMOVE_FROM_DICTIONARY,
                    action: () => {
                        (0, i.lE)(t), k();
                    }
                }),
                (0, s.jsx)(l.MenuCheckboxItem, {
                    id: 'spellcheck',
                    label: M.Z.Messages.SPELLCHECK,
                    checked: f,
                    action: () => {
                        (0, i.kY)(), k();
                    }
                }),
                f ? (0, s.jsx)(l.MenuItem, {
                    id: 'languages',
                    label: M.Z.Messages.LANGUAGES,
                    action: () => window.open(o.Z.getArticleURL(E.BhN.SPELLCHECK))
                }) : null
            ]
        })
    ];
}
