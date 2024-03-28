"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("735250");
n("470079");
var u = n("442837"),
  a = n("481060"),
  s = n("41776"),
  d = n("314897"),
  i = n("924301"),
  r = n("482241"),
  o = n("894017"),
  c = n("765305"),
  E = n("689938");

function f(e) {
  let {
    guildEventId: t,
    guildId: n,
    recurrenceId: f
  } = e, _ = (0, u.useStateFromStores)([s.default], () => s.default.isLurking(n), [n]), T = (0, u.useStateFromStores)([d.default], () => d.default.getId()), {
    rsvped: S,
    baseRsvp: N,
    recurrenceRsvp: v
  } = (0, u.useStateFromStoresObject)([i.default], () => ({
    rsvped: i.default.isInterestedInEventRecurrence(t, f),
    baseRsvp: i.default.getRsvp(t, null, T),
    recurrenceRsvp: i.default.getRsvp(t, f, T)
  }), [f, t, T]), I = (0, o.default)(f, t);
  if (_ || (null == I ? void 0 : I.is_canceled)) return null;
  let g = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      l = (null == N ? void 0 : N.response) === c.GuildScheduledEventUserResponses.INTERESTED ? c.GuildScheduledEventUserResponses.UNINTERESTED : c.GuildScheduledEventUserResponses.INTERESTED,
      u = e ? null : f;
    r.default.updateRsvp(t, u, n, l)
  };
  return (0, l.jsxs)(a.MenuItem, {
    id: S ? E.default.Messages.EVENT_MARK_NOT_INTERESTED : E.default.Messages.EVENT_MARK_INTERESTED,
    label: S ? E.default.Messages.EVENT_MARK_NOT_INTERESTED : E.default.Messages.EVENT_MARK_INTERESTED,
    action: void 0,
    children: [(0, l.jsx)(a.MenuItem, {
      id: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
      label: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
      action: () => g(!1)
    }), (0, l.jsx)(a.MenuItem, {
      id: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
      label: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
      action: () => g(!0),
      disabled: null != v
    })]
  })
}