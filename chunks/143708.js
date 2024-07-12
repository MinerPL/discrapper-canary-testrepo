n.d(t, {
  Z: function() {
return I;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(144144),
  r = n(314897),
  l = n(944486),
  o = n(197409),
  c = n(585483),
  d = n(51144),
  u = n(981631),
  _ = n(689938),
  E = n(182578);

function I(e) {
  let t, n, I, {
  author: m,
  banned: T
} = e,
h = (0, a.e7)([r.default], () => r.default.getId()),
N = (0, a.e7)([l.Z], () => l.Z.getChannelId()),
f = d.ZP.useName(m),
p = h === m.id;
  return p ? (t = _.Z.Messages.INVITE_BUTTON_INVALID_OWNER, I = _.Z.Messages.INVITE_BUTTON_TITLE_INVITER_INVALID) : (I = _.Z.Messages.INVITE_BUTTON_TITLE_INVITED_INVALID, T ? t = _.Z.Messages.INSTANT_INVITE_BANNED_INFO : null != f ? (t = _.Z.Messages.INSTANT_INVITE_ASK_USER_FOR_NEW_INVITE.format({
username: f
  }), n = (0, i.jsx)(o.Z.Button, {
onClick: function() {
  let {
    id: e
  } = m, t = '@'.concat(d.ZP.getUserTag(m, {
    decoration: 'never'
  }));
  c.S.dispatchToLastSubscribed(u.CkL.INSERT_TEXT, {
    plainText: t,
    rawText: '<@'.concat(e, '>')
  }), null != N && s.Z.startTyping(N);
},
children: _.Z.Messages.MENTION
  })) : t = _.Z.Messages.INSTANT_INVITE_ASK_FOR_NEW_INVITE), (0, i.jsxs)(o.Z, {
children: [
  (0, i.jsx)(o.Z.Header, {
    text: I
  }),
  (0, i.jsxs)(o.Z.Body, {
    children: [
      (0, i.jsxs)('div', {
        className: E.headerLine,
        children: [
          (0, i.jsx)(o.Z.Icon, {
            expired: !0
          }),
          (0, i.jsx)(o.Z.Info, {
            expired: !0,
            title: _.Z.Messages.INVITE_BUTTON_INVALID,
            children: t
          })
        ]
      }),
      n
    ]
  })
]
  });
}