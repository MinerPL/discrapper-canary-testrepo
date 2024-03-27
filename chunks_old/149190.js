"use strict";
let l;
n.r(e), n.d(e, {
  init: function() {
    return C
  },
  syncApplication: function() {
    return h
  }
}), n("70102");
var a = n("872717"),
  i = n("913144"),
  o = n("605250"),
  s = n("831610"),
  r = n("271938"),
  c = n("535974"),
  u = n("964889"),
  d = n("773336"),
  p = n("50885"),
  f = n("49111");
async function C() {
  if (null != l) return;
  if (!(d.isPlatformEmbedded && ((0, d.isMac)() || (0, d.isWindows)()))) {
    new(0, o.default)("CloudSyncUtils").warn("CloudSync is not supported on this platform");
    return
  }
  await p.default.ensureModule("discord_cloudsync");
  let t = p.default.getCloudSync();
  (l = new t).on("state", t => i.default.dispatch({
    type: "GAME_CLOUD_SYNC_UPDATE",
    state: t
  }))
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
  let A = null != d.installPath ? (0, s.default)(d.installPath) : null;
  if (null == A) throw Error("No install path for ".concat(t, ":").concat(e));
  let y = r.default.getId(),
    S = {
      forceHash: i,
      manifestPath: f.DefaultCloudSyncConfiguration.STORAGE_MANIFEST(A, y),
      roots: null != p.roots ? p.roots : [{
        id: f.DefaultCloudSyncConfiguration.ROOT_ID,
        paths: Object.keys(f.DefaultCloudSyncConfiguration.ROOT_PLATFORMS).map(t => ({
          platform: t,
          path: f.DefaultCloudSyncConfiguration.ROOT_STORAGE_PATH(A, y)
        })),
        patterns: f.DefaultCloudSyncConfiguration.ROOT_PATTERN
      }],
      storage: {
        baseURL: "".concat((0, a.getAPIBaseURL)()).concat(f.Endpoints.APPLICATION_STORAGE(t, e)),
        token: h
      },
      replacements: {
        INSTALLDIR: f.DefaultCloudSyncConfiguration.INSTALL_DIR(A),
        USERID: y,
        BRANCHID: e
      }
    };
  return o.sync(C, S)
}