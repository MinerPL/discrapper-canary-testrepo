"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("47120");
var l = n("735250");
n("470079");
var u = n("442837"),
  a = n("481060"),
  s = n("889161"),
  d = n("924301"),
  i = n("495279"),
  r = n("894017"),
  o = n("689938");

function c(e) {
  let {
    guildEventId: t,
    recurrenceId: n,
    guild: c,
    channel: E
  } = e, f = null != n, {
    canManageGuildEvent: _
  } = (0, s.useManageResourcePermissions)(null != E ? E : c), [T, S] = (0, u.useStateFromStoresArray)([d.default], () => [d.default.isActive(t), d.default.getGuildScheduledEvent(t)]), N = (0, r.default)(n, null == S ? void 0 : S.id), v = null != S && _(S);
  return f && (null == N ? void 0 : N.is_canceled) && v && (!T || f) ? (0, l.jsx)(a.MenuItem, {
    id: o.default.Messages.RESTORE_EVENT,
    label: o.default.Messages.RESTORE_EVENT,
    action: () => {
      null != n && null != N && (0, i.default)(N, c.id, t, n)
    }
  }) : null
}