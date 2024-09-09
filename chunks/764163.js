n.d(t, {
    DI: function () {
        return R;
    },
    x3: function () {
        return p;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    i = n(512722),
    r = n.n(i),
    l = n(442837),
    o = n(481060),
    c = n(596454),
    d = n(600164),
    u = n(313201),
    _ = n(318766),
    I = n(907040),
    E = n(339085),
    T = n(633302),
    m = n(984933),
    N = n(691886),
    S = n(185923),
    h = n(689938),
    g = n(268831);
function C(e) {
    let { guildId: t, emojiData: n, 'aria-labelledby': i, onSelectEmoji: r } = e,
        d = (0, l.e7)([E.ZP], () => (null != n.id ? E.ZP.getCustomEmojiById(n.id) : void 0)),
        u = (0, l.e7)([m.ZP], () => m.ZP.getDefaultChannel(t)),
        N = a.useCallback(
            (e) => {
                let { closePopout: t } = e;
                return (0, s.jsx)(I.Z, {
                    pickerIntention: S.Hz.GUILD_ROLE_BENEFIT_EMOJI,
                    channel: u,
                    closePopout: t,
                    onNavigateAway: t,
                    onSelectEmoji: (e, n) => {
                        null != e &&
                            r(
                                null != e.id
                                    ? {
                                          id: e.id,
                                          name: void 0
                                      }
                                    : {
                                          id: void 0,
                                          name: e.optionallyDiverseSequence
                                      }
                            ),
                            n && t();
                    }
                });
            },
            [r, u]
        ),
        C = a.useMemo(
            () =>
                null == d && null == n.name
                    ? null
                    : function () {
                          return (0, s.jsx)(c.Z, {
                              className: g.emoji,
                              emojiId: n.id,
                              emojiName: n.name,
                              animated: null == d ? void 0 : d.animated
                          });
                      },
            [n, d]
        ),
        x = '';
    return (
        null != d ? (x = ':'.concat(d.name, ':')) : null != n.name && (x = T.ZP.convertSurrogateToName(n.name)),
        (0, s.jsx)(o.Popout, {
            animation: o.Popout.Animation.NONE,
            position: 'top',
            renderPopout: N,
            children: (e, t) => {
                let { isShown: n } = t;
                return (0, s.jsxs)('div', {
                    className: g.emojiInputContainer,
                    ...e,
                    children: [
                        (0, s.jsx)(_.Z, {
                            className: g.emojiButton,
                            active: n,
                            tabIndex: 0,
                            renderButtonContents: C
                        }),
                        (0, s.jsx)(o.TextInput, {
                            inputClassName: g.emojiText,
                            placeholder: h.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_EMOJI_PLACEHOLDER,
                            value: x,
                            'aria-labelledby': i,
                            readOnly: !0
                        })
                    ]
                });
            }
        })
    );
}
function x(e) {
    var t;
    let { guildId: n, initialData: i, benefitTypeInput: r, descriptionPlaceholder: l, canSubmit: c, onSave: _, onDelete: I, transitionState: E, onClose: T } = e,
        m = (0, u.Dt)(),
        N = (0, u.Dt)(),
        S = (0, u.Dt)(),
        [x, p] = a.useState(null !== (t = null == i ? void 0 : i.description) && void 0 !== t ? t : ''),
        [R, f] = a.useState(() => ({
            id: null == i ? void 0 : i.emoji_id,
            name: null == i ? void 0 : i.emoji_name
        })),
        L = c && '' !== x && (null != R.id || null != R.name);
    return (0, s.jsx)('form', {
        onSubmit: function (e) {
            e.preventDefault(),
                L &&
                    (_({
                        description: x,
                        emojiId: R.id,
                        emojiName: R.name
                    }),
                    T());
        },
        children: (0, s.jsxs)(o.ModalRoot, {
            transitionState: E,
            'aria-labelledby': m,
            children: [
                (0, s.jsxs)(o.ModalHeader, {
                    children: [
                        (0, s.jsx)(o.Heading, {
                            id: m,
                            variant: 'heading-md/semibold',
                            children: h.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_MODAL_TITLE
                        }),
                        (0, s.jsx)(o.ModalCloseButton, {
                            className: g.closeButton,
                            onClick: T
                        })
                    ]
                }),
                (0, s.jsxs)(o.ModalContent, {
                    className: g.modalContent,
                    children: [
                        r,
                        (0, s.jsx)(o.Spacer, { size: 24 }),
                        (0, s.jsx)(o.FormSection, {
                            title: h.Z.Messages.DESCRIPTION,
                            titleId: N,
                            children: (0, s.jsx)(o.TextArea, {
                                placeholder: l,
                                value: x,
                                rows: 1,
                                autosize: !0,
                                onChange: p,
                                'aria-labelledby': N
                            })
                        }),
                        (0, s.jsx)(o.Spacer, { size: 24 }),
                        (0, s.jsx)(o.FormSection, {
                            title: h.Z.Messages.EMOJI,
                            titleId: S,
                            children: (0, s.jsx)(C, {
                                guildId: n,
                                emojiData: R,
                                onSelectEmoji: f,
                                'aria-labelledby': S
                            })
                        })
                    ]
                }),
                (0, s.jsxs)(o.ModalFooter, {
                    justify: d.Z.Justify.BETWEEN,
                    children: [
                        (0, s.jsxs)('div', {
                            className: g.primaryButtons,
                            children: [
                                (0, s.jsx)(o.Button, {
                                    type: 'submit',
                                    disabled: !L,
                                    children: null == i ? h.Z.Messages.ADD : h.Z.Messages.SAVE
                                }),
                                null != I &&
                                    (0, s.jsx)(o.Button, {
                                        look: o.Button.Looks.BLANK,
                                        size: o.Button.Sizes.ICON,
                                        className: g.deleteButton,
                                        onClick: () => {
                                            I(), T();
                                        },
                                        children: (0, s.jsx)(o.TrashIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            'aria-label': h.Z.Messages.DELETE
                                        })
                                    })
                            ]
                        }),
                        (0, s.jsx)(o.Button, {
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            className: g.cancelButton,
                            onClick: T,
                            children: h.Z.Messages.CANCEL
                        })
                    ]
                })
            ]
        })
    });
}
function p(e) {
    let { guildId: t, omitChannelIds: n, initialData: i, onSave: l, onDelete: c, transitionState: d, onClose: _ } = e,
        [I, E] = a.useState(null == i ? void 0 : i.ref_id),
        T = (0, u.Dt)(),
        m = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(o.HelpMessage, {
                    messageType: o.HelpMessageTypes.WARNING,
                    children: h.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_MODAL_WARNING
                }),
                (0, s.jsx)(o.Spacer, { size: 24 }),
                (0, s.jsx)(o.FormSection, {
                    title: h.Z.Messages.CHANNEL,
                    titleId: T,
                    children: (0, s.jsx)(N.Z, {
                        guildId: t,
                        value: I,
                        initialChannelId: null == i ? void 0 : i.ref_id,
                        omitChannelIds: n,
                        onChange: function (e) {
                            E(e);
                        },
                        'aria-labelledby': T
                    })
                })
            ]
        });
    return (0, s.jsx)(x, {
        guildId: t,
        initialData: i,
        benefitTypeInput: m,
        descriptionPlaceholder: h.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_CHANNEL_DESCRIPTION_PLACEHOLDER,
        canSubmit: null != I,
        onSave: function (e) {
            r()(null != I, 'Cannot submit null channel'),
                l({
                    ...e,
                    channelId: I
                });
        },
        transitionState: d,
        onClose: _,
        onDelete: c
    });
}
function R(e) {
    var t;
    let { initialData: n, onSave: i, transitionState: l, onClose: c, onDelete: d, guildId: _ } = e,
        [I, E] = a.useState(null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : ''),
        T = (0, u.Dt)(),
        m = (0, s.jsx)(o.FormSection, {
            title: h.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_NAME_TITLE,
            titleId: T,
            children: (0, s.jsx)(o.TextArea, {
                placeholder: h.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_NAME_TITLE,
                value: I,
                rows: 1,
                onChange: function (e) {
                    E(e);
                },
                'aria-labelledby': T
            })
        });
    return (0, s.jsx)(x, {
        guildId: _,
        initialData: n,
        benefitTypeInput: m,
        descriptionPlaceholder: h.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_INTANGIBLE_DESCRIPTION_PLACEHOLDER,
        canSubmit: '' !== I,
        onSave: function (e) {
            r()('' !== I, 'Cannot submit empty name'),
                i({
                    ...e,
                    name: I
                });
        },
        transitionState: l,
        onClose: c,
        onDelete: d
    });
}
