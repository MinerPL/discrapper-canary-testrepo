n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(430824),
  r = n(646504),
  l = n(834129),
  o = n(981631),
  c = n(689938),
  u = n(400362);

function d(e) {
  let t, {
  compact: d,
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
      n.e('84003')
    ]).then(n.bind(n, 560114));
    return n => (0, i.jsx)(t, {
      ...n,
      guild: e,
      channel: E,
      source: o.t4x.INVITE_SYSTEM_MESSAGE
    });
  }), (0, r.w)());
},
m = (e, t) => (0, i.jsx)(a.Anchor, {
  className: u.inviteLink,
  onClick: I,
  children: e
}, t);
  return t = d ? (0, i.jsx)('div', {
className: u.inviteContent,
children: _ ? c.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_OWNER_COMPACT.format({
  inviteHook: m
}) : c.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_COMPACT.format({
  inviteHook: m
})
  }) : (0, i.jsxs)('div', {
className: u.content,
children: [
  (0, i.jsx)('div', {
    className: u.inviteHeader,
    children: _ ? c.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_OWNER : c.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS
  }),
  (0, i.jsx)('div', {
    className: u.inviteContent,
    children: _ ? c.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_DESCRIPTION_OWNER : c.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_DESCRIPTION
  }),
  (0, i.jsx)(a.Button, {
    onClick: I,
    size: a.Button.Sizes.SMALL,
    className: u.inviteButton,
    children: c.Z.Messages.SYSTEM_MESSAGE_INVITE_USERS_BUTTON
  })
]
  }), (0, i.jsx)(l.Z, {
className: d ? u.compact : u.inviteContent,
iconNode: d ? null : (0, i.jsx)('img', {
  alt: '',
  src: n(826926),
  width: 40,
  height: 40
}),
iconContainerClassName: u.iconContainer,
compact: d,
children: t
  });
}