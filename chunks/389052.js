n.d(t, {
  Z: function() {
return d;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(481060),
  o = n(194359),
  s = n(699516),
  l = n(594174),
  u = n(981631),
  c = n(689938);

function d(e) {
  let {
user: t,
color: n,
onBlock: d,
onUnblock: _,
location: E = 'ContextMenu'
  } = e, {
id: f
  } = t, h = (0, i.e7)([l.default], () => {
var e;
return (null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === f;
  }, [f]), p = (0, i.e7)([s.Z], () => s.Z.isBlocked(f), [f]);
  return h ? null : (0, r.jsx)(a.MenuItem, {
id: 'block',
color: n,
label: p ? c.Z.Messages.UNBLOCK : c.Z.Messages.BLOCK,
action: p ? () => {
  null == _ || _(), o.Z.unblockUser(f, {
    location: E
  });
} : () => {
  (0, a.openModal)(e => (0, r.jsx)(a.ConfirmModal, {
    header: c.Z.Messages.CONFIRM_USER_BLOCK_TITLE.format({
      name: t.username
    }),
    confirmText: c.Z.Messages.BLOCK,
    cancelText: c.Z.Messages.CANCEL,
    onConfirm: () => {
      null == d || d(), o.Z.addRelationship({
        userId: f,
        context: {
          location: E
        },
        type: u.OGo.BLOCKED
      });
    },
    ...e,
    children: (0, r.jsx)(a.Text, {
      variant: 'text-md/normal',
      children: c.Z.Messages.CONFIRM_USER_BLOCK_BODY.format({
        name: t.username
      })
    })
  }));
}
  });
}