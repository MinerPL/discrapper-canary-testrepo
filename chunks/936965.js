"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var l = n("37983"),
  u = n("884691"),
  i = n("77078"),
  a = n("322224"),
  r = n("832588"),
  d = n("745049"),
  s = n("782340"),
  o = n("505326");

function c(e) {
  let {
    event: t,
    recurrenceId: n,
    guildId: c,
    onRsvp: f,
    ...E
  } = e, [v, g] = u.useState(r.ResponseOptions.SERIES), S = (0, r.getExistingRsvp)(t.id, null), h = (null == S ? void 0 : S.response) === d.GuildScheduledEventUserResponses.INTERESTED, N = h ? d.GuildScheduledEventUserResponses.UNINTERESTED : d.GuildScheduledEventUserResponses.INTERESTED, _ = N === d.GuildScheduledEventUserResponses.INTERESTED ? s.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED : s.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
  return (0, l.jsx)(i.ConfirmModal, {
    ...E,
    header: _,
    confirmText: s.default.Messages.OK,
    cancelText: s.default.Messages.CANCEL,
    onConfirm: () => {
      v === r.ResponseOptions.SERIES ? a.default.updateRsvp(t.id, null, c, N) : a.default.updateRsvp(t.id, n, c, N), null == f || f(), E.onClose()
    },
    confirmButtonColor: i.Button.Colors.BRAND,
    children: (0, l.jsx)(i.RadioGroup, {
      className: o.responseOptions,
      value: v,
      options: (0, r.getResponseOptions)(),
      onChange: e => g(e.value)
    })
  })
}

function f(e, t, n, u) {
  (0, r.handleRsvp)({
    eventId: e,
    recurrenceId: t,
    guildId: n,
    updateRsvp: (t, l, u, i) => a.default.updateRsvp(e, l, n, i),
    openRsvpPicker: (e, t) => {
      (0, i.openModalLazy)(() => Promise.resolve(i => (0, l.jsx)(c, {
        ...i,
        event: e,
        recurrenceId: t,
        guildId: n,
        onRsvp: u
      })))
    },
    onRsvp: u
  })
}