"use strict";
s.r(t), s("653041"), s("47120");
var a, n, l, i, r = s("442837"),
  o = s("544891"),
  d = s("570140"),
  u = s("710845"),
  c = s("314897"),
  S = s("131951"),
  E = s("866960"),
  T = s("936349"),
  _ = s("979651"),
  f = s("622414"),
  m = s("42955"),
  g = s("399002"),
  h = s("369541"),
  N = s("981631"),
  I = s("65154");
new u.default("RTCSpeedTestStore");
let p = [{
    clusterSize: 40,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: h.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 40,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: h.SpeedTestDirections.SERVER_TO_CLIENT
  }, {
    clusterSize: 160,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: h.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 160,
    clusterIntervalMs: 20,
    numClusters: 1500,
    direction: h.SpeedTestDirections.SERVER_TO_CLIENT
  }, {
    clusterSize: 4125,
    clusterIntervalMs: 33,
    numClusters: 455,
    direction: h.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 4125,
    clusterIntervalMs: 33,
    numClusters: 455,
    direction: h.SpeedTestDirections.SERVER_TO_CLIENT
  }, {
    clusterSize: 17e3,
    clusterIntervalMs: 17,
    numClusters: 295,
    direction: h.SpeedTestDirections.CLIENT_TO_SERVER
  }, {
    clusterSize: 17e3,
    clusterIntervalMs: 17,
    numClusters: 295,
    direction: h.SpeedTestDirections.SERVER_TO_CLIENT
  }],
  C = p.length,
  A = {
    running: !1,
    region: null,
    endpoint: null,
    connection: null,
    rtcServerId: null,
    connected: !1,
    currentTest: null,
    failed: !1,
    lifecycle: h.SpeedTestLifecycles.INACTIVE,
    results: [],
    pings: [],
    notes: ""
  };

function O(e, t, s) {
  e === N.RTCConnectionStates.RTC_CONNECTED ? A.connected = !0 : (e === N.RTCConnectionStates.DISCONNECTED || e === N.RTCConnectionStates.RTC_DISCONNECTED) && (A.lifecycle === h.SpeedTestLifecycles.TESTING && (A.failed = !0, b(), U()), A.connected = !1)
}

function x() {
  A.lifecycle === h.SpeedTestLifecycles.TESTING && (A.failed = !0, b(), U())
}

function R() {
  if (A.lifecycle === h.SpeedTestLifecycles.CONNECTING) {
    var e;
    P(h.SpeedTestLifecycles.PINGING), null === (e = A.connection) || void 0 === e || e.setPingInterval(500), D()
  }
}

function M(e, t) {
  if (null != A.currentTest) !0 !== A.failed && (A.currentTest = A.currentTest + 1, A.results.push({
    payload: e,
    summary: t
  }), A.currentTest === C ? (P(h.SpeedTestLifecycles.UPLOADING), U()) : j())
}

function v(e) {
  void 0 !== e && A.pings.length < 10 && (A.pings.push(e), A.pings.length < 10 && P(h.SpeedTestLifecycles.PINGING), D())
}

function D() {
  if (A.lifecycle === h.SpeedTestLifecycles.PINGING && 10 === A.pings.length) {
    var e;
    null === (e = A.connection) || void 0 === e || e.setPingInterval(5e3), A.currentTest = 0, j()
  }
}

function L() {
  if (null == A.connection) return !1;
  A.connection.destroy(), A.connection = null
}

function P(e) {
  A.lifecycle = e, d.default.dispatch({
    type: "RTC_SPEED_TEST_STATE_UPDATE",
    lifecycle: e
  })
}

function j() {
  var e, t;
  null !== A.currentTest && (p[A.currentTest].direction === h.SpeedTestDirections.CLIENT_TO_SERVER ? null === (e = A.connection) || void 0 === e || e.startClientToServerSpeedTest(p[A.currentTest]) : p[A.currentTest].direction === h.SpeedTestDirections.SERVER_TO_CLIENT && (null === (t = A.connection) || void 0 === t || t.startServerToClientSpeedTest(p[A.currentTest])), P(h.SpeedTestLifecycles.TESTING))
}

function b() {
  if (A.lifecycle === h.SpeedTestLifecycles.TESTING && null != A.currentTest) {
    var e, t;
    p[A.currentTest].direction === h.SpeedTestDirections.CLIENT_TO_SERVER ? null === (e = A.connection) || void 0 === e || e.stopClientToServerSpeedTest() : null === (t = A.connection) || void 0 === t || t.stopServerToClientSpeedTest()
  }
}
async function U() {
  var e, t;
  let s = new Date().toISOString(),
    a = {
      date: s,
      endpoint: A.endpoint,
      networkOverhead: null === (e = A.connection) || void 0 === e ? void 0 : e.getNetworkOverhead(),
      networkType: E.default.getType(),
      networkEffectiveConnectionSpeed: E.default.getEffectiveConnectionSpeed(),
      networkServiceProvider: null !== (t = E.default.getServiceProvider()) && void 0 !== t ? t : "unknown",
      notes: A.notes
    },
    n = {
      info: a,
      ping: (0, g.speedTestPingInfo)(A.pings),
      tests: []
    },
    l = {
      info: a,
      pings: A.pings,
      tests: []
    };
  for (let e = 0; e < p.length; e++) {
    let t = {
        params: null,
        results: null
      },
      s = {
        params: null,
        results: null
      };
    t.params = p[e], s.params = p[e], e < A.results.length && (t.results = A.results[e].summary, s.results = A.results[e].payload), n.tests.push(t), l.tests.push(s)
  }
  await Promise.all([o.HTTP.post({
    url: N.Endpoints.DEBUG_LOG(N.DebugLogCategory.SPEED_TEST, "speed_test_summary_".concat(s, ".json")),
    body: JSON.stringify(n, void 0, 2),
    retries: 3,
    headers: {
      "Content-Type": "text/plain"
    }
  }), o.HTTP.post({
    url: N.Endpoints.DEBUG_LOG(N.DebugLogCategory.SPEED_TEST, "speed_test_results_".concat(s, ".json")),
    body: JSON.stringify(l, void 0, 2),
    retries: 3,
    headers: {
      "Content-Type": "text/plain"
    }
  })]), P(h.SpeedTestLifecycles.COMPLETED), L(), f.default.stopSpeedTest(), A.running = !1, A.notes = ""
}
class y extends(a = r.default.Store) {
  initialize() {
    this.waitFor(c.default, S.default, T.default, _.default)
  }
  getAvailable() {
    return !_.default.isCurrentClientInVoiceChannel()
  }
  getActive() {
    return A.running
  }
  getEndpoint() {
    return A.endpoint
  }
  getConnected() {
    var e;
    return null !== (e = A.connected) && void 0 !== e && e
  }
  getLifecycle() {
    return A.lifecycle
  }
  getFailed() {
    return A.failed
  }
  getCurrentTest() {
    return A.currentTest
  }
  getTestCases() {
    return p
  }
  getTestResults() {
    return A.results
  }
  getPings() {
    return A.pings
  }
  getNotes() {
    return A.notes
  }
  setNotes(e) {
    A.notes = e
  }
  isSupported() {
    return S.default.supports(I.Features.SPEED_TEST)
  }
}
i = "RTCSpeedTestStore", (l = "displayName") in(n = y) ? Object.defineProperty(n, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[l] = i, t.default = new y(d.default, {
  RTC_SPEED_TEST_START_TEST: function(e) {
    !A.running && (P(h.SpeedTestLifecycles.AWAITING_ENDPOINT), A.running = !0, A.currentTest = null, A.results = [], A.failed = !1, A.pings = [], A.connected = !1, L())
  },
  RTC_SPEED_TEST_STOP_TEST: function(e) {
    A.running = !1, L(), A.lifecycle !== h.SpeedTestLifecycles.COMPLETED && P(h.SpeedTestLifecycles.CANCELLED)
  },
  SPEED_TEST_CREATE: function(e) {
    if (!A.running) {
      f.default.stopSpeedTest();
      return
    }
    A.rtcServerId = e.rtcServerId
  },
  SPEED_TEST_DELETE: function(e) {
    L(), A.running = !1, A.lifecycle !== h.SpeedTestLifecycles.COMPLETED && P(h.SpeedTestLifecycles.INACTIVE)
  },
  SPEED_TEST_SERVER_UPDATE: function(e) {
    var t;
    L(), A.endpoint = null !== (t = e.endpoint) && void 0 !== t ? t : null, A.connection = new m.default({
      userId: c.default.getId(),
      sessionId: c.default.getSessionId(),
      rtcServerId: A.rtcServerId,
      endpoint: e.endpoint,
      token: e.token
    }), A.connection.on("state", O), A.connection.on("resuming", x), A.connection.on("ready", R), A.connection.on("speed-test-completed", M), A.connection.on("ping", v), A.connection.on("ping-timeout", v), A.connection.connect(), P(h.SpeedTestLifecycles.CONNECTING)
  }
})