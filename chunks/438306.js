n.d(t, {
  Z: function() {
return f;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(481060),
  l = n(787014),
  r = n(933557),
  o = n(454585),
  c = n(131704),
  u = n(496675),
  d = n(396769),
  h = n(967128),
  m = n(981631),
  p = n(689938),
  _ = n(349836);

function f(e) {
  let {
channel: t
  } = e, n = (0, r.ZP)(t, !0), f = (0, a.e7)([u.Z], () => u.Z.can(m.Plq.MANAGE_CHANNELS, t) && c.dF.has(t.type));
  return (0, i.jsxs)(h.ZP, {
channelId: t.id,
children: [
  (0, i.jsx)(h.Kq, {
    channelType: t.type
  }),
  (0, i.jsx)(h.Ot, {
    children: p.Z.Messages.BEGINNING_CHANNEL_WELCOME.format({
      channelName: n
    })
  }),
  (0, i.jsx)(h.jz, {
    children: p.Z.Messages.BEGINNING_CHANNEL_DESCRIPTION.format({
      channelName: n,
      topicHook: () => o.Z.parseTopic(t.topic, !0, {
        channelId: t.id
      })
    })
  }),
  f ? (0, i.jsx)('div', {
    className: _.buttonContainer,
    children: (0, i.jsx)(d.Z, {
      label: p.Z.Messages.EDIT_CHANNEL,
      onClick: () => {
        l.ZP.open(t.id);
      },
      icon: (0, i.jsx)(s.PencilIcon, {
        size: 'xs',
        color: 'currentColor'
      })
    })
  }) : null
]
  });
}