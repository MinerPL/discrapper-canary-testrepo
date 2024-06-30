n.d(t, {
    Z: function () {
        return C;
    }
}), n(47120);
var s = n(735250), a = n(470079), i = n(106351), r = n(442837), l = n(481060), o = n(367907), c = n(933557), d = n(177862), u = n(434404), _ = n(984933), E = n(430824), I = n(699516), T = n(594174), m = n(369994), N = n(162157), S = n(981631), h = n(689938), g = n(463303);
function C(e) {
    var t, n;
    let {
            guildId: C,
            transitionState: x,
            onClose: p
        } = e, R = (0, r.e7)([E.Z], () => E.Z.getGuild(C), [C]), f = null !== (t = null == R ? void 0 : R.safetyAlertsChannelId) && void 0 !== t ? t : null, [L, O] = a.useState(!!(null == R ? void 0 : R.hasFeature(S.oNc.RAID_ALERTS_DISABLED))), A = (0, N.BT)(R), [M, v] = a.useState(null != f ? f : null !== (n = null == R ? void 0 : R.publicUpdatesChannelId) && void 0 !== n ? n : null), [D, j] = a.useState(!1), Z = (0, r.Wu)([
            _.ZP,
            T.default,
            I.Z
        ], () => {
            let e = _.ZP.getChannels(C)[_.sH].filter(e => {
                let {channel: t} = e;
                return t.type === i.d.GUILD_TEXT;
            }).map(e => {
                let {channel: t} = e;
                return {
                    value: t.id,
                    label: (0, c.F6)(t, T.default, I.Z, !0)
                };
            });
            return null != f ? e : [...e];
        }, [
            C,
            f
        ]), b = async () => {
            if (null == R) {
                (0, l.showToast)((0, l.createToast)(h.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, l.ToastType.FAILURE));
                return;
            }
            try {
                j(!0), L !== R.hasFeature(S.oNc.RAID_ALERTS_DISABLED) && await (0, m.f6)(R, !L), M !== f && (await u.Z.saveGuild(C, { safetyAlertsChannelId: M }, { throwErr: !0 }), u.Z.updateGuild({ safetyAlertsChannelId: M }));
                let e = null != M ? M : f;
                if (null != e) {
                    let t = {
                        raid_alert_type: d.wR.JOIN_RAID,
                        enabled: L,
                        raid_alert_channel_id: e,
                        guild_id: C,
                        channel_id: e
                    };
                    (0, o.yw)(S.rMx.GUILD_RAID_ALERTS_SETUP, t);
                }
                p();
            } catch (e) {
                (0, l.showToast)((0, l.createToast)(h.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, l.ToastType.FAILURE));
            } finally {
                j(!1);
            }
        };
    return (0, s.jsxs)(l.ModalRoot, {
        transitionState: x,
        size: l.ModalSize.SMALL,
        children: [
            (0, s.jsx)(l.ModalHeader, {
                separator: !1,
                children: (0, s.jsx)(l.Heading, {
                    color: 'header-primary',
                    variant: 'heading-md/semibold',
                    children: h.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_TITLE
                })
            }),
            (0, s.jsxs)(l.ModalContent, {
                children: [
                    (0, s.jsx)(l.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: h.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_DESCRIPTION
                    }),
                    (0, s.jsx)('div', {
                        className: g.mainChannelContainer,
                        children: (0, s.jsxs)(l.Clickable, {
                            className: g.enableAlertsContainer,
                            onClick: () => {
                                if (!!A)
                                    O(!L);
                            },
                            children: [
                                (0, s.jsx)(l.Text, {
                                    variant: 'text-md/medium',
                                    color: 'text-normal',
                                    children: h.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_ENABLE_ALERTS
                                }),
                                (0, s.jsx)(l.Checkbox, {
                                    value: !L,
                                    className: g.enabledAlertsCheckbox,
                                    type: l.Checkbox.Types.INVERTED,
                                    disabled: !A
                                })
                            ]
                        })
                    }),
                    (0, s.jsxs)('div', {
                        className: g.mainChannelContainer,
                        children: [
                            (0, s.jsx)(l.Text, {
                                variant: 'eyebrow',
                                color: 'text-muted',
                                children: h.Z.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
                            }),
                            (0, s.jsx)(l.SearchableSelect, {
                                options: Z,
                                onChange: e => {
                                    v(e);
                                },
                                value: M,
                                className: g.channelSelect,
                                maxVisibleItems: 4
                            }),
                            (0, s.jsx)(l.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: h.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_CHANNEL_PERMISSIONS_NOTICE
                            })
                        ]
                    })
                ]
            }),
            (0, s.jsxs)(l.ModalFooter, {
                children: [
                    (0, s.jsx)(l.Button, {
                        onClick: b,
                        color: l.Button.Colors.BRAND,
                        look: l.Button.Looks.FILLED,
                        submitting: D,
                        children: h.Z.Messages.SAVE
                    }),
                    (0, s.jsx)(l.Button, {
                        onClick: p,
                        color: l.Button.Colors.PRIMARY,
                        look: l.Button.Looks.LINK,
                        disabled: D,
                        children: h.Z.Messages.CANCEL
                    })
                ]
            })
        ]
    });
}
