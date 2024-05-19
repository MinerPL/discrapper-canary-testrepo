"use strict";
n.r(t), n.d(t, {
  useClanGeneralExperiment: function() {
    return p
  },
  useClanPilotExperiment: function() {
    return m
  },
  useClanPrePilotApplicationExperiment: function() {
    return c
  },
  useClanPrepilotExperimentDefaultGameId: function() {
    return S
  },
  useClanPrepilotExperimentForAllGuilds: function() {
    return T
  },
  useClanPrepilotExperimentForGuild: function() {
    return f
  }
}), n("653041");
var i = n("442837"),
  r = n("818083"),
  a = n("430824"),
  s = n("496675"),
  o = n("308083"),
  l = n("981631");
let u = (0, r.createExperiment)({
    kind: "user",
    id: "2024-05_clans_valorant_prepilot",
    label: "Clans Valorant Prepilot",
    defaultConfig: {
      enableClanCreation: !1,
      defaultGameId: null
    },
    treatments: [{
      id: 1,
      label: "Enable creation of clan guilds - Valorant",
      config: {
        enableClanCreation: !0,
        defaultGameId: o.VALORANT_ID
      }
    }]
  }),
  d = (0, r.createExperiment)({
    kind: "user",
    id: "2024-05_clans_genshin_prepilot",
    label: "Clans Genshin Prepilot",
    defaultConfig: {
      enableClanCreation: !1,
      defaultGameId: null
    },
    treatments: [{
      id: 1,
      label: "Enable creation of clan guilds - Genshin",
      config: {
        enableClanCreation: !0,
        defaultGameId: o.GENSHIN_ID
      }
    }]
  }),
  _ = (0, r.createExperiment)({
    kind: "user",
    id: "2024-05_rapidash_prepilot_applications",
    label: "Rapidash Prepilot Application Gate",
    defaultConfig: {
      enableApplication: !1
    },
    treatments: [{
      id: 1,
      label: "Enable application of guilds",
      config: {
        enableApplication: !0
      }
    }]
  });

function c(e) {
  return _.useExperiment({
    location: e
  }, {
    autoTrackExposure: !1
  })
}

function E(e) {
  var t, n;
  let {
    valorantConfig: i,
    genshinConfig: r
  } = e;
  return null !== (n = null !== (t = null == r ? void 0 : r.defaultGameId) && void 0 !== t ? t : null == i ? void 0 : i.defaultGameId) && void 0 !== n ? n : null
}

function I(e) {
  let {
    guilds: t,
    valorantConfig: n,
    genshinConfig: r,
    includeConverted: a
  } = e, o = (0, i.useStateFromStoresArray)([s.default], () => t.filter(e => s.default.can(l.Permissions.ADMINISTRATOR, e))), u = o.filter(e => (function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && e.hasFeature(l.GuildFeatures.CLAN_PILOT_GENSHIN) && (t || !e.hasFeature(l.GuildFeatures.CLAN))
  })(e, a)), d = o.filter(e => (function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && e.hasFeature(l.GuildFeatures.CLAN_PILOT_VALORANT) && (t || !e.hasFeature(l.GuildFeatures.CLAN))
  })(e, a)), _ = u.length > 0 && r.enableClanCreation, c = d.length > 0 && n.enableClanCreation, I = [];
  return _ && u.forEach(e => I.push(e)), c && d.forEach(e => I.push(e)), {
    guilds: I,
    enableClanCreation: _ || c,
    defaultGameId: E({
      genshinConfig: _ ? r : void 0,
      valorantConfig: c ? n : void 0
    })
  }
}

function T(e) {
  let {
    location: t,
    includeConverted: n,
    autoTrackExposure: r = !0
  } = e, s = (0, i.useStateFromStoresArray)([a.default], () => Object.values(a.default.getGuilds())), o = u.useExperiment({
    location: t
  }, {
    autoTrackExposure: r
  });
  return I({
    guilds: s,
    valorantConfig: o,
    genshinConfig: d.useExperiment({
      location: t
    }, {
      autoTrackExposure: r
    }),
    includeConverted: n
  })
}

function f(e) {
  let {
    guild: t,
    location: n,
    includeConverted: i,
    autoTrackExposure: r = !0
  } = e, a = u.useExperiment({
    location: n
  }, {
    autoTrackExposure: r
  });
  return I({
    guilds: [t],
    valorantConfig: a,
    genshinConfig: d.useExperiment({
      location: n
    }, {
      autoTrackExposure: r
    }),
    includeConverted: i
  })
}

function S(e) {
  let {
    location: t,
    autoTrackExposure: n = !0
  } = e, i = u.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return E({
    valorantConfig: i,
    genshinConfig: d.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    })
  })
}
let h = (0, r.createExperiment)({
    kind: "user",
    id: "2024-05_clans_valorant_pilot",
    label: "Clans Valorant Pilot",
    defaultConfig: {
      clanDiscoveryEnabled: !1,
      defaultGameId: null
    },
    treatments: [{
      id: 1,
      label: "Show clan discovery (Valorant)",
      config: {
        clanDiscoveryEnabled: !0,
        defaultGameId: o.VALORANT_ID
      }
    }]
  }),
  A = (0, r.createExperiment)({
    kind: "user",
    id: "2024-05_clans_genshin_pilot",
    label: "Clans Genshin Pilot",
    defaultConfig: {
      clanDiscoveryEnabled: !1,
      defaultGameId: null
    },
    treatments: [{
      id: 1,
      label: "Show clan discovery (Genshin Impact)",
      config: {
        clanDiscoveryEnabled: !0,
        defaultGameId: o.GENSHIN_ID
      }
    }]
  });

function m(e) {
  var t, n;
  let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    r = h.useExperiment({
      location: e
    }, {
      autoTrackExposure: i
    }),
    a = A.useExperiment({
      location: e
    }, {
      autoTrackExposure: i
    });
  return {
    clanDiscoveryEnabled: r.clanDiscoveryEnabled || a.clanDiscoveryEnabled,
    defaultGameId: null !== (n = null !== (t = r.defaultGameId) && void 0 !== t ? t : a.defaultGameId) && void 0 !== n ? n : null
  }
}
let N = (0, r.createExperiment)({
  kind: "user",
  id: "2024-05_clans_general",
  label: "Clans General",
  defaultConfig: {
    clanTagsVisible: !1
  },
  treatments: [{
    id: 1,
    label: "Show clan tags",
    config: {
      clanTagsVisible: !0
    }
  }]
});

function p(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return N.useExperiment({
    location: e
  }, {
    autoTrackExposure: t
  })
}