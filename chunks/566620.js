n.d(t, {
    $h: function () {
        return $;
    },
    W5: function () {
        return ea;
    },
    af: function () {
        return z;
    },
    cG: function () {
        return K;
    },
    gC: function () {
        return eo;
    },
    kv: function () {
        return J;
    },
    mW: function () {
        return Q;
    },
    pu: function () {
        return er;
    },
    rp: function () {
        return X;
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
    h = n(812236),
    p = n(812206),
    m = n(358221),
    I = n(233764),
    T = n(188597),
    g = n(835873),
    S = n(973616),
    A = n(314897),
    N = n(592125),
    v = n(430824),
    O = n(496675),
    R = n(594174),
    C = n(979651),
    y = n(585483),
    D = n(630388),
    L = n(823379),
    b = n(573261),
    M = n(595519),
    P = n(317381),
    U = n(363522),
    w = n(672181),
    x = n(882347),
    G = n(307091),
    k = n(374065),
    B = n(917107),
    F = n(89425),
    V = n(275920),
    H = n(701488),
    Z = n(981631),
    Y = n(674563),
    j = n(245335),
    W = n(689938);
function K(e, t) {
    let n = A.default.getId(),
        r = P.ZP.getSelfEmbeddedActivityForChannel(e),
        i = P.ZP.getEmbeddedActivitiesForChannel(e).find((e) => e.applicationId === t && e.userIds.has(n));
    null != r
        ? Q({
              channelId: e,
              applicationId: r.applicationId,
              showFeedback: !1
          })
        : null != i && X(e, t, !0),
        (0, w.Z)(e);
}
async function z(e) {
    var t, n;
    let { channelId: r, applicationId: i, isStart: s, analyticsLocations: o, locationObject: l, embeddedActivitiesManager: u, componentId: c } = e,
        m = N.Z.getChannel(r),
        g = null !== (t = null == m ? void 0 : m.getGuildId()) && void 0 !== t ? t : void 0;
    if (null == g && !(null !== (n = null == m ? void 0 : m.isPrivate()) && void 0 !== n && n)) return !1;
    try {
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_START',
            applicationId: i,
            channelId: r,
            componentId: c,
            analyticsLocations: s ? void 0 : o
        });
        let e = R.default.getCurrentUser();
        null != e &&
            (0, V.Z)({
                type: s ? Z.q5t.LAUNCH : Z.q5t.JOIN,
                userId: null == e ? void 0 : e.id,
                applicationId: i,
                locationObject: l,
                analyticsLocations: null != o ? o : []
            });
        let t = !0;
        if (s) {
            let e = async (e) => {
                    let { canSendFakeCommand: t } = e,
                        n = null;
                    try {
                        n = await (0, h.ZP)(r, i);
                    } catch (e) {
                        if (e.message !== h.sV) throw e;
                    }
                    if (null != n) {
                        if (n.handler === _.VC.APP_HANDLER) {
                            let e = f.ZP.getGuildState(g),
                                t = f.ZP.getUserState();
                            if (
                                !(await (0, E.L)({
                                    applicationId: i,
                                    userIndexState: t,
                                    guildIndexState: e
                                }))
                            )
                                return !1;
                        }
                        return (
                            await (0, T.qn)({
                                applicationId: i,
                                channelId: r,
                                guildId: g,
                                command: n
                            }),
                            !0
                        );
                    }
                    return (
                        null == n &&
                        !!t &&
                        (await (0, T.XV)({
                            applicationId: i,
                            channelId: r,
                            guildId: g
                        }),
                        !0)
                    );
                },
                n = Y.Yq.includes(i),
                a = (null == m ? void 0 : m.type) === Z.d4z.GUILD_VOICE,
                s = p.Z.getApplication(i),
                o = null != s && (0, D.yE)(s.flags, Z.udG.EMBEDDED),
                l = null != s && (0, D.yE)(s.flags, Z.udG.EMBEDDED_RELEASED),
                u = (0, M.l5)(m);
            if (n) {
                if (((t = !1), !(await e({ canSendFakeCommand: !1 })))) throw Error();
            } else if (a) {
                if (o && !l) t = !(await e({ canSendFakeCommand: !1 }));
                else if (o && l) {
                    U.j.trackExposure({ location: 'EmbeddedActivitiesActionCreators.launchEmbeddedActivity' });
                    let { enabled: n } = U.j.getCurrentConfig({ location: 'EmbeddedActivitiesActionCreators.launchEmbeddedActivity' });
                    if (n) {
                        if (!(await e({ canSendFakeCommand: !1 }))) throw new I.Z(I.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
                        t = !1;
                    } else t = !0;
                }
            } else if (u) {
                let n = await e({ canSendFakeCommand: o && l });
                if (((t = !n), o && !n)) throw new I.Z(I.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND);
            }
        }
        if (
            (!s || t) &&
            !(await q({
                applicationId: i,
                channelId: r,
                embeddedActivitiesManager: u,
                guildId: g
            }))
        )
            throw new I.Z(I.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED);
        a.Z.dispatch({
            type: 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS',
            applicationId: i,
            channelId: r
        });
    } catch (e) {
        return (
            a.Z.dispatch({
                type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
                guildId: g,
                applicationId: i,
                channelId: r,
                error: e instanceof I.Z ? e : new d.Z(e)
            }),
            !1
        );
    }
    return !0;
}
async function q(e) {
    var t;
    let n;
    let { applicationId: i, channelId: a, embeddedActivitiesManager: o, guildId: l } = e,
        u = A.default.getSessionId(),
        c = R.default.getCurrentUser();
    if (null == i) return !1;
    let d = null !== (t = p.Z.getApplication(i)) && void 0 !== t ? t : await (0, G.Z)(i, a);
    if (null == a) return y.S.dispatch(Z.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: i }), !1;
    let _ = N.Z.getChannel(a);
    if (null == _ || null == c || null == d) return !1;
    let E =
        null != a
            ? (0, k.e4)({
                  channelId: a,
                  ChannelStore: N.Z,
                  GuildStore: v.Z,
                  PermissionStore: O.Z,
                  VoiceStateStore: C.Z
              })
            : k.jy.NO_CHANNEL;
    if (E !== k.jy.CAN_LAUNCH)
        return (
            E === k.jy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION
                ? (0, g.w)()
                : E === k.jy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS &&
                  s.Z.show({
                      title: W.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC,
                      body: W.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS,
                      hideActionSheet: !1
                  }),
            !1
        );
    let f = P.ZP.getCurrentEmbeddedActivity();
    if (
        ((null == f ? void 0 : f.applicationId) != null && (n = p.Z.getApplication(null == f ? void 0 : f.applicationId)),
        !(await (0, x.p)({
            applicationId: i,
            application: d,
            channel: _,
            currentEmbeddedApplication: n,
            embeddedActivitiesManager: o,
            user: c
        })))
    )
        return !1;
    let h = (0, B.Z)(a),
        m = H.wP.includes(_.type);
    if (h) {
        if (
            !(await (0, F.Z)({
                channelId: a,
                bypassChangeModal: null != n
            }))
        )
            return !1;
    } else if (!(0, M.WS)(_, !0) || !m) return !1;
    return (
        await b.Z.post({
            url: Z.ANM.ACTIVITY_CHANNEL_LAUNCH(a, i),
            body: {
                session_id: u,
                guild_id: null != l ? l : void 0
            },
            trackedActionData: {
                event: r.NetworkActionNames.EMBEDDED_ACTIVITIES_LAUNCH,
                properties: {
                    guild_id: l,
                    channel_id: a,
                    application_id: i,
                    session_id: u
                }
            },
            retries: 3,
            oldFormErrors: !0
        }),
        !0
    );
}
function Q(e) {
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
    let u = m.Z.getSelectedParticipantId(r),
        c = null === (n = R.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    if (null != P.ZP.getEmbeddedActivitiesForChannel(r).find((e) => e.applicationId === i) && null != c && '' !== c) u === i && l.Z.selectParticipant(r, null);
}
function X(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    a.Z.dispatch({
        type: 'EMBEDDED_ACTIVITY_DISCONNECT',
        channelId: e,
        applicationId: t,
        isRejoiningFromCurrentSession: n
    });
}
async function $() {
    try {
        a.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_START' });
        let e = await i.tn.get({
                url: Z.ANM.APPLICATIONS_WITH_ASSETS,
                query: { with_team_applications: !0 },
                oldFormErrors: !0
            }),
            t = e.body.applications.map((e) => S.Z.createFromServer(e));
        a.Z.dispatch({
            type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS',
            applications: t,
            assets: e.body.assets
        });
    } catch (e) {
        a.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL' });
    }
}
async function J(e, t, n) {
    try {
        a.Z.dispatch({ type: 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START' });
        let r = await i.tn.post({
            url: Z.ANM.APPLICATION_UPLOAD_ATTACHMENT(e),
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
        u = P.ZP.getShelfActivities(o),
        c = u.map((e) => p.Z.getApplication(e.application_id)).filter(L.lm);
    if (!l && !P.ZP.shouldFetchShelf(o)) {
        if (null === (t = P.ZP.getShelfFetchStatus(o)) || void 0 === t ? void 0 : t.isFetching) {
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
            t = await b.Z.get({
                url: Z.ANM.ACTIVITY_SHELF,
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
                applications: u.map((e) => S.Z.createFromServer(e))
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
                target_type: j.Iq.EMBEDDED_APPLICATION,
                target_application_id: r
            },
            i
        );
    null != N.Z.getChannel(n) && c.Z.sendInvite(n, a.code, i, null);
}
async function er(e) {
    let { channelId: t, applicationId: n, userId: r, location: i } = e,
        a = await u.Z.createInvite(
            t,
            {
                target_type: j.Iq.EMBEDDED_APPLICATION,
                target_application_id: n
            },
            i
        );
    o.Z.ensurePrivateChannel(r).then((e) => {
        null != N.Z.getChannel(e) && c.Z.sendInvite(e, a.code, i, null);
    });
}
function ei() {
    a.Z.dispatch({ type: 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR' });
}
async function ea(e) {
    let t = Z.ANM.ACTIVITY_TEST_MODE(e);
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
