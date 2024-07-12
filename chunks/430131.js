s.d(t, {
  Z: function() {
return E;
  }
});
var n = s(735250);
s(470079);
var a = s(442837),
  i = s(481060),
  r = s(993413),
  o = s(496675),
  l = s(52597),
  c = s(981631),
  d = s(689938),
  _ = s(981897);

function E(e) {
  let {
errors: t,
pendingNick: s,
currentNick: E,
username: u,
guild: T
  } = e, I = null != s ? s : E, S = (0, a.e7)([o.Z], () => o.Z.can(c.Plq.CHANGE_NICKNAME, T) || o.Z.can(c.Plq.MANAGE_NICKNAMES, T));
  return (0, n.jsxs)(r.Z, {
title: d.Z.Messages.SERVER_NICKNAME,
errors: t,
children: [
  (0, n.jsx)(i.TextInput, {
    value: null != I ? I : '',
    placeholder: u,
    maxLength: c.l$U,
    onChange: function(e) {
      (0, l.wi)(e, E);
    },
    disabled: !S
  }),
  !S && (0, n.jsx)(i.FormText, {
    className: _.nicknameDisabled,
    type: i.FormText.Types.DESCRIPTION,
    children: d.Z.Messages.CHANGE_IDENTITY_NICKNAME_PERMISSIONS_DISABLED
  })
]
  });
}