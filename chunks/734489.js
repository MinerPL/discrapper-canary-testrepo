l.d(t, {
    Z: function () {
        return L;
    }
});
var n, a, o = l(735250), s = l(470079), i = l(722770), r = l(481060), C = l(100527), c = l(666657), d = l(533244), u = l(664452), m = l(226192), _ = l(223606), E = l(689938), h = l(616491);
function M(e) {
    var t;
    if (null == (null !== (t = e.dmsDisabledUntil) && void 0 !== t ? t : e.invitesDisabledUntil))
        return '';
    let l = null != e.dmsDisabledUntil, n = null != e.invitesDisabledUntil;
    switch (!0) {
    case l && n:
        return E.Z.Messages.MEMBER_SAFETY_DM_AND_INVITES_PAUSED_HEADER;
    case l:
        return E.Z.Messages.MEMBER_SAFETY_DM_PAUSED_HEADER;
    case n:
        return E.Z.Messages.MEMBER_SAFETY_INVITES_PAUSED_HEADER;
    default:
        return '';
    }
}
function x(e) {
    var t;
    let {
            onHandleEnableLockdown: l,
            onHandleReportFalseAlarm: n,
            incidentData: a
        } = e, s = null !== (t = a.raidDetectedAt) && void 0 !== t ? t : a.dmSpamDetectedAt;
    return (0, o.jsxs)('div', {
        className: h.subheaderContainer,
        children: [
            (0, o.jsxs)('div', {
                className: h.subHeaderTextContainer,
                children: [
                    (0, o.jsx)(r.ShieldIcon, {
                        size: 'md',
                        className: h.shieldIcon,
                        color: i.Z.RED_345
                    }),
                    (0, o.jsxs)('div', {
                        className: h.subHeaderText,
                        children: [
                            (0, o.jsx)(r.Heading, {
                                className: h.heading,
                                variant: 'heading-lg/semibold',
                                color: 'text-danger',
                                children: (0, d.kk)(a) ? E.Z.Messages.MEMBER_SAFETY_DM_RAID_ALERT_HEADER : E.Z.Messages.MEMBER_SAFETY_JOIN_RAID_ALERT_HEADER
                            }),
                            (0, o.jsx)(r.Text, {
                                className: h.tagLine,
                                variant: 'text-sm/medium',
                                children: E.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_RAID_ACTION_DESCRIPTION.format({ dateTime: new Date(null != s ? s : '').toLocaleString(E.Z.getLocale(), d.pQ) })
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsxs)('div', {
                className: h.buttonContainer,
                children: [
                    (0, o.jsx)(r.Button, {
                        className: h.reportButton,
                        color: r.Button.Colors.TRANSPARENT,
                        onClick: n,
                        children: (0, o.jsx)(r.Text, {
                            variant: 'text-sm/semibold',
                            children: E.Z.Messages.MEMBER_SAFETY_RESOLVE_RAID_ALERT_BUTTON
                        })
                    }),
                    (0, o.jsx)(r.ShinyButton, {
                        className: h.__invalid_lockdownButton,
                        color: r.Button.Colors.RED,
                        onClick: l,
                        children: (0, o.jsxs)('div', {
                            className: h.lockdownButtonInnerRaidDetected,
                            children: [
                                (0, o.jsx)(r.LockIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: h.lockIcon
                                }),
                                (0, o.jsx)(r.Text, {
                                    className: h.lockdownButtonText,
                                    variant: 'text-sm/semibold',
                                    children: E.Z.Messages.GUILD_ANTIRAID_NAGBAR_ACTION
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function b(e) {
    let {
        onHandleEnableLockdown: t,
        incidentData: l,
        guildName: n
    } = e;
    return (0, o.jsxs)('div', {
        className: h.subheaderContainer,
        children: [
            (0, o.jsxs)('div', {
                className: h.subHeaderTextContainer,
                children: [
                    (0, o.jsx)(r.ShieldIcon, {
                        size: 'md',
                        className: h.shieldIcon,
                        color: i.Z.BRAND_360
                    }),
                    (0, o.jsxs)('div', {
                        className: h.subHeaderText,
                        children: [
                            (0, o.jsx)(r.Heading, {
                                className: h.heading,
                                variant: 'heading-lg/semibold',
                                color: 'text-brand',
                                children: M(l)
                            }),
                            (0, o.jsx)(r.Text, {
                                className: h.tagLine,
                                variant: 'text-sm/medium',
                                children: (0, d.OY)(l, n)
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsx)(r.Button, {
                className: h.lockdownNoticeButton,
                color: r.Button.Colors.BRAND,
                onClick: t,
                children: (0, o.jsxs)('div', {
                    className: h.lockdownButtonInner,
                    children: [
                        (0, o.jsx)(r.LockIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: h.lockIcon
                        }),
                        (0, o.jsx)(r.Text, {
                            className: h.lockdownButtonText,
                            variant: 'text-sm/semibold',
                            children: E.Z.Messages.GUILD_ANTIRAID_NAGBAR_EDIT_ACTION
                        })
                    ]
                })
            })
        ]
    });
}
function T(e) {
    let {
        onHandleEnableLockdown: t,
        onHandleReportFalseAlarm: l,
        incidentData: n,
        guildName: a
    } = e;
    return (0, o.jsxs)('div', {
        className: h.subheaderContainer,
        children: [
            (0, o.jsxs)('div', {
                className: h.subHeaderTextContainer,
                children: [
                    (0, o.jsx)(r.ShieldIcon, {
                        size: 'md',
                        className: h.shieldIcon,
                        color: i.Z.BRAND_360
                    }),
                    (0, o.jsxs)('div', {
                        className: h.subHeaderText,
                        children: [
                            (0, o.jsx)(r.Heading, {
                                className: h.heading,
                                variant: 'heading-lg/semibold',
                                color: 'text-brand',
                                children: M(n)
                            }),
                            (0, o.jsx)(r.Text, {
                                className: h.tagLine,
                                variant: 'text-sm/medium',
                                children: (0, d.OY)(n, a)
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsxs)('div', {
                className: h.buttonContainer,
                children: [
                    (0, o.jsx)(r.Button, {
                        className: h.reportButton,
                        color: r.Button.Colors.TRANSPARENT,
                        onClick: l,
                        children: (0, o.jsx)(r.Text, {
                            variant: 'text-sm/semibold',
                            children: E.Z.Messages.MEMBER_SAFETY_RESOLVE_RAID_ALERT_BUTTON
                        })
                    }),
                    (0, o.jsx)(r.Button, {
                        className: h.__invalid_lockdownButton,
                        color: r.Button.Colors.BRAND,
                        onClick: t,
                        children: (0, o.jsxs)('div', {
                            className: h.lockdownButtonInnerRaidDetected,
                            children: [
                                (0, o.jsx)(r.LockIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: h.lockIcon
                                }),
                                (0, o.jsx)(r.Text, {
                                    className: h.lockdownButtonText,
                                    variant: 'text-sm/semibold',
                                    children: E.Z.Messages.GUILD_ANTIRAID_NAGBAR_EDIT_ACTION
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function L(e) {
    let {
            guild: t,
            incidentData: l,
            isUnderLockdown: n,
            isRaidDetected: a
        } = e, i = s.useCallback(() => {
            (0, r.openModalLazy)(async () => {
                let e = {
                    source: c.Zu.MEMBER_SAFETY_PAGE,
                    location: C.Z.MEMBER_SAFETY_PAGE,
                    alertType: (0, d.T1)(l)
                };
                return l => (0, o.jsx)(u.default, {
                    ...l,
                    guildId: t.id,
                    analyticsData: e
                });
            });
        }, [
            t.id,
            l
        ]), E = s.useCallback(() => {
            let e = _.Z.getLastIncidentAlertMessage(t.id);
            (0, m.kW)(e, t.id);
        }, [t.id]), h = (() => {
            switch (!0) {
            case a && n:
                return 3;
            case a:
                return 1;
            case n:
                return 2;
            default:
                return 0;
            }
        })();
    if (null == t || null == l)
        return null;
    switch (h) {
    case 1:
        return (0, o.jsx)(x, {
            onHandleEnableLockdown: i,
            onHandleReportFalseAlarm: E,
            incidentData: l
        });
    case 2:
        return (0, o.jsx)(b, {
            onHandleEnableLockdown: i,
            incidentData: l,
            guildName: t.name
        });
    case 3:
        return (0, o.jsx)(T, {
            onHandleEnableLockdown: i,
            onHandleReportFalseAlarm: E,
            incidentData: l,
            guildName: t.name
        });
    default:
        return null;
    }
}
(n = a || (a = {}))[n.DEFAULT = 0] = 'DEFAULT', n[n.RAID_DETECTED = 1] = 'RAID_DETECTED', n[n.LOCKDOWN_ENABLED = 2] = 'LOCKDOWN_ENABLED', n[n.RAID_DETECTED_LOCKDOWN_ENABLED = 3] = 'RAID_DETECTED_LOCKDOWN_ENABLED';
