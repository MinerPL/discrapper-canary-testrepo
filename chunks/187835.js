n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var l = n(481060),
    r = n(603592),
    a = n(689938);
let s = 'DOWNLOAD_APPS';
function o() {
    let e = (0, l.useModalsStore)((e) => (0, l.hasModalOpenSelector)(e, s));
    return (0, i.jsx)(r.Z, {
        id: 'app-download-button',
        onClick: () => {
            (0, l.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                    return (t) =>
                        (0, i.jsx)(e, {
                            source: 'Guilds',
                            ...t
                        });
                },
                { modalKey: s }
            );
        },
        selected: e,
        tooltip: a.Z.Messages.DOWNLOAD_APPS,
        icon: l.DownloadIcon
    });
}
