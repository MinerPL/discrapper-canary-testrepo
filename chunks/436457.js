let s, a;
n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var o = n(735250),
    r = n(470079),
    l = n(120356),
    i = n.n(l),
    c = n(481060),
    d = n(447543),
    u = n(230711),
    _ = n(881052),
    f = n(600164),
    p = n(112831),
    m = n(782605),
    h = n(981631),
    E = n(689938),
    N = n(264123);
let T = ((s = window.GLOBAL_ENV.INVITE_HOST), (a = ''), null == s && ((s = location.host), (a = h.Z5c.INVITE(''))), ''.concat(location.protocol, '//').concat(s).concat(a, '/'));
function x(e) {
    let { onBack: t, onComplete: n, onConnect: s, isSlideReady: a } = e,
        [l, x] = r.useState(''),
        [A, v] = r.useState(!1),
        [b, C] = r.useState(null),
        I = r.useRef(null);
    r.useEffect(() => {
        var e;
        a && (null === (e = I.current) || void 0 === e || e.focus());
    }, [a]);
    let g = r.useCallback(
            (e) => {
                e.preventDefault();
                let t = l.trim();
                if ('' === t) {
                    C(E.Z.Messages.INVALID_INVITE_LINK_ERROR);
                    return;
                }
                C(null), v(!0);
                let s = t.split('/'),
                    a = s[s.length - 1];
                d.Z.resolveInvite(a, 'Join Guild', { inputValue: t }).then(
                    (e) => {
                        let { invite: t } = e;
                        if ((v(!1), null == t)) {
                            C(E.Z.Messages.INSTANT_INVITE_EXPIRED);
                            return;
                        }
                        if (null != t.channel) {
                            let e = d.Z.getInviteContext('Join Guild', t);
                            d.Z.acceptInvite({
                                inviteKey: t.code,
                                context: e,
                                callback: (e) => {
                                    n(), d.Z.transitionToInvite(e);
                                }
                            }).catch((e) => {
                                e instanceof _.yZ || e instanceof _.Hx ? C((0, m.O)(e.code)) : C(E.Z.Messages.INVITE_MODAL_ERROR_DEFAULT);
                            });
                        }
                    },
                    (e) => {
                        v(!1);
                        let t = new _.yZ(e);
                        C((0, m.O)(t.code));
                    }
                );
            },
            [l, v, C, n]
        ),
        M = (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsxs)(c.ModalHeader, {
                    className: N.header,
                    direction: f.Z.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        (0, o.jsx)(p.Z, {
                            className: N.title,
                            size: p.Z.Sizes.SIZE_24,
                            color: p.Z.Colors.HEADER_PRIMARY,
                            children: E.Z.Messages.JOIN_SERVER_TITLE
                        }),
                        (0, o.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: E.Z.Messages.JOIN_SERVER_DESCRIPTION_NUF
                        })
                    ]
                }),
                (0, o.jsxs)(c.ModalContent, {
                    children: [
                        (0, o.jsx)('form', {
                            onSubmit: g,
                            className: N.inputForm,
                            children: (0, o.jsx)(c.FormItem, {
                                title: E.Z.Messages.FORM_LABEL_INVITE_LINK,
                                error: b,
                                titleClassName: i()(N.formTitle, { [N.error]: null != b }),
                                children: (0, o.jsx)(c.TextInput, {
                                    value: l,
                                    onChange: x,
                                    className: N.input,
                                    inputClassName: N.inputInner,
                                    inputRef: I
                                })
                            })
                        }),
                        (0, o.jsx)(c.Text, {
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            children: E.Z.Messages.JOIN_SERVER_EXAMPLES.format({ examples: ''.concat(T).concat('cool-people', ', ').concat('hTKzmak') })
                        }),
                        (0, o.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            className: N.connectCTA,
                            children: E.Z.Messages.JOIN_GUILD_CONNECT.format({
                                onClick: () => {
                                    s(), u.Z.open(h.oAB.CONNECTIONS);
                                }
                            })
                        })
                    ]
                })
            ]
        });
    return {
        content: M,
        footer: (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(c.Button, {
                    color: c.Button.Colors.BRAND,
                    onClick: g,
                    disabled: 0 === l.length,
                    submitting: A,
                    children: E.Z.Messages.JOIN
                }),
                (0, o.jsx)(c.Button, {
                    className: N.__invalid_skipButton,
                    look: c.Button.Looks.BLANK,
                    size: c.Button.Sizes.MIN,
                    onClick: t,
                    children: E.Z.Messages.BACK
                })
            ]
        })
    };
}
