s.d(t, {
    G: function () {
        return L;
    },
    Z: function () {
        return f;
    }
}), s(47120);
var a = s(735250), n = s(470079), l = s(120356), i = s.n(l), o = s(481060), r = s(749210), c = s(820160), d = s(594174), u = s(285952), m = s(153124), C = s(892880), _ = s(458879), x = s(981631), E = s(689938), I = s(807299);
function L(e) {
    var t;
    let {
            guildTemplate: s,
            onClose: l,
            onBack: L,
            onHubGuildInfoSet: f,
            onGuildCreated: h,
            isSlideReady: T,
            hasFooter: g = !0,
            isCommunity: N = !1
        } = e, [M, B] = n.useState(C.Z.getGuildNameSuggestion()), [p, Z] = n.useState(null), [j, S] = n.useState(!1), [b, U] = n.useState(null), R = !!(null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()), [A, D] = n.useState(R), H = (0, m.Dt)(), O = n.useRef(null);
    n.useEffect(() => {
        var e;
        T && (null === (e = O.current) || void 0 === e || e.focus());
    }, [T]);
    let v = n.useCallback(async e => {
            if (e.preventDefault(), null != s) {
                S(!0), U(null);
                try {
                    if (null != f)
                        f(M, p);
                    else {
                        let e = await _.Z.createGuildFromTemplate(M, p, s, N, A);
                        r.Z.transitionToGuildSync(e.id), null == h || h(e.id);
                    }
                } catch (e) {
                    U(e);
                }
                S(!1);
            }
        }, [
            s,
            f,
            M,
            p,
            N,
            A,
            h
        ]), G = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(o.Button, {
                    color: o.Button.Colors.BRAND,
                    onClick: v,
                    disabled: 0 === M.length,
                    submitting: j,
                    children: null != f ? E.Z.Messages.NEXT : E.Z.Messages.CREATE
                }),
                (0, a.jsx)(o.Button, {
                    className: I.backButton,
                    look: o.Button.Looks.BLANK,
                    size: o.Button.Sizes.MIN,
                    onClick: L,
                    children: E.Z.Messages.BACK
                })
            ]
        });
    return {
        content: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)(o.ModalHeader, {
                    direction: u.Z.Direction.VERTICAL,
                    className: I.header,
                    separator: !1,
                    children: [
                        (0, a.jsx)(o.Heading, {
                            className: i()(I.title),
                            variant: 'heading-xl/semibold',
                            children: E.Z.Messages.NUF_CREATE_SERVER_CUSTOMIZE_HEADER
                        }),
                        (0, a.jsx)(o.Text, {
                            className: I.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: E.Z.Messages.NUF_CREATE_SERVER_CUSTOMIZE_SUBHEADER
                        }),
                        null != l && (0, a.jsx)(o.ModalCloseButton, {
                            className: I.closeButton,
                            onClick: l
                        })
                    ]
                }),
                (0, a.jsxs)(o.ModalContent, {
                    className: I.createGuild,
                    children: [
                        (0, a.jsx)('div', {
                            className: I.uploadIcon,
                            children: (0, a.jsx)(c.Z, {
                                icon: p,
                                onChange: Z
                            })
                        }),
                        (0, a.jsxs)('form', {
                            onSubmit: v,
                            children: [
                                (0, a.jsxs)(o.FormItem, {
                                    className: I.nameInput,
                                    error: null == b ? void 0 : b.getFirstFieldErrorMessage('name'),
                                    children: [
                                        (0, a.jsx)(o.FormTitle, {
                                            tag: 'label',
                                            htmlFor: H,
                                            children: E.Z.Messages.FORM_LABEL_SERVER_NAME
                                        }),
                                        (0, a.jsx)(o.TextInput, {
                                            type: 'text',
                                            value: M,
                                            maxLength: 100,
                                            onChange: B,
                                            inputRef: O,
                                            id: H
                                        })
                                    ]
                                }),
                                R && (0, a.jsx)(o.FormSwitch, {
                                    hideBorder: !0,
                                    value: A,
                                    onChange: e => D(e),
                                    note: E.Z.Messages.GUILD_CREATE_STAFF_ONLY_HINT,
                                    className: I.formItemSpaced,
                                    children: (0, a.jsx)(o.FormTitle, {
                                        tag: 'label',
                                        children: 'Staff Only'
                                    })
                                }),
                                (0, a.jsx)(o.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    className: I.guidelines,
                                    children: E.Z.Messages.CREATE_SERVER_GUIDELINES.format({ guidelinesURL: x.EYA.GUIDELINES })
                                })
                            ]
                        }),
                        null == b || b.hasFieldErrors() ? null : (0, a.jsx)(o.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-danger',
                            children: b.message
                        })
                    ]
                }),
                g && (0, a.jsx)(o.ModalFooter, {
                    justify: u.Z.Justify.BETWEEN,
                    children: G
                })
            ]
        }),
        footer: G
    };
}
function f(e) {
    let {content: t} = L(e);
    return t;
}
