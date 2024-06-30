n.d(t, {
    Z: function () {
        return F;
    }
}), n(653041);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(392711), o = n.n(r), c = n(848246), u = n(442837), d = n(481060), h = n(320007), p = n(236091), m = n(569545), _ = n(517525), f = n(6242), E = n(757692), C = n(141321), g = n(44136), I = n(651183), x = n(618158), T = n(390322), N = n(616286), v = n(961048), S = n(179424), Z = n(786915), A = n(975146), M = n(991617), b = n(606304), R = n(594174), j = n(502568), L = n(805009), P = n(368666), O = n(74538), y = n(358221), D = n(887012), k = n(444253), U = n(355827), w = n(354459), B = n(981631), H = n(689938), G = n(605130);
function V(e) {
    let {
            channelId: t,
            guildId: n
        } = e, a = Date.now(), l = (0, u.e7)([
            b.Z,
            y.Z
        ], () => o()(b.Z.getSpeakers()).map(e => y.Z.getParticipant(t, e)).filter(e => null != e && e.type === w.fO.USER && e.speaking && !(0, g.ZP)(e)).sortBy(e => -b.Z.getSpeakingDuration(e.user.id, a)).slice(0, 3).value());
    return 0 === l.length ? null : (0, i.jsx)(i.Fragment, {
        children: l.map((e, t) => (0, i.jsx)(d.Tooltip, {
            position: 'bottom',
            color: d.Tooltip.Colors.GREY,
            text: H.Z.Messages.CHANNEL_CALL_CURRENT_SPEAKER.format({ username: e.user.username }),
            children: a => (0, i.jsx)(L.Z, {
                ...a,
                className: s()(G.speaker, { [G.last]: t === l.length - 1 }),
                user: e.user,
                speaking: !0,
                collapsed: !0,
                guildId: n
            })
        }, e.id))
    });
}
function F(e) {
    let {
            inPopout: t,
            channel: n,
            appContext: l,
            inCall: s,
            isChatOpen: r,
            exitFullScreen: o
        } = e, g = n.id, {
            voiceParticipantsHidden: b,
            selectedParticipant: L,
            userParticipantCount: H
        } = (0, u.cj)([y.Z], () => ({
            selectedParticipant: y.Z.getSelectedParticipant(g),
            voiceParticipantsHidden: y.Z.getVoiceParticipantsHidden(g),
            userParticipantCount: y.Z.getUserParticipantCount(g)
        }), [g]), F = (0, u.e7)([R.default], () => R.default.getCurrentUser()), W = (0, D.Z)(n), z = (0, O.So)(c.q.STREAM_HIGH_QUALITY), Y = (0, E.o)(L, F), K = (0, f.lL)('CallHeader', !0, F, Y), {
            preventIdle: q,
            allowIdle: X
        } = (0, x.Y)('popup'), Q = [];
    if (W) {
        let e = (null == L ? void 0 : L.type) === w.fO.STREAM ? (0, m.my)(L.id) : void 0, t = (null == L ? void 0 : L.type) === w.fO.ACTIVITY ? L.id : void 0;
        Q.push((0, i.jsx)(Z.Z, {
            className: G.button,
            channel: n,
            applicationId: t,
            stream: e,
            exitFullScreen: o,
            analyticsLocation: n.type === B.d4z.GUILD_VOICE ? B.ZY5.GUILD_CHANNEL : B.ZY5.DM_CHANNEL
        }, 'invite-button'));
    }
    return b && Q.push((0, i.jsx)(V, {
        channelId: g,
        guildId: n.guild_id
    }, 'current-speaker')), Q.push((0, i.jsx)(p.Z, {
        className: G.button,
        channelId: g
    }, 'clips-enabled-indicator')), (null == L ? void 0 : L.type) === w.fO.STREAM && (Q.push((0, i.jsx)(I.Z, {
        className: G.button,
        participant: L
    }, 'warning')), Q.push((0, i.jsx)(_.Z, {
        size: P.ZP.Sizes.LARGE,
        className: G.button,
        participant: L,
        showQuality: !0,
        premiumIndicator: z || K.enabled
    }, 'live-indicator'))), b && Q.push((0, i.jsx)(d.Popout, {
        position: 'bottom',
        renderPopout: () => (0, i.jsx)(T.Z, { children: (0, i.jsx)(U.Z, { channel: n }) }),
        children: (e, t) => {
            let {isShown: n} = t;
            return (0, a.createElement)(A.Z, {
                ...e,
                isActive: n,
                count: H,
                key: 'call-members',
                className: G.button
            });
        }
    }, 'call-members-popout')), s && Q.push(null != L ? (0, i.jsx)(S.Z, {
        className: G.button,
        channelId: g
    }, 'deselect-participant') : (0, i.jsx)(M.Z, {
        className: G.button,
        channelId: g,
        isHorizontal: !0
    }, 'select-participant')), !t && Q.push((0, i.jsx)(h.Z, { className: G.button }, 'clips')), Q.push((0, i.jsx)(C.Z, {
        onOpen: q,
        onClose: X,
        className: G.button
    }, 'recents')), Q.push((0, i.jsx)(d.Popout, {
        position: 'bottom',
        renderPopout: e => {
            let {closePopout: t} = e;
            return (0, i.jsx)(T.Z, {
                children: (0, i.jsx)(k.Z, {
                    channelId: g,
                    onClose: t,
                    appContext: l,
                    exitFullScreen: o
                })
            });
        },
        children: (e, t) => {
            let {isShown: n} = t;
            return (0, a.createElement)(v.Z, {
                ...e,
                key: 'more-options',
                isActive: n,
                className: G.lastButton
            });
        }
    }, 'more-options-popout')), !r && (Q.push((0, i.jsx)(j.ZP.Divider, { className: G.divider }, 'divider')), Q.push((0, i.jsx)(N.T, {
        channelId: n.id,
        className: G.chatButtonSpacer,
        disabled: !0
    }, 'chat-spacer'))), (0, i.jsx)(i.Fragment, { children: Q });
}
