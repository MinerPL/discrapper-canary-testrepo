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
    _ = n(669764),
    E = n(706454),
    f = n(757266),
    h = n(77498),
    p = n(283595),
    I = n(417363),
    m = n(626135),
    T = n(630388),
    S = n(877481),
    g = n(358085),
    A = n(573261),
    N = n(278323),
    O = n(58642),
    R = n(254854),
    v = n(981631),
    C = n(701488),
    y = n(689938);
function L(e) {
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
        .then(() => S.Z.waitConnected(t))
        .then(() => Promise.race([S.Z.waitSubscribed(t, v.zMe.ACTIVITY_JOIN)]))
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
    let { applicationId: t, branchId: n, channelId: i, embedded: o = !1, source: d, partyId: _, locationObject: h = {}, analyticsLocations: m = [] } = e;
    if (o)
        return null == i
            ? Promise.reject(Error('Invalid channel ID'))
            : (await (0, u.Z)({
                  applicationId: t,
                  activityChannelId: i,
                  source: d,
                  partyId: _,
                  locationObject: h,
                  analyticsLocations: m
              }),
              Promise.resolve());
    if (f.Z.isConnected(t)) return Promise.resolve();
    let T = null;
    if (null == n) {
        let e = p.Z.getActiveLibraryApplication(t);
        n = null != e ? e.branchId : t;
    }
    if (I.Z.isLaunchable(t, n)) {
        var g;
        let e = I.Z.getState(t, n),
            i = p.Z.getActiveLaunchOptionId(t, n);
        if (null == e) throw Error('Missing dispatch game when launching');
        let o = p.Z.getLibraryApplication(t, n);
        if (null == o) throw Error('Missing library application when launching');
        T = ((g = t),
        s.tn
            .post({
                url: v.ANM.OAUTH2_AUTHORIZE,
                query: {
                    client_id: g,
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
            )).then((t) => S.Z.launchDispatchApplication(e, t, E.default.locale, o.getBranchName(), i));
    } else {
        let e = c.Z.getApplication(t);
        T = null != e ? S.Z.launch(e) : S.Z.launchGame(t);
    }
    let A = Error('game not found');
    return null != T
        ? (l.Z.dispatch({
              type: 'LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE',
              applicationId: t,
              branchId: n
          }),
          l.Z.dispatch({
              type: 'GAME_LAUNCH_START',
              applicationId: t
          }),
          T.then((e) => {
              l.Z.dispatch({
                  type: 'GAME_LAUNCH_SUCCESS',
                  applicationId: t,
                  pids: e
              });
          }).catch((e) => {
              R.Z.show(v.kVF.LAUNCH_GAME_FAILURE, y.Z.Messages.GAME_LAUNCH_FAILED_LAUNCH_TARGET_NOT_FOUND),
                  l.Z.dispatch({
                      type: 'GAME_LAUNCH_FAIL',
                      applicationId: t,
                      error: A
                  });
          }))
        : (l.Z.dispatch({
              type: 'GAME_LAUNCH_FAIL',
              applicationId: t,
              error: A
          }),
          Promise.reject(A));
}
t.Z = {
    addGame(e, t) {
        l.Z.dispatch({
            type: 'RUNNING_GAME_ADD_OVERRIDE',
            pid: e
        }),
            m.default.track(v.rMx.RUNNING_GAME_OVERRIDE_ADDED, { game_name: t });
    },
    toggleOverlay(e, t) {
        let n = h.Z.getGameByName(e.name);
        if (null != n) {
            let e = p.Z.getActiveLibraryApplication(n.id);
            if (null != e) {
                let t = T.x9(e.getFlags(), v.eHb.OVERLAY_DISABLED);
                O.h(e.id, e.branchId, t);
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
        let t = e.filter(_.Z.canFetch);
        if (0 === t.length) return;
        l.Z.dispatch({
            type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH',
            applicationIds: t
        });
        let n = async (e) => {
            try {
                let t = await s.tn.get({
                    url: v.ANM.APPLICATIONS_GAMES_SUPPLEMENTAL,
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
        for (; t.length > 0; ) n(t.splice(0, 20));
    },
    getDetectableGames() {
        if (h.Z.fetching || null != h.Z.lastFetched) return;
        let e = h.Z.detectableGamesEtag;
        l.Z.wait(() => {
            l.Z.dispatch({ type: 'GAMES_DATABASE_FETCH' }),
                A.Z.get({
                    url: v.ANM.APPLICATIONS_DETECTABLE,
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
                                  etag: h.Z.detectableGamesEtag
                              })
                            : l.Z.dispatch({ type: 'GAMES_DATABASE_FETCH_FAIL' });
                    }
                );
        });
    },
    reportUnverifiedGame(e) {
        var t, n;
        let { name: r, iconHash: i, publisher: a, distributor: o, sku: u, executableName: c } = e,
            _ = (0, d.F)(c);
        if (null != _)
            s.tn
                .post({
                    url: v.ANM.UNVERIFIED_APPLICATIONS,
                    body: {
                        name: r,
                        os: (0, g.getPlatformName)(),
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
                        executable: _,
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
            url: v.ANM.UNVERIFIED_APPLICATIONS_ICONS,
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
        let { userId: t, sessionId: n, applicationId: r, channelId: i, messageId: a, intent: s = C.Ws.PLAY, embedded: o = !1, source: u, partyId: c, locationObject: d, analyticsLocations: _ } = e;
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
            let e = await N.Z.getJoinSecret(t, n, r, i, a);
            return (
                L({
                    applicationId: r,
                    secret: e,
                    channelId: i,
                    intent: s,
                    embedded: o,
                    partyId: c,
                    source: u,
                    locationObject: d,
                    analyticsLocations: _
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
    joinWithSecret: L
};
