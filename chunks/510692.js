"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("37983");
n("884691");
var u = n("446674"),
  a = n("77078"),
  d = n("817963"),
  i = n("398604"),
  s = n("534222"),
  r = n("49111"),
  o = n("782340");

function c(e, t, c) {
  var E;
  let {
    canManageGuildEvent: f
  } = (0, d.useManageResourcePermissions)(null != c ? c : t), _ = (0, u.useStateFromStores)([i.default], () => i.default.getGuildScheduledEvent(e), [e]), T = f(_), S = null != (0, s.useActiveEvent)(null !== (E = null == c ? void 0 : c.id) && void 0 !== E ? E : r.EMPTY_STRING_SNOWFLAKE_ID), v = null != _ && (0, i.isGuildScheduledEventActive)(_);
  return T && !v && !S ? (0, l.jsx)(a.MenuItem, {
    id: o.default.Messages.START_EVENT,
    label: o.default.Messages.START_EVENT,
    action: function() {
      null != _ && (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("298843").then(n.bind(n, "298843"));
        return t => (0, l.jsx)(e, {
          ...t,
          event: _
        })
      })
    }
  }) : null
}