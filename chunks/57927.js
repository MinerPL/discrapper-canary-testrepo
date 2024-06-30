a.d(s, {
    Z: function () {
        return j;
    }
}), a(47120);
var t = a(735250), n = a(470079), i = a(120356), l = a.n(i), r = a(392711), c = a.n(r), d = a(442837), o = a(481060), _ = a(367907), I = a(430824), N = a(771845), x = a(9156), m = a(346656), T = a(626135), h = a(789662), u = a(981631), O = a(689938), g = a(159392);
function j(e) {
    let {
            guildPlans: s,
            overrideGuild: a
        } = e, i = (0, d.e7)([N.ZP], () => N.ZP.getFlattenedGuildIds()), [l, r] = n.useMemo(() => c()(s).values().sortBy(e => {
            let s = i.indexOf(e.guildId);
            return -1 === s ? i.length : s;
        }).partition(e => {
            var s;
            return (null !== (s = e.overrideMode) && void 0 !== s ? s : e.mode) === h.AR.UseGreyDot;
        }).value(), [
            s,
            i
        ]), o = n.useCallback(e => {
            var t;
            return a(e, (null !== (t = s[e].overrideMode) && void 0 !== t ? t : s[e].mode) === h.AR.UseGreyDot ? h.AR.KeepAsIs : h.AR.UseGreyDot);
        }, [
            a,
            s
        ]);
    return (0, t.jsxs)('div', {
        className: g.container,
        children: [
            (0, t.jsx)(b, {
                header: O.Z.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION2_TITLE,
                subheader: O.Z.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION2_SUBTITLE,
                guildPlans: r,
                onClick: o
            }),
            (0, t.jsx)(b, {
                header: O.Z.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION1_TITLE,
                subheader: O.Z.Messages.NOTIF_MIGRATION_CUSTOMIZE_SECTION1_SUBTITLE,
                guildPlans: l,
                onClick: o
            })
        ]
    });
}
function b(e) {
    let {
        header: s,
        subheader: a,
        guildPlans: n,
        onClick: i
    } = e;
    return (0, t.jsxs)('div', {
        className: g.column,
        children: [
            (0, t.jsxs)('div', {
                className: g.header,
                children: [
                    (0, t.jsxs)(o.Text, {
                        className: g.__invalid_sectionTitle,
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        children: [
                            s,
                            ' (',
                            n.length,
                            ')'
                        ]
                    }),
                    (0, t.jsx)(o.Text, {
                        variant: 'text-xs/normal',
                        color: 'header-secondary',
                        children: a
                    })
                ]
            }),
            (0, t.jsx)(o.Scroller, {
                className: g.scroller,
                children: (0, t.jsx)('div', {
                    className: g.guilds,
                    children: n.map(e => (0, t.jsx)(M, {
                        plan: e,
                        onClick: i
                    }, e.guildId))
                })
            })
        ]
    });
}
function M(e) {
    var s;
    let {
            plan: a,
            onClick: n
        } = e, i = (0, d.e7)([I.Z], () => I.Z.getGuild(a.guildId));
    if (null == i)
        return null;
    let r = (null !== (s = a.overrideMode) && void 0 !== s ? s : a.mode) === h.AR.UseGreyDot;
    function c() {
        T.default.track(u.rMx.NOTIFICATION_MIGRATION_GUILD_CHANGED, {
            ...(0, _.hH)(a.guildId),
            is_selected: !r,
            is_muted: x.ZP.isMuted(a.guildId),
            notification_setting: x.ZP.getMessageNotifications(a.guildId)
        }), n(a.guildId);
    }
    return (0, t.jsx)(o.Tooltip, {
        text: (0, t.jsxs)('div', {
            children: [
                (0, t.jsx)(o.Text, {
                    variant: 'text-md/semibold',
                    color: 'header-primary',
                    children: i.name
                }),
                (0, t.jsxs)('div', {
                    className: g.tooltipRow,
                    children: [
                        (0, t.jsx)(o.ChatIcon, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        (0, t.jsx)(o.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: a.messagePain ? O.Z.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_BUSY : O.Z.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_QUIET
                        })
                    ]
                }),
                (0, t.jsxs)('div', {
                    className: g.tooltipRow,
                    children: [
                        (0, t.jsx)(o.FriendsIcon, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        (0, t.jsx)(o.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: a.visitsALot ? O.Z.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_ALOT : O.Z.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_ALITTLE
                        })
                    ]
                }),
                (0, t.jsxs)('div', {
                    className: g.tooltipRow,
                    children: [
                        (0, t.jsx)(o.BellIcon, {
                            size: 'xxs',
                            color: 'currentColor'
                        }),
                        (0, t.jsx)(o.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: a.muted ? O.Z.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_MUTED : O.Z.Messages.NOTIF_MIGRATION_GUILD_TOOLTIP_NOT_MUTED
                        })
                    ]
                })
            ]
        }),
        'aria-label': a.debugReason,
        tooltipClassName: g.tooltip,
        children: e => (0, t.jsxs)(o.Clickable, {
            ...e,
            className: l()(g.guild, r ? g.selected : void 0),
            onClick: c,
            children: [
                (0, t.jsx)(o.CircleCheckIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: g.checkmark,
                    secondaryColor: 'white'
                }),
                (0, t.jsx)(m.Z, {
                    'aria-hidden': !0,
                    className: g.guildIcon,
                    guild: i,
                    size: m.Z.Sizes.MEDIUM,
                    active: !0,
                    tabIndex: -1
                })
            ]
        })
    });
}
