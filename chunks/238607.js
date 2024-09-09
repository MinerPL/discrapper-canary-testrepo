n.d(t, {
    Z: function () {
        return B;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(278323),
    l = n(224706),
    u = n(287734),
    c = n(566620),
    d = n(317381),
    _ = n(638880),
    E = n(255621),
    f = n(452634),
    h = n(620662),
    p = n(841784),
    I = n(275920),
    m = n(906732),
    T = n(895924),
    S = n(835473),
    g = n(592745),
    A = n(592125),
    N = n(757266),
    O = n(650774),
    R = n(430824),
    v = n(283595),
    C = n(496675),
    y = n(699516),
    L = n(944486),
    D = n(979651),
    b = n(181106),
    M = n(417363),
    P = n(358085),
    U = n(804739),
    w = n(475413),
    x = n(981631),
    G = n(701488),
    k = n(689938);
function B(e) {
    let { user: t, currentUser: n, activity: B, onAction: F, onClose: V } = e,
        { analyticsLocations: H, newestAnalyticsLocation: Z } = (0, m.ZP)(),
        [Y] = (0, S.Z)([null == B ? void 0 : B.application_id]),
        j = (0, p.Z)(B),
        W = null == B ? void 0 : B.application_id,
        K = null == B ? void 0 : B.session_id,
        z = (0, f.Z)({
            activity: B,
            userId: t.id,
            channelId: void 0
        }),
        q =
            (0, a.e7)(
                [v.Z, g.Z, M.Z, N.Z],
                () =>
                    null != W &&
                    (0, U.t)({
                        applicationId: W,
                        LibraryApplicationStore: v.Z,
                        LaunchableGameStore: g.Z,
                        DispatchApplicationStore: M.Z,
                        ConnectedAppsStore: N.Z
                    })
            ) || j,
        Q = (0, a.e7)([d.ZP], () =>
            [...d.ZP.getSelfEmbeddedActivities().values()].some((e) => {
                let { applicationId: t, channelId: n } = e;
                return t === W && n === z;
            })
        ),
        X = (0, a.e7)([b.Z], () => null != W && b.Z.getState(W, x.mFx.JOIN) === x.OcF.LOADING),
        $ = (0, a.e7)([A.Z, R.Z, O.Z, y.Z, L.Z, D.Z, C.Z], () =>
            (0, E.Z)({
                user: t,
                activity: B,
                application: Y,
                channelId: z,
                currentUser: n,
                isEmbedded: j,
                ChannelStore: A.Z,
                GuildStore: R.Z,
                GuildMemberCountStore: O.Z,
                RelationshipStore: y.Z,
                SelectedChannelStore: L.Z,
                VoiceStateStore: D.Z,
                PermissionStore: C.Z
            })
        ),
        [J, ee] = i.useState(!1),
        et = !$ || J || Q || (P.isPlatformEmbedded && !q);
    if (null == W || (!(0, h.Z)(B, x.xjy.JOIN) && !j)) return null;
    let en = async () => {
            if (
                j &&
                $ &&
                null != z &&
                null != W &&
                (await (0, _.Z)({
                    applicationId: W,
                    activityChannelId: z,
                    locationObject: { page: x.ZY5.USER_PROFILE },
                    analyticsLocations: H,
                    commandOrigin: T.bB.USER_PROFILE
                }))
            ) {
                null == V || V();
                return;
            }
            if ($ && null != W && null != K) {
                var e, n;
                await l.Z.join({
                    userId: t.id,
                    sessionId: K,
                    applicationId: W,
                    channelId: L.Z.getVoiceChannelId(),
                    messageId: null,
                    intent: G.Ws.PLAY,
                    embedded: j,
                    partyId: null == B ? void 0 : null === (e = B.party) || void 0 === e ? void 0 : e.id,
                    locationObject: { page: x.ZY5.USER_PROFILE },
                    analyticsLocations: H
                }),
                    !j &&
                        (0, I.Z)({
                            type: x.q5t.JOIN,
                            userId: t.id,
                            partyId: null == B ? void 0 : null === (n = B.party) || void 0 === n ? void 0 : n.id,
                            applicationId: W,
                            analyticsLocations: H
                        });
            }
            if ((ee(!0), null != z && null != W))
                return c.pu({
                    channelId: z,
                    applicationId: W,
                    userId: t.id,
                    location: Z
                });
            if (null != B) {
                let e = await o.Z.sendActivityInviteUser({
                    type: x.mFx.JOIN_REQUEST,
                    userId: t.id,
                    activity: B,
                    location: x.Sbl.PROFILE_POPOUT
                });
                null != e && u.default.selectPrivateChannel(e.id);
            }
        },
        er = () => (t.id === n.id ? k.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : P.isPlatformEmbedded && !q && null != B ? k.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({ name: B.name }) : null);
    return j
        ? (0, r.jsx)(s.Tooltip, {
              text: er(),
              children: (e) =>
                  (0, r.jsx)(w.tG, {
                      ...e,
                      icon: s.ActivitiesIcon,
                      text: k.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY,
                      disabled: et,
                      submitting: X,
                      fullWidth: !0,
                      onClick: () => {
                          null == F || F({ action: 'PRESS_JOIN_BUTTON' }), en();
                      }
                  })
          })
        : (0, r.jsx)(s.Tooltip, {
              text: er(),
              children: (e) =>
                  (0, r.jsx)(w.tG, {
                      ...e,
                      icon: s.GameControllerIcon,
                      text: $ ? k.Z.Messages.JOIN : k.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                      disabled: et,
                      submitting: X,
                      fullWidth: !0,
                      onClick: () => {
                          null == F || F({ action: 'PRESS_ASK_TO_JOIN_BUTTON' }), en();
                      }
                  })
          });
}
