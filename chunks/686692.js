"use strict";
n.r(t), n.d(t, {
  isInGuildMemberModViewExperiment: function() {
    return u
  },
  useGuildMemberModViewExperiment: function() {
    return l
  }
});
var i = n("100527");
let a = (0, n("818083").createExperiment)({
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
  u = function(e) {
    let {
      autoTrackExposure: t = !1,
      disable: n = !1,
      location: u = i.default.GUILD_MEMBER_MOD_VIEW
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: l
    } = a.getCurrentConfig({
      guildId: e,
      location: u
    }, {
      autoTrackExposure: t,
      disable: n
    });
    return l
  },
  l = function(e) {
    let {
      autoTrackExposure: t = !1,
      disable: n = !1,
      location: u = i.default.GUILD_MEMBER_MOD_VIEW
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: l
    } = a.useExperiment({
      guildId: null != e ? e : void 0,
      location: u
    }, {
      autoTrackExposure: t,
      disable: n
    });
    return l
  }