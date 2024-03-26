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
  r = a("803182"),
  s = a("446674"),
  n = a("812204"),
  o = a("685665"),
  i = a("216719"),
  u = a("54809"),
  c = a("49111");
let d = "".concat("#").concat("itemSkuId", "="),
  f = new RegExp("^".concat(d, "(\\d+)$")),
  m = [c.Routes.COLLECTIBLES_SHOP, c.Routes.COLLECTIBLES_SHOP_FULLSCREEN],
  C = e => {
    let t = (0, r.useLocation)();
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
      analyticsSource: r,
      initialItemCardRef: s
    } = e;
    for (let e of t.values()) {
      let t = e.products.find(e => e.skuId === a);
      if (null != t) {
        var n;
        null === (n = s.current) || void 0 === n || n.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center"
        });
        let a = setTimeout(() => {
          let a = document.getElementById("shop-item-".concat(t.skuId));
          a !== document.activeElement && (null == a || a.focus()), (0, u.openCollectiblesShopProductDetailsModal)({
            product: t,
            category: e,
            analyticsSource: r,
            analyticsLocations: l,
            returnRef: s
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
      isLayer: u,
      initialItemCardRef: d
    } = e, m = l.useRef(null), C = (0, r.useLocation)(), g = C.pathname === c.Routes.COLLECTIBLES_SHOP ? n.default.HOME_PAGE_SHOP_TAB : C.pathname === c.Routes.COLLECTIBLES_SHOP_FULLSCREEN ? n.default.COLLECTIBLES_SHOP_FULLSCREEN : n.default.COLLECTIBLES_SHOP, {
      analyticsLocations: h
    } = (0, o.default)(g);
    l.useEffect(() => {
      if (u) return;
      let e = f.exec(C.hash);
      if (null != e) {
        let t = e[1];
        m.current = t
      }
    }, []);
    let E = (0, s.useStateFromStores)([i.default], () => i.default.initialProductSkuId);
    l.useEffect(() => {
      if (a) return;
      let e = null;
      if (u && null != E && (e = E), !u && null != m.current && (e = m.current), null != e) {
        let a = [],
          l = setTimeout(() => {
            let l = p({
              categories: t,
              productSkuId: e,
              analyticsLocations: h,
              analyticsSource: g,
              initialItemCardRef: d
            });
            a.push(l)
          }, 250);
        return a.push(() => clearTimeout(l)), () => {
          a.forEach(e => e())
        }
      }
    }, [u, h, g, t, a, E, d])
  }