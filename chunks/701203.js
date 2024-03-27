"use strict";
a.r(t), a.d(t, {
  useCanReportRaid: function() {
    return c
  },
  useCanEnableRaidAlerts: function() {
    return f
  }
});
var n = a("884691"),
  i = a("446674");
a("926809");
var l = a("957255"),
  s = a("610174"),
  d = a("413476"),
  u = a("311161"),
  r = a("54346"),
  o = a("49111");

function c(e) {
  var t;
  let a = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : o.EMPTY_STRING_SNOWFLAKE_ID,
    {
      enableRaidReporting: s
    } = d.ReportRaidExperiment.useExperiment({
      guildId: a,
      location: "4467c7_1"
    }, {
      autoTrackExposure: !1
    }),
    c = (0, i.useStateFromStores)([l.default], () => (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.default;
      return t.can(o.Permissions.BAN_MEMBERS, e) || t.can(o.Permissions.KICK_MEMBERS, e) || t.can(o.Permissions.MANAGE_GUILD, e)
    })(e, l.default), [e]),
    f = (0, i.useStateFromStores)([r.default], () => null != e ? r.default.getGuildIncident(e.id) : null, [e]),
    g = null != f && (0, u.hasDetectedActivity)(f);
  return n.useEffect(() => {
    !g && c && d.ReportRaidExperiment.trackExposure({
      guildId: a,
      location: "4467c7_2"
    })
  }, [g, c, a]), !g && c && s
}

function f(e) {
  var t;
  let a = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : o.EMPTY_STRING_SNOWFLAKE_ID,
    n = (0, i.useStateFromStores)([l.default], () => (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.default;
      return t.can(o.Permissions.MANAGE_GUILD, e)
    })(e, l.default), [e]),
    {
      enableRaidAlerts: u
    } = d.RaidAlertExperiment.useExperiment({
      guildId: a,
      location: "4467c7_3"
    }, {
      autoTrackExposure: n
    }),
    {
      showAlertMode: r
    } = (0, s.useGuildAlertModeEnabled)(a);
  return n && (u || r)
}