i.d(n, {
    Q: function () {
        return a;
    },
    Z: function () {
        return y;
    }
});
var l, a, t = i(735250), s = i(470079), r = i(120356), c = i.n(r), o = i(442837), u = i(481060), d = i(447003), h = i(471445), v = i(889161), C = i(496675), m = i(346656), x = i(725436), N = i(274311), E = i(854698), g = i(285784), _ = i(95291), T = i(742593), I = i(810561), j = i(187443), p = i(131154), A = i(765305), k = i(981631), S = i(689938), f = i(745222);
function Z(e) {
    let {
            channel: n,
            onClick: i
        } = e, {canManageAllEvents: l} = (0, v.XJ)(n), a = (0, o.e7)([C.Z], () => !n.isGuildVocal() || C.Z.can(k.Plq.CONNECT, n), [n]), r = s.useMemo(() => (0, d.Z)(n), [n]), m = (0, h.KS)(n);
    return (0, t.jsx)(u.Tooltip, {
        text: S.Z.Messages.GUILD_EVENT_CANNOT_CONNECT,
        shouldShow: !a && null != i,
        children: e => (0, t.jsxs)(u.Clickable, {
            ...e,
            className: c()(f.inline, f.channelContainer, {
                [f.channelContainerEnabled]: a && null != i,
                [f.channelContainerDisabled]: !a && null != i
            }),
            onClick: i,
            children: [
                (0, t.jsx)(u.Tooltip, {
                    text: S.Z.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                    shouldShow: l && r && a && null != i,
                    children: e => null != m ? (0, t.jsx)(m, {
                        ...e,
                        color: 'curentColor',
                        size: 'custom',
                        width: 20,
                        height: 20,
                        className: f.icon
                    }) : null
                }),
                (0, t.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'none',
                    className: f.channelLocation,
                    children: n.name
                })
            ]
        })
    });
}
function L(e) {
    let {
        guild: n,
        channel: i,
        onJoinClick: l,
        handleLocationClick: a,
        location: s,
        isExternal: r,
        isHub: o
    } = e;
    if (o)
        return null == n ? (0, t.jsx)('div', {}) : (0, t.jsxs)('div', {
            className: f.inline,
            children: [
                (0, t.jsx)(m.Z, {
                    className: f.guildIcon,
                    size: m.Z.Sizes.MINI,
                    active: !0,
                    guild: n
                }),
                (0, t.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: null == n ? void 0 : n.name
                })
            ]
        });
    return null != i ? (0, t.jsx)(Z, {
        channel: i,
        onClick: l
    }) : (0, t.jsxs)(u.Clickable, {
        className: f.inline,
        onClick: a,
        children: [
            (0, t.jsx)(u.LocationIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 20,
                width: 20,
                className: c()(f.channelContainer, f.icon)
            }),
            (0, t.jsx)(u.Text, {
                className: r ? f.externalLocation : f.channelLocation,
                variant: 'text-sm/normal',
                children: (0, x.m)(s, !0)
            })
        ]
    });
}
function y(e) {
    let {
            className: n,
            guild: i,
            channel: l,
            creator: a,
            name: s,
            entityType: r,
            description: o,
            imageLocation: d = 0,
            imageSource: h,
            isActive: v,
            isUserLurking: C,
            isJoined: m = !1,
            isMember: x = !1,
            isHub: k = !1,
            speakers: S,
            speakerCount: Z,
            rsvped: y,
            canInvite: w,
            location: R,
            truncate: b,
            onContextMenu: M,
            onJoinClick: G,
            onJoinGuildClick: P,
            onGoToGuildClick: O,
            onRsvpClick: V,
            onStartClick: U,
            onInviteClick: X,
            onEndClick: B,
            onClick: D,
            isNew: W,
            guildEvent: z,
            eventPreview: H,
            recurrenceRule: Y,
            recurrenceId: J
        } = e, K = (0, N.Q)(l, r), q = r === A.WX.EXTERNAL, Q = q ? e => e.stopPropagation() : void 0, F = [];
    if (null != Y && null != event) {
        let e = (0, E.Ho)(Y);
        F = (0, E.PJ)(4, e, new Date(z.scheduled_start_time));
    }
    let $ = F.length > 0;
    return (0, t.jsxs)(u.ClickableContainer, {
        'aria-label': s,
        onClick: () => null == D ? void 0 : D(J),
        onContextMenu: M,
        className: c()(f.card, {
            [f.joined]: m,
            [f.lurking]: C
        }, n),
        children: [
            (0, t.jsxs)('div', {
                className: c()(f.padding, { [f.isRecurring]: $ }),
                children: [
                    0 === d && (0, t.jsx)(_.Z, { source: h }),
                    (0, t.jsx)(T.ZP, {
                        creator: a,
                        name: s,
                        description: o,
                        imageSource: 1 === d ? h : null,
                        truncate: b,
                        guildId: null == i ? void 0 : i.id,
                        isHub: k,
                        isNew: W,
                        guildEvent: z,
                        eventPreview: H,
                        recurrenceId: J
                    }),
                    v && null != i && null != S && Z > 0 && (0, t.jsx)(p.Z, {
                        guild: i,
                        speakers: S,
                        speakerCount: Z,
                        className: f.spacing
                    }),
                    (0, t.jsx)('hr', { className: f.divider }),
                    (0, t.jsxs)('div', {
                        className: c()(f.inline, f.footer),
                        children: [
                            (0, t.jsx)(L, {
                                guild: i,
                                channel: l,
                                onJoinClick: G,
                                handleLocationClick: Q,
                                location: R,
                                isExternal: q,
                                isHub: k
                            }),
                            k ? (0, t.jsx)(j.Z, {
                                isActive: v,
                                isUserLurking: C,
                                isMember: x,
                                rsvped: y,
                                onRsvpClick: V,
                                onJoinGuildClick: P,
                                onGoToGuildClick: O,
                                guildName: null == i ? void 0 : i.name,
                                canInvite: w,
                                isChannelPublic: K,
                                onInviteClick: X
                            }) : (0, t.jsx)(g.ZP, {
                                entityType: r,
                                isJoined: m,
                                isActive: v,
                                isUserLurking: C,
                                rsvped: y,
                                canInvite: w,
                                isChannelPublic: K,
                                onContextMenu: M,
                                onJoinClick: G,
                                onRsvpClick: V,
                                onStartClick: U,
                                onInviteClick: X,
                                onEndClick: B
                            })
                        ]
                    }),
                    $ && (0, t.jsx)('hr', { className: f.divider })
                ]
            }),
            $ && (0, t.jsx)(I.Z, {
                guildId: null == i ? void 0 : i.id,
                recurrenceRule: Y,
                guildEventId: z.id,
                onRecurrenceClick: D
            })
        ]
    });
}
(l = a || (a = {}))[l.BANNER = 0] = 'BANNER', l[l.THUMBNAIL = 1] = 'THUMBNAIL';
