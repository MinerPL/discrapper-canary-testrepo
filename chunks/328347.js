let r;
var i, a, s, o, l = n(442837),
  u = n(570140);
let c = [],
  d = c,
  _ = null,
  E = e => {
d = c, _ = null;
  };
class f extends(o = l.ZP.Store) {
  get analyticsLocations() {
return d;
  }
  get analyticsSource() {
return _;
  }
  get initialProductSkuId() {
return r;
  }
  getAnalytics() {
return {
  analyticsLocations: d,
  analyticsSource: _
};
  }
}
s = 'CollectiblesShopStore', (a = 'displayName') in(i = f) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new f(u.Z, {
  COLLECTIBLES_SHOP_OPEN: e => {
var t, n;
d = null !== (t = e.analyticsLocations) && void 0 !== t ? t : c, _ = null !== (n = e.analyticsSource) && void 0 !== n ? n : null, r = e.initialProductSkuId;
  },
  COLLECTIBLES_SHOP_CLOSE: E,
  COLLECTIBLES_PRODUCT_DETAILS_OPEN: e => {
e.item.skuId === r && (r = void 0);
  },
  LOGOUT: E
});