"use strict";
let l;
n.r(e), n.d(e, {
  init: function() {
    return C
  },
  syncApplication: function() {
    return h
  }
}), n("411104");
var a = n("544891"),
  i = n("570140"),
  o = n("710845"),
  s = n("893988"),
  r = n("314897"),
  c = n("417363"),
  u = n("780570"),
  d = n("358085"),
  p = n("998502"),
  f = n("981631");
async function C() {
  if (null == l) {
    if (!(d.isPlatformEmbedded && ((0, d.isMac)() || (0, d.isWindows)()))) {
      new o.default("CloudSyncUtils").warn("CloudSync is not supported on this platform");
      return
    }
    await p.default.ensureModule("discord_cloudsync"), (l = new(p.default.getCloudSync())).on("state", t => i.default.dispatch({
      type: "GAME_CLOUD_SYNC_UPDATE",
      state: t
    }))
  }
}

function h(t, e) {
  var n;
  let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  if (!c.default.supportsCloudSync(t, e)) return Promise.resolve({
    type: f.CloudSyncResultTypes.NONE
  });
  let o = function() {
      if (null == l) throw Error("Initialize cloud sync module before syncing.");
      return l
    }(),
    d = c.default.getState(t, e);
  if (null == d) throw Error("No dispatch state for ".concat(t, ":").concat(e));
  let p = null !== (n = d.storage) && void 0 !== n ? n : {},
    C = (0, u.getComboId)(t, e),
    h = r.default.getToken();
  if (null == h) throw Error("Cannot use cloud sync when not authenticated.");
  let y = null != d.installPath ? (0, s.default)(d.installPath) : null;
  if (null == y) throw Error("No install path for ".concat(t, ":").concat(e));
  let A = r.default.getId(),
    S = {
      forceHash: i,
      manifestPath: f.DefaultCloudSyncConfiguration.STORAGE_MANIFEST(y, A),
      roots: null != p.roots ? p.roots : [{
        id: f.DefaultCloudSyncConfiguration.ROOT_ID,
        paths: Object.keys(f.DefaultCloudSyncConfiguration.ROOT_PLATFORMS).map(t => ({
          platform: t,
          path: f.DefaultCloudSyncConfiguration.ROOT_STORAGE_PATH(y, A)
        })),
        patterns: f.DefaultCloudSyncConfiguration.ROOT_PATTERN
      }],
      storage: {
        baseURL: "".concat((0, a.getAPIBaseURL)()).concat(f.Endpoints.APPLICATION_STORAGE(t, e)),
        token: h
      },
      replacements: {
        INSTALLDIR: f.DefaultCloudSyncConfiguration.INSTALL_DIR(y),
        USERID: A,
        BRANCHID: e
      }
    };
  return o.sync(C, S)
}