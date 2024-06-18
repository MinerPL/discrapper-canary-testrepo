"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(194359),
  a = n(699516),
  l = n(594174),
  u = n(981631),
  _ = n(689938);

function d(e) {
  let {
    user: t,
    color: n,
    onBlock: d,
    onUnblock: c,
    location: E = "ContextMenu"
  } = e, {
    id: I
  } = t, T = (0, r.e7)([l.default], () => {
    var e;
    return (null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === I
  }, [I]), h = (0, r.e7)([a.Z], () => a.Z.isBlocked(I), [I]);
  return T ? null : (0, i.jsx)(s.MenuItem, {
    id: "block",
    color: n,
    label: h ? _.Z.Messages.UNBLOCK : _.Z.Messages.BLOCK,
    action: h ? () => {
      null == c || c(), o.Z.unblockUser(I, {
        location: E
      })
    } : () => {
      (0, s.openModal)(e => (0, i.jsx)(s.ConfirmModal, {
        header: _.Z.Messages.CONFIRM_USER_BLOCK_TITLE.format({
          name: t.username
        }),
        confirmText: _.Z.Messages.BLOCK,
        cancelText: _.Z.Messages.CANCEL,
        onConfirm: () => {
          null == d || d(), o.Z.addRelationship({
            userId: I,
            context: {
              location: E
            },
            type: u.OGo.BLOCKED
          })
        },
        ...e,
        children: (0, i.jsx)(s.Text, {
          variant: "text-md/normal",
          children: _.Z.Messages.CONFIRM_USER_BLOCK_BODY.format({
            name: t.username
          })
        })
      }))
    }
  })
}