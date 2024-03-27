"use strict";
a.r(t), a.d(t, {
  uploadDebugLogFiles: function() {
    return f
  }
});
var n = a("872717"),
  o = a("890747"),
  l = a("42203"),
  s = a("821316"),
  r = a("605250"),
  i = a("836403"),
  c = a("825287"),
  u = a("929331"),
  d = a("49111");
let m = new r.default("DebugUploadManager");
async function f(e, t) {
  await g(e), await (0, o.uploadRtcLogFiles)(14680064, t)
}
async function g(e) {
  try {
    let t = s.stringify(),
      a = "",
      o = await (0, i.getPushNotificationLogs)().then(e => (0, i.serializePushNotificationLogs)(e, !0)),
      r = t.length + a.length + o.length;
    if (r > 9437184) {
      let e = 1 - 9437184 / r;
      t = t.slice(t.length - Math.floor(t.length * e)), a = a.slice(a.length - Math.floor(a.length * e)), o = o.slice(o.length - Math.floor(o.length * e))
    }
    let m = null,
      f = "\n    ".concat((0, u.default)(m), "\n\n    Metadata:\n    ").concat(JSON.stringify((0, c.default)(), void 0, 2), "\n\n    ChannelStore:\n    ").concat(JSON.stringify(l.default.getDebugInfo(), void 0, 2), "\n\n    Logs:\n    ").concat(t, "\n\n    System logs:\n    ").concat(a, "\n\n    Push Notifications:\n    ").concat(o, "\n    ");
    s.clear();
    let g = d.Endpoints.DEBUG_LOG(e, "discord_app_logs");
    await n.HTTP.post({
      url: g,
      body: f,
      retries: 3,
      headers: {
        "Content-Type": "text/plain"
      },
      oldFormErrors: !0
    })
  } catch (e) {
    m.error("uploadAppLogFiles: upload app log files error ".concat(e.message))
  }
}