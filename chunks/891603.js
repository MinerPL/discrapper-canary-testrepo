"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("37983");
n("884691");
var u = n("446674"),
  a = n("77078"),
  d = n("267567"),
  i = n("271938"),
  s = n("398604"),
  r = n("322224"),
  o = n("397680"),
  c = n("745049"),
  E = n("782340");

function f(e) {
  let {
    guildEventId: t,
    guildId: n,
    recurrenceId: f
  } = e, _ = (0, u.useStateFromStores)([d.default], () => d.default.isLurking(n), [n]), T = (0, u.useStateFromStores)([i.default], () => i.default.getId()), {
    rsvped: S,
    baseRsvp: v,
    recurrenceRsvp: g
  } = (0, u.useStateFromStoresObject)([s.default], () => ({
    rsvped: s.default.isInterestedInEventRecurrence(t, f),
    baseRsvp: s.default.getRsvp(t, null, T),
    recurrenceRsvp: s.default.getRsvp(t, f, T)
  }), [f, t, T]), I = (0, o.default)(f, t);
  if (_ || (null == I ? void 0 : I.is_canceled)) return null;
  let N = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      l = (null == v ? void 0 : v.response) === c.GuildScheduledEventUserResponses.INTERESTED,
      u = l ? c.GuildScheduledEventUserResponses.UNINTERESTED : c.GuildScheduledEventUserResponses.INTERESTED,
      a = e ? null : f;
    r.default.updateRsvp(t, a, n, u)
  };
  return (0, l.jsxs)(a.MenuItem, {
    id: S ? E.default.Messages.EVENT_MARK_NOT_INTERESTED : E.default.Messages.EVENT_MARK_INTERESTED,
    label: S ? E.default.Messages.EVENT_MARK_NOT_INTERESTED : E.default.Messages.EVENT_MARK_INTERESTED,
    action: void 0,
    children: [(0, l.jsx)(a.MenuItem, {
      id: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
      label: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
      action: () => N(!1)
    }), (0, l.jsx)(a.MenuItem, {
      id: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
      label: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
      action: () => N(!0),
      disabled: null != g
    })]
  })
}