n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(735250);
n(470079);
var a = n(481060), s = n(430824);
function l(e) {
    let {
        onCloseCallback: t,
        analyticsLocations: l,
        ...r
    } = e;
    (0, a.openModalLazy)(async () => {
        let {default: e} = await n.e('11166').then(n.bind(n, 971949));
        return t => (0, i.jsx)(e, {
            ...t,
            ...r,
            analyticsLocations: l,
            guildCount: s.Z.getGuildCount(),
            'aria-labelledby': 'nitro-guild-cap-upsell'
        });
    }, { onCloseCallback: t });
}
