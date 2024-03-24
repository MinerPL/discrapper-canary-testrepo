"use strict";
t.r(n), t.d(n, {
  isInGuildMemberModViewExperiment: function() {
    return r
  },
  useGuildMemberModViewExperiment: function() {
    return a
  }
});
var i = t("812204"),
  l = t("862205");
let u = (0, l.createExperiment)({
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
      autoTrackExposure: n = !1,
      disable: t = !1,
      location: l = i.default.GUILD_MEMBER_MOD_VIEW
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: r
    } = u.getCurrentConfig({
      guildId: e,
      location: l
    }, {
      autoTrackExposure: n,
      disable: t
    });
    return r
  },
  a = function(e) {
    let {
      autoTrackExposure: n = !1,
      disable: t = !1,
      location: l = i.default.GUILD_MEMBER_MOD_VIEW
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: r
    } = u.useExperiment({
      guildId: null != e ? e : void 0,
      location: l
    }, {
      autoTrackExposure: n,
      disable: t
    });
    return r
  }