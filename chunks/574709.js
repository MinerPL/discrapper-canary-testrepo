n(724458);
var r, i = n(180650), a = n(979554), o = n(442837), s = n(570140), l = n(597688);
function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let c = new Date(2023, 8, 25), d = new Date(2023, 9, 5), _ = () => ({
        categoryItemViews: {
            [i.T.FANTASY]: {
                [a.Z.AVATAR_DECORATION]: c,
                [a.Z.PROFILE_EFFECT]: d
            },
            [i.T.ANIME]: {
                [a.Z.AVATAR_DECORATION]: c,
                [a.Z.PROFILE_EFFECT]: d
            },
            [i.T.BREAKFAST]: {
                [a.Z.AVATAR_DECORATION]: c,
                [a.Z.PROFILE_EFFECT]: d
            },
            [i.T.DISXCORE]: { [a.Z.AVATAR_DECORATION]: c }
        }
    }), E = _();
class f extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        null != e && (E = e);
    }
    getState() {
        return E;
    }
    isItemViewed(e) {
        var t, n;
        let r = null === (t = l.Z.getProduct(e.skuId)) || void 0 === t ? void 0 : t.categorySkuId;
        return null != r && (null === (n = E.categoryItemViews[r]) || void 0 === n ? void 0 : n[e.type]) != null;
    }
    reset() {
        E = _();
    }
}
u(f, 'displayName', 'CollectiblesPersistedStore'), u(f, 'persistKey', 'CollectiblesPersistedStoreV2'), new f(s.Z, {
    COLLECTIBLES_CATEGORY_ITEMS_VIEWED: e => {
        let {
                categories: t,
                itemTypes: n
            } = e, r = new Date();
        return t.reduce((e, t) => {
            let {skuId: i} = t, a = n.reduce((e, t) => {
                    var n;
                    return (null === (n = E.categoryItemViews[i]) || void 0 === n ? void 0 : n[t]) != null ? e : (null == E.categoryItemViews[i] && (E.categoryItemViews[i] = {}), E.categoryItemViews[i][t] = r, !0);
                }, !1);
            return e || a;
        }, !1);
    }
});
