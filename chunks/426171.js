"use strict";
t.d(s, {
  Kp: function() {
    return g
  },
  u9: function() {
    return m
  },
  xV: function() {
    return h
  }
}), t(757143), t(47120), t(653041);
var n = t(470079),
  a = t(266067),
  i = t(442837),
  l = t(607070),
  r = t(100527),
  o = t(906732),
  c = t(328347),
  u = t(237031),
  d = t(981631);
let C = "".concat("#").concat("itemSkuId", "="),
  E = new RegExp("^".concat(C, "(\\d+)$")),
  f = [d.Z5c.COLLECTIBLES_SHOP, d.Z5c.COLLECTIBLES_SHOP_FULLSCREEN],
  m = e => {
    let s = (0, a.TH)();
    n.useEffect(() => {
      if (null != e && f.includes(s.pathname)) return window.location.replace("".concat(C).concat(e.skuId)), () => {
        window.location.hash.startsWith(C) && window.location.replace("#")
      }
    }, [])
  },
  p = e => {
    let {
      categories: s,
      productSkuId: t,
      analyticsLocations: n,
      analyticsSource: a,
      initialItemCardRef: i,
      reducedMotion: l = !1
    } = e;
    for (let e of s.values()) {
      let s = e.products.find(e => e.skuId === t);
      if (null != s) {
        var r;
        null === (r = i.current) || void 0 === r || r.scrollIntoView({
          behavior: l ? "instant" : "smooth",
          block: "center",
          inline: "center"
        });
        let t = setTimeout(() => {
          let t = document.getElementById("shop-item-".concat(s.skuId));
          t !== document.activeElement && (null == t || t.focus()), (0, u.T)({
            product: s,
            category: e,
            analyticsSource: a,
            analyticsLocations: n,
            returnRef: i
          })
        }, 750);
        return () => clearTimeout(t)
      }
    }
    return () => {}
  },
  g = e => {
    let {
      categories: s,
      isFetchingCategories: t,
      isLayer: u,
      initialItemCardRef: C
    } = e, f = (0, i.e7)([l.Z], () => l.Z.useReducedMotion), m = n.useRef(null), g = (0, a.TH)(), h = g.pathname === d.Z5c.COLLECTIBLES_SHOP ? r.Z.HOME_PAGE_SHOP_TAB : g.pathname === d.Z5c.COLLECTIBLES_SHOP_FULLSCREEN ? r.Z.COLLECTIBLES_SHOP_FULLSCREEN : r.Z.COLLECTIBLES_SHOP, {
      analyticsLocations: x
    } = (0, o.ZP)(h);
    n.useEffect(() => {
      if (u) return;
      let e = E.exec(g.hash);
      if (null != e) {
        let s = e[1];
        m.current = s
      }
    }, []);
    let _ = (0, i.e7)([c.Z], () => c.Z.initialProductSkuId);
    n.useEffect(() => {
      if (t) return;
      let e = null;
      if (u && null != _ && (e = _), !u && null != m.current && (e = m.current), null != e) {
        let t = [],
          n = setTimeout(() => {
            let n = p({
              categories: s,
              productSkuId: e,
              analyticsLocations: x,
              analyticsSource: h,
              initialItemCardRef: C,
              reducedMotion: f
            });
            t.push(n)
          }, 250);
        return t.push(() => clearTimeout(n)), () => {
          t.forEach(e => e())
        }
      }
    }, [u, x, h, s, t, _, C, f])
  },
  h = e => {
    let s = n.useRef({}),
      t = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
      a = n.useCallback((e, t) => {
        s.current[e] = t
      }, []);
    return {
      setCategoryRef: a,
      handleScrollToCategory: n.useCallback(n => {
        let a = s.current[n];
        null != a && (null == e || e.scrollIntoViewNode({
          node: a,
          padding: 12,
          animate: !t,
          shouldScrollToStart: !0
        }))
      }, [e, t])
    }
  }