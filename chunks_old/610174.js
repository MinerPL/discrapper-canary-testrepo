"use strict";
n.r(t), n.d(t, {
  useGuildAlertModeEnabled: function() {
    return c
  },
  getGuildAlertModeEnabled: function() {
    return f
  }
});
var i = n("316693"),
  l = n("446674"),
  a = n("862205"),
  u = n("305961"),
  r = n("957255"),
  d = n("421127");
let s = (0, a.createExperiment)({
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
  o = (0, a.createExperiment)({
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

function c(e) {
  let t = (0, l.useStateFromStores)([u.default], () => u.default.getGuild(e)),
    n = (0, l.useStateFromStores)([r.default], () => null != t && i.hasAny(r.default.computePermissions(t), d.IncidentAlertModeratorPermissions)),
    a = s.useExperiment({
      guildId: e,
      location: "c3fae3_1"
    }, {
      disable: !n,
      autoTrackExposure: !0
    }),
    c = o.useExperiment({
      guildId: e,
      location: "c3fae3_2"
    }, {
      disable: !n,
      autoTrackExposure: !0
    });
  return {
    showAlertMode: a.showAlertMode || c.showAlertMode,
    alsoShowMemberSafety: a.alsoShowMemberSafety || c.alsoShowMemberSafety
  }
}

function f(e) {
  let t = u.default.getGuild(e),
    n = null != t && i.hasAny(r.default.computePermissions(t), d.IncidentAlertModeratorPermissions),
    l = s.getCurrentConfig({
      guildId: e,
      location: "c3fae3_3"
    }, {
      disable: !n,
      autoTrackExposure: !0
    }),
    a = o.getCurrentConfig({
      guildId: e,
      location: "c3fae3_4"
    }, {
      disable: !n,
      autoTrackExposure: !0
    });
  return {
    showAlertMode: l.showAlertMode || a.showAlertMode,
    alsoShowMemberSafety: l.alsoShowMemberSafety || a.alsoShowMemberSafety
  }
}