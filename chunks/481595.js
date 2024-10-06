t.d(n, {
    Z: function () {
        return B;
    }
}),
    t(789020);
var i = t(735250),
    a = t(470079),
    r = t(512722),
    s = t.n(r),
    l = t(742280),
    o = t(399606),
    c = t(481060),
    u = t(16084),
    d = t(224550),
    _ = t(609194),
    p = t(275850),
    m = t(672971),
    I = t(115130),
    f = t(925329),
    E = t(653798),
    x = t(314182),
    N = t(251660),
    S = t(246946),
    T = t(351402),
    h = t(853872),
    b = t(855775),
    g = t(695103),
    P = t(4912),
    v = t(630388),
    A = t(669079),
    M = t(937615),
    C = t(987209),
    y = t(598),
    R = t(45572),
    O = t(119226),
    L = t(981631),
    j = t(689938),
    Z = t(679640);
function D(e) {
    let { sku: n, skuPricePreview: t } = e;
    s()(null != t.amount, 'SKU must have a price set.');
    let a = t.amount - t.tax;
    return !t.tax_inclusive && t.tax > 0
        ? (0, i.jsxs)(E.PO, {
              className: Z.invoice,
              children: [
                  (0, i.jsx)(E.R$, {
                      label: n.name,
                      value: (0, M.T4)(a, t.currency),
                      className: Z.subscriptionCostRow
                  }),
                  (0, i.jsx)(E.R$, {
                      label: j.Z.Messages.PURCHASE_REVIEW_TAX_LABEL,
                      value: (0, M.T4)(t.tax, t.currency),
                      className: Z.subscriptionCostRow
                  }),
                  (0, i.jsx)(E.KU, {}),
                  (0, i.jsx)(E.Ji, {
                      label: j.Z.Messages.BILLING_INVOICE_TOTAL.format(),
                      value: (0, M.T4)(t.amount, t.currency),
                      className: Z.subscriptionCostRow
                  })
              ]
          })
        : (0, i.jsx)(E.PO, {
              className: Z.invoice,
              children: (0, i.jsx)(E.R$, {
                  label: n.name,
                  value: (0, M.T4)(t.amount, t.currency),
                  className: Z.subscriptionCostRow
              })
          });
}
function w(e) {
    let { application: n, sku: t, isEmbeddedIAP: a } = e;
    return !0 !== a
        ? null
        : (0, i.jsxs)('div', {
              className: Z.skuHeading,
              children: [
                  (0, i.jsx)(f.Z, { game: n }),
                  (0, i.jsx)(c.Heading, {
                      variant: 'heading-lg/bold',
                      className: Z.skuHeadingText,
                      children: t.name
                  })
              ]
          });
}
function B(e) {
    let { hasLegalTermsFlash: n, legalTermsNodeRef: t, onPaymentSourceChange: r, handlePaymentSourceAdd: f } = e,
        { application: M, purchaseState: B, paymentSources: G, paymentSourceId: F, setHasAcceptedTerms: U, skusById: k, skuPricePreviewsById: H, selectedSkuId: W, isEmbeddedIAP: Y, purchaseType: V, purchasePreviewError: K, devShelfFetchState: z } = (0, y.usePaymentContext)(),
        { isGift: X, giftRecipient: q } = (0, C.wD)(),
        J = X && (0, A.pO)(q),
        { defaultPaymentSourceId: Q, hasFetchedPaymentSources: $ } = (0, o.cj)([h.Z], () => ({
            defaultPaymentSourceId: h.Z.defaultPaymentSourceId,
            hasFetchedPaymentSources: h.Z.hasFetchedPaymentSources
        }));
    s()(null != W, 'Expected selectedSkuId');
    let ee = k[W],
        en = H[W],
        et = null != F ? F : b.c,
        ei = null != en ? en[et] : null;
    s()(null != ee, 'SKU must exist and be fetched.'), s()(null != M, 'Application must exist.');
    let ea = (0, o.e7)([I.Z, g.Z], () => g.Z.inTestModeForApplication(M.id) || I.Z.inDevModeForApplication(M.id), [M.id]),
        er = (0, o.e7)([S.Z], () => S.Z.enabled),
        es = l.M.EEA_COUNTRIES.has(T.Z.ipCountryCodeWithFallback),
        el = B === R.A.PURCHASING || B === R.A.COMPLETED,
        eo = null != F ? G[F].type : null;
    return (
        a.useEffect(() => {
            $ && F === Q && Q !== b.c && null == ei && (0, u.x2)(ee.applicationId, ee.id, Q, { isGift: X });
        }, [Q, $, F, ee.applicationId, ee.id, ei, X]),
        (0, i.jsxs)('div', {
            className: Z.stepBody,
            children: [
                ea
                    ? (0, i.jsx)(
                          _.Z,
                          {
                              icon: (0, c.makeIconCompat)(P.Z),
                              iconSize: _.Z.Sizes.SMALL,
                              color: _.Z.Colors.WARNING,
                              className: Z.errorBlock,
                              children: j.Z.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                          },
                          'TEST_MODE'
                      )
                    : null,
                (0, v.yE)(M.flags, L.udG.EMBEDDED) && z === I.O.ERROR
                    ? (0, i.jsx)(
                          _.Z,
                          {
                              icon: (0, c.makeIconCompat)(P.Z),
                              iconSize: _.Z.Sizes.SMALL,
                              color: _.Z.Colors.ERROR,
                              className: Z.errorBlock,
                              children: j.Z.Messages.APPLICATION_STORE_PURCHASE_DEV_SHELF_FETCH_FAILED
                          },
                          'DEV_SHELF_ERROR'
                      )
                    : null,
                (0, i.jsx)(w, {
                    application: M,
                    sku: ee,
                    isEmbeddedIAP: Y
                }),
                J && (0, i.jsx)(O.Z, { sku: ee }),
                null != q ? (0, i.jsx)(N.s, { giftRecipient: q }) : null,
                (0, i.jsx)(c.FormTitle, {
                    tag: c.FormTitleTags.H5,
                    children: X ? j.Z.Messages.PREMIUM_GIFTING_BUTTON : j.Z.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
                }),
                null != ei
                    ? (0, i.jsx)(D, {
                          sku: ee,
                          skuPricePreview: ei
                      })
                    : null == K
                      ? (0, i.jsx)(c.Spinner, {
                            type: c.Spinner.Type.WANDERING_CUBES,
                            className: Z.invoiceSpinner
                        })
                      : (0, i.jsx)(E.PO, {
                            className: Z.invoice,
                            children: (0, i.jsx)(E.R$, {
                                label: ee.name,
                                value: null,
                                className: Z.subscriptionCostRow
                            })
                        }),
                (0, i.jsxs)('div', {
                    className: Z.paymentSourceWrapper,
                    children: [
                        (0, i.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            children: j.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }),
                        (0, i.jsx)(p.Z, {
                            paymentSources: Object.values(G),
                            selectedPaymentSourceId: F,
                            onChange: r,
                            onPaymentSourceAdd: f,
                            hidePersonalInformation: er
                        })
                    ]
                }),
                (0, i.jsx)(x.Z, {
                    isActive: n,
                    ref: t,
                    children: (0, i.jsx)(m.Z, {
                        onChange: U,
                        forceShow: !0,
                        showWithdrawalWaiver: es,
                        disabled: el,
                        subscriptionPlan: null,
                        finePrintClassname: Z.fineprint,
                        purchaseType: V,
                        isGift: X,
                        checkboxLabel: ee.productLine === L.POd.COLLECTIBLES ? j.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({ paidURL: L.EYA.PAID_TERMS }) : void 0,
                        finePrint: (0, i.jsx)(d.Z, {
                            paymentSourceType: eo,
                            isEmbeddedIAP: Y,
                            purchaseType: V,
                            productLine: ee.productLine,
                            isGift: X
                        })
                    })
                })
            ]
        })
    );
}
