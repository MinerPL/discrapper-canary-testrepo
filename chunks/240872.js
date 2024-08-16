var r = n(735250);
n(470079);
var i = n(952265),
    a = n(468026),
    s = n(689938);
t.Z = {
    show(e) {
        let { title: t, body: n, confirmColor: s, confirmText: o, cancelText: l, onConfirm: u, onCancel: c, onCloseCallback: d, secondaryConfirmText: _, onConfirmSecondary: E, className: f, titleClassName: h } = e;
        (0, i.h7)(
            (e) =>
                (0, r.jsx)(a.default, {
                    ...e,
                    title: t,
                    body: n,
                    confirmColor: s,
                    confirmText: o,
                    cancelText: l,
                    onConfirm: u,
                    onCancel: c,
                    secondaryConfirmText: _,
                    onConfirmSecondary: E,
                    className: f,
                    titleClassName: h
                }),
            { onCloseCallback: d }
        );
    },
    close() {},
    confirm(e) {
        return new Promise((t) => {
            this.show({
                onConfirm() {
                    t(!0);
                },
                cancelText: s.Z.Messages.CANCEL,
                onCancel() {
                    t(!1);
                },
                ...e
            });
        });
    }
};
