s.d(n, {
    Z: function () {
        return o;
    }
});
var t = s(735250);
s(470079);
var l = s(481060), i = s(665906), a = s(50284), r = s(689938);
function o(e, n) {
    return (0, i.$R)(n) ? (0, t.jsx)(l.MenuItem, {
        id: 'mark-unread',
        label: r.Z.Messages.MARK_UNREAD,
        action: () => (0, a.Z)(n.id, e.id),
        icon: l.ChatMarkUnreadIcon
    }) : null;
}
