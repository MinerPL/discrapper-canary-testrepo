t.d(n, {
    Z: function () {
        return s;
    }
});
var l = t(423875),
    i = t(740605),
    a = t(206583),
    r = t(616922),
    o = t(689938);
function s(e) {
    let n,
        { entry: t, baseEntryData: s } = e,
        { provider: c, image_url: u } = t.extra.media,
        d = t.extra.artist.name,
        m = {
            onClick: () => (0, i.o)(r.Hw.ALBUM, t.extra.media.external_parent_id),
            ariaDescription: o.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format({ itemName: t.extra.media.parent_title })
        },
        f = {
            onClick: () => (0, i.o)(r.Hw.ARTIST, t.extra.artist.external_id),
            ariaDescription: o.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format({ itemName: d })
        };
    return (
        c === l.p.SPOTIFY && (n = { type: a.kG.SPOTIFY }),
        {
            ...s,
            title: d,
            thumbnailUrl: u,
            titleClickable: f,
            subtitleClickable: m,
            thumbnailClickable: m,
            userDescription: o.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
            providerIconProps: n
        }
    );
}
