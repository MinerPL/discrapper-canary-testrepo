n.d(t, {
  Z: function() {
return T;
  }
}), n(724458), n(653041);
var i = n(735250);
n(470079);
var a = n(512722),
  s = n.n(a),
  r = n(442837),
  l = n(131704),
  o = n(592125),
  c = n(594174),
  d = n(197409),
  u = n(823379),
  _ = n(358595),
  E = n(981631),
  I = n(689938),
  m = n(182578);

function T(e) {
  let t, {
  invite: n,
  author: a,
  currentUserId: T,
  onTransitionToInviteChannel: h,
  onAcceptInstantInvite: N
} = e,
f = T === a.id,
p = n.state === E.r2o.ACCEPTING,
C = (0, r.e7)([o.Z], () => null != n.channel ? o.Z.getChannel(n.channel.id) : null, [n]);
  s()(null == C || C.isPrivate(), 'must be a private channel');
  let g = null != C;
  if (null == C) {
if (null == n.channel)
  return (0, i.jsx)(_.Z, {});
C = (0, l.jD)(n.channel), t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : [];
  } else {
t = C.recipients.reduce((e, t) => {
  let n = c.default.getUser(t);
  return null != n && e.push(n), e;
}, []);
let e = c.default.getCurrentUser();
g && null != e && t.push(e);
  }
  let S = C.name;
  (null == S || '' === S) && (S = t.length > 0 ? t.filter(u.lm).map(e => e.username).join(', ') : I.Z.Messages.UNNAMED);
  let A = g ? h : N,
R = I.Z.Messages.JOIN_GUILD,
x = d.Z.Button.Colors.GREEN;
  g && (R = I.Z.Messages.JOINED_GUILD, x = d.Z.Button.Colors.PRIMARY);
  let O = I.Z.Messages.INVITE_BUTTON_TITLE_INVITED_GROUP_DM;
  return f && (O = I.Z.Messages.INVITE_BUTTON_TITLE_INVITER_GROUP_DM), (0, i.jsxs)(d.Z, {
children: [
  (0, i.jsx)(d.Z.Header, {
    text: O
  }),
  (0, i.jsxs)(d.Z.Body, {
    children: [
      (0, i.jsxs)('div', {
        className: m.headerLine,
        children: [
          (0, i.jsx)(d.Z.Icon, {
            channel: C,
            onClick: g ? A : void 0
          }),
          (0, i.jsx)(d.Z.Info, {
            title: S,
            onClick: g ? A : void 0,
            children: (0, i.jsx)(d.Z.Data, {
              members: t.length
            })
          })
        ]
      }),
      (0, i.jsx)(d.Z.Button, {
        onClick: A,
        submitting: p,
        isDisabled: g,
        color: x,
        children: R
      })
    ]
  })
]
  });
}