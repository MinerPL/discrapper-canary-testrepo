n.d(t, {
  An: function() {
return g;
  },
  C3: function() {
return I;
  },
  Fg: function() {
return h;
  },
  It: function() {
return O;
  },
  St: function() {
return T;
  },
  iN: function() {
return d;
  },
  nk: function() {
return N;
  }
}), n(653041);
var r = n(442837),
  i = n(818083),
  a = n(430824),
  s = n(496675),
  o = n(308083),
  l = n(981631);
let u = (0, i.B)({
kind: 'guild',
id: '2024-07_rapidash_m3_guilds',
label: 'Rapidash M3 Guilds',
defaultConfig: {
  enableClanCreation: !1,
  requireTargeting: !1
},
treatments: [{
    id: 1,
    label: 'Targeted guilds',
    config: {
      enableClanCreation: !0,
      requireTargeting: !0
    }
  },
  {
    id: 2,
    label: 'Untargeted guilds',
    config: {
      enableClanCreation: !0,
      requireTargeting: !1
    }
  }
]
  }),
  c = (0, i.B)({
kind: 'user',
id: '2024-07_rapidash_m3_joiners',
label: 'Rapidash M3 Users',
defaultConfig: {
  enableM3Experience: !1
},
treatments: [{
  id: 1,
  label: 'Targeted users',
  config: {
    enableM3Experience: !0
  }
}]
  });

function d(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return c.useExperiment({
location: e
  }, {
autoTrackExposure: t
  }).enableM3Experience;
}
let _ = (0, i.B)({
kind: 'user',
id: '2024-05_clans_valorant_prepilot',
label: 'Clans Valorant Prepilot',
defaultConfig: {
  enableClanCreation: !1,
  defaultGameId: null
},
treatments: [{
  id: 1,
  label: 'Enable creation of clan guilds - Valorant',
  config: {
    enableClanCreation: !0,
    defaultGameId: o.nJ
  }
}]
  }),
  E = (0, i.B)({
kind: 'user',
id: '2024-05_clans_genshin_prepilot',
label: 'Clans Genshin Prepilot',
defaultConfig: {
  enableClanCreation: !1,
  defaultGameId: null
},
treatments: [{
  id: 1,
  label: 'Enable creation of clan guilds - Genshin',
  config: {
    enableClanCreation: !0,
    defaultGameId: o.xn
  }
}]
  }),
  f = (0, i.B)({
kind: 'user',
id: '2024-05_rapidash_prepilot_applications',
label: 'Rapidash Prepilot Application Gate',
defaultConfig: {
  enableApplication: !1
},
treatments: [{
  id: 1,
  label: 'Enable application of guilds',
  config: {
    enableApplication: !0
  }
}]
  });

function h(e) {
  return f.useExperiment({
location: e
  }, {
autoTrackExposure: !1
  });
}

function p(e) {
  var t, n;
  let {
valorantConfig: r,
genshinConfig: i
  } = e;
  return null !== (n = null !== (t = null == i ? void 0 : i.defaultGameId) && void 0 !== t ? t : null == r ? void 0 : r.defaultGameId) && void 0 !== n ? n : null;
}

function m(e) {
  let {
guilds: t,
valorantConfig: n,
genshinConfig: i,
m3GuildConfig: a,
includeConverted: o
  } = e, u = (0, r.Wu)([s.Z], () => t.filter(e => s.Z.can(l.Plq.ADMINISTRATOR, e))), c = u.filter(e => function(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
return null != e && e.hasFeature(l.oNc.CLAN_PILOT_GENSHIN) && (t || !e.hasFeature(l.oNc.CLAN));
  }(e, o)), d = u.filter(e => function(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
return null != e && e.hasFeature(l.oNc.CLAN_PILOT_VALORANT) && (t || !e.hasFeature(l.oNc.CLAN));
  }(e, o)), _ = a.requireTargeting ? u.filter(e => function(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
return null != e && e.hasFeature(l.oNc.RAPIDASH_TEST) && (t || !e.hasFeature(l.oNc.CLAN));
  }(e, o)) : u, E = c.length > 0 && i.enableClanCreation, f = d.length > 0 && n.enableClanCreation, h = _.length > 0 && a.enableClanCreation, m = [];
  return E && c.forEach(e => m.push(e)), f && d.forEach(e => m.push(e)), h && _.forEach(e => m.push(e)), {
guilds: m,
enableClanCreation: E || f || h,
defaultGameId: p({
  genshinConfig: E ? i : void 0,
  valorantConfig: f ? n : void 0
})
  };
}

function I(e) {
  let {
location: t,
includeConverted: n,
autoTrackExposure: i = !0
  } = e, s = (0, r.Wu)([a.Z], () => Object.values(a.Z.getGuilds())), o = _.useExperiment({
location: t
  }, {
autoTrackExposure: i
  }), l = E.useExperiment({
location: t
  }, {
autoTrackExposure: i
  });
  return m({
guilds: s,
valorantConfig: o,
genshinConfig: l,
m3GuildConfig: u.useExperiment({
  location: t
}, {
  autoTrackExposure: i
}),
includeConverted: n
  });
}

function T(e) {
  let {
guild: t,
location: n,
includeConverted: r,
autoTrackExposure: i = !0
  } = e, a = _.useExperiment({
location: n
  }, {
autoTrackExposure: i
  }), s = E.useExperiment({
location: n
  }, {
autoTrackExposure: i
  });
  return m({
guilds: [t],
valorantConfig: a,
genshinConfig: s,
m3GuildConfig: u.useExperiment({
  location: n
}, {
  autoTrackExposure: i
}),
includeConverted: r
  });
}

function g(e) {
  let {
location: t,
autoTrackExposure: n = !0
  } = e, r = _.useExperiment({
location: t
  }, {
autoTrackExposure: n
  });
  return p({
valorantConfig: r,
genshinConfig: E.useExperiment({
  location: t
}, {
  autoTrackExposure: n
})
  });
}
let S = (0, i.B)({
kind: 'user',
id: '2024-05_clans_valorant_pilot',
label: 'Clans Valorant Pilot',
defaultConfig: {
  clanDiscoveryEnabled: !1,
  defaultGameId: null
},
treatments: [{
  id: 1,
  label: 'Show clan discovery (Valorant)',
  config: {
    clanDiscoveryEnabled: !0,
    defaultGameId: o.nJ
  }
}]
  }),
  A = (0, i.B)({
kind: 'user',
id: '2024-05_clans_genshin_pilot',
label: 'Clans Genshin Pilot',
defaultConfig: {
  clanDiscoveryEnabled: !1,
  defaultGameId: null
},
treatments: [{
  id: 1,
  label: 'Show clan discovery (Genshin Impact)',
  config: {
    clanDiscoveryEnabled: !0,
    defaultGameId: o.xn
  }
}]
  });

function N(e) {
  var t, n;
  let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
i = S.useExperiment({
  location: e
}, {
  autoTrackExposure: r
}),
a = A.useExperiment({
  location: e
}, {
  autoTrackExposure: r
}),
s = d(e, r);
  return {
clanDiscoveryEnabled: i.clanDiscoveryEnabled || a.clanDiscoveryEnabled || s,
defaultGameId: null !== (n = null !== (t = i.defaultGameId) && void 0 !== t ? t : a.defaultGameId) && void 0 !== n ? n : null
  };
}
let v = (0, i.B)({
  kind: 'user',
  id: '2024-05_clans_general',
  label: 'Clans General',
  defaultConfig: {
clanTagsVisible: !1
  },
  treatments: [{
id: 1,
label: 'Show clan tags',
config: {
  clanTagsVisible: !0
}
  }]
});

function O(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
n = d(e, t),
r = v.useExperiment({
  location: e
}, {
  autoTrackExposure: t
});
  return n ? {
clanTagsVisible: !0
  } : r;
}
(0, i.B)({
  kind: 'user',
  id: '2024-06_clans_mobile_tags',
  label: 'Clans - Mobile',
  defaultConfig: {
clanTagsVisible: !1
  },
  treatments: [{
id: 1,
label: 'Show tags on mobile',
config: {
  clanTagsVisible: !0
}
  }]
});