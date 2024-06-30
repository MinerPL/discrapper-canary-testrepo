n.d(t, {
    Z: function () {
        return f;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(512722), o = n.n(l), c = n(481060), d = n(194359), u = n(153124), _ = n(657682), E = n(981631), h = n(420212), I = n(689938), m = n(804025), p = n(331651);
let g = {
        canSend: !1,
        hint: null,
        success: null,
        error: null
    }, T = (0, u.hQ)(), S = ''.concat(T, '-decription'), C = ''.concat(T, '-error');
function N(e, t) {
    switch (t.type) {
    case 'RESET':
        return g;
    case 'SUCCESS':
        return {
            ...g,
            success: t.text
        };
    case 'HINT':
        return {
            ...g,
            canSend: !0,
            hint: t.text
        };
    case 'ERROR':
        return {
            ...e,
            canSend: !0,
            error: t.text
        };
    }
}
function f() {
    let e = s.createRef(), t = s.createRef(), [n, a] = s.useReducer(N, g), {
            canSend: l,
            hint: u,
            success: f,
            error: A
        } = n;
    return s.useEffect(() => {
        null != f && (o()(null != e.current, 'Input is submitting when not mounted'), e.current.value = '', e.current.focus());
    }, [
        f,
        e
    ]), (0, i.jsxs)('form', {
        onSubmit: t => {
            t.preventDefault(), o()(null != e.current, 'Input is submitted when not mounted');
            let n = e.current.value.trim();
            !n.includes('#') && n.startsWith('@') && (n = n.substring(1));
            let i = (0, _.Zy)(n);
            if (null != i) {
                a({
                    type: 'ERROR',
                    text: i
                });
                return;
            }
            d.Z.sendRequest({
                discordTag: n,
                context: { location: 'Add Friend' }
            }).then(() => a({
                type: 'SUCCESS',
                text: I.Z.Messages.ADD_FRIEND_SUCCESS.format({ discordTag: n })
            }), e => {
                var t;
                return a({
                    type: 'ERROR',
                    text: (0, _.NF)(null === (t = e.body) || void 0 === t ? void 0 : t.code, n)
                });
            });
        },
        autoComplete: 'off',
        children: [
            (0, i.jsx)(c.FormText, {
                id: S,
                type: c.FormText.Types.DESCRIPTION,
                children: I.Z.Messages.POMELO_ADD_FRIEND_DESCRIPTION
            }),
            (0, i.jsx)(c.FocusRing, {
                focusTarget: e,
                ringTarget: t,
                ringClassName: m.ring,
                children: (0, i.jsxs)('div', {
                    ref: t,
                    className: r()(m.addFriendInputWrapper, {
                        [m.success]: f,
                        [m.error]: A
                    }),
                    children: [
                        (0, i.jsx)(c.TextInput, {
                            id: T,
                            inputRef: e,
                            className: m.addFriendInput,
                            inputClassName: m.input,
                            onKeyPress: t => {
                                let n = t.currentTarget.value;
                                if (t.key !== h.mR.Enter) {
                                    if (n.includes('#')) {
                                        o()(null != e.current, 'Input is handling keypress when not mounted');
                                        let i = n.indexOf('#'), s = e.current.selectionStart, a = t.key === h.mR.Backspace || t.key === h.mR.ArrowRight || t.key === h.mR.ArrowLeft, r = t.which >= 48 && t.which <= 57;
                                        null != s && s > i && /^(.+?#\d{4})$/.test(n) && !a ? t.preventDefault() : null != s && s > i && !r && !a && t.preventDefault();
                                    }
                                }
                            },
                            onChange: e => {
                                if (e.length <= 0) {
                                    a({ type: 'RESET' });
                                    return;
                                }
                                let t = '', [, n] = e.split('#');
                                null != n && (t = e + E.LYt.slice(null != n ? n.length + 1 : 0)), a({
                                    type: 'HINT',
                                    text: t
                                });
                            },
                            maxLength: 37,
                            autoFocus: !0,
                            autoComplete: 'off',
                            name: 'add-friend',
                            'data-lpignore': !0,
                            placeholder: I.Z.Messages.POMELO_ADD_FRIEND_DESCRIPTION,
                            'aria-label': I.Z.Messages.POMELO_ADD_FRIEND_DESCRIPTION,
                            'aria-invalid': null != A || void 0,
                            'aria-describedby': null != A ? C : S
                        }),
                        null != u && (0, i.jsx)('div', {
                            className: m.addFriendHint,
                            'aria-hidden': !0,
                            children: u
                        }),
                        (0, i.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            disabled: !l,
                            type: 'submit',
                            children: I.Z.Messages.ADD_FRIEND_BUTTON
                        })
                    ]
                })
            }),
            null != A && (0, i.jsx)(c.FormText, {
                role: 'alert',
                id: C,
                type: c.FormText.Types.ERROR,
                className: p.marginTop8,
                children: A
            }),
            null != f && (0, i.jsx)(c.FormText, {
                role: 'status',
                type: c.FormText.Types.SUCCESS,
                className: p.marginTop8,
                children: f
            })
        ]
    });
}
