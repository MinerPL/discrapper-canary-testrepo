"use strict";
t.d(s, {
  pU: function() {
    return r
  }
});
var n = t(818083),
  i = t(981631);
let l = (0, n.B)({
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
  a = (0, n.B)({
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
    enableForGuild: s
  } = a.useExperiment({
    guildId: null != e ? e : i.lds,
    location: "da2d90_1"
  }), {
    enableForUser: t
  } = l.useExperiment({
    location: "da2d90_2"
  }, {
    autoTrackExposure: !1
  });
  return t && s
}