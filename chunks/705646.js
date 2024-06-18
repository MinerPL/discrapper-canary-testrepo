"use strict";
n.d(t, {
  S: function() {
    return o
  },
  Z: function() {
    return a
  }
});
var i = n(433517),
  r = n(314897),
  s = n(981631);

function o(e, t) {
  if (0 === e.length) return "No logs";
  let n = i.K.get(s.JkL),
    r = i.K.get(s.scU),
    o = e.map(e => {
      let n = e.silent ? "Silent" : "Displayed",
        i = t ? "".concat(e.channelId, " - ").concat(e.messageId) : "".concat(e.title, " - ").concat(e.content);
      return "".concat(new Date(e.receivedTimestamp).toISOString(), " [").concat(e.type, "] ").concat(n, " - ").concat(i)
    }).join("\n");
  return "".concat(null != n ? "Device Token: ".concat(n) : "", "\n").concat(null != r ? "Device Voip Token: ".concat(r) : "", "\n\n").concat(o)
}
async function a() {
  let e = r.default.getId();
  return []
}