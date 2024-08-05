l.d(n, {
  Z: function() {
return m;
  }
}), l(47120);
var s = l(735250),
  t = l(470079),
  a = l(481060),
  i = l(482241),
  o = l(124165),
  r = l(765305),
  u = l(689938),
  c = l(970775);

function d(e) {
  let {
event: n,
recurrenceId: l,
guildId: d,
onRsvp: m,
...N
  } = e, [v, C] = t.useState(o.KX.SERIES), p = (0, o.X2)(n.id, null), h = (null == p ? void 0 : p.response) === r.gv.INTERESTED ? r.gv.UNINTERESTED : r.gv.INTERESTED, E = h === r.gv.INTERESTED ? u.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED : u.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
  return (0, s.jsx)(a.ConfirmModal, {
...N,
header: E,
confirmText: u.Z.Messages.OK,
cancelText: u.Z.Messages.CANCEL,
onConfirm: () => {
  v === o.KX.SERIES ? i.Z.updateRsvp(n.id, null, d, h) : i.Z.updateRsvp(n.id, l, d, h), null == m || m(), N.onClose();
},
confirmButtonColor: a.Button.Colors.BRAND,
children: (0, s.jsx)(a.RadioGroup, {
  className: c.responseOptions,
  value: v,
  options: (0, o.pF)(),
  onChange: e => C(e.value)
})
  });
}

function m(e, n, l, t) {
  (0, o.cg)({
eventId: e,
recurrenceId: n,
guildId: l,
updateRsvp: (n, s, t, a) => i.Z.updateRsvp(e, s, l, a),
openRsvpPicker: (e, n) => {
  (0, a.openModalLazy)(() => Promise.resolve(a => (0, s.jsx)(d, {
    ...a,
    event: e,
    recurrenceId: n,
    guildId: l,
    onRsvp: t
  })));
},
onRsvp: t
  });
}