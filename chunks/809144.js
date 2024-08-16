t.d(n, {
    P: function () {
        return u;
    }
});
var i = t(735250);
t(470079);
var a = t(481060),
    r = t(609194),
    s = t(669079),
    l = t(987209),
    o = t(689938),
    c = t(957304);
function u(e) {
    let { giftMessage: n = o.Z.Messages.PREMIUM_PAYMENT_IS_GIFT } = e,
        { isGift: t, giftRecipient: u } = (0, l.wD)();
    return !t || (0, s.pO)(u)
        ? null
        : (0, i.jsx)(r.Z, {
              className: c.paymentNote,
              iconSize: r.Z.Sizes.SMALL,
              icon: a.GiftIcon,
              color: null == n ? r.Z.Colors.PRIMARY : r.Z.Colors.SECONDARY,
              children: n
          });
}
