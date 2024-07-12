n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(430824),
  r = n(702346),
  l = n(646504),
  o = n(981631),
  c = n(689938),
  d = n(180090);

function u(e) {
  let t, {
  compact: u,
  isOwner: _,
  channel: E
} = e,
I = () => {
  let e = s.Z.getGuild(E.getGuildId());
  null != e && ((0, a.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([
      n.e('7654'),
      n.e('1187'),
      n.e('5233')
    ]).then(n.bind(n, 560114));
    return n => (0, i.jsx)(t, {
      ...n,
      guild: e,
      channel: E,
      source: o.t4x.INVITE_SYSTEM_MESSAGE
    });
  }), (0, l.w)());
},
m = (e, t) => (0, i.jsx)(a.Anchor, {
  className: d.inviteLink,
  onClick: I,
  children: e
}, t);
  return t = u ? (0, i.jsx)('div', {
className: d.inviteContent,
children: _ ? c.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_OWNER_COMPACT.format({
  inviteHook: m
}) : c.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_COMPACT.format({
  inviteHook: m
})
  }) : (0, i.jsxs)('div', {
className: d.content,
children: [
  (0, i.jsx)('div', {
    className: d.inviteHeader,
    children: _ ? c.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_OWNER : c.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS
  }),
  (0, i.jsx)('div', {
    className: d.inviteContent,
    children: _ ? c.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_DESCRIPTION_OWNER : c.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_DESCRIPTION
  }),
  (0, i.jsx)(a.Button, {
    onClick: I,
    size: a.Button.Sizes.SMALL,
    className: d.inviteButton,
    children: c.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_BUTTON
  })
]
  }), (0, i.jsx)(r.Z, {
className: u ? d.compact : d.inviteContent,
iconNode: u ? null : (0, i.jsx)('img', {
  alt: '',
  src: n(826926),
  width: 40,
  height: 40
}),
iconContainerClassName: d.iconContainer,
compact: u,
children: t
  });
}