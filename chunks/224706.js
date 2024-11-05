n(47120), n(411104);
var r = n(664751),
    i = n(990547),
    a = n(243814),
    s = n(544891),
    o = n(283693),
    l = n(570140),
    u = n(638880),
    c = n(812206),
    d = n(439849),
    f = n(669764),
    _ = n(706454),
    h = n(757266),
    p = n(77498),
    m = n(283595),
    g = n(417363),
    E = n(626135),
    v = n(630388),
    I = n(877481),
    S = n(358085),
    T = n(573261),
    b = n(278323),
    y = n(58642),
    A = n(254854),
    N = n(981631),
    C = n(701488),
    R = n(388032);
function O(e) {
    let { applicationId: t, secret: n, channelId: r, intent: i = C.Ws.PLAY, embedded: a = !1, source: s, partyId: o, locationObject: u, analyticsLocations: c } = e;
    D({
        applicationId: t,
        channelId: r,
        embedded: a,
        source: s,
        partyId: o,
        locationObject: u,
        analyticsLocations: c
    })
        .then(() => I.Z.waitConnected(t))
        .then(() => Promise.race([I.Z.waitSubscribed(t, N.zMe.ACTIVITY_JOIN)]))
        .then(() => {
            l.Z.dispatch({
                type: 'ACTIVITY_JOIN',
                applicationId: t,
                secret: n,
                intent: i,
                embedded: a
            });
        })
        .catch(() =>
            l.Z.dispatch({
                type: 'ACTIVITY_JOIN_FAILED',
                applicationId: t
            })
        );
}
async function D(e) {
    let { applicationId: t, branchId: n, channelId: i, embedded: o = !1, source: d, partyId: f, locationObject: p = {}, analyticsLocations: E = [] } = e;
    if (o)
        return null == i
            ? Promise.reject(Error('Invalid channel ID'))
            : (await (0, u.Z)({
                  applicationId: t,
                  activityChannelId: i,
                  source: d,
                  partyId: f,
                  locationObject: p,
                  analyticsLocations: E
              }),
              Promise.resolve());
    if (h.Z.isConnected(t)) return Promise.resolve();
    let v = null;
    if (null == n) {
        let e = m.Z.getActiveLibraryApplication(t);
        n = null != e ? e.branchId : t;
    }
    if (g.Z.isLaunchable(t, n)) {
        var S;
        let e = g.Z.getState(t, n),
            i = m.Z.getActiveLaunchOptionId(t, n);
        if (null == e) throw Error('Missing dispatch game when launching');
        let o = m.Z.getLibraryApplication(t, n);
        if (null == o) throw Error('Missing library application when launching');
        v = ((S = t),
        s.tn
            .post({
                url: N.ANM.OAUTH2_AUTHORIZE,
                query: {
                    client_id: S,
                    response_type: 'token',
                    scope: [a.x.IDENTIFY].join(' ')
                },
                retries: 3,
                body: { authorize: !0 },
                oldFormErrors: !0
            })
            .then(
                (e) => {
                    let t = e.body.location.split(/#|\?/),
                        n = r.parse(t[t.length - 1]);
                    if ('invalid_request' === n.error) return null;
                    if (null != n.error) {
                        var i;
                        throw Error('OAuth2 Error: '.concat(n.error, ': ').concat(null !== (i = n.error_description) && void 0 !== i ? i : 'unknown error'));
                    }
                    return n.access_token;
                },
                (e) => {
                    if (404 === e.status) return null;
                    throw e;
                }
            )).then((t) => I.Z.launchDispatchApplication(e, t, _.default.locale, o.getBranchName(), i));
    } else {
        let e = c.Z.getApplication(t);
        v = null != e ? I.Z.launch(e) : I.Z.launchGame(t);
    }
    let T = Error('game not found');
    return null != v
        ? (l.Z.dispatch({
              type: 'LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE',
              applicationId: t,
              branchId: n
          }),
          l.Z.dispatch({
              type: 'GAME_LAUNCH_START',
              applicationId: t
          }),
          v
              .then((e) => {
                  l.Z.dispatch({
                      type: 'GAME_LAUNCH_SUCCESS',
                      applicationId: t,
                      pids: e
                  });
              })
              .catch((e) => {
                  A.Z.show(N.kVF.LAUNCH_GAME_FAILURE, R.intl.string(R.t.YZEBdn)),
                      l.Z.dispatch({
                          type: 'GAME_LAUNCH_FAIL',
                          applicationId: t,
                          error: T
                      });
              }))
        : (l.Z.dispatch({
              type: 'GAME_LAUNCH_FAIL',
              applicationId: t,
              error: T
          }),
          Promise.reject(T));
}
t.Z = {
    addGame(e, t) {
        l.Z.dispatch({
            type: 'RUNNING_GAME_ADD_OVERRIDE',
            pid: e
        }),
            E.default.track(N.rMx.RUNNING_GAME_OVERRIDE_ADDED, { game_name: t });
    },
    toggleOverlay(e, t) {
        let n = p.Z.getGameByName(e.name);
        if (null != n) {
            let e = m.Z.getActiveLibraryApplication(n.id);
            if (null != e) {
                let t = v.x9(e.getFlags(), N.eHb.OVERLAY_DISABLED);
                y.h(e.id, e.branchId, t);
                return;
            }
        }
        l.Z.dispatch({
            type: 'RUNNING_GAME_TOGGLE_OVERLAY',
            game: e,
            newEnabledValue: t
        });
    },
    toggleDetection(e) {
        l.Z.dispatch({
            type: 'RUNNING_GAME_TOGGLE_DETECTION',
            game: e
        });
    },
    editName(e, t) {
        l.Z.dispatch({
            type: 'RUNNING_GAME_EDIT_NAME',
            game: e,
            newName: t
        });
    },
    identifyGame: (e, t) =>
        (0, d.Z)().then(
            (t) =>
                new Promise((n, r) => {
                    if (null == t) {
                        r(Error('Game utils module not loaded'));
                        return;
                    }
                    t.identifyGame(e, (t, i) => {
                        if (0 !== t) {
                            r(Error('Error '.concat(t, ' when fetching info on ').concat(e)));
                            return;
                        }
                        if (null == i.icon || '' === i.icon || null == i.name || '' === i.name) {
                            r(Error('Did not find data on '.concat(e)));
                            return;
                        }
                        l.Z.dispatch({
                            type: 'GAME_ICON_UPDATE',
                            gameName: i.name,
                            icon: 'data:image/png;base64,'.concat(i.icon)
                        }),
                            n(i);
                    });
                })
        ),
    getDetectableGamesSupplemental(e) {
        let { forceFetch: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { forceFetch: !1 },
            n = t ? e : e.filter(f.Z.canFetch);
        if (0 === n.length) return;
        l.Z.dispatch({
            type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH',
            applicationIds: n
        });
        let r = async (e) => {
            try {
                let t = await s.tn.get({
                    url: N.ANM.APPLICATIONS_GAMES_SUPPLEMENTAL,
                    query: { application_ids: e }
                });
                l.Z.dispatch({
                    type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS',
                    applicationIds: e,
                    supplementalGameData: t.body.supplemental_game_data
                });
            } catch {
                l.Z.dispatch({
                    type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE',
                    applicationIds: e
                });
            }
        };
        for (; n.length > 0; ) r(n.splice(0, 20));
    },
    getDetectableGames() {
        if (p.Z.fetching || null != p.Z.lastFetched) return;
        let e = p.Z.detectableGamesEtag;
        l.Z.wait(() => {
            l.Z.dispatch({ type: 'GAMES_DATABASE_FETCH' }),
                T.Z.get({
                    url: N.ANM.APPLICATIONS_DETECTABLE,
                    headers: { 'If-None-Match': e },
                    retries: 1,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: i.NetworkActionNames.DETECTABLE_APPLICATIONS_FETCH,
                        properties: (t) => {
                            var n;
                            return (0, o.iG)({
                                sent_etag: e,
                                received_etag: null == t ? void 0 : null === (n = t.headers) || void 0 === n ? void 0 : n.etag
                            });
                        }
                    }
                }).then(
                    (e) => {
                        let {
                            body: t,
                            headers: { etag: n }
                        } = e;
                        l.Z.dispatch({
                            type: 'GAMES_DATABASE_UPDATE',
                            games: t,
                            etag: n
                        });
                    },
                    (e) => {
                        let { status: t } = e;
                        304 === t
                            ? l.Z.dispatch({
                                  type: 'GAMES_DATABASE_UPDATE',
                                  games: [],
                                  etag: p.Z.detectableGamesEtag
                              })
                            : l.Z.dispatch({ type: 'GAMES_DATABASE_FETCH_FAIL' });
                    }
                );
        });
    },
    reportUnverifiedGame(e) {
        var t, n;
        let { name: r, iconHash: i, publisher: a, distributor: o, sku: u, executableName: c } = e,
            f = (0, d.F)(c);
        if (null != f)
            s.tn
                .post({
                    url: N.ANM.UNVERIFIED_APPLICATIONS,
                    body: {
                        name: r,
                        os: (0, S.getPlatformName)(),
                        icon: i,
                        distributor_application:
                            ((t = o),
                            (n = u),
                            null == t || '' === t
                                ? null
                                : {
                                      distributor: t,
                                      sku: n
                                  }),
                        executable: f,
                        publisher: a,
                        report_version: 3
                    },
                    retries: 1,
                    oldFormErrors: !0
                })
                .then((e) => {
                    let {
                        body: { name: t, hash: n, missing_data: r }
                    } = e;
                    l.Z.dispatch({
                        type: 'UNVERIFIED_GAME_UPDATE',
                        name: t,
                        hash: n,
                        missingData: r
                    });
                });
    },
    uploadIcon(e, t, n) {
        s.tn.post({
            url: N.ANM.UNVERIFIED_APPLICATIONS_ICONS,
            body: {
                application_name: e,
                application_hash: t,
                icon: n
            },
            retries: 1,
            oldFormErrors: !0
        });
    },
    deleteEntry(e) {
        l.Z.dispatch({
            type: 'RUNNING_GAME_DELETE_ENTRY',
            game: e
        });
    },
    launch: D,
    async join(e) {
        let { userId: t, sessionId: n, applicationId: r, channelId: i, messageId: a, intent: s = C.Ws.PLAY, embedded: o = !1, source: u, partyId: c, locationObject: d, analyticsLocations: f } = e;
        if (__OVERLAY__)
            return (
                l.Z.dispatch({
                    type: 'OVERLAY_JOIN_GAME',
                    userId: t,
                    sessionId: n,
                    applicationId: r,
                    channelId: i,
                    messageId: a
                }),
                Promise.resolve(!0)
            );
        l.Z.dispatch({
            type: 'ACTIVITY_JOIN_LOADING',
            applicationId: r
        });
        try {
            let e = await b.Z.getJoinSecret(t, n, r, i, a);
            return (
                O({
                    applicationId: r,
                    secret: e,
                    channelId: i,
                    intent: s,
                    embedded: o,
                    partyId: c,
                    source: u,
                    locationObject: d,
                    analyticsLocations: f
                }),
                !0
            );
        } catch (e) {
            return (
                l.Z.dispatch({
                    type: 'ACTIVITY_JOIN_FAILED',
                    applicationId: r
                }),
                !1
            );
        }
    },
    joinWithSecret: O
};
