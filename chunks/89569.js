"use strict";
a.r(t), a.d(t, {
  useProductDetailsLinkableRoute: function() {
    return C
  },
  useProductDetailsDeepLinking: function() {
    return g
  }
}), a("781738"), a("222007"), a("424973");
var l = a("884691"),
  s = a("803182"),
  r = a("446674"),
  n = a("812204"),
  i = a("685665"),
  o = a("216719"),
  c = a("54809"),
  u = a("49111");
let d = "".concat("#").concat("itemSkuId", "="),
  f = new RegExp("^".concat(d, "(\\d+)$")),
  m = [u.Routes.COLLECTIBLES_SHOP, u.Routes.COLLECTIBLES_SHOP_FULLSCREEN],
  C = e => {
    let t = (0, s.useLocation)();
    l.useEffect(() => {
      if (null != e && m.includes(t.pathname)) return window.location.replace("".concat(d).concat(e.skuId)), () => {
        window.location.hash.startsWith(d) && window.location.replace("#")
      }
    }, [])
  },
  p = e => {
    let {
      categories: t,
      productSkuId: a,
      analyticsLocations: l,
      analyticsSource: s,
      initialItemCardRef: r
    } = e;
    for (let e of t.values()) {
      let t = e.products.find(e => e.skuId === a);
      if (null != t) {
        var n;
        null === (n = r.current) || void 0 === n || n.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center"
        });
        let a = setTimeout(() => {
          let a = document.getElementById("shop-item-".concat(t.skuId));
          a !== document.activeElement && (null == a || a.focus()), (0, c.openCollectiblesShopProductDetailsModal)({
            product: t,
            category: e,
            analyticsSource: s,
            analyticsLocations: l,
            returnRef: r
          })
        }, 750);
        return () => clearTimeout(a)
      }
    }
    return () => {}
  },
  g = e => {
    let {
      categories: t,
      isFetchingCategories: a,
      isLayer: c,
      initialItemCardRef: d
    } = e, m = l.useRef(null), C = (0, s.useLocation)(), g = C.pathname === u.Routes.COLLECTIBLES_SHOP ? n.default.HOME_PAGE_SHOP_TAB : C.pathname === u.Routes.COLLECTIBLES_SHOP_FULLSCREEN ? n.default.COLLECTIBLES_SHOP_FULLSCREEN : n.default.COLLECTIBLES_SHOP, {
      analyticsLocations: E
    } = (0, i.default)(g);
    l.useEffect(() => {
      if (c) return;
      let e = f.exec(C.hash);
      if (null != e) {
        let t = e[1];
        m.current = t
      }
    }, []);
    let h = (0, r.useStateFromStores)([o.default], () => o.default.initialProductSkuId);
    l.useEffect(() => {
      if (a) return;
      let e = null;
      if (c && null != h && (e = h), !c && null != m.current && (e = m.current), null != e) {
        let a = [],
          l = setTimeout(() => {
            let l = p({
              categories: t,
              productSkuId: e,
              analyticsLocations: E,
              analyticsSource: g,
              initialItemCardRef: d
            });
            a.push(l)
          }, 250);
        return a.push(() => clearTimeout(l)), () => {
          a.forEach(e => e())
        }
      }
    }, [c, E, g, t, a, h, d])
  }