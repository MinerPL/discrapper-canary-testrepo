r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(735250);
r(470079);
var s = r(442837), a = r(481060), t = r(493683), l = r(592125), d = r(594174), o = r(689938);
function u(e, n) {
    let r = (0, s.e7)([d.default], () => d.default.getCurrentUser(), []), u = (0, s.e7)([l.Z], () => l.Z.getChannel(n), [n]);
    return null == u || u.isOwner(e) || null == r || !u.isOwner(r.id) ? null : (0, i.jsx)(a.MenuItem, {
        id: 'remove',
        label: o.Z.Messages.REMOVE_FROM_GROUP,
        action: () => t.Z.removeRecipient(n, e),
        color: 'danger'
    });
}
