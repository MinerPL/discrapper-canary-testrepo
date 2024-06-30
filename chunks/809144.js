s.d(n, {
    P: function () {
        return u;
    }
});
var l = s(735250);
s(470079);
var i = s(481060), t = s(609194), r = s(669079), a = s(987209), c = s(689938), o = s(130842);
function u(e) {
    let {
            giftMessage: n = c.Z.Messages.PREMIUM_PAYMENT_IS_GIFT
        } = e, {
            isGift: s,
            giftRecipient: u
        } = (0, a.wD)();
    return !s || (0, r.pO)(u) ? null : (0, l.jsx)(t.Z, {
        className: o.paymentNote,
        iconSize: t.Z.Sizes.SMALL,
        icon: i.GiftIcon,
        color: null == n ? t.Z.Colors.PRIMARY : t.Z.Colors.SECONDARY,
        children: n
    });
}
