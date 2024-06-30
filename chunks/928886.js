t.d(e, {
    U: function () {
        return h;
    }
});
var l = t(735250), u = t(470079), i = t(512722), r = t.n(i), a = t(481060), o = t(479446), s = t(646476), c = t(104494), d = t(639119), _ = t(981632), E = t(798769), f = t(689011), p = t(669079), m = t(987209), T = t(598), M = t(409813), I = t(981631), A = t(474936), v = t(231338), S = t(983525);
function h(n) {
    var e;
    let {
            renderHeader: t,
            referralTrialOfferId: i,
            handleClose: h
        } = n, {
            selectedSkuId: N,
            step: P,
            selectedPlan: R,
            purchaseState: y,
            purchaseType: g,
            selectedSku: C
        } = (0, T.usePaymentContext)(), {
            isGift: L,
            selectedGiftStyle: Z,
            giftRecipient: k
        } = (0, m.wD)(), O = L && (0, p.pO)(k) && P === M.h8.CONFIRM && null != Z && (null == C ? void 0 : C.productLine) !== I.POd.COLLECTIBLES, x = null != t && null != P, U = P !== M.h8.SKU_SELECT && null != N, D = (0, d.N)(i), G = !L && null != D && null != N && A.nG[D.trial_id].skus.includes(N), w = (0, c.Ng)(), b = null == w ? void 0 : null === (e = w.discount) || void 0 === e ? void 0 : e.plan_ids.some(n => A.GP[n].skuId === N), Y = !L && null != w && null != N && b, {enabled: H} = s.ZP.useExperiment({ location: 'PaymentModalHeader' }, { autoTrackExposure: !1 }), W = (0, s.rK)(), j = H && W;
    return u.useMemo(() => {
        if (null == P)
            return;
        let n = null;
        if (O)
            n = (0, l.jsxs)('div', {
                className: S.container,
                children: [
                    (0, l.jsx)(_.Z, {
                        defaultAnimationState: o.S.LOOP,
                        giftStyle: Z,
                        className: S.seasonalGiftBoxHeaderIcon
                    }),
                    (0, l.jsx)(a.ModalCloseButton, {
                        onClick: h,
                        className: S.closeButton
                    })
                ]
            });
        else if (x)
            n = t(null != R ? R : null, h, P);
        else if (g === v.GZ.ONE_TIME)
            n = (0, l.jsx)(f.t, {
                step: P,
                onClose: h
            });
        else if (U)
            r()(N in A.y7, 'invalid sku id: '.concat(N)), n = (0, l.jsx)(E.Z, {
                currentStep: null != P ? P : void 0,
                purchaseState: y,
                premiumType: A.y7[N],
                onClose: h,
                showTrialBadge: G,
                showDiscountBadge: Y,
                isGift: L,
                giftRecipient: k,
                useWinterTheme: j
            });
        return n;
    }, [
        Z,
        h,
        y,
        t,
        R,
        N,
        P,
        G,
        Y,
        O,
        U,
        x,
        g,
        L,
        k,
        j
    ]);
}
