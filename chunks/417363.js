"use strict";
n(47120), n(411104), n(177593);
var i, r, s, o, a, l = n(392711),
  u = n.n(l),
  _ = n(442837),
  d = n(570140),
  c = n(579806),
  E = n(632243),
  I = n(314897),
  T = n(283595),
  h = n(129542),
  S = n(70956),
  f = n(780570),
  N = n(358085),
  A = n(804739),
  m = n(941128),
  O = n(391690),
  R = n(981631);
let C = 1 * S.Z.Millis.MINUTE;
(i || (i = {})).DISPATCH_APPLICATION_PROGRESS = "dispatch_application_progress";
let p = {},
  g = "file://",
  L = !1,
  v = 0,
  D = 0,
  M = 0,
  P = [],
  y = [],
  U = [],
  b = !1;

function G(e) {
  return e.type === R.vxO.INSTALLING || e.type === R.vxO.UPDATING || e.type === R.vxO.REPAIRING ? e.networkProgress : null
}

function w(e) {
  return e.type === R.vxO.INSTALLING || e.type === R.vxO.UPDATING || e.type === R.vxO.REPAIRING ? e.diskProgress : null
}

function k(e) {
  return e.type === R.vxO.INSTALLING || e.type === R.vxO.UPDATING || e.type === R.vxO.REPAIRING ? e.readerProgress : null
}
let B = u().throttle(function(e) {
    y = (y = [{
      bytes: e,
      timestamp: Date.now()
    }, ...y]).slice(0, 200)
  }, 200),
  x = u().throttle(function(e) {
    let t = Date.now(),
      n = t - C;
    P = (P = [{
      bytes: e,
      timestamp: t
    }, ...P]).slice(0, 200).filter(e => {
      let {
        timestamp: t
      } = e;
      return t >= n
    })
  }, 200),
  V = u().throttle(function(e) {
    U = (U = [{
      bytes: e,
      timestamp: Date.now()
    }, ...U]).slice(0, 200)
  }, 200);

function Z(e, t, n) {
  let i = n(p[t]),
    r = n(e[t]);
  return null != i && null != r && 0 !== i ? Math.max(r - i, 0) : 0
}
class H extends(r = _.ZP.Store) {
  initialize() {
    this.waitFor(I.default)
  }
  getState(e, t) {
    return p[(0, f.Tu)(e, t)]
  }
  isUpToDate(e, t) {
    let n = p[(0, f.Tu)(e, t)];
    return null != n && n.type === R.vxO.UP_TO_DATE
  }
  shouldPatch(e, t) {
    let n = p[(0, f.Tu)(e, t)];
    return null != n && !0 === n.shouldPatch
  }
  isInstalled(e, t) {
    let n = p[(0, f.Tu)(e, t)];
    return null != n ? n.type !== R.vxO.UNINSTALLING : O.Z.shouldBeInstalled(e, t)
  }
  supportsCloudSync(e, t) {
    null == t && (t = e);
    let n = p[(0, f.Tu)(e, t)];
    return null != n && null != n.storage && !!n.storage.sync
  }
  isLaunchable(e, t) {
    if (!(0, A.Q)()) return !1;
    let n = p[(0, f.Tu)(e, t)];
    return null != n && n.type === R.vxO.UP_TO_DATE && null != n.launchOptions && 0 !== n.launchOptions.length
  }
  getDefaultLaunchOption(e, t) {
    let n = p[(0, f.Tu)(e, t)];
    if (null == n) return null;
    let {
      defaultLaunchOptionId: i,
      launchOptions: r
    } = n;
    return null == i || null == r ? null : r[i]
  }
  getLaunchOptions(e, t) {
    let n = p[(0, f.Tu)(e, t)];
    return null == n || null == n.launchOptions ? [] : Object.values(n.launchOptions)
  }
  getHistoricalTotalBytesRead() {
    return P
  }
  getHistoricalTotalBytesDownloaded() {
    return y
  }
  getHistoricalTotalBytesWritten() {
    return U
  }
  whenInitialized(e) {
    this.addConditionalChangeListener(() => {
      if (L) return setImmediate(e), !1
    })
  }
}
a = "DispatchApplicationStore", (o = "displayName") in(s = H) ? Object.defineProperty(s, o, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = a, t.Z = new H(d.Z, {
  CONNECTION_OPEN: function() {
    L = !1
  },
  DISPATCH_APPLICATION_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e;
    L = !0;
    let n = {},
      i = t.applications,
      r = null != t.currentTask ? t.currentTask.branchId : null,
      s = !1;
    for (let e in i)
      for (let t in i[e]) {
        let o = (0, f.Tu)(e, t);
        if (n[o] = function(e) {
            let {
              build_id: t,
              target_build_id: n,
              manifest_ids: i,
              target_manifest_ids: r,
              application_id: s,
              branch_id: o,
              launch_commands: a,
              launch_options: l,
              storage: _,
              install_path: d,
              installed_size: E,
              repairing: I
            } = e, {
              should_patch: T
            } = e;
            switch (null == T && (T = !0), e.state.type) {
              case R.DJE.COMPLETE: {
                let e;
                let f = {},
                  A = null;
                if (I) e = R.vxO.REPAIRING;
                else if (null == t) e = R.vxO.INSTALL_REQUIRED;
                else if (T && (t !== n || null != i && 0 !== u().difference(i, r).length)) e = R.vxO.UPDATE_REQUIRED;
                else if (e = R.vxO.UP_TO_DATE, null != d) {
                  let e = c.Z.fileManager.join(d, "content"),
                    t = (0, h.D)();
                  if (null != l && 0 !== l.length) {
                    var S;
                    if (t === R.QR$.WIN64 && (S = t, !l.some(e => e.platforms.includes(S)))) t = R.QR$.WIN32;
                    for (let n of l)
                      if (n.platforms.includes(t)) {
                        let t;
                        let {
                          executable: i,
                          name: r,
                          working_dir: s
                        } = n, o = c.Z.fileManager.join(e, i);
                        (0, N.isMac)() && !o.startsWith(g) && (o = "".concat(g).concat(o)), t = null != s ? c.Z.fileManager.join(e, s) : c.Z.fileManager.dirname(o), f[r] = {
                          ...n,
                          id: r,
                          fullExecutablePath: o,
                          fullWorkingDir: t
                        }, null == A && (A = r)
                      }
                  } else if (null != a) {
                    t === R.QR$.WIN64 && null == a[t] && (t = R.QR$.WIN32);
                    let n = a[t];
                    if (null != n) {
                      let {
                        executable: i
                      } = n, r = "Default";
                      f[r] = {
                        ...n,
                        name: r,
                        id: r,
                        fullExecutablePath: c.Z.fileManager.join(e, i),
                        fullWorkingDir: e,
                        platforms: [t]
                      }, A = r
                    }
                  }
                }
                return {
                  type: e,
                  applicationId: s,
                  branchId: o,
                  buildId: t,
                  manifestIds: i,
                  targetBuildId: n,
                  targetManifestIds: r,
                  installPath: d,
                  installedSize: E,
                  launchOptions: f,
                  defaultLaunchOptionId: A,
                  shouldPatch: T,
                  storage: _
                }
              }
              case R.DJE.TRANSITION: {
                let a;
                let {
                  stage: l,
                  disk_progress: u,
                  network_progress: _,
                  reader_progress: c,
                  progress: h,
                  total: S,
                  paused: f
                } = e.state, N = l.type;
                return {
                  type: a = N === R.f07.UNINSTALLING ? R.vxO.UNINSTALLING : I ? R.vxO.REPAIRING : null == t ? R.vxO.INSTALLING : R.vxO.UPDATING,
                  stage: N,
                  applicationId: s,
                  branchId: o,
                  buildId: t,
                  manifestIds: i,
                  targetBuildId: n,
                  targetManifestIds: r,
                  installPath: d,
                  installedSize: E,
                  diskProgress: u,
                  networkProgress: _,
                  readerProgress: c,
                  progress: h,
                  total: S,
                  paused: f,
                  shouldPatch: T
                }
              }
            }
            throw Error("Invalid Dispatch State. state=".concat(e.state.type))
          }(i[e][t]), null != p[o]) {
          let e = Z(n, o, G);
          e > 0 && B(v += e);
          let i = Z(n, o, w);
          i > 0 && V(D += i);
          let a = Z(n, o, k);
          if (a > 0 && x(M += a), r === t) {
            let e = n[o];
            if (!0 !== e.paused && (e.type === R.vxO.UNINSTALLING || e.type === R.vxO.INSTALLING || e.type === R.vxO.UPDATING)) switch (e.stage) {
              case R.f07.PATCHING:
              case R.f07.FINALIZING:
              case R.f07.VERIFYING:
              case R.f07.REPAIRING:
              case R.f07.POST_INSTALL_SCRIPTS:
                E.Z.setProgress("dispatch_application_progress", (0, f.xI)(e.progress, e.total) / 100), s = !0
            }
          }
        }
        if (!b) {
          let i = c.Z.fileManager.dirname(n[o].installPath);
          O.Z.getInstallationPath(e, t) !== i && d.Z.wait(() => {
            d.Z.dispatch({
              type: "DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS",
              applicationId: e,
              branchId: t,
              installationPath: i
            })
          }), -1 === m.Z.getQueuePosition(e, t) && (n[o].type === R.vxO.INSTALLING || n[o].type === R.vxO.UPDATING) && T.Z.hasApplication(e, t) && O.Z.shouldBeInstalled(e, t) && d.Z.wait(() => {
            d.Z.dispatch({
              type: "DISPATCH_APPLICATION_UPDATE",
              applicationId: e,
              branchId: t,
              automatic: !0
            })
          })
        }
      }!s && "dispatch_application_progress" === E.Z.taskID && E.Z.clearProgress("dispatch_application_progress"), p = n, b = !0
  }
})