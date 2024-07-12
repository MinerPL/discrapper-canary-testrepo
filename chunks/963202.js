n.d(t, {
  An: function() {
return m;
  },
  C3: function() {
return h;
  },
  Fg: function() {
return _;
  },
  It: function() {
return A;
  },
  St: function() {
return p;
  },
  nk: function() {
return g;
  }
}), n(653041);
var r = n(442837),
  i = n(818083),
  a = n(430824),
  o = n(496675),
  s = n(308083),
  l = n(981631);
let u = (0, i.B)({
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
    defaultGameId: s.nJ
  }
}]
  }),
  c = (0, i.B)({
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
    defaultGameId: s.xn
  }
}]
  }),
  d = (0, i.B)({
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

function _(e) {
  return d.useExperiment({
location: e
  }, {
autoTrackExposure: !1
  });
}

function E(e) {
  var t, n;
  let {
valorantConfig: r,
genshinConfig: i
  } = e;
  return null !== (n = null !== (t = null == i ? void 0 : i.defaultGameId) && void 0 !== t ? t : null == r ? void 0 : r.defaultGameId) && void 0 !== n ? n : null;
}

function f(e) {
  let {
guilds: t,
valorantConfig: n,
genshinConfig: i,
includeConverted: a
  } = e, s = (0, r.Wu)([o.Z], () => t.filter(e => o.Z.can(l.Plq.ADMINISTRATOR, e))), u = s.filter(e => function(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
return null != e && e.hasFeature(l.oNc.CLAN_PILOT_GENSHIN) && (t || !e.hasFeature(l.oNc.CLAN));
  }(e, a)), c = s.filter(e => function(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
return null != e && e.hasFeature(l.oNc.CLAN_PILOT_VALORANT) && (t || !e.hasFeature(l.oNc.CLAN));
  }(e, a)), d = u.length > 0 && i.enableClanCreation, _ = c.length > 0 && n.enableClanCreation, f = [];
  return d && u.forEach(e => f.push(e)), _ && c.forEach(e => f.push(e)), {
guilds: f,
enableClanCreation: d || _,
defaultGameId: E({
  genshinConfig: d ? i : void 0,
  valorantConfig: _ ? n : void 0
})
  };
}

function h(e) {
  let {
location: t,
includeConverted: n,
autoTrackExposure: i = !0
  } = e, o = (0, r.Wu)([a.Z], () => Object.values(a.Z.getGuilds())), s = u.useExperiment({
location: t
  }, {
autoTrackExposure: i
  });
  return f({
guilds: o,
valorantConfig: s,
genshinConfig: c.useExperiment({
  location: t
}, {
  autoTrackExposure: i
}),
includeConverted: n
  });
}

function p(e) {
  let {
guild: t,
location: n,
includeConverted: r,
autoTrackExposure: i = !0
  } = e, a = u.useExperiment({
location: n
  }, {
autoTrackExposure: i
  });
  return f({
guilds: [t],
valorantConfig: a,
genshinConfig: c.useExperiment({
  location: n
}, {
  autoTrackExposure: i
}),
includeConverted: r
  });
}

function m(e) {
  let {
location: t,
autoTrackExposure: n = !0
  } = e, r = u.useExperiment({
location: t
  }, {
autoTrackExposure: n
  });
  return E({
valorantConfig: r,
genshinConfig: c.useExperiment({
  location: t
}, {
  autoTrackExposure: n
})
  });
}
let I = (0, i.B)({
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
    defaultGameId: s.nJ
  }
}]
  }),
  T = (0, i.B)({
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
    defaultGameId: s.xn
  }
}]
  });

function g(e) {
  var t, n;
  let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
i = I.useExperiment({
  location: e
}, {
  autoTrackExposure: r
}),
a = T.useExperiment({
  location: e
}, {
  autoTrackExposure: r
});
  return {
clanDiscoveryEnabled: i.clanDiscoveryEnabled || a.clanDiscoveryEnabled,
defaultGameId: null !== (n = null !== (t = i.defaultGameId) && void 0 !== t ? t : a.defaultGameId) && void 0 !== n ? n : null
  };
}
let S = (0, i.B)({
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

function A(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return S.useExperiment({
location: e
  }, {
autoTrackExposure: t
  });
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