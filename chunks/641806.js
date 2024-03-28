"use strict";
s.r(t), s.d(t, {
  generateDeveloperPortalLink: function() {
    return n
  }
});
var a = s("970648"),
  l = s("981631");
async function n(e) {
  let t = a.default.generateNonce();
  try {
    let s = await a.default.createHandoffToken(t);
    return l.MarketingURLs.DEVELOPER_PORTAL_LOGIN_HANDOFF(t, s, e)
  } catch {
    return "//".concat(window.GLOBAL_ENV.DEVELOPERS_ENDPOINT, "/").concat(e)
  }
}