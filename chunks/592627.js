n.d(s, {
    Z: function () {
        return x;
    }
});
var t = n(735250);
n(470079);
var r = n(481060),
    i = n(906732),
    l = n(832149),
    a = n(600164),
    o = n(857039),
    C = n(515593),
    d = n(598),
    c = n(614277),
    u = n(474936),
    _ = n(689938),
    p = n(744078);
function x(e) {
    let { onClose: s, halloweenDecoPurchase: n } = e,
        { selectedPlan: x } = (0, d.usePaymentContext)(),
        { analyticsLocations: h } = (0, i.ZP)();
    return (0, o.Z)({ location: 'Gift purchase confirmation' }) && (null == x ? void 0 : x.skuId) === u.Si.TIER_2 && null != n
        ? (0, t.jsx)(c.O3, {
              children: (0, t.jsx)(r.ModalFooter, {
                  align: a.Z.Align.CENTER,
                  children: (0, t.jsxs)('div', {
                      className: p.halloweenFooter,
                      children: [
                          (0, t.jsx)(C.Z, { size: r.AvatarSizes.SIZE_32 }),
                          (0, t.jsx)(r.Button, {
                              onClick: () => {
                                  s(),
                                      (0, l.Z)({
                                          product: n,
                                          analyticsLocations: h
                                      });
                              },
                              children: _.Z.Messages.NITROWEEN_GIFT_CONFIRMATION_CTA
                          })
                      ]
                  })
              })
          })
        : null;
}
