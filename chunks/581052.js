t.d(n, {
    V: function () {
        return o;
    }
});
var i = t(735250);
t(470079);
var a = t(442837),
    l = t(481060),
    r = t(823162),
    u = t(594174),
    s = t(689938);
function o(e) {
    let n = (0, a.e7)([u.default], () => u.default.getCurrentUser());
    return (null == n ? void 0 : n.isStaff()) !== !0
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !e.isMessageRequest &&
                      (0, i.jsx)(l.MenuItem, {
                          id: 'mark-as-message-request',
                          label: s.Z.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_MOVE_TO,
                          action: () => (0, r.Xy)(e.id)
                      }),
                  (0, i.jsx)(l.MenuItem, {
                      id: 'clear-message-request',
                      label: s.Z.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_CLEAR,
                      action: () => (0, r.qR)(e.id)
                  })
              ]
          });
}
