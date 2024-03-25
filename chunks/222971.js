"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("37983");
n("884691");
var u = n("446674"),
  a = n("77078"),
  d = n("817963"),
  i = n("398604"),
  s = n("397680"),
  r = n("466148"),
  o = n("842672"),
  c = n("782340");

function E(e) {
  let {
    guildEventId: t,
    guild: E,
    channel: f,
    recurrenceId: _,
    isRecurrenceItem: T
  } = e, {
    canManageGuildEvent: S
  } = (0, d.useManageResourcePermissions)(null != f ? f : E), v = (0, u.useStateFromStores)([i.default], () => i.default.getGuildScheduledEvent(t)), g = S(v), I = (0, o.default)(), N = (0, s.default)(_, null == v ? void 0 : v.id), m = (0, r.default)(t, _);
  if (!g || null == v) return null;
  let M = null != v.recurrence_rule && !T,
    h = e => {
      (null == _ || e) && !T ? (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("590942").then(n.bind(n, "590942"));
        return n => (0, l.jsx)(e, {
          ...n,
          guildScheduledEventId: t,
          guildId: E.id
        })
      }, I) : null != _ && (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("229798").then(n.bind(n, "229798"));
        return t => (0, l.jsx)(e, {
          ...t,
          guildEvent: v,
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
        disabled: (null == N ? void 0 : N.is_canceled) || m.startTime.getTime() < Date.now()
      }), (0, l.jsx)(a.MenuItem, {
        id: c.default.Messages.EDIT_ALL_EVENTS,
        label: c.default.Messages.EDIT_ALL_EVENTS,
        action: () => h(!0),
        disabled: new Date(v.scheduled_start_time).getTime() < Date.now()
      })]
    })
  })
}