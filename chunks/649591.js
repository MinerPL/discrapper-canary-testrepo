n.d(t, {
    j: function () {
        return a;
    }
});
var r = n(735250);
n(470079);
var i = n(481060);
function a(e) {
    let {
        application: t,
        onConfirm: a,
        onCancel: o
    } = e;
    return (0, i.openModalLazy)(async () => {
        let {default: e} = await n.e('18367').then(n.bind(n, 557751));
        return n => (0, r.jsx)(e, {
            application: t,
            onConfirm: a,
            onCancel: o,
            ...n
        });
    }), Promise.resolve();
}
