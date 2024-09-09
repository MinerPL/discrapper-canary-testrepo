n.d(t, {
    $h: function () {
        return $;
    },
    W5: function () {
        return ea;
    },
    af: function () {
        return q;
    },
    cG: function () {
        return z;
    },
    gC: function () {
        return eo;
    },
    kv: function () {
        return J;
    },
    mW: function () {
        return X;
    },
    pu: function () {
        return er;
    },
    sN: function () {
        return en;
    },
    tg: function () {
        return es;
    },
    ux: function () {
        return ei;
    },
    w1: function () {
        return et;
    }
}),
    n(789020),
    n(411104),
    n(47120);
var r = n(990547),
    i = n(544891),
    a = n(570140),
    s = n(668781),
    o = n(493683),
    l = n(475179),
    u = n(447543),
    c = n(904245),
    d = n(479531),
    _ = n(911969),
    E = n(845936),
    f = n(213459),
    h = n(667204),
    p = n(812236),
    I = n(812206),
    m = n(358221),
    T = n(233764),
    S = n(375824),
    g = n(835873),
    A = n(973616),
    N = n(314897),
    O = n(592125),
    R = n(430824),
    v = n(496675),
    C = n(594174),
    y = n(979651),
    L = n(585483),
    D = n(630388),
    b = n(823379),
    M = n(573261),
    P = n(595519),
    U = n(317381),
    w = n(363522),
    x = n(672181),
    G = n(882347),
    k = n(224189),
    B = n(374065),
    F = n(917107),
    V = n(89425),
    H = n(275920),
    Z = n(701488),
    Y = n(981631),
    j = n(674563),
    W = n(245335),
    K = n(689938);
function z(e, t) {
    var n;
    let r = U.ZP.getSelfEmbeddedActivityForChannel(e);
    X({
        channelId: e,
        applicationId: null !== (n = null == r ? void 0 : r.applicationId) && void 0 !== n ? n : t,
        showFeedback: !1
    }),
        (0, x.Z)(e);
}
async function q(e) {
    var t, n;
    let { channelId: r, applicationId: i, isStart: s, analyticsLocations: o, locationObject: l, embeddedActivitiesManager: u, componentId: c, commandOrigin: m, sectionName: g, source: A, partyId: N } = e,
        v = O.Z.getChannel(r),
        y = null !== (t = null == v ? void 0 : v.getGuildId()) && void 0 !== t ? t : void 0;
    if (null == y && !(null !== (n = null == v ? void 0 : v.isPrivate()) && void 0 !== n && n)) return !1;
    try {
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_START',
            applicationId: i,
            channelId: r,
            componentId: c,
            analyticsLocations: s ? void 0 : o,
            source: s ? void 0 : A
        });
        let e = C.default.getCurrentUser();
        null != e &&
            (0, H.Z)({
                type: s ? Y.q5t.LAUNCH : Y.q5t.JOIN,
                userId: null == e ? void 0 : e.id,
                applicationId: i,
                locationObject: l,
                analyticsLocations: null != o ? o : [],
                source: A,
                partyId: N
            });
        let t = !0;
        if (s) {
            let e = async () => {
                    let e = null;
                    try {
                        e = await (0, p.ZP)(r, i);
                    } catch (e) {
                        if (e.message === p.sV) return !1;
                        throw e;
                    }
                    if (e.handler === _.VC.APP_HANDLER) {
                        let e =
                                null != y
                                    ? await (0, f.FN)({
                                          type: 'guild',
                                          guildId: y
                                      })
                                    : f.ZP.getGuildState(y),
                            t = await (0, f.FN)({ type: 'user' });
                        if (
                            !(await (0, E.L)({
                                applicationId: i,
                                userIndexState: t,
                                guildIndexState: e
                            }))
                        )
                            return !1;
                    }
                    let t = O.Z.getChannel(r),
                        n = null != y ? R.Z.getGuild(y) : null;
                    return (
                        null != t &&
                        (await new Promise((r, i) => {
                            (0, h.Z)({
                                command: e,
                                optionValues: {},
                                context: {
                                    channel: t,
                                    guild: n
                                },
                                commandOrigin: m,
                                sectionName: g,
                                source: A,
                                interactionLifecycleOptionsFactory: () => ({
                                    onSuccess: () => r(),
                                    onFailure: (e, t, n, r) => {
                                        null != e && null != t && null != n
                                            ? i(
                                                  new d.Z({
                                                      status: n,
                                                      body: {
                                                          message: t,
                                                          code: e
                                                      }
                                                  })
                                              )
                                            : null != r && r in S.Z.ReasonCodes
                                              ? i(new S.Z(r))
                                              : i(new S.Z(S.Z.ReasonCodes.UNKNOWN));
                                    }
                                })
                            });
                        }),
                        !0)
                    );
                },
                n = j.Yq.includes(i),
                a = (null == v ? void 0 : v.type) === Y.d4z.GUILD_VOICE,
                s = I.Z.getApplication(i),
                o = null != s && (0, D.yE)(s.flags, Y.udG.EMBEDDED),
                l = (0, P.l5)(v);
            if (n) {
                if (((t = !1), !(await e()))) throw Error();
            } else if (a) {
                if (o) {
                    w.j.trackExposure({ location: 'EmbeddedActivitiesActionCreators.launchEmbeddedActivity' });
                    let { enabled: n } = w.j.getCurrentConfig({ location: 'EmbeddedActivitiesActionCreators.launchEmbeddedActivity' });
                    if (((t = !n), n && !(await e()))) throw new T.Z(T.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
                }
            } else if (l && ((t = !1), !(await e()))) throw new T.Z(T.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        }
        if (
            (!s || t) &&
            !(await Q({
                applicationId: i,
                channelId: r,
                embeddedActivitiesManager: u,
                isStart: s,
                guildId: y
            }))
        )
            throw new T.Z(T.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED);
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS',
            applicationId: i,
            channelId: r
        });
    } catch (e) {
        return (
            a.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
                guildId: y,
                applicationId: i,
                channelId: r,
                error: e instanceof T.Z || e instanceof d.Z || e instanceof S.Z ? e : new d.Z(e)
            }),
            !1
        );
    }
    return !0;
}
async function Q(e) {
    let t,
        { applicationId: n, channelId: i, embeddedActivitiesManager: a, isStart: o, guildId: l } = e,
        u = N.default.getSessionId(),
        c = C.default.getCurrentUser();
    if (null == n) return !1;
    let d = await (0, k.Z)(n, i);
    if (null == i) return L.S.dispatch(Y.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: n }), !1;
    let _ = O.Z.getChannel(i);
    if (null == _ || null == c || null == d) return !1;
    let E =
        null != i
            ? (0, B.e4)({
                  channelId: i,
                  ChannelStore: O.Z,
                  GuildStore: R.Z,
                  PermissionStore: v.Z,
                  VoiceStateStore: y.Z
              })
            : B.jy.NO_CHANNEL;
    if (E !== B.jy.CAN_LAUNCH)
        return (
            E === B.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? (0, g.w)()
                : E === B.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  s.Z.show({
                      title: K.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC,
                      body: K.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
                      hideActionSheet: !1
                  }),
            !1
        );
    let f = U.ZP.getCurrentEmbeddedActivity();
    if (
        ((null == f ? void 0 : f.applicationId) != null && (t = I.Z.getApplication(null == f ? void 0 : f.applicationId)),
        !(
            !o ||
            (await (0, G.p)({
                applicationId: n,
                application: d,
                channel: _,
                currentEmbeddedApplication: t,
                embeddedActivitiesManager: a,
                user: c
            }))
        ))
    )
        return !1;
    let h = (0, F.Z)(i),
        p = Z.wP.includes(_.type);
    if (h) {
        if (
            !(await (0, V.Z)({
                channelId: i,
                bypassChangeModal: null != t
            }))
        )
            return !1;
    } else if (!(0, P.WS)(_) || !p) return !1;
    return (
        await M.Z.post({
            url: Y.ANM.ACTIVITY_CHANNEL_LAUNCH(i, n),
            body: {
                session_id: u,
                guild_id: null != l ? l : void 0
            },
            trackedActionData: {
                event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
                properties: {
                    guild_id: l,
                    channel_id: i,
                    application_id: n,
                    session_id: u
                }
            },
            retries: 3,
            oldFormErrors: !0
        }),
        !0
    );
}
function X(e) {
    var t, n;
    let { channelId: r, applicationId: i, showFeedback: s = !0 } = e,
        o = U.ZP.getSelfEmbeddedActivityForChannel(r);
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_CLOSE',
        channelId: r,
        applicationId: i,
        locationId: null == o ? void 0 : null === (t = o.location) || void 0 === t ? void 0 : t.id,
        instanceId: null == o ? void 0 : o.launchId,
        showFeedback: s
    });
    let u = m.Z.getSelectedParticipantId(r),
        c = null === (n = C.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null != U.ZP.getEmbeddedActivitiesForChannel(r).find((e) => e.applicationId === i) && null != c && '' !== c) u === i && l.Z.selectParticipant(r, null);
}
async function $() {
    try {
        a.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START' });
        let e = await i.tn.get({
                url: Y.ANM.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0
            }),
            t = e.body.applications,
            n = t.map((e) => A.Z.createFromServer(e));
        a.Z.dispatch({
            type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS',
            applications: n,
            assets: e.body.assets
        }),
            a.Z.dispatch({
                type: 'APPLICATIONS_FETCH_SUCCESS',
                applications: t
            });
    } catch (e) {
        a.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL' });
    }
}
async function J(e, t, n) {
    try {
        a.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START' });
        let r = await i.tn.post({
            url: Y.ANM.APPLICATION_UPLOAD_ATTACHMENT(e),
            query: { channel_id: t },
            attachments: [
                {
                    name: 'file',
                    file: n
                }
            ]
        });
        return (
            a.Z.dispatch({
                type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS',
                attachment: r.body.attachment
            }),
            r.body.attachment
        );
    } catch (e) {
        return a.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL' }), new d.Z(e);
    }
}
let ee = (e, t, n) => {
    let { guildId: r } = n;
    (r === e || (null == r && null == e)) && t();
};
async function et(e) {
    var t, n, i, s;
    let { guildId: o, force: l = !1 } = e,
        u = U.ZP.getShelfActivities(o),
        c = u.map((e) => I.Z.getApplication(e.application_id)).filter(b.lm);
    if (!l && !U.ZP.shouldFetchShelf(o)) {
        if (null === (t = U.ZP.getShelfFetchStatus(o)) || void 0 === t ? void 0 : t.isFetching) {
            let e, t;
            let n = new Promise((t) => {
                    (e = ee.bind(null, o, t)), a.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e);
                }),
                r = new Promise((e) => {
                    (t = ee.bind(null, o, e)), a.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t);
                });
            await Promise.race([n, r]), null != e && (a.Z.unsubscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e), (e = null)), null != t && (a.Z.unsubscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t), (t = null));
        }
        return {
            activityConfigs: u,
            applications: c
        };
    }
    try {
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_FETCH_SHELF',
            guildId: o
        });
        let e = void 0 !== o && '' !== o ? { guild_id: o } : void 0,
            t = await M.Z.get({
                url: Y.ANM.ACTIVITY_SHELF,
                query: e,
                trackedActionData: {
                    event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF,
                    properties: { guild_id: o }
                },
                retries: 3,
                oldFormErrors: !0
            }),
            l = null !== (n = t.body.activities) && void 0 !== n ? n : [],
            u = null !== (i = t.body.applications) && void 0 !== i ? i : [],
            c = null !== (s = t.body.assets) && void 0 !== s ? s : {};
        return (
            a.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS',
                guildId: o,
                activities: l,
                applications: u,
                assets: c
            }),
            u.length > 0 &&
                a.Z.dispatch({
                    type: 'APPLICATIONS_FETCH_SUCCESS',
                    applications: u
                }),
            {
                activityConfigs: l,
                applications: u.map((e) => A.Z.createFromServer(e))
            }
        );
    } catch (e) {
        return (
            a.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL',
                guildId: o
            }),
            {
                activityConfigs: u,
                applications: c
            }
        );
    }
}
async function en(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: r, location: i } = e,
        a = await u.Z.createInvite(
            t,
            {
                target_type: W.Iq.EMBEDDED_APPLICATION,
                target_application_id: r
            },
            i
        );
    null != O.Z.getChannel(n) && c.Z.sendInvite(n, a.code, i, null);
}
async function er(e) {
    let { channelId: t, applicationId: n, userId: r, location: i } = e,
        a = await u.Z.createInvite(
            t,
            {
                target_type: W.Iq.EMBEDDED_APPLICATION,
                target_application_id: n
            },
            i
        );
    o.Z.ensurePrivateChannel(r).then((e) => {
        null != O.Z.getChannel(e) && c.Z.sendInvite(e, a.code, i, null);
    });
}
function ei() {
    a.Z.dispatch({ type: 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR' });
}
async function ea(e) {
    let t = Y.ANM.ACTIVITY_TEST_MODE(e);
    try {
        return (
            await i.tn.get({
                url: t,
                oldFormErrors: !0
            }),
            !0
        );
    } catch (e) {
        return !1;
    }
}
function es(e) {
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_PANEL_MODE',
        activityPanelMode: e
    });
}
function eo(e) {
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT',
        focusedActivityLayout: e
    });
}
