s.d(n, {
    Z: function () {
        return g;
    }
});
var t = s(735250);
s(470079);
var l = s(442837), i = s(481060), a = s(904245), r = s(257559), o = s(665906), d = s(496675), u = s(594174), c = s(981631), E = s(689938);
function g(e, n) {
    let s = (0, l.e7)([u.default], () => u.default.getCurrentUser()), g = (0, o.$R)(n), m = (0, l.e7)([d.Z], () => d.Z.can(c.Plq.MANAGE_MESSAGES, n), [n]), M = m || null != s && e.canDeleteOwnMessage(s.id);
    return e.state === c.yb.SENDING || !M || c.V$x.UNDELETABLE.has(e.type) || !g ? null : (0, t.jsx)(i.MenuItem, {
        id: 'delete',
        label: E.Z.Messages.DELETE_MESSAGE,
        action: function (s) {
            e.state === c.yb.SEND_FAILED ? a.Z.deleteMessage(n.id, e.id, !0) : s.shiftKey ? a.Z.deleteMessage(n.id, e.id) : r.Z.confirmDelete(n, e, !0);
        },
        color: 'danger',
        icon: i.TrashIcon
    });
}
