n.d(t, {
    Z: function () {
        return V;
    }
}), n(47120);
var i = n(735250);
n(470079);
var a = n(120356), l = n.n(a), s = n(442837), r = n(481060), o = n(99690), c = n(40851), u = n(657305), d = n(835473), h = n(12498), p = n(933557), m = n(471445), _ = n(554747), f = n(854698), E = n(897669), C = n(984370), g = n(910611), I = n(454585), x = n(134483), T = n(210975), N = n(809244), v = n(618158), S = n(366695), Z = n(502568), A = n(792125), M = n(358221), b = n(362721), R = n(887012), j = n(613548), L = n(221888), P = n(339340), O = n(354459), y = n(981631), D = n(231338), k = n(689938), U = n(254772), w = n(622322);
function B(e) {
    let {
            focusedParticipant: t,
            channel: n
        } = e, a = (0, c.bp)(), l = (0, s.e7)([M.Z], () => M.Z.getLayout(n.id, a));
    return (0, i.jsx)(v.Z, {
        children: (0, i.jsx)(L.Z, {
            className: U.participants,
            participant: t,
            maxVisibleUsers: 5,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: a === y.IlC.POPOUT || l === y.AEg.FULL_SCREEN
        })
    });
}
function H(e) {
    let {
            user: t,
            channel: n,
            stream: a,
            color: l
        } = e, s = (0, N.Z)(n, t, a);
    return null == t || null == a ? null : (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.Z, {
                className: U.avatar,
                size: r.AvatarSizes.SIZE_24,
                user: t,
                animate: !1
            }),
            (0, i.jsx)(r.Text, {
                className: U.playingText,
                variant: 'text-md/medium',
                color: l,
                children: s
            })
        ]
    });
}
function G(e) {
    let t, {
            focusedApplication: n,
            focusedParticipant: a,
            channel: l
        } = e, s = (0, R.Z)(l, !0), o = (0, _.qY)(l.id), c = null != o ? (0, f.DK)(o) : null, d = null != o;
    if ((null == a ? void 0 : a.type) === O.fO.ACTIVITY)
        null != n && (t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(Z.ZP.Divider, { className: U.divider }),
                (0, i.jsx)(S.Z, {
                    game: n,
                    className: U.activityIcon
                }),
                (0, i.jsx)(r.Text, {
                    className: U.playingText,
                    variant: 'text-md/normal',
                    color: 'none',
                    children: (0, u.Z)(n.name)
                }),
                s && (0, i.jsx)(B, {
                    channel: l,
                    focusedParticipant: a
                })
            ]
        }));
    else if ((null == a ? void 0 : a.type) === O.fO.STREAM) {
        let e = a.user, n = a.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(Z.ZP.Divider, { className: U.divider }),
                (0, i.jsx)(H, {
                    user: e,
                    channel: l,
                    stream: n,
                    color: s ? 'header-primary' : 'none'
                }),
                s && (0, i.jsx)(B, {
                    channel: l,
                    focusedParticipant: a
                })
            ]
        });
    } else
        d && (t = (0, i.jsx)(E.Z, {
            guildEvent: o,
            recurrenceId: c
        }));
    return (0, i.jsx)('div', {
        className: U.container,
        children: t
    });
}
function V(e) {
    let {
            channel: t,
            guild: a,
            appContext: o,
            inCall: c,
            isChatOpen: u,
            exitFullScreen: _
        } = e, {focusedParticipant: f} = (0, s.cj)([M.Z], () => ({
            focusedParticipant: M.Z.getSelectedParticipant(t.id),
            participantsOpen: M.Z.getParticipantsOpen(t.id)
        }), [t.id]), E = (0, p.ZP)(t), N = (0, m.KS)(t), [v] = (0, d.Z)((null == f ? void 0 : f.type) === O.fO.ACTIVITY ? [f.id] : []), S = k.Z.Messages.VOICE_CHANNEL;
    t.isDM() ? S = k.Z.Messages.DM : t.isGroupDM() && (S = k.Z.Messages.GROUP_DM);
    let R = (0, s.e7)([h.Z], () => h.Z.getChannelStatus(t)), L = t.isGuildVoice() && c && null != R && R.length > 0, B = (0, b.Z)(t), H = L ? (0, i.jsx)(r.Tooltip, {
            text: k.Z.Messages.VOICE_CHANNEL_SET_STATUS,
            delay: 500,
            position: 'bottom',
            shouldShow: B,
            children: e => (0, i.jsxs)(r.Clickable, {
                ...e,
                className: l()(U.channelStatusClickable, { [U.hoverable]: B }),
                onClick: B ? V : void 0,
                children: [
                    (0, i.jsx)(r.Text, {
                        variant: 'text-xs/normal',
                        className: l()(U.channelStatus, w.markup, { [U.hoverable]: B }),
                        children: I.Z.parseVoiceChannelStatus(R, !0, { channelId: t.id })
                    }),
                    B && (0, i.jsx)(r.PencilIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: l()(U.pencilIcon, U.hoverable),
                        width: 14,
                        height: 14
                    })
                ]
            })
        }) : null;
    function V() {
        (0, r.openModalLazy)(async () => {
            let {default: e} = await Promise.resolve().then(n.bind(n, 339340));
            return n => (0, i.jsx)(e, {
                channel: t,
                ...n
            });
        }, { modalKey: P.VOICE_CHANNEL_STATUS_MODAL_KEY });
    }
    let F = (0, T.m$)({
        channelId: t.id,
        location: 'ChannelCallHeader'
    });
    return (0, i.jsxs)('div', {
        className: U.subtitleContainer,
        children: [
            (0, i.jsxs)(Z.ZP, {
                onDoubleClick: C.O,
                transparent: !0,
                className: (0, A.Q)(D.BR.DARK),
                childrenBottom: H,
                toolbar: (0, i.jsx)(j.Z, {
                    inPopout: o === y.IlC.POPOUT,
                    channel: t,
                    appContext: o,
                    inCall: c,
                    isChatOpen: u,
                    exitFullScreen: _
                }),
                children: [
                    null != N ? (0, i.jsx)(Z.ZP.Icon, {
                        icon: N,
                        disabled: !0,
                        'aria-label': S
                    }) : null,
                    (0, i.jsx)(Z.ZP.Title, {
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [
                                E,
                                F && (0, i.jsx)(r.ShieldLockIcon, {
                                    size: 'xxs',
                                    'aria-label': k.Z.Messages.E2EE_CALL_VERIFIED_A11Y,
                                    color: r.tokens.colors.INTERACTIVE_NORMAL,
                                    className: U.secureFramesIcon
                                })
                            ]
                        })
                    }),
                    (0, i.jsx)(g.TS, {
                        channel: t,
                        guild: a
                    }),
                    (0, i.jsx)(G, {
                        focusedApplication: v,
                        focusedParticipant: f,
                        channel: t
                    })
                ]
            }),
            (0, i.jsx)(x.Z, { channelId: t.id })
        ]
    });
}
