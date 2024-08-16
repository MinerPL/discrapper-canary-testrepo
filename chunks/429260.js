t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(735250);
t(470079);
var a = t(481060),
    l = t(726521),
    r = t(970257),
    s = t(689938);
function o(e) {
    return (0, r.a4)(e)
        ? (0, i.jsx)(a.MenuItem, {
              id: 'report',
              label: s.Z.Messages.REPORT_MESSAGE_MENU_OPTION,
              action: () => (0, l.ak)(e, 'web_message_context_menu'),
              icon: a.FlagIcon,
              color: 'danger'
          })
        : null;
}
