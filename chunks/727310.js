n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(735250);
n(470079);
var a = n(481060);
function s(e) {
    let { upsellType: t } = e;
    (0, a.openModalLazy)(async () => {
        let { default: e } = await n.e('51816').then(n.bind(n, 415788));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                upsellType: t,
                'aria-labelledby': 'reverse-trial-upsell-modal'
            });
    });
}
