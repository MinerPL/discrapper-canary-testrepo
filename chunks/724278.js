t.d(n, {
    Z: function () {
        return P;
    }
});
var i = t(735250), l = t(470079), a = t(120356), r = t.n(a), o = t(442837), c = t(481060), s = t(447543), d = t(906732), u = t(171368), _ = t(271383), f = t(430824), g = t(940627), v = t(346656), h = t(51144), b = t(897285), I = t(978227), m = t(894017), p = t(79874), x = t(315416), E = t(236373), N = t(854698), C = t(391174), T = t(810561), Z = t(390966), j = t(390072), S = t(981631), L = t(689938), k = t(519229);
function R(e) {
    var n;
    let {
            creator: t,
            guildId: l,
            channelId: a
        } = e, {analyticsLocations: r} = (0, d.ZP)(), s = (0, o.e7)([_.ZP], () => _.ZP.getMember(l, t.id), [
            t,
            l
        ]);
    return (0, i.jsxs)('div', {
        className: k.row,
        children: [
            (0, i.jsx)(c.Avatar, {
                size: c.AvatarSizes.SIZE_20,
                src: t.getAvatarURL(l, 20),
                'aria-label': null !== (n = null == s ? void 0 : s.nick) && void 0 !== n ? n : h.ZP.getName(t),
                className: k.icon
            }),
            (0, i.jsx)(c.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: L.Z.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
                    usernameHook: function () {
                        var e, n;
                        return (0, i.jsx)(c.Clickable, {
                            onClick: () => (0, u.openUserProfileModal)({
                                guildId: l,
                                channelId: a,
                                userId: t.id,
                                roleId: null == s ? void 0 : s.colorRoleId,
                                sourceAnalyticsLocations: r,
                                analyticsLocation: { section: S.jXE.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG }
                            }),
                            className: k.creator,
                            tag: 'span',
                            role: 'link',
                            children: (0, i.jsx)(c.NameWithRole, {
                                name: null !== (e = null == s ? void 0 : s.nick) && void 0 !== e ? e : h.ZP.getName(t),
                                color: null !== (n = null == s ? void 0 : s.colorString) && void 0 !== n ? n : void 0
                            })
                        }, 'open-user-profile');
                    }
                })
            })
        ]
    });
}
function D(e) {
    let {
            guild: n,
            onClick: t,
            onClose: a
        } = e, o = l.useCallback(e => {
            null == t || t(e), null != t && (null == a || a(e));
        }, [
            t,
            a
        ]), s = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(v.Z, {
                    guild: n,
                    size: v.Z.Sizes.MINI,
                    active: !0,
                    className: r()(k.guildIcon, k.icon)
                }),
                (0, i.jsx)(g.Z, {
                    guild: n,
                    tooltipPosition: 'top',
                    tooltipColor: c.Tooltip.Colors.PRIMARY,
                    size: 16,
                    className: k.guildBadge
                }),
                (0, i.jsx)(c.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    className: k.linkText,
                    children: n.name
                })
            ]
        });
    return (0, i.jsx)('div', {
        className: k.row,
        children: null != t ? (0, i.jsx)(c.Clickable, {
            onClick: o,
            className: k.clickable,
            role: 'link',
            children: s
        }) : s
    });
}
function M(e) {
    let {
        userCount: n,
        onClick: t
    } = e;
    return (0, i.jsxs)('div', {
        className: k.row,
        children: [
            (0, i.jsx)(c.GroupIcon, {
                size: 'custom',
                color: 'currentColor',
                width: 20,
                height: 20,
                className: k.icon
            }),
            (0, i.jsx)(c.Clickable, {
                onClick: t,
                className: k.interestedCount,
                children: (0, i.jsx)(c.Text, {
                    color: 'header-secondary',
                    variant: 'text-sm/normal',
                    children: L.Z.Messages.GUILD_EVENT_INTERESTED_COUNT.format({ count: n })
                })
            })
        ]
    });
}
function P(e) {
    let {
            guildEvent: n,
            guild: t,
            channel: a,
            headerId: r,
            onClose: d,
            onClickInterestedCount: u,
            isHub: _ = !1,
            containerRef: g,
            recurrenceId: v,
            setRecurrenceId: h
        } = e, S = (0, o.e7)([f.Z], () => null != f.Z.getGuild(t.id), [t.id]), {
            startTime: L,
            endTime: P
        } = (0, p.ZP)(n, v), B = (0, x.Z)(n.guild_id, n.id, v), y = l.useCallback(e => {
            e.stopPropagation(), null != n && (0, s.B)(n);
        }, [n]), w = (0, m.Z)(v, n.id), A = (0, I.Z)(n);
    l.useEffect(() => {
        b.Z.getGuildEventUserCounts(t.id, n.id, null != v ? [v] : []), b.Z.getGuildEventsForCurrentUser(t.id);
    }, [
        t.id,
        n.id,
        v
    ]);
    let G = (0, E.KV)(n.recurrence_rule), U = (null == n ? void 0 : n.scheduled_start_time) != null ? (0, N.lh)(w, L, new Date(null == n ? void 0 : n.scheduled_start_time)) : null;
    return (0, i.jsxs)('div', {
        ref: g,
        children: [
            (0, i.jsxs)('div', {
                className: k.header,
                children: [
                    (0, i.jsx)(Z.z, {
                        startTime: L.toISOString(),
                        endTime: null == P ? void 0 : P.toISOString(),
                        status: null != U ? U : n.status,
                        eventType: n.entity_type,
                        guildEventId: n.id,
                        recurrenceId: v
                    }),
                    (0, i.jsx)(c.Heading, {
                        id: r,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        className: k.title,
                        children: n.name
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: k.body,
                children: [
                    (0, i.jsx)(D, {
                        guild: t,
                        onClick: S ? y : void 0,
                        onClose: d
                    }),
                    (0, i.jsx)(j.Z, {
                        guildScheduledEvent: n,
                        channel: a,
                        onClose: d
                    }),
                    null != B && (0, i.jsx)(M, {
                        userCount: B,
                        onClick: u
                    }),
                    !_ && null != A && (0, i.jsx)(R, {
                        creator: A,
                        guildId: t.id,
                        channelId: null == a ? void 0 : a.id
                    }, A.id),
                    null != n.description && (0, i.jsx)('div', {
                        className: k.description,
                        children: (0, i.jsx)(C.Z, {
                            description: n.description,
                            truncate: !1,
                            guildId: t.id
                        })
                    })
                ]
            }),
            null != G && (0, i.jsx)('hr', { className: k.divider }),
            null != G && (0, i.jsx)(T.Z, {
                guildId: t.id,
                recurrenceRule: G,
                guildEventId: n.id,
                onRecurrenceClick: h,
                hideScroller: !0,
                activeRecurrenceId: v
            })
        ]
    });
}
