s.r(n), s.d(n, {
    default: function () {
        return d;
    }
});
var _ = s(735250);
s(470079);
var L = s(692547), a = s(481060), t = s(906732), o = s(98278), r = s(790527), c = s(474936), M = s(981631), i = s(689938), A = s(348394), l = s(935777), D = s(483569);
function u(e, n) {
    return (0, _.jsx)(a.TextBadge, {
        text: e,
        className: l.newBadge,
        color: L.Z.unsafe_rawColors.BRAND_500.css
    }, n);
}
function d(e) {
    var n;
    let {
        guildCount: s,
        onClose: L,
        analyticsLocations: l,
        ...d
    } = e;
    let f = (n = L, function (e, s) {
            return (0, _.jsx)(a.Clickable, {
                className: A.learnMoreLink,
                tag: 'span',
                onClick: () => {
                    n(), (0, o.z)();
                },
                children: e
            }, s);
        }), {analyticsLocations: U} = (0, t.ZP)(l);
    return (0, _.jsx)(t.Gt, {
        value: U,
        children: (0, _.jsx)(r.Z, {
            artURL: D,
            onClose: L,
            type: c.cd.GUILD_CAP_MODAL_UPSELL,
            title: i.Z.Messages.GUILD_CAP_UPSELL_MODAL_TITLE,
            body: s < M.DZw ? i.Z.Messages.GUILD_CAP_UPSELL_MODAL_NEAR_LIMIT_BODY.format({
                guildCount: s,
                onAndMore: f,
                newBadgeHook: u
            }) : i.Z.Messages.GUILD_CAP_UPSELL_MODAL_AT_LIMIT_BODY.format({
                onAndMore: f,
                newBadgeHook: u
            }),
            context: s < M.DZw ? i.Z.Messages.GUILD_CAP_UPSELL_MODAL_NEAR_LIMIT_CONTEXT.format({ guildCount: s }) : i.Z.Messages.GUILD_CAP_UPSELL_MODAL_AT_LIMIT_CONTEXT,
            glowUp: i.Z.Messages.GUILD_CAP_UPSELL_MODAL_GLOW_UP.format({ onAndMore: f }),
            ...d
        })
    });
}
