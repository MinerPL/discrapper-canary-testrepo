n.r(t);
var l = n(735250);
n(470079);
var i = n(481060),
  r = n(239091),
  a = n(37234),
  u = n(108843),
  o = n(100527),
  s = n(299206),
  d = n(703656),
  c = n(852245),
  _ = n(689938);
t.default = (0, u.Z)(function(e) {
  let {
channel: t,
onSelect: n
  } = e, u = (0, c.Z)(t), o = (0, s.Z)({
id: t.id,
label: _.Z.Messages.COPY_ID_CHANNEL
  });
  return (0, l.jsxs)(i.Menu, {
navId: 'channel-context',
onClose: r.Zy,
'aria-label': _.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
onSelect: n,
children: [
  (0, l.jsxs)(i.MenuGroup, {
    children: [
      u,
      t.isCategory() ? null : (0, l.jsx)(i.MenuItem, {
        id: 'jump-to-channel',
        label: _.Z.Messages.JUMP_TO_CHANNEL,
        action: () => {
          (0, d.XU)(t.guild_id, t.id), (0, a.xf)();
        }
      })
    ]
  }),
  (0, l.jsx)(i.MenuGroup, {
    children: o
  })
]
  });
}, [
  o.Z.CONTEXT_MENU,
  o.Z.CHANNEL_AUDIT_LOG_MENU
]);