n(47120), n(411104), n(177593);
var r, i, a, s, o, l = n(392711),
  u = n.n(l),
  c = n(442837),
  d = n(570140),
  _ = n(579806),
  E = n(632243),
  f = n(314897),
  h = n(283595),
  p = n(129542),
  m = n(70956),
  I = n(780570),
  T = n(358085),
  g = n(804739),
  S = n(941128),
  A = n(391690),
  N = n(981631);
let v = 1 * m.Z.Millis.MINUTE;
(r || (r = {})).DISPATCH_APPLICATION_PROGRESS = 'dispatch_application_progress';
let O = {},
  R = 'file://',
  C = !1,
  y = 0,
  D = 0,
  L = 0,
  b = [],
  M = [],
  P = [],
  U = !1;

function w(e) {
  return e.type === N.vxO.INSTALLING || e.type === N.vxO.UPDATING || e.type === N.vxO.REPAIRING ? e.networkProgress : null;
}

function x(e) {
  return e.type === N.vxO.INSTALLING || e.type === N.vxO.UPDATING || e.type === N.vxO.REPAIRING ? e.diskProgress : null;
}

function G(e) {
  return e.type === N.vxO.INSTALLING || e.type === N.vxO.UPDATING || e.type === N.vxO.REPAIRING ? e.readerProgress : null;
}
let k = u().throttle(function(e) {
M = (M = [{
    bytes: e,
    timestamp: Date.now()
  },
  ...M
]).slice(0, 200);
  }, 200),
  B = u().throttle(function(e) {
let t = Date.now(),
  n = t - v;
b = (b = [{
    bytes: e,
    timestamp: t
  },
  ...b
]).slice(0, 200).filter(e => {
  let {
    timestamp: t
  } = e;
  return t >= n;
});
  }, 200),
  F = u().throttle(function(e) {
P = (P = [{
    bytes: e,
    timestamp: Date.now()
  },
  ...P
]).slice(0, 200);
  }, 200);

function V(e, t, n) {
  let r = n(O[t]),
i = n(e[t]);
  return null != r && null != i && 0 !== r ? Math.max(i - r, 0) : 0;
}
class H extends(i = c.ZP.Store) {
  initialize() {
this.waitFor(f.default);
  }
  getState(e, t) {
return O[(0, I.Tu)(e, t)];
  }
  isUpToDate(e, t) {
let n = O[(0, I.Tu)(e, t)];
return null != n && n.type === N.vxO.UP_TO_DATE;
  }
  shouldPatch(e, t) {
let n = O[(0, I.Tu)(e, t)];
return null != n && !0 === n.shouldPatch;
  }
  isInstalled(e, t) {
let n = O[(0, I.Tu)(e, t)];
return null != n ? n.type !== N.vxO.UNINSTALLING : A.Z.shouldBeInstalled(e, t);
  }
  supportsCloudSync(e, t) {
null == t && (t = e);
let n = O[(0, I.Tu)(e, t)];
return null != n && null != n.storage && !!n.storage.sync;
  }
  isLaunchable(e, t) {
if (!(0, g.Q)())
  return !1;
let n = O[(0, I.Tu)(e, t)];
return null != n && n.type === N.vxO.UP_TO_DATE && null != n.launchOptions && 0 !== n.launchOptions.length;
  }
  getDefaultLaunchOption(e, t) {
let n = O[(0, I.Tu)(e, t)];
if (null == n)
  return null;
let {
  defaultLaunchOptionId: r,
  launchOptions: i
} = n;
return null == r || null == i ? null : i[r];
  }
  getLaunchOptions(e, t) {
let n = O[(0, I.Tu)(e, t)];
return null == n || null == n.launchOptions ? [] : Object.values(n.launchOptions);
  }
  getHistoricalTotalBytesRead() {
return b;
  }
  getHistoricalTotalBytesDownloaded() {
return M;
  }
  getHistoricalTotalBytesWritten() {
return P;
  }
  whenInitialized(e) {
this.addConditionalChangeListener(() => {
  if (C)
    return setImmediate(e), !1;
});
  }
}
o = 'DispatchApplicationStore', (s = 'displayName') in(a = H) ? Object.defineProperty(a, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = o, t.Z = new H(d.Z, {
  CONNECTION_OPEN: function() {
C = !1;
  },
  DISPATCH_APPLICATION_STATE_UPDATE: function(e) {
let {
  state: t
} = e;
C = !0;
let n = {},
  r = t.applications,
  i = null != t.currentTask ? t.currentTask.branchId : null,
  a = !1;
for (let e in r)
  for (let t in r[e]) {
    let s = (0, I.Tu)(e, t);
    if (n[s] = function(e) {
        let {
          build_id: t,
          target_build_id: n,
          manifest_ids: r,
          target_manifest_ids: i,
          application_id: a,
          branch_id: s,
          launch_commands: o,
          launch_options: l,
          storage: c,
          install_path: d,
          installed_size: E,
          repairing: f
        } = e, {
          should_patch: h
        } = e;
        switch (null == h && (h = !0), e.state.type) {
          case N.DJE.COMPLETE: {
            let e;
            let I = {},
              g = null;
            if (f)
              e = N.vxO.REPAIRING;
            else if (null == t)
              e = N.vxO.INSTALL_REQUIRED;
            else if (h && (t !== n || null != r && 0 !== u().difference(r, i).length))
              e = N.vxO.UPDATE_REQUIRED;
            else if (e = N.vxO.UP_TO_DATE, null != d) {
              let e = _.Z.fileManager.join(d, 'content'),
                t = (0, p.D)();
              if (null != l && 0 !== l.length) {
                var m;
                if (t === N.QR$.WIN64 && (m = t, !l.some(e => e.platforms.includes(m))))
                  t = N.QR$.WIN32;
                for (let n of l)
                  if (n.platforms.includes(t)) {
                    let t;
                    let {
                      executable: r,
                      name: i,
                      working_dir: a
                    } = n, s = _.Z.fileManager.join(e, r);
                    (0, T.isMac)() && !s.startsWith(R) && (s = ''.concat(R).concat(s)), t = null != a ? _.Z.fileManager.join(e, a) : _.Z.fileManager.dirname(s), I[i] = {
                      ...n,
                      id: i,
                      fullExecutablePath: s,
                      fullWorkingDir: t
                    }, null == g && (g = i);
                  }
              } else if (null != o) {
                t === N.QR$.WIN64 && null == o[t] && (t = N.QR$.WIN32);
                let n = o[t];
                if (null != n) {
                  let {
                    executable: r
                  } = n, i = 'Default';
                  I[i] = {
                    ...n,
                    name: i,
                    id: i,
                    fullExecutablePath: _.Z.fileManager.join(e, r),
                    fullWorkingDir: e,
                    platforms: [t]
                  }, g = i;
                }
              }
            }
            return {
              type: e,
              applicationId: a,
              branchId: s,
              buildId: t,
              manifestIds: r,
              targetBuildId: n,
              targetManifestIds: i,
              installPath: d,
              installedSize: E,
              launchOptions: I,
              defaultLaunchOptionId: g,
              shouldPatch: h,
              storage: c
            };
          }
          case N.DJE.TRANSITION: {
            let o;
            let {
              stage: l,
              disk_progress: u,
              network_progress: c,
              reader_progress: _,
              progress: p,
              total: m,
              paused: I
            } = e.state, T = l.type;
            return {
              type: o = T === N.f07.UNINSTALLING ? N.vxO.UNINSTALLING : f ? N.vxO.REPAIRING : null == t ? N.vxO.INSTALLING : N.vxO.UPDATING,
              stage: T,
              applicationId: a,
              branchId: s,
              buildId: t,
              manifestIds: r,
              targetBuildId: n,
              targetManifestIds: i,
              installPath: d,
              installedSize: E,
              diskProgress: u,
              networkProgress: c,
              readerProgress: _,
              progress: p,
              total: m,
              paused: I,
              shouldPatch: h
            };
          }
        }
        throw Error('Invalid Dispatch State. state='.concat(e.state.type));
      }(r[e][t]), null != O[s]) {
      let e = V(n, s, w);
      e > 0 && k(y += e);
      let r = V(n, s, x);
      r > 0 && F(D += r);
      let o = V(n, s, G);
      if (o > 0 && B(L += o), i === t) {
        let e = n[s];
        if (!0 !== e.paused && (e.type === N.vxO.UNINSTALLING || e.type === N.vxO.INSTALLING || e.type === N.vxO.UPDATING))
          switch (e.stage) {
            case N.f07.PATCHING:
            case N.f07.FINALIZING:
            case N.f07.VERIFYING:
            case N.f07.REPAIRING:
            case N.f07.POST_INSTALL_SCRIPTS:
              E.Z.setProgress('dispatch_application_progress', (0, I.xI)(e.progress, e.total) / 100), a = !0;
          }
      }
    }
    if (!U) {
      let r = _.Z.fileManager.dirname(n[s].installPath);
      A.Z.getInstallationPath(e, t) !== r && d.Z.wait(() => {
        d.Z.dispatch({
          type: 'DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS',
          applicationId: e,
          branchId: t,
          installationPath: r
        });
      }), -1 === S.Z.getQueuePosition(e, t) && (n[s].type === N.vxO.INSTALLING || n[s].type === N.vxO.UPDATING) && h.Z.hasApplication(e, t) && A.Z.shouldBeInstalled(e, t) && d.Z.wait(() => {
        d.Z.dispatch({
          type: 'DISPATCH_APPLICATION_UPDATE',
          applicationId: e,
          branchId: t,
          automatic: !0
        });
      });
    }
  }!a && 'dispatch_application_progress' === E.Z.taskID && E.Z.clearProgress('dispatch_application_progress'), O = n, U = !0;
  }
});