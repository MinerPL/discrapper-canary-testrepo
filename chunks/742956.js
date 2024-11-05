n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(627341);
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(278074),
    o = n(481060),
    s = n(109213),
    c = n(409813),
    d = n(474936),
    u = n(388032),
    m = n(73913);
function h(e) {
    let { step: t, onClose: n, giftingOrigin: r } = e,
        { enabled: h } = s.G.useExperiment({ location: 'CollectiblesGiftPaymentModalHeader' }, { autoTrackExposure: !1 }),
        f = (0, a.EQ)(t)
            .with(c.h8.REVIEW, () => u.intl.string(u.t.JbRd5u))
            .with(c.h8.ADD_PAYMENT_STEPS, () => u.intl.string(u.t.QiGOam))
            .with(c.h8.GIFT_CUSTOMIZATION, () => (h && r === d.Wt.DM_CHANNEL ? u.intl.string(u.t['xU+d9P']) : u.intl.string(u.t['JCFN//'])))
            .with(c.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => u.intl.string(u.t.lDbi6O))
            .with(c.h8.CONFIRM, () => '')
            .otherwise(() => null);
    return null == f
        ? null
        : (0, i.jsxs)(o.ModalHeader, {
              className: l()(m.headerContainerGift),
              separator: t !== c.h8.CONFIRM,
              children: [
                  (0, i.jsx)(o.Heading, {
                      variant: 'heading-lg/semibold',
                      children: f
                  }),
                  (0, i.jsx)(o.ModalCloseButton, {
                      onClick: n,
                      className: m.closeButtonGift
                  })
              ]
          });
}
