"use strict";
a.r(t), a.d(t, {
  useProductDetailsLinkableRoute: function() {
    return p
  },
  useProductDetailsDeepLinking: function() {
    return C
  }
}), a("781738"), a("222007"), a("424973");
var r = a("884691"),
  s = a("803182"),
  l = a("446674"),
  n = a("812204"),
  i = a("685665"),
  o = a("216719"),
  c = a("54809"),
  u = a("49111");
let d = "".concat("#").concat("itemSkuId", "="),
  f = new RegExp("^".concat(d, "(\\d+)$")),
  m = [u.Routes.COLLECTIBLES_SHOP, u.Routes.COLLECTIBLES_SHOP_FULLSCREEN],
  p = e => {
    let t = (0, s.useLocation)();
    r.useEffect(() => {
      if (null != e && m.includes(t.pathname)) return window.location.replace("".concat(d).concat(e.skuId)), () => {
        window.location.hash.startsWith(d) && window.location.replace("#")
      }
    }, [])
  },
  g = e => {
    let {
      categories: t,
      productSkuId: a,
      analyticsLocations: r,
      analyticsSource: s,
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
          a !== document.activeElement && (null == a || a.focus()), (0, c.openCollectiblesShopProductDetailsModal)({
            product: t,
            category: e,
            analyticsSource: s,
            analyticsLocations: r,
            returnRef: l
          })
        }, 750);
        return () => clearTimeout(a)
      }
    }
    return () => {}
  },
  C = e => {
    let {
      categories: t,
      isFetchingCategories: a,
      isLayer: c,
      initialItemCardRef: d
    } = e, m = r.useRef(null), p = (0, s.useLocation)(), C = p.pathname === u.Routes.COLLECTIBLES_SHOP ? n.default.HOME_PAGE_SHOP_TAB : p.pathname === u.Routes.COLLECTIBLES_SHOP_FULLSCREEN ? n.default.COLLECTIBLES_SHOP_FULLSCREEN : n.default.COLLECTIBLES_SHOP, {
      analyticsLocations: h
    } = (0, i.default)(C);
    r.useEffect(() => {
      if (c) return;
      let e = f.exec(p.hash);
      if (null != e) {
        let t = e[1];
        m.current = t
      }
    }, []);
    let E = (0, l.useStateFromStores)([o.default], () => o.default.initialProductSkuId);
    r.useEffect(() => {
      if (a) return;
      let e = null;
      if (c && null != E && (e = E), !c && null != m.current && (e = m.current), null != e) {
        let a = [],
          r = setTimeout(() => {
            let r = g({
              categories: t,
              productSkuId: e,
              analyticsLocations: h,
              analyticsSource: C,
              initialItemCardRef: d
            });
            a.push(r)
          }, 250);
        return a.push(() => clearTimeout(r)), () => {
          a.forEach(e => e())
        }
      }
    }, [c, h, C, t, a, E, d])
  }