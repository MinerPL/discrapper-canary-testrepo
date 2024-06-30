s.d(n, {
    Z: function () {
        return b;
    }
});
var l = s(735250), i = s(470079), t = s(512722), r = s.n(t), a = s(742280), c = s(399606), o = s(481060), u = s(224550), d = s(609194), _ = s(275850), m = s(672971), I = s(115130), E = s(653798), p = s(314182), N = s(251660), T = s(246946), S = s(351402), x = s(855775), h = s(695103), P = s(366695), A = s(4912), v = s(669079), f = s(937615), M = s(987209), g = s(598), C = s(45572), R = s(119226), O = s(981631), L = s(689938), j = s(424416);
function y(e) {
    let {
        sku: n,
        skuPricePreview: s
    } = e;
    r()(null != s.amount, 'SKU must have a price set.');
    let i = s.amount - s.tax;
    return !s.tax_inclusive && s.tax > 0 ? (0, l.jsxs)(E.PO, {
        className: j.invoice,
        children: [
            (0, l.jsx)(E.R$, {
                label: n.name,
                value: (0, f.T4)(i, s.currency),
                className: j.subscriptionCostRow
            }),
            (0, l.jsx)(E.R$, {
                label: L.Z.Messages.PURCHASE_REVIEW_TAX_LABEL,
                value: (0, f.T4)(s.tax, s.currency),
                className: j.subscriptionCostRow
            }),
            (0, l.jsx)(E.KU, {}),
            (0, l.jsx)(E.Ji, {
                label: L.Z.Messages.BILLING_INVOICE_TOTAL.format(),
                value: (0, f.T4)(s.amount, s.currency),
                className: j.subscriptionCostRow
            })
        ]
    }) : (0, l.jsx)(E.PO, {
        className: j.invoice,
        children: (0, l.jsx)(E.R$, {
            label: n.name,
            value: (0, f.T4)(s.amount, s.currency),
            className: j.subscriptionCostRow
        })
    });
}
function Z(e) {
    let {
        application: n,
        sku: s,
        isEmbeddedIAP: i
    } = e;
    return !0 !== i ? null : (0, l.jsxs)('div', {
        className: j.skuHeading,
        children: [
            (0, l.jsx)(P.Z, { game: n }),
            (0, l.jsx)(o.Heading, {
                variant: 'heading-lg/bold',
                className: j.skuHeadingText,
                children: s.name
            })
        ]
    });
}
function b(e) {
    let {
            hasLegalTermsFlash: n,
            legalTermsNodeRef: s,
            onPaymentSourceChange: t,
            handlePaymentSourceAdd: P
        } = e, {
            application: f,
            purchaseState: b,
            paymentSources: D,
            paymentSourceId: G,
            setHasAcceptedTerms: U,
            skusById: F,
            skuPricePreviewsById: w,
            selectedSkuId: B,
            isEmbeddedIAP: H,
            purchaseType: k,
            purchasePreviewError: W
        } = (0, g.usePaymentContext)(), {
            isGift: Y,
            giftRecipient: K
        } = (0, M.wD)(), V = Y && (0, v.pO)(K);
    r()(null != B, 'Expected selectedSkuId');
    let z = F[B], X = w[B], J = null != G ? G : x.c, q = null != X ? X[J] : null;
    r()(null != z, 'SKU must exist and be fetched.'), r()(null != f, 'Application must exist.');
    let Q = (0, c.e7)([
            I.Z,
            h.Z
        ], () => h.Z.inTestModeForApplication(f.id) || I.Z.inDevModeForApplication(f.id), [f.id]), $ = (0, c.e7)([T.Z], () => T.Z.enabled), ee = a.M.EEA_COUNTRIES.has(S.Z.ipCountryCodeWithFallback), en = b === C.A.PURCHASING || b === C.A.COMPLETED, es = null != G ? D[G].type : null, el = i.useMemo(() => null != q ? (0, l.jsx)(y, {
            sku: z,
            skuPricePreview: q
        }) : null == W ? (0, l.jsx)(o.Spinner, {
            type: o.Spinner.Type.WANDERING_CUBES,
            className: j.invoiceSpinner
        }) : (0, l.jsx)(E.PO, {
            className: j.invoice,
            children: (0, l.jsx)(E.R$, {
                label: z.name,
                value: null,
                className: j.subscriptionCostRow
            })
        }), [
            W,
            z,
            q
        ]);
    return (0, l.jsxs)('div', {
        className: j.stepBody,
        children: [
            Q && (0, l.jsx)(d.Z, {
                icon: (0, o.makeIconCompat)(A.Z),
                iconSize: d.Z.Sizes.SMALL,
                color: d.Z.Colors.WARNING,
                className: j.errorBlock,
                children: L.Z.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
            }, 'TEST_MODE'),
            (0, l.jsx)(Z, {
                application: f,
                sku: z,
                isEmbeddedIAP: H
            }),
            V && (0, l.jsx)(R.Z, { sku: z }),
            null != K ? (0, l.jsx)(N.s, { giftRecipient: K }) : null,
            (0, l.jsx)(o.FormTitle, {
                tag: o.FormTitleTags.H5,
                children: Y ? L.Z.Messages.PREMIUM_GIFTING_BUTTON : L.Z.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
            }),
            el,
            (0, l.jsxs)('div', {
                className: j.paymentSourceWrapper,
                children: [
                    (0, l.jsx)(o.FormTitle, {
                        tag: o.FormTitleTags.H5,
                        children: L.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                    }),
                    (0, l.jsx)(_.Z, {
                        paymentSources: Object.values(D),
                        selectedPaymentSourceId: G,
                        onChange: t,
                        onPaymentSourceAdd: P,
                        hidePersonalInformation: $
                    })
                ]
            }),
            (0, l.jsx)(p.Z, {
                isActive: n,
                ref: s,
                children: (0, l.jsx)(m.Z, {
                    onChange: U,
                    forceShow: !0,
                    showWithdrawalWaiver: ee,
                    disabled: en,
                    subscriptionPlan: null,
                    finePrintClassname: j.fineprint,
                    purchaseType: k,
                    isGift: Y,
                    checkboxLabel: z.productLine === O.POd.COLLECTIBLES ? L.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({ paidURL: O.EYA.PAID_TERMS }) : void 0,
                    finePrint: (0, l.jsx)(u.Z, {
                        paymentSourceType: es,
                        isEmbeddedIAP: H,
                        purchaseType: k,
                        productLine: z.productLine,
                        isGift: Y
                    })
                })
            })
        ]
    });
}
