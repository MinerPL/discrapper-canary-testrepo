t.d(n, {
    Z: function () {
        return l;
    }
});
var a = t(735250);
t(470079);
var i = t(481060),
    s = t(117984),
    r = t(689938);
function l(e) {
    return (0, a.jsx)(i.MenuItem, {
        id: 'delete-channel',
        label: r.Z.Messages.REMOVE_CATEGORY,
        subtext: r.Z.Messages.DELETE_CATEGORY_SUBTEXT,
        color: 'danger',
        action: () =>
            (0, i.openModalLazy)(async () => {
                let { default: n } = await t.e('37720').then(t.bind(t, 357632));
                return (t) =>
                    (0, a.jsx)(n, {
                        ...t,
                        onConfirm: () => {
                            t.onClose(), (0, s.xh)(e.id);
                        },
                        channel: e
                    });
            })
    });
}
