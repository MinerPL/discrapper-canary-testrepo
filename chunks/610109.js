"use strict";
s.r(t), s.d(t, {
  default: function() {
    return j
  }
}), s("424973"), s("222007");
var a = s("446674"),
  n = s("872717"),
  l = s("913144"),
  i = s("605250"),
  r = s("271938"),
  o = s("42887"),
  d = s("985365"),
  u = s("590401"),
  c = s("800762"),
  S = s("456931"),
  E = s("868391"),
  T = s("414074"),
  f = s("84908"),
  _ = s("49111"),
  m = s("353927");
new i.default("RTCSpeedTestStore");
let g = [{
    clusterSize: 40,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: f.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 40,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: f.SpeedTestDirections.SERVER_TO_CLIENT
  }, {
    clusterSize: 160,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: f.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 160,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: f.SpeedTestDirections.SERVER_TO_CLIENT
  }, {
    clusterSize: 4125,
    clusterIntervalMs: 33,
    numClusters: 455,
    direction: f.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 4125,
    clusterIntervalMs: 33,
    numClusters: 455,
    direction: f.SpeedTestDirections.SERVER_TO_CLIENT
  }, {
    clusterSize: 17e3,
    clusterIntervalMs: 17,
    numClusters: 295,
    direction: f.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 17e3,
    clusterIntervalMs: 17,
    numClusters: 295,
    direction: f.SpeedTestDirections.SERVER_TO_CLIENT
  }],
  h = g.length,
  N = {
    running: !1,
    region: null,
    endpoint: null,
    connection: null,
    rtcServerId: null,
    connected: !1,
    currentTest: null,
    failed: !1,
    lifecycle: f.SpeedTestLifecycles.INACTIVE,
    results: [],
    pings: [],
    notes: ""
  };

function I(e, t, s) {
  e === _.RTCConnectionStates.RTC_CONNECTED ? N.connected = !0 : (e === _.RTCConnectionStates.DISCONNECTED || e === _.RTCConnectionStates.RTC_DISCONNECTED) && (N.lifecycle === f.SpeedTestLifecycles.TESTING && (N.failed = !0, v(), L()), N.connected = !1)
}

function p() {
  N.lifecycle === f.SpeedTestLifecycles.TESTING && (N.failed = !0, v(), L())
}

function C() {
  if (N.lifecycle === f.SpeedTestLifecycles.CONNECTING) {
    var e;
    M(f.SpeedTestLifecycles.PINGING), null === (e = N.connection) || void 0 === e || e.setPingInterval(500), x()
  }
}

function A(e, t) {
  if (null != N.currentTest) !0 !== N.failed && (N.currentTest = N.currentTest + 1, N.results.push({
    payload: e,
    summary: t
  }), N.currentTest === h ? (M(f.SpeedTestLifecycles.UPLOADING), L()) : D())
}

function O(e) {
  void 0 !== e && N.pings.length < 10 && (N.pings.push(e), N.pings.length < 10 && M(f.SpeedTestLifecycles.PINGING), x())
}

function x() {
  if (N.lifecycle === f.SpeedTestLifecycles.PINGING && 10 === N.pings.length) {
    var e;
    null === (e = N.connection) || void 0 === e || e.setPingInterval(5e3), N.currentTest = 0, D()
  }
}

function R() {
  if (null == N.connection) return !1;
  N.connection.destroy(), N.connection = null
}

function M(e) {
  N.lifecycle = e, l.default.dispatch({
    type: "RTC_SPEED_TEST_STATE_UPDATE",
    lifecycle: e
  })
}

function D() {
  var e, t;
  null !== N.currentTest && (g[N.currentTest].direction === f.SpeedTestDirections.CLIENT_TO_SERVER ? null === (e = N.connection) || void 0 === e || e.startClientToServerSpeedTest(g[N.currentTest]) : g[N.currentTest].direction === f.SpeedTestDirections.SERVER_TO_CLIENT && (null === (t = N.connection) || void 0 === t || t.startServerToClientSpeedTest(g[N.currentTest])), M(f.SpeedTestLifecycles.TESTING))
}

function v() {
  if (N.lifecycle === f.SpeedTestLifecycles.TESTING && null != N.currentTest) {
    var e, t;
    let s = g[N.currentTest].direction;
    s === f.SpeedTestDirections.CLIENT_TO_SERVER ? null === (e = N.connection) || void 0 === e || e.stopClientToServerSpeedTest() : null === (t = N.connection) || void 0 === t || t.stopServerToClientSpeedTest()
  }
}
async function L() {
  var e, t;
  let s = new Date().toISOString(),
    a = {
      date: s,
      endpoint: N.endpoint,
      networkOverhead: null === (e = N.connection) || void 0 === e ? void 0 : e.getNetworkOverhead(),
      networkType: d.default.getType(),
      networkEffectiveConnectionSpeed: d.default.getEffectiveConnectionSpeed(),
      networkServiceProvider: null !== (t = d.default.getServiceProvider()) && void 0 !== t ? t : "unknown",
      notes: N.notes
    },
    l = {
      info: a,
      ping: (0, T.speedTestPingInfo)(N.pings),
      tests: []
    },
    i = {
      info: a,
      pings: N.pings,
      tests: []
    };
  for (let e = 0; e < g.length; e++) {
    let t = {
        params: null,
        results: null
      },
      s = {
        params: null,
        results: null
      };
    t.params = g[e], s.params = g[e], e < N.results.length && (t.results = N.results[e].summary, s.results = N.results[e].payload), l.tests.push(t), i.tests.push(s)
  }
  await Promise.all([n.HTTP.post({
    url: _.Endpoints.DEBUG_LOG(_.DebugLogCategory.SPEED_TEST, "speed_test_summary_".concat(s, ".json")),
    body: JSON.stringify(l, void 0, 2),
    retries: 3,
    headers: {
      "Content-Type": "text/plain"
    }
  }), n.HTTP.post({
    url: _.Endpoints.DEBUG_LOG(_.DebugLogCategory.SPEED_TEST, "speed_test_results_".concat(s, ".json")),
    body: JSON.stringify(i, void 0, 2),
    retries: 3,
    headers: {
      "Content-Type": "text/plain"
    }
  })]), M(f.SpeedTestLifecycles.COMPLETED), R(), S.default.stopSpeedTest(), N.running = !1, N.notes = ""
}
class P extends a.default.Store {
  initialize() {
    this.waitFor(r.default, o.default, u.default, c.default)
  }
  getAvailable() {
    return !c.default.isCurrentClientInVoiceChannel()
  }
  getActive() {
    return N.running
  }
  getEndpoint() {
    return N.endpoint
  }
  getConnected() {
    var e;
    return null !== (e = N.connected) && void 0 !== e && e
  }
  getLifecycle() {
    return N.lifecycle
  }
  getFailed() {
    return N.failed
  }
  getCurrentTest() {
    return N.currentTest
  }
  getTestCases() {
    return g
  }
  getTestResults() {
    return N.results
  }
  getPings() {
    return N.pings
  }
  getNotes() {
    return N.notes
  }
  setNotes(e) {
    N.notes = e
  }
  isSupported() {
    return o.default.supports(m.Features.SPEED_TEST)
  }
}
P.displayName = "RTCSpeedTestStore";
var j = new P(l.default, {
  RTC_SPEED_TEST_START_TEST: function(e) {
    !N.running && (M(f.SpeedTestLifecycles.AWAITING_ENDPOINT), N.running = !0, N.currentTest = null, N.results = [], N.failed = !1, N.pings = [], N.connected = !1, R())
  },
  RTC_SPEED_TEST_STOP_TEST: function(e) {
    N.running = !1, R(), N.lifecycle !== f.SpeedTestLifecycles.COMPLETED && M(f.SpeedTestLifecycles.CANCELLED)
  },
  SPEED_TEST_CREATE: function(e) {
    if (!N.running) {
      S.default.stopSpeedTest();
      return
    }
    N.rtcServerId = e.rtcServerId
  },
  SPEED_TEST_DELETE: function(e) {
    R(), N.running = !1, N.lifecycle !== f.SpeedTestLifecycles.COMPLETED && M(f.SpeedTestLifecycles.INACTIVE)
  },
  SPEED_TEST_SERVER_UPDATE: function(e) {
    var t;
    R(), N.endpoint = null !== (t = e.endpoint) && void 0 !== t ? t : null, N.connection = new E.default({
      userId: r.default.getId(),
      sessionId: r.default.getSessionId(),
      rtcServerId: N.rtcServerId,
      endpoint: e.endpoint,
      token: e.token
    }), N.connection.on("state", I), N.connection.on("resuming", p), N.connection.on("ready", C), N.connection.on("speed-test-completed", A), N.connection.on("ping", O), N.connection.on("ping-timeout", O), N.connection.connect(), M(f.SpeedTestLifecycles.CONNECTING)
  }
})