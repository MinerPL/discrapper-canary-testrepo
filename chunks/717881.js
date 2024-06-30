n.d(t, {
    P: function () {
        return P;
    }
});
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(442837), l = n(481060), u = n(620662), c = n(841784), d = n(850827), _ = n(812206), E = n(202458), f = n(220779), h = n(142550), p = n(954017), m = n(314091), I = n(159244), T = n(574176), g = n(952164), S = n(199902), A = n(592125), N = n(430824), v = n(496675), O = n(979651), R = n(543595), C = n(626135), y = n(153066), D = n(981631), L = n(689938), b = n(525601);
function M(e) {
    let {
        type: t,
        source: n,
        activity: i,
        applicationStream: a,
        user: o,
        guildId: s,
        channelId: u,
        onAction: _,
        isEmbedded: E = (0, c.Z)(i),
        actionColor: f
    } = e;
    return (0, r.jsx)(d.Z, {
        className: (0, y.l)(b, 'actions', t),
        type: t,
        source: n,
        activity: i,
        applicationStream: a,
        user: o,
        guildId: s,
        look: l.Button.Looks.FILLED,
        color: null != f ? f : l.Button.Colors.PRIMARY,
        channelId: u,
        onAction: _,
        isEmbedded: E
    });
}
let P = R.Z.Types;
t.Z = function (e) {
    let {
            activity: t,
            user: n,
            useStoreStream: a = !0,
            showActions: l = !0,
            hideHeader: c = !1,
            showChannelDetails: d = !1,
            analyticsParams: y,
            ...P
        } = e, U = (0, s.e7)([
            O.Z,
            A.Z
        ], () => {
            var e;
            return A.Z.getChannel(null === (e = O.Z.getVoiceStateForUser(n.id)) || void 0 === e ? void 0 : e.channelId);
        }), {enableHangStatus: w} = T.n.useExperiment({
            guildId: null == U ? void 0 : U.guild_id,
            location: 'UserActivityContainer'
        }, { autoTrackExposure: !1 }), x = (0, s.e7)([S.Z], () => a ? S.Z.getAnyStreamForUser(n.id) : null), G = w && v.Z.can(D.Plq.CONNECT, U), k = (null == t ? void 0 : t.type) === D.IIU.HANG_STATUS && G ? U : null, B = (0, s.e7)([
            N.Z,
            O.Z,
            A.Z
        ], () => {
            var e, r;
            return (0, u.Z)(t, D.xjy.EMBEDDED) ? N.Z.getGuild(null === (e = A.Z.getChannel(null === (r = O.Z.getVoiceStateForSession(n.id, null == t ? void 0 : t.session_id)) || void 0 === r ? void 0 : r.channelId)) || void 0 === e ? void 0 : e.getGuildId()) : null != k ? N.Z.getGuild(k.getGuildId()) : null;
        }), F = (0, s.e7)([N.Z], () => null != x ? N.Z.getGuild(x.guildId) : null), V = (0, s.e7)([_.Z], () => {
            if (null != t)
                return null != t.application_id ? _.Z.getApplication(t.application_id) : _.Z.getApplicationByName(t.name);
            return null;
        }), H = (0, E.Z)(), Z = (0, I.Z)(n), Y = H && null != t && Z;
    return (i.useEffect(() => {
        (null == t ? void 0 : t.type) === D.IIU.HANG_STATUS && G && C.default.track(D.rMx.VIEW_HANG_STATUS, {
            source: 'UserProfilePopout',
            guild_id: null == k ? void 0 : k.guild_id,
            channel_id: null == k ? void 0 : k.id
        });
    }, [
        null == t ? void 0 : t.type,
        G,
        k
    ]), (null == t ? void 0 : t.type) !== D.IIU.HANG_STATUS || G) ? (0, r.jsx)(R.Z, {
        ...P,
        activity: t,
        user: n,
        application: V,
        hideHeader: c,
        activityGuild: null != B ? B : F,
        showReactions: Y,
        showChannelDetails: d,
        channel: d ? U : void 0,
        renderActions: l ? () => (0, r.jsxs)('div', {
            className: o()(Y && b.actionsWrapper),
            children: [
                (0, r.jsx)(M, {
                    ...P,
                    applicationStream: x,
                    activity: t,
                    user: n
                }),
                Y && (0, r.jsx)(f.ZP, {
                    showReact: !0,
                    showReply: !0,
                    popoutProps: {
                        replyHeaderText: L.Z.Messages.ACTIVITY_REACTION_REPLY_TITLE.format({ activity: t.name }),
                        replyPlaceholder: L.Z.Messages.TEXTAREA_PLACEHOLDER.format({ channel: '@'.concat(n.globalName) })
                    },
                    onInteraction: e => {
                        let {
                            interactionType: r,
                            emoji: i,
                            reply: a
                        } = e;
                        C.default.track(D.rMx.ACTIVITY_REACTOR_INTERACTED, {
                            application_id: t.application_id,
                            interaction_type: r,
                            ...y
                        }), r === h.L.ReactSubmit && null != i && (0, p.sendReactionToActivity)({
                            reaction: i,
                            user: n,
                            activity: t,
                            application: V,
                            altText: (0, m.xC)(n, t),
                            stream: x
                        }), r === h.L.ReplySubmit && null != a && (0, p.sendReplyToActivity)({
                            reply: a,
                            user: n,
                            activity: t,
                            application: V,
                            altText: (0, m.xC)(n, t),
                            stream: x
                        });
                    }
                })
            ]
        }) : null,
        onOpenSpotifyTrack: g.aG,
        onOpenSpotifyArtist: g.d$,
        onOpenSpotifyAlbum: g.Z5
    }) : null;
};
