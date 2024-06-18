"use strict";
n.d(t, {
  Om: function() {
    return o
  },
  Qf: function() {
    return s
  }
});
var i = n(100527);
let r = (0, n(818083).B)({
    kind: "guild",
    id: "2023-08_guild_member_mod_view",
    label: "Guild Member Mod View",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Guild Member Mod View",
      config: {
        enabled: !0
      }
    }]
  }),
  s = function(e) {
    let {
      autoTrackExposure: t = !1,
      disable: n = !1,
      location: s = i.Z.GUILD_MEMBER_MOD_VIEW
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: o
    } = r.getCurrentConfig({
      guildId: e,
      location: s
    }, {
      autoTrackExposure: t,
      disable: n
    });
    return o
  },
  o = function(e) {
    let {
      autoTrackExposure: t = !1,
      disable: n = !1,
      location: s = i.Z.GUILD_MEMBER_MOD_VIEW
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: o
    } = r.useExperiment({
      guildId: null != e ? e : void 0,
      location: s
    }, {
      autoTrackExposure: t,
      disable: n
    });
    return o
  }