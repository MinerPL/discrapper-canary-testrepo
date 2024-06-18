"use strict";
n.d(t, {
  T: function() {
    return l
  }
});
var i = n(259443),
  r = n(818083),
  s = n(231338);
let o = (0, r.B)({
    id: "2024-04_quests_logging",
    kind: "user",
    label: "Quests Logging",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 0,
      label: "Control",
      config: {
        enabled: !1
      }
    }, {
      id: 1,
      label: "Quest logging enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  a = e => {
    let {
      location: t,
      autoTrackExposure: n = !1
    } = e;
    return o.getCurrentConfig({
      location: t
    }, {
      autoTrackExposure: n
    }).enabled
  };

function l(e) {
  let {
    quest: t,
    location: n
  } = e, r = a({
    location: n
  }), o = null == t ? void 0 : t.config.messages.questName, l = "QuestLogger ".concat(n).concat(null != o ? " (".concat(o, ")") : ""), u = new i.Y(l);
  return {
    log: r ? u.log : s.dG,
    warn: r ? u.warn : s.dG,
    error: r ? u.error : s.dG,
    info: r ? u.info : s.dG,
    verbose: r ? u.verbose : s.dG,
    trace: r ? u.trace : s.dG
  }
}