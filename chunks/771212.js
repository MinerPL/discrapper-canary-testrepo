"use strict";
t.d(s, {
  Fv: function() {
    return o
  },
  eA: function() {
    return c
  }
});
var n = t(470079),
  i = t(818083),
  l = t(594174),
  a = t(981631);
let r = (0, i.B)({
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
  var s;
  return (null === (s = l.default.getCurrentUser()) || void 0 === s ? void 0 : s.isStaff()) && r.getCurrentConfig({
    guildId: e,
    location: "77b4b2_1"
  }).showAccessRate
}

function c(e) {
  let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return n.useEffect(() => {
    !s && null != e && r.trackExposure({
      guildId: e,
      location: "77b4b2_2"
    })
  }, [e, s]), r.useExperiment({
    guildId: null != e ? e : a.lds,
    location: "77b4b2_3"
  }, {
    autoTrackExposure: !1,
    disable: s || null == e
  })
}