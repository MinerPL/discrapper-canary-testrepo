"use strict";
s.r(t), s.d(t, {
  trackGuildSettingsDiscoveryViewed: function() {
    return o
  }
}), s("653041");
var a, l, n = s("626135"),
  i = s("946314"),
  r = s("981631");

function o(e) {
  let t = i.default.getDiscoveryChecklist(e),
    s = [];
  if (!(null == t ? void 0 : t.sufficient)) {
    var a;
    !(null == t ? void 0 : t.safeEnvironment) && s.push("TNS"), (!(null == t ? void 0 : t.healthy) || (null == t ? void 0 : t.healthScorePending)) && s.push("HEALTH"), !(null == t ? void 0 : t.size) && s.push("MEMBER_COUNT"), Object.keys(null !== (a = null == t ? void 0 : t.nsfwProperties) && void 0 !== a ? a : {}).length > 0 && s.push("BAD_WORDS"), !(null == t ? void 0 : t.protected) && s.push("2FA")
  }
  n.default.track(r.AnalyticEvents.GUILD_SETTINGS_DISCOVERY_VIEWED, {
    guild_id: e,
    failed_reasons: s
  })
}(l = a || (a = {})).SAFE_ENVIRONMENT = "TNS", l.HEALTHY = "HEALTH", l.SIZE = "MEMBER_COUNT", l.NSFW = "BAD_WORDS", l.PROTECTED = "2FA"