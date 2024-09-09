n.d(t, {
    T: function () {
        return c;
    }
}),
    n(757143);
var r = n(735250),
    i = n(818083),
    a = n(424218),
    s = n(474936),
    o = n(981631),
    l = n(689938);
let u = (0, i.B)({
    kind: 'user',
    id: '2024-09_sky_load',
    label: 'Sky Load',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Variant 1',
            config: { enabled: !0 }
        }
    ]
});
function c(e) {
    let { onClick: t } = e,
        n = (0, a.BU)(o.WKe / 1024, { useKibibytes: !0 }),
        i = (0, a.BU)(s.Uq / 1024, { useKibibytes: !0 }),
        u = l.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({ maxSize: n }),
        c = l.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_3.format({ premiumMaxSize: i }),
        d = l.Z.Messages.LEARN_MORE_CLICK.format({ onClick: t });
    return (0, r.jsxs)(r.Fragment, {
        children: [u, ' ', c.replace('\n', ' '), '. ', d]
    });
}
t.Z = u;
