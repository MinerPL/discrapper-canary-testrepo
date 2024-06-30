n.d(t, {
    g: function () {
        return c;
    }
});
var r = n(399606), i = n(704215), a = n(605236), o = n(352981), s = n(496675), l = n(652515), u = n(981631);
function c(e, t) {
    var n;
    let c = (0, l.yV)(t), d = (0, a.wE)(i.z.SERVER_SHOP_PHANTOM_PREVIEW), _ = (0, r.e7)([s.Z], () => null != e && s.Z.can(u.Plq.ADMINISTRATOR, e)), E = null !== (n = null == e ? void 0 : e.hasFeature(u.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) && void 0 !== n && n, f = (0, o.y)(null == e ? void 0 : e.id, 'useGuildShopPreviewVisible'), h = [
            u.oNc.CREATOR_MONETIZABLE,
            u.oNc.CREATOR_MONETIZABLE_PROVISIONAL,
            u.oNc.ROLE_SUBSCRIPTIONS_ENABLED
        ].some(t => (null == e ? void 0 : e.hasFeature(t)) === !0);
    return null != e && _ && !E && h && c && f && !d;
}
