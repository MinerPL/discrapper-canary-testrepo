t.d(n, {
    Z: function () {
        return s;
    }
}),
    t(47120);
var l = t(423875),
    i = t(740605),
    a = t(206583),
    r = t(616922),
    o = t(689938);
function s(e) {
    let n,
        { entry: t, baseEntryData: s } = e,
        c = t.extra.entries[0].media,
        u = c.artists[0],
        { title: d, provider: m, image_url: f } = c,
        _ = u.name,
        p = {
            onClick: () => (0, i.o)(r.Hw.TRACK, c.external_id),
            ariaDescription: o.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format({ itemName: d })
        },
        C = {
            onClick: () => (0, i.o)(r.Hw.ARTIST, u.external_id),
            ariaDescription: o.Z.Messages.CONTENT_INVENTORY_OPEN_SPOTIFY_ITEM_A11Y_DESCRIPTION.format({ itemName: _ })
        };
    return (
        m === l.p.SPOTIFY && (n = { type: a.kG.SPOTIFY }),
        {
            ...s,
            title: d,
            subtitle: _,
            thumbnailUrl: f,
            titleClickable: p,
            subtitleClickable: C,
            thumbnailClickable: p,
            userDescription: o.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
            providerIconProps: n
        }
    );
}
