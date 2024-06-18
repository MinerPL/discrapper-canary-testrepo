"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(194359),
  a = n(699516),
  l = n(689938);

function u(e) {
  let {
    user: t,
    color: n,
    location: u,
    onAction: _
  } = e;
  return !(0, r.e7)([a.Z], () => a.Z.isFriend(t.id)) || t.isNonUserBot() ? null : (0, i.jsx)(s.MenuItem, {
    id: "remove-friend",
    color: n,
    label: l.Z.Messages.REMOVE_FRIEND,
    action: () => {
      (0, s.openModal)(e => (0, i.jsx)(s.ConfirmModal, {
        header: l.Z.Messages.REMOVE_FRIEND_TITLE.format({
          name: t.username
        }),
        confirmText: l.Z.Messages.REMOVE_FRIEND,
        cancelText: l.Z.Messages.CANCEL,
        onConfirm: () => {
          null == _ || _(), o.Z.removeFriend(t.id, null != u ? {
            location: u
          } : void 0)
        },
        ...e,
        children: (0, i.jsx)(s.Text, {
          variant: "text-md/normal",
          children: l.Z.Messages.REMOVE_FRIEND_BODY.format({
            name: t.username
          })
        })
      }))
    }
  })
}