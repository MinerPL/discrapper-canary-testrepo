n.d(t, {
    Z: function () {
        return F;
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
    h = n(895924),
    m = n(835473),
    x = n(592745),
    E = n(592125),
    _ = n(757266),
    p = n(650774),
    v = n(430824),
    T = n(283595),
    f = n(496675),
    g = n(699516),
    I = n(944486),
    C = n(594174),
    N = n(979651),
    P = n(181106),
    Z = n(417363),
    S = n(358085),
    M = n(804739),
    y = n(566620),
    A = n(317381),
    O = n(638880),
    R = n(255621),
    j = n(452634),
    w = n(527805),
    L = n(620662),
    b = n(275920),
    U = n(915863),
    D = n(701488),
    B = n(981631),
    k = n(689938);
function F(e) {
    var t, n;
    let { activity: F, embeddedActivity: G, user: H, onAction: V, isEmbedded: Y = !1, ButtonComponent: z = U.Z, ...W } = e,
        { analyticsLocations: J } = (0, d.ZP)(),
        [q, K] = a.useState(!1),
        X = (0, i.e7)([C.default], () => C.default.getCurrentUser()),
        $ = H.id === (null == X ? void 0 : X.id),
        Q = null !== (t = null == G ? void 0 : G.applicationId) && void 0 !== t ? t : null == F ? void 0 : F.application_id,
        ee = (0, j.Z)({
            channelId: null == G ? void 0 : G.channelId,
            userId: H.id,
            activity: F
        }),
        et = (0, i.e7)(
            [T.Z, x.Z, Z.Z, _.Z],
            () =>
                Y ||
                (null != Q &&
                    (0, M.t)({
                        LibraryApplicationStore: T.Z,
                        LaunchableGameStore: x.Z,
                        DispatchApplicationStore: Z.Z,
                        ConnectedAppsStore: _.Z,
                        applicationId: Q
                    }))
        ),
        en = (0, i.e7)([A.ZP], () =>
            Array.from(A.ZP.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, channelId: n } = e;
                return (t === (null == F ? void 0 : F.application_id) || t === (null == G ? void 0 : G.applicationId)) && n === ee;
            })
        ),
        el = (0, i.e7)([P.Z], () => null != F && null != F.application_id && P.Z.getState(F.application_id, B.mFx.JOIN) === B.OcF.LOADING),
        [ea] = (0, m.Z)((null == G ? void 0 : G.applicationId) != null ? [null == G ? void 0 : G.applicationId] : (null == F ? void 0 : F.application_id) != null ? [null == F ? void 0 : F.application_id] : []),
        ei = (0, w.s5)({
            userId: H.id,
            activity: F,
            channelId: ee,
            application: ea
        }),
        er = (0, i.e7)([E.Z, v.Z, p.Z, g.Z, I.Z, N.Z, f.Z], () =>
            null != G
                ? ei === w.Fw.CAN_JOIN
                : null != F
                  ? (0, R.Z)({
                        user: H,
                        activity: F,
                        application: ea,
                        channelId: ee,
                        currentUser: X,
                        isEmbedded: Y,
                        ChannelStore: E.Z,
                        GuildStore: v.Z,
                        GuildMemberCountStore: p.Z,
                        RelationshipStore: g.Z,
                        SelectedChannelStore: I.Z,
                        VoiceStateStore: N.Z,
                        PermissionStore: f.Z
                    })
                  : void 0
        ),
        es = (0, i.e7)([A.ZP], () => Array.from(A.ZP.getSelfEmbeddedActivities().values()).some((e) => e.applicationId === (null == G ? void 0 : G.applicationId) && e.channelId === (null == G ? void 0 : G.channelId))),
        eo = (0, c.O)(),
        eu = !S.isPlatformEmbedded;
    if (!((0, L.Z)(F, B.xjy.JOIN) || Y) || null == Q) return null;
    let ec = !$ || (Y && !es),
        ed = ec && (eu || et) && !q && !en && (!Y || er),
        eh = null;
    ec ? !eu && !et && null != F && (eh = k.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({ name: F.name })) : (eh = k.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF);
    let em = null !== (n = null == G ? void 0 : G.launchId) && void 0 !== n ? n : null == F ? void 0 : F.session_id,
        ex = async (e, t) => {
            var n, l;
            if (null == em || null == Q) return;
            let a = (0, L.Z)(t, B.xjy.EMBEDDED);
            await o.Z.join({
                userId: e.id,
                sessionId: em,
                applicationId: Q,
                channelId: I.Z.getVoiceChannelId(),
                messageId: null,
                intent: D.Ws.PLAY,
                embedded: a,
                partyId: null != t ? (null == t ? void 0 : null === (n = t.party) || void 0 === n ? void 0 : n.id) : '',
                locationObject: eo.location,
                analyticsLocations: J
            }),
                !a &&
                    (0, b.Z)({
                        type: B.q5t.JOIN,
                        userId: e.id,
                        applicationId: Q,
                        partyId: null != t ? (null == t ? void 0 : null === (l = t.party) || void 0 === l ? void 0 : l.id) : '',
                        locationObject: eo.location,
                        analyticsLocations: J
                    });
        },
        eE = async () => {
            let e = !1;
            if (Y) {
                if (!er || null == ee || null == Q) return;
                e = await (0, O.Z)({
                    applicationId: Q,
                    activityChannelId: ee,
                    locationObject: eo.location,
                    analyticsLocations: J,
                    commandOrigin: h.bB.VOICE_UI
                });
            }
            if (!e) {
                let e;
                er && (null == V || V(), ex(H, F)),
                    K(!0),
                    null != ee && null != Q
                        ? (e = await y.pu({
                              channelId: ee,
                              applicationId: Q,
                              userId: H.id,
                              location: B.Sbl.PROFILE_POPOUT
                          }))
                        : null != F &&
                          (e = await s.Z.sendActivityInviteUser({
                              type: B.mFx.JOIN_REQUEST,
                              userId: H.id,
                              activity: F,
                              location: B.Sbl.PROFILE_POPOUT
                          })),
                    null != e && u.default.selectPrivateChannel(e.id);
            }
        },
        e_ = er ? k.Z.Messages.JOIN : k.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
    return (
        Y && (e_ = k.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY),
        es && (e_ = k.Z.Messages.EMBEDDED_ACTIVITIES_JOINED),
        (0, l.jsx)(
            r.Tooltip,
            {
                text: eh,
                children: (e) => {
                    let { onMouseEnter: t, onMouseLeave: n } = e;
                    return (0, l.jsx)(z, {
                        onClick: eE,
                        onMouseEnter: t,
                        onMouseLeave: n,
                        disabled: !ed,
                        submitting: el,
                        fullWidth: !0,
                        ...W,
                        children: e_
                    });
                }
            },
            'join'
        )
    );
}
