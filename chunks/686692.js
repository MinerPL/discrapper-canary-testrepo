n.d(t, {
  Om: function() {
return s;
  },
  Qf: function() {
return a;
  }
});
var r = n(100527);
let i = (0, n(818083).B)({
kind: 'guild',
id: '2023-08_guild_member_mod_view',
label: 'Guild Member Mod View',
defaultConfig: {
  enabled: !1
},
treatments: [{
  id: 1,
  label: 'Guild Member Mod View',
  config: {
    enabled: !0
  }
}]
  }),
  a = function(e) {
let {
  autoTrackExposure: t = !1,
  disable: n = !1,
  location: a = r.Z.GUILD_MEMBER_MOD_VIEW
} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
  enabled: s
} = i.getCurrentConfig({
  guildId: e,
  location: a
}, {
  autoTrackExposure: t,
  disable: n
});
return s;
  },
  s = function(e) {
let {
  autoTrackExposure: t = !1,
  disable: n = !1,
  location: a = r.Z.GUILD_MEMBER_MOD_VIEW
} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
  enabled: s
} = i.useExperiment({
  guildId: null != e ? e : void 0,
  location: a
}, {
  autoTrackExposure: t,
  disable: n
});
return s;
  };