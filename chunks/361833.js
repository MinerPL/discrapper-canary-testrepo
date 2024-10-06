t.d(s, {
    Z: function () {
        return c;
    }
}),
    t(47120);
var n = t(735250),
    o = t(470079),
    a = t(442837),
    l = t(481060),
    r = t(809206),
    i = t(25990),
    E = t(155433),
    _ = t(689938),
    N = t(859565);
function c(e) {
    var s, t;
    let { emailToken: c, isSlideReady: d, onClose: u, onBack: A, onNext: C } = e,
        [M, S] = o.useState(''),
        [m, I] = o.useState(''),
        [x, T] = o.useState(!1),
        R = (0, a.e7)([i.Z], () => i.Z.getErrors()),
        O = o.useRef(null);
    async function h(e) {
        e.preventDefault(), T(!0);
        let s = await (0, r.Mn)({
            email: M,
            emailToken: c,
            password: m
        });
        if ((T(!1), null == s ? void 0 : s.ok)) C(M);
        else {
            var t, n;
            (null == s ? void 0 : null === (t = s.body) || void 0 === t ? void 0 : t.username) != null ? (0, E.P)() : (null == s ? void 0 : null === (n = s.body) || void 0 === n ? void 0 : n.email_token) != null && (null == A || A());
        }
    }
    return (
        o.useEffect(() => {
            if (d) {
                var e;
                null === (e = O.current) || void 0 === e || e.focus();
            }
        }, [d]),
        (0, n.jsxs)('form', {
            onSubmit: h,
            children: [
                (0, n.jsxs)(l.ModalHeader, {
                    separator: !1,
                    className: N.header,
                    children: [
                        (0, n.jsx)(l.Heading, {
                            className: N.title,
                            variant: 'heading-xl/extrabold',
                            children: _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_TITLE_DESKTOP
                        }),
                        (0, n.jsx)(l.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: N.subtitle,
                            children: _.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_PROMPT_DESKTOP
                        }),
                        (0, n.jsx)(l.ModalCloseButton, {
                            onClick: u,
                            className: N.modalCloseButton
                        })
                    ]
                }),
                (0, n.jsxs)(l.ModalContent, {
                    className: N.content,
                    children: [
                        (0, n.jsx)(l.FormItem, {
                            title: _.Z.Messages.EMAIL,
                            error: null == R ? void 0 : null === (s = R.email) || void 0 === s ? void 0 : s[0],
                            children: (0, n.jsx)(l.TextInput, {
                                type: 'email',
                                value: M,
                                onChange: S,
                                inputRef: O
                            })
                        }),
                        (0, n.jsx)(l.FormItem, {
                            className: N.password,
                            title: _.Z.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
                            error: null == R ? void 0 : null === (t = R.password) || void 0 === t ? void 0 : t[0],
                            children: (0, n.jsx)(l.TextInput, {
                                type: 'password',
                                value: m,
                                onChange: I
                            })
                        })
                    ]
                }),
                (0, n.jsxs)(l.ModalFooter, {
                    children: [
                        (0, n.jsx)(l.Button, {
                            type: 'submit',
                            color: l.Button.Colors.BRAND,
                            size: l.Button.Sizes.MEDIUM,
                            submitting: x,
                            children: _.Z.Messages.DONE
                        }),
                        null != A
                            ? (0, n.jsx)(l.Button, {
                                  className: N.__invalid_cancel,
                                  look: l.Button.Looks.LINK,
                                  color: l.Button.Colors.PRIMARY,
                                  onClick: A,
                                  children: _.Z.Messages.BACK
                              })
                            : (0, n.jsx)(l.Button, {
                                  className: N.__invalid_cancel,
                                  look: l.Button.Looks.LINK,
                                  color: l.Button.Colors.PRIMARY,
                                  onClick: u,
                                  children: _.Z.Messages.CANCEL
                              })
                    ]
                })
            ]
        })
    );
}
