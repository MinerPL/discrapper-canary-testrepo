t.d(n, {
    I: function () {
        return E;
    }
}),
    t(789020);
var l = t(735250),
    i = t(470079),
    a = t(442837),
    r = t(481060),
    o = t(16084),
    s = t(558381),
    c = t(821849),
    u = t(106976),
    d = t(171246),
    m = t(509545),
    f = t(55563),
    _ = t(551428),
    p = t(937615),
    C = t(147496),
    h = t(519896),
    I = t(981631),
    x = t(689938);
function E(e) {
    i.useEffect(() => {
        if (null != e) (0, o.$N)('', e), (0, s.km)(e);
    }, [e]);
    let n = (0, a.e7)([f.Z], () => (null != e ? f.Z.get(e) : void 0), [e]);
    i.useEffect(() => {
        (null == n ? void 0 : n.type) === I.epS.SUBSCRIPTION && (0, c.GZ)(n.id);
    }, [n]);
    let t = (0, a.Wu)([m.Z], () => (null != e ? m.Z.getForSKU(e) : []), [e]),
        E = i.useMemo(() => (null != t ? t.map((e) => e.id)[0] : void 0), [t]),
        v = (0, a.e7)([_.Z], () => (null != e ? _.Z.getForSKU(e) : void 0), [e]);
    i.useEffect(() => {
        if (null != E) (0, u.vY)(E);
    }, [E]);
    let N = (0, a.e7)([f.Z], () => (null != e ? f.Z.getParentSKU(e) : void 0), [e]),
        T = i.useCallback(() => {
            if ((null == n ? void 0 : n.applicationId) == null || (null == n ? void 0 : n.id) == null || (null == N ? void 0 : N.id) == null || (null == n ? void 0 : n.flags) == null) return null;
            (0, r.openModal)((e) => {
                let { onClose: t, transitionState: i } = e;
                return (0, l.jsx)(h.SubscriptionDetailsModal, {
                    appId: n.applicationId,
                    groupListingId: N.id,
                    subscriptionType: (0, d.KW)(n.flags) ? 'user' : 'guild',
                    onClose: t,
                    skuId: n.id,
                    transitionState: i
                });
            });
        }, [null == n ? void 0 : n.applicationId, null == n ? void 0 : n.id, null == N ? void 0 : N.id, null == n ? void 0 : n.flags]),
        b = i.useCallback(() => {
            if (null == n) return null;
            (0, r.openModal)((e) => {
                let { onClose: t, transitionState: i } = e;
                return (0, l.jsx)(C.ItemDetailsModal, {
                    appId: n.applicationId,
                    skuId: n.id,
                    onClose: t,
                    transitionState: i
                });
            });
        }, [n]);
    if (null != n && null != v && (null == n || n.type !== I.epS.SUBSCRIPTION || null != N)) {
        if (null == e || (null != n && !n.available))
            return {
                disabled: !0,
                label: x.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
            };
        if (n.type === I.epS.SUBSCRIPTION) {
            if (null == t || 0 === t.length)
                return {
                    disabled: !0,
                    label: x.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
                };
            let e = t[0];
            return {
                disabled: !1,
                label: x.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                    skuName: n.name,
                    price: (0, p.T4)(e.price, e.currency)
                }),
                onClick: T
            };
        }
        return null == n.price
            ? {
                  disabled: !0,
                  label: x.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
              }
            : {
                  disabled: !1,
                  label: x.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                      skuName: n.name,
                      price: (0, p.T4)(n.price.amount, n.price.currency)
                  }),
                  onClick: b
              };
    }
}
