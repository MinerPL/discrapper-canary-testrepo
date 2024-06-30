n.d(t, {
    Co: function () {
        return Q;
    },
    bZ: function () {
        return i;
    },
    gt: function () {
        return H;
    }
}), n(47120);
var i, s, a = n(735250), r = n(470079), l = n(120356), o = n.n(l), c = n(442837), d = n(481060), u = n(471445), _ = n(986332), E = n(662842), h = n(703656), I = n(922482), m = n(565799), p = n(501655), g = n(192079), T = n(427679), S = n(448206), C = n(496675), N = n(938475), f = n(602623), A = n(626135), Z = n(823379), L = n(15274), v = n(924301), O = n(504160), R = n(151864), x = n(835184), P = n(725436), b = n(497656), M = n(79874), D = n(554747), y = n(230900), j = n(854698), U = n(139712), G = n(765305), w = n(981631), k = n(689938), B = n(267455);
let H = r.memo(function (e) {
    let {
            heading: t,
            location: n,
            locationIcon: i,
            details: s,
            detailsIcon: r,
            topic: l,
            onClickCloseIcon: c,
            onClickTopicText: u,
            children: _
        } = e, E = (0, a.jsx)(d.Text, {
            color: 'header-primary',
            variant: 'text-md/semibold',
            className: B.eventName,
            children: l
        });
    return (0, a.jsxs)('div', {
        className: B.channelNotice,
        children: [
            (0, a.jsxs)('div', {
                className: o()(B.textBlock, B.singleLine),
                children: [
                    (0, a.jsx)('div', { className: B.liveIndicator }),
                    (0, a.jsx)(d.Text, {
                        color: 'text-positive',
                        variant: 'text-xs/bold',
                        className: B.liveNowText,
                        children: t
                    }),
                    null != c && (0, a.jsx)(d.Clickable, {
                        onClick: c,
                        className: B.closeIcon,
                        'aria-label': k.Z.Messages.CLOSE,
                        children: (0, a.jsx)(d.CloseSmallIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
                ]
            }),
            null == u ? E : (0, a.jsx)(d.Button, {
                size: d.Button.Sizes.MIN,
                look: d.Button.Looks.LINK,
                color: d.Button.Colors.PRIMARY,
                onClick: u,
                children: E
            }),
            (0, a.jsxs)('div', {
                className: o()(B.textBlock, B.singleLine),
                children: [
                    i,
                    (0, a.jsx)(d.Text, {
                        color: 'header-secondary',
                        variant: 'text-xs/normal',
                        className: B.channelName,
                        children: n
                    }),
                    null != s && null != r && (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(d.Text, {
                                className: B.dotDivider,
                                color: 'header-secondary',
                                variant: 'text-xs/normal',
                                children: '\u2022'
                            }),
                            r,
                            (0, a.jsx)(d.Text, {
                                color: 'header-secondary',
                                variant: 'text-xs/normal',
                                children: s
                            })
                        ]
                    })
                ]
            }),
            _
        ]
    });
});
function V(e) {
    let {
            guildEvent: t,
            channel: n
        } = e, i = (0, c.Wu)([N.ZP], () => N.ZP.getVoiceStatesForChannel(n).map(e => {
            let {user: t} = e;
            return t;
        }), [n]), s = (0, u.KS)(n);
    return (0, a.jsx)(H, {
        onClickCloseIcon: () => (0, O.ji)({ eventId: null == t ? void 0 : t.id }),
        heading: k.Z.Messages.STAGE_CHANNEL_LIVE_NOW,
        topic: t.name,
        location: n.name,
        locationIcon: null != s ? (0, a.jsx)(s, {
            size: 'xs',
            color: 'currentColor',
            className: B.stageIcon
        }) : null,
        children: (0, a.jsx)(Q, {
            channel: n,
            speakers: i,
            voiceType: 1
        })
    });
}
function F(e) {
    let {
            guildEvent: t,
            noticeType: n
        } = e, i = (0, j.DK)(t), s = (0, c.e7)([v.ZP], () => v.ZP.isInterestedInEventRecurrence(t.id, i), [
            t.id,
            i
        ]), r = (0, c.e7)([x.Z], () => x.Z.getUpcomingNoticeSeenTime(t.id), [t.id]);
    return !s && null == r && (0, O._6)(t.id), (0, a.jsxs)(d.Button, {
        fullWidth: !0,
        className: B.joinButton,
        innerClassName: B.rsvpButton,
        onClick: function () {
            (0, U.Z)(t.id, null, t.guild_id, () => setTimeout(() => (0, O.L_)(t.id), 1000)), A.default.track(w.rMx.CHANNEL_NOTICE_CTA_CLICKED, {
                guild_id: t.guild_id,
                notice_type: n
            });
        },
        look: s ? d.Button.Looks.OUTLINED : d.Button.Looks.FILLED,
        color: s ? d.Button.Colors.TRANSPARENT : d.Button.Colors.GREEN,
        size: d.Button.Sizes.SMALL,
        children: [
            s ? (0, a.jsx)(d.CheckmarkLargeIcon, {
                size: 'custom',
                color: 'currentColor',
                width: 16,
                height: 16,
                className: B.buttonIcon
            }) : (0, a.jsx)(d.BellIcon, {
                size: 'custom',
                color: 'currentColor',
                width: 16,
                height: 16,
                className: B.buttonIcon
            }),
            k.Z.Messages.INDICATE_RSVP
        ]
    });
}
function Y(e) {
    var t;
    let {
            guildEvent: n,
            noticeType: i
        } = e, s = (0, y.cS)(n), l = null != s ? (0, P.m)(s, !0) : null, c = (0, y.nE)(n), _ = (0, u.KS)(c), {
            startTime: E,
            endTime: h
        } = (0, M.ZP)(n), {
            startDateTimeString: I,
            upcomingEvent: m,
            diffMinutes: p
        } = (0, j.ub)(E.toISOString(), null == h ? void 0 : h.toISOString()), g = m ? p > 0 ? k.Z.Messages.STARTING_IN_MINUTES.format({ minutes: p }) : k.Z.Messages.STARTING_SOON : k.Z.Messages.STARTING_ON_DATE.format({ date: I });
    return r.useEffect(() => {
        A.default.track(w.rMx.CHANNEL_NOTICE_VIEWED, {
            notice_type: i,
            guild_id: n.guild_id
        });
    }, [
        n,
        i
    ]), (0, a.jsxs)('div', {
        className: B.channelNotice,
        children: [
            (0, a.jsxs)('div', {
                className: B.textBlock,
                children: [
                    (0, a.jsx)(d.Clickable, {
                        onClick: () => (0, L.bO)({ eventId: n.id }),
                        className: B.eventNameClickable,
                        children: (0, a.jsx)(d.Text, {
                            color: 'header-primary',
                            variant: 'text-md/semibold',
                            className: B.eventName,
                            children: n.name
                        })
                    }),
                    (0, a.jsx)(d.Clickable, {
                        onClick: () => {
                            A.default.track(w.rMx.CHANNEL_NOTICE_CLOSED, {
                                notice_type: i,
                                guild_id: n.guild_id
                            }), (0, O.L_)(n.id);
                        },
                        className: B.closeIcon,
                        'aria-label': k.Z.Messages.CLOSE,
                        children: (0, a.jsx)(d.CloseSmallIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        })
                    })
                ]
            }),
            (0, a.jsxs)('div', {
                className: o()(B.textBlock, B.singleLine),
                children: [
                    (0, a.jsx)(d.CalendarIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: B.stageIcon,
                        width: 16,
                        height: 16
                    }),
                    (0, a.jsx)(d.Text, {
                        color: 'header-secondary',
                        variant: 'text-xs/normal',
                        className: B.startTime,
                        children: g
                    })
                ]
            }),
            (0, a.jsxs)('div', {
                className: o()(B.textBlock, B.singleLine),
                children: [
                    null != _ ? (0, a.jsx)(_, {
                        size: 'xs',
                        color: 'currentColor',
                        className: B.stageIcon
                    }) : (0, a.jsx)(d.LocationIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 16,
                        height: 16,
                        className: B.stageIcon
                    }),
                    (0, a.jsx)(d.Text, {
                        color: 'header-secondary',
                        variant: 'text-xs/normal',
                        className: B.channelName,
                        children: null !== (t = null == c ? void 0 : c.name) && void 0 !== t ? t : l
                    })
                ]
            }),
            (0, a.jsx)(F, {
                guildEvent: n,
                noticeType: i
            })
        ]
    });
}
function W(e) {
    let {guildEvent: t} = e, n = (0, y.cS)(t);
    return null == n ? null : (0, a.jsx)(H, {
        onClickCloseIcon: () => (0, O.ji)({ eventId: null == t ? void 0 : t.id }),
        heading: k.Z.Messages.HAPPENING_NOW,
        topic: t.name,
        location: (0, P.m)(n, !0),
        locationIcon: (0, a.jsx)(d.LocationIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 16,
            height: 16,
            className: B.stageIcon
        }),
        children: (0, a.jsx)(z, { guildEvent: t })
    });
}
function z(e) {
    let {guildEvent: t} = e, n = r.useCallback(() => {
            (0, L.bO)({ eventId: t.id });
        }, [t]);
    return (0, a.jsx)(d.Button, {
        fullWidth: !0,
        className: B.joinButton,
        onClick: n,
        color: d.Button.Colors.GREEN,
        size: d.Button.Sizes.SMALL,
        children: k.Z.Messages.SEE_DETAIL
    });
}
function K(e) {
    let {
        channel: t,
        label: n
    } = e;
    return (0, a.jsx)(d.Button, {
        fullWidth: !0,
        className: B.joinButton,
        onClick: () => {
            null != t && null != t.getGuildId() && ((0, I.Cq)(t), (0, h.XU)(t.getGuildId(), t.id));
        },
        color: d.Button.Colors.GREEN,
        size: d.Button.Sizes.SMALL,
        children: n
    });
}
function q(e) {
    let {
            stageInstance: t,
            channel: n
        } = e, i = (0, c.Wu)([m.Z], () => [...new Set(m.Z.getMutableParticipants(n.id, p.pV.SPEAKER).map(e => e.user))], [n.id]), s = (0, c.e7)([m.Z], () => m.Z.getParticipantCount(n.id, p.pV.AUDIENCE), [n.id]), r = k.Z.Messages.LISTENING_COUNT.format({ count: ''.concat(s) });
    return (0, a.jsx)(H, {
        onClickCloseIcon: () => (0, O.ji)({ stageId: null == t ? void 0 : t.id }),
        heading: k.Z.Messages.STAGE_CHANNEL_LIVE_NOW,
        location: n.name,
        details: r,
        detailsIcon: (0, a.jsx)(d.HeadphonesIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 14,
            height: 14,
            className: B.stageIcon
        }),
        locationIcon: (0, a.jsx)(d.StageIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 16,
            height: 16,
            className: B.stageIcon
        }),
        topic: t.topic,
        children: (0, a.jsx)(Q, {
            channel: n,
            speakers: i,
            voiceType: 2
        })
    });
}
function Q(e) {
    let {
            channel: t,
            speakers: n,
            voiceType: i
        } = e, s = t.getGuildId(), l = r.useMemo(() => n.slice(0, 3), [n]), u = (0, c.e7)([C.Z], () => C.Z.can(w.Plq.CONNECT, t)), _ = (0, S.Z)(t.id), E = k.Z.Messages.JOIN;
    switch (i) {
    case 1:
        E = k.Z.Messages.JOIN;
        break;
    case 2:
        E = k.Z.Messages.STAGE_CHANNEL_JOIN_BUTTON, (null == _ ? void 0 : _.speaker) ? E = k.Z.Messages.STAGE_CHANNEL_JOINED_SPEAKER_BUTTON : null != _ && (E = k.Z.Messages.STAGE_CHANNEL_JOINED_AUDIENCE_BUTTON);
        break;
    case 3:
        E = k.Z.Messages.HUB_STUDY_ROOM_NOTICE_VOICE_CTA;
        break;
    default:
        (0, Z.vE)(i);
    }
    return null == s ? null : (0, a.jsxs)(a.Fragment, {
        children: [
            l.length > 0 ? (0, a.jsxs)('div', {
                className: o()(B.textBlock, B.singleLine),
                children: [
                    (0, a.jsx)(f.Z, {
                        guildId: s,
                        users: l,
                        showUserPopout: !0,
                        size: f.u.SIZE_16
                    }),
                    (0, a.jsx)(d.Text, {
                        color: 'header-secondary',
                        variant: 'text-xs/normal',
                        className: B.userNames,
                        children: (0, g.ER)(s, l, null == t ? void 0 : t.id, n.length)
                    })
                ]
            }) : null,
            u && null == _ && (0, a.jsx)(K, {
                channel: t,
                label: E
            })
        ]
    });
}
(s = i || (i = {}))[s.VOICE = 1] = 'VOICE', s[s.STAGE = 2] = 'STAGE', s[s.STUDY_ROOM = 3] = 'STUDY_ROOM', t.ZP = r.memo(function (e) {
    let {guild: t} = e, {showRedesignedLiveChannelNotice: n} = (0, _.o)(!0), i = (0, b.y)(t.id), s = (0, D.k5)(t.id), r = (0, D.Vm)(t.id), l = (0, c.e7)([T.Z], () => T.Z.getStageInstanceByChannel(null == i ? void 0 : i.id), [i]), {
            isStageNoticeHidden: o,
            isEventNoticeHidden: d
        } = (0, c.cj)([R.Z], () => ({
            isStageNoticeHidden: R.Z.isLiveChannelNoticeHidden({ stageId: null == l ? void 0 : l.id }),
            isEventNoticeHidden: R.Z.isLiveChannelNoticeHidden({ eventId: null == s ? void 0 : s.id })
        }), [
            l,
            s
        ]), u = null, h = null != l && null != i && !o;
    if (n)
        return (0, a.jsx)(E.Z, { guild: t });
    null == s || d ? h && (u = (0, a.jsx)(q, {
        stageInstance: l,
        channel: i
    })) : s.entity_type === G.WX.STAGE_INSTANCE && h ? u = (0, a.jsx)(q, {
        stageInstance: l,
        channel: i
    }) : s.entity_type === G.WX.EXTERNAL ? u = (0, a.jsx)(W, { guildEvent: s }) : s.entity_type === G.WX.VOICE && null != i && (u = (0, a.jsx)(V, {
        guildEvent: s,
        channel: i
    }));
    let I = t.hasFeature(w.oNc.COMMUNITY) || t.hasFeature(w.oNc.HUB);
    if (null == u && null != r && !I) {
        let {
            upcomingEvent: e,
            noticeType: t
        } = r;
        u = (0, a.jsx)(Y, {
            guildEvent: e,
            noticeType: t
        });
    }
    return u;
});
