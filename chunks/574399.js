"use strict";
n.r(t), n.d(t, {
  useLoadStoreListingDetails: function() {
    return N
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  u = n("442837"),
  i = n("481060"),
  o = n("16084"),
  s = n("558381"),
  r = n("821849"),
  d = n("106976"),
  c = n("488915"),
  p = n("171246"),
  m = n("509545"),
  f = n("55563"),
  S = n("147496"),
  C = n("519896"),
  v = n("981631");
let E = "useLoadStoreListingDetailsNotReadyModal";

function N(e) {
  let [t, n] = a.useState(!1);
  a.useEffect(() => {
    null != e && ((0, o.fetchSKU)(e), (0, s.fetchStoreListingForSku)(e), (0, r.fetchSubscriptionPlansForSKU)(e))
  }, [e]);
  let N = (0, u.useStateFromStores)([f.default], () => null != e ? f.default.get(e) : void 0, [e]),
    h = (0, u.useStateFromStores)([m.default], () => null != e ? m.default.getForSKU(e) : void 0, [e]),
    g = a.useMemo(() => null != h ? h.map(e => e.id)[0] : void 0, [h]);
  a.useEffect(() => {
    null != g && (0, d.fetchSubscriptionListingForPlan)(g)
  }, [g]);
  let T = null == N ? void 0 : N.applicationId,
    y = (0, u.useStateFromStores)([c.default], () => null != T ? c.default.getSubscriptionGroupListingForApplication(T) : null, [T]),
    I = a.useCallback(() => {
      if ((null == N ? void 0 : N.applicationId) == null || (null == N ? void 0 : N.id) == null || (null == y ? void 0 : y.id) == null || (null == y ? void 0 : y.sku_flags) == null) return null;
      (0, i.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, l.jsx)(C.SubscriptionDetailsModal, {
          appId: N.applicationId,
          groupListingId: y.id,
          groupListingType: (0, p.isApplicationUserSubscription)(y.sku_flags) ? "user" : "guild",
          onClose: t,
          skuId: N.id,
          transitionState: n
        })
      })
    }, [null == N ? void 0 : N.applicationId, null == N ? void 0 : N.id, null == y ? void 0 : y.id, null == y ? void 0 : y.sku_flags]),
    x = a.useCallback(() => {
      if (null == N) return null;
      (0, i.openModal)(e => {
        let {
          onClose: t,
          transitionState: n
        } = e;
        return (0, l.jsx)(S.ItemDetailsModal, {
          appId: N.applicationId,
          skuId: N.id,
          onClose: t,
          transitionState: n
        })
      })
    }, [N]),
    O = null == N || null != N && N.type === v.SKUTypes.SUBSCRIPTION && null == y,
    j = a.useCallback(() => {
      n(!0), (0, i.openModal)(() => (0, l.jsx)(i.Spinner, {}), {
        modalKey: E
      })
    }, []);
  if (a.useEffect(() => {
      t && !O && ((0, i.closeModal)(E), n(!1), N.type === v.SKUTypes.SUBSCRIPTION ? I() : x())
    }, [O, t, I, x, null == N ? void 0 : N.type]), null != e && (null == N || N.available)) return O ? j : N.type === v.SKUTypes.SUBSCRIPTION ? I : x
}