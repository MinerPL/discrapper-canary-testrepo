"use strict";
n.d(t, {
  jy: function() {
    return c
  },
  sw: function() {
    return d
  }
});
var i = n(149765),
  r = n(442837),
  s = n(818083),
  o = n(430824),
  a = n(496675),
  l = n(676770);
let u = (0, s.B)({
    kind: "guild",
    id: "2023-04_guild_alert_mode",
    label: "Guild Alert Mode",
    defaultConfig: {
      showAlertMode: !1,
      alsoShowMemberSafety: !1
    },
    treatments: [{
      id: 1,
      label: "Show alert mode experience",
      config: {
        showAlertMode: !0,
        alsoShowMemberSafety: !1
      }
    }, {
      id: 2,
      label: "Show alert mode experience with member safety",
      config: {
        showAlertMode: !0,
        alsoShowMemberSafety: !0
      }
    }]
  }),
  _ = (0, s.B)({
    kind: "guild",
    id: "2023-08_guild_alert_mode_friend_server",
    label: "Guild Alert Mode (friend servers only)",
    defaultConfig: {
      showAlertMode: !1,
      alsoShowMemberSafety: !1
    },
    treatments: [{
      id: 1,
      label: "Show alert mode experience",
      config: {
        showAlertMode: !0,
        alsoShowMemberSafety: !1
      }
    }, {
      id: 2,
      label: "Show alert mode experience with member safety",
      config: {
        showAlertMode: !0,
        alsoShowMemberSafety: !1
      }
    }]
  });

function d(e) {
  let t = (0, r.e7)([o.Z], () => o.Z.getGuild(e)),
    n = (0, r.e7)([a.Z], () => null != t && i.Db(a.Z.computePermissions(t), l.cv)),
    s = u.useExperiment({
      guildId: e,
      location: "c3fae3_1"
    }, {
      disable: !n,
      autoTrackExposure: !0
    }),
    d = _.useExperiment({
      guildId: e,
      location: "c3fae3_2"
    }, {
      disable: !n,
      autoTrackExposure: !0
    });
  return {
    showAlertMode: s.showAlertMode || d.showAlertMode,
    alsoShowMemberSafety: s.alsoShowMemberSafety || d.alsoShowMemberSafety
  }
}

function c(e) {
  let t = o.Z.getGuild(e),
    n = null != t && i.Db(a.Z.computePermissions(t), l.cv),
    r = u.getCurrentConfig({
      guildId: e,
      location: "c3fae3_3"
    }, {
      disable: !n,
      autoTrackExposure: !0
    }),
    s = _.getCurrentConfig({
      guildId: e,
      location: "c3fae3_4"
    }, {
      disable: !n,
      autoTrackExposure: !0
    });
  return {
    showAlertMode: r.showAlertMode || s.showAlertMode,
    alsoShowMemberSafety: r.alsoShowMemberSafety || s.alsoShowMemberSafety
  }
}