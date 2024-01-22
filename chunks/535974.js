"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("222007"), n("70102"), n("860677");
var i, s = n("917351"),
  r = n.n(s),
  a = n("446674"),
  o = n("913144"),
  l = n("49671"),
  u = n("70513"),
  d = n("271938"),
  c = n("686470"),
  f = n("645672"),
  _ = n("718517"),
  h = n("964889"),
  g = n("773336"),
  m = n("602043"),
  E = n("352326"),
  p = n("98328"),
  v = n("49111");
let S = 1 * _.default.Millis.MINUTE;
(i || (i = {})).DISPATCH_APPLICATION_PROGRESS = "dispatch_application_progress";
let T = {},
  I = "file://",
  C = !1,
  A = 0,
  y = 0,
  N = 0,
  R = [],
  O = [],
  D = [],
  P = !1;

function b(e) {
  return e.type === v.LocalDispatchApplicationStates.INSTALLING || e.type === v.LocalDispatchApplicationStates.UPDATING || e.type === v.LocalDispatchApplicationStates.REPAIRING ? e.networkProgress : null
}

function L(e) {
  return e.type === v.LocalDispatchApplicationStates.INSTALLING || e.type === v.LocalDispatchApplicationStates.UPDATING || e.type === v.LocalDispatchApplicationStates.REPAIRING ? e.diskProgress : null
}

function M(e) {
  return e.type === v.LocalDispatchApplicationStates.INSTALLING || e.type === v.LocalDispatchApplicationStates.UPDATING || e.type === v.LocalDispatchApplicationStates.REPAIRING ? e.readerProgress : null
}
let U = r.throttle(function(e) {
    O = (O = [{
      bytes: e,
      timestamp: Date.now()
    }, ...O]).slice(0, 200)
  }, 200),
  k = r.throttle(function(e) {
    let t = Date.now(),
      n = t - S;
    R = (R = [{
      bytes: e,
      timestamp: t
    }, ...R]).slice(0, 200).filter(e => {
      let {
        timestamp: t
      } = e;
      return t >= n
    })
  }, 200),
  w = r.throttle(function(e) {
    D = (D = [{
      bytes: e,
      timestamp: Date.now()
    }, ...D]).slice(0, 200)
  }, 200);

function V(e, t, n) {
  let i = n(T[t]),
    s = n(e[t]);
  return null != i && null != s && 0 !== i ? Math.max(s - i, 0) : 0
}
class G extends a.default.Store {
  initialize() {
    this.waitFor(d.default)
  }
  getState(e, t) {
    let n = (0, h.getComboId)(e, t);
    return T[n]
  }
  isUpToDate(e, t) {
    let n = T[(0, h.getComboId)(e, t)];
    return null != n && n.type === v.LocalDispatchApplicationStates.UP_TO_DATE
  }
  shouldPatch(e, t) {
    let n = T[(0, h.getComboId)(e, t)];
    return null != n && !0 === n.shouldPatch
  }
  isInstalled(e, t) {
    let n = T[(0, h.getComboId)(e, t)];
    return null != n ? n.type !== v.LocalDispatchApplicationStates.UNINSTALLING : p.default.shouldBeInstalled(e, t)
  }
  supportsCloudSync(e, t) {
    null == t && (t = e);
    let n = T[(0, h.getComboId)(e, t)];
    return null != n && null != n.storage && !!n.storage.sync
  }
  isLaunchable(e, t) {
    if (!(0, m.isSupportedPlatform)()) return !1;
    let n = T[(0, h.getComboId)(e, t)];
    return null != n && n.type === v.LocalDispatchApplicationStates.UP_TO_DATE && null != n.launchOptions && 0 !== n.launchOptions.length
  }
  getDefaultLaunchOption(e, t) {
    let n = T[(0, h.getComboId)(e, t)];
    if (null == n) return null;
    let {
      defaultLaunchOptionId: i,
      launchOptions: s
    } = n;
    return null == i || null == s ? null : s[i]
  }
  getLaunchOptions(e, t) {
    let n = T[(0, h.getComboId)(e, t)];
    return null == n || null == n.launchOptions ? [] : Object.values(n.launchOptions)
  }
  getHistoricalTotalBytesRead() {
    return R
  }
  getHistoricalTotalBytesDownloaded() {
    return O
  }
  getHistoricalTotalBytesWritten() {
    return D
  }
  whenInitialized(e) {
    this.addConditionalChangeListener(() => {
      if (C) return setImmediate(e), !1
    })
  }
}
G.displayName = "DispatchApplicationStore";
var F = new G(o.default, {
  CONNECTION_OPEN: function() {
    C = !1
  },
  DISPATCH_APPLICATION_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e;
    C = !0;
    let n = {},
      i = t.applications,
      s = null != t.currentTask ? t.currentTask.branchId : null,
      a = !1;
    for (let e in i)
      for (let t in i[e]) {
        let d = (0, h.getComboId)(e, t);
        if (n[d] = function(e) {
            let {
              build_id: t,
              target_build_id: n,
              manifest_ids: i,
              target_manifest_ids: s,
              application_id: a,
              branch_id: o,
              launch_commands: u,
              launch_options: d,
              storage: c,
              install_path: _,
              installed_size: h,
              repairing: m
            } = e, {
              should_patch: E
            } = e;
            switch (null == E && (E = !0), e.state.type) {
              case v.DispatchApplicationStates.COMPLETE: {
                let e;
                let S = {},
                  T = null;
                if (m) e = v.LocalDispatchApplicationStates.REPAIRING;
                else if (null == t) e = v.LocalDispatchApplicationStates.INSTALL_REQUIRED;
                else if (E && (t !== n || null != i && 0 !== r.difference(i, s).length)) e = v.LocalDispatchApplicationStates.UPDATE_REQUIRED;
                else if (e = v.LocalDispatchApplicationStates.UP_TO_DATE, null != _) {
                  let e = l.default.fileManager.join(_, "content"),
                    t = (0, f.getBuildPlatform)();
                  if (null != d && 0 !== d.length) {
                    var p;
                    if (t === v.BuildPlatformTypes.WIN64 && (p = t, !d.some(e => e.platforms.includes(p)))) t = v.BuildPlatformTypes.WIN32;
                    for (let n of d)
                      if (n.platforms.includes(t)) {
                        let t;
                        let {
                          executable: i,
                          name: s,
                          working_dir: r
                        } = n, a = l.default.fileManager.join(e, i);
                        (0, g.isMac)() && !a.startsWith(I) && (a = "".concat(I).concat(a)), t = null != r ? l.default.fileManager.join(e, r) : l.default.fileManager.dirname(a), S[s] = {
                          ...n,
                          id: s,
                          fullExecutablePath: a,
                          fullWorkingDir: t
                        }, null == T && (T = s)
                      }
                  } else if (null != u) {
                    t === v.BuildPlatformTypes.WIN64 && null == u[t] && (t = v.BuildPlatformTypes.WIN32);
                    let n = u[t];
                    if (null != n) {
                      let {
                        executable: i
                      } = n, s = "Default";
                      S[s] = {
                        ...n,
                        name: s,
                        id: s,
                        fullExecutablePath: l.default.fileManager.join(e, i),
                        fullWorkingDir: e,
                        platforms: [t]
                      }, T = s
                    }
                  }
                }
                return {
                  type: e,
                  applicationId: a,
                  branchId: o,
                  buildId: t,
                  manifestIds: i,
                  targetBuildId: n,
                  targetManifestIds: s,
                  installPath: _,
                  installedSize: h,
                  launchOptions: S,
                  defaultLaunchOptionId: T,
                  shouldPatch: E,
                  storage: c
                }
              }
              case v.DispatchApplicationStates.TRANSITION: {
                let r;
                let {
                  stage: l,
                  disk_progress: u,
                  network_progress: d,
                  reader_progress: c,
                  progress: f,
                  total: g,
                  paused: p
                } = e.state, S = l.type;
                return {
                  type: r = S === v.DispatchApplicationStages.UNINSTALLING ? v.LocalDispatchApplicationStates.UNINSTALLING : m ? v.LocalDispatchApplicationStates.REPAIRING : null == t ? v.LocalDispatchApplicationStates.INSTALLING : v.LocalDispatchApplicationStates.UPDATING,
                  stage: S,
                  applicationId: a,
                  branchId: o,
                  buildId: t,
                  manifestIds: i,
                  targetBuildId: n,
                  targetManifestIds: s,
                  installPath: _,
                  installedSize: h,
                  diskProgress: u,
                  networkProgress: d,
                  readerProgress: c,
                  progress: f,
                  total: g,
                  paused: p,
                  shouldPatch: E
                }
              }
            }
            throw Error("Invalid Dispatch State. state=".concat(e.state.type))
          }(i[e][t]), null != T[d]) {
          let e = V(n, d, b);
          e > 0 && U(A += e);
          let i = V(n, d, L);
          i > 0 && w(y += i);
          let r = V(n, d, M);
          if (r > 0 && k(N += r), s === t) {
            let e = n[d];
            if (!0 !== e.paused && (e.type === v.LocalDispatchApplicationStates.UNINSTALLING || e.type === v.LocalDispatchApplicationStates.INSTALLING || e.type === v.LocalDispatchApplicationStates.UPDATING)) switch (e.stage) {
              case v.DispatchApplicationStages.PATCHING:
              case v.DispatchApplicationStages.FINALIZING:
              case v.DispatchApplicationStages.VERIFYING:
              case v.DispatchApplicationStages.REPAIRING:
              case v.DispatchApplicationStages.POST_INSTALL_SCRIPTS:
                u.default.setProgress("dispatch_application_progress", (0, h.calculateProgressPercentage)(e.progress, e.total) / 100), a = !0
            }
          }
        }
        if (!P) {
          let i = l.default.fileManager.dirname(n[d].installPath);
          p.default.getInstallationPath(e, t) !== i && o.default.wait(() => {
            o.default.dispatch({
              type: "DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS",
              applicationId: e,
              branchId: t,
              installationPath: i
            })
          }), -1 === E.default.getQueuePosition(e, t) && (n[d].type === v.LocalDispatchApplicationStates.INSTALLING || n[d].type === v.LocalDispatchApplicationStates.UPDATING) && c.default.hasApplication(e, t) && p.default.shouldBeInstalled(e, t) && o.default.wait(() => {
            o.default.dispatch({
              type: "DISPATCH_APPLICATION_UPDATE",
              applicationId: e,
              branchId: t,
              automatic: !0
            })
          })
        }
      }!a && "dispatch_application_progress" === u.default.taskID && u.default.clearProgress("dispatch_application_progress"), T = n, P = !0
  }
})