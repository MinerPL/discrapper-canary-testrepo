t.d(s, {
    Z: function () {
        return _;
    }
}), t(47120);
var n = t(735250), a = t(470079), o = t(442837), l = t(481060), r = t(809206), i = t(25990), d = t(155433), c = t(689938), u = t(579500);
function _(e) {
    var s, t;
    let {
            emailToken: _,
            isSlideReady: E,
            onClose: N,
            onBack: C,
            onNext: A
        } = e, [m, S] = a.useState(''), [T, M] = a.useState(''), [x, I] = a.useState(!1), R = (0, o.e7)([i.Z], () => i.Z.getErrors()), h = a.useRef(null);
    async function v(e) {
        e.preventDefault(), I(!0);
        let s = await (0, r.Mn)({
            email: m,
            emailToken: _,
            password: T
        });
        if (I(!1), null == s ? void 0 : s.ok)
            A(m);
        else {
            var t, n;
            (null == s ? void 0 : null === (t = s.body) || void 0 === t ? void 0 : t.username) != null ? (0, d.P)() : (null == s ? void 0 : null === (n = s.body) || void 0 === n ? void 0 : n.email_token) != null && (null == C || C());
        }
    }
    return a.useEffect(() => {
        if (E) {
            var e;
            null === (e = h.current) || void 0 === e || e.focus();
        }
    }, [E]), (0, n.jsxs)('form', {
        onSubmit: v,
        children: [
            (0, n.jsxs)(l.ModalHeader, {
                separator: !1,
                className: u.header,
                children: [
                    (0, n.jsx)(l.Heading, {
                        className: u.title,
                        variant: 'heading-xl/extrabold',
                        children: c.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_TITLE_DESKTOP
                    }),
                    (0, n.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: u.subtitle,
                        children: c.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_PROMPT_DESKTOP
                    }),
                    (0, n.jsx)(l.ModalCloseButton, {
                        onClick: N,
                        className: u.modalCloseButton
                    })
                ]
            }),
            (0, n.jsxs)(l.ModalContent, {
                className: u.content,
                children: [
                    (0, n.jsx)(l.FormItem, {
                        title: c.Z.Messages.EMAIL,
                        error: null == R ? void 0 : null === (s = R.email) || void 0 === s ? void 0 : s[0],
                        children: (0, n.jsx)(l.TextInput, {
                            type: 'email',
                            value: m,
                            onChange: S,
                            inputRef: h
                        })
                    }),
                    (0, n.jsx)(l.FormItem, {
                        className: u.password,
                        title: c.Z.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
                        error: null == R ? void 0 : null === (t = R.password) || void 0 === t ? void 0 : t[0],
                        children: (0, n.jsx)(l.TextInput, {
                            type: 'password',
                            value: T,
                            onChange: M
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
                        children: c.Z.Messages.DONE
                    }),
                    null != C ? (0, n.jsx)(l.Button, {
                        className: u.__invalid_cancel,
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.PRIMARY,
                        onClick: C,
                        children: c.Z.Messages.BACK
                    }) : (0, n.jsx)(l.Button, {
                        className: u.__invalid_cancel,
                        look: l.Button.Looks.LINK,
                        color: l.Button.Colors.PRIMARY,
                        onClick: N,
                        children: c.Z.Messages.CANCEL
                    })
                ]
            })
        ]
    });
}
