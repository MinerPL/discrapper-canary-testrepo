n.d(t, {
    H: function () {
        return o;
    }
});
var a = n(735250);
n(470079);
var r = n(481060);
let o = e => {
    let {
        analyticsLocations: t,
        initialSelectedEffectId: o,
        guild: l
    } = e;
    (0, r.openModalLazy)(async () => {
        let {default: e} = await n.e('55183').then(n.bind(n, 191564));
        return n => (0, a.jsx)(e, {
            ...n,
            guild: l,
            initialSelectedEffectId: o,
            analyticsLocations: t
        });
    }, {});
};
