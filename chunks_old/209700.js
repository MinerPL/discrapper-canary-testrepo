"use strict";
n.r(t), n.d(t, {
  isInGuildMemberModViewExperiment: function() {
    return r
  },
  useGuildMemberModViewExperiment: function() {
    return o
  }
});
var l = n("812204"),
  u = n("862205");
let i = (0, u.createExperiment)({
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
  r = function(e) {
    let {
      autoTrackExposure: t = !1,
      disable: n = !1,
      location: u = l.default.GUILD_MEMBER_MOD_VIEW
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: r
    } = i.getCurrentConfig({
      guildId: e,
      location: u
    }, {
      autoTrackExposure: t,
      disable: n
    });
    return r
  },
  o = function(e) {
    let {
      autoTrackExposure: t = !1,
      disable: n = !1,
      location: u = l.default.GUILD_MEMBER_MOD_VIEW
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: r
    } = i.useExperiment({
      guildId: null != e ? e : void 0,
      location: u
    }, {
      autoTrackExposure: t,
      disable: n
    });
    return r
  }