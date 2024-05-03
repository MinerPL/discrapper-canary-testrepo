"use strict";
n.r(t), n.d(t, {
  openIAPPurchaseModal: function() {
    return S
  },
  openSKUPaymentModal: function() {
    return A
  }
});
var s = n("735250");
n("470079");
var a = n("512722"),
  l = n.n(a),
  i = n("481060"),
  r = n("570140"),
  o = n("355467"),
  u = n("558381"),
  d = n("821849"),
  c = n("15640"),
  f = n("724870"),
  E = n("87484"),
  _ = n("928518"),
  m = n("106976"),
  T = n("689011"),
  I = n("853872"),
  p = n("55563"),
  h = n("981631");

function N() {
  let e = _.default.getWindow(h.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
  return null == e || e.closed ? i.DEFAULT_MODAL_CONTEXT : i.POPOUT_MODAL_CONTEXT
}
async function S(e) {
  let {
    applicationId: t,
    skuId: n,
    initialPlanId: a,
    analyticsLocations: i,
    analyticsLocationObject: r
  } = e, o = p.default.get(n);
  if (null == o) {
    let e = (await (0, u.fetchAllStoreListingsForApplication)(t)).find(e => e.sku.id === n);
    l()(null != e, "Could not find store listing for sku"), e.sku.type === h.SKUTypes.SUBSCRIPTION_GROUP && await (0, m.fetchAllSubscriptionListingsDataForApplication)(t, e.id)
  }
  o = null != o ? o : p.default.get(n), l()(null != o && o.applicationId === t, "SKU must belong to application"), o.type === h.SKUTypes.SUBSCRIPTION && !(0, c.getSubscriptionPlansLoaded)([o.id]) && await (0, d.fetchSubscriptionPlansForSKU)(o.id);
  let _ = N();
  if (o.type !== h.SKUTypes.SUBSCRIPTION) return new Promise((e, s) => {
    (0, E.default)({
      applicationId: t,
      skuId: n,
      analyticsLocationObject: r,
      analyticsLocations: i,
      contextKey: _,
      onComplete: t => {
        var n;
        e(null !== (n = null == t ? void 0 : t.entitlements) && void 0 !== n ? n : [])
      },
      onClose: e => {
        !e && s()
      }
    })
  });
  await

  function(e, t, n, a, l) {
    return (0, f.openActivityApplicationPaymentModal)({
      applicationId: e,
      skuId: t,
      initialPlanId: n,
      analyticsLocationObject: a,
      analyticsLocations: l,
      renderHeader: (e, t, n) => (0, s.jsx)(T.PurchaseHeader, {
        step: n,
        onClose: () => t(!1)
      })
    })
  }(t, n, a, r, i)
}
let C = {
  isIAP: !1,
  context: h.AppContext.APP,
  promotionId: null,
  isGift: !1
};

function A(e, t, a) {
  let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    u = Promise.resolve();
  !I.default.hasFetchedPaymentSources && (u = o.fetchPaymentSources());
  let {
    isIAP: d,
    context: c,
    promotionId: f,
    isGift: E
  } = {
    ...C,
    ...l
  }, _ = N();
  return u.then(() => new Promise((l, o) => {
    r.default.dispatch({
      type: "SKU_PURCHASE_MODAL_OPEN",
      applicationId: e,
      skuId: t,
      isIAP: d,
      isGift: E,
      analyticsLocation: a,
      promotionId: f,
      context: c,
      resolve: l,
      reject: o
    }), (0, i.openModalLazy)(async () => {
      let {
        default: a
      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("440"), n.e("62511"), n.e("20177"), n.e("83385")]).then(n.bind(n, "282574"));
      return n => {
        let {
          onClose: l,
          ...i
        } = n;
        return (0, s.jsx)(a, {
          ...i,
          onClose: function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            r.default.dispatch({
              type: "SKU_PURCHASE_MODAL_CLOSE",
              error: e
            }), l()
          },
          applicationId: e,
          skuId: t,
          appContext: c
        })
      }
    }, {
      contextKey: _
    })
  }))
}