"use strict";
n.r(t), n.d(t, {
  isActivityInTextSupportedForChannelType: function() {
    return u
  },
  isActivitiesInTextEnabled: function() {
    return d
  },
  useIsActivitiesInTextEnabled: function() {
    return c
  },
  useIsActivitiesInTextActionBarEnabled: function() {
    return f
  }
});
var i = n("298386"),
  s = n("446674"),
  r = n("862205"),
  a = n("42203");
let o = (0, r.createExperiment)({
    kind: "user",
    id: "2023-08_activities_in_text",
    label: "Activities in Text User",
    defaultConfig: {
      enabled: !1,
      actionBarEnabled: !1
    },
    treatments: [{
      id: 1,
      label: "enable Activities in text channels",
      config: {
        enabled: !0,
        actionBarEnabled: !1
      }
    }, {
      id: 2,
      label: "enable Activities in text channels with action bar",
      config: {
        enabled: !0,
        actionBarEnabled: !0
      }
    }]
  }),
  l = (0, r.createExperiment)({
    kind: "guild",
    id: "2023-11_activities_in_text_guild",
    label: "Activities in Text Guild",
    defaultConfig: {
      enabled: !1,
      actionBarEnabled: !1
    },
    treatments: [{
      id: 1,
      label: "enable Activities in text channels",
      config: {
        enabled: !0,
        actionBarEnabled: !1
      }
    }, {
      id: 2,
      label: "enable Activities in text channels with action bar",
      config: {
        enabled: !0,
        actionBarEnabled: !0
      }
    }]
  });

function u(e) {
  return [i.ChannelTypes.GUILD_TEXT, i.ChannelTypes.GROUP_DM, i.ChannelTypes.DM].includes(e)
}

function d(e, t) {
  if (null == e) return !1;
  let n = u(e.type);
  return (null == e ? void 0 : e.guild_id) != null ? l.getCurrentConfig({
    guildId: e.guild_id,
    location: t
  }, {
    autoTrackExposure: !1
  }).enabled && n : o.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: !1
  }).enabled && n
}

function c(e, t) {
  var n;
  let i = (0, s.useStateFromStores)([a.default], () => a.default.getChannel(e));
  let r = null != (n = i) && u(n.type),
    d = (null == i ? void 0 : i.guild_id) != null ? l : o,
    c = d.useExperiment({
      guildId: null == i ? void 0 : i.guild_id,
      location: t
    }, {
      autoTrackExposure: !1
    });
  return c.enabled && r
}

function f(e, t) {
  let n = (0, s.useStateFromStores)([a.default], () => a.default.getChannel(e)),
    i = (null == n ? void 0 : n.guild_id) != null ? l : o,
    r = i.useExperiment({
      guildId: null == n ? void 0 : n.guild_id,
      location: t
    }, {
      autoTrackExposure: !1
    });
  return r.actionBarEnabled
}