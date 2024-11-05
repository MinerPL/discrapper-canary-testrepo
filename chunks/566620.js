n.d(t, {
    $h: function () {
        return $;
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
        return J;
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
    f = n(911969),
    _ = n(46332),
    h = n(213459),
    p = n(667204),
    m = n(812236),
    g = n(812206),
    E = n(358221),
    v = n(233764),
    I = n(375824),
    S = n(48854),
    T = n(835873),
    b = n(973616),
    y = n(314897),
    A = n(592125),
    N = n(430824),
    C = n(496675),
    R = n(594174),
    O = n(979651),
    D = n(585483),
    L = n(630388),
    x = n(823379),
    w = n(573261),
    M = n(595519),
    P = n(317381),
    k = n(672181),
    U = n(882347),
    G = n(224189),
    B = n(374065),
    Z = n(917107),
    F = n(89425),
    V = n(275920),
    j = n(701488),
    H = n(981631),
    Y = n(674563),
    W = n(245335),
    K = n(388032);
function z(e, t) {
    var n;
    let r = P.ZP.getSelfEmbeddedActivityForChannel(e);
    J({
        channelId: e,
        applicationId: null !== (n = null == r ? void 0 : r.applicationId) && void 0 !== n ? n : t,
        showFeedback: !1
    }),
        (0, k.Z)(e);
}
async function q(e) {
    var t, n;
    let { channelId: r, applicationId: i, isStart: s, analyticsLocations: o, locationObject: l, embeddedActivitiesManager: u, componentId: c, commandOrigin: f, sectionName: _, source: h, partyId: p, onExecutedCallback: m } = e,
        E = A.Z.getChannel(r),
        T = null !== (t = null == E ? void 0 : E.getGuildId()) && void 0 !== t ? t : void 0;
    if (null == T && !(null !== (n = null == E ? void 0 : E.isPrivate()) && void 0 !== n && n)) return !1;
    let b = (0, S.r)();
    try {
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_START',
            nonce: b,
            applicationId: i,
            channelId: r,
            componentId: c,
            analyticsLocations: o,
            source: h,
            commandOrigin: f
        });
        let e = R.default.getCurrentUser();
        if (
            (null != e &&
                (0, V.Z)({
                    type: s ? H.q5t.LAUNCH : H.q5t.JOIN,
                    userId: null == e ? void 0 : e.id,
                    guildId: T,
                    channelId: r,
                    channelType: null == E ? void 0 : E.type,
                    applicationId: i,
                    locationObject: l,
                    analyticsLocations: null != o ? o : [],
                    source: h,
                    partyId: p
                }),
            s)
        ) {
            if (
                !(function (e, t) {
                    let n = (null == t ? void 0 : t.type) === H.d4z.GUILD_VOICE,
                        r = g.Z.getApplication(e),
                        i = null != r && (0, L.yE)(r.flags, H.udG.EMBEDDED),
                        a = (0, M.l5)(t);
                    return (n && i) || a;
                })(i, E)
            )
                throw new v.Z(v.Z.Reasons.INVALID_CHANNEL);
            if (
                !(await Q({
                    applicationId: i,
                    nonce: b,
                    channelId: r,
                    guildId: T,
                    commandOrigin: f,
                    sectionName: _,
                    source: h,
                    onExecutedCallback: m
                }))
            )
                throw new v.Z(v.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
        } else {
            let e = await X({
                applicationId: i,
                channelId: r,
                embeddedActivitiesManager: u,
                isStart: s,
                guildId: T
            });
            if ((null == m || m(), !e)) throw new v.Z(v.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED);
        }
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS',
            nonce: b,
            applicationId: i,
            channelId: r
        });
    } catch (e) {
        return (
            a.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
                nonce: b,
                guildId: T,
                applicationId: i,
                channelId: r,
                isStart: s,
                error: e instanceof v.Z || e instanceof d.Z || e instanceof I.Z ? e : new d.Z(e)
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
        u = await (0, m.ZP)(r, t);
    } catch (e) {
        if (e.message === m.sV) return !1;
        throw e;
    }
    if (!(u.handler !== f.VC.APP_HANDLER || Y.Yq.includes(t))) {
        let e =
                null != i
                    ? await (0, h.FN)({
                          type: 'guild',
                          guildId: i
                      })
                    : h.ZP.getGuildState(i),
            n = await (0, h.FN)({ type: 'user' });
        if (
            !(await (0, _.L)({
                applicationId: t,
                userIndexState: n,
                guildIndexState: e,
                commandIntegrationTypes: u.integration_types
            }))
        )
            return !1;
    }
    let c = A.Z.getChannel(r),
        g = null != i ? N.Z.getGuild(i) : null;
    return (
        null != c &&
        (await new Promise((e, t) => {
            (0, p.Z)({
                command: u,
                optionValues: {},
                context: {
                    channel: c,
                    guild: g
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
                                : null != i && i in I.Z.ReasonCodes
                                  ? t(new I.Z(i))
                                  : t(new I.Z(I.Z.ReasonCodes.UNKNOWN));
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
        u = y.default.getSessionId(),
        c = R.default.getCurrentUser();
    if (null == n) return !1;
    let d = await (0, G.Z)(n, i);
    if (null == i) return D.S.dispatch(H.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: n }), !1;
    let f = A.Z.getChannel(i);
    if (null == f || null == c || null == d) return !1;
    let _ =
        null != i
            ? (0, B.e4)({
                  channelId: i,
                  ChannelStore: A.Z,
                  GuildStore: N.Z,
                  PermissionStore: C.Z,
                  VoiceStateStore: O.Z
              })
            : B.jy.NO_CHANNEL;
    if (_ !== B.jy.CAN_LAUNCH)
        return (
            _ === B.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? (0, T.w)()
                : _ === B.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  s.Z.show({
                      title: K.intl.string(K.t['IOy+Iy']),
                      body: K.intl.string(K.t.UXoQTk),
                      hideActionSheet: !1
                  }),
            !1
        );
    let h = P.ZP.getCurrentEmbeddedActivity();
    if (
        ((null == h ? void 0 : h.applicationId) != null && (t = g.Z.getApplication(null == h ? void 0 : h.applicationId)),
        !(
            !o ||
            (await (0, U.p)({
                applicationId: n,
                application: d,
                channel: f,
                currentEmbeddedApplication: t,
                embeddedActivitiesManager: a,
                user: c
            }))
        ))
    )
        return !1;
    let p = (0, Z.Z)(i),
        m = j.wP.includes(f.type);
    if (p) {
        if (
            !(await (0, F.Z)({
                channelId: i,
                bypassChangeModal: null != t
            }))
        )
            return !1;
    } else if (!(0, M.WS)(f) || !m) return !1;
    return (
        await w.Z.post({
            url: H.ANM.ACTIVITY_CHANNEL_LAUNCH(i, n),
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
function J(e) {
    var t, n;
    let { channelId: r, applicationId: i, showFeedback: s = !0 } = e,
        o = P.ZP.getSelfEmbeddedActivityForChannel(r);
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_CLOSE',
        channelId: r,
        applicationId: i,
        locationId: null == o ? void 0 : null === (t = o.location) || void 0 === t ? void 0 : t.id,
        instanceId: null == o ? void 0 : o.launchId,
        showFeedback: s
    });
    let u = E.Z.getSelectedParticipantId(r),
        c = null === (n = R.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null != P.ZP.getEmbeddedActivitiesForChannel(r).find((e) => e.applicationId === i) && null != c && '' !== c) u === i && l.Z.selectParticipant(r, null);
}
async function $() {
    try {
        a.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START' });
        let e = await i.tn.get({
                url: H.ANM.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0
            }),
            t = e.body.applications,
            n = t.map((e) => b.Z.createFromServer(e));
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
            url: H.ANM.APPLICATION_UPLOAD_ATTACHMENT(e),
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
        u = P.ZP.getShelfActivities(o),
        c = u.map((e) => g.Z.getApplication(e.application_id)).filter(x.lm);
    if (!l && !P.ZP.shouldFetchShelf(o)) {
        if (null === (t = P.ZP.getShelfFetchStatus(o)) || void 0 === t ? void 0 : t.isFetching) {
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
            t = await w.Z.get({
                url: H.ANM.ACTIVITY_SHELF,
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
                applications: u.map((e) => b.Z.createFromServer(e))
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
    null != A.Z.getChannel(n) && c.Z.sendInvite(n, a.code, i, null);
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
        null != A.Z.getChannel(e) && c.Z.sendInvite(e, a.code, i, null);
    });
}
function ea() {
    a.Z.dispatch({ type: 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR' });
}
async function es(e) {
    let t = H.ANM.ACTIVITY_TEST_MODE(e);
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
