"use strict";
n.r(t), n.d(t, {
  useCanEnableRaidAlerts: function() {
    return c
  },
  useCanReportRaid: function() {
    return u
  }
});
var a = n("442837");
n("467319");
var i = n("496675"),
  d = n("154285"),
  l = n("655006"),
  s = n("533244"),
  o = n("487419"),
  r = n("981631");

function u(e) {
  let t = (0, a.useStateFromStores)([i.default], () => (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default;
      return t.can(r.Permissions.BAN_MEMBERS, e) || t.can(r.Permissions.KICK_MEMBERS, e) || t.can(r.Permissions.MANAGE_GUILD, e)
    })(e, i.default), [e]),
    n = (0, a.useStateFromStores)([o.default], () => null != e ? o.default.getGuildIncident(e.id) : null, [e]);
  return !(null != n && (0, s.hasDetectedActivity)(n)) && t
}

function c(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : r.EMPTY_STRING_SNOWFLAKE_ID,
    s = (0, a.useStateFromStores)([i.default], () => (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default;
      return t.can(r.Permissions.MANAGE_GUILD, e)
    })(e, i.default), [e]),
    {
      enableRaidAlerts: o
    } = l.RaidAlertExperiment.useExperiment({
      guildId: n,
      location: "4467c7_3"
    }, {
      autoTrackExposure: s
    }),
    {
      showAlertMode: u
    } = (0, d.useGuildAlertModeEnabled)(n);
  return s && (o || u)
}