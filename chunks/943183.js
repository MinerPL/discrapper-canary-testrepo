"use strict";
n.r(t), n.d(t, {
  initSessionHeartbeatScheduler: function() {
    return O
  }
}), n("70102");
var a = n("95410"),
  s = n("913144"),
  l = n("918105"),
  i = n("963990"),
  r = n("161454"),
  o = n("945956"),
  u = n("599110"),
  d = n("718517"),
  c = n("872507"),
  f = n("286235"),
  E = n("371160"),
  h = n("49111");
let _ = "LATEST_HEARTBEAST_EVENT_TIMESTAMP",
  C = null,
  S = null,
  I = null,
  m = !1;
async function p() {
  if (m) return;
  m = !0, (0, E.setSessionExtendingEnabled)(!0), f.default.addBreadcrumb({
    message: "Start Analytics Heartbeat"
  });
  let e = await a.Storage.getAfterRefresh(_).then(E.timestampOrZero);
  if (!m) return;
  let t = Date.now(),
    n = 15 * d.default.Millis.MINUTE + e - t;
  n > d.default.Millis.HOUR && f.default.addBreadcrumb({
    message: "Received invalid Date.now() when generating a heartbeat. Date.now() = ".concat(t, ", timeUntilNextHeartbeat = ").concat(n, ", latestHeartbeatEventTimestamp = ").concat(e)
  }), e > t && (n = 0), f.default.addBreadcrumb({
    message: "Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ".concat(n / 1e3, " seconds. Scheduling Heartbeat")
  }), T(!1), S = setTimeout(() => {
    g(), C = setInterval(() => {
      g()
    }, 15 * d.default.Millis.MINUTE)
  }, Math.max(n, 0))
}

function T() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  null != S && (clearTimeout(S), S = null), null != C && (clearInterval(C), C = null), null != I && e && (f.default.addBreadcrumb({
    message: "Heartbeat correctly scheduled. Clearing 10s check timeout"
  }), clearTimeout(I), I = null)
}
async function g() {
  let e = Date.now(),
    t = await (0, E.getSession)(),
    n = Date.now();
  if (null == t) {
    f.default.captureException(Error("Null session when tracking session heartbeat. Waited ".concat(n - e, "ms")));
    return
  }
  if (!m) {
    f.default.captureException(Error("Heartbeat scheduler not started when tracking session heartbeat.")), T();
    return
  }
  f.default.addBreadcrumb({
    message: "Tracking Heartbeat",
    data: {
      initialized: t.initialized
    }
  });
  let s = {
      client_heartbeat_initialization_timestamp: t.initialized,
      client_heartbeat_version: 17
    },
    o = c.default.getMemoryUsageElectronRenderer();
  null != o && (s.client_heartbeat_renderer_memory = o);
  let d = c.default.getMemoryUsageElectronRendererUsedHeapSize();
  null != d && (s.client_heartbeat_renderer_memory_used_heap = d);
  {
    let e = r.default.getCurrentGameForAnalytics();
    null != e && (s.client_heartbeat_current_game_id = e.id, s.client_heartbeat_current_game_name = e.name, s.client_heartbeat_current_game_executable = (0, i.removeExecutablePathPrefix)(e.exePath), s.client_heartbeat_current_game_distributor = e.distributor)
  }
  u.default.track(h.AnalyticEvents.CLIENT_HEARTBEAT, s), a.Storage.set(_, Date.now().toString()), (0, l.drainClickstream)()
}
let A = null,
  N = !0;

function R() {
  if (N || null != A && A !== h.RTCConnectionStates.DISCONNECTED && A !== h.RTCConnectionStates.RTC_DISCONNECTED) try {
    p()
  } catch (e) {
    f.default.captureException(e)
  } else !m || (m = !1, f.default.addBreadcrumb({
    message: "Stopping Analytics Heartbeat"
  }), (0, E.setSessionExtendingEnabled)(!1), T(), (0, l.drainClickstream)())
}

function O() {
  f.default.addBreadcrumb({
    message: "Initializing SessionHeartbeatScheduler"
  }), o.default.addChangeListener(L), s.default.subscribe("WINDOW_FOCUS", M), s.default.subscribe("APP_STATE_UPDATE", P), s.default.subscribe("LOGIN_SUCCESS", v), R()
}

function v() {
  g()
}

function L() {
  let e = o.default.getState();
  A !== e && (A = e, R())
}

function M(e) {
  let {
    focused: t
  } = e;
  N = t, R()
}

function P(e) {
  let {
    state: t
  } = e;
  N = t === h.AppStates.ACTIVE, R()
}