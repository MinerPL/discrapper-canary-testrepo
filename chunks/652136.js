n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(626135),
    s = n(981631);
function o(e) {
    let { stickerPack: t, sourceSticker: o, analyticsLocations: l, analyticsLocation: u } = e;
    return (
        a.default.track(s.rMx.STICKER_PACK_VIEW_ALL, {
            sticker_id: null == o ? void 0 : o.id,
            sticker_pack_id: t.id,
            location: u,
            location_stack: l
        }),
        a.default.track(s.rMx.OPEN_MODAL, {
            type: s.jXE.STICKER_PACK_VIEW_ALL,
            location: u
        }),
        (0, i.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e('29549'), n.e('39511')]).then(n.bind(n, 433550));
            return (n) =>
                (0, r.jsx)(e, {
                    stickerPack: t,
                    ...n
                });
        })
    );
}
