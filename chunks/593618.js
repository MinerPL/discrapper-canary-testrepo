n.d(t, {
    K: function () {
        return Q;
    },
    Z: function () {
        return X;
    }
}), n(390547), n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(392711), l = n.n(s), u = n(442837), c = n(477690), d = n(481060), _ = n(317381), E = n(666188), f = n(246364), h = n(746916), p = n(965638), m = n(160404), I = n(41776), T = n(777861), g = n(565799), S = n(501655), A = n(517334), N = n(344185), v = n(199902), O = n(77498), R = n(984933), C = n(607744), y = n(158776), D = n(9156), L = n(594174), b = n(938475), M = n(940627), P = n(705600), U = n(602623), w = n(624138), x = n(510601), G = n(59688), k = n(456774), B = n(718582), F = n(981631), V = n(689938), H = n(907934), Z = n(721690);
let Y = (0, w.Mg)(c.Z.GUILD_TOOLTIP_ICON_SIZE), j = (0, w.Mg)(c.Z.GUILD_TOOLTIP_ICON_SIZE_V_2);
function W(e, t, n) {
    return 0 === t.length ? null : (0, r.jsxs)('div', {
        className: H.row,
        children: [
            (0, r.jsx)(e, {
                className: H.activityIcon,
                color: 'currentColor'
            }),
            (0, r.jsx)(U.Z, {
                guildId: n,
                users: t,
                max: 6
            })
        ]
    });
}
function K(e) {
    let {
        muteConfig: t,
        className: n
    } = e;
    return (null == t ? void 0 : t.end_time) == null ? (0, r.jsx)(d.Text, {
        variant: 'text-xs/normal',
        color: 'text-muted',
        className: n,
        children: V.Z.Messages.FORM_LABEL_MUTED
    }) : (0, r.jsx)(T.Z, {
        muteConfig: t,
        className: n
    });
}
function z(e) {
    var t, n, a;
    let {guild: s} = e, c = s.id, {
            voiceUsersToShow: E,
            stageSpeakers: f,
            numStageListeners: h,
            streamUsersToShow: p,
            embeddedActivitiesUsers: m,
            gameUsers: I,
            shouldShowGameBadge: T
        } = function (e) {
            let t = e.id, n = (0, u.Wu)([
                    R.ZP,
                    N.Z
                ], () => {
                    let e = R.ZP.getChannels(t)[R.Zb].filter(e => {
                        let {channel: t} = e;
                        return t.type === F.d4z.GUILD_VOICE;
                    }).map(e => {
                        let {channel: t} = e;
                        return t.id;
                    });
                    return [
                        ...e,
                        ...Object.values(N.Z.getThreadsForGuild(t)).flatMap(e => Object.keys(e))
                    ];
                }, [t]), r = (0, A.ZP)(t), a = i.useMemo(() => r.map(e => e.id), [r]), o = (0, u.e7)([b.ZP], () => b.ZP.getVoiceStates(t), [t]), s = l().flatMap(n, t => {
                    var n;
                    return t === e.afkChannelId ? [] : (null !== (n = o[t]) && void 0 !== n ? n : []).map(e => {
                        let {user: t} = e;
                        return t;
                    });
                }), c = (0, u.Wu)([g.Z], () => l().flatMap(a, t => t === e.afkChannelId ? [] : g.Z.getMutableParticipants(t, S.pV.SPEAKER).filter(e => e.type === S.Ui.VOICE).map(e => {
                    let {user: t} = e;
                    return t;
                }))), d = (0, u.e7)([g.Z], () => {
                    let e = 0;
                    for (let t of a)
                        e += g.Z.getParticipantCount(t, S.pV.AUDIENCE);
                    return e;
                }), E = (0, u.Wu)([v.Z], () => v.Z.getAllApplicationStreams().filter(e => e.guildId === t).map(e => e.ownerId), [t]), f = (0, u.Wu)([
                    y.Z,
                    O.Z
                ], () => s.filter(e => y.Z.getActivities(e.id, t).some(e => (null == e ? void 0 : e.application_id) != null && null != O.Z.getDetectableGame(null == e ? void 0 : e.application_id)))), h = (0, x.kM)('Guild Tooltip', !1), p = h ? f.map(e => e.id) : [], m = (0, u.Wu)([_.ZP], () => _.ZP.getEmbeddedActivitiesForGuild(t).flatMap(e => Array.from(e.userIds)), [t]), I = (0, u.Wu)([L.default], () => m.map(e => L.default.getUser(e)), [m]), T = (0, u.Wu)([L.default], () => E.map(e => L.default.getUser(e)), [E]), C = s.filter(e => !E.includes(e.id) && !m.includes(e.id) && !p.includes(e.id)), D = T.filter(e => null != e && !m.includes(e.id)), M = c.length > 0 || C.length > 0 || D.length > 0 || I.length > 0;
            return {
                voiceUsersToShow: C,
                stageSpeakers: c,
                numStageListeners: d,
                streamUsersToShow: D,
                embeddedActivitiesUsers: I,
                gameUsers: f,
                shouldShowGameBadge: h,
                hasActivity: M
            };
        }(s), C = W(d.GameControllerIcon, I, c), M = W(d.VoiceNormalIcon, E, c);
    let P = (t = c, n = f, a = h, 0 === n.length ? null : (0, r.jsxs)('div', {
            className: H.row,
            children: [
                (0, r.jsx)(d.StageIcon, {
                    size: 'lg',
                    color: 'currentColor',
                    className: H.activityIcon
                }),
                (0, r.jsx)(U.Z, {
                    guildId: t,
                    users: n,
                    max: 3
                }),
                (0, r.jsxs)('div', {
                    className: H.stageListenerPill,
                    children: [
                        (0, r.jsx)(d.HeadphonesIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        (0, r.jsx)(d.Text, {
                            className: H.stageListenerCount,
                            color: 'text-normal',
                            variant: 'text-xs/normal',
                            children: a
                        })
                    ]
                })
            ]
        })), w = W(d.ScreenArrowIcon, p, c), G = W(d.ActivitiesIcon, m, c), {
            isMuted: k,
            muteConfig: B
        } = (0, u.cj)([D.ZP], () => ({
            isMuted: D.ZP.isMuted(c),
            muteConfig: D.ZP.getMuteConfig(c)
        }), [c]);
    return null != C && x.ZP.trackExposure({ location: 'Guild Tooltip' }), (0, r.jsxs)(r.Fragment, {
        children: [
            P,
            M,
            w,
            T && C,
            G,
            k ? (0, r.jsx)(K, {
                muteConfig: B,
                className: o()(H.muteText, { [H.muteTextWithActivity]: null != M || null != w })
            }) : null
        ]
    });
}
function q(e) {
    let {guildJoinRequestStatus: t} = e;
    return (0, r.jsx)(d.Text, {
        className: H.viewAsRolesWarning,
        color: 'text-normal',
        variant: 'text-xs/normal',
        children: function (e) {
            switch (e) {
            case f.wB.SUBMITTED:
                return V.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_PENDING;
            case f.wB.REJECTED:
                return V.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_REJECTED;
            case f.wB.APPROVED:
                return V.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_APPROVED;
            default:
                return V.Z.Messages.GUILD_JOIN_REQUEST_STATUS_TOOLTIP_STARTED;
            }
        }(t)
    });
}
function Q(e) {
    let {
            guild: t,
            includeActivity: n = !0
        } = e, i = (0, E.Z)(t), a = (0, h.E)(t.id), s = null != a ? (0, r.jsx)(q, { guildJoinRequestStatus: a }) : null, l = n ? (0, r.jsx)(z, { guild: t }) : null, c = (0, u.e7)([m.Z], () => m.Z.isViewingRoles(t.id)), _ = (0, p.Ij)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: o()(H.row, H.rowGuildName),
                children: [
                    i ? (0, r.jsx)(P.Z, {
                        guild: t,
                        size: j,
                        className: H.rowIconV2
                    }) : (0, r.jsx)(M.Z, {
                        guild: t,
                        size: Y,
                        className: H.rowIcon
                    }),
                    (0, r.jsx)('span', {
                        className: o()(H.guildNameText, { [H.guildNameTextLimitedSize]: null != l }),
                        children: t.toString()
                    })
                ]
            }),
            _ ? (0, r.jsx)(d.Text, {
                className: H.invitesDisabledTooltip,
                color: 'header-secondary',
                variant: 'text-sm/medium',
                children: V.Z.Messages.INVITES_DISABLED_TOOLTIP
            }) : null,
            c ? (0, r.jsx)(d.Text, {
                className: H.viewAsRolesWarning,
                color: 'text-normal',
                variant: 'text-xs/normal',
                children: V.Z.Messages.VIEW_AS_ROLES_MENTIONS_WARNING
            }) : null != s ? s : l
        ]
    });
}
function X(e) {
    let {
            guild: t,
            disabled: n = !1,
            'aria-label': a = !1,
            children: o,
            includeActivity: s = !0,
            isDragging: l
        } = e, c = (0, G.o)('guilds_bar', !1), [_, E] = i.useState(!1), f = (0, B.V1)(t), {
            isUserLurking: h,
            isUnverifiedAccount: p
        } = (0, u.cj)([
            I.Z,
            C.Z
        ], () => {
            let e = I.Z.isLurking(t.id);
            return {
                isUserLurking: e,
                isUnverifiedAccount: !C.Z.getCheck(t.id).canChat
            };
        }), m = i.useMemo(() => !h && !p && s && f.length > 0, [
            h,
            p,
            s,
            f.length
        ]), T = () => {
            m && G.Z.trackExposure({ location: 'guild_tooltip' });
        }, g = () => {
            E(!0), T();
        };
    return m && c ? (0, r.jsx)('div', {
        onMouseEnter: g,
        onMouseLeave: () => E(!1),
        onFocus: g,
        onBlur: () => E(!1),
        children: (0, r.jsx)(d.Popout, {
            position: 'right',
            renderPopout: e => {
                var n;
                return (0, r.jsx)(k.Z, {
                    guild: t,
                    closePopout: () => E(!1),
                    nudge: null !== (n = e.nudge) && void 0 !== n ? n : 0
                });
            },
            spacing: 0,
            onRequestClose: () => E(!1),
            shouldShow: !l && _,
            children: e => (0, r.jsx)('div', {
                ...e,
                children: o
            })
        })
    }) : (0, r.jsx)(d.Tooltip, {
        hideOnClick: !0,
        spacing: 20,
        position: 'right',
        text: n ? null : (0, r.jsx)(Q, {
            guild: t,
            includeActivity: s
        }),
        'aria-label': a,
        onTooltipShow: T,
        tooltipClassName: Z.listItemTooltip,
        children: e => {
            let {
                onFocus: t,
                onBlur: n,
                ...a
            } = e;
            return (0, r.jsx)('div', {
                onFocus: t,
                onBlur: n,
                children: i.cloneElement(i.Children.only(o), { ...a })
            });
        }
    });
}
