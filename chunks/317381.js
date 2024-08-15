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
  v = [],
  O = new Map(),
  R = new Map(),
  C = new Map(),
  y = new Map(),
  D = new Map(),
  L = new Map(),
  b = new Map(),
  M = new Map(),
  P = new Map(),
  U = new Map(),
  w = new Map(),
  x = new Map();
let G = T.Ez.DISCONNECTED,
  k = T.MI.RESIZABLE;

function B(e) {
  return null != e ? e : '0';
}

function F(e) {
  var t, n, i, a;
  let {
guildId: s,
channelId: o,
location: E,
applicationId: m,
launchId: S,
compositeInstanceId: A,
participants: v,
analyticsActivitySessionId: D
  } = e, L = (0, h.Z)(m);
  if (null == L)
return;
  let b = null !== (n = C.get(o)) && void 0 !== n ? n : N,
M = 0 === b.length,
P = b.find(e => e.applicationId === m),
U = v.map(e => e.userId),
w = l.default.getId(),
k = U.some(e => e === w),
F = null === (t = v.find(e => e.userId === w)) || void 0 === t ? void 0 : t.sessionId,
V = v.some(e => (0, p.J)(e)),
H = null == A,
Z = O.get(m),
j = null != E ? E : void 0,
W = {
  analyticsActivitySessionId: null != D ? D : void 0,
  applicationId: m,
  channelId: o,
  guildId: s,
  location: j,
  launchId: S,
  compositeInstanceId: A,
  url: L,
  userIds: new Set(U),
  participants: v
};
  k && null != Z && O.set(Z.applicationId, {
...Z,
...W
  });
  null != Z && o === Z.channelId && m === (null == Z ? void 0 : Z.applicationId) && (!k && Array.from(Z.userIds).some(e => e === w) || !H && !V) ? y.get(o) === m ? y.delete(o) : (O.delete(m), _.S.dispatch(g.CkL.RELEASE_ACTIVITY_WEB_VIEW)) : k && (null == Z || Z.applicationId !== m || Z.channelId !== o) && (F === l.default.getSessionId() && !H || (0, f.$)('EmbeddedActivitiesStore')) && function(e) {
var t, n;
let {
  channelId: i,
  applicationId: a,
  launchId: s,
  compositeInstanceId: o,
  location: E,
  participants: f,
  isFirstActivityInChannel: p,
  isStart: m
} = e, S = (0, h.Z)(a), A = l.default.getSessionId();
if (null == S || null == A || (null === (t = O.get(a)) || void 0 === t ? void 0 : t.channelId) === i)
  return !1;
let N = u.Z.getChannel(i),
  v = null == N ? void 0 : N.getGuildId(),
  R = d.default.getCurrentUser();
if (null == v && !(null !== (n = null == N ? void 0 : N.isPrivate()) && void 0 !== n && n) || null == R)
  return !1;
r = i;
let C = {
  guildId: v,
  channelId: i,
  applicationId: a,
  url: S,
  userIds: new Set(f.map(e => e.userId)),
  participants: f,
  connectedSince: Date.now(),
  launchId: s,
  compositeInstanceId: o,
  location: E
};
O.set(a, C), _.S.dispatch(g.CkL.OPEN_EMBEDDED_ACTIVITY, {
  channelId: i,
  applicationId: a,
  isFirstActivityInChannel: p,
  isStart: m,
  participants: f,
  embeddedActivity: C
}), G = r !== c.Z.getChannelId() || (0, I.Z)(i) ? T.Ez.PIP : T.Ez.PANEL, x.set(Y(i, a), Date.now());
  }({
channelId: o,
applicationId: m,
launchId: S,
compositeInstanceId: A,
location: j,
participants: v,
isFirstActivityInChannel: M,
isStart: null == P
  });
  let K = (null !== (i = C.get(o)) && void 0 !== i ? i : []).filter(e => e.applicationId !== m),
z = B(s),
q = (null !== (a = R.get(z)) && void 0 !== a ? a : []).filter(e => !(e.applicationId === m && e.channelId === o));
  U.length > 0 && (K.push(W), q.push(W)), C.set(o, K), R.set(z, q);
}

function V(e) {
  let t = e.embedded_activities,
n = e.activity_instances;
  null == t || t.forEach(t => {
let {
  channel_id: n,
  embedded_activity: r,
  connections: i
} = t;
F({
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
F({
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

function H(e, t) {
  return ''.concat(e, ':').concat(t);
}

function Z(e) {
  let {
applicationId: t,
channelId: n
  } = e;
  D.delete(H(n, t));
}

function Y(e, t) {
  return ''.concat(e, ':').concat(t);
}
class j extends(i = a.ZP.PersistedStore) {
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
return null !== (t = Array.from(O.values()).find(t => {
  let {
    channelId: n
  } = t;
  return e === n;
})) && void 0 !== t ? t : null;
  }
  getSelfEmbeddedActivities() {
return O;
  }
  getEmbeddedActivitiesForGuild(e) {
var t;
return null !== (t = R.get(e)) && void 0 !== t ? t : N;
  }
  getEmbeddedActivitiesForChannel(e) {
var t;
return null !== (t = C.get(e)) && void 0 !== t ? t : N;
  }
  getEmbeddedActivitiesByChannel() {
return C;
  }
  getEmbeddedActivityDurationMs(e, t) {
let n = x.get(Y(e, t));
return null == n ? null : Date.now() - n;
  }
  isLaunchingActivity() {
return D.size > 0;
  }
  getShelfActivities(e) {
var t;
let n = B(e);
return null !== (t = L.get(n)) && void 0 !== t ? t : v;
  }
  getShelfFetchStatus(e) {
let t = B(e);
return b.get(t);
  }
  shouldFetchShelf(e) {
var t, n;
let r = B(e),
  i = null !== (t = b.get(r)) && void 0 !== t ? t : {
    isFetching: !1
  },
  a = Date.now() - (null !== (n = null == i ? void 0 : i.lastFetchTimestampMs) && void 0 !== n ? n : 0) > 21600000;
return !(null == i ? void 0 : i.isFetching) && a;
  }
  getOrientationLockStateForApp(e) {
var t;
return null !== (t = M.get(e)) && void 0 !== t ? t : null;
  }
  getPipOrientationLockStateForApp(e) {
var t;
return null !== (t = P.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e);
  }
  getGridOrientationLockStateForApp(e) {
var t, n;
return null !== (n = null !== (t = U.get(e)) && void 0 !== t ? t : P.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e);
  }
  getLayoutModeForApp(e) {
return w.get(e);
  }
  getConnectedActivityChannelId() {
return r;
  }
  getActivityPanelMode() {
return G;
  }
  getFocusedLayout() {
return k;
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
  s: for (let [r, i] of C)
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
  getLaunchState(e, t) {
if (null != e && null != t)
  return D.get(H(t, e));
  }
  getLaunchStates() {
return D;
  }
}
S(j, 'displayName', 'EmbeddedActivitiesStore'), S(j, 'persistKey', 'EmbeddedActivities'), S(j, 'migrations', [
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
let W = new j(s.Z, {
  ACTIVITY_LAYOUT_MODE_UPDATE: function(e) {
let {
  applicationId: t,
  layoutMode: n
} = e;
w.set(t, n);
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
let {
  guilds: t
} = e;
C.clear(), R.clear(), t.forEach(e => V(e));
  },
  GUILD_CREATE: function(e) {
let {
  guild: t
} = e;
V(t);
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
    F({
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
C.set(t.id, []);
let n = t.guild_id;
if (null != n) {
  var r;
  let e = B(n),
    i = (null !== (r = R.get(e)) && void 0 !== r ? r : []).filter(e => e.channelId !== t.id);
  R.set(e, i);
}
  },
  EMBEDDED_ACTIVITY_LAUNCH_START: function(e) {
let {
  applicationId: t,
  channelId: n,
  componentId: r
} = e;
D.set(H(n, t), {
  isLaunching: !0,
  componentId: r
});
  },
  EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: function(e) {
let {
  applicationId: t,
  channelId: n
} = e;
A.everLaunchedActivities.add(t), Z({
  applicationId: t,
  channelId: n
});
  },
  EMBEDDED_ACTIVITY_LAUNCH_FAIL: function(e) {
let {
  applicationId: t,
  channelId: n
} = e;
Z({
  applicationId: t,
  channelId: n
});
  },
  EMBEDDED_ACTIVITY_CLOSE: function(e) {
let {
  applicationId: t
} = e, n = O.get(t);
O.delete(t), (null == n ? void 0 : n.channelId) === r && (r = void 0);
  },
  EMBEDDED_ACTIVITY_UPDATE: function(e) {
let {
  guildId: t,
  channelId: n,
  embeddedActivity: r,
  connections: i
} = e;
F({
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
null != u.Z.getChannel(i.channel_id) && F({
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
let r = O.get(null !== (t = n.application_id) && void 0 !== t ? t : '');
if (null == r)
  return !1;
O.set(r.applicationId, {
  ...r
});
  },
  EMBEDDED_ACTIVITY_SET_CONFIG: function(e) {
let {
  applicationId: t,
  config: n
} = e, r = O.get(t);
null != r && O.set(r.applicationId, {
  ...r,
  config: n
});
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF: function(e) {
let {
  guildId: t
} = e, n = B(t), r = b.get(n);
b.set(n, {
  isFetching: !0,
  lastFetchTimestampMs: null == r ? void 0 : r.lastFetchTimestampMs
});
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function(e) {
let {
  guildId: t,
  activities: n
} = e, r = B(t);
L.set(r, n);
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
}), b.set(r, {
  isFetching: !1,
  lastFetchTimestampMs: i
});
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function(e) {
let {
  guildId: t
} = e, n = B(t), r = b.get(n);
b.set(n, {
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
null == n ? M.delete(t) : M.set(t, n), null === r ? P.delete(t) : void 0 !== r && P.set(t, r), null === i ? U.delete(t) : void 0 !== i && U.set(t, i);
  },
  EMBEDDED_ACTIVITY_SET_PANEL_MODE: function(e) {
let {
  activityPanelMode: t
} = e;
G = t;
  },
  EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: function(e) {
let {
  focusedActivityLayout: t
} = e;
k = t;
  },
  CHANNEL_SELECT: function(e) {
let {
  channelId: t
} = e;
r !== t && G === T.Ez.PANEL && (G = T.Ez.PIP);
  },
  EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
let {
  channelId: t,
  applicationId: n,
  isRejoiningFromCurrentSession: r
} = e;
r && y.set(t, n);
  },
  CHANNEL_CALL_POPOUT_WINDOW_OPEN: function(e) {
let {
  channel: t
} = e, n = Array.from(O.values()).find(e => {
  let {
    channelId: n
  } = e;
  return t.id === n;
});
void 0 !== n && y.set(t.id, n.applicationId);
  }
});
t.ZP = W;