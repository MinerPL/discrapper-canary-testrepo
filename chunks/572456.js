n.d(t, {
    XN: function () {
        return _;
    },
    af: function () {
        return u;
    },
    gK: function () {
        return E;
    }
});
var r = n(735250);
n(470079);
var a = n(481060);
function i(e) {
    return new Promise((t) => {
        (0, a.openModalLazy)(() =>
            e(
                () => {
                    t(!0);
                },
                (e) => (t(!1), e())
            )
        );
    });
}
let E = (e) =>
        i(async (t, a) => {
            let { default: i } = await n.e('44462').then(n.bind(n, 478472));
            return (n) =>
                (0, r.jsx)(i, {
                    ...n,
                    ruleName: e,
                    onConfirm: t,
                    onClose: () => a(n.onClose),
                    onCancel: () => a(n.onClose)
                });
        }),
    _ = (e, t) =>
        i(async (a, i) => {
            let { default: E } = await n.e('92575').then(n.bind(n, 601787));
            return (n) =>
                (0, r.jsx)(E, {
                    ...n,
                    ruleName: e,
                    keyword: t,
                    onConfirm: a,
                    onClose: () => i(n.onClose),
                    onCancel: () => i(n.onClose)
                });
        }),
    u = (e) => (t) =>
        i(async (a, i) => {
            let { default: E } = await n.e('83613').then(n.bind(n, 449675)),
                _ = () => {
                    t(), a();
                };
            return (t) =>
                (0, r.jsx)(E, {
                    ruleName: e,
                    ...t,
                    onConfirm: _,
                    onClose: () => i(t.onClose),
                    onCancel: () => i(t.onClose)
                });
        });
