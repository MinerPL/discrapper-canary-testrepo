"use strict";
a.r(t), a.d(t, {
  uploadRtcLogFiles: function() {
    return d
  }
}), a("222007");
var n = a("811022"),
  o = a("872717"),
  l = a("448993"),
  s = a("42887"),
  r = a("254490"),
  i = a("49671"),
  c = a("49111");
let u = new n.Logger("uploadRtcLogFiles");
async function d(e, t) {
  let a;
  if (null == i.default.fileManager.readLogFiles) throw new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.GENERAL);
  let n = [];
  try {
    n = (n = await i.default.fileManager.readLogFiles(e)).map(e => (0, r.transformNativeFile)(e, "application/octet-stream"))
  } catch (e) {
    throw u.error("uploadDebugFiles: read error '".concat(e, "'")), new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.READ)
  }
  if (0 === n.length) throw new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.NO_FILE);
  try {
    let e = {
      extraInfo: t,
      mediaEngineState: s.default.getState()
    };
    a = await o.HTTP.post({
      url: c.Endpoints.DEBUG_LOGS(c.DebugLogCategory.RTC),
      attachments: [...n.map(e => ({
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
    if (429 === e.status) throw new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.PROGRESS);
    throw u.error("Debug log upload error: status: ".concat(e.status, ", message: ").concat(e.message)), new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.UPLOAD)
  }
  let d = n.length + 1;
  if ("success_count" in a.body && a.body.success_count !== d) throw u.error("Debug log upload: stored files ".concat(a.body.success_count, " !== ").concat(d)), new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.GENERAL);
  if ("store_success" in a.body && !a.body.store_success || "id_match" in a.body && !a.body.id_match || "all_success" in a.body && !a.body.all_success) throw u.error("Debug log upload: store_success: ".concat(a.body.store_success, " / ") + "id_match: ".concat(a.body.id_match, " / ") + "all_success: ".concat(a.body.all_success)), new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.GENERAL)
}