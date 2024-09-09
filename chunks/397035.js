t.d(n, {
    Z: function () {
        return d;
    }
});
var l = t(470079),
    i = t(835473),
    a = t(81063),
    r = t(591759),
    o = t(561308),
    s = t(206583),
    c = t(701488),
    u = t(689938);
function d(e) {
    let n,
        { entry: t, baseEntryData: d } = e,
        m = (0, i.q)(t.extra.application_id),
        f = null == m ? void 0 : m.getIconURL(128),
        _ = (0, a.getAssetImage)(t.extra.application_id, t.extra.media_assets_large_image, [c.Si.LARGE, c.Si.LARGE]),
        p = t.extra.media_title,
        C = t.extra.media_subtitle,
        h = (0, o.kr)(t) && !(0, o.n2)(t) ? u.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING_V2 : u.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED_V2,
        I = { type: s.kG.CRUNCHYROLL },
        x = l.useMemo(() => {
            if (null == t.extra.url) return;
            let e = r.Z.safeParseWithQuery(t.extra.url);
            if (null != e && null != e.protocol && null != e.hostname) return e;
        }, [t.extra.url]);
    return (
        null != x &&
            (n = {
                href: r.Z.format(x),
                ariaDescription: u.Z.Messages.CONTENT_INVENTORY_OPEN_CRUNCHYROLL_ITEM_A11Y_DESCRIPTION.format({ title: p })
            }),
        {
            ...d,
            thumbnailUrl: null != _ ? _ : f,
            title: p,
            titleClickable: n,
            thumbnailClickable: n,
            subtitle: C,
            userDescription: h,
            providerIconProps: I
        }
    );
}
