t.d(s, {
    S: function () {
        return o;
    },
    V: function () {
        return r;
    }
});
var n = t(735250),
    a = t(481060),
    i = t(689938);
function r(e) {
    let { body: s, ...i } = e;
    (0, a.openModalLazy)(async () => {
        let { ConfirmModal: e } = await Promise.resolve().then(t.bind(t, 481060));
        return (t) =>
            (0, n.jsx)(e, {
                ...t,
                ...i,
                children: (0, n.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    children: s
                })
            });
    });
}
function o(e) {
    let { message: s } = e;
    r({
        header: i.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
        confirmText: i.Z.Messages.OKAY,
        body: s
    });
}
