"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var l = a("735250");
a("470079");
var n = a("442837"),
  u = a("481060"),
  d = a("194359"),
  s = a("699516"),
  i = a("594174"),
  o = a("981631"),
  r = a("689938");

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ContextMenu",
    {
      id: a
    } = e,
    f = (0, n.useStateFromStores)([i.default], () => {
      var e;
      return (null === (e = i.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === a
    }, [a]),
    c = (0, n.useStateFromStores)([s.default], () => s.default.isBlocked(a), [a]);
  if (f) return null;

  function M() {
    d.default.addRelationship({
      userId: a,
      context: {
        location: t
      },
      type: o.RelationshipTypes.BLOCKED
    })
  }
  return (0, l.jsx)(u.MenuItem, {
    id: "block",
    label: c ? r.default.Messages.UNBLOCK : r.default.Messages.BLOCK,
    action: () => c ? d.default.unblockUser(a, {
      location: t
    }) : (0, u.openModal)(t => (0, l.jsx)(u.ConfirmModal, {
      header: r.default.Messages.CONFIRM_USER_BLOCK_TITLE.format({
        name: e.username
      }),
      confirmText: r.default.Messages.BLOCK,
      cancelText: r.default.Messages.CANCEL,
      onConfirm: M,
      ...t,
      children: (0, l.jsx)(u.Text, {
        variant: "text-md/normal",
        children: r.default.Messages.CONFIRM_USER_BLOCK_BODY.format({
          name: e.username
        })
      })
    }))
  })
}