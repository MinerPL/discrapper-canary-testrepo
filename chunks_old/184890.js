"use strict";
s.r(t), s.d(t, {
  useGuildAuditLogV2Enabled: function() {
    return r
  }
});
var a = s("862205"),
  l = s("49111");
let n = (0, a.createExperiment)({
    kind: "user",
    id: "2022-02_guild_audit_log_user",
    label: "Guild Audit Log - User Feature Flag",
    defaultConfig: {
      enableForUser: !1
    },
    treatments: [{
      id: 1,
      label: "Show Guild Audit Log 2.0 for user",
      config: {
        enableForUser: !0
      }
    }]
  }),
  i = (0, a.createExperiment)({
    kind: "guild",
    id: "2022-02_guild_audit_log_guild",
    label: "Guild Audit Log - Guild Feature Flag",
    defaultConfig: {
      enableForGuild: !1
    },
    treatments: [{
      id: 1,
      label: "Show Guild Audit Log 2.0 for guild",
      config: {
        enableForGuild: !0
      }
    }]
  });

function r(e) {
  let {
    enableForGuild: t
  } = i.useExperiment({
    guildId: null != e ? e : l.EMPTY_STRING_SNOWFLAKE_ID,
    location: "da2d90_1"
  }), {
    enableForUser: s
  } = n.useExperiment({
    location: "da2d90_2"
  }, {
    autoTrackExposure: !1
  });
  return s && t
}