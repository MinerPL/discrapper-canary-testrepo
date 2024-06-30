n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(735250);
n(470079);
var i = n(481060), a = n(689938);
function o() {
    function e() {
        (0, i.openModalLazy)(async () => {
            let {default: e} = await n.e('82935').then(n.bind(n, 431583));
            return t => (0, r.jsx)(e, {
                source: 'Screenshare Unavailable',
                ...t
            });
        });
    }
    (0, i.openModalLazy)(async () => {
        let {default: t} = await n.e('67753').then(n.bind(n, 873809));
        return n => (0, r.jsx)(t, {
            ...n,
            header: a.Z.Messages.SCREENSHARE_UNAVAILABLE,
            body: a.Z.Messages.SCREENSHARE_UNAVAILABLE_DOWNLOAD_APP,
            confirmText: a.Z.Messages.DOWNLOAD_APP,
            onConfirm: e
        });
    });
}
