let o, l;
n.d(t, {
    Z: function () {
        return O;
    }
}), n(47120);
var a = n(735250), r = n(470079), s = n(120356), i = n.n(s), c = n(481060), u = n(447543), _ = n(881052), d = n(703656), I = n(285952), E = n(153124), N = n(782605), m = n(981631), p = n(689938), T = n(615882), f = n(216019), S = n(286359);
let C = 'hTKzmak', L = (0, E.hQ)();
let A = (o = window.GLOBAL_ENV.INVITE_HOST, l = '', null == o && (o = location.host, l = m.Z5c.INVITE('')), ''.concat(location.protocol, '//').concat(o).concat(l, '/')), D = [
        C,
        ''.concat(A).concat(C),
        ''.concat(A).concat('cool-people')
    ], M = e => {
        let {onClick: t} = e;
        return (0, a.jsxs)(c.Clickable, {
            className: T.rowContainer,
            onClick: () => {
                t(), (0, d.uL)(m.Z5c.GUILD_DISCOVERY);
            },
            children: [
                (0, a.jsx)('img', {
                    width: 40,
                    height: 40,
                    className: T.rowIcon,
                    alt: '',
                    src: S
                }),
                (0, a.jsxs)('div', {
                    children: [
                        (0, a.jsx)(c.Heading, {
                            className: T.rowText,
                            variant: 'heading-md/semibold',
                            children: p.Z.Messages.DISCOVERY_UPSELL_HEADER
                        }),
                        (0, a.jsx)(c.Text, {
                            className: T.rowText,
                            variant: 'text-xs/normal',
                            children: p.Z.Messages.DISCOVERY_UPSELL_DESCRIPTION
                        })
                    ]
                }),
                (0, a.jsx)('img', {
                    className: T.rowArrow,
                    alt: '',
                    src: f
                })
            ]
        });
    };
function O(e) {
    let {
            onBack: t,
            onClose: n,
            isSlideReady: o
        } = e, [l, s] = r.useState(''), [d, E] = r.useState(!1), [m, f] = r.useState(null), S = r.useRef(null);
    r.useEffect(() => {
        var e;
        o && (null === (e = S.current) || void 0 === e || e.focus());
    }, [o]);
    let O = e => {
        e.preventDefault();
        let t = l.trim();
        if ('' === t) {
            f(p.Z.Messages.INVALID_INVITE_LINK_ERROR);
            return;
        }
        f(null), E(!0);
        let o = t.split('/'), a = o[o.length - 1];
        u.Z.resolveInvite(a, 'Join Guild', { inputValue: t }).then(e => {
            let {invite: t} = e;
            if (E(!1), null == t) {
                f(p.Z.Messages.INSTANT_INVITE_EXPIRED);
                return;
            }
            if (null != t.channel) {
                let e = u.Z.getInviteContext('Join Guild', t);
                u.Z.acceptInvite({
                    inviteKey: t.code,
                    context: e,
                    callback: e => {
                        n(), u.Z.transitionToInvite(e);
                    }
                }).then(() => {
                }, e => {
                    e instanceof _.yZ || e instanceof _.Hx ? f((0, N.O)(e.code)) : f(p.Z.Messages.INVITE_MODAL_ERROR_DEFAULT);
                });
            }
        }, e => {
            E(!1);
            let t = new _.yZ(e);
            f((0, N.O)(t.code));
        });
    };
    return (0, a.jsxs)('div', {
        children: [
            (0, a.jsxs)(c.ModalHeader, {
                className: T.header,
                direction: I.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, a.jsx)(c.Heading, {
                        className: T.title,
                        variant: 'heading-xl/semibold',
                        children: p.Z.Messages.JOIN_SERVER_TITLE
                    }),
                    (0, a.jsx)(c.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: p.Z.Messages.JOIN_SERVER_DESCRIPTION_NUF
                    }),
                    (0, a.jsx)(c.ModalCloseButton, {
                        className: T.closeButton,
                        onClick: n
                    })
                ]
            }),
            (0, a.jsxs)(c.ModalContent, {
                className: T.__invalid_content,
                children: [
                    (0, a.jsx)('form', {
                        onSubmit: O,
                        className: T.inputForm,
                        children: (0, a.jsxs)(c.FormItem, {
                            children: [
                                (0, a.jsx)(c.FormTitle, {
                                    id: L,
                                    error: m,
                                    className: i()(T.formTitle, { [T.error]: null != m }),
                                    required: !0,
                                    children: p.Z.Messages.FORM_LABEL_INVITE_LINK
                                }),
                                (0, a.jsx)(c.TextInput, {
                                    value: l,
                                    onChange: s,
                                    className: T.input,
                                    inputClassName: T.inputInner,
                                    placeholder: ''.concat(A).concat(C),
                                    inputRef: S,
                                    required: !0,
                                    'aria-labelledby': L
                                })
                            ]
                        })
                    }),
                    (0, a.jsx)(c.FormItem, {
                        title: p.Z.Messages.JOIN_SERVER_INVITE_EXAMPLES_HEADER,
                        titleClassName: T.formTitle,
                        className: T.examplesForm,
                        children: D.map(e => (0, a.jsx)(c.Clickable, {
                            className: T.sampleLink,
                            onClick: () => s(e),
                            children: e
                        }, e))
                    }),
                    (0, a.jsx)(M, { onClick: n })
                ]
            }),
            (0, a.jsxs)(c.ModalFooter, {
                className: T.footer,
                children: [
                    (0, a.jsx)(c.Button, {
                        color: c.Button.Colors.BRAND,
                        submitting: d,
                        onClick: O,
                        children: p.Z.Messages.NUF_JOIN_SERVER_BUTTON
                    }),
                    (0, a.jsx)(c.Button, {
                        color: c.Button.Colors.PRIMARY,
                        look: c.Button.Looks.LINK,
                        size: c.Button.Sizes.MIN,
                        onClick: t,
                        children: p.Z.Messages.BACK
                    })
                ]
            })
        ]
    });
}
