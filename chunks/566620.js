n.d(t, {
    $h: function () {
        return J;
    },
    W5: function () {
        return es;
    },
    af: function () {
        return q;
    },
    cG: function () {
        return z;
    },
    gC: function () {
        return el;
    },
    kv: function () {
        return ee;
    },
    mW: function () {
        return $;
    },
    pu: function () {
        return ei;
    },
    sN: function () {
        return er;
    },
    tg: function () {
        return eo;
    },
    ux: function () {
        return ea;
    },
    w1: function () {
        return en;
    }
}),
    n(789020),
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
    g = n(48854),
    A = n(835873),
    N = n(973616),
    O = n(314897),
    R = n(592125),
    v = n(430824),
    C = n(496675),
    L = n(594174),
    y = n(979651),
    D = n(585483),
    b = n(630388),
    M = n(823379),
    P = n(573261),
    U = n(595519),
    w = n(317381),
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
    let r = w.ZP.getSelfEmbeddedActivityForChannel(e);
    $({
        channelId: e,
        applicationId: null !== (n = null == r ? void 0 : r.applicationId) && void 0 !== n ? n : t,
        showFeedback: !1
    }),
        (0, x.Z)(e);
}
async function q(e) {
    var t, n;
    let { channelId: r, applicationId: i, isStart: s, analyticsLocations: o, locationObject: l, embeddedActivitiesManager: u, componentId: c, commandOrigin: _, sectionName: E, source: f, partyId: h, onExecutedCallback: p } = e,
        m = R.Z.getChannel(r),
        A = null !== (t = null == m ? void 0 : m.getGuildId()) && void 0 !== t ? t : void 0;
    if (null == A && !(null !== (n = null == m ? void 0 : m.isPrivate()) && void 0 !== n && n)) return !1;
    let N = (0, g.r)();
    try {
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_START',
            nonce: N,
            applicationId: i,
            channelId: r,
            componentId: c,
            analyticsLocations: o,
            source: f
        });
        let e = L.default.getCurrentUser();
        if (
            (null != e &&
                (0, H.Z)({
                    type: s ? Y.q5t.LAUNCH : Y.q5t.JOIN,
                    userId: null == e ? void 0 : e.id,
                    guildId: A,
                    channelId: r,
                    channelType: null == m ? void 0 : m.type,
                    applicationId: i,
                    locationObject: l,
                    analyticsLocations: null != o ? o : [],
                    source: f,
                    partyId: h
                }),
            s)
        ) {
            if (
                !(function (e, t) {
                    let n = (null == t ? void 0 : t.type) === Y.d4z.GUILD_VOICE,
                        r = I.Z.getApplication(e),
                        i = null != r && (0, b.yE)(r.flags, Y.udG.EMBEDDED),
                        a = (0, U.l5)(t);
                    return (n && i) || a;
                })(i, m)
            )
                throw new T.Z(T.Z.Reasons.INVALID_CHANNEL);
            if (
                !(await Q({
                    applicationId: i,
                    nonce: N,
                    channelId: r,
                    guildId: A,
                    commandOrigin: _,
                    sectionName: E,
                    source: f,
                    onExecutedCallback: p
                }))
            )
                throw new T.Z(T.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await X({
                applicationId: i,
                channelId: r,
                embeddedActivitiesManager: u,
                isStart: s,
                guildId: A
            });
            if ((null == p || p(), !e)) throw new T.Z(T.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED);
        }
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS',
            nonce: N,
            applicationId: i,
            channelId: r
        });
    } catch (e) {
        return (
            a.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
                nonce: N,
                guildId: A,
                applicationId: i,
                channelId: r,
                isStart: s,
                error: e instanceof T.Z || e instanceof d.Z || e instanceof S.Z ? e : new d.Z(e)
            }),
            !1
        );
    }
    return !0;
}
async function Q(e) {
    let { applicationId: t, nonce: n, channelId: r, guildId: i, commandOrigin: a, sectionName: s, source: o, onExecutedCallback: l } = e,
        u = null;
    try {
        u = await (0, p.ZP)(r, t);
    } catch (e) {
        if (e.message === p.sV) return !1;
        throw e;
    }
    if (!(u.handler !== _.VC.APP_HANDLER || j.Yq.includes(t))) {
        let e =
                null != i
                    ? await (0, f.FN)({
                          type: 'guild',
                          guildId: i
                      })
                    : f.ZP.getGuildState(i),
            n = await (0, f.FN)({ type: 'user' });
        if (
            !(await (0, E.L)({
                applicationId: t,
                userIndexState: n,
                guildIndexState: e
            }))
        )
            return !1;
    }
    let c = R.Z.getChannel(r),
        I = null != i ? v.Z.getGuild(i) : null;
    return (
        null != c &&
        (await new Promise((e, t) => {
            (0, h.Z)({
                command: u,
                optionValues: {},
                context: {
                    channel: c,
                    guild: I
                },
                commandOrigin: a,
                sectionName: s,
                source: o,
                interactionLifecycleOptionsFactory: () => ({
                    nonce: n,
                    onSuccess: () => {
                        null == l || l(), e();
                    },
                    onFailure: (e, n, r, i) => {
                        null == l || l(),
                            null != e && null != n && null != r
                                ? t(
                                      new d.Z({
                                          status: r,
                                          body: {
                                              message: n,
                                              code: e
                                          }
                                      })
                                  )
                                : null != i && i in S.Z.ReasonCodes
                                  ? t(new S.Z(i))
                                  : t(new S.Z(S.Z.ReasonCodes.UNKNOWN));
                    }
                })
            });
        }),
        !0)
    );
}
async function X(e) {
    let t,
        { applicationId: n, channelId: i, embeddedActivitiesManager: a, isStart: o, guildId: l } = e,
        u = O.default.getSessionId(),
        c = L.default.getCurrentUser();
    if (null == n) return !1;
    let d = await (0, k.Z)(n, i);
    if (null == i) return D.S.dispatch(Y.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: n }), !1;
    let _ = R.Z.getChannel(i);
    if (null == _ || null == c || null == d) return !1;
    let E =
        null != i
            ? (0, B.e4)({
                  channelId: i,
                  ChannelStore: R.Z,
                  GuildStore: v.Z,
                  PermissionStore: C.Z,
                  VoiceStateStore: y.Z
              })
            : B.jy.NO_CHANNEL;
    if (E !== B.jy.CAN_LAUNCH)
        return (
            E === B.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? (0, A.w)()
                : E === B.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  s.Z.show({
                      title: K.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC,
                      body: K.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
                      hideActionSheet: !1
                  }),
            !1
        );
    let f = w.ZP.getCurrentEmbeddedActivity();
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
    } else if (!(0, U.WS)(_) || !p) return !1;
    return (
        await P.Z.post({
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
function $(e) {
    var t, n;
    let { channelId: r, applicationId: i, showFeedback: s = !0 } = e,
        o = w.ZP.getSelfEmbeddedActivityForChannel(r);
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_CLOSE',
        channelId: r,
        applicationId: i,
        locationId: null == o ? void 0 : null === (t = o.location) || void 0 === t ? void 0 : t.id,
        instanceId: null == o ? void 0 : o.launchId,
        showFeedback: s
    });
    let u = m.Z.getSelectedParticipantId(r),
        c = null === (n = L.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null != w.ZP.getEmbeddedActivitiesForChannel(r).find((e) => e.applicationId === i) && null != c && '' !== c) u === i && l.Z.selectParticipant(r, null);
}
async function J() {
    try {
        a.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START' });
        let e = await i.tn.get({
                url: Y.ANM.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0
            }),
            t = e.body.applications,
            n = t.map((e) => N.Z.createFromServer(e));
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
async function ee(e, t, n) {
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
let et = (e, t, n) => {
    let { guildId: r } = n;
    (r === e || (null == r && null == e)) && t();
};
async function en(e) {
    var t, n, i, s;
    let { guildId: o, force: l = !1 } = e,
        u = w.ZP.getShelfActivities(o),
        c = u.map((e) => I.Z.getApplication(e.application_id)).filter(M.lm);
    if (!l && !w.ZP.shouldFetchShelf(o)) {
        if (null === (t = w.ZP.getShelfFetchStatus(o)) || void 0 === t ? void 0 : t.isFetching) {
            let e, t;
            let n = new Promise((t) => {
                    (e = et.bind(null, o, t)), a.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS', e);
                }),
                r = new Promise((e) => {
                    (t = et.bind(null, o, e)), a.Z.subscribe('EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL', t);
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
            t = await P.Z.get({
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
                applications: u.map((e) => N.Z.createFromServer(e))
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
async function er(e) {
    let { activityChannelId: t, invitedChannelId: n, applicationId: r, location: i } = e,
        a = await u.Z.createInvite(
            t,
            {
                target_type: W.Iq.EMBEDDED_APPLICATION,
                target_application_id: r
            },
            i
        );
    null != R.Z.getChannel(n) && c.Z.sendInvite(n, a.code, i, null);
}
async function ei(e) {
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
        null != R.Z.getChannel(e) && c.Z.sendInvite(e, a.code, i, null);
    });
}
function ea() {
    a.Z.dispatch({ type: 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR' });
}
async function es(e) {
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
function eo(e) {
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_PANEL_MODE',
        activityPanelMode: e
    });
}
function el(e) {
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT',
        focusedActivityLayout: e
    });
}
