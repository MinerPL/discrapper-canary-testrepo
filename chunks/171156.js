s(653041), s(47120);
var n, a, i, r, o = s(442837),
  l = s(544891),
  c = s(570140),
  d = s(710845),
  _ = s(314897),
  E = s(131951),
  u = s(866960),
  T = s(936349),
  I = s(979651),
  S = s(622414),
  N = s(42955),
  C = s(399002),
  m = s(369541),
  A = s(981631),
  g = s(65154);
new d.Z('RTCSpeedTestStore');
let h = [{
  clusterSize: 40,
  clusterIntervalMs: 20,
  numClusters: 1500,
  direction: m.u_.CLIENT_TO_SERVER
},
{
  clusterSize: 40,
  clusterIntervalMs: 20,
  numClusters: 1500,
  direction: m.u_.SERVER_TO_CLIENT
},
{
  clusterSize: 160,
  clusterIntervalMs: 20,
  numClusters: 1500,
  direction: m.u_.CLIENT_TO_SERVER
},
{
  clusterSize: 160,
  clusterIntervalMs: 20,
  numClusters: 1500,
  direction: m.u_.SERVER_TO_CLIENT
},
{
  clusterSize: 4125,
  clusterIntervalMs: 33,
  numClusters: 455,
  direction: m.u_.CLIENT_TO_SERVER
},
{
  clusterSize: 4125,
  clusterIntervalMs: 33,
  numClusters: 455,
  direction: m.u_.SERVER_TO_CLIENT
},
{
  clusterSize: 17000,
  clusterIntervalMs: 17,
  numClusters: 295,
  direction: m.u_.CLIENT_TO_SERVER
},
{
  clusterSize: 17000,
  clusterIntervalMs: 17,
  numClusters: 295,
  direction: m.u_.SERVER_TO_CLIENT
}
  ],
  O = h.length,
  p = {
running: !1,
region: null,
endpoint: null,
connection: null,
rtcServerId: null,
connected: !1,
currentTest: null,
failed: !1,
lifecycle: m.N7.INACTIVE,
results: [],
pings: [],
notes: ''
  };

function R(e, t, s) {
  e === A.hes.RTC_CONNECTED ? p.connected = !0 : (e === A.hes.DISCONNECTED || e === A.hes.RTC_DISCONNECTED) && (p.lifecycle === m.N7.TESTING && (p.failed = !0, v(), j()), p.connected = !1);
}

function x() {
  p.lifecycle === m.N7.TESTING && (p.failed = !0, v(), j());
}

function M() {
  if (p.lifecycle === m.N7.CONNECTING) {
var e;
b(m.N7.PINGING), null === (e = p.connection) || void 0 === e || e.setPingInterval(500), P();
  }
}

function f(e, t) {
  if (null != p.currentTest) {
if (!0 !== p.failed)
  p.currentTest = p.currentTest + 1, p.results.push({
    payload: e,
    summary: t
  }), p.currentTest === O ? (b(m.N7.UPLOADING), j()) : Z();
  }
}

function D(e) {
  if (void 0 !== e)
p.pings.length < 10 && (p.pings.push(e), p.pings.length < 10 && b(m.N7.PINGING), P());
}

function P() {
  if (p.lifecycle === m.N7.PINGING && 10 === p.pings.length) {
var e;
null === (e = p.connection) || void 0 === e || e.setPingInterval(5000), p.currentTest = 0, Z();
  }
}

function L() {
  if (null == p.connection)
return !1;
  p.connection.destroy(), p.connection = null;
}

function b(e) {
  p.lifecycle = e, c.Z.dispatch({
type: 'RTC_SPEED_TEST_STATE_UPDATE',
lifecycle: e
  });
}

function Z() {
  var e, t;
  null !== p.currentTest && (h[p.currentTest].direction === m.u_.CLIENT_TO_SERVER ? null === (e = p.connection) || void 0 === e || e.startClientToServerSpeedTest(h[p.currentTest]) : h[p.currentTest].direction === m.u_.SERVER_TO_CLIENT && (null === (t = p.connection) || void 0 === t || t.startServerToClientSpeedTest(h[p.currentTest])), b(m.N7.TESTING));
}

function v() {
  if (p.lifecycle === m.N7.TESTING && null != p.currentTest) {
var e, t;
h[p.currentTest].direction === m.u_.CLIENT_TO_SERVER ? null === (e = p.connection) || void 0 === e || e.stopClientToServerSpeedTest() : null === (t = p.connection) || void 0 === t || t.stopServerToClientSpeedTest();
  }
}
async function j() {
  var e, t;
  let s = new Date().toISOString(),
n = {
  date: s,
  endpoint: p.endpoint,
  networkOverhead: null === (e = p.connection) || void 0 === e ? void 0 : e.getNetworkOverhead(),
  networkType: u.Z.getType(),
  networkEffectiveConnectionSpeed: u.Z.getEffectiveConnectionSpeed(),
  networkServiceProvider: null !== (t = u.Z.getServiceProvider()) && void 0 !== t ? t : 'unknown',
  notes: p.notes
},
a = {
  info: n,
  ping: (0, C.B9)(p.pings),
  tests: []
},
i = {
  info: n,
  pings: p.pings,
  tests: []
};
  for (let e = 0; e < h.length; e++) {
let t = {
    params: null,
    results: null
  },
  s = {
    params: null,
    results: null
  };
t.params = h[e], s.params = h[e], e < p.results.length && (t.results = p.results[e].summary, s.results = p.results[e].payload), a.tests.push(t), i.tests.push(s);
  }
  await Promise.all([
l.tn.post({
  url: A.ANM.DEBUG_LOG(A.GU0.SPEED_TEST, 'speed_test_summary_'.concat(s, '.json')),
  body: JSON.stringify(a, void 0, 2),
  retries: 3,
  headers: {
    'Content-Type': 'text/plain'
  }
}),
l.tn.post({
  url: A.ANM.DEBUG_LOG(A.GU0.SPEED_TEST, 'speed_test_results_'.concat(s, '.json')),
  body: JSON.stringify(i, void 0, 2),
  retries: 3,
  headers: {
    'Content-Type': 'text/plain'
  }
})
  ]), b(m.N7.COMPLETED), L(), S.Z.stopSpeedTest(), p.running = !1, p.notes = '';
}
class B extends(n = o.ZP.Store) {
  initialize() {
this.waitFor(_.default, E.Z, T.Z, I.Z);
  }
  getAvailable() {
return !I.Z.isCurrentClientInVoiceChannel();
  }
  getActive() {
return p.running;
  }
  getEndpoint() {
return p.endpoint;
  }
  getConnected() {
var e;
return null !== (e = p.connected) && void 0 !== e && e;
  }
  getLifecycle() {
return p.lifecycle;
  }
  getFailed() {
return p.failed;
  }
  getCurrentTest() {
return p.currentTest;
  }
  getTestCases() {
return h;
  }
  getTestResults() {
return p.results;
  }
  getPings() {
return p.pings;
  }
  getNotes() {
return p.notes;
  }
  setNotes(e) {
p.notes = e;
  }
  isSupported() {
return E.Z.supports(g.AN.SPEED_TEST);
  }
}
r = 'RTCSpeedTestStore', (i = 'displayName') in(a = B) ? Object.defineProperty(a, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[i] = r, t.Z = new B(c.Z, {
  RTC_SPEED_TEST_START_TEST: function(e) {
!p.running && (b(m.N7.AWAITING_ENDPOINT), p.running = !0, p.currentTest = null, p.results = [], p.failed = !1, p.pings = [], p.connected = !1, L());
  },
  RTC_SPEED_TEST_STOP_TEST: function(e) {
p.running = !1, L(), p.lifecycle !== m.N7.COMPLETED && b(m.N7.CANCELLED);
  },
  SPEED_TEST_CREATE: function(e) {
if (!p.running) {
  S.Z.stopSpeedTest();
  return;
}
p.rtcServerId = e.rtcServerId;
  },
  SPEED_TEST_DELETE: function(e) {
L(), p.running = !1, p.lifecycle !== m.N7.COMPLETED && b(m.N7.INACTIVE);
  },
  SPEED_TEST_SERVER_UPDATE: function(e) {
var t;
L(), p.endpoint = null !== (t = e.endpoint) && void 0 !== t ? t : null, p.connection = new N.Z({
  userId: _.default.getId(),
  sessionId: _.default.getSessionId(),
  rtcServerId: p.rtcServerId,
  endpoint: e.endpoint,
  token: e.token
}), p.connection.on('state', R), p.connection.on('resuming', x), p.connection.on('ready', M), p.connection.on('speed-test-completed', f), p.connection.on('ping', D), p.connection.on('ping-timeout', D), p.connection.connect(), b(m.N7.CONNECTING);
  }
});