"use strict";
n.r(t), n("47120");
var i = n("470079"),
  r = n("399606"),
  s = n("544891"),
  a = n("570140"),
  l = n("367907"),
  o = n("430824"),
  u = n("496675"),
  c = n("626135"),
  d = n("70956"),
  f = n("997787"),
  p = n("981631");
let _ = 1 * d.default.Millis.DAY,
  E = new Map;
t.default = {
  useShouldShowChannelNotice(e) {
    let t = (0, r.useStateFromStores)([o.default, u.default], () => {
      let t = o.default.getGuild(e);
      return null != t && u.default.can(p.Permissions.ADMINISTRATOR, t)
    });
    i.useEffect(() => {
      t && ! function(e) {
        var t;
        let n = Date.now(),
          i = null !== (t = E.get(e)) && void 0 !== t ? t : 0;
        !(n < i + _) && (E.set(e, n), s.HTTP.post({
          url: p.Endpoints.GUILD_MIGRATE_COMMAND_SCOPE(e)
        }).then(t => {
          var n, i;
          a.default.dispatch({
            type: "COMMANDS_MIGRATION_UPDATE_SUCCESS",
            guildId: e,
            integrationIdsWithAppCommands: null !== (i = null === (n = t.body) || void 0 === n ? void 0 : n.integration_ids_with_app_commands) && void 0 !== i ? i : []
          })
        }, () => {
          E.set(e, i)
        }))
      }(e)
    }, [e, t]);
    let n = (0, r.useStateFromStores)([f.default], () => f.default.shouldShowChannelNotice(e));
    return t && n
  },
  dismissNotice(e) {
    a.default.dispatch({
      type: "COMMANDS_MIGRATION_NOTICE_DISMISSED",
      guildId: e
    })
  },
  dismissOverviewTooltip(e, t) {
    var n;
    a.default.dispatch({
      type: "COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED",
      guildId: e,
      integrationId: t.id
    }), c.default.track(p.AnalyticEvents.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
      ...(0, l.collectGuildAnalyticsMetadata)(e),
      application_id: null === (n = t.application) || void 0 === n ? void 0 : n.id,
      location: "overview"
    })
  },
  dismissToggleTooltip(e, t) {
    var n;
    void 0 !== t && (a.default.dispatch({
      type: "COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED",
      integrationId: t.id
    }), c.default.track(p.AnalyticEvents.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, {
      ...(0, l.collectGuildAnalyticsMetadata)(e),
      application_id: null === (n = t.application) || void 0 === n ? void 0 : n.id,
      location: "toggle"
    }))
  }
}