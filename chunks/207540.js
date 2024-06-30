n.r(t), n(47120);
var l = n(735250), r = n(470079), i = n(442837), s = n(481060), u = n(933557), a = n(156699), d = n(734893), E = n(693196), o = n(66999), c = n(575830), N = n(554747), _ = n(434404), T = n(144140), f = n(314897), Z = n(430824), g = n(496675), C = n(981631), D = n(689938), I = n(141731);
t.default = e => {
    let {
            channel: t,
            onClose: n,
            onConfirm: h,
            transitionState: L
        } = e, O = (0, u.ZP)(t, !0), M = t.id, m = t.isForumPost(), v = (0, i.e7)([Z.Z], () => Z.Z.getGuild(t.getGuildId())), A = (0, N.u1)(M), {isSubscriptionGated: S} = (0, o.Z)(t.id), x = (0, c.Z)(v, t), [P, G] = r.useState(), U = (0, i.e7)([f.default], () => t.isOwner(f.default.getId()), [t]), p = (0, i.e7)([g.Z], () => g.Z.can(t.isThread() ? C.Plq.MANAGE_THREADS : C.Plq.MANAGE_CHANNELS, t), [t]), H = (0, i.e7)([T.Z], () => {
            var e;
            return null !== (e = T.Z.getCount(t.id)) && void 0 !== e ? e : 0;
        }, [t.id]), R = m && (p || U && H < 1), B = A.length > 0 && (t.type === C.d4z.GUILD_VOICE || t.type === C.d4z.GUILD_STAGE_VOICE);
    if (r.useEffect(() => {
            (async () => {
                if (!await (0, a.C)(t.getGuildId(), M)) {
                    G(d.j.DEFAULT);
                    return;
                }
                let e = await (0, E.T)(t.getGuildId(), M);
                if (null != e) {
                    G(e);
                    return;
                }
            })();
        }, [
            t,
            M
        ]), null != P) {
        let e;
        let t = D.Z.Messages.DELETE_DEFAULT_CHANNEL_BODY;
        return e = P === d.j.TODO ? D.Z.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_TODO : P === d.j.RESOURCE ? D.Z.Messages.DESIGNATE_OTHER_CHANNEL_GUIDE_RESOURCE : D.Z.Messages.DESIGNATE_OTHER_CHANNEL_ONBOARDING, (0, l.jsxs)(s.ModalRoot, {
            transitionState: L,
            'aria-label': D.Z.Messages.CANNOT_DELETE_CHANNEL,
            children: [
                (0, l.jsx)(s.ModalHeader, {
                    separator: !1,
                    children: (0, l.jsx)(s.Heading, {
                        variant: 'heading-lg/semibold',
                        children: D.Z.Messages.CANNOT_DELETE_CHANNEL
                    })
                }),
                (0, l.jsxs)(s.ModalContent, {
                    className: I.modalContent,
                    children: [
                        (0, l.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            children: t
                        }),
                        (0, l.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            children: e.format({
                                onClick: () => {
                                    null != v && (_.Z.open(v.id, C.pNK.ONBOARDING), null == n || n());
                                }
                            })
                        })
                    ]
                }),
                (0, l.jsx)(s.ModalFooter, {
                    children: (0, l.jsx)(s.Button, {
                        onClick: n,
                        children: D.Z.Messages.OKAY
                    })
                })
            ]
        });
    }
    if (null == v)
        return null;
    if (v.hasFeature(C.oNc.COMMUNITY) && (v.rulesChannelId === M || v.publicUpdatesChannelId === M)) {
        let e = v.rulesChannelId === M, t = e ? D.Z.Messages.DELETE_RULES_CHANNEL_BODY : D.Z.Messages.DELETE_UPDATES_CHANNEL_BODY;
        return (0, l.jsxs)(s.ModalRoot, {
            transitionState: L,
            'aria-label': D.Z.Messages.CANNOT_DELETE_CHANNEL,
            children: [
                (0, l.jsx)(s.ModalHeader, {
                    separator: !1,
                    children: (0, l.jsx)(s.Heading, {
                        variant: 'heading-lg/semibold',
                        children: D.Z.Messages.CANNOT_DELETE_CHANNEL
                    })
                }),
                (0, l.jsxs)(s.ModalContent, {
                    children: [
                        (0, l.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            className: I.__invalid_modalText,
                            children: t
                        }),
                        (0, l.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            className: I.__invalid_modalText,
                            children: D.Z.Messages.DESIGNATE_OTHER_CHANNEL.format({
                                onClick: () => {
                                    _.Z.open(v.id, C.pNK.COMMUNITY), null == n || n();
                                }
                            })
                        })
                    ]
                }),
                (0, l.jsx)(s.ModalFooter, {
                    children: (0, l.jsx)(s.Button, {
                        onClick: n,
                        children: D.Z.Messages.OKAY
                    })
                })
            ]
        });
    }
    {
        let {
            deleteText: e,
            deleteBody: r
        } = (() => {
            if (t.type === C.d4z.GUILD_CATEGORY)
                return {
                    deleteText: D.Z.Messages.DELETE_CATEGORY,
                    deleteBody: D.Z.Messages.DELETE_CHANNEL_BODY.format({ channelName: O })
                };
            if (t.isForumPost())
                return {
                    deleteText: R ? D.Z.Messages.DELETE_FORUM_POST : D.Z.Messages.DELETE_MESSAGE,
                    deleteBody: R && U && !p ? D.Z.Messages.DELETE_FORUM_POST_OP_CONFIRM_BODY.format({ postName: O }) : R ? D.Z.Messages.DELETE_FORUM_POST_CONFIRM_BODY.format({ postName: O }) : D.Z.Messages.DELETE_FORUM_POST_OP_WITH_REPLIES_CONFIRM_BODY
                };
            if (t.isThread())
                return {
                    deleteText: D.Z.Messages.DELETE_THREAD,
                    deleteBody: D.Z.Messages.DELETE_CHANNEL_BODY.format({ channelName: O })
                };
            else if (S && x > 0)
                return {
                    deleteText: D.Z.Messages.DELETE_CHANNEL,
                    deleteBody: D.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_DELETE_CHANNEL_BODY.format({
                        channelName: O,
                        numGuildRoleSubscriptionMembers: x
                    })
                };
            return {
                deleteText: D.Z.Messages.DELETE_CHANNEL,
                deleteBody: D.Z.Messages.DELETE_CHANNEL_BODY.format({ channelName: O })
            };
        })();
        return (0, l.jsxs)(s.ModalRoot, {
            transitionState: L,
            'aria-label': e,
            children: [
                (0, l.jsx)(s.ModalHeader, {
                    separator: !1,
                    children: (0, l.jsx)(s.Heading, {
                        variant: 'heading-lg/semibold',
                        children: e
                    })
                }),
                (0, l.jsxs)(s.ModalContent, {
                    className: I.modalContent,
                    children: [
                        (0, l.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            color: 'header-primary',
                            children: r
                        }),
                        B ? (0, l.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            className: I.warningText,
                            children: D.Z.Messages.GUILD_EVENT_CHANNEL_DELETE_GUILD_EVENTS.format({ count: A.length })
                        }) : null
                    ]
                }),
                (0, l.jsxs)(s.ModalFooter, {
                    children: [
                        (0, l.jsx)(s.Button, {
                            onClick: h,
                            color: s.Button.Colors.RED,
                            children: e
                        }),
                        (0, l.jsx)(s.Button, {
                            onClick: n,
                            look: s.Button.Looks.LINK,
                            color: s.Button.Colors.PRIMARY,
                            children: D.Z.Messages.CANCEL
                        })
                    ]
                })
            ]
        });
    }
};
