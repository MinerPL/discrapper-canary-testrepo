"use strict";
n.r(t), n.d(t, {
  openIAPPurchaseModal: function() {
    return L
  },
  openSKUPaymentModal: function() {
    return D
  }
}), n("411104");
var s = n("735250");
n("470079");
var a = n("512722"),
  l = n.n(a),
  i = n("481060"),
  r = n("570140"),
  o = n("355467"),
  u = n("341382"),
  d = n("401131"),
  c = n("16084"),
  f = n("558381"),
  E = n("821849"),
  _ = n("15640"),
  T = n("59162"),
  m = n("87484"),
  I = n("928518"),
  p = n("367207"),
  h = n("106976"),
  N = n("689011"),
  S = n("594174"),
  C = n("853872"),
  A = n("78839"),
  g = n("55563"),
  M = n("74538"),
  R = n("981631");

function O(e, t) {
  let {
    applicationId: n,
    id: s
  } = e;
  return c.purchaseSKU(n, s).then(e => {
    let {
      entitlements: a
    } = e;
    return (0, d.openPurchaseConfirmationModal)(n, s, a, {
      context: t
    })
  })
}

function v() {
  let e = I.default.getWindow(R.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
  return null == e || e.closed ? i.DEFAULT_MODAL_CONTEXT : i.POPOUT_MODAL_CONTEXT
}
async function L(e) {
  let {
    applicationId: t,
    skuId: n,
    initialPlanId: a,
    openPremiumPaymentModal: i,
    analyticsLocations: r,
    analyticsLocationObject: o,
    context: d
  } = e, c = g.default.get(n);
  if (null == c) {
    let e = (await (0, f.fetchAllStoreListingsForApplication)(t)).find(e => e.sku.id === n);
    l()(null != e, "Could not find store listing for sku"), e.sku.type === R.SKUTypes.SUBSCRIPTION_GROUP && await (0, h.fetchAllSubscriptionListingsDataForApplication)(t, e.id)
  }
  c = null != c ? c : g.default.get(n), l()(null != c && c.applicationId === t, "SKU must belong to application"), c.type === R.SKUTypes.SUBSCRIPTION && !(0, _.getSubscriptionPlansLoaded)([c.id]) && await (0, E.fetchSubscriptionPlansForSKU)(c.id);
  let I = v(),
    C = S.default.getCurrentUser();
  if (c.premium) {
    if (M.default.canInstallPremiumApplications(C)) return O(c, d);
    await u.openModal(d), await

    function(e, t, n, s, a) {
      let l = A.default.getPremiumSubscription(),
        i = {
          id: e.id,
          applicationId: e.applicationId
        };
      if (null != l) {
        let e = M.default.getClosestUpgrade(l.planId);
        if (null == e) return Promise.reject(Error("Could not find premium upgrade."));
        let t = {
          initialPlanId: e,
          followupSKUInfo: i,
          analyticsLocations: s,
          analyticsObject: n
        };
        switch (a) {
          case R.AppContext.APP:
            return p.default.openPremiumPaymentModalInApp(t);
          case R.AppContext.OVERLAY:
            return p.default.openPremiumPaymentModalInOverlay(t);
          default:
            throw Error("Unexpected app context: ".concat(a))
        }
      }
      return t()
    }(c, i, o, r, d), await O(c, d)
  } else {
    if (c.type !== R.SKUTypes.SUBSCRIPTION) return new Promise(async (e, s) => {
      await (0, m.default)({
        applicationId: t,
        skuId: n,
        analyticsLocationObject: o,
        analyticsLocations: r,
        contextKey: I,
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
      return (0, T.openActivityApplicationPaymentModal)({
        applicationId: e,
        skuId: t,
        initialPlanId: n,
        analyticsLocationObject: a,
        analyticsLocations: l,
        renderHeader: (e, t, n) => (0, s.jsx)(N.PurchaseHeader, {
          step: n,
          onClose: () => t(!1)
        })
      })
    }(t, n, a, o, r)
  }
}
let x = {
  isIAP: !1,
  context: R.AppContext.APP,
  promotionId: null,
  isGift: !1
};

function D(e, t, a) {
  let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    u = Promise.resolve();
  !C.default.hasFetchedPaymentSources && (u = o.fetchPaymentSources());
  let {
    isIAP: d,
    context: c,
    promotionId: f,
    isGift: E
  } = {
    ...x,
    ...l
  }, _ = v();
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
      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("58625"), n.e("14720"), n.e("62511"), n.e("61247"), n.e("20177"), n.e("12464")]).then(n.bind(n, "282574"));
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