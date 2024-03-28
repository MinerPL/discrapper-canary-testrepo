"use strict";
n.r(e), n.d(e, {
  sync: function() {
    return c
  }
}), n("411104");
var l = n("570140"),
  a = n("710845"),
  i = n("209492"),
  o = n("981631");
let s = new a.default("CloudSync");
class r {
  constructor(t) {
    var e, n, l;
    e = this, l = void 0, (n = "message") in e ? Object.defineProperty(e, n, {
      value: l,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[n] = l, this.message = t
  }
}
async function c(t, e) {
  let n, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
  l.default.dispatch({
    type: "GAME_CLOUD_SYNC_START",
    applicationId: t,
    branchId: e
  });
  try {
    if ((n = await i.syncApplication(t, e, a)).type === o.CloudSyncResultTypes.CONFLICT) throw l.default.dispatch({
      type: "GAME_CLOUD_SYNC_CONFLICT",
      applicationId: t,
      branchId: e,
      next: n.next,
      remote: n.remote
    }), new r("Conflict in cloud sync.");
    (n.type === o.CloudSyncResultTypes.PULL || n.type === o.CloudSyncResultTypes.PUSH) && s.info("Sync complete", n)
  } catch (n) {
    if (n instanceof r) throw n;
    throw l.default.dispatch({
      type: "GAME_CLOUD_SYNC_ERROR",
      applicationId: t,
      branchId: e
    }), s.error("Failed to cloud sync:", n), Error("Failed to cloud sync.")
  }
  return l.default.dispatch({
    type: "GAME_CLOUD_SYNC_COMPLETE",
    applicationId: t,
    branchId: e
  }), n
}