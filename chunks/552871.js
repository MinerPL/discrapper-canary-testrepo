"use strict";
n.d(t, {
  u: function() {
    return d
  }
}), n(47120);
var i = n(259443),
  r = n(544891),
  s = n(881052),
  o = n(131951),
  a = n(403182),
  l = n(579806),
  u = n(981631);
let _ = new i.Y("uploadRtcLogFiles");
async function d(e, t) {
  let n;
  if (null == l.Z.fileManager.readLogFiles) throw new s.n0(s.cz.GENERAL);
  let i = [];
  try {
    i = (i = await l.Z.fileManager.readLogFiles(e)).map(e => (0, a.qF)(e, "application/octet-stream"))
  } catch (e) {
    throw _.error("uploadDebugFiles: read error '".concat(e, "'")), new s.n0(s.cz.READ)
  }
  if (0 === i.length) throw new s.n0(s.cz.NO_FILE);
  try {
    let e = {
      extraInfo: t,
      mediaEngineState: o.Z.getState()
    };
    n = await r.tn.post({
      url: u.ANM.DEBUG_LOGS(u.GU0.RTC),
      attachments: [...i.map(e => ({
        name: e.name,
        file: e,
        filename: e.name
      })), {
        name: "media_engine_state.json",
        filename: "media_engine_state.json",
        file: new Blob([JSON.stringify(e, void 0, 2)])
      }]
    })
  } catch (e) {
    if (429 === e.status) throw new s.n0(s.cz.PROGRESS);
    throw _.error("Debug log upload error: status: ".concat(e.status, ", message: ").concat(e.message)), new s.n0(s.cz.UPLOAD)
  }
  let d = i.length + 1;
  if ("success_count" in n.body && n.body.success_count !== d) throw _.error("Debug log upload: stored files ".concat(n.body.success_count, " !== ").concat(d)), new s.n0(s.cz.GENERAL);
  if ("store_success" in n.body && !n.body.store_success || "id_match" in n.body && !n.body.id_match || "all_success" in n.body && !n.body.all_success) throw _.error("Debug log upload: store_success: ".concat(n.body.store_success, " / ") + "id_match: ".concat(n.body.id_match, " / ") + "all_success: ".concat(n.body.all_success)), new s.n0(s.cz.GENERAL)
}