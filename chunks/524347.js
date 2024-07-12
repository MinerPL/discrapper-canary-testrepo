var i, a, s, r, l = n(913527),
  o = n.n(l),
  c = n(442837),
  d = n(846519),
  u = n(570140),
  _ = n(594190),
  E = n(569545),
  I = n(314897),
  m = n(70956),
  T = n(960359),
  h = n(853197),
  N = n(702512);
let f = null,
  p = null,
  C = {},
  g = {},
  S = N._e.LOADING_INITIAL_PROGRESS,
  A = new d.V7(),
  R = {
completed: !1,
initialProgressFetched: !1,
interrupted: !1,
retries: 0
  },
  x = e => {
let {
  dropsQuestId: t,
  streamKey: n,
  game: i,
  completed: a,
  gameTitle: s
} = R;
if (!(null == t || null == s || a || null == i || null == n || A.isStarted()))
  e ? (0, T.m0)(t, n, i.pid) : A.start(1 * m.Z.Millis.MINUTE, () => {
    (0, T.m0)(t, n, i.pid);
  });
  },
  O = e => {
R.retries = 0, R.completed = e.completed, R.initialProgressFetched = !0, R.progress = e.progress, R.lastCheckedAt = o().now(), S = R.completed ? N._e.QUEST_COMPLETION : N._e.TRACK_PROGRESS;
  },
  M = (e, t, n) => {
if (!R.completed || e.dropsQuestId !== R.dropsQuestId)
  R.game = t, R.dropsQuestId = e.dropsQuestId, R.gameTitle = e.title, R.completed = !1, R.interrupted = !1, R.streamKey = n, R.retries = 0, R.lastCheckedAt = o().now(), A.start(5000, () => x(!0));
  };
class v extends(r = c.ZP.Store) {
  initialize() {
this.waitFor(_.ZP);
  }
  getActivityPanelTooltipAction() {
return S;
  }
  getIsPartnerGameQuestComplete(e) {
var t;
let n = (0, h.BS)(e);
if (null == n || null == p)
  return !1;
let i = !!(null === (t = p[n.dropsQuestId]) || void 0 === t ? void 0 : t.completed_at);
return R.completed && R.gameTitle === n.title || i;
  }
  get serverEligibleByQuestIds() {
return C;
  }
  get platformAvailability() {
return f;
  }
  get userStatus() {
return p;
  }
  get activityPanelTooltipAction() {
return S;
  }
  get enrolledDropsByQuestId() {
return g;
  }
  get hasInitialProgressFetched() {
return R.initialProgressFetched;
  }
  get isCurrentQuestCompleted() {
return R.completed;
  }
  get isCurrentQuestInterrupted() {
return R.interrupted;
  }
  get currentDropQuestGameTitle() {
return R.gameTitle;
  }
  get currentDropQuestStreamProgress() {
let e = R.progress;
if (null == e || null == e.steps || 0 === e.steps.length)
  return 0;
let t = e.steps.find(e => 'stream_length' === e.name);
return null == t ? 0 : t.percent;
  }
}
s = 'DropsStore', (a = 'displayName') in(i = v) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new v(u.Z, {
  DROPS_ELIGIBILITY_FETCH_SUCCESS: e => {
C[e.dropsQuestId] = e.isEligible;
  },
  DROPS_PLATFORM_AVAILABILITY_SUCCESS: e => {
f = e.availablePlatforms.filter(e => N.El.includes(e));
  },
  DROPS_USER_STATUS_FETCH_SUCCESS: e => {
var t;
p = null !== (t = e.codes) && void 0 !== t ? t : {};
  },
  DROPS_USER_STATUS_FETCH_FAILURE: e => {
p = {};
  },
  DROPS_ENROLLED_USER_FETCH_SUCCESS: e => {
g[e.dropsQuestId] = {
  isEnrolled: e.isEnrolled,
  enrolledUser: e.enrolledUser
};
  },
  DROPS_FETCH_PROGRESS_SUCCESS: O,
  DROPS_FETCH_PROGRESS_FAILURE: e => {
if (!R.initialProgressFetched)
  R.initialProgressFetched = !0, S = N._e.STREAM_CTA;
  },
  DROPS_HEARTBEAT_SUCCESS: e => {
O(e), C[e.dropsQuestId] = !0, x();
  },
  DROPS_HEARTBEAT_FAILURE: e => {
let {
  dropsQuestId: t,
  statusCode: n
} = e;
if (R.completed = !1, R.initialProgressFetched = !0, R.lastCheckedAt = o().now(), 429 === n && 0 === R.retries) {
  R.retries = R.retries + 1, x();
  return;
}
S = N._e.STREAM_CTA, 403 === n ? C[t] = !1 : R.interrupted = !0;
  },
  DROPS_UNENROLL_USER: e => {
p = null, C = {
  ...C
}, delete C[e.dropsQuestId], g = {
  ...g
}, delete g[e.dropsQuestId], R.dropsQuestId === e.dropsQuestId && (R = {
  completed: !1,
  initialProgressFetched: !1,
  interrupted: !1,
  retries: 0
});
  },
  STREAM_CLOSE: () => {
R.completed && (S = N._e.QUEST_COMPLETION), R.interrupted = !1, R.retries = 0, A.stop();
  },
  STREAM_START: function(e) {
var t;
let {
  streamType: n,
  guildId: i,
  channelId: a,
  pid: s
} = e, r = (0, E.V9)({
  streamType: n,
  guildId: i,
  channelId: a,
  ownerId: I.default.getId()
});
if (null == s)
  return;
let l = _.ZP.getGameForPID(s);
if (null == l)
  return;
let o = Object.values(N.Zv).find(e => e.gameSearchTerm.find(e => {
  var t;
  return e.toLowerCase() === (null === (t = l.name) || void 0 === t ? void 0 : t.toLowerCase());
}));
if (null == o || (0, h.hM)(o))
  return;
let c = null === (t = (0, h.j7)(o)) || void 0 === t ? void 0 : t.getCurrentConfig({
  location: '1'
}, {
  autoTrackExposure: !1
});
if (null == c || !c.dropsEnabled)
  return;
let d = c.autoEnrollment;
null != g[o.dropsQuestId] && g[o.dropsQuestId].isEnrolled || d ? M(o, l, r) : u.Z.wait(async () => {
  var e;
  await (0, T.BE)(o.dropsQuestId), (null === (e = g[o.dropsQuestId]) || void 0 === e ? void 0 : e.isEnrolled) && M(o, l, r);
});
  },
  LOGOUT: function() {
C = {}, g = {}, p = {}, A.stop();
  }
});