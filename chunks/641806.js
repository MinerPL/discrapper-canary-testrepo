"use strict";
t.d(s, {
  $: function() {
    return l
  }
});
var n = t(970648),
  i = t(981631);
async function l(e) {
  let s = n.Z.generateNonce();
  try {
    let t = await n.Z.createHandoffToken(s);
    return i.EYA.DEVELOPER_PORTAL_LOGIN_HANDOFF(s, t, e)
  } catch {
    return "//".concat(window.GLOBAL_ENV.DEVELOPERS_ENDPOINT, "/").concat(e)
  }
}