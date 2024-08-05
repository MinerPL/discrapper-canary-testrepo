l.d(n, {
  Z: function() {
return c;
  }
}), l(47120);
var t = l(735250),
  r = l(470079),
  i = l(442837),
  a = l(481060),
  s = l(194359),
  u = l(699516),
  d = l(594174),
  o = l(689938);

function c(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'ContextMenu',
{
  id: l,
  username: c,
  bot: Z
} = e,
E = (0, i.e7)([d.default], () => {
  var e;
  return (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === l;
}, [l]),
[M, _] = (0, i.Wu)([u.Z], () => [
  u.Z.isFriend(l),
  u.Z.isBlocked(l)
], [l]),
[f, g] = r.useState(!1);
  return Z || E ? null : M ? (0, t.jsx)(a.MenuItem, {
id: 'remove-friend',
label: o.Z.Messages.REMOVE_FRIEND,
action: function() {
  (0, a.openModal)(e => (0, t.jsx)(a.ConfirmModal, {
    header: o.Z.Messages.REMOVE_FRIEND_TITLE.format({
      name: c
    }),
    confirmText: o.Z.Messages.REMOVE_FRIEND,
    cancelText: o.Z.Messages.CANCEL,
    onConfirm: () => {
      s.Z.removeFriend(l, {
        location: n
      }), g(!1);
    },
    ...e,
    children: (0, t.jsx)(a.Text, {
      variant: 'text-md/normal',
      children: o.Z.Messages.REMOVE_FRIEND_BODY.format({
        name: c
      })
    })
  }));
}
  }) : (0, t.jsx)(a.MenuItem, {
id: 'add-friend',
label: f ? o.Z.Messages.ADD_FRIEND_BUTTON_AFTER : o.Z.Messages.ADD_FRIEND,
action: () => {
  !f && (s.Z.addRelationship({
    userId: l,
    context: {
      location: n
    }
  }), g(!0));
},
disabled: _ || f && !M
  });
}