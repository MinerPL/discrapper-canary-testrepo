"use strict";
n.r(t), n.d(t, {
  isActivitiesInTextEnabled: function() {
    return c
  },
  isActivityInTextSupportedForChannel: function() {
    return _
  },
  useIsActivitiesInTextEnabled: function() {
    return E
  },
  useIsActivitiesInTextShelfPosterEnabled: function() {
    return T
  },
  useShowActivitiesInOmniButtonMenu: function() {
    return I
  }
});
var i = n("106351"),
  r = n("442837"),
  a = n("818083"),
  s = n("592125"),
  o = n("496675"),
  l = n("944486"),
  u = n("231338");
let d = (0, a.createExperiment)({
  kind: "user",
  id: "2023-08_activities_in_text",
  label: "Activities in Text User",
  defaultConfig: {
    entryPointEnabled: !1,
    activitiesInTextEnabled: !1,
    showInOmniButtonMenu: !1,
    showNewMobileLeaveUI: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Activities in Text, DM, and GDM channels",
    config: {
      entryPointEnabled: !0,
      activitiesInTextEnabled: !0,
      showInOmniButtonMenu: !0,
      showNewMobileLeaveUI: !1
    }
  }, {
    id: 2,
    label: "Enable Activities in Text, DM, and GDM channels with new mobile leave UI",
    config: {
      entryPointEnabled: !0,
      activitiesInTextEnabled: !0,
      showInOmniButtonMenu: !0,
      showNewMobileLeaveUI: !0
    }
  }]
});

function _(e) {
  var t;
  if (null == e || void 0 === e) return !1;
  let n = s.default.getChannel(e.parent_id);
  if (null != n && (null == n ? void 0 : n.type) !== i.ChannelTypes.GUILD_CATEGORY) return !1;
  return t = e.type, [i.ChannelTypes.GUILD_TEXT, i.ChannelTypes.GROUP_DM, i.ChannelTypes.DM].includes(t)
}

function c(e, t, n) {
  if (null == e) return !1;
  let i = _(e),
    r = o.default.can(u.Permissions.USE_EMBEDDED_ACTIVITIES, e),
    a = r && o.default.can(u.Permissions.SEND_MESSAGES | u.Permissions.USE_APPLICATION_COMMANDS, e);
  if ((null == e ? void 0 : e.guild_id) != null) return t ? a && i : r && i;
  return t ? d.getCurrentConfig({
    location: n
  }, {
    autoTrackExposure: !0
  }).activitiesInTextEnabled && i : i
}

function E(e, t, n) {
  let {
    isActivitiesInTextEnabledForChannelType: i,
    channelGuildId: a,
    hasPermission: l
  } = (0, r.useStateFromStoresObject)([s.default, o.default], () => {
    let n = s.default.getChannel(e),
      i = o.default.can(u.Permissions.USE_EMBEDDED_ACTIVITIES, n),
      r = i && o.default.can(u.Permissions.SEND_MESSAGES | u.Permissions.USE_APPLICATION_COMMANDS, n);
    return {
      isActivitiesInTextEnabledForChannelType: _(n),
      channelGuildId: null == n ? void 0 : n.guild_id,
      hasPermission: t ? r : i
    }
  }), c = null != a, E = d.useExperiment({
    location: n
  }, {
    autoTrackExposure: !c,
    disable: c
  });
  return c ? l && i : t ? E.activitiesInTextEnabled && i : i
}

function I(e, t) {
  let n = (0, r.useStateFromStores)([s.default], () => s.default.getChannel(e)),
    i = (0, r.useStateFromStores)([o.default], () => o.default.can(u.Permissions.USE_EMBEDDED_ACTIVITIES, n)),
    a = _(n),
    l = null == n ? void 0 : n.guild_id,
    c = null != l,
    E = d.useExperiment({
      location: t
    }, {
      autoTrackExposure: !c,
      disable: c
    });
  return c ? i && a : E.showInOmniButtonMenu && a
}

function T(e, t) {
  let {
    hasGuildId: n,
    isGuildVoiceChannel: a,
    isInPrivateVoiceCall: o
  } = (0, r.useStateFromStoresObject)([s.default, l.default], () => {
    let t = s.default.getChannel(e),
      n = (null == t ? void 0 : t.guild_id) !== void 0 && (null == t ? void 0 : t.guild_id) !== null,
      r = (null == t ? void 0 : t.type) === i.ChannelTypes.GUILD_VOICE;
    return {
      hasGuildId: n,
      isGuildVoiceChannel: r,
      isInPrivateVoiceCall: (null == t ? void 0 : t.isPrivate()) && l.default.getVoiceChannelId() === e
    }
  }), u = d.useExperiment({
    location: t
  }, {
    autoTrackExposure: !n,
    disable: n
  }), _ = o && u.activitiesInTextEnabled;
  return a || _
}