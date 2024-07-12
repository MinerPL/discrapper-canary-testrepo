var r, i, a, o, s = n(442837),
  l = n(846519),
  u = n(570140),
  c = n(981631);
let d = {},
  _ = {};

function E(e, t, n) {
  var r;
  let {
applicationId: i
  } = n, a = null !== (r = d[i]) && void 0 !== r ? r : {};
  if (a[t] = e, d[i] = a, !__OVERLAY__ && e === c.OcF.FAILED) {
null != _[i] && _[i].stop();
let e = new l.V7();
e.start(120000, () => u.Z.dispatch({
  type: 'ACTIVITY_LAUNCH_FAIL',
  applicationId: i,
  activityType: t
})), _[i] = e;
  }
}

function f(e) {
  return E(c.OcF.COMPLETE, c.mFx.JOIN, e);
}
class h extends(o = s.ZP.Store) {
  getState(e, t) {
let n = d[e];
return null == n ? void 0 : n[t];
  }
  getStates() {
return d;
  }
}
a = 'ActivityLauncherStore', (i = 'displayName') in(r = h) ? Object.defineProperty(r, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = a, t.Z = new h(u.Z, {
  OVERLAY_INITIALIZE: function(e) {
let {
  activityLauncherStates: t
} = e;
d = {
  ...t
};
  },
  ACTIVITY_JOIN_LOADING: e => E(c.OcF.LOADING, c.mFx.JOIN, e),
  ACTIVITY_JOIN_FAILED: e => E(c.OcF.FAILED, c.mFx.JOIN, e),
  ACTIVITY_JOIN: f,
  EMBEDDED_ACTIVITY_CLOSE: f,
  ACTIVITY_LAUNCH_FAIL: function(e) {
let {
  applicationId: t,
  activityType: n
} = e, r = d[t];
if (null == r || r[n] !== c.OcF.FAILED)
  return !1;
delete r[n];
  }
});