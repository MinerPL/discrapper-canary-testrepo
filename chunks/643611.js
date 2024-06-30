t.r(n), t.d(n, {
    default: function () {
        return C;
    }
}), t(47120);
var _ = t(735250), a = t(470079), l = t(442837), s = t(481060), r = t(933557), A = t(592125), O = t(984933), o = t(699516), N = t(594174), i = t(153124), I = t(556012), c = t(689938), u = t(625132);
let E = e => {
    let {
            guildId: n,
            channel: t,
            onSelectChannel: a
        } = e, A = (0, l.Wu)([O.ZP], () => O.ZP.getChannels(n)[O.sH].filter(e => {
            let {channel: n} = e;
            return !n.isGuildVocal() && !n.isThread() && !n.isForumLikeChannel();
        }).map(e => {
            let {channel: n} = e;
            return n;
        }), [n]);
    return (0, _.jsx)(s.FormItem, {
        className: u.channelSelector,
        required: !0,
        children: (0, _.jsx)(s.SearchableSelect, {
            value: null == t ? void 0 : t.id,
            options: A.map(e => ({
                value: e.id,
                label: (0, r.F6)(e, N.default, o.Z, !0)
            })),
            onChange: e => {
                let n = A.find(n => n.id === e);
                a(null != n ? n : void 0);
            },
            placeholder: c.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_PLACEHOLDER
        })
    });
};
function C(e) {
    let {
            action: n,
            triggerType: t,
            guildId: r,
            isEdit: O,
            onEditChannel: o,
            onClose: N,
            transitionState: C
        } = e, S = (0, i.Dt)(), [L, M] = a.useState(n.metadata.channelId), [T, d] = a.useState(null), U = (0, l.e7)([A.Z], () => A.Z.getChannel(L), [L]), D = (0, I.c)(n.type, n, t);
    if (null == D)
        return null;
    let {headerText: j} = D;
    return (0, _.jsxs)(s.ModalRoot, {
        transitionState: C,
        'aria-labelledby': S,
        size: s.ModalSize.SMALL,
        children: [
            (0, _.jsxs)(s.ModalContent, {
                className: u.actionContentContainer,
                children: [
                    (0, _.jsx)(s.Heading, {
                        id: S,
                        color: 'header-primary',
                        variant: 'heading-lg/semibold',
                        className: u.header,
                        children: j
                    }),
                    (0, _.jsx)(s.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: c.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_DESCRIPTION
                    }),
                    (0, _.jsx)(E, {
                        guildId: r,
                        channel: U,
                        onSelectChannel: e => {
                            if (null != e)
                                M(e.id);
                        }
                    }),
                    null != T ? (0, _.jsx)(s.Text, {
                        color: 'text-danger',
                        variant: 'text-sm/normal',
                        children: T
                    }) : (0, _.jsx)(s.Text, {
                        color: 'text-muted',
                        variant: 'text-sm/normal',
                        children: c.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_CHANNEL_HELPER
                    })
                ]
            }),
            (0, _.jsxs)(s.ModalFooter, {
                children: [
                    (0, _.jsx)(s.Button, {
                        onClick: () => {
                            if (null == L) {
                                d(c.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_MODAL_ERROR_NO_CHANNEL);
                                return;
                            }
                            o(L);
                        },
                        color: s.Button.Colors.BRAND,
                        size: s.Button.Sizes.SMALL,
                        children: O ? c.Z.Messages.EDIT : c.Z.Messages.SAVE
                    }),
                    (0, _.jsx)(s.Button, {
                        onClick: () => {
                            N();
                        },
                        color: s.Button.Colors.TRANSPARENT,
                        look: s.Button.Looks.LINK,
                        children: c.Z.Messages.CANCEL
                    })
                ]
            })
        ]
    });
}
