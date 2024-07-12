n.d(t, {
  DL: function() {
return L;
  }
}), n(411104);
var i = n(433517),
  s = n(570140),
  a = n(188471),
  r = n(581567),
  l = n(594190),
  o = n(19780),
  c = n(626135),
  d = n(70956),
  u = n(848479),
  _ = n(960048),
  h = n(844889),
  E = n(981631);
let I = 'LATEST_HEARTBEAST_EVENT_TIMESTAMP',
  m = null,
  g = null,
  p = null,
  T = !1;
async function S() {
  if (T)
return;
  T = !0, (0, h.fr)(!0), _.Z.addBreadcrumb({
message: 'Start Analytics Heartbeat'
  });
  let e = await i.K.getAfterRefresh(I).then(h.Hg);
  if (!T)
return;
  let t = Date.now(),
n = 15 * d.Z.Millis.MINUTE + e - t;
  n > d.Z.Millis.HOUR && _.Z.addBreadcrumb({
message: 'Received invalid Date.now() when generating a heartbeat. Date.now() = '.concat(t, ', timeUntilNextHeartbeat = ').concat(n, ', latestHeartbeatEventTimestamp = ').concat(e)
  }), e > t && (n = 0), _.Z.addBreadcrumb({
message: 'Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: '.concat(n / 1000, ' seconds. Scheduling Heartbeat')
  }), C(!1), g = setTimeout(() => {
f(), m = setInterval(() => {
  f();
}, 15 * d.Z.Millis.MINUTE);
  }, Math.max(n, 0));
}

function C() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  null != g && (clearTimeout(g), g = null), null != m && (clearInterval(m), m = null), null != p && e && (_.Z.addBreadcrumb({
message: 'Heartbeat correctly scheduled. Clearing 10s check timeout'
  }), clearTimeout(p), p = null);
}
async function f() {
  let e = Date.now(),
t = await (0, h.Gg)(),
n = Date.now();
  if (null == t) {
_.Z.captureException(Error('Null session when tracking session heartbeat. Waited '.concat(n - e, 'ms')));
return;
  }
  if (!T) {
_.Z.captureException(Error('Heartbeat scheduler not started when tracking session heartbeat.')), C();
return;
  }
  _.Z.addBreadcrumb({
message: 'Tracking Heartbeat',
data: {
  initialized: t.initialized
}
  });
  let s = {
  client_heartbeat_initialization_timestamp: t.initialized,
  client_heartbeat_version: 17
},
o = u.Z.getMemoryUsageElectronRenderer();
  null != o && (s.client_heartbeat_renderer_memory = o);
  let d = u.Z.getMemoryUsageElectronRendererUsedHeapSize();
  null != d && (s.client_heartbeat_renderer_memory_used_heap = d);
  {
let e = l.ZP.getCurrentGameForAnalytics();
null != e && (s.client_heartbeat_current_game_id = e.id, s.client_heartbeat_current_game_name = e.name, s.client_heartbeat_current_game_executable = (0, r.N6)(e.exePath), s.client_heartbeat_current_game_distributor = e.distributor);
  }
  c.default.track(E.rMx.CLIENT_HEARTBEAT, s), i.K.set(I, Date.now().toString()), (0, a.Z)();
}
let N = null,
  A = !0;

function Z() {
  if (A || null != N && N !== E.hes.DISCONNECTED && N !== E.hes.RTC_DISCONNECTED)
try {
  S();
} catch (e) {
  _.Z.captureException(e);
}
  else
! function() {
  if (!!T)
    T = !1, _.Z.addBreadcrumb({
      message: 'Stopping Analytics Heartbeat'
    }), (0, h.fr)(!1), C(), (0, a.Z)();
}();
}

function L() {
  _.Z.addBreadcrumb({
message: 'Initializing SessionHeartbeatScheduler'
  }), o.Z.addChangeListener(O), s.Z.subscribe('WINDOW_FOCUS', R), s.Z.subscribe('APP_STATE_UPDATE', x), s.Z.subscribe('LOGIN_SUCCESS', v), Z();
}

function v() {
  f();
}

function O() {
  let e = o.Z.getState();
  N !== e && (N = e, Z());
}

function R(e) {
  let {
focused: t
  } = e;
  A = t, Z();
}

function x(e) {
  let {
state: t
  } = e;
  A = t === E.$7l.ACTIVE, Z();
}