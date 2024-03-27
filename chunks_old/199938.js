"use strict";
s.r(t), s.d(t, {
  staffOnlyGuildSettingsAccess: function() {
    return o
  },
  useGuildAccessRateInsightExperiment: function() {
    return d
  }
});
var a = s("884691"),
  l = s("862205"),
  n = s("697218"),
  i = s("49111");
let r = (0, l.createExperiment)({
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

function o(e) {
  var t;
  let s = null === (t = n.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff();
  return s && r.getCurrentConfig({
    guildId: e,
    location: "77b4b2_1"
  }).showAccessRate
}

function d(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return a.useEffect(() => {
    !t && null != e && r.trackExposure({
      guildId: e,
      location: "77b4b2_2"
    })
  }, [e, t]), r.useExperiment({
    guildId: null != e ? e : i.EMPTY_STRING_SNOWFLAKE_ID,
    location: "77b4b2_3"
  }, {
    autoTrackExposure: !1,
    disable: t || null == e
  })
}