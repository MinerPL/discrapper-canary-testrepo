n.d(t, {
  Z: function() {
return T;
  }
}), n(724458), n(653041);
var i = n(735250);
n(470079);
var s = n(512722),
  a = n.n(s),
  r = n(442837),
  l = n(955415),
  o = n(131704),
  c = n(592125),
  u = n(594174),
  d = n(823379),
  _ = n(358595),
  E = n(981631),
  I = n(689938),
  m = n(182578);

function T(e) {
  let t, {
  invite: n,
  author: s,
  currentUserId: T,
  onTransitionToInviteChannel: h,
  onAcceptInstantInvite: N
} = e,
C = T === s.id,
f = n.state === E.r2o.ACCEPTING,
p = (0, r.e7)([c.Z], () => null != n.channel ? c.Z.getChannel(n.channel.id) : null, [n]);
  a()(null == p || p.isPrivate(), 'must be a private channel');
  let g = null != p;
  if (null == p) {
if (null == n.channel)
  return (0, i.jsx)(_.Z, {});
p = (0, o.jD)(n.channel), t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : [];
  } else {
t = p.recipients.reduce((e, t) => {
  let n = u.default.getUser(t);
  return null != n && e.push(n), e;
}, []);
let e = u.default.getCurrentUser();
g && null != e && t.push(e);
  }
  let S = p.name;
  (null == S || '' === S) && (S = t.length > 0 ? t.filter(d.lm).map(e => e.username).join(', ') : I.Z.Messages.UNNAMED);
  let A = g ? h : N,
R = I.Z.Messages.JOIN_GUILD,
O = l.Z.Button.Colors.GREEN;
  g && (R = I.Z.Messages.JOINED_GUILD, O = l.Z.Button.Colors.PRIMARY);
  let x = I.Z.Messages.INVITE_BUTTON_TITLE_INVITED_GROUP_DM;
  return C && (x = I.Z.Messages.INVITE_BUTTON_TITLE_INVITER_GROUP_DM), (0, i.jsxs)(l.Z, {
children: [
  (0, i.jsx)(l.Z.Header, {
    text: x
  }),
  (0, i.jsxs)(l.Z.Body, {
    children: [
      (0, i.jsxs)('div', {
        className: m.headerLine,
        children: [
          (0, i.jsx)(l.Z.Icon, {
            channel: p,
            onClick: g ? A : void 0
          }),
          (0, i.jsx)(l.Z.Info, {
            title: S,
            onClick: g ? A : void 0,
            children: (0, i.jsx)(l.Z.Data, {
              members: t.length
            })
          })
        ]
      }),
      (0, i.jsx)(l.Z.Button, {
        onClick: A,
        submitting: f,
        isDisabled: g,
        color: O,
        children: R
      })
    ]
  })
]
  });
}