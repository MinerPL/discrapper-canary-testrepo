"use strict";
a.r(t), a.d(t, {
  handleReportRaid: function() {
    return D
  },
  handleResolveRaid: function() {
    return h
  },
  setGuildIncidentActions: function() {
    return E
  },
  setGuildRaidAlerts: function() {
    return I
  },
  trackReportRaidViewed: function() {
    return _
  }
}), a("47120");
var l = a("913527"),
  n = a.n(l),
  s = a("544891"),
  d = a("367907"),
  i = a("434404"),
  r = a("430824"),
  u = a("626135"),
  o = a("154285"),
  c = a("981631");

function _(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  0 !== t.length && u.default.track(c.AnalyticEvents.GUILD_RAID_REPORTED, {
    ...(0, d.collectGuildAnalyticsMetadata)(e),
    guild_id: e,
    raid_types: t
  })
}
async function I(e, t) {
  let a = new Set(e.features);
  a.has(c.GuildFeatures.COMMUNITY) ? t ? a.delete(c.GuildFeatures.RAID_ALERTS_DISABLED) : a.add(c.GuildFeatures.RAID_ALERTS_DISABLED) : t ? a.add(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS) : a.delete(c.GuildFeatures.NON_COMMUNITY_RAID_ALERTS), await i.default.saveGuild(e.id, {
    features: a
  }, {
    throwErr: !0
  })
}
async function E(e, t, a, l) {
  let d = n()().add(l, "hours").toISOString();
  return await s.HTTP.put({
    url: c.Endpoints.GUILD_INCIDENT_ACTIONS(e),
    body: {
      invites_disabled_until: t ? d : null,
      dms_disabled_until: a ? d : null
    }
  })
}
async function h(e, t, a) {
  let {
    showAlertMode: l
  } = (0, o.getGuildAlertModeEnabled)(e), n = r.default.getGuild(e), d = null == n ? void 0 : n.getSafetyAlertsChannelId();
  return l && null != d ? await s.HTTP.post({
    url: c.Endpoints.GUILD_INCIDENT_REPORT_FALSE_ALARM(e),
    body: {
      alert_message_id: t,
      reason: a
    }
  }) : null
}
async function D(e) {
  let {
    showAlertMode: t
  } = (0, o.getGuildAlertModeEnabled)(e), a = r.default.getGuild(e), l = null == a ? void 0 : a.getSafetyAlertsChannelId();
  return t && null != l ? await s.HTTP.post({
    url: c.Endpoints.GUILD_INCIDENT_REPORT_RAID(e)
  }) : null
}