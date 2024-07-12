n.d(l, {
  I: function() {
return g;
  }
});
var t = n(735250),
  i = n(470079),
  r = n(442837),
  a = n(481060),
  s = n(16084),
  u = n(558381),
  o = n(821849),
  d = n(106976),
  c = n(488915),
  m = n(171246),
  p = n(509545),
  f = n(55563),
  v = n(551428),
  E = n(937615),
  N = n(147496),
  h = n(519896),
  C = n(981631),
  I = n(689938);

function g(e) {
  i.useEffect(() => {
if (null != e)
  (0, s.jU)(e), (0, o.GZ)(e), (0, u.km)(e);
  }, [e]);
  let l = (0, r.e7)([f.Z], () => null != e ? f.Z.get(e) : void 0, [e]),
n = (0, r.e7)([p.Z], () => null != e ? p.Z.getForSKU(e) : void 0, [e]),
g = i.useMemo(() => null != n ? n.map(e => e.id)[0] : void 0, [n]),
x = (0, r.e7)([v.Z], () => null != e ? v.Z.getForSKU(e) : void 0, [e]);
  i.useEffect(() => {
if (null != g)
  (0, d.vY)(g);
  }, [g]);
  let S = null == l ? void 0 : l.applicationId,
j = (0, r.e7)([c.Z], () => null != S ? c.Z.getSubscriptionGroupListingForApplication(S) : null, [S]),
T = i.useCallback(() => {
  if ((null == l ? void 0 : l.applicationId) == null || (null == l ? void 0 : l.id) == null || (null == j ? void 0 : j.id) == null || (null == j ? void 0 : j.sku_flags) == null)
    return null;
  (0, a.openModal)(e => {
    let {
      onClose: n,
      transitionState: i
    } = e;
    return (0, t.jsx)(h.SubscriptionDetailsModal, {
      appId: l.applicationId,
      groupListingId: j.id,
      groupListingType: (0, m.KW)(j.sku_flags) ? 'user' : 'guild',
      onClose: n,
      skuId: l.id,
      transitionState: i
    });
  });
}, [
  null == l ? void 0 : l.applicationId,
  null == l ? void 0 : l.id,
  null == j ? void 0 : j.id,
  null == j ? void 0 : j.sku_flags
]),
_ = i.useCallback(() => {
  if (null == l)
    return null;
  (0, a.openModal)(e => {
    let {
      onClose: n,
      transitionState: i
    } = e;
    return (0, t.jsx)(N.ItemDetailsModal, {
      appId: l.applicationId,
      skuId: l.id,
      onClose: n,
      transitionState: i
    });
  });
}, [l]);
  if (null != l && null != x && (null == l || l.type !== C.epS.SUBSCRIPTION || null != j)) {
if (null == e || null != l && !l.available)
  return {
    disabled: !0,
    label: I.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
  };
if (l.type === C.epS.SUBSCRIPTION) {
  if (null == n || 0 === n.length)
    return {
      disabled: !0,
      label: I.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
    };
  let e = n[0];
  return {
    disabled: !1,
    label: I.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
      skuName: l.name,
      price: (0, E.T4)(e.price, e.currency)
    }),
    onClick: T
  };
}
return null == l.price ? {
  disabled: !0,
  label: I.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
} : {
  disabled: !1,
  label: I.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
    skuName: l.name,
    price: (0, E.T4)(l.price.amount, l.price.currency)
  }),
  onClick: _
};
  }
}