"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var l = n("37983");
n("884691");
var u = n("446674"),
  i = n("77078"),
  r = n("228944"),
  o = n("201131"),
  a = n("702873"),
  s = n("42203"),
  d = n("377253"),
  c = n("957255"),
  f = n("49111"),
  E = n("782340");

function _(e, t) {
  let n = (0, u.useStateFromStores)([c.default], () => null != e && c.default.canWithPartialContext(f.Permissions.MANAGE_MESSAGES, {
      channelId: e
    }), [e]),
    _ = (0, u.useStateFromStores)([s.default], () => s.default.getChannel(e), [e]),
    m = (0, u.useStateFromStores)([d.default], () => null != e && null != t ? d.default.getMessage(e, t) : null),
    h = (0, o.useAutomodAlertActions)(null != m ? m : null);
  if (null == _ || null == m) return null;
  let M = null != h && h.actions.hasOwnProperty(r.AutomodAlertActionType.SET_COMPLETED) ? r.AutomodAlertActionType.UNSET_COMPLETED : r.AutomodAlertActionType.SET_COMPLETED,
    C = M === r.AutomodAlertActionType.SET_COMPLETED ? E.default.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED : E.default.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
  return n && null != t ? (0, l.jsx)(i.MenuItem, {
    id: "mark-automod-alert-completed",
    label: C,
    action: () => {
      (0, a.executeAlertAction)(t, _, M)
    }
  }, "mark-automod-alert-completed") : null
}