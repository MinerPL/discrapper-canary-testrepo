"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var a = s("735250");
s("470079");
var n = s("442837"),
  l = s("481060"),
  i = s("993413"),
  r = s("496675"),
  o = s("52597"),
  d = s("981631"),
  u = s("689938"),
  c = s("245812");

function S(e) {
  let {
    errors: t,
    pendingNick: s,
    currentNick: S,
    username: E,
    guild: T
  } = e, _ = null != s ? s : S, f = (0, n.useStateFromStores)([r.default], () => r.default.can(d.Permissions.CHANGE_NICKNAME, T) || r.default.can(d.Permissions.MANAGE_NICKNAMES, T));
  return (0, a.jsxs)(i.default, {
    title: u.default.Messages.SERVER_NICKNAME,
    errors: t,
    children: [(0, a.jsx)(l.TextInput, {
      value: null != _ ? _ : "",
      placeholder: E,
      maxLength: d.USERNAME_MAX_LENGTH,
      onChange: function(e) {
        (0, o.setNewPendingNickname)(e, S)
      },
      disabled: !f
    }), !f && (0, a.jsx)(l.FormText, {
      className: c.nicknameDisabled,
      type: l.FormText.Types.DESCRIPTION,
      children: u.default.Messages.CHANGE_IDENTITY_NICKNAME_PERMISSIONS_DISABLED
    })]
  })
}