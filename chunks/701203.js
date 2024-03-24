"use strict";
n.r(t), n.d(t, {
  useCanReportRaid: function() {
    return c
  },
  useCanEnableRaidAlerts: function() {
    return _
  }
});
var i = n("884691"),
  a = n("446674");
n("926809");
var l = n("957255"),
  d = n("610174"),
  s = n("413476"),
  r = n("311161"),
  u = n("54346"),
  o = n("49111");

function c(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : o.EMPTY_STRING_SNOWFLAKE_ID,
    {
      enableRaidReporting: d
    } = s.ReportRaidExperiment.useExperiment({
      guildId: n,
      location: "4467c7_1"
    }, {
      autoTrackExposure: !1
    }),
    c = (0, a.useStateFromStores)([l.default], () => (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.default;
      return t.can(o.Permissions.BAN_MEMBERS, e) || t.can(o.Permissions.KICK_MEMBERS, e) || t.can(o.Permissions.MANAGE_GUILD, e)
    })(e, l.default), [e]),
    _ = (0, a.useStateFromStores)([u.default], () => null != e ? u.default.getGuildIncident(e.id) : null, [e]),
    E = null != _ && (0, r.hasDetectedActivity)(_);
  return i.useEffect(() => {
    !E && c && s.ReportRaidExperiment.trackExposure({
      guildId: n,
      location: "4467c7_2"
    })
  }, [E, c, n]), !E && c && d
}

function _(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : o.EMPTY_STRING_SNOWFLAKE_ID,
    i = (0, a.useStateFromStores)([l.default], () => (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.default;
      return t.can(o.Permissions.MANAGE_GUILD, e)
    })(e, l.default), [e]),
    {
      enableRaidAlerts: r
    } = s.RaidAlertExperiment.useExperiment({
      guildId: n,
      location: "4467c7_3"
    }, {
      autoTrackExposure: i
    }),
    {
      showAlertMode: u
    } = (0, d.useGuildAlertModeEnabled)(n);
  return i && (r || u)
}