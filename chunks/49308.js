t.d(n, {
    x: function () {
        return x;
    }
});
var i = t(735250), a = t(470079), r = t(512722), o = t.n(r), s = t(399606), l = t(607070), c = t(597688), d = t(624377), u = t(530618), f = t(331042), p = t(372654), _ = t(987209), m = t(598), C = t(179118), b = t(614277), g = t(698708);
function v(e) {
    let {
            handleClose: n,
            confettiCanvas: t,
            hideConfetti: a = !1,
            analyticsLocations: r
        } = e, {
            skusById: l,
            selectedSkuId: d,
            application: u
        } = (0, m.usePaymentContext)(), p = (0, s.e7)([c.Z], () => c.Z.getProduct(d));
    o()(null != d, 'Expected selectedSkuId'), o()(null != u, 'Expected application');
    let _ = l[d];
    return (o()(null != _, 'Expected sku'), null == p) ? null : (0, i.jsxs)(b.C3, {
        children: [
            (0, i.jsx)(g.Z, {}),
            (0, i.jsx)(f.CollectiblesCollectedModalInner, {
                product: p,
                onClose: n,
                confettiCanvas: t,
                analyticsLocations: r,
                hideConfetti: a
            })
        ]
    });
}
function x(e) {
    let {
            isGift: n,
            giftCode: t,
            selectedGiftStyle: r,
            hasSentMessage: o,
            giftRecipient: f,
            giftMessageError: b,
            isSendingMessage: g
        } = (0, _.wD)(), x = (0, s.e7)([l.Z], () => l.Z.useReducedMotion), h = a.useRef(null), {selectedSkuId: E} = (0, m.usePaymentContext)(), T = (0, s.e7)([c.Z], () => c.Z.getProduct(E)), {confettiColors: I} = (0, d.Z)(null == T ? void 0 : T.styles);
    return n ? (0, i.jsxs)('div', {
        ref: h,
        children: [
            (0, i.jsx)(C.Z, {
                giftCode: t,
                onClose: e.handleClose,
                selectedGiftStyle: r,
                hasSentMessage: o,
                giftRecipient: f,
                giftMessageError: b,
                isSendingMessage: g
            }),
            !e.hideConfetti && !x && (0, i.jsx)(u.Z, {
                confettiTarget: h.current,
                confettiCanvas: e.confettiCanvas,
                sprites: (0, p.vK)(null == T ? void 0 : T.categorySkuId),
                colors: null == I ? void 0 : I.map(e => e.toHexString())
            })
        ]
    }) : (0, i.jsx)(v, { ...e });
}
