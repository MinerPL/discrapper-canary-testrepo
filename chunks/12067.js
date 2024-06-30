n.d(l, {
    Z: function () {
        return E;
    }
});
var t = n(735250);
n(470079);
var i = n(442837), r = n(169525), a = n(611170), s = n(128854), u = n(592125), o = n(52824), d = n(310043), c = n(69750), m = n(592256), p = n(823379), f = n(970184), v = n(981631);
function E(e) {
    let {message: l} = (0, f.CJ)(), n = (0, i.e7)([u.Z], () => u.Z.getChannel(null == l ? void 0 : l.channel_id)), {
            shouldHideMediaOptions: E,
            shouldRedactExplicitContent: N,
            gifAutoPlay: h,
            getGifFavButton: C,
            getOnMediaItemContextMenu: I
        } = (0, s.c)();
    if (null == l || null == n)
        return null;
    let g = e.items.map(e => (0, m.j0)(e.media, v.VqG, E, N)).filter(p.lm), x = {
            source: 'Media Mosaic',
            guild_id: n.guild_id,
            channel_id: n.id,
            channel_type: n.type
        }, S = g.length > 1 ? (0, m.Cx)(g, x) : {};
    function j(e, l) {
        let n = e.originalItem;
        return (0, r.lK)(n.media, l, n.spoiler);
    }
    let T = e.items.map(e => {
        let n = e.media, t = null == I ? void 0 : I(n), i = {
                message: l,
                item: {
                    uniqueId: n.proxyUrl,
                    originalItem: e,
                    type: (0, c.pU)(n, !0),
                    downloadUrl: n.url,
                    height: n.height,
                    width: n.width,
                    spoiler: e.spoiler,
                    contentType: n.contentType
                },
                onContextMenu: t,
                autoPlayGif: h,
                getObscureReason: j,
                renderImageComponent: a.a,
                renderVideoComponent: a.r,
                renderAudioComponent: v.dG4,
                renderPlaintextFilePreview: v.dG4,
                renderGenericFileComponent: v.dG4,
                renderMosaicItemFooter: v.dG4,
                gifFavoriteButton: C(n),
                onPlay: (e, l, n) => {
                },
                canRemoveItem: !1,
                onRemoveItem: v.dG4
            }, r = (0, o.q)({
                proxyURL: n.proxyUrl,
                url: n.url
            });
        return r in S && (i.onClick = S[r]), i;
    });
    return (0, t.jsx)('div', { children: (0, t.jsx)(d.Z, { items: T }) });
}
