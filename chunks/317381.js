let r;
n.d(t, {
  i6: function() {
return N;
  }
}), n(47120), n(653041), n(51350);
var i, a = n(442837),
  s = n(570140),
  o = n(911969),
  l = n(314897),
  u = n(592125),
  c = n(944486),
  d = n(594174),
  _ = n(585483),
  E = n(358085),
  f = n(139143),
  h = n(155268),
  p = n(613611),
  m = n(761122),
  I = n(917107),
  T = n(918559),
  g = n(981631);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let A = {
everLaunchedActivities: new Set(),
seenNewActivities: {},
seenUpdatedActivities: {},
shouldShowNewActivityIndicator: !1
  },
  N = [],
  v = new Map(),
  O = new Map(),
  R = new Map(),
  C = new Map(),
  y = !1,
  D = new Map(),
  L = new Map(),
  b = new Map(),
  M = new Map(),
  P = new Map(),
  U = new Map(),
  w = new Map();
let x = T.Ez.DISCONNECTED,
  G = T.MI.RESIZABLE;

function k(e) {
  return null != e ? e : '0';
}

function B(e) {
  var t, n, r;
  let {
guildId: i,
channelId: a,
location: s,
applicationId: o,
launchId: u,
compositeInstanceId: c,
participants: d,
analyticsActivitySessionId: E
  } = e, m = (0, h.Z)(o);
  if (null == m)
return;
  let I = d.map(e => e.userId),
T = l.default.getId(),
S = I.some(e => e === T),
A = null === (t = d.find(e => e.userId === T)) || void 0 === t ? void 0 : t.sessionId,
N = d.some(e => (0, p.J)(e)),
y = null == c,
D = v.get(o),
L = {
  analyticsActivitySessionId: null != E ? E : void 0,
  applicationId: o,
  channelId: a,
  guildId: i,
  location: null != s ? s : void 0,
  launchId: u,
  compositeInstanceId: c,
  url: m,
  userIds: new Set(I),
  participants: d
};
  S && null != D && v.set(D.applicationId, {
...D,
...L
  });
  null != D && a === D.channelId && o === (null == D ? void 0 : D.applicationId) && (!S && Array.from(D.userIds).some(e => e === T) || !y && !N) ? C.get(a) === o ? C.delete(a) : (v.delete(o), _.S.dispatch(g.CkL.RELEASE_ACTIVITY_WEB_VIEW)) : S && (null == D || D.applicationId !== o || D.channelId !== a) && (A === l.default.getSessionId() && !y || (0, f.$)('EmbeddedActivitiesStore')) && (V({
channelId: a,
applicationId: o,
launchId: u,
compositeInstanceId: c,
location: null != s ? s : void 0
  }), _.S.dispatch(g.CkL.OPEN_EMBEDDED_ACTIVITY, {
channelId: a
  }));
  let b = (null !== (n = R.get(a)) && void 0 !== n ? n : []).filter(e => e.applicationId !== o),
M = k(i),
P = (null !== (r = O.get(M)) && void 0 !== r ? r : []).filter(e => !(e.applicationId === o && e.channelId === a));
  I.length > 0 && (b.push(L), P.push(L)), R.set(a, b), O.set(M, P);
}

function F(e) {
  let t = e.embedded_activities,
n = e.activity_instances;
  null == t || t.forEach(t => {
let {
  channel_id: n,
  embedded_activity: r,
  connections: i
} = t;
B({
  guildId: e.id,
  channelId: n,
  applicationId: r.application_id,
  launchId: r.activity_id,
  compositeInstanceId: void 0,
  participants: i.map(e => ({
    userId: e.user_id
  })),
  analyticsActivitySessionId: r.activity_id
});
  }), null == n || n.forEach(t => {
let {
  location: n,
  application_id: r,
  launch_id: i,
  composite_instance_id: a,
  participants: s
} = t;
B({
  guildId: e.id,
  channelId: n.channel_id,
  location: n,
  applicationId: r,
  launchId: i,
  compositeInstanceId: a,
  participants: s.map(e => ({
    userId: e.user_id,
    sessionId: e.session_id
  }))
});
  });
}

function V(e) {
  var t, n;
  let {
channelId: i,
applicationId: a,
launchId: s,
compositeInstanceId: o,
location: _
  } = e, E = (0, h.Z)(a), f = l.default.getSessionId();
  if (null == E || null == f || (null === (t = v.get(a)) || void 0 === t ? void 0 : t.channelId) === i)
return !1;
  let p = u.Z.getChannel(i),
m = null == p ? void 0 : p.getGuildId(),
g = d.default.getCurrentUser();
  if (null == m && !(null !== (n = null == p ? void 0 : p.isPrivate()) && void 0 !== n && n) || null == g)
return !1;
  r = i, v.set(a, {
guildId: m,
channelId: i,
applicationId: a,
url: E,
userIds: new Set([g.id]),
connectedSince: Date.now(),
launchId: s,
compositeInstanceId: o,
location: _
  }), x = r !== c.Z.getChannelId() || (0, I.Z)(i) ? T.Ez.PIP : T.Ez.PANEL, w.set(Z(i, a), Date.now());
}

function H() {
  y = !1;
}

function Z(e, t) {
  return ''.concat(e, ':').concat(t);
}
class Y extends(i = a.ZP.PersistedStore) {
  initialize(e) {
var t;
let n = new Set(null !== (t = null == e ? void 0 : e.everLaunchedActivities) && void 0 !== t ? t : []);
null != e && (A = {
  ...e,
  everLaunchedActivities: n
});
  }
  getState() {
return A;
  }
  getSelfEmbeddedActivityForChannel(e) {
var t;
return null !== (t = Array.from(v.values()).find(t => {
  let {
    channelId: n
  } = t;
  return e === n;
})) && void 0 !== t ? t : null;
  }
  getSelfEmbeddedActivities() {
return v;
  }
  getEmbeddedActivitiesForGuild(e) {
var t;
return null !== (t = O.get(e)) && void 0 !== t ? t : N;
  }
  getEmbeddedActivitiesForChannel(e) {
var t;
return null !== (t = R.get(e)) && void 0 !== t ? t : N;
  }
  getEmbeddedActivitiesByChannel() {
return R;
  }
  getEmbeddedActivityDurationMs(e, t) {
let n = w.get(Z(e, t));
return null == n ? null : Date.now() - n;
  }
  isLaunchingActivity() {
return y;
  }
  getShelfActivities(e) {
var t;
let n = k(e);
return null !== (t = D.get(n)) && void 0 !== t ? t : [];
  }
  getShelfFetchStatus(e) {
let t = k(e);
return L.get(t);
  }
  shouldFetchShelf(e) {
var t, n;
let r = k(e),
  i = null !== (t = L.get(r)) && void 0 !== t ? t : {
    isFetching: !1
  },
  a = Date.now() - (null !== (n = null == i ? void 0 : i.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 21600000;
return !(null == i ? void 0 : i.isFetching) && a;
  }
  getOrientationLockStateForApp(e) {
var t;
return null !== (t = b.get(e)) && void 0 !== t ? t : null;
  }
  getPipOrientationLockStateForApp(e) {
var t;
return null !== (t = M.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e);
  }
  getGridOrientationLockStateForApp(e) {
var t, n;
return null !== (n = null !== (t = P.get(e)) && void 0 !== t ? t : M.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e);
  }
  getLayoutModeForApp(e) {
return U.get(e);
  }
  getConnectedActivityChannelId() {
return r;
  }
  getActivityPanelMode() {
return x;
  }
  getFocusedLayout() {
return G;
  }
  getCurrentEmbeddedActivity() {
var e;
let t = this.getConnectedActivityChannelId();
if (null != t)
  return null !== (e = this.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0;
  }
  getEmbeddedActivityForUserId(e, t) {
let n;
if (void 0 !== t) {
  s: for (let [r, i] of R)
    for (let r of i)
      if (r.applicationId === t && r.userIds.has(e)) {
        n = r;
        break s;
      }
  return n;
}
  }
  hasActivityEverBeenLaunched(e) {
return A.everLaunchedActivities.has(e);
  }
}
S(Y, 'displayName', 'EmbeddedActivitiesStore'), S(Y, 'persistKey', 'EmbeddedActivities'), S(Y, 'migrations', [
  e => ({
...e,
seenFeaturedActivities: [],
shouldShowNewActivityIndicator: !1
  }),
  e => (delete e.seenFeaturedActivities, {
...e
  }),
  e => (delete e.seenActivities, {
...e
  }),
  e => (delete e.currentFreeActivity, delete e.lastFreeActivityRotationTimestampMs, delete e.freePeriodActivities, delete e.shouldShowFreeActivityIndicator, {
...e
  }),
  e => ({
...e,
seenNewActivities: {},
seenUpdatedActivities: {}
  }),
  e => {
var t;
let n = new Set(null !== (t = e.everLaunchedActivities) && void 0 !== t ? t : []);
return {
  ...e,
  everLaunchedActivities: n
};
  },
  e => (delete e.usersHavePlayedByApp, {
...e
  })
]);
let j = new Y(s.Z, {
  ACTIVITY_LAYOUT_MODE_UPDATE: function(e) {
let {
  applicationId: t,
  layoutMode: n
} = e;
U.set(t, n);
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
let {
  guilds: t
} = e;
R.clear(), O.clear(), t.forEach(e => F(e));
  },
  GUILD_CREATE: function(e) {
let {
  guild: t
} = e;
F(t);
  },
  CALL_CREATE: function(e) {
let {
  channelId: t,
  embeddedActivities: n
} = e;
! function(e, t) {
  t.forEach(e => {
    let {
      channel_id: t,
      embedded_activity: n,
      connections: r
    } = e;
    B({
      guildId: null,
      channelId: t,
      applicationId: n.application_id,
      launchId: n.activity_id,
      compositeInstanceId: void 0,
      participants: r.map(e => ({
        userId: e.user_id
      })),
      analyticsActivitySessionId: n.activity_id
    });
  });
}(0, n);
  },
  CHANNEL_DELETE: function(e) {
let {
  channel: t
} = e;
R.set(t.id, []);
let n = t.guild_id;
if (null != n) {
  var r;
  let e = k(n),
    i = (null !== (r = O.get(e)) && void 0 !== r ? r : []).filter(e => e.channelId !== t.id);
  O.set(e, i);
}
  },
  EMBEDDED_ACTIVITY_LAUNCH_START: function() {
y = !0;
  },
  EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: function(e) {
let {
  applicationId: t
} = e;
A.everLaunchedActivities.add(t),
  function() {
    y = !1;
  }();
  },
  EMBEDDED_ACTIVITY_LAUNCH_FAIL: function() {
(function() {
  y = !1;
}());
  },
  EMBEDDED_ACTIVITY_OPEN: function(e) {
let {
  channelId: t,
  applicationId: n
} = e;
V({
  channelId: t,
  applicationId: n
});
  },
  EMBEDDED_ACTIVITY_CLOSE: function(e) {
let {
  applicationId: t
} = e, n = v.get(t);
v.delete(t), (null == n ? void 0 : n.channelId) === r && (r = void 0);
  },
  EMBEDDED_ACTIVITY_UPDATE: function(e) {
let {
  guildId: t,
  channelId: n,
  embeddedActivity: r,
  connections: i
} = e;
B({
  guildId: t,
  channelId: n,
  applicationId: r.application_id,
  launchId: r.activity_id,
  compositeInstanceId: void 0,
  participants: i.map(e => ({
    userId: e.user_id
  })),
  analyticsActivitySessionId: r.activity_id
});
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function(e) {
let {
  applicationId: t,
  launchId: n,
  compositeInstanceId: r,
  location: i,
  participants: a
} = e;
null != u.Z.getChannel(i.channel_id) && B({
  guildId: i.guild_id,
  channelId: i.channel_id,
  location: i,
  applicationId: t,
  launchId: n,
  compositeInstanceId: r,
  participants: a.map(e => ({
    userId: e.user_id,
    sessionId: e.session_id
  }))
});
  },
  LOCAL_ACTIVITY_UPDATE: function(e) {
var t;
let {
  activity: n
} = e;
if (null == n)
  return !1;
let r = v.get(null !== (t = n.application_id) && void 0 !== t ? t : '');
if (null == r)
  return !1;
v.set(r.applicationId, {
  ...r
});
  },
  EMBEDDED_ACTIVITY_SET_CONFIG: function(e) {
let {
  applicationId: t,
  config: n
} = e, r = v.get(t);
null != r && v.set(r.applicationId, {
  ...r,
  config: n
});
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF: function(e) {
let {
  guildId: t
} = e, n = k(t), r = L.get(n);
L.set(n, {
  isFetching: !0,
  lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
});
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function(e) {
let {
  guildId: t,
  activities: n
} = e, r = k(t);
D.set(r, n);
let i = Date.now();
! function(e) {
  let {
    activities: t,
    now: n
  } = e;
  t.forEach(e => {
    let t = e.application_id,
      r = e.client_platform_config[(0, m.Z)((0, E.getOS)())];
    if (null == r.label_until)
      return;
    let i = new Date(r.label_until).getTime();
    if (i < n)
      return;
    let a = A.seenNewActivities[t],
      s = Object.hasOwn(A.seenNewActivities, t),
      l = new Date(a).getTime() < i;
    r.label_type === o.ww.NEW && (!s || l) && (A.shouldShowNewActivityIndicator = !0, A.seenNewActivities[t] = r.label_until);
    let u = A.seenUpdatedActivities[t],
      c = Object.hasOwn(A.seenUpdatedActivities, t),
      d = new Date(u).getTime() < i;
    r.label_type === o.ww.UPDATED && (!c || d) && (A.shouldShowNewActivityIndicator = !0, A.seenUpdatedActivities[t] = r.label_until);
  });
}({
  activities: n,
  now: i
}), L.set(r, {
  isFetching: !1,
  lastFetchTimestampMs: i
});
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function(e) {
let {
  guildId: t
} = e, n = k(t), r = L.get(n);
L.set(n, {
  isFetching: !1,
  lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
});
  },
  EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: () => {
A.shouldShowNewActivityIndicator = !1;
  },
  EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function(e) {
let {
  applicationId: t,
  lockState: n,
  pictureInPictureLockState: r,
  gridLockState: i
} = e;
null == n ? b.delete(t) : b.set(t, n), null === r ? M.delete(t) : void 0 !== r && M.set(t, r), null === i ? P.delete(t) : void 0 !== i && P.set(t, i);
  },
  EMBEDDED_ACTIVITY_SET_PANEL_MODE: function(e) {
let {
  activityPanelMode: t
} = e;
x = t;
  },
  EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function(e) {
let {
  focusedActivityLayout: t
} = e;
G = t;
  },
  CHANNEL_SELECT: function(e) {
let {
  channelId: t
} = e;
r !== t && x === T.Ez.PANEL && (x = T.Ez.PIP);
  },
  EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
let {
  channelId: t,
  applicationId: n,
  isRejoiningFromCurrentSession: r
} = e;
r && C.set(t, n);
  },
  CHANNEL_CALL_POPOUT_WINDOW_OPEN: function(e) {
let {
  channel: t
} = e, n = Array.from(v.values()).find(e => {
  let {
    channelId: n
  } = e;
  return t.id === n;
});
void 0 !== n && C.set(t.id, n.applicationId);
  }
});
t.ZP = j;