n.d(t, {
    Z: function () {
        return w;
    }
}), n(47120);
var i, s, a = n(735250), r = n(470079), l = n(120356), o = n.n(l), c = n(442837), d = n(692547), u = n(481060), _ = n(232567), E = n(100527), h = n(471445), I = n(15274), m = n(924301), p = n(504160), g = n(151864), T = n(725436), S = n(497656), C = n(554747), N = n(230900), f = n(854698), A = n(703656), Z = n(922482), L = n(565799), v = n(501655), O = n(427679), R = n(448206), x = n(484459), P = n(103575), b = n(496675), M = n(594174), D = n(662868), y = n(981631), j = n(765305), U = n(689938), G = n(846756);
(s = i || (i = {}))[s.STAGE = 0] = 'STAGE', s[s.EVENT_EXTERNAL = 1] = 'EVENT_EXTERNAL', s[s.EVENT_VOICE = 2] = 'EVENT_VOICE', s[s.STUDY_ROOM = 3] = 'STUDY_ROOM';
function w(e) {
    let {
            guild: t,
            isStudyRoomNotice: n = !1
        } = e, i = (0, S.y)(t.id), s = (0, C.k5)(t.id), l = (0, c.e7)([O.Z], () => O.Z.getStageInstanceByChannel(null == i ? void 0 : i.id), [i]), {
            isStageNoticeHidden: w,
            isEventNoticeHidden: k
        } = (0, c.cj)([g.Z], () => ({
            isStageNoticeHidden: g.Z.isLiveChannelNoticeHidden({ stageId: null == l ? void 0 : l.id }),
            isEventNoticeHidden: g.Z.isLiveChannelNoticeHidden({ eventId: null == s ? void 0 : s.id })
        }), [
            l,
            s
        ]), B = null == i ? void 0 : i.id, H = (0, c.Wu)([L.Z], () => [...new Set(L.Z.getMutableParticipants(B, v.pV.SPEAKER).map(e => e.user))], [B]), V = (0, c.e7)([L.Z], () => null != B ? L.Z.getParticipantCount(B, v.pV.AUDIENCE) : 0, [B]), F = (0, c.e7)([b.Z], () => b.Z.can(y.Plq.CONNECT, i)), Y = (0, R.Z)(null == i ? void 0 : i.id), W = null == s ? void 0 : s.creator_id, z = (0, c.e7)([M.default], () => M.default.getUser(W), [W]);
    r.useEffect(() => {
        null != W && (0, _.PR)(W);
    }, [W]);
    let {
        noticeType: K,
        title: q,
        location: Q,
        locationIcon: X,
        canListenIn: J,
        buttonText: $,
        users: ee,
        overflowUsers: et,
        onClose: en
    } = r.useMemo(() => function (e) {
        let {
                guildEvent: t,
                stageInstance: n,
                activeChannel: i,
                canConnect: s,
                myRole: r,
                eventCreator: l,
                speakers: o,
                listenerCount: c,
                isEventNoticeHidden: d,
                isStageNoticeHidden: _,
                isStudyRoomNotice: E
            } = e, I = null != n && null != i && !_, g = null != t ? (0, f.DK)(t) : null;
        if (E && null != i) {
            let e = (0, h.KS)(i);
            return {
                noticeType: 3,
                title: '\uD83D\uDCDA\u2615 '.concat(i.name),
                location: U.Z.Messages.HUB_STUDY_ROOM_VOICE_CHANNEL_TOOLTIP,
                locationIcon: null != e ? (0, a.jsx)(e, {
                    size: 'xs',
                    color: 'currentColor',
                    className: G.locationIcon
                }) : null,
                canListenIn: s,
                buttonText: U.Z.Messages.HUB_STUDY_ROOM_NOTICE_VOICE_CTA,
                users: [],
                overflowUsers: null
            };
        }
        if (null == t || d) {
            if (I) {
                let e = U.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON;
                return (null == r ? void 0 : r.speaker) ? e = U.Z.Messages.STAGE_CHANNEL_JOINED_SPEAKER_BUTTON : null != r && (e = U.Z.Messages.STAGE_CHANNEL_JOINED_AUDIENCE_BUTTON), {
                    noticeType: 0,
                    title: n.topic,
                    location: i.name,
                    locationIcon: (0, a.jsx)(u.StageIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 16,
                        height: 16,
                        className: G.locationIcon
                    }),
                    canListenIn: s,
                    buttonText: e,
                    onClose: () => (0, p.ji)({ stageId: null == n ? void 0 : n.id }),
                    users: o.length > 5 ? o.slice(0, 5) : o,
                    overflowUsers: c < 1 ? null : (0, a.jsxs)('div', {
                        className: G.pill,
                        children: [
                            (0, a.jsx)(u.HeadphonesIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 12,
                                height: 12,
                                className: G.pillIcon
                            }),
                            (0, a.jsx)(u.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                className: G.pillLabel,
                                children: c
                            })
                        ]
                    })
                };
            }
        } else {
            if (t.entity_type === j.WX.STAGE_INSTANCE && I) {
                let e = U.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON;
                return (null == r ? void 0 : r.speaker) ? e = U.Z.Messages.STAGE_CHANNEL_JOINED_SPEAKER_BUTTON : null != r && (e = U.Z.Messages.STAGE_CHANNEL_JOINED_AUDIENCE_BUTTON), {
                    noticeType: 0,
                    title: n.topic,
                    location: i.name,
                    locationIcon: (0, a.jsx)(u.StageIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 16,
                        height: 16,
                        className: G.locationIcon
                    }),
                    canListenIn: s,
                    buttonText: e,
                    onClose: () => (0, p.ji)({ stageId: null == n ? void 0 : n.id }),
                    users: o.length > 5 ? o.slice(0, 5) : o,
                    overflowUsers: c < 1 ? null : (0, a.jsxs)('div', {
                        className: G.pill,
                        children: [
                            (0, a.jsx)(u.HeadphonesIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 12,
                                height: 12,
                                className: G.pillIcon
                            }),
                            (0, a.jsx)(u.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                className: G.pillLabel,
                                children: c
                            })
                        ]
                    })
                };
            }
            if (t.entity_type === j.WX.EXTERNAL) {
                let e = (0, N.cS)(t);
                if (null == e)
                    return { noticeType: null };
                let n = m.ZP.getUserCount(t.id, g);
                return {
                    noticeType: 1,
                    title: t.name,
                    location: (0, T.m)(e, !0),
                    locationIcon: (0, a.jsx)(u.LocationIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 16,
                        height: 16,
                        className: G.locationIcon
                    }),
                    canListenIn: !1,
                    buttonText: U.Z.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE,
                    onClose: () => (0, p.ji)({ eventId: null == t ? void 0 : t.id }),
                    users: null == l ? [] : [l],
                    overflowUsers: n < 1 ? null : (0, a.jsxs)('div', {
                        className: G.pill,
                        children: [
                            (0, a.jsx)(u.StarIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 12,
                                height: 12,
                                className: G.pillIcon
                            }),
                            (0, a.jsx)(u.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                className: G.pillLabel,
                                children: n
                            })
                        ]
                    })
                };
            } else if (t.entity_type === j.WX.VOICE && null != i) {
                let e = (0, h.KS)(i), n = m.ZP.getUserCount(t.id, g);
                return {
                    noticeType: 2,
                    title: t.name,
                    location: i.name,
                    locationIcon: null != e ? (0, a.jsx)(e, {
                        size: 'xs',
                        color: 'currentColor',
                        className: G.locationIcon
                    }) : null,
                    canListenIn: s,
                    buttonText: U.Z.Messages.GUILD_EVENT_JOIN,
                    onClose: () => (0, p.ji)({ eventId: null == t ? void 0 : t.id }),
                    users: null == l ? [] : [l],
                    overflowUsers: n < 1 ? null : (0, a.jsxs)('div', {
                        className: G.pill,
                        children: [
                            (0, a.jsx)(u.StarIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 12,
                                height: 12,
                                className: G.pillIcon
                            }),
                            (0, a.jsx)(u.Text, {
                                variant: 'text-xs/medium',
                                color: 'header-secondary',
                                className: G.pillLabel,
                                children: n
                            })
                        ]
                    })
                };
            }
        }
        return { noticeType: null };
    }({
        guildEvent: s,
        stageInstance: l,
        activeChannel: i,
        canConnect: F,
        myRole: Y,
        eventCreator: z,
        speakers: H,
        listenerCount: V,
        isEventNoticeHidden: k,
        isStageNoticeHidden: w,
        isStudyRoomNotice: n
    }), [
        s,
        l,
        i,
        F,
        Y,
        z,
        H,
        V,
        k,
        w,
        n
    ]);
    return null == K ? null : (0, a.jsxs)('div', {
        className: G.container,
        children: [
            null != en ? (0, a.jsx)(u.Clickable, {
                onClick: en,
                className: G.close,
                'aria-label': U.Z.Messages.DISMISS,
                children: (0, a.jsx)(u.CloseSmallIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: G.closeIcon
                })
            }) : null,
            (0, a.jsxs)('div', {
                className: G.header,
                children: [
                    (0, a.jsx)(D.Z, {
                        color: d.Z.unsafe_rawColors.GREEN_230.css,
                        width: 16,
                        height: 16
                    }),
                    (0, a.jsx)(u.Text, {
                        variant: 'text-xs/semibold',
                        color: 'text-positive',
                        children: U.Z.Messages.LIVE
                    })
                ]
            }),
            (ee.length > 0 || null != et) && (0, a.jsxs)('div', {
                className: G.participants,
                children: [
                    ee.map(e => (0, a.jsx)(u.Popout, {
                        preload: () => (0, x.W)(e, { guildId: t.id }),
                        renderPopout: n => (0, a.jsx)(P.Z, {
                            ...n,
                            location: 'LiveChannelNotice',
                            userId: e.id,
                            guildId: t.id,
                            newAnalyticsLocations: [E.Z.AVATAR]
                        }),
                        position: 'right',
                        children: n => (0, a.jsx)(u.Avatar, {
                            ...n,
                            src: e.getAvatarURL(t.id, 24),
                            'aria-label': e.username,
                            size: u.AvatarSizes.SIZE_24,
                            className: G.avatar
                        })
                    }, e.id)),
                    et
                ]
            }),
            (0, a.jsx)(u.Text, {
                variant: 'text-md/medium',
                color: 'header-primary',
                className: o()(G.title, G.live),
                children: q
            }),
            (0, a.jsxs)('div', {
                className: G.locationContainer,
                children: [
                    X,
                    (0, a.jsx)(u.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        className: G.location,
                        children: Q
                    })
                ]
            }),
            J || 1 === K ? (0, a.jsx)(u.Button, {
                size: u.Button.Sizes.SMALL,
                color: u.Button.Colors.GREEN,
                onClick: () => {
                    if (J)
                        null != i && null != i.getGuildId() && ((0, Z.Cq)(i), (0, A.XU)(i.getGuildId(), i.id));
                    else {
                        if (null == s)
                            return;
                        (0, I.bO)({ eventId: s.id });
                    }
                },
                className: G.button,
                fullWidth: !0,
                children: $
            }) : null
        ]
    });
}
