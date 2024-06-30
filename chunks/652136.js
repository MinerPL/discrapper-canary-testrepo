n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(735250);
n(470079);
var i = n(481060), a = n(626135), o = n(981631);
function s(e) {
    let {
        stickerPack: t,
        sourceSticker: s,
        analyticsLocations: l,
        analyticsLocation: u
    } = e;
    return a.default.track(o.rMx.STICKER_PACK_VIEW_ALL, {
        sticker_id: null == s ? void 0 : s.id,
        sticker_pack_id: t.id,
        location: u,
        location_stack: l
    }), a.default.track(o.rMx.OPEN_MODAL, {
        type: o.jXE.STICKER_PACK_VIEW_ALL,
        location: u
    }), (0, i.openModalLazy)(async () => {
        let {default: e} = await Promise.all([
            n.e('29549'),
            n.e('39511')
        ]).then(n.bind(n, 433550));
        return n => (0, r.jsx)(e, {
            stickerPack: t,
            ...n
        });
    });
}
