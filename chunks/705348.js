n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var a = n(82950),
    s = n(63063),
    r = n(981631),
    l = n(921944),
    o = n(689938),
    c = n(157476);
function d(e) {
    let { guild: t, markAsDismissed: n } = e;
    return (0, i.jsx)(a.Z, {
        image: c,
        guild: t,
        onDismissed: () => n(l.L.UNKNOWN),
        onClick: () => {
            open(s.Z.getArticleURL(r.BhN.CONNECTION_DETAILS)), n(l.L.UNKNOWN);
        },
        title: o.Z.Messages.LINKED_ROLES_ADMIN_NUX_TITLE,
        message: o.Z.Messages.LINKED_ROLES_ADMIN_NUX_CONTENT,
        cta: o.Z.Messages.LEARN_MORE,
        trackingSource: r.PsQ.LINKED_ROLES_ADMIN_NUX,
        type: r.vID.LINKED_ROLES_ADMIN
    });
}
