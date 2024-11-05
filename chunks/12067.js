t.d(n, {
    Z: function () {
        return _;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(768494),
    a = t(169525),
    o = t(499376),
    s = t(611170),
    c = t(128854),
    u = t(884182),
    d = t(94396),
    m = t(592125),
    f = t(52824),
    p = t(970184),
    h = t(981631);
function _(e) {
    let { message: n } = (0, p.CJ)(),
        t = (0, i.e7)([m.Z], () => m.Z.getChannel(null == n ? void 0 : n.channel_id)),
        { shouldHideMediaOptions: _, shouldRedactExplicitContent: x, gifAutoPlay: C, getGifFavButton: v, getOnMediaItemContextMenu: b } = (0, c.c)();
    if (null == n || null == t) return null;
    let g = e.items
            .map((e) => ({
                ...(0, r.y_)(e.media),
                original: e.media.url,
                srcIsAnimated: e.media.srcIsAnimated
            }))
            .filter((e) => 'INVALID' !== e.type),
        I = {
            source: 'Media Mosaic',
            guild_id: t.guild_id,
            channel_id: t.id,
            channel_type: t.type
        },
        S =
            g.length > 1
                ? (0, d._)(
                      g,
                      {
                          shouldHideMediaOptions: _,
                          shouldRedactExplicitContent: x
                      },
                      I
                  )
                : {};
    function j(e, n) {
        let t = e.originalItem;
        return (0, a.lK)(t.media, n, t.spoiler);
    }
    let y = e.items.map((e) => {
        let t = e.media,
            l = null == b ? void 0 : b(t),
            i = {
                message: n,
                item: {
                    uniqueId: t.proxyUrl,
                    originalItem: e,
                    type: (0, o.pU)(t, !0),
                    downloadUrl: t.url,
                    height: t.height,
                    width: t.width,
                    spoiler: e.spoiler,
                    contentType: t.contentType
                },
                onContextMenu: l,
                autoPlayGif: C,
                getObscureReason: j,
                renderImageComponent: s.a,
                renderVideoComponent: s.r,
                renderAudioComponent: h.dG4,
                renderPlaintextFilePreview: h.dG4,
                renderGenericFileComponent: h.dG4,
                renderMosaicItemFooter: h.dG4,
                gifFavoriteButton: v(t),
                onPlay: (e, n, t) => {},
                canRemoveItem: !1,
                onRemoveItem: h.dG4
            },
            r = (0, f.q)({
                proxyURL: t.proxyUrl,
                url: t.url
            });
        return r in S && (i.onClick = S[r]), i;
    });
    return (0, l.jsx)('div', { children: (0, l.jsx)(u.Z, { items: y }) });
}
