"use strict";
a.r(t), a.d(t, {
  staffOnlyGuildSettingsAccess: function() {
    return u
  },
  useGuildAccessRateInsightExperiment: function() {
    return r
  }
});
var n = a("884691"),
  i = a("862205"),
  l = a("697218"),
  s = a("49111");
let d = (0, i.createExperiment)({
  kind: "guild",
  id: "2022-03_guild_access_rate_insight_experiment",
  label: "Guild Access Rate Insight Experiment",
  defaultConfig: {
    showAccessRate: !1
  },
  treatments: [{
    id: 1,
    label: "Show guild access rate in insights",
    config: {
      showAccessRate: !0
    }
  }]
});

function u(e) {
  var t;
  let a = null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff();
  return a && d.getCurrentConfig({
    guildId: e,
    location: "77b4b2_1"
  }).showAccessRate
}

function r(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return n.useEffect(() => {
    !t && null != e && d.trackExposure({
      guildId: e,
      location: "77b4b2_2"
    })
  }, [e, t]), d.useExperiment({
    guildId: null != e ? e : s.EMPTY_STRING_SNOWFLAKE_ID,
    location: "77b4b2_3"
  }, {
    autoTrackExposure: !1,
    disable: t || null == e
  })
}