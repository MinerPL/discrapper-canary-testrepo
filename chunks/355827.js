n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  l = n(481060),
  s = n(207055),
  r = n(938475),
  o = n(981631),
  c = n(689938),
  d = n(943474);

function u(e) {
  let {
channel: t
  } = e, n = (0, a.e7)([r.ZP], () => r.ZP.getVoiceStatesForChannel(t));
  return (0, i.jsxs)('div', {
className: d.root,
children: [
  (0, i.jsx)(l.Text, {
    variant: 'text-xs/bold',
    className: d.header,
    children: c.Z.Messages.CHANNEL_CALL_MEMBERS_POPOUT_HEADER.format({
      count: n.length
    })
  }),
  (0, i.jsx)(l.Scroller, {
    className: d.scroller,
    children: (0, i.jsx)(s.Z, {
      allowDragging: !1,
      allowPreviews: !1,
      className: d.voiceUsers,
      channel: t,
      voiceStates: n,
      collapsed: !1,
      location: o.Sbl.CHANNEL_CALL
    })
  })
]
  });
}