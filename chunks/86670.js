"use strict";
n.d(t, {
  Pv: function() {
    return o
  },
  dI: function() {
    return s
  },
  gs: function() {
    return a
  }
});
var i = n(570140);
let r = new(n(710845)).Z("TryLoad");
async function s(e) {
  try {
    return await e()
  } catch (e) {
    return r.log("database load failed.", e), null
  }
}

function o(e, t, n) {
  try {
    return t()
  } catch (t) {
    return r.log("".concat(e, ": exception thrown, resetting socket."), t, t.stack), i.Z.dispatch({
      type: "RESET_SOCKET",
      args: {
        error: t,
        action: "tryLoadOrResetCacheGateway (".concat(e, ")"),
        metricAction: "tryLoadOrResetCacheGateway (".concat(null != n ? n : e, ")"),
        clearCache: !0
      }
    }), null
  }
}
async function a(e, t, n) {
  try {
    return await t()
  } catch (t) {
    return r.log("".concat(e, ": exception thrown, resetting socket."), t, t.stack), i.Z.dispatch({
      type: "RESET_SOCKET",
      args: {
        error: t,
        action: "tryLoadOrResetCacheGatewayAsync (".concat(e, ")"),
        metricAction: "tryLoadOrResetCacheGatewayAsync (".concat(null != n ? n : e, ")"),
        clearCache: !0
      }
    }), null
  }
}