"use strict";
n.d(t, {
  E: function() {
    return I
  }
});
var i = n(544891),
  r = n(552871),
  s = n(283080),
  o = n(592125),
  a = n(569611),
  l = n(710845),
  u = n(705646),
  _ = n(104639),
  d = n(691895),
  c = n(981631);
let E = new l.Z("DebugUploadManager");
async function I(e, t) {
  await T(e), await (0, r.u)(14680064, t)
}
async function T(e) {
  try {
    let t = a.Pz(),
      n = "",
      r = await (0, u.Z)().then(e => (0, u.S)(e, !0)),
      l = t.length + n.length + r.length;
    if (l > 9437184) {
      let e = 1 - 9437184 / l;
      t = t.slice(t.length - Math.floor(t.length * e)), n = n.slice(n.length - Math.floor(n.length * e)), r = r.slice(r.length - Math.floor(r.length * e))
    }
    let E = null,
      I = "\n    ".concat((0, d.Z)(E), "\n\n    ").concat((0, s.EA)(), "\n\n    Metadata:\n    ").concat(JSON.stringify((0, _.Z)(), void 0, 2), "\n\n    ChannelStore:\n    ").concat(JSON.stringify(o.Z.getDebugInfo(), void 0, 2), "\n\n    Logs:\n    ").concat(t, "\n\n    System logs:\n    ").concat(n, "\n\n    Push Notifications:\n    ").concat(r, "\n    ");
    a.ZH();
    let T = c.ANM.DEBUG_LOG(e, "discord_app_logs");
    await i.tn.post({
      url: T,
      body: I,
      retries: 3,
      headers: {
        "Content-Type": "text/plain"
      },
      oldFormErrors: !0
    })
  } catch (e) {
    E.error("uploadAppLogFiles: upload app log files error ".concat(e.message))
  }
}