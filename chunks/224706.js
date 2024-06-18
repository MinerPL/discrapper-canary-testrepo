"use strict";
n(47120), n(411104);
var i = n(664751),
  r = n(243814),
  s = n(544891),
  o = n(570140),
  a = n(566620),
  l = n(812206),
  u = n(439849),
  _ = n(669764),
  d = n(706454),
  c = n(757266),
  E = n(77498),
  I = n(283595),
  T = n(417363),
  h = n(626135),
  S = n(630388),
  f = n(877481),
  N = n(358085),
  A = n(278323),
  m = n(58642),
  O = n(254854),
  R = n(981631),
  C = n(701488),
  p = n(689938);

function g(e) {
  let {
    applicationId: t,
    secret: n,
    channelId: i,
    intent: r = C.Ws.PLAY,
    embedded: s = !1,
    analyticsLocations: a = []
  } = e;
  L(t, null, i, s, a).then(() => f.Z.waitConnected(t)).then(() => Promise.race([f.Z.waitSubscribed(t, R.zMe.ACTIVITY_JOIN)])).then(() => {
    o.Z.dispatch({
      type: "ACTIVITY_JOIN",
      applicationId: t,
      secret: n,
      intent: r,
      embedded: s
    })
  }).catch(() => o.Z.dispatch({
    type: "ACTIVITY_JOIN_FAILED",
    applicationId: t
  }))
}

function L(e, t, n) {
  let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    _ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
  if (u) return null == n ? Promise.reject(Error("Invalid channel ID")) : ((0, a.J$)(n, e, _), Promise.resolve());
  if (c.Z.isConnected(e)) return Promise.resolve();
  let E = null;
  if (null == t) {
    let n = I.Z.getActiveLibraryApplication(e);
    t = null != n ? n.branchId : e
  }
  if (T.Z.isLaunchable(e, t)) {
    var h;
    let n = T.Z.getState(e, t),
      o = I.Z.getActiveLaunchOptionId(e, t);
    if (null == n) throw Error("Missing dispatch game when launching");
    let a = I.Z.getLibraryApplication(e, t);
    if (null == a) throw Error("Missing library application when launching");
    E = (h = e, s.tn.post({
      url: R.ANM.OAUTH2_AUTHORIZE,
      query: {
        client_id: h,
        response_type: "token",
        scope: [r.x.IDENTIFY].join(" ")
      },
      retries: 3,
      body: {
        authorize: !0
      },
      oldFormErrors: !0
    }).then(e => {
      let t = e.body.location.split(/#|\?/),
        n = i.parse(t[t.length - 1]);
      if ("invalid_request" === n.error) return null;
      if (null != n.error) {
        var r;
        throw Error("OAuth2 Error: ".concat(n.error, ": ").concat(null !== (r = n.error_description) && void 0 !== r ? r : "unknown error"))
      }
      return n.access_token
    }, e => {
      if (404 === e.status) return null;
      throw e
    })).then(e => f.Z.launchDispatchApplication(n, e, d.default.locale, a.getBranchName(), o))
  } else {
    let t = l.Z.getApplication(e);
    E = null != t ? f.Z.launch(t) : f.Z.launchGame(e)
  }
  let S = Error("game not found");
  return null != E ? (o.Z.dispatch({
    type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE",
    applicationId: e,
    branchId: t
  }), o.Z.dispatch({
    type: "GAME_LAUNCH_START",
    applicationId: e
  }), E.then(t => {
    o.Z.dispatch({
      type: "GAME_LAUNCH_SUCCESS",
      applicationId: e,
      pids: t
    })
  }).catch(t => {
    O.Z.show(R.kVF.LAUNCH_GAME_FAILURE, p.Z.Messages.GAME_LAUNCH_FAILED_LAUNCH_TARGET_NOT_FOUND), o.Z.dispatch({
      type: "GAME_LAUNCH_FAIL",
      applicationId: e,
      error: S
    })
  })) : (o.Z.dispatch({
    type: "GAME_LAUNCH_FAIL",
    applicationId: e,
    error: S
  }), Promise.reject(S))
}
t.Z = {
  addGame(e, t) {
    o.Z.dispatch({
      type: "RUNNING_GAME_ADD_OVERRIDE",
      pid: e
    }), h.default.track(R.rMx.RUNNING_GAME_OVERRIDE_ADDED, {
      game_name: t
    })
  },
  toggleOverlay(e, t) {
    let n = E.Z.getGameByName(e.name);
    if (null != n) {
      let e = I.Z.getActiveLibraryApplication(n.id);
      if (null != e) {
        let t = S.x9(e.getFlags(), R.eHb.OVERLAY_DISABLED);
        m.h(e.id, e.branchId, t);
        return
      }
    }
    o.Z.dispatch({
      type: "RUNNING_GAME_TOGGLE_OVERLAY",
      game: e,
      newEnabledValue: t
    })
  },
  toggleDetection(e) {
    o.Z.dispatch({
      type: "RUNNING_GAME_TOGGLE_DETECTION",
      game: e
    })
  },
  editName(e, t) {
    o.Z.dispatch({
      type: "RUNNING_GAME_EDIT_NAME",
      game: e,
      newName: t
    })
  },
  identifyGame: (e, t) => (0, u.Z)().then(t => new Promise((n, i) => {
    if (null == t) {
      i(Error("Game utils module not loaded"));
      return
    }
    t.identifyGame(e, (t, r) => {
      if (0 !== t) {
        i(Error("Error ".concat(t, " when fetching info on ").concat(e)));
        return
      }
      if (null == r.icon || "" === r.icon || null == r.name || "" === r.name) {
        i(Error("Did not find data on ".concat(e)));
        return
      }
      o.Z.dispatch({
        type: "GAME_ICON_UPDATE",
        gameName: r.name,
        icon: "data:image/png;base64,".concat(r.icon)
      }), n(r)
    })
  })),
  getDetectableGamesSupplemental(e) {
    let t = e.filter(_.Z.canFetch);
    if (0 === t.length) return;
    o.Z.dispatch({
      type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH",
      applicationIds: t
    });
    let n = async e => {
      try {
        let t = await s.tn.get({
          url: R.ANM.APPLICATIONS_GAMES_SUPPLEMENTAL,
          query: {
            application_ids: e
          }
        });
        o.Z.dispatch({
          type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS",
          applicationIds: e,
          supplementalGameData: t.body.supplemental_game_data
        })
      } catch {
        o.Z.dispatch({
          type: "DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE",
          applicationIds: e
        })
      }
    };
    for (; t.length > 0;) n(t.splice(0, 20))
  },
  getDetectableGames() {
    if (!E.Z.fetching && null == E.Z.lastFetched) o.Z.wait(() => {
      o.Z.dispatch({
        type: "GAMES_DATABASE_FETCH"
      }), s.tn.get({
        url: R.ANM.APPLICATIONS_DETECTABLE,
        headers: {
          "If-None-Match": E.Z.detectableGamesEtag
        },
        retries: 1,
        oldFormErrors: !0
      }).then(e => {
        let {
          body: t,
          headers: {
            etag: n
          }
        } = e;
        o.Z.dispatch({
          type: "GAMES_DATABASE_UPDATE",
          games: t,
          etag: n
        })
      }, e => {
        let {
          status: t
        } = e;
        304 === t ? o.Z.dispatch({
          type: "GAMES_DATABASE_UPDATE",
          games: [],
          etag: E.Z.detectableGamesEtag
        }) : o.Z.dispatch({
          type: "GAMES_DATABASE_FETCH_FAIL"
        })
      })
    })
  },
  reportUnverifiedGame(e) {
    var t, n;
    let {
      name: i,
      iconHash: r,
      publisher: a,
      distributor: l,
      sku: _,
      executableName: d
    } = e, c = (0, u.F)(d);
    if (null != c) s.tn.post({
      url: R.ANM.UNVERIFIED_APPLICATIONS,
      body: {
        name: i,
        os: (0, N.getPlatformName)(),
        icon: r,
        distributor_application: (t = l, n = _, null == t || "" === t ? null : {
          distributor: t,
          sku: n
        }),
        executable: c,
        publisher: a,
        report_version: 3
      },
      retries: 1,
      oldFormErrors: !0
    }).then(e => {
      let {
        body: {
          name: t,
          hash: n,
          missing_data: i
        }
      } = e;
      o.Z.dispatch({
        type: "UNVERIFIED_GAME_UPDATE",
        name: t,
        hash: n,
        missingData: i
      })
    })
  },
  uploadIcon(e, t, n) {
    s.tn.post({
      url: R.ANM.UNVERIFIED_APPLICATIONS_ICONS,
      body: {
        application_name: e,
        application_hash: t,
        icon: n
      },
      retries: 1,
      oldFormErrors: !0
    })
  },
  deleteEntry(e) {
    o.Z.dispatch({
      type: "RUNNING_GAME_DELETE_ENTRY",
      game: e
    })
  },
  launch: L,
  async join(e) {
    let {
      userId: t,
      sessionId: n,
      applicationId: i,
      channelId: r,
      messageId: s,
      intent: a = C.Ws.PLAY,
      embedded: l = !1
    } = e;
    if (__OVERLAY__) return o.Z.dispatch({
      type: "OVERLAY_JOIN_GAME",
      userId: t,
      sessionId: n,
      applicationId: i,
      channelId: r,
      messageId: s
    }), Promise.resolve(!0);
    o.Z.dispatch({
      type: "ACTIVITY_JOIN_LOADING",
      applicationId: i
    });
    try {
      let e = await A.Z.getJoinSecret(t, n, i, r, s);
      return g({
        applicationId: i,
        secret: e,
        channelId: r,
        intent: a,
        embedded: l
      }), !0
    } catch (e) {
      return o.Z.dispatch({
        type: "ACTIVITY_JOIN_FAILED",
        applicationId: i
      }), !1
    }
  },
  joinWithSecret: g
}