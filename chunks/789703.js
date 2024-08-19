t.d(n, {
    I: function () {
        return a;
    }
}),
    t(789020);
var i = t(442837),
    l = t(509545),
    r = t(55563),
    s = t(551428),
    o = t(73346);
function a(e) {
    var n, t, a;
    let c;
    let d = (0, i.e7)([r.Z], () => r.Z.get(e), [e]),
        u = (0, i.e7)([s.Z], () => s.Z.getForSKU(e), [e]),
        m = (0, i.e7)([l.Z], () => l.Z.getForSKU(e), [e]);
    if (null != d && null != u && null != m)
        return (
            null != u.thumbnail &&
                (c = {
                    id: u.thumbnail.id,
                    filename: u.thumbnail.filename,
                    size: u.thumbnail.size,
                    url: (0, o._W)(d.applicationId, u.thumbnail, 256),
                    mime_type: u.thumbnail.mimeType,
                    width: null !== (n = u.thumbnail.width) && void 0 !== n ? n : void 0,
                    height: null !== (t = u.thumbnail.height) && void 0 !== t ? t : void 0
                }),
            {
                id: d.id,
                name: d.name,
                description: null !== (a = u.description) && void 0 !== a ? a : '',
                image_asset: c,
                application_id: d.applicationId,
                subscription_plans: m.map((e) => e.toServerData()),
                published: !!u.published,
                soft_deleted: !!d.deleted,
                store_listing_benefits: u.benefits,
                sku_benefits: {
                    id: d.id,
                    benefits: []
                },
                sku_flags: d.flags
            }
        );
}
