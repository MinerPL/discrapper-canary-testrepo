n.d(t, {
  Z: function() {
return l;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(689938),
  r = n(3172);

function l(e) {
  let {
message: t
  } = e;
  return (0, i.jsxs)(a.Clickable, {
onClick: () => {
  (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e('14021').then(n.bind(n, 910673));
    return n => (0, i.jsx)(e, {
      channelId: t.channel_id,
      messageId: t.id,
      ...n
    });
  });
},
className: r.accessory,
children: [
  (0, i.jsx)(a.CircleInformationIcon, {
    size: 'xs',
    color: 'currentColor'
  }),
  (0, i.jsx)(a.Text, {
    variant: 'text-xs/normal',
    className: r.accessoryText,
    children: s.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_MESSAGE_LABEL
  })
]
  });
}