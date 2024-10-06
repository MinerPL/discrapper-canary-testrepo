n.d(t, {
    r: function () {
        return u;
    },
    u: function () {
        return l;
    }
});
var r = n(674180),
    i = n(994592),
    a = n(652515),
    s = n(550951),
    o = n(981631);
function l(e) {
    let t = (0, a.RF)(null == e ? void 0 : e.id, 'channel_list'),
        n = (0, i.mY)(null == e ? void 0 : e.id),
        l = (0, s.g)(e, 'channel_list'),
        { shouldHideGuildPurchaseEntryPoints: u } = (0, r.uP)(null == e ? void 0 : e.id);
    return null != e && !u && (e.hasFeature(o.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (t && n) || l);
}
function u(e, t) {
    let n = (0, a.C4)(null == e ? void 0 : e.id, 'channel_list'),
        r = (0, i.on)(null == e ? void 0 : e.id, t);
    return null != e && (e.hasFeature(o.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (n && r));
}
