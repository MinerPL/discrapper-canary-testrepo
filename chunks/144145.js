n.d(t, {
  Z: function() {
return Z;
  }
}), n(653041), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(481060),
  l = n(278323),
  o = n(287734),
  c = n(230711),
  d = n(726542),
  u = n(620662),
  _ = n(841784),
  h = n(802856),
  E = n(594190),
  I = n(592745),
  m = n(553795),
  g = n(757266),
  p = n(283595),
  T = n(417363),
  S = n(626135),
  f = n(804739),
  C = n(346329),
  N = n(981631),
  A = n(689938);
let v = d.Z.get(N.ABu.XBOX).name;

function Z(e) {
  let {
currentActivities: t
  } = e, n = t.length > 1, Z = function(e) {
let {
  currentActivities: t
} = e, n = (0, s.e7)([m.Z], () => m.Z.getAccounts().some(e => e.type === d.Z.get(N.ABu.XBOX).type)), a = t.some(e => {
  let {
    activity: t
  } = e;
  return (0, h.Z)(t);
});
return n || !a ? null : (0, i.jsx)(r.MenuItem, {
  id: 'xbox-connect',
  action: () => c.Z.open(N.oAB.CONNECTIONS),
  label: A.Z.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
    platform: v
  })
});
  }(e), L = function(e) {
let {
  currentActivities: t
} = e, n = a.useContext(S.AnalyticsContext);
return (0, s.Wu)([
  E.ZP,
  p.Z,
  I.Z,
  T.Z,
  g.Z
], () => t.filter(e => !(0, _.Z)(e.activity)).map(e => {
  let {
    activity: t,
    game: i
  } = e, a = p.Z.getActiveLibraryApplication(i.id);
  return {
    ...e,
    libraryApplication: a,
    canJoin: null != t && (0, u.Z)(t, N.xjy.JOIN) && t.type === N.IIU.PLAYING,
    canPlay: (0, f.t)({
      LibraryApplicationStore: p.Z,
      LaunchableGameStore: I.Z,
      DispatchApplicationStore: T.Z,
      ConnectedAppsStore: g.Z,
      applicationId: i.id,
      branchId: null != a ? a.branchId : null
    }),
    isLaunching: I.Z.launchingGames.has(i.id),
    isRunning: E.ZP.getRunningVerifiedApplicationIds().includes(i.id),
    location: n.location
  };
}), [
  n.location,
  t
]);
  }(e), O = [];
  for (let e of L) {
let {
  activity: t
} = e;
null != t && null != t.type && O.push(function(e, t) {
  let {
    canJoin: n,
    activity: a,
    activityUser: s
  } = e;
  if (!n || null == a)
    return null;
  async function c() {
    if (null == a)
      return;
    let e = await l.Z.sendActivityInviteUser({
      type: N.mFx.JOIN_REQUEST,
      userId: s.id,
      activity: a,
      location: N.Sbl.PROFILE_POPOUT
    });
    null != e && o.default.selectPrivateChannel(e.id);
  }
  return (0, i.jsx)(r.MenuItem, {
    id: 'join-'.concat(a.session_id),
    label: t ? A.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN_USER.format({
      name: s.toString()
    }) : A.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
    action: c
  });
}(e, n), function(e, t) {
  let {
    activity: n,
    game: a,
    libraryApplication: s,
    location: l,
    canPlay: o,
    isRunning: c,
    isLaunching: d
  } = e;
  if (!o || null == n)
    return null;
  let u = c ? A.Z.Messages.ACTIVITY_FEED_POPOUT_APPLICATION_RUNNING.format({
    name: a.name
  }) : d ? A.Z.Messages.ACTIVITY_FEED_POPOUT_APPLICATION_LAUNCHING.format({
    name: a.name
  }) : void 0;
  return (0, i.jsx)(r.MenuItem, {
    id: 'play-'.concat(n.session_id),
    action: function() {
      (0, C.playApplication)(a.id, s, {
        analyticsParams: {
          location: {
            ...l,
            object: N.qAy.LIST_ITEM
          }
        }
      });
    },
    label: t ? A.Z.Messages.APPLICATION_CONTEXT_MENU_LAUNCH_APPLICATION_NAME.format({
      name: a.name
    }) : A.Z.Messages.APPLICATION_CONTEXT_MENU_LAUNCH,
    subtext: u
  });
}(e, n));
  }
  return [
Z,
...O
  ];
}