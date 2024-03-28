"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
});
var l = n("735250");
n("470079");
var u = n("442837"),
  a = n("481060"),
  i = n("313889"),
  r = n("825829"),
  d = n("36459"),
  o = n("592125"),
  s = n("375954"),
  c = n("496675"),
  f = n("981631"),
  E = n("689938");

function M(e, t) {
  let n = (0, u.useStateFromStores)([c.default], () => null != e && c.default.canWithPartialContext(f.Permissions.MANAGE_MESSAGES, {
      channelId: e
    }), [e]),
    M = (0, u.useStateFromStores)([o.default], () => o.default.getChannel(e), [e]),
    _ = (0, u.useStateFromStores)([s.default], () => null != e && null != t ? s.default.getMessage(e, t) : null),
    p = (0, r.useAutomodAlertActions)(null != _ ? _ : null);
  if (null == M || null == _) return null;
  let S = null != p && p.actions.hasOwnProperty(i.AutomodAlertActionType.SET_COMPLETED) ? i.AutomodAlertActionType.UNSET_COMPLETED : i.AutomodAlertActionType.SET_COMPLETED,
    m = S === i.AutomodAlertActionType.SET_COMPLETED ? E.default.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED : E.default.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
  return n && null != t ? (0, l.jsx)(a.MenuItem, {
    id: "mark-automod-alert-completed",
    label: m,
    action: () => {
      (0, d.executeAlertAction)(t, M, S)
    }
  }, "mark-automod-alert-completed") : null
}