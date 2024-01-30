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
var l = n("627445"),
  a = n.n(l),
  i = n("77078"),
  r = n("913144"),
  o = n("850068"),
  u = n("427495"),
  d = n("73961"),
  c = n("465527"),
  f = n("55620"),
  E = n("775433"),
  _ = n("524503"),
  T = n("333955"),
  I = n("308592"),
  m = n("846286"),
  N = n("509167"),
  p = n("292687"),
  A = n("929479"),
  S = n("697218"),
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
      entitlements: l
    } = e;
    return (0, d.openPurchaseConfirmationModal)(n, s, l, {
      context: t
    })
  })
}

function L() {
  let e = p.default.getWindow(O.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
    t = null != e && !e.closed;
  return t ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
}
async function v(e) {
  let {
    applicationId: t,
    skuId: n,
    initialPlanId: l,
    openPremiumPaymentModal: i,
    analyticsLocations: r,
    analyticsLocationObject: o,
    context: d
  } = e, c = g.default.get(n);
  if (null == c) {
    let e = await (0, f.fetchAllStoreListingsForApplication)(t),
      s = e.find(e => e.sku.id === n);
    a(null != s, "Could not find store listing for sku"), s.sku.type === O.SKUTypes.SUBSCRIPTION_GROUP && await (0, _.fetchAllSubscriptionListingsDataForApplication)(t, s.id)
  }(null == (c = null != c ? c : g.default.get(n)) ? void 0 : c.type) === O.SKUTypes.SUBSCRIPTION && !(0, I.getSubscriptionPlansLoaded)([c.id]) && await (0, E.fetchSubscriptionPlansForSKU)(c.id);
  let p = L(),
    C = S.default.getCurrentUser();
  if (null != c && c.premium) {
    if (M.default.canInstallPremiumApplications(C)) return R(c, d);
    await u.openModal(d), await

    function(e, t, n, s, l) {
      let a = h.default.getPremiumSubscription(),
        i = {
          id: e.id,
          applicationId: e.applicationId
        };
      if (null != a) {
        let e = M.default.getClosestUpgrade(a.planId);
        if (null == e) return Promise.reject(Error("Could not find premium upgrade."));
        let t = {
          initialPlanId: e,
          followupSKUInfo: i,
          analyticsLocations: s,
          analyticsObject: n
        };
        switch (l) {
          case O.AppContext.APP:
            return A.default.openPremiumPaymentModalInApp(t);
          case O.AppContext.OVERLAY:
            return A.default.openPremiumPaymentModalInOverlay(t);
          default:
            throw Error("Unexpected app context: ".concat(l))
        }
      }
      return t()
    }(c, i, o, r, d), await R(c, d)
  } else {
    if (null == c || c.type !== O.SKUTypes.SUBSCRIPTION) return new Promise(async (e, s) => {
      await (0, N.default)({
        applicationId: t,
        skuId: n,
        analyticsLocationObject: o,
        analyticsLocations: r,
        contextKey: p,
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

    function(e, t, n, l, a) {
      return (0, m.openActivityApplicationPaymentModal)({
        applicationId: e,
        skuId: t,
        initialPlanId: n,
        analyticsLocationObject: l,
        analyticsLocations: a,
        renderHeader: (e, t, n) => (0, s.jsx)(T.PurchaseHeader, {
          step: n,
          onClose: () => t(!1)
        })
      })
    }(t, n, l, o, r)
  }
}
let P = {
  isIAP: !1,
  context: O.AppContext.APP,
  promotionId: null,
  isGift: !1
};

function D(e, t, l) {
  let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    u = Promise.resolve();
  !C.default.hasFetchedPaymentSources && (u = o.fetchPaymentSources());
  let {
    isIAP: d,
    context: c,
    promotionId: f,
    isGift: E
  } = {
    ...P,
    ...a
  }, _ = L();
  return u.then(() => new Promise((a, o) => {
    r.default.dispatch({
      type: "SKU_PURCHASE_MODAL_OPEN",
      applicationId: e,
      skuId: t,
      isIAP: d,
      isGift: E,
      analyticsLocation: l,
      promotionId: f,
      context: c,
      resolve: a,
      reject: o
    }), (0, i.openModalLazy)(async () => {
      let {
        default: l
      } = await n.el("787598").then(n.bind(n, "787598"));
      return n => {
        let {
          onClose: a,
          ...i
        } = n;
        return (0, s.jsx)(l, {
          ...i,
          onClose: function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            r.default.dispatch({
              type: "SKU_PURCHASE_MODAL_CLOSE",
              error: e
            }), a()
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