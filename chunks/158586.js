t.r(o), t(47120);
var i = t(735250),
    a = t(470079),
    n = t(481060),
    l = t(787014),
    s = t(907040),
    d = t(946458),
    r = t(185923),
    c = t(689938),
    m = t(118317);
o.default = (e) => {
    var o, t, u;
    let { channel: j, onClose: N, transitionState: _ } = e,
        [h, x] = a.useState(null !== (u = j.defaultReactionEmoji) && void 0 !== u ? u : null),
        [v, E] = a.useState(!1),
        [M, b] = a.useState(!1),
        R = (null === (o = j.defaultReactionEmoji) || void 0 === o ? void 0 : o.emojiId) !== (null == h ? void 0 : h.emojiId) || (null === (t = j.defaultReactionEmoji) || void 0 === t ? void 0 : t.emojiName) !== (null == h ? void 0 : h.emojiName),
        L = (e) => {
            x(
                null == e
                    ? null
                    : (null == e ? void 0 : e.id) != null
                      ? {
                            emojiId: e.id,
                            emojiName: void 0
                        }
                      : {
                            emojiId: void 0,
                            emojiName: e.optionallyDiverseSequence
                        }
            );
        },
        p = async () => {
            if (!!R) {
                E(!0), b(!1);
                try {
                    await (0, l.wk)(j.id, { defaultReactionEmoji: h }), N();
                } catch (e) {
                    b(!0);
                } finally {
                    E(!1);
                }
            }
        };
    return (0, i.jsxs)(n.ModalRoot, {
        transitionState: _,
        'aria-label': c.Z.Messages.FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_TITLE,
        children: [
            (0, i.jsx)(n.ModalHeader, {
                separator: !1,
                className: m.modalHeader,
                children: (0, i.jsx)(n.Heading, {
                    variant: 'heading-md/semibold',
                    children: c.Z.Messages.FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_TITLE
                })
            }),
            (0, i.jsxs)(n.ModalContent, {
                children: [
                    (0, i.jsx)(n.Text, {
                        variant: 'text-sm/medium',
                        className: m.subtitle,
                        children: c.Z.Messages.FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_DESCRIPTION
                    }),
                    (0, i.jsx)(d.Z, { reactionEmoji: h }),
                    (0, i.jsxs)('div', {
                        className: m.buttonRow,
                        children: [
                            (0, i.jsx)(n.Popout, {
                                renderPopout: (e) => {
                                    let { closePopout: o } = e;
                                    return (0, i.jsx)(s.Z, {
                                        guildId: null == j ? void 0 : j.guild_id,
                                        closePopout: o,
                                        onSelectEmoji: (e, t) => {
                                            L(e), t && o();
                                        },
                                        pickerIntention: r.Hz.COMMUNITY_CONTENT,
                                        channel: j
                                    });
                                },
                                position: 'right',
                                animation: n.Popout.Animation.NONE,
                                align: 'center',
                                children: (e) =>
                                    (0, i.jsx)(n.Button, {
                                        ...e,
                                        size: n.Button.Sizes.SMALL,
                                        onClick: (o) => {
                                            var t;
                                            null === (t = e.onClick) || void 0 === t || t.call(e, o);
                                        },
                                        children: c.Z.Messages.SELECT_EMOJI
                                    })
                            }),
                            null != j.defaultReactionEmoji
                                ? (0, i.jsx)(n.Button, {
                                      className: m.removeButton,
                                      onClick: () => L(null),
                                      size: n.Button.Sizes.MIN,
                                      look: n.Button.Looks.LINK,
                                      color: n.Button.Colors.RED,
                                      children: c.Z.Messages.REMOVE
                                  })
                                : null
                        ]
                    }),
                    M
                        ? (0, i.jsx)('div', {
                              className: m.__invalid_row,
                              children: (0, i.jsx)(n.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-danger',
                                  children: c.Z.Messages.FORUM_CHANNEL_ONBOARDING_DEFAULT_REACTION_MODAL_ERROR
                              })
                          })
                        : null
                ]
            }),
            (0, i.jsxs)(n.ModalFooter, {
                className: m.__invalid_footer,
                children: [
                    (0, i.jsx)(n.Button, {
                        type: 'submit',
                        color: n.Button.Colors.BRAND,
                        size: n.Button.Sizes.SMALL,
                        className: m.button,
                        onClick: p,
                        disabled: !R,
                        submitting: v,
                        autoFocus: !0,
                        children: c.Z.Messages.SAVE
                    }),
                    (0, i.jsx)(n.Button, {
                        color: n.Button.Colors.PRIMARY,
                        size: n.Button.Sizes.SMALL,
                        className: m.button,
                        onClick: N,
                        children: c.Z.Messages.CANCEL
                    })
                ]
            })
        ]
    });
};
