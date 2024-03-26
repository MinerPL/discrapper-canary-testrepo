"use strict";
a.r(t), a.d(t, {
  useProductDetailsLinkableRoute: function() {
    return C
  },
  useProductDetailsDeepLinking: function() {
    return g
  }
}), a("781738"), a("222007"), a("424973");
var s = a("884691"),
  r = a("803182"),
  l = a("446674"),
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
    s.useEffect(() => {
      if (null != e && m.includes(t.pathname)) return window.location.replace("".concat(d).concat(e.skuId)), () => {
        window.location.hash.startsWith(d) && window.location.replace("#")
      }
    }, [])
  },
  p = e => {
    let {
      categories: t,
      productSkuId: a,
      analyticsLocations: s,
      analyticsSource: r,
      initialItemCardRef: l
    } = e;
    for (let e of t.values()) {
      let t = e.products.find(e => e.skuId === a);
      if (null != t) {
        var n;
        null === (n = l.current) || void 0 === n || n.scrollIntoView({
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
            analyticsLocations: s,
            returnRef: l
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
    } = e, m = s.useRef(null), C = (0, r.useLocation)(), g = C.pathname === c.Routes.COLLECTIBLES_SHOP ? n.default.HOME_PAGE_SHOP_TAB : C.pathname === c.Routes.COLLECTIBLES_SHOP_FULLSCREEN ? n.default.COLLECTIBLES_SHOP_FULLSCREEN : n.default.COLLECTIBLES_SHOP, {
      analyticsLocations: h
    } = (0, o.default)(g);
    s.useEffect(() => {
      if (u) return;
      let e = f.exec(C.hash);
      if (null != e) {
        let t = e[1];
        m.current = t
      }
    }, []);
    let E = (0, l.useStateFromStores)([i.default], () => i.default.initialProductSkuId);
    s.useEffect(() => {
      if (a) return;
      let e = null;
      if (u && null != E && (e = E), !u && null != m.current && (e = m.current), null != e) {
        let a = [],
          s = setTimeout(() => {
            let s = p({
              categories: t,
              productSkuId: e,
              analyticsLocations: h,
              analyticsSource: g,
              initialItemCardRef: d
            });
            a.push(s)
          }, 250);
        return a.push(() => clearTimeout(s)), () => {
          a.forEach(e => e())
        }
      }
    }, [u, h, g, t, a, E, d])
  }