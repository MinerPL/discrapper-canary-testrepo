"use strict";
n.d(t, {
  NX: function() {
    return E
  },
  WS: function() {
    return c
  },
  l5: function() {
    return d
  },
  qB: function() {
    return I
  },
  vp: function() {
    return T
  }
});
var i = n(106351),
  r = n(442837),
  s = n(818083),
  o = n(592125),
  a = n(496675),
  l = n(944486),
  u = n(231338);
let _ = (0, s.B)({
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

function d(e) {
  var t;
  if (null == e || void 0 === e) return !1;
  let n = o.Z.getChannel(e.parent_id);
  if (null != n && (null == n ? void 0 : n.type) !== i.d.GUILD_CATEGORY) return !1;
  return t = e.type, [i.d.GUILD_TEXT, i.d.GROUP_DM, i.d.DM].includes(t)
}

function c(e, t, n) {
  if (null == e) return !1;
  let i = d(e),
    r = a.Z.can(u.Pl.USE_EMBEDDED_ACTIVITIES, e),
    s = r && a.Z.can(u.Pl.SEND_MESSAGES | u.Pl.USE_APPLICATION_COMMANDS, e);
  if ((null == e ? void 0 : e.guild_id) != null) return t ? s && i : r && i;
  return t ? _.getCurrentConfig({
    location: n
  }, {
    autoTrackExposure: !0
  }).activitiesInTextEnabled && i : i
}

function E(e, t, n) {
  let {
    isActivitiesInTextEnabledForChannelType: i,
    channelGuildId: s,
    hasPermission: l
  } = (0, r.cj)([o.Z, a.Z], () => {
    let n = o.Z.getChannel(e),
      i = a.Z.can(u.Pl.USE_EMBEDDED_ACTIVITIES, n),
      r = i && a.Z.can(u.Pl.SEND_MESSAGES | u.Pl.USE_APPLICATION_COMMANDS, n);
    return {
      isActivitiesInTextEnabledForChannelType: d(n),
      channelGuildId: null == n ? void 0 : n.guild_id,
      hasPermission: t ? r : i
    }
  }), c = null != s, E = _.useExperiment({
    location: n
  }, {
    autoTrackExposure: !c,
    disable: c
  });
  return c ? l && i : t ? E.activitiesInTextEnabled && i : i
}

function I(e, t) {
  let n = (0, r.e7)([o.Z], () => o.Z.getChannel(e)),
    i = (0, r.e7)([a.Z], () => a.Z.can(u.Pl.USE_EMBEDDED_ACTIVITIES, n)),
    s = d(n),
    l = null == n ? void 0 : n.guild_id,
    c = null != l,
    E = _.useExperiment({
      location: t
    }, {
      autoTrackExposure: !c,
      disable: c
    });
  return c ? i && s : E.showInOmniButtonMenu && s
}

function T(e, t) {
  let {
    hasGuildId: n,
    isGuildVoiceChannel: s,
    isInPrivateVoiceCall: a
  } = (0, r.cj)([o.Z, l.Z], () => {
    let t = o.Z.getChannel(e),
      n = (null == t ? void 0 : t.guild_id) !== void 0 && (null == t ? void 0 : t.guild_id) !== null,
      r = (null == t ? void 0 : t.type) === i.d.GUILD_VOICE;
    return {
      hasGuildId: n,
      isGuildVoiceChannel: r,
      isInPrivateVoiceCall: (null == t ? void 0 : t.isPrivate()) && l.Z.getVoiceChannelId() === e
    }
  }), u = _.useExperiment({
    location: t
  }, {
    autoTrackExposure: !n,
    disable: n
  }), d = a && u.activitiesInTextEnabled;
  return s || d
}