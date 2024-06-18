"use strict";
t.d(s, {
  VP: function() {
    return o
  }
}), t(653041);
var n, i, l = t(626135),
  a = t(946314),
  r = t(981631);

function o(e) {
  let s = a.ZP.getDiscoveryChecklist(e),
    t = [];
  if (!(null == s ? void 0 : s.sufficient)) {
    var n;
    !(null == s ? void 0 : s.safeEnvironment) && t.push("TNS"), (!(null == s ? void 0 : s.healthy) || (null == s ? void 0 : s.healthScorePending)) && t.push("HEALTH"), !(null == s ? void 0 : s.size) && t.push("MEMBER_COUNT"), Object.keys(null !== (n = null == s ? void 0 : s.nsfwProperties) && void 0 !== n ? n : {}).length > 0 && t.push("BAD_WORDS"), !(null == s ? void 0 : s.protected) && t.push("2FA")
  }
  l.default.track(r.rMx.GUILD_SETTINGS_DISCOVERY_VIEWED, {
    guild_id: e,
    failed_reasons: t
  })
}(i = n || (n = {})).SAFE_ENVIRONMENT = "TNS", i.HEALTHY = "HEALTH", i.SIZE = "MEMBER_COUNT", i.NSFW = "BAD_WORDS", i.PROTECTED = "2FA"