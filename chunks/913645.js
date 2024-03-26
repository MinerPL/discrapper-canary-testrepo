"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("742270"),
  s = n("815157"),
  l = n("391679"),
  i = n("523086"),
  r = n("599110"),
  o = n("65300"),
  u = n("883069"),
  d = n("49111");
let c = "template";
var f = {
  ...u.default,
  openNativeAppModal(e) {
    i.default.openNativeAppModal(e, d.RPCCommands.GUILD_TEMPLATE_BROWSER)
  },
  openMobileApp(e, t) {
    if (null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > -1) return;
    let n = null != e ? (0, a.getGuildTemplateDynamicLinkTemplate)(e) : (0, a.getDefaultDynamicLinkTemplate)(),
      i = (0, s.generateAttemptId)(),
      u = (0, s.default)(n, {
        utmSource: c,
        fingerprint: t,
        attemptId: i
      });
    r.default.track(d.AnalyticEvents.DEEP_LINK_CLICKED, {
      fingerprint: (0, l.maybeExtractId)(t),
      attempt_id: i,
      source: c,
      guild_template_code: e
    }), o.default.launch(u, () => {})
  }
}