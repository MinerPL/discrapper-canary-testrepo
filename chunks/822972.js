n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    s = n(194359),
    o = n(699516),
    l = n(689938);
function u(e) {
    let { user: t, color: n, location: u, onAction: c } = e;
    return !(0, i.e7)([o.Z], () => o.Z.isFriend(t.id)) || t.isNonUserBot()
        ? null
        : (0, r.jsx)(a.MenuItem, {
              id: 'remove-friend',
              color: n,
              label: l.Z.Messages.REMOVE_FRIEND,
              action: () => {
                  (0, a.openModal)((e) =>
                      (0, r.jsx)(a.ConfirmModal, {
                          header: l.Z.Messages.REMOVE_FRIEND_TITLE.format({ name: t.username }),
                          confirmText: l.Z.Messages.REMOVE_FRIEND,
                          cancelText: l.Z.Messages.CANCEL,
                          onConfirm: () => {
                              null == c || c(), s.Z.removeFriend(t.id, null != u ? { location: u } : void 0);
                          },
                          ...e,
                          children: (0, r.jsx)(a.Text, {
                              variant: 'text-md/normal',
                              children: l.Z.Messages.REMOVE_FRIEND_BODY.format({ name: t.username })
                          })
                      })
                  );
              }
          });
}
