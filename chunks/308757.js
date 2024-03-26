"use strict";
n.r(t), n.d(t, {
  openIAPPurchaseModal: function() {
    return v
  },
  openSKUPaymentModal: function() {
    return D
  }
}), n("70102");
var s = n("37983");
n("884691");
var a = n("627445"),
  l = n.n(a),
  i = n("77078"),
  r = n("913144"),
  o = n("850068"),
  u = n("427495"),
  d = n("73961"),
  c = n("465527"),
  E = n("55620"),
  f = n("775433"),
  _ = n("308592"),
  T = n("426380"),
  I = n("509167"),
  m = n("292687"),
  N = n("929479"),
  p = n("927078"),
  S = n("713536"),
  A = n("697218"),
  C = n("357957"),
  h = n("521012"),
  g = n("552712"),
  M = n("719923"),
  O = n("49111");

function R(e, t) {
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

function L() {
  let e = m.default.getWindow(O.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
    t = null != e && !e.closed;
  return t ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
}
async function v(e) {
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
    let e = await (0, E.fetchAllStoreListingsForApplication)(t),
      s = e.find(e => e.sku.id === n);
    l(null != s, "Could not find store listing for sku"), s.sku.type === O.SKUTypes.SUBSCRIPTION_GROUP && await (0, p.fetchAllSubscriptionListingsDataForApplication)(t, s.id)
  }
  l(null != (c = null != c ? c : g.default.get(n)) && c.applicationId === t, "SKU must belong to application"), c.type === O.SKUTypes.SUBSCRIPTION && !(0, _.getSubscriptionPlansLoaded)([c.id]) && await (0, f.fetchSubscriptionPlansForSKU)(c.id);
  let m = L(),
    C = A.default.getCurrentUser();
  if (c.premium) {
    if (M.default.canInstallPremiumApplications(C)) return R(c, d);
    await u.openModal(d), await

    function(e, t, n, s, a) {
      let l = h.default.getPremiumSubscription(),
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
          case O.AppContext.APP:
            return N.default.openPremiumPaymentModalInApp(t);
          case O.AppContext.OVERLAY:
            return N.default.openPremiumPaymentModalInOverlay(t);
          default:
            throw Error("Unexpected app context: ".concat(a))
        }
      }
      return t()
    }(c, i, o, r, d), await R(c, d)
  } else {
    if (c.type !== O.SKUTypes.SUBSCRIPTION) return new Promise(async (e, s) => {
      await (0, I.default)({
        applicationId: t,
        skuId: n,
        analyticsLocationObject: o,
        analyticsLocations: r,
        contextKey: m,
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
        renderHeader: (e, t, n) => (0, s.jsx)(S.PurchaseHeader, {
          step: n,
          onClose: () => t(!1)
        })
      })
    }(t, n, a, o, r)
  }
}
let P = {
  isIAP: !1,
  context: O.AppContext.APP,
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
    promotionId: E,
    isGift: f
  } = {
    ...P,
    ...l
  }, _ = L();
  return u.then(() => new Promise((l, o) => {
    r.default.dispatch({
      type: "SKU_PURCHASE_MODAL_OPEN",
      applicationId: e,
      skuId: t,
      isIAP: d,
      isGift: f,
      analyticsLocation: a,
      promotionId: E,
      context: c,
      resolve: l,
      reject: o
    }), (0, i.openModalLazy)(async () => {
      let {
        default: a
      } = await n.el("787598").then(n.bind(n, "787598"));
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