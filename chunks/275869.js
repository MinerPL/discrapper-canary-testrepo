t.r(n),
    t.d(n, {
        default: function () {
            return d;
        }
    });
var s = t(735250);
t(470079);
var i = t(481060),
    a = t(923298),
    r = t(63063),
    u = t(981631),
    l = t(689938);
function d(e) {
    let { listing: n, transitionState: t, onClose: d, ...o } = e;
    return (0, s.jsx)(a.Z, {
        sku_id: n.id,
        sku_name: n.name,
        guild_id: n.guild_id,
        header: l.Z.Messages.GUILD_SHOP_REPORT_MODAL_HEADER.format({ listingName: n.name }),
        transitionState: t,
        onClose: d,
        ...o,
        children: (0, s.jsx)(i.Text, {
            variant: 'text-md/normal',
            children: l.Z.Messages.GUILD_SHOP_REPORT_MODAL_BODY.format({
                listingName: n.name,
                monetizationTermsUrl: r.Z.getArticleURL(u.BhN.CREATOR_TERMS),
                communityGuidelinesUrl: u.EYA.GUIDELINES
            })
        })
    });
}
