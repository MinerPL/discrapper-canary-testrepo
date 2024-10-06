n.d(t, {
    Z: function () {
        return H;
    }
}),
    n(47120);
var l = n(735250),
    a = n(470079),
    i = n(442837),
    r = n(481060),
    s = n(278323),
    o = n(224706),
    u = n(287734),
    c = n(2052),
    d = n(906732),
    h = n(835473),
    m = n(592745),
    x = n(592125),
    E = n(757266),
    v = n(650774),
    _ = n(430824),
    C = n(283595),
    p = n(496675),
    f = n(699516),
    T = n(944486),
    g = n(594174),
    I = n(979651),
    N = n(181106),
    Z = n(417363),
    P = n(358085),
    M = n(804739),
    L = n(317381),
    S = n(638880),
    A = n(255621),
    R = n(452634),
    y = n(527805),
    O = n(620662),
    j = n(275920),
    w = n(915863),
    b = n(701488),
    D = n(981631),
    U = n(689938);
function H(e) {
    var t, n;
    let { activity: H, embeddedActivity: B, user: k, onAction: V, isEmbedded: G = !1, ButtonComponent: F = w.Z, ...Y } = e,
        { analyticsLocations: z } = (0, d.ZP)(),
        [W, q] = a.useState(!1),
        J = (0, i.e7)([g.default], () => g.default.getCurrentUser()),
        K = k.id === (null == J ? void 0 : J.id),
        X = null !== (t = null == B ? void 0 : B.applicationId) && void 0 !== t ? t : null == H ? void 0 : H.application_id,
        $ = (0, R.Z)({
            channelId: null == B ? void 0 : B.channelId,
            userId: k.id,
            activity: H
        }),
        Q = (0, i.e7)(
            [C.Z, m.Z, Z.Z, E.Z],
            () =>
                G ||
                (null != X &&
                    (0, M.t)({
                        LibraryApplicationStore: C.Z,
                        LaunchableGameStore: m.Z,
                        DispatchApplicationStore: Z.Z,
                        ConnectedAppsStore: E.Z,
                        applicationId: X
                    }))
        ),
        ee = (0, i.e7)([L.ZP], () =>
            Array.from(L.ZP.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, channelId: n } = e;
                return (t === (null == H ? void 0 : H.application_id) || t === (null == B ? void 0 : B.applicationId)) && n === $;
            })
        ),
        et = (0, i.e7)([N.Z], () => null != H && null != H.application_id && N.Z.getState(H.application_id, D.mFx.JOIN) === D.OcF.LOADING),
        [en] = (0, h.Z)((null == B ? void 0 : B.applicationId) != null ? [null == B ? void 0 : B.applicationId] : (null == H ? void 0 : H.application_id) != null ? [null == H ? void 0 : H.application_id] : []),
        el = (0, y.s5)({
            userId: k.id,
            activity: H,
            channelId: $,
            application: en
        }),
        ea = (0, i.e7)([x.Z, _.Z, v.Z, f.Z, T.Z, I.Z, p.Z], () =>
            null != B
                ? el === y.Fw.CAN_JOIN
                : null != H
                  ? (0, A.Z)({
                        user: k,
                        activity: H,
                        application: en,
                        channelId: $,
                        currentUser: J,
                        isEmbedded: G,
                        ChannelStore: x.Z,
                        GuildStore: _.Z,
                        GuildMemberCountStore: v.Z,
                        RelationshipStore: f.Z,
                        SelectedChannelStore: T.Z,
                        VoiceStateStore: I.Z,
                        PermissionStore: p.Z
                    })
                  : void 0
        ),
        ei = (0, i.e7)([L.ZP], () => Array.from(L.ZP.getSelfEmbeddedActivities().values()).some((e) => e.applicationId === (null == B ? void 0 : B.applicationId) && e.channelId === (null == B ? void 0 : B.channelId))),
        er = (0, c.O)(),
        es = !P.isPlatformEmbedded;
    if (!((0, O.Z)(H, D.xjy.JOIN) || G) || null == X) return null;
    let eo = !K || (G && !ei),
        eu = eo && (es || Q) && !W && !ee && (!G || ea),
        ec = null;
    eo ? !es && !Q && null != H && (ec = U.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({ name: H.name })) : (ec = U.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF);
    let ed = null !== (n = null == B ? void 0 : B.launchId) && void 0 !== n ? n : null == H ? void 0 : H.session_id,
        eh = async (e, t) => {
            var n, l;
            if (null == ed || null == X) return;
            let a = (0, O.Z)(t, D.xjy.EMBEDDED),
                i = T.Z.getVoiceChannelId(),
                r = x.Z.getChannel(i);
            await o.Z.join({
                userId: e.id,
                sessionId: ed,
                applicationId: X,
                channelId: i,
                messageId: null,
                intent: b.Ws.PLAY,
                embedded: a,
                partyId: null != t ? (null == t ? void 0 : null === (n = t.party) || void 0 === n ? void 0 : n.id) : '',
                locationObject: er.location,
                analyticsLocations: z
            }),
                !a &&
                    (0, j.Z)({
                        type: D.q5t.JOIN,
                        userId: e.id,
                        guildId: null == r ? void 0 : r.guild_id,
                        channelId: i,
                        channelType: null == r ? void 0 : r.type,
                        applicationId: X,
                        partyId: null != t ? (null == t ? void 0 : null === (l = t.party) || void 0 === l ? void 0 : l.id) : '',
                        locationObject: er.location,
                        analyticsLocations: z
                    });
        },
        em = async () => {
            let e = !1;
            if (G) {
                if (!ea || null == $ || null == X) return;
                e = await (0, S.Z)({
                    applicationId: X,
                    activityChannelId: $,
                    locationObject: er.location,
                    analyticsLocations: z
                });
            }
            if (!e) {
                let e;
                ea && (null == V || V(), eh(k, H)),
                    q(!0),
                    null != H &&
                        (e = await s.Z.sendActivityInviteUser({
                            type: D.mFx.JOIN_REQUEST,
                            userId: k.id,
                            activity: H,
                            location: D.Sbl.PROFILE_POPOUT
                        })),
                    null != e && u.default.selectPrivateChannel(e.id);
            }
        },
        ex = ea ? U.Z.Messages.JOIN : U.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
    return (
        G && (ex = U.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY),
        ei && (ex = U.Z.Messages.EMBEDDED_ACTIVITIES_JOINED),
        (0, l.jsx)(
            r.Tooltip,
            {
                text: ec,
                children: (e) => {
                    let { onMouseEnter: t, onMouseLeave: n } = e;
                    return (0, l.jsx)(F, {
                        onClick: em,
                        onMouseEnter: t,
                        onMouseLeave: n,
                        disabled: !eu,
                        submitting: et,
                        fullWidth: !0,
                        ...Y,
                        children: ex
                    });
                }
            },
            'join'
        )
    );
}
