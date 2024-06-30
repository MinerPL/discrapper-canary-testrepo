n.d(s, {
    F: function () {
        return A;
    },
    Z: function () {
        return I;
    }
}), n(47120);
var a = n(735250), E = n(470079), t = n(442837), _ = n(481060), l = n(493683), i = n(881052), d = n(984933), T = n(430824), M = n(285952), L = n(346656), r = n(153124), o = n(689938), C = n(555660);
function A(e) {
    let {
            createdGuildId: s,
            hasFooter: n = !0,
            onClose: A,
            onChannelPromptCompleted: I,
            isSlideReady: c
        } = e, [N, G] = E.useState(''), [u, U] = E.useState(null), [m, O] = E.useState(!1), D = (0, r.Dt)(), p = (0, t.e7)([T.Z], () => T.Z.getGuild(s), [s]), g = E.useRef(null);
    E.useEffect(() => {
        var e;
        c && (null === (e = g.current) || void 0 === e || e.focus());
    }, [c]);
    let R = E.useCallback(async e => {
            if (e.preventDefault(), null == p)
                return;
            O(!0), U(null);
            let s = d.ZP.getDefaultChannel(p.id);
            try {
                let e = o.Z.Messages.NUF_CHANNEL_PROMPT_CHANNEL_TOPIC_TEMPLATE.format({ topic: N });
                await l.Z.createTextChannel(p.id, N, null == s ? void 0 : s.parent_id, e), I();
            } catch (e) {
                U(new i.yZ(e));
            }
            O(!1);
        }, [
            p,
            N,
            I
        ]), Z = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(_.Button, {
                    color: _.Button.Colors.BRAND,
                    onClick: R,
                    disabled: 0 === N.length,
                    submitting: m,
                    children: o.Z.Messages.DONE
                }),
                (0, a.jsx)(_.Button, {
                    className: C.skipButton,
                    look: _.Button.Looks.BLANK,
                    size: _.Button.Sizes.MIN,
                    onClick: I,
                    children: o.Z.Messages.SKIP
                })
            ]
        });
    return {
        content: (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)(_.ModalHeader, {
                    className: C.header,
                    direction: M.Z.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        null != p && (0, a.jsx)(L.Z, { guild: p }),
                        (0, a.jsx)(_.Text, {
                            className: C.guildName,
                            color: 'header-primary',
                            variant: 'text-sm/semibold',
                            children: null == p ? void 0 : p.name
                        }),
                        (0, a.jsx)(_.Heading, {
                            className: C.title,
                            variant: 'heading-sm/semibold',
                            children: o.Z.Messages.NUF_CHANNEL_PROMPT_TITLE
                        }),
                        (0, a.jsx)(_.Text, {
                            className: C.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: o.Z.Messages.NUF_CHANNEL_PROMPT_SUBTITLE
                        }),
                        null != A && (0, a.jsx)(_.ModalCloseButton, {
                            className: C.closeButton,
                            onClick: A
                        })
                    ]
                }),
                (0, a.jsxs)(_.ModalContent, {
                    className: C.channelPrompt,
                    children: [
                        (0, a.jsx)('form', {
                            onSubmit: R,
                            children: (0, a.jsx)(_.FormItem, {
                                title: o.Z.Messages.NUF_CHANNEL_PROMPT_TOPIC,
                                tag: 'label',
                                htmlFor: D,
                                error: null == u ? void 0 : u.getFieldMessage('name'),
                                children: (0, a.jsx)(_.TextInput, {
                                    type: 'text',
                                    value: N,
                                    id: D,
                                    onChange: G,
                                    placeholder: o.Z.Messages.NUF_CHANNEL_PROMPT_TOPIC_PLACEHOLDER,
                                    inputRef: g
                                })
                            })
                        }),
                        null != u && 0 === Object.keys(u.fields).length && (0, a.jsx)(_.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-danger',
                            children: u.message
                        })
                    ]
                }),
                n && (0, a.jsx)(_.ModalFooter, { children: Z })
            ]
        }),
        footer: Z
    };
}
function I(e) {
    let {content: s} = A(e);
    return s;
}
