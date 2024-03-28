"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
}), a("47120");
var l = a("735250"),
  n = a("470079"),
  u = a("442837"),
  d = a("481060"),
  s = a("194359"),
  i = a("699516"),
  o = a("594174"),
  r = a("689938");

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ContextMenu",
    {
      id: a,
      username: f,
      bot: c
    } = e,
    M = (0, u.useStateFromStores)([o.default], () => {
      var e;
      return (null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === a
    }, [a]),
    [m, E] = (0, u.useStateFromStoresArray)([i.default], () => [i.default.isFriend(a), i.default.isBlocked(a)], [a]),
    [g, I] = n.useState(!1);
  return c || M ? null : m ? (0, l.jsx)(d.MenuItem, {
    id: "remove-friend",
    label: r.default.Messages.REMOVE_FRIEND,
    action: function() {
      (0, d.openModal)(e => (0, l.jsx)(d.ConfirmModal, {
        header: r.default.Messages.REMOVE_FRIEND_TITLE.format({
          name: f
        }),
        confirmText: r.default.Messages.REMOVE_FRIEND,
        cancelText: r.default.Messages.CANCEL,
        onConfirm: () => {
          s.default.removeFriend(a, {
            location: t
          }), I(!1)
        },
        ...e,
        children: (0, l.jsx)(d.Text, {
          variant: "text-md/normal",
          children: r.default.Messages.REMOVE_FRIEND_BODY.format({
            name: f
          })
        })
      }))
    }
  }) : (0, l.jsx)(d.MenuItem, {
    id: "add-friend",
    label: g ? r.default.Messages.ADD_FRIEND_BUTTON_AFTER : r.default.Messages.ADD_FRIEND,
    action: () => {
      !g && (s.default.addRelationship({
        userId: a,
        context: {
          location: t
        }
      }), I(!0))
    },
    disabled: E || g && !m
  })
}