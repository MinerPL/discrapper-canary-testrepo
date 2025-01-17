n(47120), n(411104);
var r = n(664751),
    i = n(243814),
    a = n(544891),
    s = n(570140),
    o = n(638880),
    l = n(812206),
    u = n(439849),
    c = n(669764),
    d = n(706454),
    _ = n(757266),
    E = n(77498),
    f = n(283595),
    h = n(417363),
    p = n(626135),
    m = n(630388),
    I = n(877481),
    T = n(358085),
    g = n(278323),
    S = n(58642),
    A = n(254854),
    N = n(981631),
    v = n(701488),
    O = n(689938);
function R(e) {
    let { applicationId: t, secret: n, channelId: r, intent: i = v.Ws.PLAY, embedded: a = !1, analyticsLocations: o = [] } = e;
    C({
        applicationId: t,
        channelId: r,
        embedded: a,
        analyticsLocations: o
    })
        .then(() => I.Z.waitConnected(t))
        .then(() => Promise.race([I.Z.waitSubscribed(t, N.zMe.ACTIVITY_JOIN)]))
        .then(() => {
            s.Z.dispatch({
                type: 'ACTIVITY_JOIN',
                applicationId: t,
                secret: n,
                intent: i,
                embedded: a
            });
        })
        .catch(() =>
            s.Z.dispatch({
                type: 'ACTIVITY_JOIN_FAILED',
                applicationId: t
            })
        );
}
async function C(e) {
    let { applicationId: t, branchId: n, channelId: u, embedded: c = !1, analyticsLocations: E = [] } = e;
    if (c)
        return null == u
            ? Promise.reject(Error('Invalid channel ID'))
            : (await (0, o.Z)({
                  applicationId: t,
                  activityChannelId: u,
                  locationObject: {},
                  analyticsLocations: E
              }),
              Promise.resolve());
    if (_.Z.isConnected(t)) return Promise.resolve();
    let p = null;
    if (null == n) {
        let e = f.Z.getActiveLibraryApplication(t);
        n = null != e ? e.branchId : t;
    }
    if (h.Z.isLaunchable(t, n)) {
        var m;
        let e = h.Z.getState(t, n),
            s = f.Z.getActiveLaunchOptionId(t, n);
        if (null == e) throw Error('Missing dispatch game when launching');
        let o = f.Z.getLibraryApplication(t, n);
        if (null == o) throw Error('Missing library application when launching');
        p = ((m = t),
        a.tn
            .post({
                url: N.ANM.OAUTH2_AUTHORIZE,
                query: {
                    client_id: m,
                    response_type: 'token',
                    scope: [i.x.IDENTIFY].join(' ')
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
            )).then((t) => I.Z.launchDispatchApplication(e, t, d.default.locale, o.getBranchName(), s));
    } else {
        let e = l.Z.getApplication(t);
        p = null != e ? I.Z.launch(e) : I.Z.launchGame(t);
    }
    let T = Error('game not found');
    return null != p
        ? (s.Z.dispatch({
              type: 'LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE',
              applicationId: t,
              branchId: n
          }),
          s.Z.dispatch({
              type: 'GAME_LAUNCH_START',
              applicationId: t
          }),
          p
              .then((e) => {
                  s.Z.dispatch({
                      type: 'GAME_LAUNCH_SUCCESS',
                      applicationId: t,
                      pids: e
                  });
              })
              .catch((e) => {
                  A.Z.show(N.kVF.LAUNCH_GAME_FAILURE, O.Z.Messages.GAME_LAUNCH_FAILED_LAUNCH_TARGET_NOT_FOUND),
                      s.Z.dispatch({
                          type: 'GAME_LAUNCH_FAIL',
                          applicationId: t,
                          error: T
                      });
              }))
        : (s.Z.dispatch({
              type: 'GAME_LAUNCH_FAIL',
              applicationId: t,
              error: T
          }),
          Promise.reject(T));
}
t.Z = {
    addGame(e, t) {
        s.Z.dispatch({
            type: 'RUNNING_GAME_ADD_OVERRIDE',
            pid: e
        }),
            p.default.track(N.rMx.RUNNING_GAME_OVERRIDE_ADDED, { game_name: t });
    },
    toggleOverlay(e, t) {
        let n = E.Z.getGameByName(e.name);
        if (null != n) {
            let e = f.Z.getActiveLibraryApplication(n.id);
            if (null != e) {
                let t = m.x9(e.getFlags(), N.eHb.OVERLAY_DISABLED);
                S.h(e.id, e.branchId, t);
                return;
            }
        }
        s.Z.dispatch({
            type: 'RUNNING_GAME_TOGGLE_OVERLAY',
            game: e,
            newEnabledValue: t
        });
    },
    toggleDetection(e) {
        s.Z.dispatch({
            type: 'RUNNING_GAME_TOGGLE_DETECTION',
            game: e
        });
    },
    editName(e, t) {
        s.Z.dispatch({
            type: 'RUNNING_GAME_EDIT_NAME',
            game: e,
            newName: t
        });
    },
    identifyGame: (e, t) =>
        (0, u.Z)().then(
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
                        s.Z.dispatch({
                            type: 'GAME_ICON_UPDATE',
                            gameName: i.name,
                            icon: 'data:image/png;base64,'.concat(i.icon)
                        }),
                            n(i);
                    });
                })
        ),
    getDetectableGamesSupplemental(e) {
        let t = e.filter(c.Z.canFetch);
        if (0 === t.length) return;
        s.Z.dispatch({
            type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH',
            applicationIds: t
        });
        let n = async (e) => {
            try {
                let t = await a.tn.get({
                    url: N.ANM.APPLICATIONS_GAMES_SUPPLEMENTAL,
                    query: { application_ids: e }
                });
                s.Z.dispatch({
                    type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS',
                    applicationIds: e,
                    supplementalGameData: t.body.supplemental_game_data
                });
            } catch {
                s.Z.dispatch({
                    type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE',
                    applicationIds: e
                });
            }
        };
        for (; t.length > 0; ) n(t.splice(0, 20));
    },
    getDetectableGames() {
        if (!E.Z.fetching && null == E.Z.lastFetched)
            s.Z.wait(() => {
                s.Z.dispatch({ type: 'GAMES_DATABASE_FETCH' }),
                    a.tn
                        .get({
                            url: N.ANM.APPLICATIONS_DETECTABLE,
                            headers: { 'If-None-Match': E.Z.detectableGamesEtag },
                            retries: 1,
                            oldFormErrors: !0
                        })
                        .then(
                            (e) => {
                                let {
                                    body: t,
                                    headers: { etag: n }
                                } = e;
                                s.Z.dispatch({
                                    type: 'GAMES_DATABASE_UPDATE',
                                    games: t,
                                    etag: n
                                });
                            },
                            (e) => {
                                let { status: t } = e;
                                304 === t
                                    ? s.Z.dispatch({
                                          type: 'GAMES_DATABASE_UPDATE',
                                          games: [],
                                          etag: E.Z.detectableGamesEtag
                                      })
                                    : s.Z.dispatch({ type: 'GAMES_DATABASE_FETCH_FAIL' });
                            }
                        );
            });
    },
    reportUnverifiedGame(e) {
        var t, n;
        let { name: r, iconHash: i, publisher: o, distributor: l, sku: c, executableName: d } = e,
            _ = (0, u.F)(d);
        if (null != _)
            a.tn
                .post({
                    url: N.ANM.UNVERIFIED_APPLICATIONS,
                    body: {
                        name: r,
                        os: (0, T.getPlatformName)(),
                        icon: i,
                        distributor_application:
                            ((t = l),
                            (n = c),
                            null == t || '' === t
                                ? null
                                : {
                                      distributor: t,
                                      sku: n
                                  }),
                        executable: _,
                        publisher: o,
                        report_version: 3
                    },
                    retries: 1,
                    oldFormErrors: !0
                })
                .then((e) => {
                    let {
                        body: { name: t, hash: n, missing_data: r }
                    } = e;
                    s.Z.dispatch({
                        type: 'UNVERIFIED_GAME_UPDATE',
                        name: t,
                        hash: n,
                        missingData: r
                    });
                });
    },
    uploadIcon(e, t, n) {
        a.tn.post({
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
        s.Z.dispatch({
            type: 'RUNNING_GAME_DELETE_ENTRY',
            game: e
        });
    },
    launch: C,
    async join(e) {
        let { userId: t, sessionId: n, applicationId: r, channelId: i, messageId: a, intent: o = v.Ws.PLAY, embedded: l = !1 } = e;
        if (__OVERLAY__)
            return (
                s.Z.dispatch({
                    type: 'OVERLAY_JOIN_GAME',
                    userId: t,
                    sessionId: n,
                    applicationId: r,
                    channelId: i,
                    messageId: a
                }),
                Promise.resolve(!0)
            );
        s.Z.dispatch({
            type: 'ACTIVITY_JOIN_LOADING',
            applicationId: r
        });
        try {
            let e = await g.Z.getJoinSecret(t, n, r, i, a);
            return (
                R({
                    applicationId: r,
                    secret: e,
                    channelId: i,
                    intent: o,
                    embedded: l
                }),
                !0
            );
        } catch (e) {
            return (
                s.Z.dispatch({
                    type: 'ACTIVITY_JOIN_FAILED',
                    applicationId: r
                }),
                !1
            );
        }
    },
    joinWithSecret: R
};
