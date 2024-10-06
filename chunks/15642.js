n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(16474),
    l = n(934415),
    r = n(834129),
    o = n(981631),
    c = n(163809);
function d(e) {
    let { giftIntentType: t, recipientUser: n, showSecondaryCta: d, channel: u } = e;
    return (0, i.jsx)(r.Z, {
        contentClassName: c.messageContentContainer,
        iconContainerClassName: c.iconContainer,
        iconNode: (0, i.jsx)(a.BellIcon, { colorClass: c.icon }),
        children: (0, i.jsx)(s.Z, {
            giftIntentType: t,
            premiumGiftIntentCardType: s.U.SYSTEM_MESSAGE,
            recipientUser: n,
            analyticsPage: (0, l.mE)(u),
            analyticsSection: o.jXE.CHANNEL,
            showSecondaryCta: d
        })
    });
}
