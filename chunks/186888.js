"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("424973"), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("77078"),
  r = n("260365"),
  o = n("987317"),
  u = n("79112"),
  d = n("376556"),
  c = n("871388"),
  f = n("152311"),
  E = n("36539"),
  h = n("161454"),
  _ = n("860285"),
  C = n("47319"),
  S = n("86878"),
  I = n("686470"),
  m = n("535974"),
  p = n("599110"),
  T = n("602043"),
  g = n("780009"),
  A = n("49111"),
  N = n("782340");
let R = d.default.get(A.PlatformTypes.XBOX).name;

function O(e) {
  let {
    currentActivities: t
  } = e, n = t.length > 1, O = function(e) {
    let {
      currentActivities: t
    } = e, n = (0, l.useStateFromStores)([C.default], () => C.default.getAccounts().some(e => e.type === d.default.get(A.PlatformTypes.XBOX).type)), s = t.some(e => {
      let {
        activity: t
      } = e;
      return (0, E.default)(t)
    });
    return n || !s ? null : (0, a.jsx)(i.MenuItem, {
      id: "xbox-connect",
      action: () => u.default.open(A.UserSettingsSections.CONNECTIONS),
      label: N.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
        platform: R
      })
    })
  }(e), v = function(e) {
    let {
      currentActivities: t
    } = e, n = s.useContext(p.AnalyticsContext);
    return (0, l.useStateFromStoresArray)([h.default, I.default, _.default, m.default, S.default], () => t.filter(e => !(0, f.default)(e.activity)).map(e => {
      let {
        activity: t,
        game: a
      } = e, s = I.default.getActiveLibraryApplication(a.id);
      return {
        ...e,
        libraryApplication: s,
        canJoin: null != t && (0, c.default)(t, A.ActivityFlags.JOIN) && t.type === A.ActivityTypes.PLAYING,
        canPlay: (0, T.isLaunchable)({
          LibraryApplicationStore: I.default,
          LaunchableGameStore: _.default,
          DispatchApplicationStore: m.default,
          ConnectedAppsStore: S.default,
          applicationId: a.id,
          branchId: null != s ? s.branchId : null
        }),
        isLaunching: _.default.launchingGames.has(a.id),
        isRunning: h.default.getRunningVerifiedApplicationIds().includes(a.id),
        location: n.location
      }
    }), [n.location, t])
  }(e), L = [];
  for (let e of v) {
    let {
      activity: t
    } = e;
    null != t && null != t.type && L.push(function(e, t) {
      let {
        canJoin: n,
        activity: s,
        activityUser: l
      } = e;
      if (!n || null == s) return null;
      async function u() {
        if (null == s) return;
        let e = await r.default.sendActivityInviteUser({
          type: A.ActivityActionTypes.JOIN_REQUEST,
          userId: l.id,
          activity: s,
          location: A.AnalyticsLocations.PROFILE_POPOUT
        });
        null != e && o.default.selectPrivateChannel(e.id)
      }
      return (0, a.jsx)(i.MenuItem, {
        id: "join-".concat(s.session_id),
        label: t ? N.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN_USER.format({
          name: l.toString()
        }) : N.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
        action: u
      })
    }(e, n), function(e, t) {
      let {
        activity: n,
        game: s,
        libraryApplication: l,
        location: r,
        canPlay: o,
        isRunning: u,
        isLaunching: d
      } = e;
      if (!o || null == n) return null;
      let c = u ? N.default.Messages.ACTIVITY_FEED_POPOUT_APPLICATION_RUNNING.format({
        name: s.name
      }) : d ? N.default.Messages.ACTIVITY_FEED_POPOUT_APPLICATION_LAUNCHING.format({
        name: s.name
      }) : void 0;
      return (0, a.jsx)(i.MenuItem, {
        id: "play-".concat(n.session_id),
        action: function() {
          (0, g.playApplication)(s.id, l, {
            analyticsParams: {
              location: {
                ...r,
                object: A.AnalyticsObjects.LIST_ITEM
              }
            }
          })
        },
        label: t ? N.default.Messages.APPLICATION_CONTEXT_MENU_LAUNCH_APPLICATION_NAME.format({
          name: s.name
        }) : N.default.Messages.APPLICATION_CONTEXT_MENU_LAUNCH,
        subtext: c
      })
    }(e, n))
  }
  return [O, ...L]
}