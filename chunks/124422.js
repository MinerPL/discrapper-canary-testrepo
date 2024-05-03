"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("735250");
n("470079");
var u = n("442837"),
  a = n("481060"),
  d = n("889161"),
  s = n("924301"),
  i = n("554747"),
  r = n("981631"),
  o = n("689938");

function c(e, t, c) {
  var E;
  let {
    canManageGuildEvent: f
  } = (0, d.useManageResourcePermissions)(null != c ? c : t), _ = (0, u.useStateFromStores)([s.default], () => s.default.getGuildScheduledEvent(e), [e]), T = f(_), S = null != (0, i.useActiveEvent)(null !== (E = null == c ? void 0 : c.id) && void 0 !== E ? E : r.EMPTY_STRING_SNOWFLAKE_ID), N = null != _ && (0, s.isGuildScheduledEventActive)(_);
  return T && !N && !S ? (0, l.jsx)(a.MenuItem, {
    id: o.default.Messages.START_EVENT,
    label: o.default.Messages.START_EVENT,
    action: function() {
      null != _ && (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("84722"), n.e("3183")]).then(n.bind(n, "296864"));
        return t => (0, l.jsx)(e, {
          ...t,
          event: _
        })
      })
    }
  }) : null
}