n(47120), n(411104);
var r = n(664751), i = n(243814), a = n(544891), o = n(570140), s = n(566620), l = n(812206), u = n(439849), c = n(669764), d = n(706454), _ = n(757266), E = n(77498), f = n(283595), h = n(417363), p = n(626135), m = n(630388), I = n(877481), T = n(358085), g = n(278323), S = n(58642), A = n(254854), N = n(981631), v = n(701488), O = n(689938);
function R(e) {
    let {
        applicationId: t,
        secret: n,
        channelId: r,
        intent: i = v.Ws.PLAY,
        embedded: a = !1,
        analyticsLocations: s = []
    } = e;
    C(t, null, r, a, s).then(() => I.Z.waitConnected(t)).then(() => Promise.race([I.Z.waitSubscribed(t, N.zMe.ACTIVITY_JOIN)])).then(() => {
        o.Z.dispatch({
            type: 'ACTIVITY_JOIN',
            applicationId: t,
            secret: n,
            intent: i,
            embedded: a
        });
    }).catch(() => o.Z.dispatch({
        type: 'ACTIVITY_JOIN_FAILED',
        applicationId: t
    }));
}
function C(e, t, n) {
    let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
    if (u)
        return null == n ? Promise.reject(Error('Invalid channel ID')) : ((0, s.J$)(n, e, c), Promise.resolve());
    if (_.Z.isConnected(e))
        return Promise.resolve();
    let E = null;
    if (null == t) {
        let n = f.Z.getActiveLibraryApplication(e);
        t = null != n ? n.branchId : e;
    }
    if (h.Z.isLaunchable(e, t)) {
        var p;
        let n = h.Z.getState(e, t), o = f.Z.getActiveLaunchOptionId(e, t);
        if (null == n)
            throw Error('Missing dispatch game when launching');
        let s = f.Z.getLibraryApplication(e, t);
        if (null == s)
            throw Error('Missing library application when launching');
        E = (p = e, a.tn.post({
            url: N.ANM.OAUTH2_AUTHORIZE,
            query: {
                client_id: p,
                response_type: 'token',
                scope: [i.x.IDENTIFY].join(' ')
            },
            retries: 3,
            body: { authorize: !0 },
            oldFormErrors: !0
        }).then(e => {
            let t = e.body.location.split(/#|\?/), n = r.parse(t[t.length - 1]);
            if ('invalid_request' === n.error)
                return null;
            if (null != n.error) {
                var i;
                throw Error('OAuth2 Error: '.concat(n.error, ': ').concat(null !== (i = n.error_description) && void 0 !== i ? i : 'unknown error'));
            }
            return n.access_token;
        }, e => {
            if (404 === e.status)
                return null;
            throw e;
        })).then(e => I.Z.launchDispatchApplication(n, e, d.default.locale, s.getBranchName(), o));
    } else {
        let t = l.Z.getApplication(e);
        E = null != t ? I.Z.launch(t) : I.Z.launchGame(e);
    }
    let m = Error('game not found');
    return null != E ? (o.Z.dispatch({
        type: 'LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE',
        applicationId: e,
        branchId: t
    }), o.Z.dispatch({
        type: 'GAME_LAUNCH_START',
        applicationId: e
    }), E.then(t => {
        o.Z.dispatch({
            type: 'GAME_LAUNCH_SUCCESS',
            applicationId: e,
            pids: t
        });
    }).catch(t => {
        A.Z.show(N.kVF.LAUNCH_GAME_FAILURE, O.Z.Messages.GAME_LAUNCH_FAILED_LAUNCH_TARGET_NOT_FOUND), o.Z.dispatch({
            type: 'GAME_LAUNCH_FAIL',
            applicationId: e,
            error: m
        });
    })) : (o.Z.dispatch({
        type: 'GAME_LAUNCH_FAIL',
        applicationId: e,
        error: m
    }), Promise.reject(m));
}
t.Z = {
    addGame(e, t) {
        o.Z.dispatch({
            type: 'RUNNING_GAME_ADD_OVERRIDE',
            pid: e
        }), p.default.track(N.rMx.RUNNING_GAME_OVERRIDE_ADDED, { game_name: t });
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
        o.Z.dispatch({
            type: 'RUNNING_GAME_TOGGLE_OVERLAY',
            game: e,
            newEnabledValue: t
        });
    },
    toggleDetection(e) {
        o.Z.dispatch({
            type: 'RUNNING_GAME_TOGGLE_DETECTION',
            game: e
        });
    },
    editName(e, t) {
        o.Z.dispatch({
            type: 'RUNNING_GAME_EDIT_NAME',
            game: e,
            newName: t
        });
    },
    identifyGame: (e, t) => (0, u.Z)().then(t => new Promise((n, r) => {
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
            o.Z.dispatch({
                type: 'GAME_ICON_UPDATE',
                gameName: i.name,
                icon: 'data:image/png;base64,'.concat(i.icon)
            }), n(i);
        });
    })),
    getDetectableGamesSupplemental(e) {
        let t = e.filter(c.Z.canFetch);
        if (0 === t.length)
            return;
        o.Z.dispatch({
            type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH',
            applicationIds: t
        });
        let n = async e => {
            try {
                let t = await a.tn.get({
                    url: N.ANM.APPLICATIONS_GAMES_SUPPLEMENTAL,
                    query: { application_ids: e }
                });
                o.Z.dispatch({
                    type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS',
                    applicationIds: e,
                    supplementalGameData: t.body.supplemental_game_data
                });
            } catch {
                o.Z.dispatch({
                    type: 'DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE',
                    applicationIds: e
                });
            }
        };
        for (; t.length > 0;)
            n(t.splice(0, 20));
    },
    getDetectableGames() {
        if (!E.Z.fetching && null == E.Z.lastFetched)
            o.Z.wait(() => {
                o.Z.dispatch({ type: 'GAMES_DATABASE_FETCH' }), a.tn.get({
                    url: N.ANM.APPLICATIONS_DETECTABLE,
                    headers: { 'If-None-Match': E.Z.detectableGamesEtag },
                    retries: 1,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t,
                        headers: {etag: n}
                    } = e;
                    o.Z.dispatch({
                        type: 'GAMES_DATABASE_UPDATE',
                        games: t,
                        etag: n
                    });
                }, e => {
                    let {status: t} = e;
                    304 === t ? o.Z.dispatch({
                        type: 'GAMES_DATABASE_UPDATE',
                        games: [],
                        etag: E.Z.detectableGamesEtag
                    }) : o.Z.dispatch({ type: 'GAMES_DATABASE_FETCH_FAIL' });
                });
            });
    },
    reportUnverifiedGame(e) {
        var t, n;
        let {
                name: r,
                iconHash: i,
                publisher: s,
                distributor: l,
                sku: c,
                executableName: d
            } = e, _ = (0, u.F)(d);
        if (null != _)
            a.tn.post({
                url: N.ANM.UNVERIFIED_APPLICATIONS,
                body: {
                    name: r,
                    os: (0, T.getPlatformName)(),
                    icon: i,
                    distributor_application: (t = l, n = c, null == t || '' === t ? null : {
                        distributor: t,
                        sku: n
                    }),
                    executable: _,
                    publisher: s,
                    report_version: 3
                },
                retries: 1,
                oldFormErrors: !0
            }).then(e => {
                let {
                    body: {
                        name: t,
                        hash: n,
                        missing_data: r
                    }
                } = e;
                o.Z.dispatch({
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
        o.Z.dispatch({
            type: 'RUNNING_GAME_DELETE_ENTRY',
            game: e
        });
    },
    launch: C,
    async join(e) {
        let {
            userId: t,
            sessionId: n,
            applicationId: r,
            channelId: i,
            messageId: a,
            intent: s = v.Ws.PLAY,
            embedded: l = !1
        } = e;
        if (__OVERLAY__)
            return o.Z.dispatch({
                type: 'OVERLAY_JOIN_GAME',
                userId: t,
                sessionId: n,
                applicationId: r,
                channelId: i,
                messageId: a
            }), Promise.resolve(!0);
        o.Z.dispatch({
            type: 'ACTIVITY_JOIN_LOADING',
            applicationId: r
        });
        try {
            let e = await g.Z.getJoinSecret(t, n, r, i, a);
            return R({
                applicationId: r,
                secret: e,
                channelId: i,
                intent: s,
                embedded: l
            }), !0;
        } catch (e) {
            return o.Z.dispatch({
                type: 'ACTIVITY_JOIN_FAILED',
                applicationId: r
            }), !1;
        }
    },
    joinWithSecret: R
};
