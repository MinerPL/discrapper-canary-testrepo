"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var l = n("37983");
n("884691");
var u = n("446674"),
  a = n("77078"),
  d = n("817963"),
  i = n("398604"),
  s = n("658202"),
  r = n("397680"),
  o = n("782340");

function c(e) {
  let {
    guildEventId: t,
    recurrenceId: n,
    guild: c,
    channel: E
  } = e, f = null != n, {
    canManageGuildEvent: _
  } = (0, d.useManageResourcePermissions)(null != E ? E : c), [T, S] = (0, u.useStateFromStoresArray)([i.default], () => [i.default.isActive(t), i.default.getGuildScheduledEvent(t)]), v = (0, r.default)(n, null == S ? void 0 : S.id), g = null != S && _(S), I = f && (null == v ? void 0 : v.is_canceled) && g;
  return I && (!T || f) ? (0, l.jsx)(a.MenuItem, {
    id: o.default.Messages.RESTORE_EVENT,
    label: o.default.Messages.RESTORE_EVENT,
    action: () => {
      null != n && null != v && (0, s.default)(v, c.id, t, n)
    }
  }) : null
}