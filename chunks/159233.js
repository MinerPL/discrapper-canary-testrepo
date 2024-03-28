"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("735250");
n("470079");
var u = n("442837"),
  a = n("481060"),
  s = n("889161"),
  d = n("924301"),
  i = n("894017"),
  r = n("79874"),
  o = n("576749"),
  c = n("689938");

function E(e) {
  let {
    guildEventId: t,
    guild: E,
    channel: f,
    recurrenceId: _,
    isRecurrenceItem: T
  } = e, {
    canManageGuildEvent: S
  } = (0, s.useManageResourcePermissions)(null != f ? f : E), N = (0, u.useStateFromStores)([d.default], () => d.default.getGuildScheduledEvent(t)), v = S(N), I = (0, o.default)(), g = (0, i.default)(_, null == N ? void 0 : N.id), m = (0, r.default)(t, _);
  if (!v || null == N) return null;
  let M = null != N.recurrence_rule && !T,
    h = e => {
      (null == _ || e) && !T ? (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("58023"), n.e("10045")]).then(n.bind(n, "779250"));
        return n => (0, l.jsx)(e, {
          ...n,
          guildScheduledEventId: t,
          guildId: E.id
        })
      }, I) : null != _ && (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("27919")]).then(n.bind(n, "379038"));
        return t => (0, l.jsx)(e, {
          ...t,
          guildEvent: N,
          recurrenceId: _
        })
      }, I)
    };
  return (0, l.jsx)(a.MenuItem, {
    id: c.default.Messages.EDIT_EVENT,
    label: c.default.Messages.EDIT_EVENT,
    action: M ? void 0 : () => h(!0),
    children: M && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(a.MenuItem, {
        id: c.default.Messages.EDIT_THIS_EVENT,
        label: c.default.Messages.EDIT_THIS_EVENT,
        action: () => h(!1),
        disabled: (null == g ? void 0 : g.is_canceled) || m.startTime.getTime() < Date.now()
      }), (0, l.jsx)(a.MenuItem, {
        id: c.default.Messages.EDIT_ALL_EVENTS,
        label: c.default.Messages.EDIT_ALL_EVENTS,
        action: () => h(!0),
        disabled: new Date(N.scheduled_start_time).getTime() < Date.now()
      })]
    })
  })
}