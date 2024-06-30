n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(735250), a = n(470079), s = n(442837), l = n(481060), r = n(241559), o = n(527379), c = n(430824), d = n(944486), u = n(914010), _ = n(346656), E = n(626135), m = n(528011), I = n(666657), T = n(533244), h = n(981631), N = n(176505), f = n(689938), p = n(928112);
function C(e) {
    var t, C;
    let {onDismiss: g} = e, S = (0, s.e7)([u.Z], () => u.Z.getGuildId()), A = (0, s.e7)([d.Z], () => null != S ? d.Z.getChannelId(S) : null, [S]), x = null != S ? S : null, O = (0, s.e7)([c.Z], () => null != x ? c.Z.getGuild(x) : null, [x]), {
            shouldShowIncidentActions: R,
            incidentData: M,
            isUnderLockdown: v
        } = (0, m.mI)(x), L = (0, r.n2)(null !== (t = null == O ? void 0 : O.id) && void 0 !== t ? t : h.lds), Z = a.useCallback(() => null != O && (0, o._X)(O.id), [O]);
    if (null == O || null == M || !R)
        return null;
    let P = e => {
            if (e && L && A !== N.oC.MEMBER_SAFETY && Z()) {
                E.default.track(h.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: h.kVF.GUILD_RAID_NOTIFICATION,
                    guild_id: O.id
                });
                return;
            }
            (0, l.openModalLazy)(async () => {
                let e = {
                        source: I.Zu.NAGBAR,
                        alertType: (0, T.T1)(M)
                    }, {default: t} = await n.e('58175').then(n.bind(n, 664452));
                return n => (0, i.jsx)(t, {
                    ...n,
                    guildId: O.id,
                    analyticsData: e
                });
            });
        }, b = (0, i.jsx)(_.Z, {
            className: p.guildIcon,
            guild: O,
            size: _.Z.Sizes.MINI
        }), D = (0, T.OY)(M, O.name);
    if (null != (null !== (C = M.dmsDisabledUntil) && void 0 !== C ? C : M.invitesDisabledUntil) && v)
        return (0, i.jsxs)(l.Notice, {
            className: p.notice,
            color: l.NoticeColors.NEUTRAL,
            children: [
                (0, i.jsx)(l.NoticeCloseButton, {
                    onClick: g,
                    noticeType: h.kVF.GUILD_RAID_NOTIFICATION
                }),
                b,
                D,
                (0, i.jsx)(l.NoticeButton, {
                    className: p.actionButton,
                    onClick: () => P(!1),
                    children: (0, i.jsxs)('div', {
                        className: p.actionButtonInner,
                        children: [
                            (0, i.jsx)(l.LockIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)('span', { children: f.Z.Messages.GUILD_ANTIRAID_LOCKDOWN_NAGBAR_ACTION })
                        ]
                    })
                })
            ]
        });
    let j = (0, T.CG)(M) ? f.Z.Messages.GUILD_ANTIRAID_NAGBAR_RAID_MESSAGE_2_NEW.format({ guildName: O.name }) : (0, T.kk)(M) ? f.Z.Messages.GUILD_ANTIRAID_NAGBAR_DM_RAID_MESSAGE_2_NEW.format({ guildName: O.name }) : f.Z.Messages.GUILD_ANTIRAID_NAGBAR_MESSAGE_2_NEW.format({ guildName: O.name }), U = L && A === N.oC.MEMBER_SAFETY;
    return (0, i.jsxs)(l.Notice, {
        className: p.notice,
        color: l.NoticeColors.WARNING,
        children: [
            (0, i.jsx)(l.NoticeCloseButton, {
                onClick: g,
                noticeType: h.kVF.GUILD_RAID_NOTIFICATION
            }),
            b,
            j,
            !U && (0, i.jsx)(l.NoticeButton, {
                className: p.actionButton,
                onClick: () => P(!0),
                children: (0, i.jsx)('div', {
                    className: p.actionButtonInner,
                    children: (0, i.jsx)('span', { children: f.Z.Messages.GUILD_ANTIRAID_NAGBAR_ACTION_VIEW })
                })
            })
        ]
    });
}
