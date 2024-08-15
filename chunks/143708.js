n.d(t, {
  Z: function() {
return I;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(144144),
  r = n(955415),
  l = n(314897),
  o = n(944486),
  c = n(585483),
  u = n(51144),
  d = n(981631),
  _ = n(689938),
  E = n(29062);

function I(e) {
  let t, n, I, {
  author: m,
  banned: T
} = e,
h = (0, a.e7)([l.default], () => l.default.getId()),
N = (0, a.e7)([o.Z], () => o.Z.getChannelId()),
f = u.ZP.useName(m),
C = h === m.id;
  return C ? (t = _.Z.Messages.INVITE_BUTTON_INVALID_OWNER, I = _.Z.Messages.INVITE_BUTTON_TITLE_INVITER_INVALID) : (I = _.Z.Messages.INVITE_BUTTON_TITLE_INVITED_INVALID, T ? t = _.Z.Messages.INSTANT_INVITE_BANNED_INFO : null != f ? (t = _.Z.Messages.INSTANT_INVITE_ASK_USER_FOR_NEW_INVITE.format({
username: f
  }), n = (0, i.jsx)(r.Z.Button, {
onClick: function() {
  let {
    id: e
  } = m, t = '@'.concat(u.ZP.getUserTag(m, {
    decoration: 'never'
  }));
  c.S.dispatchToLastSubscribed(d.CkL.INSERT_TEXT, {
    plainText: t,
    rawText: '<@'.concat(e, '>')
  }), null != N && s.Z.startTyping(N);
},
children: _.Z.Messages.MENTION
  })) : t = _.Z.Messages.INSTANT_INVITE_ASK_FOR_NEW_INVITE), (0, i.jsxs)(r.Z, {
children: [
  (0, i.jsx)(r.Z.Header, {
    text: I
  }),
  (0, i.jsxs)(r.Z.Body, {
    children: [
      (0, i.jsxs)('div', {
        className: E.headerLine,
        children: [
          (0, i.jsx)(r.Z.Icon, {
            expired: !0
          }),
          (0, i.jsx)(r.Z.Info, {
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